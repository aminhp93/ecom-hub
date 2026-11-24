import type { Store, Video, VideoFlow } from '../data/types'
import { FLOW_LABEL, GATES, GATE_TONE, LEDGER_TONE, RIGHTS_TONE } from '../data/videoFlows'
import { Pill } from './ui'

// Asset ledger của store (KAN-102). Router/flow/cổng nay nằm ở trang Tài liệu và bảng Creative.
export function VideoFlowTab({ store }: { store: Store }) {
  const ledger = store.assetLedger ?? []
  return (
    <>
      <div className="card">
        <div className="bar">
          <h2>Asset ledger</h2>
          <span className="sp" />
          <Pill tone="ok">approved {ledger.filter((r) => r.status === 'approved').length}</Pill>
          <Pill tone="warn">pending {ledger.filter((r) => r.status === 'pending').length}</Pill>
          <Pill tone="bad">blocked {ledger.filter((r) => r.status === 'blocked').length}</Pill>
        </div>
        <p className="note">Bản mẫu từ <span className="mono">0-dashboard/task-hub/archive/KAN-102/output/05b-ASSET-LEDGER-mau.csv</span>: người kiểm và ngày kiểm còn để "(mẫu)", chưa dòng nào approved. Asset chỉ được dùng khi quyền là owned/licensed/permitted và có bằng chứng; Amin xác nhận quyền.</p>
        {ledger.length === 0 ? <p className="note">Store này chưa có dòng ledger.</p> : (
          <div className="scroll">
            <table className="rt">
              <thead><tr><th>asset_id</th><th>Loại</th><th>Nguồn</th><th>rights_status</th><th>status</th><th>Flow · dùng ở</th><th>Ghi chú</th></tr></thead>
              <tbody>
                {ledger.map((r) => (
                  <tr key={r.asset_id}>
                    <td data-label="asset_id"><b className="mono">{r.asset_id}</b><div className="note">{r.description}</div></td>
                    <td data-label="Loại">{r.type}</td>
                    <td data-label="Nguồn"><div>{r.source_type}</div>{r.source_ref && (/^https?:/.test(r.source_ref) ? <a className="note" href={r.source_ref} target="_blank" rel="noreferrer">Mở nguồn ↗</a> : <div className="note">{r.source_ref}</div>)}</td>
                    <td data-label="rights_status"><Pill tone={RIGHTS_TONE[r.rights_status] ?? 'idle'}>{r.rights_status}</Pill></td>
                    <td data-label="status"><Pill tone={LEDGER_TONE[r.status] ?? 'idle'}>{r.status}</Pill></td>
                    <td data-label="Flow · dùng ở">{r.flow ? `Flow ${r.flow}` : '—'}{r.used_in_video && <div className="note">{r.used_in_video}</div>}</td>
                    <td data-label="Ghi chú" className="note">{r.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export function FlowPill({ flow }: { flow: VideoFlow }) {
  return <span title={FLOW_LABEL[flow]}><Pill tone={flow === '2b' ? 'bad' : flow === 'A' || flow === 'B' ? 'ok' : 'idle'}>Flow {flow}</Pill></span>
}

const GATE_HELP: Record<'A' | 'C' | 'B', string> = { A: 'Cổng A: kiểm prompt trước gen (đúng truth, một hình thái, hook, claim, credit)', C: 'Cổng C: kiểm ảnh neo trước gen clip (đủ bộ, cùng khung, nhân vật nhất quán)', B: 'Cổng B: kiểm video sau gen (sản phẩm, hành động, chữ, hook, CTA, lỗi AI, watermark)' }
export function GatePill({ v, k }: { v: Video; k: 'A' | 'C' | 'B' }) {
  const s = v.gates?.[k] ?? 'Chưa review'
  return <span title={GATE_HELP[k]}><Pill tone={GATE_TONE[s]}>{k}: {s}</Pill></span>
}

// Dòng pill gọn cho CreativeBoard
export function FlowGates({ v }: { v: Video }) {
  if (!v.flow && !v.gates) return null
  return (
    <div className="vf-pills">
      {v.flow && <FlowPill flow={v.flow} />}
      {GATES.map(([k]) => <GatePill key={k} v={v} k={k} />)}
    </div>
  )
}
