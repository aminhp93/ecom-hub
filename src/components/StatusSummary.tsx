import type { Store } from '../data/types'
import { CHANNELS } from '../data/types'
import { Pill } from './ui'

// Tổng hợp hiện trạng creative và social của một store (KAN-115): bao nhiêu video ở flow nào, qua cổng A/C/B chưa, đã đăng chưa.
const FLOW_ORDER: Array<[string, string]> = [
  ['A', 'Flow A (v2.0): phân tích ad đối thủ'],
  ['B', 'Flow B (v2.0): tự prompt'],
  ['1', 'Flow 1 (nhãn cũ → B)'],
  ['2a', 'Flow 2a (nhãn cũ → A)'],
  ['2b', 'Flow 2b (swap trên video ref)'],
  ['3', 'Flow 3 (ghép, đã bỏ 16/11)'],
]

function gateState(s?: string): string {
  if (!s) return 'Chưa có'
  const bad = s.includes('Không đạt'); const ok = s.replace(/Không đạt/g, '').includes('Đạt')
  if (bad && ok) return 'Hỗn hợp'
  if (bad) return 'Không đạt'
  if (s.startsWith('Chưa review')) return 'Chưa review'
  if (s.startsWith('Không áp dụng')) return 'Không áp dụng'
  if (ok) return 'Đạt'
  return 'Chưa có'
}
const STATES = ['Đạt', 'Hỗn hợp', 'Không đạt', 'Chưa review', 'Không áp dụng', 'Chưa có']
const TONE: Record<string, string> = { 'Đạt': 'ok', 'Hỗn hợp': 'warn', 'Không đạt': 'bad', 'Chưa review': 'warn', 'Không áp dụng': 'idle', 'Chưa có': 'idle' }

export function StatusSummary({ store }: { store: Store }) {
  const cr = store.creative
  const flowCount = (f: string) => cr.filter((v) => String(v.flow) === f).length
  const noFlow = cr.filter((v) => !v.flow).length
  const gate = (k: 'A' | 'C' | 'B') => {
    const m: Record<string, number> = {}
    cr.forEach((v) => { const s = gateState(v.gates?.[k]); m[s] = (m[s] ?? 0) + 1 })
    return m
  }
  const ev = cr.filter((v) => v.evaluation)
  const blocked = ev.filter((v) => v.evaluation!.variants?.length && v.evaluation!.variants.every((x) => x.blocked)).length
  const rec = (r: string) => ev.filter((v) => v.evaluation!.recommend === r).length
  const chans = Object.keys(CHANNELS) as Array<keyof typeof CHANNELS>
  const posts = chans.flatMap((k) => store.social[k].posts)
  const st = (s: string) => posts.filter((p) => p.status === s).length
  const postStatuses = Array.from(new Set(posts.map((p) => p.status)))

  return (
    <div className="card stack">
      <h2>Hiện trạng creative và social</h2>
      <p className="note">Tổng hợp từ store.json lúc mở trang. Nhãn flow cũ (1, 2a, 2b, 3) của video làm trước KAN-102 được gán hồi tố; nhãn mới là A và B.</p>
      <div className="dc-grid">
        <div className="dc-card"><b>{cr.length} creative</b><span>{ev.length} có đánh giá KAN-115 · {blocked} bị chặn ở mọi bản · Giữ {rec('Giữ')} · Sửa {rec('Sửa')} · Bỏ {rec('Bỏ')} · Chưa đủ dữ liệu {rec('Chưa đủ dữ liệu')}</span></div>
        <div className="dc-card"><b>{posts.length} bài social</b><span>{postStatuses.map((s) => `${s}: ${st(s)}`).join(' · ') || 'Chưa có bài'}</span></div>
      </div>
      <div className="scroll">
        <table className="rt">
          <thead><tr><th>Flow</th><th>Số creative</th></tr></thead>
          <tbody>
            {FLOW_ORDER.map(([f, label]) => <tr key={f}><td data-label="Flow">{label}</td><td data-label="Số creative"><b>{flowCount(f)}</b></td></tr>)}
            {noFlow > 0 && <tr><td data-label="Flow">Chưa gắn flow</td><td data-label="Số creative"><b>{noFlow}</b></td></tr>}
          </tbody>
        </table>
      </div>
      <div className="scroll">
        <table className="rt">
          <thead><tr><th>Cổng</th>{STATES.map((s) => <th key={s}>{s}</th>)}</tr></thead>
          <tbody>
            {([['A', 'Cổng A · prompt'], ['C', 'Cổng C · ảnh neo'], ['B', 'Cổng B · video']] as const).map(([k, l]) => {
              const g = gate(k)
              return (
                <tr key={k}>
                  <td data-label="Cổng">{l}</td>
                  {STATES.map((s) => <td key={s} data-label={s}>{g[s] ? <Pill tone={TONE[s]}>{g[s]}</Pill> : <span className="note">0</span>}</td>)}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="scroll">
        <table className="rt">
          <thead><tr><th>Kênh</th><th>Trạng thái kênh</th><th>Số bài</th><th>Đã đăng</th><th>Chưa đăng / khác</th></tr></thead>
          <tbody>
            {chans.map((k) => {
              const ch = store.social[k]
              const done = ch.posts.filter((p) => p.status === 'Đã đăng').length
              return <tr key={k}><td data-label="Kênh">{CHANNELS[k]}</td><td data-label="Trạng thái kênh" className="note">{ch.status}</td><td data-label="Số bài"><b>{ch.posts.length}</b></td><td data-label="Đã đăng">{done}</td><td data-label="Chưa đăng">{ch.posts.length - done}</td></tr>
            })}
          </tbody>
        </table>
      </div>
      <p className="note">Cổng "Hỗn hợp" = Muse đạt nhưng Flow không đạt (cùng một creative). "Đã đăng" đếm theo bài trong store.json; chưa ghép bài với từng creative vì nhiều bài ghi tên rút gọn (B5 sẽ đối chiếu).</p>
    </div>
  )
}
