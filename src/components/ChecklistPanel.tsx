import type { Store } from '../data/types'
import { checkStore } from '../data/checklist'
import { Pill } from './ui'

// Bảng checklist đầu trang store: thấy ngay thiếu gì, đang làm gì, kênh nào đang có.
export function ChecklistPanel({ store }: { store: Store }) {
  const c = checkStore(store)
  return (
    <div className="check">
      <div>
        <h3>Product info bắt buộc <Pill tone={c.product.missing.length ? 'warn' : 'ok'}>{c.product.done}/{c.product.total}</Pill></h3>
        {c.product.missing.length === 0 ? <p className="note">Đủ các mục bắt buộc.</p> : <p><b>Thiếu:</b> {c.product.missing.join(', ')}</p>}
      </div>
      <div>
        <h3>Creative <Pill tone={c.creative.total ? 'ok' : 'warn'}>{c.creative.total} video</Pill></h3>
        <p>{c.creative.passed} đã qua cổng · {c.creative.doing} đang làm / chưa qua cổng</p>
      </div>
      <div>
        <h3>Social <Pill tone={c.social.live.length ? 'ok' : 'warn'}>{c.social.live.length}/4 kênh</Pill></h3>
        <p>{c.social.live.length ? `Đang có: ${c.social.live.join(', ')}` : 'Chưa có kênh nào'}</p>
        <p className="note">{c.social.posts} bài trong danh sách · {c.social.posted} đã đăng</p>
      </div>
      <div>
        <h3>Ai đang làm</h3>
        {(store.tasks ?? []).length === 0 ? <p className="note">Chưa gắn task.</p> : (store.tasks ?? []).map((t) => (
          <p key={t.id}><b>{t.key}</b>: {t.agents.filter((a) => a.state !== 'Xong').map((a) => `${a.kind} (${a.state})`).join(', ') || 'chưa có agent'}</p>
        ))}
      </div>
    </div>
  )
}
