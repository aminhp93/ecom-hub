import { execFile } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

// Dev/preview only: phục vụ video và ảnh từ thư mục "working" (cha của 1-dropship) tại /media/<đường dẫn tương đối>.
// Chỉ đọc, chỉ video/ảnh, chặn ../ để không lộ file khác. Bản deploy thật sẽ dùng storage (Supabase) thay thế.
const TYPES: Record<string, string> = {
  '.mp4': 'video/mp4', '.mov': 'video/quicktime', '.webm': 'video/webm',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
}
function mediaPlugin(): Plugin {
  const root = path.resolve(import.meta.dirname, '../..')
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
// GET /zernio/accounts: danh sách kênh đã nối. POST /zernio/publish: upload video lên Zernio rồi tạo bài nháp hoặc hẹn giờ (không đăng ngay).
function zernioPlugin(): Plugin {
  const root = path.resolve(import.meta.dirname, '../..')
  const API = 'https://zernio.com/api/v1'
  const key = () => loadEnv('development', import.meta.dirname, '')['ZERNIO_API_KEY'] ?? ''
  const json = (res: import('node:http').ServerResponse, code: number, body: unknown) => {
    res.statusCode = code
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body))
  }
  const call = async (p: string, init: RequestInit = {}) => {
    const r = await fetch(API + p, { ...init, headers: { Authorization: `Bearer ${key()}`, 'Content-Type': 'application/json', ...(init.headers ?? {}) } })
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
    if (!key()) return json(res, 500, { error: 'Thiếu ZERNIO_API_KEY trong .env.local' })
    try {
      if (url === '/zernio/accounts' && req.method === 'GET') {
        const r = await call('/accounts')
        return json(res, r.status, r.data)
      }
      if (url === '/zernio/publish' && req.method === 'POST') {
        const b = JSON.parse(await readBody(req)) as { mediaPath?: string; caption: string; platform: string; accountId: string; mode: 'draft' | 'schedule'; scheduledFor?: string; timezone?: string; title?: string }
        if (!['draft', 'schedule'].includes(b.mode)) return json(res, 400, { error: 'mode phải là draft hoặc schedule' })
        if (b.mode === 'schedule' && !b.scheduledFor) return json(res, 400, { error: 'Thiếu giờ hẹn' })
        let mediaItems: { type: string; url: string }[] | undefined
        if (b.mediaPath && !/^https?:/.test(b.mediaPath)) {
          const file = path.resolve(root, b.mediaPath)
          const type = TYPES[path.extname(file).toLowerCase()]
          if (!file.startsWith(root + path.sep) || !type || !fs.existsSync(file)) return json(res, 404, { error: 'Không thấy file media' })
          const buf = fs.readFileSync(file)
          const pre = await call('/media/presign', { method: 'POST', body: JSON.stringify({ filename: path.basename(file), contentType: type, size: buf.length }) })
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
          ...(b.mode === 'schedule' ? { scheduledFor: b.scheduledFor, timezone: b.timezone ?? 'Asia/Ho_Chi_Minh' } : { isDraft: true }),
        }
        const r = await call('/posts', { method: 'POST', body: JSON.stringify(body), headers: { 'Idempotency-Key': crypto.randomUUID() } })
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mediaPlugin(), zernioPlugin()],
})
