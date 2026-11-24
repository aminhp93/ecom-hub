import { execFile, execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import os from 'node:os'
import { createHash } from 'node:crypto'
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
  let isBuild = false
  return {
    name: 'working-data',
    configResolved(c) { isBuild = c.command === 'build' },
    resolveId(id) { return id === ID ? '\0' + ID : null },
    load(id) {
      if (id !== '\0' + ID) return null
      const root = workingRoot()
      if (!root) {
        const empty = { snapshotAt: '', source: 'Chưa có dữ liệu (không tìm thấy WORKING_ROOT khi build)', focus: null, milestones: [], lastUpdate: { at: new Date().toISOString(), text: '' }, events: [], tasks: [], todo: [], idea: [], done: [], widgets: [] }
        return `export const DASH_SEED_REV = 0\nexport const DASH_SEED = ${JSON.stringify(empty)}\nexport const SEED_STORES = []\nexport const TODAY_DAYS = []\n`
      }
      const rd = (rel: string) => { const f = path.join(root, rel); this.addWatchFile(f); return JSON.parse(fs.readFileSync(f, 'utf8')) }
      const dash = rd('0-dashboard/dashboard-data/dashboard.json')
      const order: string[] = rd('1-dropship/stores/_index.json').order
      const stores = order.map((sid) => rd(`1-dropship/stores/${sid}/store.json`))
      // Tab "Hôm nay": mỗi ngày một file today/YYYY-MM-DD.json. Bản nháp (status khác "published") chỉ nạp khi chạy dev; build/publish bỏ hết.
      const tdir = path.join(root, '0-dashboard/dashboard-data/today')
      let days: unknown[] = []
      try {
        days = fs.readdirSync(tdir).filter((n) => /^\d{4}-\d{2}-\d{2}\.json$/.test(n)).sort().flatMap((n) => {
          try { const f = path.join(tdir, n); this.addWatchFile(f); const j = JSON.parse(fs.readFileSync(f, 'utf8')); return isBuild && j.status !== 'published' ? [] : [j] } catch { return [] }
        })
      } catch { /* chưa có thư mục today/ thì rỗng */ }
      return `export const DASH_SEED_REV = ${JSON.stringify(dash.rev)}\nexport const DASH_SEED = ${JSON.stringify(dash.data)}\nexport const SEED_STORES = ${JSON.stringify(stores)}\nexport const TODAY_DAYS = ${JSON.stringify(days)}\n`
    },
  }
}

// Dev/preview only: phục vụ video và ảnh từ thư mục "working" (cha của 1-dropship) tại /media/<đường dẫn tương đối>.
// Chỉ đọc, chỉ video/ảnh, chặn ../ để không lộ file khác. Bản deploy thật sẽ dùng storage (Supabase) thay thế.
const TYPES: Record<string, string> = {
  '.mp4': 'video/mp4', '.mov': 'video/quicktime', '.webm': 'video/webm',
  '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.m4a': 'audio/mp4', '.aac': 'audio/aac',
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
    if (req.url?.startsWith('/ls/')) {
      // Dev only (KAN-129/UI-CREATIVE): liệt kê file (đệ quy tối đa 2 cấp) trong một thư mục dưới Working. Chỉ đọc, chặn ../.
      let r: string
      try { r = decodeURIComponent(req.url.slice('/ls/'.length).split('?')[0]) } catch { res.statusCode = 400; return res.end() }
      const d = path.resolve(root, r)
      res.setHeader('Content-Type', 'application/json')
      if (!d.startsWith(root + path.sep) || !fs.existsSync(d) || !fs.statSync(d).isDirectory()) { res.statusCode = 404; return res.end('[]') }
      const out: { path: string; size: number }[] = []
      const walk = (dir: string, depth: number) => { for (const n of fs.readdirSync(dir)) { if (n.startsWith('.')) continue; const f = path.join(dir, n); const st = fs.statSync(f); if (st.isDirectory()) { if (depth < 2) walk(f, depth + 1) } else out.push({ path: path.relative(root, f), size: st.size }) } }
      walk(d, 1)
      return res.end(JSON.stringify(out))
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
    if (url !== '/zernio/accounts' && url !== '/zernio/publish' && url !== '/zernio/posts') return next()
    try {
      const qs = new URLSearchParams(req.url?.split('?')[1] ?? '')
      if (url === '/zernio/accounts' && req.method === 'GET') {
        const sid = qs.get('store') ?? ''
        const k = sid ? zernioKey(sid) : ''
        if (!k) return json(res, 500, { error: `Thiếu key Zernio của store "${sid}": đặt ZERNIO_API_KEY_${sid.toUpperCase().replace(/[^A-Z0-9]/g, '_')} trong .env.local` })
        const r = await call(k, '/accounts')
        return json(res, r.status, r.data)
      }
      // GET /zernio/posts?store=<id>&status=&limit=: chuyển nguyên danh sách bài của Zernio để web đồng bộ trạng thái (chỉ đọc).
      if (url === '/zernio/posts' && req.method === 'GET') {
        const sid = qs.get('store') ?? ''
        const k = sid ? zernioKey(sid) : ''
        if (!k) return json(res, 500, { error: `Thiếu key Zernio của store "${sid}"` })
        qs.delete('store')
        const q = qs.toString()
        const r = await call(k, '/posts' + (q ? '?' + q : ''))
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
  const key = (h: string) => ({ input: 'input', output: 'output', progress: 'progress', next: 'next', blocker: 'blocker', 'mục tiêu': 'objective', 'mục tiêu / mô tả': 'objective', requirement: 'requirement', requirements: 'requirement', 'yêu cầu': 'requirement', verify: 'verify', 'kiểm tra': 'verify', done: 'done', 'đã xong': 'done' } as Record<string, string>)[h.replace(/\s*[(（].*$/, '').trim().toLowerCase()]
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

// Dev/preview only: hoạt động của một task cho popup Bắt đầu/Kết thúc phiên làm việc (đồng hồ tập trung):
// comment Jira (log của các agent), file đã đổi trong task-hub/<KEY>/ (Drive) và đoạn cuối bàn giao.
function activityPlugin(): Plugin {
  const root = workingRoot()
  if (!root) return { name: 'store-hub-activity-noop' }
  const plainOf = (x: Adf): string => (x.text ?? '') + (x.content ?? []).map((c) => plainOf(c) + (c.type === 'paragraph' || c.type === 'heading' || c.type === 'listItem' ? '\n' : '')).join('')
  const walk = (dir: string, base: string, depth: number, out: { path: string; mtime: number; size: number }[]) => {
    let names: string[] = []
    try { names = fs.readdirSync(dir) } catch { return }
    for (const n of names) {
      if (n.startsWith('.') || n.startsWith('~$') || n === 'archive' || n === 'node_modules') continue
      const f = path.join(dir, n)
      let st: fs.Stats
      try { st = fs.statSync(f) } catch { continue }
      if (st.isDirectory()) { if (depth < 5 && out.length < 400) walk(f, base, depth + 1, out) } else out.push({ path: path.relative(base, f), mtime: st.mtimeMs, size: st.size })
    }
  }
  const handler = async (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse, next: () => void) => {
    const u = new URL(req.url ?? '', 'http://x')
    if (u.pathname !== '/task/activity') return next()
    const send = (code: number, body: unknown) => { res.statusCode = code; res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(body)) }
    const key = u.searchParams.get('key') ?? ''
    if (!/^[A-Z]{2,5}-\d+$/.test(key)) return send(400, { error: 'key không hợp lệ' })
    const hub = path.join(root, '0-dashboard', 'task-hub', key)
    const files: { path: string; mtime: number; size: number }[] = []
    walk(hub, hub, 0, files)
    files.sort((a, b) => b.mtime - a.mtime)
    let banGiao = ''
    try { const t = fs.readFileSync(path.join(hub, 'progress', 'ban-giao.md'), 'utf8'); banGiao = t.slice(-1500) } catch { /* chưa có */ }
    let jira: { status?: string; summary?: string; sections?: ReturnType<typeof jiraSections>; comments: { id: string; created: string; author: string; text: string }[]; error?: string } = { comments: [] }
    const env = loadEnv('development', import.meta.dirname, '')
    const site = (env['JIRA_SITE'] ?? '').replace(/^https?:\/\//, '').replace(/\/$/, '')
    const email = env['JIRA_EMAIL'] ?? '', token = env['JIRA_API_TOKEN'] ?? ''
    if (site && email && token) {
      try {
        const r = await fetch(`https://${site}/rest/api/3/issue/${key}?fields=summary,status,description,comment`, { headers: { Authorization: 'Basic ' + Buffer.from(`${email}:${token}`).toString('base64'), Accept: 'application/json' } })
        const j = (await r.json()) as { fields?: { summary: string; status: { name: string }; description?: Adf | null; comment?: { comments?: { id: string; created: string; author?: { displayName?: string }; body?: Adf }[] } }; errorMessages?: string[] }
        if (!r.ok || !j.fields) jira.error = j.errorMessages?.join('; ') || `Jira trả ${r.status}`
        else {
          const cs = j.fields.comment?.comments ?? []
          jira = { status: j.fields.status.name, summary: j.fields.summary, sections: cs.slice().reverse().map((c) => jiraSections(c.body)).find(Boolean) ?? jiraSections(j.fields.description), comments: cs.slice(-15).map((c) => ({ id: c.id, created: c.created, author: c.author?.displayName ?? '', text: c.body ? plainOf(c.body).replace(/\n{2,}/g, '\n').trim().slice(0, 1200) : '' })) }
        }
      } catch (e) { jira.error = String(e) }
    } else jira.error = 'Chưa cấu hình Jira cho web (đọc ở phía server)'
    send(200, { key, files: files.slice(0, 200), banGiao, jira, fetchedAt: Date.now() })
  }
  return {
    name: 'store-hub-activity',
    configureServer(s) { s.middlewares.use(handler) },
    configurePreviewServer(s) { s.middlewares.use(handler) },
  }
}

// Dev/preview only: trang Market Research đọc thẳng nguồn trong Drive, không chép tay.
//  - Chuẩn đã duyệt: 1-dropship/docs/1-market-research (Amin sở hữu).
//  - Đề xuất KAN-118: 0-dashboard/task-hub/KAN-118/output (chờ Amin duyệt; cờ duyệt đọc từ dòng "Amin duyệt tiêu chí:" của input/TIEU-CHI.md).
// /research/sources → JSON; /research/section?path=<tương đối từ working>&h=<tiêu đề> → Markdown của mục đó. Chỉ đọc, chỉ 2 thư mục trên.
function researchPlugin(): Plugin {
  const root = workingRoot()
  if (!root) return { name: 'store-hub-research-noop' }
  const STD = '1-dropship/docs/1-market-research'
  const PROP = '0-dashboard/task-hub/KAN-118/output'
  const CRIT = '0-dashboard/task-hub/KAN-118/input/TIEU-CHI.md'
  const driveId = (f: string): string => {
    try { return execFileSync('xattr', ['-p', 'com.google.drivefs.item-id#S', f], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() } catch { return '' }
  }
  const allowed = (rel: string): string | null => {
    const f = path.resolve(root, rel)
    const ok = [STD, PROP].some((d) => f.startsWith(path.join(root, d) + path.sep)) && fs.existsSync(f) && fs.statSync(f).isFile()
    return ok ? f : null
  }
  const info = (dir: string, exts: string[]) => {
    const base = path.join(root, dir)
    let names: string[] = []
    try { names = fs.readdirSync(base).sort() } catch { return [] }
    return names.filter((n) => exts.includes(path.extname(n).toLowerCase())).map((n) => {
      const f = path.join(base, n), st = fs.statSync(f)
      let title = n, version = ''
      if (n.endsWith('.md')) {
        const head = fs.readFileSync(f, 'utf8').slice(0, 3000)
        title = head.match(/^#\s+(.+)$/m)?.[1].replace(/\\/g, '') ?? n
        version = head.match(/\*\*Version:\*\*\s*([^\s·]+)/)?.[1] ?? ''
      }
      const id = driveId(f)
      return { path: `${dir}/${n}`, name: n, title, version, mtime: st.mtimeMs, drive: id ? `https://drive.google.com/file/d/${id}/view` : '' }
    })
  }
  const section = (text: string, h: string): string => {
    const lines = text.replace(/\r/g, '').split('\n')
    const norm = (s: string) => s.toLowerCase().replace(/[`*]/g, '').trim()
    const i = lines.findIndex((l) => /^#{1,6}\s/.test(l) && norm(l.replace(/^#+\s*/, '')).startsWith(norm(h)))
    if (i < 0) return ''
    const lvl = lines[i].match(/^#+/)![0].length
    let j = i + 1
    while (j < lines.length && !(/^#{1,6}\s/.test(lines[j]) && lines[j].match(/^#+/)![0].length <= lvl)) j++
    return lines.slice(i, j).join('\n').trim()
  }
  const handler = (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse, next: () => void) => {
    const u = new URL(req.url ?? '', 'http://x')
    if (!['/research/sources', '/research/section', '/research/file', '/research/runs'].includes(u.pathname)) return next()
    try {
      if (u.pathname === '/research/file') {
        const f = allowed(u.searchParams.get('path') ?? '')
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        if (!f) { res.statusCode = 404; return res.end('not found') }
        return res.end(fs.readFileSync(f, 'utf8'))
      }
      if (u.pathname === '/research/runs') {
        // File run Excel của vòng lặp Market Research (chỉ tên + ngày; web chưa đọc nội dung từng run)
        const dir = path.join(root, '1-dropship/research')
        let names: string[] = []
        try { names = fs.readdirSync(dir).filter((n) => /^MR-\d{8}-R\d+.*\.xlsx$/.test(n)).sort() } catch { /* chưa có thư mục */ }
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify({ dir: '1-dropship/research', runs: names.map((n) => ({ name: n, mtime: fs.statSync(path.join(dir, n)).mtimeMs })) }))
      }
      if (u.pathname === '/research/section') {
        const f = allowed(u.searchParams.get('path') ?? '')
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        if (!f) { res.statusCode = 404; return res.end('not found') }
        return res.end(section(fs.readFileSync(f, 'utf8'), u.searchParams.get('h') ?? ''))
      }
      let approved = false, approvalLine = 'Không đọc được input/TIEU-CHI.md'
      try {
        const t = fs.readFileSync(path.join(root, CRIT), 'utf8')
        const m = t.match(/Amin duyệt tiêu chí:\s*([^)\n]+)/)
        approvalLine = (t.split('\n')[0] ?? '').replace(/^#\s*/, '')
        approved = !!m && !/^\s*(CHƯA|chưa)/.test(m[1])
      } catch { /* giữ mặc định: chưa duyệt */ }
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        standard: { dir: STD, files: info(STD, ['.md']) },
        proposal: { dir: PROP, approved, approvalLine, criteria: CRIT, files: info(PROP, ['.md', '.csv']) },
      }))
    } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: String(e) })) }
  }
  return {
    name: 'store-hub-research',
    configureServer(s) { s.middlewares.use(handler) },
    configurePreviewServer(s) { s.middlewares.use(handler) },
  }
}

// Dev/preview only: cầu nối CHỈ ĐỌC tới worklog chuẩn (worklog/1, KAN-97). Gọi đúng parser chuẩn `quy-trinh/worklog.py` (validate + query --current-session),
// trả nguyên đầu ra worklog-query/1. Không ghi file, không tự lọc/suy thêm. GET /worklog/query?task=KAN-118[&section=A], GET /worklog/active.
function worklogPlugin(): Plugin {
  const root = workingRoot()
  if (!root) return { name: 'store-hub-noop' }
  const script = path.join(root, '0-dashboard', 'quy-trinh', 'worklog.py')
  const hub = path.join(root, '0-dashboard', 'task-hub')
  const run = (args: string[]) => new Promise<{ code: number; out: string }>((resolve) => {
    execFile('python3', [script, ...args], { maxBuffer: 20 * 1024 * 1024, timeout: 15000 }, (err, stdout, stderr) => {
      const code = err ? (typeof (err as { code?: unknown }).code === 'number' ? (err as unknown as { code: number }).code : 1) : 0
      resolve({ code, out: code === 0 ? stdout : stdout + stderr })
    })
  })
  const send = (res: import('node:http').ServerResponse, code: number, body: unknown) => { res.statusCode = code; res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(body)) }
  const one = async (key: string, section?: string) => {
    const v = await run(['validate', key])
    if (v.code !== 0) return { ok: false as const, error: `worklog ${key} không hợp lệ`, details: v.out.split('\n').slice(0, 6).join('\n') }
    const q = await run(['query', key, '--current-session', ...(section ? ['--section', section] : [])])
    if (q.code !== 0) return { ok: false as const, error: 'worklog.py query lỗi', details: q.out.slice(0, 400) }
    try { return { ok: true as const, data: JSON.parse(q.out) } } catch { return { ok: false as const, error: 'đầu ra worklog.py không phải JSON', details: '' } }
  }
  // Tổng kết phiên (worklog-summary/1): dựng CHỈ từ worklog chuẩn (query --current-session, hôm nay, đúng một phiên), tách theo section, mỗi section chia Đã xong / Đang dở (Còn lại, Đang làm, Chờ).
  // Bản lưu là ảnh chụp để xem lại, nằm riêng ở 0-dashboard/dashboard-data/tong-ket/<KEY>/ (không đụng thư mục task, không phải nguồn trạng thái).
  const sumDir = (key: string) => path.join(root, '0-dashboard', 'dashboard-data', 'tong-ket', key)
  type WItem = { item_id: string; actor: string; action: string; status: string; evidence: string[]; verify: string | null; next_or_blocker: string | null; span: unknown; section_id: string; section_name: string }
  const buildSummary = async (key: string) => {
    const r = await one(key)
    if (!r.ok) return r
    const q = r.data as { date: string; tz: string; session: Record<string, unknown> | null; items: WItem[]; sections: { id: string; name: string }[] }
    if (!q.session) return { ok: false as const, error: `Chưa có việc hôm nay (${q.date}) của ${key} trong worklog; không có gì để tổng kết`, details: '', empty: true }
    const lite = (i: WItem) => ({ item_id: i.item_id, actor: i.actor, action: i.action, status: i.status, evidence: i.evidence, verify: i.verify, next_or_blocker: i.next_or_blocker, span: i.span })
    const sections = q.sections.map((sec) => {
      const its = q.items.filter((i) => i.section_id === sec.id)
      return { id: sec.id, name: sec.name, done: its.filter((i) => i.status === 'Đã xong').map(lite), open: its.filter((i) => i.status !== 'Đã xong').map(lite) }
    })
    const sha = createHash('sha256').update(fs.readFileSync(path.join(hub, key, 'progress', 'worklog.jsonl'))).digest('hex').slice(0, 16)
    return { ok: true as const, data: { schema: 'worklog-summary/1', task_key: key, date: q.date, tz: q.tz, generated_at: new Date().toISOString(), session: q.session, sections,
      totals: { done: sections.reduce((n, x) => n + x.done.length, 0), open: sections.reduce((n, x) => n + x.open.length, 0) },
      source: { file: `task-hub/${key}/progress/worklog.jsonl`, sha256_16: sha, query: 'worklog.py query --current-session (worklog-query/1)' } } }
  }
  const readBody = (req: import('node:http').IncomingMessage) => new Promise<string>((resolve) => { let b = ''; req.on('data', (c) => { b += c }); req.on('end', () => resolve(b)) })
  const handler = async (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse, next: () => void) => {
    const [url, qs] = (req.url ?? '').split('?')
    if (!['/worklog/query', '/worklog/active', '/worklog/task', '/worklog/summary', '/worklog/summaries', '/worklog/session', '/worklog/criteria', '/worklog/all'].includes(url)) return next()
    if (!fs.existsSync(script)) return send(res, 500, { error: 'Không thấy quy-trinh/worklog.py' })
    try {
      if (url === '/worklog/session') {
        // Nút Bắt đầu / Kết thúc của ô phiên (Amin yêu cầu 20/11): GHI THÊM dòng vào worklog bằng worklog.py (append-only, không sửa/xóa).
        // Chỉ một phiên "Đang làm" cùng lúc: bắt đầu một task thì mọi phiên đang chạy khác bị tạm dừng (Chờ). Kết thúc = pause → Chờ (không đánh dấu Đã xong).
        if (req.method !== 'POST') return send(res, 405, { error: 'chỉ POST' })
        let b: { task?: string; action?: string; plan_min?: number } = {}
        try { b = JSON.parse(await readBody(req) || '{}') } catch { return send(res, 400, { error: 'JSON hỏng' }) }
        const k = b.task ?? ''
        if (!/^(KAN|GA|GEN)-\d+$/.test(k) || !['start', 'end'].includes(b.action ?? '')) return send(res, 400, { error: 'task/action không hợp lệ' })
        const latest = (key: string) => {
          const f = path.join(hub, key, 'progress', 'worklog.jsonl'); const m = new Map<string, Record<string, unknown>>()
          if (!fs.existsSync(f)) return [] as Record<string, unknown>[]
          for (const line of fs.readFileSync(f, 'utf8').split('\n')) { if (!line.trim()) continue; try { const r = JSON.parse(line) as Record<string, unknown>; const id = String(r.item_id); const o = m.get(id); if (!o || Number(r.rev) >= Number(o.rev)) m.set(id, r) } catch { /* bỏ */ } }
          return [...m.values()]
        }
        // Phần quá giờ so với thời lượng đã chọn (mặc định 60 phút), ghi vào action của dòng pause để đánh giá sau. Chưa trừ lúc tạm dừng.
        const overAction = (r: Record<string, unknown>, plan: number) => {
          const st = typeof r.started_at === 'string' ? new Date(r.started_at).getTime() : NaN
          const el = Number.isFinite(st) ? Math.round((Date.now() - st) / 60000) : NaN
          if (!Number.isFinite(el)) return 'Kết thúc phiên từ nút trên web'
          return el > plan ? `Kết thúc phiên từ nút trên web (QUÁ GIỜ ${el - plan} phút: ${el}/${plan} phút, chưa trừ lúc tạm dừng)` : `Kết thúc phiên từ nút trên web (${el}/${plan} phút)`
        }
        const today = new Date().toISOString().slice(0, 10)
        const planMin = Number.isFinite(b.plan_min) && Number(b.plan_min) > 0 ? Number(b.plan_min) : 60
        const stop = async (key: string) => {
          const n: string[] = []
          for (const r of latest(key).filter((x) => x.status === 'Đang làm')) {
            const o = await run(['add', key, '--event', 'pause', '--item', String(r.item_id), '--status', 'Chờ', '--actor', 'Amin', '--action', overAction(r, planMin), '--next', 'Bấm Bắt đầu để tiếp tục'])
            if (o.code !== 0) throw new Error(o.out.slice(0, 300)); n.push(String(r.item_id))
          }
          return n
        }
        const stopped: string[] = []
        if (b.action === 'end') { stopped.push(...await stop(k)); return send(res, 200, { ok: true, stopped }) }
        // start: dừng mọi phiên đang chạy ở task khác (và task này), rồi tiếp tục item mới nhất đang Chờ/Còn lại
        const keys = fs.readdirSync(hub).filter((x) => /^(KAN|GA|GEN)-\d+$/.test(x) && fs.existsSync(path.join(hub, x, 'progress', 'worklog.jsonl')))
        const cand = latest(k).filter((x) => x.status === 'Chờ' || x.status === 'Còn lại').sort((a, c) => String(c.updated_at ?? c.date).localeCompare(String(a.updated_at ?? a.date)))[0]
        const running = latest(k).find((x) => x.status === 'Đang làm')
        if (!cand && !running) return send(res, 409, { error: `Không có việc nào để bắt đầu ở ${k} (worklog hôm nay ${today})` })
        for (const x of keys) if (x !== k) stopped.push(...await stop(x))
        if (cand && !running) {
          const o = await run(['add', k, '--event', 'resume', '--item', String(cand.item_id), '--status', 'Đang làm', '--actor', 'Amin', '--action', 'Bắt đầu phiên từ nút trên web'])
          if (o.code !== 0) return send(res, 422, { error: o.out.slice(0, 300) })
        }
        return send(res, 200, { ok: true, stopped, started: String((cand ?? running)!.item_id) })
      }
      if (url === '/worklog/summary' || url === '/worklog/summaries') {
        const k = new URLSearchParams(qs ?? '').get('task') ?? ''
        if (!/^(KAN|GA|GEN)-\d+$/.test(k)) return send(res, 400, { error: 'task không hợp lệ' })
        if (url === '/worklog/summaries') {
          const d = sumDir(k)
          const list = fs.existsSync(d) ? fs.readdirSync(d).filter((n) => n.endsWith('.json')).sort().reverse().flatMap((n) => { try { return [JSON.parse(fs.readFileSync(path.join(d, n), 'utf8'))] } catch { return [] } }) : []
          return send(res, 200, { summaries: list })
        }
        if (!fs.existsSync(path.join(hub, k, 'progress', 'worklog.jsonl'))) return send(res, 404, { error: `Task ${k} chưa có progress/worklog.jsonl` })
        const b = await buildSummary(k)
        if (req.method === 'GET') return b.ok ? send(res, 200, b.data) : send(res, 'empty' in b ? 404 : 422, { error: b.error, details: b.details })
        if (req.method === 'POST') {
          if (!b.ok) return send(res, 'empty' in b ? 404 : 422, { error: b.error, details: b.details })
          let note = ''
          try { note = String((JSON.parse(await readBody(req)) as { note?: unknown }).note ?? '').slice(0, 2000) } catch { /* không có ghi chú */ }
          const now = new Date(Date.now() + 7 * 3600000).toISOString()
          const saved = { ...b.data, saved_at: now.slice(0, 19) + '+07:00', note: note.trim() || null }
          const sid = String((saved.session as { id: string }).id).replace(/[^A-Za-z0-9_-]/g, '_').slice(0, 60)
          const file = `${saved.date}-${sid}-${now.slice(11, 19).replace(/:/g, '')}.json`
          fs.mkdirSync(sumDir(k), { recursive: true })
          fs.writeFileSync(path.join(sumDir(k), file), JSON.stringify({ ...saved, file: `dashboard-data/tong-ket/${k}/${file}` }, null, 1) + '\n', { flag: 'wx' })
          return send(res, 200, { ...saved, file: `dashboard-data/tong-ket/${k}/${file}` })
        }
        return send(res, 405, { error: 'method not allowed' })
      }
      if (url === '/worklog/criteria') {
        // Yêu cầu/tiêu chí của task (chỉ đọc input/TIEU-CHI.md: các dòng "- C<n>: ..."). Không chấm, không suy diễn.
        const k = new URLSearchParams(qs ?? '').get('task') ?? ''
        if (!/^(KAN|GA|GEN)-\d+$/.test(k)) return send(res, 400, { error: 'task không hợp lệ' })
        const f = path.join(hub, k, 'input', 'TIEU-CHI.md')
        if (!fs.existsSync(f)) return send(res, 200, { task_key: k, file: null, draft: false, criteria: [] })
        const txt = fs.readFileSync(f, 'utf8')
        const criteria = txt.split('\n').flatMap((l) => { const m = l.match(/^\s*[-*]\s*(C\d+)\s*:\s*(.+)$/); return m ? [{ id: m[1], text: m[2].trim() }] : [] })
        return send(res, 200, { task_key: k, file: `task-hub/${k}/input/TIEU-CHI.md`, draft: /NHÁP/i.test(txt.split('\n')[0] ?? ''), criteria })
      }
      if (url === '/worklog/task') {
        // Toàn bộ worklog của một task (mọi ngày, mọi phiên): chỉ đọc progress/worklog.jsonl, lấy bản mới nhất (rev cao nhất) của từng item. Không ghi, không suy thêm.
        const k = new URLSearchParams(qs ?? '').get('task') ?? ''
        if (!/^(KAN|GA|GEN)-\d+$/.test(k)) return send(res, 400, { error: 'task không hợp lệ' })
        const f = path.join(hub, k, 'progress', 'worklog.jsonl')
        if (!fs.existsSync(f)) return send(res, 200, { task_key: k, items: [] })
        const last = new Map<string, Record<string, unknown>>()
        for (const line of fs.readFileSync(f, 'utf8').split('\n')) {
          if (!line.trim()) continue
          try { const r = JSON.parse(line) as Record<string, unknown>; const id = String(r.item_id); const old = last.get(id); if (!old || Number(r.rev) >= Number(old.rev)) last.set(id, r) } catch { /* bỏ dòng hỏng */ }
        }
        const items = [...last.values()].map((r) => ({ item_id: r.item_id, rev: r.rev, date: r.date, session_name: r.session_name, section_id: r.section_id, section_name: r.section_name, actor: r.actor, action: r.action, status: r.status, started_at: r.started_at ?? null, updated_at: r.updated_at ?? null, evidence: r.evidence ?? [], verify: r.verify ?? null, next_or_blocker: r.next_or_blocker ?? null }))
          .sort((a, b) => String(b.started_at ?? b.date).localeCompare(String(a.started_at ?? a.date)))
        return send(res, 200, { task_key: k, items })
      }
      if (url === '/worklog/all') {
        // Mọi worklog của mọi task (bản mới nhất mỗi item) + cờ có summary/notebook trong progress/runs/<item_id>. Chỉ đọc.
        const keys = fs.readdirSync(hub).filter((k) => /^(KAN|GA|GEN)-\d+$/.test(k) && fs.existsSync(path.join(hub, k, 'progress', 'worklog.jsonl'))).sort()
        const rows: Record<string, unknown>[] = []
        for (const k of keys) {
          const last = new Map<string, Record<string, unknown>>()
          for (const line of fs.readFileSync(path.join(hub, k, 'progress', 'worklog.jsonl'), 'utf8').split('\n')) {
            if (!line.trim()) continue
            try { const r = JSON.parse(line) as Record<string, unknown>; const id = String(r.item_id); const old = last.get(id); if (!old || Number(r.rev) >= Number(old.rev)) last.set(id, r) } catch { /* bỏ dòng hỏng */ }
          }
          for (const r of last.values()) {
            const rd = path.join(hub, k, 'progress', 'runs', String(r.item_id))
            rows.push({ key: k, item_id: r.item_id, date: r.date, section_id: r.section_id, section_name: r.section_name, actor: r.actor, action: r.action, status: r.status, started_at: r.started_at ?? null, evidence: r.evidence ?? [], next_or_blocker: r.next_or_blocker ?? null, has_summary: fs.existsSync(path.join(rd, 'summary.md')), has_notebook: fs.existsSync(path.join(rd, 'notebook.md')) })
          }
        }
        return send(res, 200, { count: rows.length, items: rows })
      }
      if (url === '/worklog/active') {
        const keys = fs.readdirSync(hub).filter((k) => /^(KAN|GA|GEN)-\d+$/.test(k) && fs.existsSync(path.join(hub, k, 'progress', 'worklog.jsonl'))).sort()
        const items = await Promise.all(keys.map(async (k) => ({ key: k, r: await one(k) })))
        return send(res, 200, { tasks: items.map((x) => x.r.ok ? (x.r.data.session ? { key: x.key, ok: true, query: x.r.data } : null) : { key: x.key, ok: false, error: x.r.error }).filter(Boolean) })
      }
      const p = new URLSearchParams(qs ?? '')
      const key = p.get('task') ?? '', section = p.get('section') ?? ''
      if (!/^(KAN|GA|GEN)-\d+$/.test(key) || (section && !/^[A-Za-z0-9_-]{1,24}$/.test(section))) return send(res, 400, { error: 'task hoặc section không hợp lệ' })
      if (!fs.existsSync(path.join(hub, key, 'progress', 'worklog.jsonl'))) return send(res, 404, { error: `Task ${key} chưa có progress/worklog.jsonl` })
      const r = await one(key, section || undefined)
      return r.ok ? send(res, 200, r.data) : send(res, 422, { error: r.error, details: r.details })
    } catch (e) { send(res, 500, { error: String(e) }) }
  }
  return {
    name: 'store-hub-worklog',
    configureServer(s) { s.middlewares.use(handler) },
    configurePreviewServer(s) { s.middlewares.use(handler) },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), workingDataPlugin(), mediaPlugin(), zernioPlugin(), jiraPlugin(), docsPlugin(), activityPlugin(), researchPlugin(), worklogPlugin()],
})
