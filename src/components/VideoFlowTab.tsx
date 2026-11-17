import type { Store, Video, VideoFlow } from '../data/types'
import { DEFAULT_WORKFLOW, FALLBACK, FLOW_DOC, FLOW_DOC_VERSION, FLOW_LABEL, GATES, GATE_TONE, LEDGER_TONE, P0_EVIDENCE, RIGHTS_TONE, ROUTER } from '../data/videoFlows'
import { Pill } from './ui'

// Tab "Video flow" (KAN-102): router 2 flow (A/B), flow + cổng của từng creative, asset ledger của store.
export function VideoFlowTab({ store }: { store: Store }) {
  const videos = store.creative.filter((v) => v.flow)
  const ledger = store.assetLedger ?? []
  const flows: VideoFlow[] = ['A', 'B', '1', '2a', '2b', '3']
  return (
    <>
      <div className="card">
        <div className="bar">
          <h2>Chọn flow (router)</h2>
          <span className="sp" />
          <span className="note">Theo <span className="mono">{FLOW_DOC}</span> ({FLOW_DOC_VERSION})</span>
        </div>
        <div className="scroll">
          <table className="rt">
            <thead><tr><th>Đang có</th><th>Muốn</th><th>Flow</th><th>Cách làm</th></tr></thead>
            <tbody>
              {ROUTER.map((r) => (
                <tr key={r.flow}>
                  <td data-label="Đang có">{r.have}</td>
                  <td data-label="Muốn">{r.want}</td>
                  <td data-label="Flow"><b>{r.flow}</b></td>
                  <td data-label="Cách làm" className="note">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="vf-two">
          <div>
            <b>Workflow mặc định</b>
            <ol className="vf-steps">{DEFAULT_WORKFLOW.map((x) => <li key={x}>{x}</li>)}</ol>
          </div>
          <div>
            <b>Fallback (theo thứ tự)</b>
            <ol className="vf-steps">{FALLBACK.map((x) => <li key={x}>{x}</li>)}</ol>
          </div>
        </div>
        <p className="banner">{P0_EVIDENCE}</p>
      </div>

      <div className="card">
        <div className="bar">
          <h2>Flow và cổng của creative</h2>
          <span className="sp" />
          {flows.map((f) => <Pill key={f}>Flow {f}: {videos.filter((v) => v.flow === f).length}</Pill>)}
        </div>
        <p className="note">Flow của các video làm trước KAN-102 được gán hồi tố ngày 13/11/2026 theo công cụ và ref ghi trong kit (chưa xác minh từng video). Cổng: "Đạt" lấy theo trạng thái "Đã qua cổng" cũ (Amin chốt); còn lại là "Chưa review" cho tới khi có review độc lập.</p>
        {videos.length === 0 ? <p className="note">Store này chưa có creative gắn flow.</p> : (
          <div className="scroll">
            <table className="rt">
              <thead><tr><th>ID</th><th>Flow</th>{GATES.map(([k, l]) => <th key={k}>{l}</th>)}<th>Ghi chú flow / quyền</th></tr></thead>
              <tbody>
                {[...videos].sort((a, b) => a.flow!.localeCompare(b.flow!)).map((v) => (
                  <tr key={v.id}>
                    <td data-label="ID"><b>{v.id}</b><div className="note">{v.title}</div></td>
                    <td data-label="Flow"><FlowPill flow={v.flow!} /></td>
                    {GATES.map(([k, l]) => <td key={k} data-label={l}><GatePill v={v} k={k} /></td>)}
                    <td data-label="Ghi chú" className="note">{v.flowNote ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

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

export function GatePill({ v, k }: { v: Video; k: 'A' | 'C' | 'B' }) {
  const s = v.gates?.[k] ?? 'Chưa review'
  return <Pill tone={GATE_TONE[s]}>{k}: {s}</Pill>
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
