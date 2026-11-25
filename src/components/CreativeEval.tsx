import type { Video, GateKey } from '../data/types'
import { GATE_TONE, FLOW_LABEL } from '../data/videoFlows'
import { Pill } from './ui'
import type { Store } from '../data/types'
import { computeReadiness } from '../data/readiness'

const REC_TONE: Record<string, string> = { 'Giữ': 'ok', 'Sửa': 'warn', 'Bỏ': 'bad', 'Chưa đủ dữ liệu': 'idle' }
const G_NAME: Record<string, string> = { G1: 'Sản phẩm đúng hình', G2: 'Không claim ngoài truth', G3: 'Không footage/chữ đối thủ', G4: 'Ledger/quyền asset', G5: 'Không watermark', G6: 'Nhân vật AI/không testimonial giả', G7: 'Không lỗi AI rõ' }
const Q_NAME: Record<string, string> = { Q1: 'Hook 0–3 s', Q2: 'Giá trị thấy được', Q3: 'CTA cuối', Q4: 'Chữ đọc được', Q5: 'Nhịp/độ dài', Q6: 'Sản phẩm là trung tâm', Q7: '9:16, ≥720p', Q8: 'Nhạc/âm', Q9: 'Kiểm thử A/B' }
const S_NAME: Record<string, string> = { S1: 'Hook 0–3 s', S2: 'Mạch hoàn chỉnh', S3: 'Caption + nhãn AI', S4: 'Nhãn AI nền tảng', S5: 'Nhạc dùng được', S6: 'Tone store', S7: 'Đăng lại 4 kênh' }
const gTone = (s: string) => (s === 'Đạt' ? 'ok' : s === 'Sai' ? 'bad' : 'warn')
const num = (n: number | null) => (n == null ? '—' : String(n))

// Cột "Agent gen": công cụ/agent đã tạo video (Muse | Flow)
export function AgentCell({ v }: { v: Video }) {
  return v.agent ? <Pill tone="idle">{v.agent}</Pill> : <span className="note">—</span>
}

/** Nhãn flow ngắn "1 · Gen từ brief" cho đầu ô Prompt (KAN-132/P8). */
export const flowLabel = (v: Video): { k: '1' | '2' | '3'; t: string } | null => { const g = genKind(v); return g ? { k: g.k, t: `${g.k} · ${g.k === '1' ? 'Gen từ brief' : g.k === '2' ? 'Gen theo cấu trúc ref' : 'Dựng từ footage'}` } : null }

// Cột gọn "Flow · Agent": công cụ gen (Muse/Flow) + kiểu gen (Flow 1/2/3), có màu để phân biệt. Chi tiết ở tooltip.
const genKind = (v: Video): { k: '1' | '2' | '3'; t: string } | null => {
  const n = `${v.flowName ?? ''} ${v.flowNote ?? ''}`.toLowerCase()
  const m = /-F([123])-/.exec(v.id)
  const fcf = /^F([123])$/.exec(v.flowChecks?.flow ?? '')?.[1] as '1' | '2' | '3' | undefined
  const k = fcf ?? (/dựng từ clip|clip đối thủ|footage/.test(n) ? '3' : /cấu trúc|điểm dừng|tham chiếu/.test(n) ? '2' : /brief|thông tin sản phẩm|ảnh neo/.test(n) ? '1' : (m?.[1] as '1' | '2' | '3' | undefined))
  return k ? { k, t: k === '1' ? 'Gen từ brief' : k === '2' ? 'Gen theo cấu trúc ref' : 'Dựng từ footage nguồn/đối thủ đã lưu' } : null
}
export function FlowAgentCell({ v, part }: { v: Video; part?: 'flow' | 'agent' }) {
  const g = genKind(v)
  // Video cũ không có trường agent: suy từ mã/ghi chú (ghi rõ "suy ra" ở tooltip)
  const src = /Nguồn:\s*(Muse|Higgsfield|Google Flow|Flow)/i.exec(v.note ?? '')?.[1] ?? ''
  const hint = `${src} ${[v.media ?? ''].flat().map((x) => x.split('/').slice(-3).join('/')).join(' ')} ${v.id}`
  const guess = /muse|-M$|-MS$/i.test(hint) ? 'Muse' : /flow|omni/i.test(hint) ? 'Flow' : /higgs|seedance|-HF\b/i.test(hint) ? 'Higgsfield' : ''
  const ag = v.agent?.trim() || guess
  const tip = [v.flowName, v.flowDesc, ag && `Agent gen: ${ag}${!v.agent && guess ? ' (suy từ mã/file/ghi chú)' : ''}`].filter(Boolean).join('\n')
  return (
    <div className="fa" title={tip}>
      {part !== 'flow' && (ag ? <span className={`fa-t fa-${/muse/i.test(ag) ? 'muse' : /flow/i.test(ag) ? 'flow' : /higgs/i.test(ag) ? 'hf' : 'x'}`}>{ag}</span> : <span className="note">—</span>)}
      {part !== 'agent' && (g ? <span className={`fa-t fa-k${g.k}`}>{g.t}</span> : <span className="note">—</span>)}
    </div>
  )
}

// Cột "Flow" cho bảng creative: flow v2.0 (A/B) kèm nhãn cũ nếu khác
export function FlowCell({ v }: { v: Video }) {
  const raw = v.flow
  if (v.flowName) {
    const code = raw ? `${FLOW_LABEL[raw] ?? `Flow ${raw}`}${v.evaluation?.flowV2 && v.evaluation.flowV2 !== raw ? ` (nhãn cũ ${raw})` : ''}` : ''
    return (
      <div title={[v.flowDesc, code && `Mã nội bộ: ${code}`].filter(Boolean).join('\n')}>
        <Pill tone="ok">{v.flowName}</Pill>
        {v.flowDesc && <div className="note">{v.flowDesc}</div>}
      </div>
    )
  }
  if (!raw) return <span className="note">—</span>
  const v2 = v.evaluation?.flowV2 ?? raw
  return (
    <div title={FLOW_LABEL[raw]}>
      <Pill tone={v2 === 'A' || v2 === 'B' ? 'ok' : v2 === '2b' ? 'bad' : 'idle'}>Flow {v2}</Pill>
      {raw !== v2 && <div className="note">nhãn cũ: {raw}</div>}
    </div>
  )
}

// Cột cổng A/C/B: Đạt / Không đạt / Chưa review
export const GATE_WHAT: Record<GateKey, string> = {
  A: 'Cổng A · Prompt (trước gen). Agent độc lập đọc prompt: đúng REFERENCE và một hình thái sản phẩm; không vật/cơ chế ngoài sản phẩm; mỗi shot một thao tác; hook 0–3 s chưa có sản phẩm; không chữ/logo/footage đối thủ; không claim ngoài truth; credit đã được Amin duyệt.',
  C: 'Cổng C · Ảnh neo (trước gen clip). Chấm từng ảnh neo: đủ bộ sản phẩm đã khoá, cùng góc máy/khung, nhân vật nhất quán, đúng shot list, không chữ/logo/vật xuyên nhau, chừa 1/5 khung trên cho chữ. Không áp dụng khi gen thẳng từ prompt, không có ảnh neo.',
  B: 'Cổng B · Video (sau gen). Chấm clip thật: sản phẩm đúng hình, hành động đúng storyboard, chữ đọc được, nhịp 12–18 s, hook 0–3 s, CTA, không lỗi AI, không watermark. Sai nguồn/SKU/claim/quyền = lỗi chặn.',
}
export function GateCell({ v, k }: { v: Video; k: GateKey }) {
  const s = v.gates?.[k]
  if (!s) return <span className="note">—</span>
  const short = s.length > 22 ? s.slice(0, 22) + '…' : s
  const pill = <Pill tone={GATE_TONE[s as keyof typeof GATE_TONE] ?? 'warn'}>{short}</Pill>
  const checks = v.gateChecks?.[k]
  // Quick Preview chỉ hiện cho creative đã có gateChecks; cổng không áp dụng ghi N/A, không tạo checklist giả
  if (!v.gateChecks) return <span title={`${GATE_WHAT[k]}\n\nKết quả: ${s}`}>{pill}</span>
  const na = s.startsWith('Không áp dụng')
  return (
    <div>
      <span title={`${GATE_WHAT[k]}\n\nKết quả: ${s}`}>{pill}</span>
      {na && !checks?.length ? <div className="gq"><span className="gq-na">—</span></div> : checks?.length ? (
        <ul className="gq" aria-label={`Quick preview cổng ${k}`}>
          {checks.map((c) => <li key={c.k} className={`gq-${c.s}`}><b aria-label={c.s === 'ok' ? 'Đạt' : c.s === 'bad' ? 'Không đạt' : c.s === 'na' ? 'Không áp dụng' : 'Chưa xác minh'}>{c.s === 'ok' ? '✓' : c.s === 'bad' ? '✕' : c.s === 'na' ? '—' : '?'}</b> {c.t ?? c.k}</li>)}
        </ul>
      ) : null}
    </div>
  )
}

// Checklist riêng theo flow (KAN-120/P15): 4 nhóm, chỉ ✓/✕/?/— + tên ngắn; bằng chứng chi tiết ở tooltip (n) và tài liệu nguồn.
const FC_SYM = { ok: '✓', bad: '✕', unk: '?', na: '—' } as const
const FC_LBL = { ok: 'Đạt', bad: 'Không đạt', unk: 'Chưa xác minh', na: 'Không áp dụng' } as const
const FC_TIER = { M: 'Bắt buộc', C: 'Có điều kiện', O: 'Tùy chọn' } as const
export function FlowChecklistCell({ v }: { v: Video }) {
  const fc = v.flowChecks
  if (!fc) return null
  return (
    <div className="fck" aria-label="Checklist theo flow">
      {v.brief && <div className="fck-brief" title={v.brief.source ?? ''}><b>Brief:</b> {[v.brief.goal, v.brief.channel && `kênh ${v.brief.channel}`, v.brief.duration, v.brief.cta && 'CTA', v.brief.text && 'chữ', v.brief.voice && 'voice', v.brief.music && 'nhạc', v.brief.ai && 'AI'].filter(Boolean).join(' · ')}</div>}
      {fc.groups.map((g) => {
        const shown = g.items.filter((i) => i.s !== 'na')
        return (
          <div key={g.id} className="fck-g">
            <div className="fck-h">{g.name}</div>
            {shown.length === 0 ? <div className="gq"><span className="gq-na">—</span></div> : (
              <ul className="gq">
                {shown.map((i) => (
                  <li key={i.k} className={`gq-${i.s}`} title={`${i.k} · ${FC_TIER[i.tier]}${i.cond ? ` (điều kiện: ${i.cond})` : ''}${i.stage ? ` · cổng ${i.stage === 'G' ? 'Sẵn sàng gen' : 'Sẵn sàng đăng'}` : ''}${i.s === 'bad' && i.ft ? ` · lỗi ${i.ft}` : ''}\n${i.n ?? ''}`}>
                    <b aria-label={FC_LBL[i.s]}>{FC_SYM[i.s]}</b> {i.t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}

// Cột đánh giá cụ thể (KAN-115 B4): ads, social, đề xuất, chi tiết từng bản (Flow vs Muse)
export function EvalCell({ v }: { v: Video }) {
  const e = v.evaluation
  if (!e) return <span className="note">Chưa đánh giá</span>
  return (
    <div className="ev-cell">
      <div className="vf-pills"><Pill tone={REC_TONE[e.recommend]}>{e.recommend}</Pill>{e.seen ? <Pill tone="idle">đã xem</Pill> : <Pill tone="warn">chưa xem</Pill>}</div>
      {e.seen && (
        <>
          <div className="note"><b>Ads:</b> {e.ads} ({e.adsScore})</div>
          <div className="note"><b>Social:</b> {e.social} ({e.socScore})</div>
        </>
      )}
      <div className="note">{e.recommendNote}</div>
      {e.variants && (
        <details>
          <summary>Chi tiết {e.variants.length} bản</summary>
          {e.variants.map((x) => (
            <div key={x.file} className="ev-var">
              <div><b>{x.tool}</b> · {x.dur}s · {x.res} · audio {x.audio} {x.blocked ? <Pill tone="bad">bị chặn</Pill> : x.unverified ? <Pill tone="warn">thiếu bằng chứng {x.unverified}</Pill> : <Pill tone="ok">qua cổng chặn</Pill>}</div>
              <div className="note pre">{x.file.split('/').pop()}</div>
              <div className="vf-pills">{Object.entries(x.gates).map(([k, s]) => <span key={k} title={`${k} ${G_NAME[k]}: ${s}`}><Pill tone={gTone(s)}>{k} {s === 'Đạt' ? '✓' : s === 'Sai' ? '✗' : '?'}</Pill></span>)}</div>
              <div className="note"><b>Ads {x.adsScore}/{x.adsMax}:</b> {Object.entries(x.Q).map(([k, n]) => `${k} ${num(n)}`).join(' · ')}</div>
              <div className="note"><b>Social {x.socScore}/{x.socMax}:</b> {Object.entries(x.S).map(([k, n]) => `${k} ${num(n)}`).join(' · ')}</div>
              <div className="note">{x.note}</div>
            </div>
          ))}
          <div className="note">Gate G1–G7: {Object.entries(G_NAME).map(([k, n]) => `${k} ${n}`).join('; ')}. Q: {Object.entries(Q_NAME).map(([k, n]) => `${k} ${n}`).join('; ')}. S: {Object.entries(S_NAME).map(([k, n]) => `${k} ${n}`).join('; ')}. "—" = chưa chấm được.</div>
        </details>
      )}
      <div className="note">{e.by} · {e.date} · {e.verify}</div>
    </div>
  )
}

// Cột "Kết luận" duy nhất (gộp Mức sẵn sàng + Đánh giá): chỉ trả Sẵn sàng / Chưa sẵn sàng (video chưa tồn tại: Chưa làm).
// Có v.verdict (verify độc lập) thì giữ nguyên kết luận đó; không có thì Sẵn sàng chỉ khi readiness = Final approved.
export function ConclusionCell({ store, v }: { store: Store; v: Video }) {
  const label = v.verdict?.label ?? (computeReadiness(store, v).label === 'Final approved' ? 'Sẵn sàng' : 'Chưa sẵn sàng')
  const tone = label === 'Sẵn sàng' ? 'ok' : label === 'Chưa làm' ? 'idle' : 'bad'
  return (
    <div title={v.verdict ? `${v.verdict.by} · ${v.verdict.date}${v.verdict.source ? ` · ${v.verdict.source}` : ''}` : undefined}>
      {v.verdict?.gen ? <div className="note">Đăng</div> : null}
      <Pill tone={tone}>{label}</Pill>
      {v.verdict?.gen ? <><div className="note" style={{ marginTop: 6 }}>Gen</div><Pill tone={v.verdict.gen === 'Sẵn sàng' ? 'ok' : v.verdict.gen === 'Chưa làm' ? 'idle' : 'bad'}>{v.verdict.gen}</Pill></> : null}
      {label !== 'Sẵn sàng' && <Reasons v={v} />}
    </div>
  )
}

// Lý do Chưa sẵn sàng: ưu tiên lý do đã viết (verdict.reasons); không có thì rút từ checklist (✕ Chặn / ✕ Hậu kỳ / ? chưa xác minh).
function Reasons({ v }: { v: Video }) {
  const r = v.verdict?.reasons
  const its = (v.flowChecks?.groups ?? []).flatMap((g) => g.items).filter((i) => i.tier === 'M' || (i.tier === 'C' && i.s !== 'na'))
  const chan = r?.chan ?? its.filter((i) => i.s === 'bad' && i.ft !== 'Hậu kỳ').map((i) => i.t)
  const hauky = r?.hauky ?? its.filter((i) => i.s === 'bad' && i.ft === 'Hậu kỳ').map((i) => i.t)
  const chua = r?.chua ?? its.filter((i) => i.s === 'unk').map((i) => i.t)
  if (!chan.length && !hauky.length && !chua.length && !r?.next) return null
  const L = (cls: string, title: string, xs: string[]) => xs.length ? <div className={`rs ${cls}`}><b>{title}</b><ul>{xs.map((x) => <li key={x}>{x}</li>)}</ul></div> : null
  return (
    <div className="rs-wrap" aria-label="Lý do chưa sẵn sàng">
      {L('rs-chan', 'Chặn (gen lại/đổi nguồn)', chan)}
      {L('rs-hk', 'Hậu kỳ (0 credit)', hauky)}
      {L('rs-unk', 'Chưa xác minh', chua)}
      {r?.chung && <div className="note">{r.chung}</div>}
      {r?.next && <div className="rs-next"><b>Bước tiếp:</b> {r.next}</div>}
    </div>
  )
}
