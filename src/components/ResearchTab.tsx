import type { Store } from '../data/types'
import { RESEARCH } from '../data/research'
import { Pill } from './ui'
import { CriteriaTables } from './CriteriaTables'
import { StatusSummary } from './StatusSummary'

const TONE = { 'nguồn': 'ok', 'suy luận': 'warn', 'chưa có': 'bad' } as const

// Tab "Nghiên cứu" (KAN-115 Bước 0, 0A): chân dung khách + tiêu chí video của store, dùng để đánh giá creative.
export function ResearchTab({ store }: { store: Store }) {
  const r = RESEARCH[store.id]
  if (!r) return <p className="note">Store này chưa có hồ sơ nghiên cứu.</p>
  const rows = (items: typeof r.persona.who) => (
    <ul className="dc-rules">{items.map((f) => (
      <li key={f.t}>{f.t} <Pill tone={TONE[f.level]}>{f.level}</Pill> <span className="note">({f.src})</span></li>
    ))}</ul>
  )
  return (
    <>
      <StatusSummary store={store} />

      <div className="card stack">
        <h2>Chân dung khách hàng</h2>
        <p className="note">Chỉ ghi điều có nguồn. "Suy luận" = rút từ angle và creative, chưa kiểm bằng dữ liệu khách thật. Store chưa bán nên chưa có số liệu khách.</p>
        <div className="dc-two">
          <div><p className="db-sec">Ai</p>{rows(r.persona.who)}</div>
          <div><p className="db-sec">Vấn đề họ gặp</p>{rows(r.persona.pains)}</div>
          <div><p className="db-sec">Mua và giá</p>{rows(r.persona.buy)}</div>
          <div><p className="db-sec">Chưa biết</p><ul className="dc-rules">{r.persona.unknown.map((x) => <li key={x}>{x}</li>)}</ul></div>
        </div>
      </div>

      <div className="card stack">
        <h2>Tiêu chí video của store</h2>
        <p className="banner">Sản phẩm đúng hình (Product Truth): {r.truth}</p>
        <div className="scroll">
          <table className="rt">
            <thead><tr><th>Video cần có</th><th>Gắn với tiêu chí</th><th>Ghi chú</th></tr></thead>
            <tbody>
              {r.must.map((m) => (
                <tr key={m.c}>
                  <td data-label="Video cần có">{m.c}</td>
                  <td data-label="Gắn với"><b>{m.map}</b></td>
                  <td data-label="Ghi chú" className="note">{m.note ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="dc-two">
          <div><p className="db-sec">Không được nói, không hiển thị</p><ul className="dc-rules">{r.forbid.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div>
            <p className="db-sec">Định dạng</p><p className="note">{r.format}</p>
            <p className="db-sec">Quyền asset</p><p className="note">{r.rights}</p>
            <p className="db-sec">Đối thủ đã ghi nhận</p><ul className="dc-rules">{r.competitors.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
        <p className="note">Bảng 0B (đánh giá từng video ads đối thủ) chưa dựng: KAN-116.</p>
      </div>

      <details className="card stack">
        <summary><b>Thang chấm video (dùng cho mọi store)</b> <span className="note">bấm để mở</span></summary>
        <CriteriaTables />
      </details>
    </>
  )
}
