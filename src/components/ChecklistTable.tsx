import { useState } from 'react'
import type { Video } from '../data/types'
import { checklistView, countText, CK_ICON, CK_LABEL } from '../data/checklistView'

/** Bộ đếm chữ ở cell Checklist mặc định (đủ mọi tiêu chí). */
export function ChecklistCount({ v }: { v: Video }) {
  const c = checklistView(v)
  if (!c) return null
  return (
    <div className="ck-count" aria-label={`Checklist ${c.total} tiêu chí: ${countText(c.counts)}`}>
      <span className="ck-ok">{c.counts.ok} đạt</span> · <span className="ck-bad">{c.counts.bad} không đạt</span> · <span className="ck-unk">{c.counts.unk} chưa xác minh</span> · <span className="ck-na">{c.counts.na} không áp dụng</span>
    </div>
  )
}

/** Chi tiết: bảng 4 cột Tiêu chí | Trạng thái | Giải thích ngắn | Bằng chứng, chia 4 nhóm. Chi tiết dài chỉ hiện khi bấm "Xem chi tiết". */
export function ChecklistTable({ v }: { v: Video }) {
  const c = checklistView(v)
  const [open, setOpen] = useState<Set<string>>(() => new Set())
  if (!c) return null
  const flip = (k: string) => setOpen((o) => { const n = new Set(o); if (n.has(k)) n.delete(k); else n.add(k); return n })
  return (
    <div className="ckt" aria-label="Checklist theo flow">
      <div className="ckt-sum"><b>{c.total} tiêu chí:</b> <ChecklistCount v={v} /></div>
      <div className="ckt-wrap">
        <table className="ckt-t">
          <thead><tr><th>Tiêu chí</th><th>Trạng thái</th><th>Giải thích ngắn</th><th>Bằng chứng</th></tr></thead>
          {c.groups.map((g) => (
            <tbody key={g.id}>
              <tr className="ckt-g"><th colSpan={4} scope="colgroup">{g.name}</th></tr>
              {g.rows.map((r) => {
                const id = `${v.id}:${r.k}`
                return [
                  <tr key={id} className={`ckt-r ck-${r.s}`}>
                    <td title={r.tip}>{r.label}</td>
                    <td><span className={`ckt-st ck-${r.s}`}><span aria-hidden="true">{CK_ICON[r.s]}</span> {CK_LABEL[r.s]}</span></td>
                    <td>{r.why}</td>
                    <td>{r.src ? <span className="ckt-src" title={r.src}>{r.src}</span> : <span className="note">—</span>}{r.full ? <> <button type="button" className="link" aria-expanded={open.has(id)} onClick={() => flip(id)}>{open.has(id) ? 'Ẩn chi tiết' : 'Xem chi tiết'}</button></> : null}</td>
                  </tr>,
                  open.has(id) ? <tr key={id + ':d'} className="ckt-d"><td colSpan={4}><p className="note pre">{r.full}</p></td></tr> : null,
                ]
              })}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}
