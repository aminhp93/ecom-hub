import { useState } from 'react'
import type { Video } from '../data/types'
import { Modal } from './Modal'

// KAN-132/P29: cột "Đánh giá". Ô gọn: 2 khối có nhãn (thủ công của Amin, độc lập bên ngoài). Đầy đủ + nguồn Claude V28 mở ở popup.
// Ba nguồn luôn tách bạch, không gộp; kết luận verify của Claude vẫn ở cột "Kết luận".
const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/')
const TONE: Record<string, string> = { amin: 'rv-amin', chatgpt: 'rv-gpt', 'claude-v28': 'rv-cl' }

export function ReviewCell({ v, compact }: { v: Video; compact?: boolean }) {
  const [open, setOpen] = useState(false)
  const rs = v.reviews ?? []
  if (!rs.length) return <span className="note">—</span>
  const cell = rs.filter((r) => r.id !== 'claude-v28')
  return (
    <div className="rv-cell">
      {cell.map((r) => (
        <div key={r.id} className={`rv-box ${TONE[r.id] ?? ''}`}>
          <div className="rv-lb">{r.label}</div>
          <div className={compact ? 'rv-tx cz-clamp' : 'rv-tx'}>{r.headline}</div>
        </div>
      ))}
      <button type="button" className="link" onClick={() => setOpen(true)}>Xem đầy đủ ({rs.length} nguồn)</button>
      {open && (
        <Modal title={`Đánh giá · ${v.id}`} wide onClose={() => setOpen(false)}>
          <p className="note">Ba nguồn đánh giá, tách bạch, không gộp. Kết luận verify cũ của Claude không bị đổi.</p>
          {rs.map((r) => (
            <section key={r.id} className={`rv-sec ${TONE[r.id] ?? ''}`}>
              <h4>{r.label} <span className="pill idle">{r.kind}</span></h4>
              <p className="note">{r.by} · {r.date}{r.note ? ` · ${r.note}` : ''}</p>
              {r.full.length ? <ul>{r.full.map((t, i) => <li key={i}>{t}</li>)}</ul> : <p>{r.headline}</p>}
              <p className="note">Nguồn: <a href={`/preview/${enc(r.file)}`} target="_blank" rel="noreferrer">{r.file.split('/').pop()}</a></p>
            </section>
          ))}
          <div className="actions"><button className="btn" onClick={() => setOpen(false)}>Đóng (Esc)</button></div>
        </Modal>
      )}
    </div>
  )
}
