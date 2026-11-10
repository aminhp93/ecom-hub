import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { marketRepo } from '../data/marketRepo'
import type { MarketProduct } from '../data/marketTypes'
import { Modal } from '../components/Modal'
import { Field } from '../components/ui'

const SHEET = 'https://docs.google.com/spreadsheets/d/1urHWGwnpAyHYFY8SlVVzbq4AVb26xuItyOqoBoArKR0/edit?gid=0#gid=0'

const label = (u: string) => {
  try {
    const x = new URL(u)
    if (x.hostname.endsWith('facebook.com')) return x.pathname.startsWith('/ads/library') ? 'Meta Ad Library' : 'Facebook'
    return x.hostname.replace(/^www\./, '')
  } catch { return u }
}
const Link = ({ href }: { href: string }) =>
  href
    ? <span className="lnk">{label(href)} <a href={href} target="_blank" rel="noreferrer" title={`Mở ${href}`} aria-label="Mở link">↗</a></span>
    : <span className="note">Trống</span>

function Thumb({ src, alt }: { src: string; alt: string }) {
  const [bad, setBad] = useState(false)
  if (!src || bad) return <span className="mthumb miss">{src ? 'Ảnh lỗi' : 'Trống'}</span>
  return <img className="mthumb" src={/^https?:/.test(src) ? src : `${import.meta.env.BASE_URL}${src}`} referrerPolicy="no-referrer" alt={alt} loading="lazy" onError={() => setBad(true)} />
}

const Text = ({ text }: { text: string }) =>
  text ? <p className="note full">{text}</p> : <span className="note">Trống</span>

/** Ô sửa tại chỗ như Excel: nhấp đúp để sửa, Enter lưu, Shift+Enter xuống dòng, Esc hủy, rời ô thì lưu. */
function Cell({ value, onCommit, long, children }: { value: string; onCommit: (v: string) => void; long?: boolean; children: ReactNode }) {
  const [edit, setEdit] = useState(false)
  const [v, setV] = useState(value)
  const done = useRef(false)
  const start = () => { done.current = false; setV(value); setEdit(true) }
  const finish = (save: boolean) => {
    if (done.current) return
    done.current = true
    setEdit(false)
    if (save && v !== value) onCommit(v)
  }
  if (!edit) return <div className="ecell" onDoubleClick={start} title="Nhấp đúp để sửa">{children}</div>
  const keys = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.preventDefault(); finish(false) }
    else if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); finish(true) }
  }
  const focus = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
    if (el && !el.dataset.f) { el.dataset.f = '1'; el.focus(); el.setSelectionRange(el.value.length, el.value.length) }
  }
  return long
    ? <textarea ref={focus} className="einput" rows={Math.max(3, v.split('\n').length + 1)} value={v} onChange={(e) => setV(e.target.value)} onKeyDown={keys} onBlur={() => finish(true)} />
    : <input ref={focus} className="einput" value={v} onChange={(e) => setV(e.target.value)} onKeyDown={keys} onBlur={() => finish(true)} />
}

const FIELDS: { key: keyof MarketProduct; label: string; long?: boolean }[] = [
  { key: 'name', label: 'Tên' },
  { key: 'desc', label: 'Mô tả (hiện dưới tên)', long: true },
  { key: 'nameUrl', label: 'Link gắn vào tên' },
  { key: 'facebook', label: 'Facebook (link)' },
  { key: 'website', label: 'Website (link)' },
  { key: 'review', label: 'Đánh giá sơ bộ', long: true },
  { key: 'next', label: 'Bước tiếp theo', long: true },
  { key: 'note', label: 'Ghi chú', long: true },
  { key: 'image', label: 'Ảnh (đường dẫn trong public/ hoặc URL https)' },
]

function EditForm({ item, onSave, onClose }: { item: MarketProduct; onSave: (p: MarketProduct) => void; onClose: () => void }) {
  const [d, setD] = useState(item)
  const [err, setErr] = useState('')
  const set = (k: keyof MarketProduct, v: string) => setD((x) => ({ ...x, [k]: v }))
  const submit = () => {
    if (!d.name.trim()) return setErr('Nhập tên.')
    onSave({ ...d, name: d.name.trim() })
  }
  return (
    <Modal title={`Sửa dòng ${item.n}`} onClose={onClose}>
      {FIELDS.map((f) => (
        <Field key={f.key} label={f.label}>
          {f.long
            ? <textarea value={String(d[f.key])} onChange={(e) => set(f.key, e.target.value)} />
            : <input value={String(d[f.key])} onChange={(e) => set(f.key, e.target.value)} />}
        </Field>
      ))}
      {err && <p className="err">{err}</p>}
      <div className="bar">
        <button className="btn pri" onClick={submit}>Lưu</button>
        <button className="btn" onClick={onClose}>Hủy</button>
      </div>
    </Modal>
  )
}

export function MarketProducts() {
  const [items, setItems] = useState<MarketProduct[] | null>(null)
  const [q, setQ] = useState('')
  const [editing, setEditing] = useState<MarketProduct | null>(null)
  const [confirmReset, setConfirmReset] = useState(false)

  useEffect(() => { marketRepo.list().then(setItems) }, [])

  const rows = useMemo(() => {
    const t = q.trim().toLowerCase()
    return (items ?? []).filter((p) => !t || `${p.name} ${p.desc} ${p.review}`.toLowerCase().includes(t))
  }, [items, q])

  const save = async (p: MarketProduct) => {
    await marketRepo.update(p)
    setItems(await marketRepo.list())
    setEditing(null)
  }
  const commit = async (p: MarketProduct, key: keyof MarketProduct, v: string) => {
    if (key === 'name' && !v.trim()) return
    await marketRepo.update({ ...p, [key]: key === 'name' ? v.trim() : v })
    setItems(await marketRepo.list())
  }
  const reset = async () => { setItems(await marketRepo.reset()); setConfirmReset(false) }

  if (!items) return <p className="note">Đang tải…</p>

  return (
    <>
      <div className="bar">
        <h1>Sản phẩm Market Research</h1>
        <span className="note">{rows.length}/{items.length} sản phẩm</span>
        <span className="sp" />
        <input type="search" className="search" aria-label="Tìm theo tên" placeholder="Tìm theo tên" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <p className="note">Nguồn: <a href={SHEET} target="_blank" rel="noreferrer">Google Sheet “Market Research”</a> (bản xuất 2026-11-09). Nhấp đúp vào ô để sửa như Excel (Enter lưu, Shift+Enter xuống dòng, Esc hủy). Ô để trống thì hiện “Trống”. Chỉnh sửa lưu trong trình duyệt này (không ghi ngược vào Sheet). <button className="link" onClick={() => setConfirmReset(true)}>Đưa về dữ liệu Sheet ban đầu</button></p>
      {editing && <EditForm key={editing.n} item={editing} onSave={save} onClose={() => setEditing(null)} />}
      {confirmReset && (
        <Modal title="Đưa về dữ liệu Sheet?" onClose={() => setConfirmReset(false)}>
          <p>Mọi chỉnh sửa trên trang này sẽ mất và dữ liệu trở lại như file Sheet đã nạp.</p>
          <div className="bar">
            <button className="btn dng" onClick={reset}>Đưa về ban đầu</button>
            <button className="btn" onClick={() => setConfirmReset(false)}>Hủy</button>
          </div>
        </Modal>
      )}
      <div className="card">
        <div className="scroll">
          <table className="rt mrt">
            <thead>
              <tr>
                <th>STT</th><th>Ảnh</th><th>Tên</th><th>Facebook</th><th>Website</th>
                <th>Đánh giá sơ bộ</th><th>Bước tiếp theo</th><th>Ghi chú</th><th />
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && <tr><td colSpan={9} className="note">Không có sản phẩm khớp.</td></tr>}
              {rows.map((p) => (
                <tr key={p.n}>
                  <td className="mono" data-label="STT">{p.n}</td>
                  <td onDoubleClick={() => setEditing(p)} title="Nhấp đúp để sửa ảnh"><Thumb src={p.image} alt={p.name} /></td>
                  <td data-label="Tên">
                    <Cell value={p.name} onCommit={(v) => commit(p, 'name', v)}>
                      <div className="sname">
                        <b>{p.name}{p.nameUrl && <> <a href={p.nameUrl} target="_blank" rel="noreferrer" title={`Mở ${p.nameUrl}`} aria-label="Mở link">↗</a></>}</b>
                        {p.desc && <span>{p.desc}</span>}
                      </div>
                    </Cell>
                  </td>
                  <td data-label="Facebook"><Cell value={p.facebook} onCommit={(v) => commit(p, 'facebook', v)}><Link href={p.facebook} /></Cell></td>
                  <td data-label="Website"><Cell value={p.website} onCommit={(v) => commit(p, 'website', v)}><Link href={p.website} /></Cell></td>
                  <td className="val" data-label="Đánh giá sơ bộ"><Cell long value={p.review} onCommit={(v) => commit(p, 'review', v)}><Text text={p.review} /></Cell></td>
                  <td className="val" data-label="Bước tiếp theo"><Cell long value={p.next} onCommit={(v) => commit(p, 'next', v)}><Text text={p.next} /></Cell></td>
                  <td data-label="Ghi chú"><Cell long value={p.note} onCommit={(v) => commit(p, 'note', v)}><Text text={p.note} /></Cell></td>
                  <td><button className="btn" onClick={() => setEditing(p)} title="Sửa đủ field (mô tả, link tên, ảnh)">Sửa đủ</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
