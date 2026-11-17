import { execFile, execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import os from 'node:os'
// Không có Drive (vd build trên Vercel/CI): trả về '' để build vẫn qua, web chạy với dữ liệu rỗng. Dữ liệu thật chỉ có khi chạy local với WORKING_ROOT.
function workingRoot(): string {
  const r = process.env.WORKING_ROOT || loadEnv('development', import.meta.dirname, '')['WORKING_ROOT']
  return r && fs.existsSync(r) ? r : ''
}
const KEY_FILE = path.join(os.homedir(), '.config', 'store-hub', '.env.local')
// Mỗi store một key cố định: biến ZERNIO_API_KEY_<ID_STORE_VIẾT_HOA> (vd ZERNIO_API_KEY_AQUANEST, ZERNIO_API_KEY_HEARTBOND, ZERNIO_API_KEY_WHISKERWALL).
// Không có key chung để dự phòng, tránh đăng nhầm sang store khác. Đọc từ KEY_FILE rồi tới .env.local của project, chỉ ở phía server.
function zernioKey(storeId: string): string {
  const name = 'ZERNIO_API_KEY_' + storeId.toUpperCase().replace(/[^A-Z0-9]/g, '_')
  try { const m = fs.readFileSync(KEY_FILE, 'utf8').match(new RegExp('^' + name + '=(.*)$', 'm')); if (m) return m[1].trim() } catch {}
  return loadEnv('development', import.meta.dirname, '')[name] ?? ''
}

// Dữ liệu seed nằm trong Drive (nguồn chính), không nằm trong code: module ảo 'virtual:working-data' đọc
// 0-dashboard/dashboard-data/dashboard.json và 1-dropship/stores/<id>/store.json (thứ tự: stores/_index.json). Sửa JSON rồi tải lại trang.
function workingDataPlugin(): Plugin {
  const ID = 'virtual:working-data'
  return {
    name: 'working-data',
    resolveId(id) { return id === ID ? '\0' + ID : null },
    load(id) {
      if (id !== '\0' + ID) return null
      const root = workingRoot()
      if (!root) {
        const empty = { snapshotAt: '', source: 'Chưa có dữ liệu (không tìm thấy WORKING_ROOT khi build)', focus: null, milestones: [], lastUpdate: { at: new Date().toISOString(), text: '' }, events: [], tasks: [], todo: [], idea: [], done: [], widgets: [] }
        return `export const DASH_SEED_REV = 0\nexport const DASH_SEED = ${JSON.stringify(empty)}\nexport const SEED_STORES = []\n`
      }
      const rd = (rel: string) => { const f = path.join(root, rel); this.addWatchFile(f); return JSON.parse(fs.readFileSync(f, 'utf8')) }
      const dash = rd('0-dashboard/dashboard-data/dashboard.json')
      const order: string[] = rd('1-dropship/stores/_index.json').order
      const stores = order.map((sid) => rd(`1-dropship/stores/${sid}/store.json`))
      return `export const DASH_SEED_REV = ${JSON.stringify(dash.rev)}\nexport const DASH_SEED = ${JSON.stringify(dash.data)}\nexport const SEED_STORES = ${JSON.stringify(stores)}\n`
    },
  }
}

// Dev/preview only: phục vụ video và ảnh từ thư mục "working" (cha của 1-dropship) tại /media/<đường dẫn tương đối>.
// Chỉ đọc, chỉ video/ảnh, chặn ../ để không lộ file khác. Bản deploy thật sẽ dùng storage (Supabase) thay thế.
const TYPES: Record<string, string> = {
  '.mp4': 'video/mp4', '.mov': 'video/quicktime', '.webm': 'video/webm',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
}
function mediaPlugin(): Plugin {
  const root = workingRoot()
  if (!root) return { name: 'store-hub-noop' }
  const handler = (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse, next: () => void) => {
    if (req.url?.startsWith('/drive-id/')) {
      // Dev only: đọc ID file Google Drive (xattr của Drive for desktop) để dựng link mở trên Drive.
      let r: string
      try { r = decodeURIComponent(req.url.slice('/drive-id/'.length).split('?')[0]) } catch { res.statusCode = 400; return res.end() }
      const f = path.resolve(root, r)
      res.setHeader('Content-Type', 'application/json')
      if (!f.startsWith(root + path.sep) || !fs.existsSync(f)) { res.statusCode = 404; return res.end('{}') }
      return execFile('xattr', ['-p', 'com.google.drivefs.item-id#S', f], (err, out) => {
        const id = err ? '' : out.trim()
        res.end(JSON.stringify(id ? { url: `https://drive.google.com/file/d/${id}/view` } : {}))
      })
    }
    if (req.url?.startsWith('/preview/')) {
      // Dev only: xem trước file trong web. Chỉ đọc, chặn ../. pdf/ảnh: trả thẳng; md/txt/csv: văn bản; xlsx: đọc bằng python3+openpyxl (tối đa 150 dòng x 26 cột mỗi sheet).
      let r: string
      try { r = decodeURIComponent(req.url.slice('/preview/'.length).split('?')[0]) } catch { res.statusCode = 400; return res.end() }
      const f = path.resolve(root, r)
      const ext = path.extname(f).toLowerCase()
      if (!f.startsWith(root + path.sep) || !fs.existsSync(f) || !fs.statSync(f).isFile()) { res.statusCode = 404; return res.end('not found') }
      const bin: Record<string, string> = { '.pdf': 'application/pdf', ...TYPES }
      if (bin[ext]) { res.setHeader('Content-Type', bin[ext]); res.setHeader('Content-Disposition', 'inline'); return fs.createReadStream(f).pipe(res) }
      if (ext === '.html') { res.setHeader('Content-Type', 'text/html; charset=utf-8'); return fs.createReadStream(f).pipe(res) }
      if (['.md', '.txt', '.csv', '.json'].includes(ext)) { res.setHeader('Content-Type', 'text/plain; charset=utf-8'); return res.end(fs.readFileSync(f, 'utf-8').slice(0, 400000)) }
      if (ext === '.xlsx') {
        const py = `
import sys,json,openpyxl

f=sys.argv[1]
wv=openpyxl.load_workbook(f,data_only=True); wf=openpyxl.load_workbook(f)
out=[]
for ws in wv:
    fs_=wf[ws.title]; rows=[]
    for r in range(1,min(ws.max_row,150)+1):
        row=[]
        for c in range(1,min(ws.max_column,26)+1):
            v=ws.cell(r,c).value
            if v is None:
                fv=fs_.cell(r,c).value
                v=fv if isinstance(fv,str) and fv.startswith('=') else ''
            row.append(str(v))
        rows.append(row)
    out.append({'name':ws.title,'rows':rows,'totalRows':ws.max_row,'totalCols':ws.max_column})
print(json.dumps(out,ensure_ascii=False))`
        return execFile('python3', ['-c', py, f], { maxBuffer: 20 * 1024 * 1024 }, (err, stdout) => {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          if (err) { res.statusCode = 500; return res.end(JSON.stringify({ error: String(err) })) }
          res.end(stdout)
        })
      }
      res.statusCode = 415
      return res.end('unsupported')
    }
    if (req.url?.startsWith('/mockup/')) {
      // Dev only: phục vụ mockup HTML của store từ stores/<store>/4-shopify/mockup/ (html/css/js/ảnh/font). Chỉ đọc, store theo whitelist, chặn ../.
      const m = /^\/mockup\/([a-z0-9-]+)(\/[^?]*)?/.exec(req.url)
      if (!m) { res.statusCode = 404; return res.end('not found') }
      let sub: string
      try { sub = decodeURIComponent(m[2] ?? '/') } catch { res.statusCode = 400; return res.end() }
      if (!m[2]) { res.statusCode = 302; res.setHeader('Location', `/mockup/${m[1]}/`); return res.end() }
      if (sub.endsWith('/')) sub += 'index.html'
      const base = path.resolve(root, '1-dropship/stores', m[1], '4-shopify/mockup')
      const f = path.resolve(base, '.' + sub)
      const mt: Record<string, string> = { ...TYPES, '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon' }
      const t = mt[path.extname(f).toLowerCase()]
      if (!f.startsWith(base + path.sep) || !t || !fs.existsSync(f) || !fs.statSync(f).isFile()) { res.statusCode = 404; return res.end('not found') }
      res.setHeader('Content-Type', t)
      return fs.createReadStream(f).pipe(res)
    }
    if (req.url?.startsWith('/open-refs') && req.method === 'POST') {
      // Dev only: gom các file ref (video/ảnh) vào ~/Downloads/store-hub-refs/<tên>/ rồi mở thư mục đó trong Finder để kéo thả lên Higgsfield/Flow.
      let b = ''
      req.on('data', (c) => { b += c })
      req.on('end', () => {
        res.setHeader('Content-Type', 'application/json')
        try {
          const j = JSON.parse(b) as { name?: string; paths?: string[] }
          const name = (j.name ?? 'refs').replace(/[^A-Za-z0-9._-]/g, '_').slice(0, 60) || 'refs'
          const files = (j.paths ?? []).map((r) => path.resolve(root, r))
          if (!files.length || files.some((f) => !f.startsWith(root + path.sep) || !TYPES[path.extname(f).toLowerCase()] || !fs.existsSync(f) || !fs.statSync(f).isFile())) { res.statusCode = 400; return res.end('{"error":"file không hợp lệ"}') }
          const dest = path.join(process.env.HOME ?? '', 'Downloads', 'store-hub-refs', name)
          fs.mkdirSync(dest, { recursive: true })
          files.forEach((f, i) => fs.copyFileSync(f, path.join(dest, `${i + 1}-${path.basename(f)}`)))
          execFile('open', [dest], () => {})
          res.end(JSON.stringify({ ok: true, dest }))
        } catch { res.statusCode = 400; res.end('{"error":"bad request"}') }
      })
      return
    }
    if (!req.url?.startsWith('/media/')) return next()
    let rel: string
    try { rel = decodeURIComponent(req.url.slice('/media/'.length).split('?')[0]) } catch { res.statusCode = 400; return res.end() }
    const file = path.resolve(root, rel)
    const type = TYPES[path.extname(file).toLowerCase()]
    if (!file.startsWith(root + path.sep) || !type || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.statusCode = 404
      return res.end('not found')
    }
    const size = fs.statSync(file).size
    const range = /bytes=(\d*)-(\d*)/.exec(req.headers.range ?? '')
    res.setHeader('Content-Type', type)
    res.setHeader('Accept-Ranges', 'bytes')
    if (/[?&]download=1/.test(req.url ?? '')) res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(path.basename(file))}`)
    if (range && (range[1] || range[2])) {
      const start = range[1] ? parseInt(range[1], 10) : Math.max(0, size - parseInt(range[2], 10))
      const end = range[1] && range[2] ? Math.min(parseInt(range[2], 10), size - 1) : size - 1
      if (start > end || start >= size) { res.statusCode = 416; return res.end() }
      res.statusCode = 206
      res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`)
      res.setHeader('Content-Length', end - start + 1)
      fs.createReadStream(file, { start, end }).pipe(res)
    } else {
      res.setHeader('Content-Length', size)
      fs.createReadStream(file).pipe(res)
    }
  }
  return {
    name: 'store-hub-media',
    configureServer(s) { s.middlewares.use(handler) },
    configurePreviewServer(s) { s.middlewares.use(handler) },
  }
}

// Dev/preview only: cầu nối tới Zernio (zernio.com/api/v1). Key đọc từ .env.local ở phía server, không đưa vào code trình duyệt.
// GET /zernio/accounts: danh sách kênh đã nối. POST /zernio/publish: upload video lên Zernio rồi tạo bài nháp hoặc hẹn giờ (mode now = đăng ngay, chỉ khi người dùng bấm nút Đăng ngay).
function zernioPlugin(): Plugin {
  const root = workingRoot()
  if (!root) return { name: 'store-hub-noop' }
  const API = 'https://zernio.com/api/v1'
  const json = (res: import('node:http').ServerResponse, code: number, body: unknown) => {
    res.statusCode = code
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body))
  }
  const call = async (key: string, p: string, init: RequestInit = {}) => {
    const r = await fetch(API + p, { ...init, headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', ...(init.headers ?? {}) } })
    const text = await r.text()
    let data: unknown = text
    try { data = JSON.parse(text) } catch { /* giữ nguyên text */ }
    return { ok: r.ok, status: r.status, data }
  }
  const readBody = (req: import('node:http').IncomingMessage) => new Promise<string>((resolve) => {
    let b = ''
    req.on('data', (c) => { b += c })
    req.on('end', () => resolve(b))
  })
  const handler = async (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse, next: () => void) => {
    const url = req.url?.split('?')[0]
    if (url !== '/zernio/accounts' && url !== '/zernio/publish') return next()
    try {
      const qs = new URLSearchParams(req.url?.split('?')[1] ?? '')
      if (url === '/zernio/accounts' && req.method === 'GET') {
        const sid = qs.get('store') ?? ''
        const k = sid ? zernioKey(sid) : ''
        if (!k) return json(res, 500, { error: `Thiếu key Zernio của store "${sid}": đặt ZERNIO_API_KEY_${sid.toUpperCase().replace(/[^A-Z0-9]/g, '_')} trong .env.local` })
        const r = await call(k, '/accounts')
        return json(res, r.status, r.data)
      }
      if (url === '/zernio/publish' && req.method === 'POST') {
        const b = JSON.parse(await readBody(req)) as { storeId?: string; mediaPath?: string; caption: string; platform: string; accountId: string; mode: 'draft' | 'schedule' | 'now'; scheduledFor?: string; timezone?: string; title?: string }
        const k = b.storeId ? zernioKey(b.storeId) : ''
        if (!k) return json(res, 500, { error: `Thiếu key Zernio của store "${b.storeId ?? ''}"` })
        if (!['draft', 'schedule', 'now'].includes(b.mode)) return json(res, 400, { error: 'mode phải là draft, schedule hoặc now' })
        if (b.mode === 'schedule' && !b.scheduledFor) return json(res, 400, { error: 'Thiếu giờ hẹn' })
        let mediaItems: { type: string; url: string }[] | undefined
        if (b.mediaPath && !/^https?:/.test(b.mediaPath)) {
          const file = path.resolve(root, b.mediaPath)
          const type = TYPES[path.extname(file).toLowerCase()]
          if (!file.startsWith(root + path.sep) || !type || !fs.existsSync(file)) return json(res, 404, { error: 'Không thấy file media' })
          const buf = fs.readFileSync(file)
          const pre = await call(k, '/media/presign', { method: 'POST', body: JSON.stringify({ filename: path.basename(file), contentType: type, size: buf.length }) })
          const pd = pre.data as { uploadUrl?: string; publicUrl?: string }
          if (!pre.ok || !pd.uploadUrl || !pd.publicUrl) return json(res, pre.status || 502, { step: 'presign', detail: pre.data })
          const up = await fetch(pd.uploadUrl, { method: 'PUT', headers: { 'Content-Type': type }, body: buf })
          if (!up.ok) return json(res, 502, { step: 'upload', detail: `PUT ${up.status}` })
          mediaItems = [{ type: type.startsWith('video') ? 'video' : 'image', url: pd.publicUrl }]
        } else if (b.mediaPath) {
          mediaItems = [{ type: /\.(png|jpe?g|gif|webp)$/i.test(b.mediaPath) ? 'image' : 'video', url: b.mediaPath }]
        }
        const body: Record<string, unknown> = {
          content: b.caption,
          ...(b.title ? { title: b.title } : {}),
          ...(mediaItems ? { mediaItems } : {}),
          platforms: [{ platform: b.platform, accountId: b.accountId }],
          ...(b.mode === 'schedule' ? { scheduledFor: b.scheduledFor, timezone: b.timezone ?? 'Asia/Ho_Chi_Minh' } : b.mode === 'now' ? { publishNow: true } : { isDraft: true }),
        }
        const r = await call(k, '/posts', { method: 'POST', body: JSON.stringify(body), headers: { 'Idempotency-Key': crypto.randomUUID() } })
        return json(res, r.status, r.data)
      }
      return json(res, 405, { error: 'method not allowed' })
    } catch (e) {
      return json(res, 500, { error: String(e) })
    }
  }
  return {
    name: 'store-hub-zernio',
    configureServer(s) { s.middlewares.use(handler) },
    configurePreviewServer(s) { s.middlewares.use(handler) },
  }
}


// Dev/preview only: cầu nối đọc trạng thái task từ Jira (REST API v3). Thông tin đăng nhập đọc từ .env.local ở phía server
// (JIRA_SITE, JIRA_EMAIL, JIRA_API_TOKEN), không đưa vào trình duyệt. Chỉ đọc, không ghi lên Jira.

// ADF (mô tả Jira) -> các mục theo tiêu đề: Input/Output là danh sách link, Progress/Next/Blocker/Mục tiêu là chữ.
type Adf = { type?: string; text?: string; content?: Adf[]; marks?: { type: string; attrs?: { href?: string } }[]; attrs?: { url?: string; level?: number } }
function adfLines(n: Adf, out: { text: string; links: { label: string; url: string }[]; head?: string }[]) {
  const plain = (x: Adf): string => (x.text ?? '') + (x.content ?? []).map(plain).join('')
  const links = (x: Adf, acc: { label: string; url: string }[]) => {
    const href = x.marks?.find((m) => m.type === 'link')?.attrs?.href
    if (href) acc.push({ label: x.text ?? href, url: href })
    if (x.type === 'inlineCard' && x.attrs?.url) acc.push({ label: x.attrs.url, url: x.attrs.url })
    ;(x.content ?? []).forEach((c) => links(c, acc))
  }
  for (const c of n.content ?? []) {
    if (c.type === 'heading') out.push({ text: plain(c), links: [], head: plain(c) })
    else if (c.type === 'bulletList' || c.type === 'orderedList') for (const li of c.content ?? []) { const l: { label: string; url: string }[] = []; links(li, l); out.push({ text: plain(li), links: l }) }
    else { const l: { label: string; url: string }[] = []; links(c, l); out.push({ text: plain(c), links: l }) }
  }
}
function jiraSections(desc: Adf | null | undefined) {
  const lines: Parameters<typeof adfLines>[1] = []
  if (desc) adfLines(desc, lines)
  const key = (h: string) => ({ input: 'input', output: 'output', progress: 'progress', next: 'next', blocker: 'blocker', 'mục tiêu': 'objective', 'mục tiêu / mô tả': 'objective', requirement: 'requirement', requirements: 'requirement', 'yêu cầu': 'requirement', verify: 'verify', 'kiểm tra': 'verify', done: 'done', 'đã xong': 'done' } as Record<string, string>)[h.trim().toLowerCase()]
  const sec: Record<string, { text: string[]; links: { label: string; url: string }[] }> = {}
  let cur = ''
  for (const l of lines) {
    if (l.head !== undefined) { cur = key(l.head) ?? ''; if (cur) sec[cur] ??= { text: [], links: [] }; continue }
    if (!cur) continue
    if (l.text.trim()) sec[cur].text.push(l.text.trim())
    sec[cur].links.push(...l.links)
  }
  return Object.keys(sec).length ? sec : null
}
function jiraPlugin(): Plugin {
  const handler = async (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse, next: () => void) => {
    if (req.url?.split('?')[0] !== '/jira/tasks') return next()
    const send = (code: number, body: unknown) => { res.statusCode = code; res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(body)) }
    const env = loadEnv('development', import.meta.dirname, '')
    const site = (env['JIRA_SITE'] ?? '').replace(/^https?:\/\//, '').replace(/\/$/, '')
    const email = env['JIRA_EMAIL'] ?? '', token = env['JIRA_API_TOKEN'] ?? ''
    if (!site || !email || !token) return send(500, { error: 'Thiếu JIRA_SITE, JIRA_EMAIL hoặc JIRA_API_TOKEN trong .env.local' })
    const auth = 'Basic ' + Buffer.from(`${email}:${token}`).toString('base64')
    const jqls = ['project in (KAN, GA, GEN) AND statusCategory != Done ORDER BY key ASC', 'project in (KAN, GA, GEN) AND statusCategory = Done AND updated >= -14d ORDER BY key ASC']
    try {
      const issues: { key: string; t: string; status: string; sections?: ReturnType<typeof jiraSections> }[] = []
      for (const jql of jqls) {
        let pageToken = ''
        for (let i = 0; i < 5; i++) {
          const q = new URLSearchParams({ jql, fields: 'summary,status,description,comment', maxResults: '100' })
          if (pageToken) q.set('nextPageToken', pageToken)
          const r = await fetch(`https://${site}/rest/api/3/search/jql?${q}`, { headers: { Authorization: auth, Accept: 'application/json' } })
          const j = (await r.json()) as { issues?: { key: string; fields: { summary: string; status: { name: string }; description?: Adf | null; comment?: { comments?: { body?: Adf }[] } } }[]; nextPageToken?: string; errorMessages?: string[] }
          if (!r.ok) return send(r.status, { error: j.errorMessages?.join('; ') || `Jira trả ${r.status}` })
          for (const it of j.issues ?? []) issues.push({ key: it.key, t: it.fields.summary, status: it.fields.status.name, sections: (it.fields.comment?.comments ?? []).slice().reverse().map((c) => jiraSections(c.body)).find(Boolean) ?? jiraSections(it.fields.description) })
          if (!j.nextPageToken) break
          pageToken = j.nextPageToken
        }
      }
      send(200, { issues, fetchedAt: new Date().toISOString() })
    } catch (e) { send(500, { error: String(e) }) }
  }
  return {
    name: 'store-hub-jira',
    configureServer(s) { s.middlewares.use(handler) },
    configurePreviewServer(s) { s.middlewares.use(handler) },
  }
}


// Dev/preview only: danh sách tài liệu trong 1-dropship/docs kèm link Drive (đọc item-id Drive của từng file), để trang Tài liệu hiển thị.
function docsPlugin(): Plugin {
  const root = workingRoot()
  if (!root) return { name: 'store-hub-noop' }
  const base = path.join(root, '1-dropship', 'docs')
  let cache: { at: number; body: string } | null = null
  const driveId = (f: string): string => {
    try { return execFileSync('xattr', ['-p', 'com.google.drivefs.item-id#S', f], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() } catch { return '' }
  }
  const walk = (dir: string, depth: number): { path: string; name: string; dir: boolean; size: number; mtime: number; url: string }[] => {
    const out: { path: string; name: string; dir: boolean; size: number; mtime: number; url: string }[] = []
    for (const n of fs.readdirSync(dir).sort()) {
      if (n.startsWith('.') || n.startsWith('~$')) continue
      const f = path.join(dir, n), st = fs.statSync(f), id = driveId(f)
      out.push({ path: path.relative(root, f), name: n, dir: st.isDirectory(), size: st.size, mtime: st.mtimeMs, url: id ? (st.isDirectory() ? 'https://drive.google.com/drive/folders/' : 'https://drive.google.com/file/d/') + id + (st.isDirectory() ? '' : '/view') : '' })
      if (st.isDirectory() && depth < 3) out.push(...walk(f, depth + 1))
    }
    return out
  }
  const handler = (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse, next: () => void) => {
    if (req.url?.split('?')[0] !== '/docs/tree') return next()
    res.setHeader('Content-Type', 'application/json')
    try {
      if (!cache || Date.now() - cache.at > 60000) cache = { at: Date.now(), body: JSON.stringify({ base: path.relative(root, base), items: walk(base, 1) }) }
      res.end(cache.body)
    } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: String(e) })) }
  }
  return {
    name: 'store-hub-docs',
    configureServer(s) { s.middlewares.use(handler) },
    configurePreviewServer(s) { s.middlewares.use(handler) },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), workingDataPlugin(), mediaPlugin(), zernioPlugin(), jiraPlugin(), docsPlugin()],
})
