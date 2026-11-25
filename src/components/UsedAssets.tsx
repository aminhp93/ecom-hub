import { useEffect, useState } from 'react'
import type { Store, Video } from '../data/types'
import { Modal } from './Modal'
import { Markdown } from './Markdown'

/**
 * KAN-129/UI-CREATIVE: Prompt thực tế + Input thực tế của MỘT version (dùng cho version active, và cho từng bản trong Lịch sử phiên bản).
 * Nguồn bằng chứng: thư mục `1-dropship/stores/<store>/3-creative/<video-id>/input/` (file `prompts-<id>.md` = prompt đã dùng, các file khác = input đã lưu).
 * Không lấy kit.prompt (nháp/hướng dẫn) và không dựng lại prompt. Thiếu bằng chứng thì ghi rõ.
 */
const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/')
const dirOf = (store: Store, v: Video) => `1-dropship/stores/${store.id}/3-creative/${v.id}/input`
const cache = new Map<string, Promise<unknown>>()
function once<T>(k: string, f: () => Promise<T>): Promise<T> { if (!cache.has(k)) cache.set(k, f()); return cache.get(k) as Promise<T> }
type F = { path: string; size: number }
const listDir = (d: string) => once('ls:' + d, async () => { try { const r = await fetch(`/ls/${enc(d)}`); return r.ok ? ((await r.json()) as F[]) : [] } catch { return [] as F[] } })
const readText = (p: string) => once('tx:' + p, async () => { try { const r = await fetch(`/preview/${enc(p)}`); return r.ok ? await r.text() : null } catch { return null } })

const kind = (p: string) => /\.(png|jpe?g|gif|webp)$/i.test(p) ? 'image' : /\.(mp4|mov|webm)$/i.test(p) ? 'video' : /\.(mp3|wav|m4a|aac)$/i.test(p) ? 'audio' : 'text'
const role = (n: string) => /REJECTED|LOAI|loai/.test(n) ? 'Bản bị loại (không dùng)' : /anchor/i.test(n) ? 'Ảnh neo' : /EDL/i.test(n) ? 'Danh sách cắt ghép (EDL)' : /ffmpeg/i.test(n) ? 'Lệnh dựng (ffmpeg)' : /^brief/i.test(n) ? 'Brief' : /prompts?/i.test(n) ? 'Prompt đã dùng' : /ref-structure/i.test(n) ? 'Cấu trúc ref' : /audio|music|nhac|sfx/i.test(n) ? 'Âm thanh' : /clip/i.test(n) ? 'Clip nguồn' : 'File bổ sung'

/** Phần prompt đã chấp nhận/dùng trong bản cuối: bỏ các đoạn có LOẠI / REJECTED; chỉ lấy tiêu đề CHẤP NHẬN hoặc "dùng trong bản cuối" hoặc "Dựng bản cuối".
 *  KAN-132/P8: file không có tiêu đề đánh dấu thì trả TOÀN BỘ file (trước đây chỉ trả phần đầu trước "##" nên prompt bị cụt). */
export function usedPromptText(md: string): { text: string; marked: boolean } {
  const parts = md.split(/\n(?=#{2,3} )/)
  if (parts[0].startsWith('#') && !/^#{2,3} /.test(parts[0])) parts.shift()
  const keep = parts.filter((s) => { const h = s.split('\n')[0]; return /CHẤP NHẬN|dùng trong bản cuối|Dựng bản cuối/i.test(h) && !/LOẠI|REJECTED/i.test(h) })
  return keep.length ? { text: keep.join('\n\n').trim(), marked: true } : { text: md.trim(), marked: false }
}

const PROMPT_RE = /(^|\/)prompts?(-[^/]*)?\.(md|txt)$/i
type PF = { file: string; md: string }
export function usePrompts(store: Store, v: Video) {
  const [st, setSt] = useState<{ items: PF[] } | undefined>()
  useEffect(() => {
    let off = false
    void (async () => {
      const fs = await listDir(dirOf(store, v))
      const fl = fs.filter((x) => PROMPT_RE.test(x.path) && !/REJECTED/i.test(x.path)).sort((a, b) => a.path.localeCompare(b.path))
      const items = (await Promise.all(fl.map(async (f) => ({ file: f.path, md: await readText(f.path) })))).filter((x): x is PF => !!x.md)
      if (!off) setSt({ items })
    })()
    return () => { off = true }
  }, [store.id, v.id])
  return st
}

/** Ghép nhiều file prompt (md/txt) thành một văn bản markdown: .txt đặt trong khối code, nhiều file có tiêu đề theo tên file. */
function joinPrompts(items: PF[]): { text: string; marked: boolean } {
  const multi = items.length > 1
  const rs = items.map((it) => {
    const name = it.file.split('/').pop() ?? it.file
    const isTxt = /\.txt$/i.test(name)
    const u = isTxt ? { text: it.md.trim(), marked: false } : usedPromptText(it.md)
    const body = isTxt ? '```\n' + u.text + '\n```' : u.text
    return { text: multi ? `## ${name}\n\n${body}` : body, marked: u.marked }
  })
  return { text: rs.map((r) => r.text).join('\n\n'), marked: rs.some((r) => r.marked) }
}
const LONG = 600

export function UsedPrompt({ store, v, compact }: { store: Store; v: Video; compact?: boolean }) {
  const st = usePrompts(store, v)
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)
  if (!st) return <span className="note">…</span>
  if (!st.items.length) return <span className="note up-none">Không có prompt thực tế đã lưu</span>
  const u = joinPrompts(st.items)
  const long = u.text.length > LONG
  const copy = async () => { try { await navigator.clipboard.writeText(u.text); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { window.prompt('Copy prompt:', u.text) } }
  const one = u.text.replace(/```|[#*`|>]/g, '').replace(/\s+/g, ' ').trim()
  const cut = compact ? 110 : 220
  return (
    <div className="up">
      {long || compact ? <div className="note up-sum">{one.slice(0, cut)}{one.length > cut ? '…' : ''}</div> : <div className="up-inline"><Markdown text={u.text} /></div>}
      {!u.marked && !st.items.every((x) => /\.txt$/i.test(x.file)) ? <div className="note"><b>Chưa đánh dấu bản chấp nhận</b> trong file; hiện toàn bộ file.</div> : null}
      <div className="note"><button type="button" className="link" onClick={() => setOpen(true)}>{long ? `Xem toàn bộ prompt đã dùng (${u.text.length.toLocaleString('vi-VN')} ký tự)` : 'Xem toàn bộ prompt đã dùng'}</button> · <button type="button" className="link" onClick={copy}>{copied ? 'Đã copy ✓' : 'Copy prompt'}</button>{st.items.map((x) => <span key={x.file}> · <a href={`/preview/${enc(x.file)}`} target="_blank" rel="noreferrer">{x.file.split('/').pop()}</a></span>)}</div>
      {open && (
        <Modal title={`Prompt đã dùng · ${v.id}`} wide onClose={() => setOpen(false)}>
          <div className="md-modal"><Markdown text={u.text} /></div>
          <div className="actions"><button className="btn pri" onClick={copy}>{copied ? 'Đã copy ✓' : 'Copy prompt'}</button><button className="btn" onClick={() => setOpen(false)}>Đóng (Esc)</button></div>
        </Modal>
      )}
    </div>
  )
}

export function UsedInputs({ store, v, compact }: { store: Store; v: Video; compact?: boolean }) {
  const [files, setFiles] = useState<F[] | undefined>()
  const [md, setMd] = useState<string>('')
  useEffect(() => {
    let off = false
    void (async () => {
      const fs = await listDir(dirOf(store, v))
      const pf = fs.find((x) => /(^|\/)prompts?(-[^/]*)?\.md$/i.test(x.path))
      const ev = fs.filter((x) => x === pf || /(^|\/)(EDL[^/]*\.csv|ffmpeg[^/]*\.txt)$/i.test(x.path))
      const t = (await Promise.all(ev.map((x) => readText(x.path)))).filter(Boolean).join('\n')
      if (!off) { setFiles(fs); setMd(t) }
    })()
    return () => { off = true }
  }, [store.id, v.id])
  if (!files) return <span className="note">…</span>
  const own = files.filter((f) => !/REJECTED/i.test(f.path))
  // ref khai trong kit nhưng chỉ coi là "đã dùng" khi tên file xuất hiện trong prompts đã lưu
  const kit = [...(v.kit?.product ?? []).map((p) => [p, 'Ảnh sản phẩm'] as const), ...(v.kit?.referenceVideo ?? []).map((p) => [p, 'Video reference'] as const), ...(v.kit?.character ?? []).map((p) => [p, 'Nhân vật'] as const)].filter(([p]) => !own.some((o) => o.path === p))
  // đường dẫn file nêu thẳng trong prompts đã lưu (vd ảnh listing thật dùng làm image input) = bằng chứng đã dùng
  const cited = [...new Set((md.match(/1-dropship\/[^\s"'`)]+?\.(?:png|jpe?g|webp|mp4|mov|mp3|wav|m4a)/gi) ?? []))].filter((p) => !own.some((o) => o.path === p) && !kit.some(([k]) => k === p))
  const items: { path: string; role: string; ok: boolean }[] = [
    ...own.map((f) => ({ path: f.path, role: role(f.path.split('/').pop() ?? ''), ok: true })),
    ...cited.map((p) => ({ path: p, role: /doi-thu/i.test(p) && /\.(mp4|mov)$/i.test(p) ? 'Footage nguồn (video đối thủ, theo EDL/ffmpeg)' : /\.(mp4|mov)$/i.test(p) ? 'Video reference' : /higgsfield-input|product/i.test(p) ? 'Ảnh sản phẩm thật' : 'Tham chiếu nêu trong prompt', ok: true })),
    ...kit.map(([p, r]) => ({ path: p, role: r, ok: !!md && md.includes((p.split('/').pop() ?? '').replace(/\.[^.]+$/, '')) })),
  ]
  const shown = compact ? items.slice(0, 0) : items
  if (!items.length) return <span className="note">Chưa xác minh đã dùng (không có input đã lưu)</span>
  return (
    <div className="ui-list">
      <p className="note"><b>{items.filter((x) => x.ok).length}</b> file đã dùng/đã lưu{items.some((x) => !x.ok) ? ` · ${items.filter((x) => !x.ok).length} chưa xác minh` : ''}</p>
      {compact ? null : shown.map((a) => <AssetRow key={a.path} a={a} />)}
    </div>
  )
}

function AssetRow({ a }: { a: { path: string; role: string; ok: boolean } }) {
  const k = kind(a.path)
  const url = /^https?:/.test(a.path) ? a.path : `/media/${enc(a.path)}`
  const name = a.path.split('/').pop() ?? a.path
  return (
    <div className="ui-it">
      {k === 'image' ? <img className="ui-pv" src={url} alt={name} loading="lazy" /> : k === 'video' ? <video className="ui-pv" src={url} controls playsInline preload="metadata" /> : k === 'audio' ? <audio src={url} controls preload="metadata" /> : null}
      <div className="note"><b>{name}</b> · {a.role}</div>
      {k === 'text' ? <div className="note"><a href={`/preview/${enc(a.path)}`} target="_blank" rel="noreferrer">Mở file</a></div> : null}
      {a.ok ? null : <div className="note up-none">Chưa xác minh đã dùng</div>}
    </div>
  )
}
