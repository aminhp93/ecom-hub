import { useState } from 'react'
import type { Store, Video } from '../data/types'

// Form tạo creative (placeholder, Amin 20/11/2026): chọn kiểu gen theo template v4, agent, model, nguồn đầu vào
// (agent tự đề xuất/tự tìm hay Amin cung cấp) và dòng brief. Chỉ tạo một dòng Draft trong bảng; CHƯA nối agent, chưa gen.

type FlowKey = 'F1' | 'F2' | 'F3'
const FLOWS: Record<FlowKey, { name: string; desc: string; input: string; auto: string; manual: string; ph: string }> = {
  F1: { name: 'Gen từ brief', desc: 'Thông tin sản phẩm/ảnh neo + prompt', input: 'Ảnh neo / thông tin sản phẩm', auto: 'Agent lấy từ Product info của store', manual: 'Tôi cung cấp ảnh neo', ph: 'Đường dẫn ảnh neo, mỗi dòng 1 file (vd 1-dropship/stores/<store>/3-creative/refs/anchors/...)' },
  F2: { name: 'Gen theo cấu trúc video tham chiếu', desc: 'Rút cấu trúc từ ref rồi gen mới cho sản phẩm mình', input: 'Video tham chiếu', auto: 'Agent tự đề xuất ref (kho refs/doi-thu)', manual: 'Tôi cung cấp ref', ph: 'ID Meta Ad Library, link hoặc đường dẫn video ref, mỗi dòng 1 cái' },
  F3: { name: 'Dựng từ footage nguồn/đối thủ đã lưu', desc: 'Footage đã lưu (kho refs/doi-thu, quay thật, NCC, clip đã gen); quyền sử dụng footage kiểm riêng', input: 'Footage', auto: 'Agent tự tìm footage có quyền', manual: 'Tôi cung cấp footage', ph: 'Đường dẫn clip có quyền, mỗi dòng 1 file + nguồn/quyền' },
}
const AGENTS: Record<string, string[]> = {
  Muse: ['Muse Video'],
  Flow: ['Omni 1.2 Flash', 'Nano Banana (ảnh)'],
  Higgsfield: ['(tạm không dùng)'],
}

export function CreativeRequestForm({ store, onCreate }: { store: Store; onCreate: (v: Video) => void }) {
  const [open, setOpen] = useState(true)
  const [flow, setFlow] = useState<FlowKey>('F1')
  const [agent, setAgent] = useState('Muse')
  const [model, setModel] = useState(AGENTS.Muse[0])
  const [mode, setMode] = useState<'auto' | 'manual'>('auto')
  const [refs, setRefs] = useState('')
  const [structure, setStructure] = useState('')
  const [angle, setAngle] = useState('')
  const [goal, setGoal] = useState('Thử nội bộ')
  const [channel, setChannel] = useState('TikTok')
  const [duration, setDuration] = useState('10')
  const [opt, setOpt] = useState({ cta: true, text: true, voice: false, music: false, ai: false })
  const [done, setDone] = useState('')
  const f = FLOWS[flow]
  const pickAgent = (a: string) => { setAgent(a); setModel(AGENTS[a][0]) }
  const reset = () => { setRefs(''); setStructure(''); setAngle(''); setMode('auto'); setDone('') }
  const create = () => {
    const now = new Date()
    const stamp = now.toISOString().slice(0, 16).replace(/[-:T]/g, '').slice(2)
    const id = `${store.id.slice(0, 2).toUpperCase()}-DRAFT-${flow}-${stamp}`
    const inputs = refs.split('\n').map((x) => x.trim()).filter(Boolean)
    const v: Video = {
      id, title: angle.trim() || `${f.name} (draft)`, status: 'Chưa qua cổng', gate: 'A',
      angle: angle.trim() || undefined,
      step: 'Draft từ form tạo creative · chưa gen (form placeholder, chưa nối agent)',
      flowName: f.name, flowDesc: f.desc, agent,
      last_updated: now.toISOString().slice(0, 10),
      brief: { goal, channel, duration: `${duration} s`, ...opt, source: 'Form tạo creative' },
      genRequest: { flow, agent, model, inputMode: mode, inputs, structure: structure.trim() || undefined, createdAt: now.toISOString() },
    }
    onCreate(v)
    setDone(`Đã tạo draft ${id} (chưa gen).`)
  }
  return (
    <section className="card crf" aria-labelledby="crf-h">
      <div className="bar">
        <h3 id="crf-h">Tạo creative mới</h3>
        <span className="pill warn">Placeholder · chưa nối agent</span>
        <span className="sp" />
        <button className="btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>{open ? 'Thu gọn' : 'Mở form'}</button>
      </div>
      {open && (
        <div className="crf-grid">
          <fieldset className="crf-f">
            <legend>1. Kiểu gen</legend>
            {(Object.keys(FLOWS) as FlowKey[]).map((k) => (
              <label key={k} className={`crf-opt${flow === k ? ' on' : ''}`}>
                <input type="radio" name="crf-flow" checked={flow === k} onChange={() => { setFlow(k); setMode('auto') }} />
                <span><b>{FLOWS[k].name}</b><span className="note"> · {FLOWS[k].desc}</span></span>
              </label>
            ))}
          </fieldset>
          <fieldset className="crf-f">
            <legend>2. Agent và model</legend>
            <div className="crf-row">
              {Object.keys(AGENTS).map((a) => (
                <label key={a} className={`crf-chip${agent === a ? ' on' : ''}`}><input type="radio" name="crf-agent" checked={agent === a} disabled={a === 'Higgsfield'} onChange={() => pickAgent(a)} />{a}</label>
              ))}
            </div>
            <label className="crf-l">Model
              <select value={model} onChange={(e) => setModel(e.target.value)}>{AGENTS[agent].map((m) => <option key={m}>{m}</option>)}</select>
            </label>
          </fieldset>
          <fieldset className="crf-f">
            <legend>3. {f.input}</legend>
            <label className={`crf-opt${mode === 'auto' ? ' on' : ''}`}><input type="radio" name="crf-mode" checked={mode === 'auto'} onChange={() => setMode('auto')} />{f.auto}</label>
            <label className={`crf-opt${mode === 'manual' ? ' on' : ''}`}><input type="radio" name="crf-mode" checked={mode === 'manual'} onChange={() => setMode('manual')} />{f.manual}</label>
            {mode === 'manual' && <textarea rows={3} value={refs} onChange={(e) => setRefs(e.target.value)} placeholder={f.ph} />}
            {flow === 'F2' && <label className="crf-l">Cấu trúc muốn học (tùy chọn)<input value={structure} onChange={(e) => setStructure(e.target.value)} placeholder="vd: từng điểm dừng, countdown reveal, trước/sau" /></label>}
            {flow === 'F3' && <p className="note">Clip quảng cáo đối thủ chỉ để học cấu trúc, không đưa vào timeline.</p>}
          </fieldset>
          <fieldset className="crf-f">
            <legend>4. Dòng brief</legend>
            <div className="crf-row">
              <label className="crf-l">Mục tiêu<select value={goal} onChange={(e) => setGoal(e.target.value)}><option>Thử nội bộ</option><option>Đăng organic</option><option>Ads</option></select></label>
              <label className="crf-l">Kênh<select value={channel} onChange={(e) => setChannel(e.target.value)}><option>TikTok</option><option>Reels</option><option>FB</option><option>YT Shorts</option></select></label>
              <label className="crf-l">Thời lượng (s)<input type="number" min={4} max={60} value={duration} onChange={(e) => setDuration(e.target.value)} /></label>
            </div>
            <div className="crf-row">
              {([['cta', 'CTA'], ['text', 'Chữ'], ['voice', 'Voice'], ['music', 'Nhạc'], ['ai', 'Nhãn AI']] as const).map(([k, l]) => (
                <label key={k} className={`crf-chip${opt[k] ? ' on' : ''}`}><input type="checkbox" checked={opt[k]} onChange={(e) => setOpt({ ...opt, [k]: e.target.checked })} />{l}</label>
              ))}
            </div>
          </fieldset>
          <fieldset className="crf-f crf-wide">
            <legend>5. Angle / ghi chú (tùy chọn)</legend>
            <input value={angle} onChange={(e) => setAngle(e.target.value)} placeholder="vd: Countdown reveal tường trống → bộ kệ; để trống nếu muốn agent đề xuất" />
          </fieldset>
          <div className="crf-act crf-wide">
            <button className="btn pri" onClick={create}>Tạo draft</button>
            <button className="btn" onClick={reset}>Đặt lại</button>
            <span className="note" aria-live="polite">{done || 'Tạo một dòng Draft trong bảng bên dưới; agent chưa tự chạy.'}</span>
          </div>
        </div>
      )}
    </section>
  )
}
