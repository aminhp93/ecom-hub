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

function Thumb({ src, alt, lg }: { src: string; alt: string; lg?: boolean }) {
  const [bad, setBad] = useState(false)
  const c = lg ? 'mthumb lg' : 'mthumb'
  if (!src || bad) return <span className={`${c} miss`}>{src ? 'Ảnh lỗi' : 'Chưa có ảnh'}</span>
  return <img className={c} src={/^https?:/.test(src) ? src : `${import.meta.env.BASE_URL}${src}`} referrerPolicy="no-referrer" alt={alt} loading="lazy" onError={() => setBad(true)} />
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

export function MarketProducts({ title = 'Danh sách sản phẩm' }: { title?: string }) {
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
        <h3>{title}</h3>
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

// ---- Tab "Sản phẩm tôi đã xem" (Market Research): dạng thẻ gọn, ảnh + link nguồn là chính, chi tiết dài mở bằng nút.
const DECISIONS = ['Chưa quyết', 'Quan tâm', 'Làm tiếp', 'Bỏ'] as const
interface Added { id: string; name: string; link: string; image: string; note: string; date: string; decision: string }
interface SeenMeta { decisions: Record<string, string>; added: Added[] }
const SEEN_KEY = 'store-hub:mr-seen:v1' // cùng khóa với bản trước để không mất dữ liệu đã ghi
const loadSeen = (): SeenMeta => {
  try { const j = JSON.parse(localStorage.getItem(SEEN_KEY) ?? ''); return { decisions: j.decisions ?? {}, added: j.added ?? [] } } catch { return { decisions: {}, added: [] } }
}
const saveSeen = (m: SeenMeta) => { try { localStorage.setItem(SEEN_KEY, JSON.stringify(m)) } catch { /* không lưu được thì bỏ qua */ } }

/** Nút nguồn: có link thì là nút bấm; thiếu thì chip mờ "Chưa có …" (không dùng chữ "Trống"). */
function SrcChip({ href, kind }: { href: string; kind: string }) {
  if (!href) return <span className="chip-miss" title={`Chưa có link ${kind}`}>Chưa có {kind}</span>
  return <a className="chip-link" href={href} target="_blank" rel="noreferrer" title={href}>{label(href)} ↗</a>
}

const Sel = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
  <select className="fsel" aria-label="Quyết định" value={value} onChange={(e) => onChange(e.target.value)}>{DECISIONS.map((d) => <option key={d}>{d}</option>)}</select>
)

type Detail = { kind: 'legacy'; p: MarketProduct } | { kind: 'added'; a: Added }

export function MarketSeen() {
  const [items, setItems] = useState<MarketProduct[] | null>(null)
  const [meta, setMeta] = useState<SeenMeta>(loadSeen)
  const [q, setQ] = useState('')
  const [detail, setDetail] = useState<Detail | null>(null)
  const [editing, setEditing] = useState<MarketProduct | null>(null)
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState({ name: '', link: '', image: '', note: '', decision: 'Chưa quyết' })
  useEffect(() => { marketRepo.list().then(setItems) }, [])
  const upd = (m: SeenMeta) => { setMeta(m); saveSeen(m) }
  const add = () => {
    if (!form.name.trim()) return
    upd({ ...meta, added: [{ id: String(Date.now()), ...form, name: form.name.trim(), date: new Date().toISOString().slice(0, 10) }, ...meta.added] })
    setForm({ name: '', link: '', image: '', note: '', decision: 'Chưa quyết' })
    setAdding(false)
  }
  const t = q.trim().toLowerCase()
  const legacy = (items ?? []).filter((p) => !t || `${p.name} ${p.desc} ${p.review} ${p.note}`.toLowerCase().includes(t))
  const added = meta.added.filter((a) => !t || `${a.name} ${a.note}`.toLowerCase().includes(t))
  const total = (items?.length ?? 0) + meta.added.length
  const saveEdit = async (p: MarketProduct) => { await marketRepo.update(p); setItems(await marketRepo.list()); setEditing(null); setDetail(null) }

  const Field2 = ({ k, v }: { k: string; v: string }) => (v ? <div><p className="db-sec">{k}</p><p className="full">{v}</p></div> : null)

  return (
    <div className="stack">
      <div className="bar">
        <h3>Sản phẩm tôi đã xem</h3>
        <span className="note">{legacy.length + added.length}/{total}</span>
        <span className="sp" />
        <input type="search" className="search" aria-label="Tìm theo tên" placeholder="Tìm theo tên" value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="btn pri" onClick={() => setAdding(true)}>+ Thêm sản phẩm</button>
      </div>
      <p className="note">12 sản phẩm Legacy lấy từ Google Sheet “Market Research” (bản xuất 09/11/2026), tìm bằng keyword dropship/offer cũ. Quyết định và sản phẩm tự thêm chỉ lưu trong trình duyệt này.</p>

      <div className="card">
        <div className="scroll">
          <table className="rt mrt seen">
            <thead><tr><th>Ảnh</th><th>Sản phẩm</th><th>Nguồn</th><th>Quyết định</th></tr></thead>
            <tbody>
              {!items && <tr><td colSpan={4} className="note">Đang tải…</td></tr>}
              {items && legacy.length + added.length === 0 && <tr><td colSpan={4} className="note">Không có sản phẩm khớp.</td></tr>}
              {added.map((a) => (
                <tr key={a.id}>
                  <td><Thumb src={a.image} alt={a.name} lg /></td>
                  <td data-label="Sản phẩm">
                    <div className="sname"><b>{a.name}</b><span><span className="badge src-amin">Amin note</span> thêm {a.date}</span></div>
                    <p className="clamp2 note">{a.note || 'Chưa có note.'}</p>
                  </td>
                  <td data-label="Nguồn"><div className="chips"><SrcChip href={a.link} kind="link" /></div></td>
                  <td data-label="Quyết định"><div className="chips"><Sel value={a.decision} onChange={(v) => upd({ ...meta, added: meta.added.map((x) => (x.id === a.id ? { ...x, decision: v } : x)) })} /><button className="btn" onClick={() => setDetail({ kind: 'added', a })}>Xem chi tiết</button></div></td>
                </tr>
              ))}
              {legacy.map((p) => {
                const short = p.review || p.note || p.desc
                return (
                  <tr key={p.n}>
                    <td><Thumb src={p.image} alt={p.name} lg /></td>
                    <td data-label="Sản phẩm">
                      <div className="sname"><b>{p.name}</b><span><span className="badge src-legacy">Legacy</span> #{p.n} · keyword dropship/offer cũ</span></div>
                      <p className="clamp2 note">{short || 'Chưa có note.'}</p>
                    </td>
                    <td data-label="Nguồn"><div className="chips"><SrcChip href={p.facebook} kind="Facebook" /><SrcChip href={p.website} kind="website" /></div></td>
                    <td data-label="Quyết định"><div className="chips"><Sel value={meta.decisions[p.n] ?? 'Chưa quyết'} onChange={(v) => upd({ ...meta, decisions: { ...meta.decisions, [p.n]: v } })} /><button className="btn" onClick={() => setDetail({ kind: 'legacy', p })}>Xem chi tiết</button></div></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <details>
        <summary>Bảng đầy đủ, sửa tại chỗ (nhấp đúp để sửa)</summary>
        <MarketProducts title="12 sản phẩm cũ" />
      </details>

      {adding && (
        <Modal title="Thêm sản phẩm" onClose={() => setAdding(false)}>
          <Field label="Tên"><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
          <Field label="Link nguồn (Facebook, website, Ad Library)"><input value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} /></Field>
          <Field label="Ảnh (URL https, tuỳ chọn)"><input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} /></Field>
          <Field label="Note"><textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} /></Field>
          <Field label="Quyết định"><Sel value={form.decision} onChange={(v) => setForm({ ...form, decision: v })} /></Field>
          <div className="bar"><button className="btn pri" onClick={add} disabled={!form.name.trim()}>Thêm</button><button className="btn" onClick={() => setAdding(false)}>Hủy</button></div>
        </Modal>
      )}

      {detail && !editing && (
        <Modal title={detail.kind === 'legacy' ? detail.p.name : detail.a.name} onClose={() => setDetail(null)} wide>
          {detail.kind === 'legacy' ? (
            <div className="stack">
              <div className="chips"><span className="badge src-legacy">Legacy result</span><SrcChip href={detail.p.facebook} kind="Facebook" /><SrcChip href={detail.p.website} kind="website" />{detail.p.nameUrl && <a className="chip-link" href={detail.p.nameUrl} target="_blank" rel="noreferrer">Link tên ↗</a>}</div>
              <Thumb src={detail.p.image} alt={detail.p.name} lg />
              <p className="note">Nguồn: Google Sheet “Market Research”, bản xuất 09/11/2026 · phương pháp: keyword dropship/offer cũ.</p>
              <Field2 k="Mô tả" v={detail.p.desc} />
              <Field2 k="Đánh giá sơ bộ" v={detail.p.review} />
              <Field2 k="Bước tiếp theo" v={detail.p.next} />
              <Field2 k="Ghi chú" v={detail.p.note} />
              <div className="bar"><button className="btn" onClick={() => setEditing(detail.p)}>Sửa đủ</button><button className="btn" onClick={() => setDetail(null)}>Đóng</button></div>
            </div>
          ) : (
            <div className="stack">
              <div className="chips"><span className="badge src-amin">Amin note</span><SrcChip href={detail.a.link} kind="link" /></div>
              <Thumb src={detail.a.image} alt={detail.a.name} lg />
              <p className="note">Amin thêm ngày {detail.a.date}. Chỉ lưu trong trình duyệt này.</p>
              <Field2 k="Note" v={detail.a.note} />
              <div className="bar">
                <button className="btn dng" onClick={() => { upd({ ...meta, added: meta.added.filter((x) => x.id !== (detail as { a: Added }).a.id) }); setDetail(null) }}>Xóa sản phẩm này</button>
                <button className="btn" onClick={() => setDetail(null)}>Đóng</button>
              </div>
            </div>
          )}
        </Modal>
      )}
      {editing && <EditForm key={editing.n} item={editing} onSave={saveEdit} onClose={() => setEditing(null)} />}
    </div>
  )
}
