import { useState } from 'react'
import type { Store, Video } from '../data/types'
import { computeReadiness, READY_TONE, type CState } from '../data/readiness'
import { Pill } from './ui'

const ICON: Record<CState, string> = { pass: '✓', fail: '✗', pending: '○', na: '—' }
const TONE: Record<CState, string> = { pass: 'ok', fail: 'bad', pending: 'warn', na: 'idle' }

// "Mức sẵn sàng": điểm n/8, thanh %, nhãn trạng thái, tiêu chí đang chặn, bấm mở rộng xem checklist.
export function ReadinessBadge({ store, v }: { store: Store; v: Video }) {
  const [open, setOpen] = useState(false)
  const r = computeReadiness(store, v)
  return (
    <div className="rdy">
      <div className="rdy-head">
        <span className="rdy-t">Mức sẵn sàng</span>
        <Pill tone={READY_TONE[r.label]}>{r.label}</Pill>
        <b className="rdy-score">{r.score}/8</b>
        <button className="link" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Thu gọn' : 'Checklist'}</button>
      </div>
      <div className="rdy-bar" role="progressbar" aria-valuenow={r.pct} aria-valuemin={0} aria-valuemax={100} aria-label={`Hoàn thiện ${r.pct}%`}><i style={{ width: `${r.pct}%` }} className={`rdy-${READY_TONE[r.label]}`} /></div>
      {r.blocker && r.label !== 'Final approved' && <div className="note rdy-blk"><b>{r.blocker.state === 'fail' ? 'Đang chặn' : 'Tiếp theo'} (#{r.blocker.n}):</b> {r.blocker.evidence}</div>}
      {open && (
        <ol className="rdy-list">
          {r.criteria.map((c) => (
            <li key={c.n}>
              <span className={`rdy-ic ${TONE[c.state]}`} aria-label={c.state}>{ICON[c.state]}</span>
              <div><b>{c.n}. {c.label}</b>{c.state === 'na' && <> <Pill tone="idle">Không áp dụng</Pill></>}<div className="note">{c.evidence}{c.date && <> · <span className="mono">{c.date}</span></>}</div></div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
