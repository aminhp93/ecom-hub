import { useState } from 'react'
import type { ChannelKey, Evidence, ProductInfoItem, Store } from '../data/types'
import { EVIDENCE_LABEL } from '../data/types'
import { today } from '../data/template'
import { Modal } from './Modal'
import { Field, Pill } from './ui'

interface Props {
  store: Store
  onChange: (s: Store) => void
}

const URL_RE = /(https?:\/\/[^\s<>"')]+)/g
/** Biến link trong text thành link bấm được (mở tab mới). */
function Linkify({ text }: { text: string }) {
  return (
    <>
      {text.split(URL_RE).map((part, i) =>
        /^https?:\/\//.test(part)
          ? <a key={i} href={part} target="_blank" rel="noreferrer">{part}</a>
          : <span key={i}>{part}</span>,
      )}
    </>
  )
}

/** Thông tin chính hiện trên cùng (theo số thứ tự dòng, ổn định dù đổi tên): ảnh, Facebook, web, ads đối thủ, giá mua, giá bán. */
const KEY_ROWS = [6, 21, 22, 23, 10, 12]
const KEY_TITLE: Record<number, string> = {
  6: 'Hình ảnh sản phẩm',
  21: 'Facebook page (đối thủ)',
  22: 'Web (đối thủ)',
  23: 'Ads (đối thủ)',
  10: 'Giá mua',
  12: 'Giá bán',
}

const SOCIAL_ROWS: Array<[ChannelKey, string]> = [
  ['TT', 'TikTok'],
  ['FB', 'Facebook'],
  ['YT', 'YouTube'],
  ['IG', 'Instagram'],
]

/** Một dòng: link đầu tiên (thêm +n nếu còn link khác) hoặc chữ cắt gọn; trống thì hiện "Trống". */
function OneLine({ text }: { text: string }) {
  if (!text) return <Pill>Trống</Pill>
  const urls = text.match(URL_RE) ?? []
  const first = urls[0]
  if (first) {
    return (
      <>
        <a href={first} target="_blank" rel="noreferrer" title={urls.join('\n')}>{first.replace(/^https?:\/\/(www\.)?/, '')}</a>
        {urls.length > 1 && <span className="note"> +{urls.length - 1}</span>}
      </>
    )
  }
  return <span title={text}>{text}</span>
}

export function ProductInfoTable({ store, onChange }: Props) {
  const [editing, setEditing] = useState<ProductInfoItem | null>(null)
  const [preview, setPreview] = useState(false)
  const [zoom, setZoom] = useState<{ src: string; label: string } | null>(null)
  const keyRows = KEY_ROWS.map((n) => store.productInfo.find((r) => r.n === n)).filter((r): r is ProductInfoItem => !!r)
  const rest = store.productInfo.filter((r) => !KEY_ROWS.includes(r.n))

  const saveRow = (row: ProductInfoItem) => {
    onChange({ ...store, productInfo: store.productInfo.map((r) => (r.n === row.n ? row : r)) })
    setEditing(null)
  }

  return (
    <>
      {store.avatar && (
        <div className="bar">
          <button className="avatar-btn" onClick={() => setPreview(true)} title="Bấm để xem lớn và tải về" aria-label={`Xem avatar ${store.name}`}>
            <img className="store-avatar" src={`/media/${store.avatar}`} alt={`Avatar ${store.name}`} />
          </button>
          <span className="note">Avatar {store.name}: <span className="mono">{store.avatar.split('/').pop()}</span></span>
        </div>
      )}
      <div className="bar">
        <h2>Thông tin chính</h2>
      </div>
      <div className="card pi-list">
        {keyRows.map((r) => {
          const imgs = r.n === 6 ? store.productImages ?? [] : []
          return (
            <div key={r.n} className="pi-row">
              <span className="pi-lab">{KEY_TITLE[r.n] ?? r.name}</span>
              <span className="pi-val">
                {imgs.length > 0 ? (
                  <span className="pi-imgs">
                    {imgs.map((im) => (
                      <button key={im.src} className="pi-img" onClick={() => setZoom(im)} title={im.label} aria-label={`Xem ảnh: ${im.label}`}>
                        <img src={`/media/${im.src}`} alt={im.label} loading="lazy" />
                      </button>
                    ))}
                  </span>
                ) : <OneLine text={r.value} />}
              </span>
              <button className="link" onClick={() => setEditing(r)}>Sửa</button>
            </div>
          )
        })}
        {SOCIAL_ROWS.map(([k, label]) => {
          const c = store.social[k]
          return (
            <div key={k} className="pi-row">
              <span className="pi-lab">{label}</span>
              <span className="pi-val">
                {c.url
                  ? <a href={c.url} target="_blank" rel="noreferrer" title={c.url}>{c.handle ? (c.handle.startsWith('@') ? c.handle : `@${c.handle}`) : c.url.replace(/^https?:\/\/(www\.)?/, '')}</a>
                  : <Pill>{c.status === 'Chưa tạo' ? 'Chưa tạo' : 'Chưa có link'}</Pill>}
              </span>
              <span />
            </div>
          )
        })}
      </div>
      <details className="card pi-more">
        <summary><b>Thông tin chi tiết</b> <span className="note">(bấm để xem; mỗi dòng có nguồn và nhãn bằng chứng, ô chưa có dữ liệu để trống)</span></summary>
        <div className="scroll">
          <table className="rt">
            <thead>
              <tr>
                <th>#</th><th>Nhóm</th><th>Thông tin</th><th>Giá trị</th><th>Bằng chứng</th><th>Nguồn · ngày</th><th />
              </tr>
            </thead>
            <tbody>
              {rest.map((r) => (
                <tr key={r.n}>
                  <td className="mono" data-label="#">{r.n}</td>
                  <td data-label="Nhóm">{r.group}</td>
                  <td data-label="Thông tin"><b>{r.name}</b></td>
                  <td className="val" data-label="Giá trị">{r.value ? <Linkify text={r.value} /> : <Pill>Trống</Pill>}</td>
                  <td data-label="Bằng chứng">{r.evidence && <Pill tone={EVIDENCE_LABEL[r.evidence].tone}>{EVIDENCE_LABEL[r.evidence].label}</Pill>}</td>
                  <td className="note" data-label="Nguồn · ngày">{r.source}{r.date && ` · ${r.date}`}</td>
                  <td><button className="link" onClick={() => setEditing(r)}>Sửa</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
      {preview && store.avatar && (
        <Modal title={`Avatar ${store.name}`} onClose={() => setPreview(false)}>
          <img className="avatar-big" src={`/media/${store.avatar}`} alt={`Avatar ${store.name}`} />
          <div className="rowact">
            <a className="btn pri" href={`/media/${store.avatar}`} download={store.avatar.split('/').pop()}>Tải về</a>
            <a className="btn" href={`/media/${store.avatar}`} target="_blank" rel="noreferrer">Mở ảnh gốc</a>
            <button className="btn" onClick={() => setPreview(false)}>Đóng</button>
          </div>
        </Modal>
      )}
      {zoom && (
        <Modal title={zoom.label} onClose={() => setZoom(null)}>
          <img className="avatar-big" src={`/media/${zoom.src}`} alt={zoom.label} />
          <div className="rowact">
            <a className="btn" href={`/media/${zoom.src}`} target="_blank" rel="noreferrer">Mở ảnh gốc</a>
            <button className="btn" onClick={() => setZoom(null)}>Đóng</button>
          </div>
        </Modal>
      )}
      {editing && <RowEditor row={editing} onSave={saveRow} onClose={() => setEditing(null)} />}
    </>
  )
}

function RowEditor({ row, onSave, onClose }: { row: ProductInfoItem; onSave: (r: ProductInfoItem) => void; onClose: () => void }) {
  const [value, setValue] = useState(row.value)
  const [evidence, setEvidence] = useState<Evidence>(row.evidence)
  const [source, setSource] = useState(row.source)

  return (
    <Modal title={`${row.n}. ${row.name}`} onClose={onClose}>
      <Field label="Giá trị">
        <textarea id="pi-value" autoFocus value={value} onChange={(e) => setValue(e.target.value)} />
      </Field>
      <div className="grid2">
        <Field label="Bằng chứng">
          <select id="pi-evidence" value={evidence} onChange={(e) => setEvidence(e.target.value as Evidence)}>
            <option value="">(chưa chọn)</option>
            {(Object.keys(EVIDENCE_LABEL) as Array<Exclude<Evidence, ''>>).map((k) => (
              <option key={k} value={k}>{EVIDENCE_LABEL[k].label}</option>
            ))}
          </select>
        </Field>
        <Field label="Nguồn">
          <input id="pi-source" value={source} onChange={(e) => setSource(e.target.value)} />
        </Field>
      </div>
      <p className="note">Để trống nếu chưa có dữ liệu. Không ghi số liệu chưa kiểm chứng như đã xác minh.</p>
      <div className="rowact">
        <button
          className="btn pri"
          onClick={() => onSave({ ...row, value: value.trim(), evidence, source: source.trim(), date: value.trim() ? today() : '' })}
        >
          Lưu
        </button>
        <button className="btn" onClick={onClose}>Hủy</button>
      </div>
    </Modal>
  )
}
