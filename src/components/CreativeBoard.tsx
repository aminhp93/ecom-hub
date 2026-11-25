import { useState } from 'react'
import type { Store, Video, VideoInput } from '../data/types'
import { uid } from '../data/template'
import { Modal } from './Modal'
import { Field, Media, Pill, DriveLink } from './ui'
import type { GenKit, GateState, VideoFlow } from '../data/types'
import { FlowGates } from './VideoFlowTab'
import { CreativeRequestForm } from './CreativeRequestForm'
import { groupCreatives } from '../data/creativeGroups'
import type { CreativeGroup } from '../data/creativeGroups'
import { UsedPrompt, UsedInputs } from './UsedAssets'
import { ConclusionCell, FlowAgentCell, GateCell, flowLabel } from './CreativeEval'
import { ChecklistTable, ChecklistCount } from './ChecklistTable'
import { checklistView, flowTextFix } from '../data/checklistView'

// Đối chiếu bài social với creative: post.creative, tiền tố tiêu đề "<ID> · ", tiền tố id bài, tên file media. Chỉ đọc, không ghi.
const SOC_CH = [['FB', 'FB'], ['IG', 'IG'], ['TT', 'TikTok'], ['YT', 'YT']] as const
type SocState = { state: 'posted' | 'created'; url?: string; postId: string }
export function socialOf(store: Store, v: Video): Partial<Record<'FB' | 'IG' | 'TT' | 'YT', SocState>> {
  const ids = new Set(store.creative.map((c) => c.id))
  const base = (x: string) => x.split('/').pop() ?? x
  const mine = new Set((Array.isArray(v.media) ? v.media : v.media ? [v.media] : []).map(base))
  const out: Partial<Record<'FB' | 'IG' | 'TT' | 'YT', SocState>> = {}
  for (const [k] of SOC_CH) {
    for (const p of store.social?.[k]?.posts ?? []) {
      const head = (p.title ?? '').split(' · ')[0].trim()
      const hit = p.creative === v.id || (v.archive ?? []).some((a) => a.id === p.creative) || (!ids.has(p.creative ?? '') && (head === v.id || (p.id.startsWith(v.id + '-') && !store.creative.some((c) => c.id !== v.id && c.id.length > v.id.length && p.id.startsWith(c.id + '-'))) || (p.media && mine.has(base(p.media)))))
      if (!hit) continue
      const posted = p.status === 'Đã đăng'
      if (!out[k] || (posted && out[k]!.state !== 'posted')) out[k] = { state: posted ? 'posted' : 'created', url: p.url || undefined, postId: p.id }
    }
  }
  return out
}

/** Lịch sử phiên bản của một Creative ID: các version khác (và archive lồng sẵn) chỉ để tham chiếu; bản đang hiện nằm trên thẻ. */
function VersionHistory({ store, g }: { store: Store; g?: CreativeGroup }) {
  if (!g) return null
  const items = [...g.history.flatMap((h) => [h, ...(h.archive ?? [])]), ...(g.active.archive ?? [])]
  if (!items.length) return null
  return (
    <details className="arch vh" open={false}>
      <summary>Lịch sử phiên bản: {items.length} bản ({items.map((a) => `v${a.id.split('-').pop()}`).join(', ')}) · đang hiện {g.label || g.active.id}</summary>
      {items.map((a) => (
        <div key={a.id} className="arch-it">
          <b>{a.id}</b> <span className="note">{a.agent ? `${a.agent} · ` : ''}{a.last_updated ?? '—'} · {a.verdict?.label ?? a.status}</span>
          <div className="note">{a.hook}</div>
          {a.media ? mediaList(a.media).map((m) => <Media key={m} src={m} />) : <span className="note">Chưa có video</span>}
          {a.media ? <div className="note">{mediaList(a.media).map((m) => <a key={m} href={/^https?:/.test(m) ? m : `/media/${m.split('/').map(encodeURIComponent).join('/')}`} target="_blank" rel="noreferrer">Mở {m.split('/').pop()}</a>)}</div> : null}
          <SocialCell store={store} v={a} />
          <details className="vh-as"><summary>Prompt &amp; input của {a.id}</summary><UsedPrompt store={store} v={a} /><UsedInputs store={store} v={a} /></details>
        </div>
      ))}
    </details>
  )
}

/** Ảnh/preview nhỏ nhất cho cột Video: khung hình giây 0,5 (preload metadata, không tải cả file); rê chuột để xem thử (tắt tiếng). */
function Thumb({ list }: { list: string[] }) {
  const [bad, setBad] = useState(false)
  const src = list[0]
  if (!src || bad) return <span className="note">Chưa có</span>
  const url = /^https?:/.test(src) ? src : `/media/${src.split('/').map(encodeURIComponent).join('/')}`
  const isImg = /\.(png|jpe?g|gif|webp)$/i.test(src)
  return (
    <span className="th-wrap" title={src.split('/').pop()}>
      {isImg ? <img className="th" src={url} alt="" loading="lazy" onError={() => setBad(true)} />
        : <video className="th" src={`${url}#t=0.5`} muted playsInline preload="metadata" onError={() => setBad(true)}
            onMouseEnter={(e) => { void e.currentTarget.play().catch(() => {}) }} onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0.5 }} />}
      {list.length > 1 ? <i className="th-n">{list.length}</i> : null}
    </span>
  )
}
function SocialCell({ store, v }: { store: Store; v: Video }) {
  const m = socialOf(store, v)
  return (
    <div className="soc-cell">
      {SOC_CH.map(([k, label]) => { const x = m[k]; return x ? (
        <span key={k} className={`soc-chip ${x.state}`} title={`${x.state === 'posted' ? 'Đã đăng' : 'Đã tạo post (chưa đăng)'} · ${x.postId}`}>{x.url ? <a href={x.url} target="_blank" rel="noreferrer">{label}</a> : label}{x.state === 'posted' ? ' ✓' : ' ·tạo'}</span>
      ) : <span key={k} className="soc-chip none" title="Chưa tạo post">{label} –</span> })}
    </div>
  )
}

interface Props {
  store: Store
  onChange: (s: Store) => void
}

export function CreativeBoard({ store, onChange }: Props) {
  const [editing, setEditing] = useState<Video | 'new' | null>(null)
  const [view, setViewState] = useState<'card' | 'list'>(() => { try { return localStorage.getItem('creativeView') === 'card' ? 'card' : 'list' } catch { return 'list' } })
  const setView = (v: 'card' | 'list') => { setViewState(v); try { localStorage.setItem('creativeView', v) } catch { /* bỏ qua */ } }

  const upsert = (v: Video) => {
    const exists = store.creative.some((x) => x.id === v.id)
    onChange({ ...store, creative: exists ? store.creative.map((x) => (x.id === v.id ? v : x)) : [...store.creative, v] })
    setEditing(null)
  }
  const [filter, setFilter] = useState<'all' | 'draft' | 'video'>('all')
  // Hàng gọn mặc định (1–2 dòng); bấm vào hàng để mở đầy đủ, bấm lần nữa để thu lại
  const [open, setOpen] = useState<Set<string>>(() => new Set())
  const toggle = (id: string) => setOpen((o) => { const n = new Set(o); if (n.has(id)) n.delete(id); else n.add(id); return n })
  // Nhóm theo Creative ID: grid chỉ hiện version đang hiện (active) của mỗi ID; version khác nằm trong "Lịch sử phiên bản" của thẻ
  const groups = groupCreatives(store.creative)
  const gOf = new Map(groups.map((g) => [g.active.id, g]))
  const actives = groups.map((g) => g.active)
  const isDraft = (v: Video) => v.draft ?? !v.media
  const drafts = actives.filter(isDraft).length
  // Draft (chưa có video) lên đầu, giữ nguyên thứ tự còn lại
  const shown = [...actives.filter((v) => (filter === 'video' ? !!v.media : filter === 'draft' ? isDraft(v) : true))].sort((a, b) => Number(!isDraft(a)) - Number(!isDraft(b)))
  const remove = (id: string) => onChange({ ...store, creative: store.creative.filter((x) => x.id !== id) })

  return (
    <>
      <CreativeRequestForm store={store} onCreate={(v) => onChange({ ...store, creative: [v, ...store.creative] })} />
      <div className="bar">
        <h2>Creative</h2>
        <span className="sp" />
        {([['all', `Tất cả ${actives.length}`], ['draft', `Draft ${drafts}`], ['video', `Có video ${actives.filter((v) => !!v.media).length}`]] as const).map(([k, l]) => (
          <button key={k} className={filter === k ? 'btn pri' : 'btn'} aria-pressed={filter === k} onClick={() => setFilter(k)}>{l}</button>
        ))}
        <button className={view === 'card' ? 'btn pri' : 'btn'} aria-pressed={view === 'card'} aria-label="Xem dạng thẻ" title="Dạng thẻ" onClick={() => setView('card')}>▦</button>
        <button className={view === 'list' ? 'btn pri' : 'btn'} aria-pressed={view === 'list'} aria-label="Xem dạng danh sách" title="Dạng danh sách" onClick={() => setView('list')}>☰</button>
        <button className="btn pri" onClick={() => setEditing('new')}>+ Tạo creative</button>
      </div>
      {store.creative.length === 0 ? (
        <div className="card"><p>Store này chưa có video. Thêm video hoặc angle đầu tiên để bắt đầu.</p></div>
      ) : (
        <>
          {view === 'list' ? (
                <div className="vlist-wrap">
                  <table className="vlist">
                    <thead><tr>
                      <th>ID<span className="gh">kèm agent gen</span></th><th>Video</th><th>Draft</th><th>Angle / hook</th>
                      <th>Prompt<span className="gh">kèm loại flow</span></th><th>Input<span className="gh">F3: asset đã dùng · F1/F2: ref</span></th>
                      <th colSpan={3}>Checklist<span className="gh">Theo từng flow</span></th>
                      <th>Kết luận</th><th>Social<span className="gh">đã tạo / đã đăng</span></th><th>last_updated</th><th />
                    </tr></thead>
                    <tbody>
                      {shown.map((v) => {
                        if (!open.has(v.id)) return <CompactRow key={v.id} store={store} v={v} g={gOf.get(v.id)} onToggle={() => toggle(v.id)} onEdit={() => setEditing(v)} onRemove={() => { if (window.confirm(`Xóa ${v.id}?`)) remove(v.id) }} />
                        return (
                          <tr key={v.id} className="vl-open" id={`row-${v.id}`}>
                            <td className="vl-id"><button type="button" className="vl-tg open" onClick={() => toggle(v.id)} aria-expanded="true" aria-controls={`row-${v.id}`} aria-label={`Thu gọn chi tiết ${v.id}`} title="Thu gọn chi tiết"><span aria-hidden="true">▾</span></button><b>{v.id}</b><div className="vl-ag"><FlowAgentCell v={v} part="agent" /></div></td>
                            <td className="vl-media">{v.media ? mediaList(v.media).map((m) => <Media key={m} src={m} />) : <div className="thumb">Chưa có</div>}</td>
                            <td className="vl-draft">{isDraft(v) ? <Pill tone="warn">Draft</Pill> : <span className="note">—</span>}</td>
                            <td className="vl-angle"><div className="vl-scroll"><div><b>Angle:</b> {v.angle || '—'}</div><div><b>Hook:</b> {v.hook || '—'}</div><VersionHistory store={store} g={gOf.get(v.id)} /></div></td>
                            <td className="vl-prompt"><div className="vl-cell"><PromptCell store={store} v={v} /></div></td>
                            <td className="vl-ref"><div className="vl-cell vl-cell-free">{v.inputs ? <InputList v={v} /> : <UsedInputs store={store} v={v} />}</div></td>
                            {v.flowChecks ? <td className="vl-gate vl-fck" colSpan={3}><div className="vl-cell vl-cell-free"><ChecklistTable v={v} /></div></td> : (
                              <>
                                <td className="vl-gate"><div className="vl-cell"><span className="gh">Cổng A · Prompt (trước gen)</span><GateCell v={v} k="A" /></div></td>
                                <td className="vl-gate"><div className="vl-cell"><span className="gh">Cổng C · Ảnh neo</span><GateCell v={v} k="C" /></div></td>
                                <td className="vl-gate"><div className="vl-cell"><span className="gh">Cổng B · Video (sau gen)</span><GateCell v={v} k="B" /></div></td>
                              </>
                            )}
                            <td className="vl-ready"><div className="vl-cell"><ConclusionCell store={store} v={v} /></div></td>
                            <td className="vl-soc"><SocialCell store={store} v={v} /></td>
                            <td className="vl-upd">{v.last_updated ?? <span className="note">—</span>}</td>
                            <td className="vl-act"><button className="link" onClick={() => setEditing(v)}>Sửa</button><button className="link bad" onClick={() => { if (window.confirm(`Xóa ${v.id}?`)) remove(v.id) }}>Xóa</button></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
          ) : (
            <>
          {([['Đang làm / chưa qua cổng', shown.filter((v) => v.status !== 'Đã qua cổng')], ['Đã qua cổng', shown.filter((v) => v.status === 'Đã qua cổng')]] as const).map(([label, list]) => (
            <section key={label}>
              <h3 className="grp">{label} <Pill tone={label === 'Đã qua cổng' ? 'ok' : 'warn'}>{list.length}</Pill></h3>
              {list.length === 0 ? <p className="note">Chưa có.</p> : (
                <div className="vgrid">
                  {list.map((v) => (
                    <div className="vid" key={v.id}>
                      {v.media ? <div className="vmedia">{mediaList(v.media).map((m) => <Media key={m} src={m} />)}</div> : <div className="thumb">Chưa có video</div>}
                      <div className="vbody">
                        <div className="bar">
                          <b>{v.id}</b>
                          <Pill tone={v.status === 'Đã qua cổng' ? 'ok' : 'warn'}>{v.status}</Pill>
                          <Pill>Cổng {v.gate}</Pill>
                          {isDraft(v) && <Pill tone="warn">Draft</Pill>}
                        </div>
                        <FlowGates v={v} />
                        <ConclusionCell store={store} v={v} />
                        {v.flowNote && <p className="note full"><b>Flow / quyền:</b> {flowTextFix(v.flowNote)}</p>}
                        <div>{v.title}</div>
                        {v.last_updated && <div className="note full"><b>last_updated:</b> {v.last_updated}</div>}
                        {v.format && <div className="note full"><b>Format:</b> {v.format}</div>}
                        {v.hook && <div className="note full"><b>Hook:</b> {v.hook}</div>}
                        {v.step && <p className="note full"><b>Bước hiện tại:</b> {v.step}</p>}
                        {v.note && <p className="note pre full">{v.note}</p>}
                        {v.kit && <Kit kit={v.kit} id={v.id} />}
                        <VersionHistory store={store} g={gOf.get(v.id)} />
                        <div className="rowact">
                          <button className="link" onClick={() => setEditing(v)}>Sửa</button>
                          <button className="link bad" onClick={() => remove(v.id)}>Xóa</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
            </>
          )}
        </>
      )}
      {editing && <VideoForm video={editing === 'new' ? undefined : editing} onSave={upsert} onDelete={(id) => { remove(id); setEditing(null) }} onClose={() => setEditing(null)} />}
    </>
  )
}

const mediaList = (m: string | string[]) => (Array.isArray(m) ? m : [m])
const TOOLS = ['Higgsfield Marketing Studio', 'Higgsfield Genjutsu', 'Muse (muse.ai)', 'Google Flow', 'Khác']
const MODES = ['', 'UGC Selfie Testimonial', 'Camera POV', 'Mess to Fresh', 'Unboxing', 'Khác']
const HOOKS = ['', 'Spicy', 'Product Crash', 'Epic Fail', 'Không hook']
const SETTINGS = ['', 'Bedroom', 'Nature', 'Roofing', 'Living room', 'Office', 'Khác']
const FLOWS = ['', 'A', 'B', '1', '2a', '2b', '3']
const GATE_STATES = ['Chưa review', 'Đạt', 'Không đạt', 'Không áp dụng']
const lines = (t: string) => t.split('\n').map((x) => x.trim()).filter(Boolean)

function VideoForm({ video, onSave, onDelete, onClose }: { video?: Video; onSave: (v: Video) => void; onDelete: (id: string) => void; onClose: () => void }) {
  const k = video?.kit
  const f = k?.fields ?? {}
  const [id, setId] = useState(video?.id ?? `V-${uid().slice(0, 4).toUpperCase()}`)
  const [title, setTitle] = useState(video?.title ?? '')
  const [tool, setTool] = useState(k?.tool ?? TOOLS[0])
  const [mode, setMode] = useState(f.mode ?? '')
  const [hook, setHook] = useState(f.hook ?? '')
  const [setting, setSetting] = useState(f.setting ?? '')
  const [product, setProduct] = useState(f.product ?? '')
  const [avatar, setAvatar] = useState(f.avatar ?? '')
  const [duration, setDuration] = useState(f.duration ?? '12 s')
  const [resolution, setResolution] = useState(f.resolution ?? '480p')
  const [aspect, setAspect] = useState(f.aspect ?? '9:16')
  const [audio, setAudio] = useState(f.audio ?? 'Bật')
  const [prompt, setPrompt] = useState(k?.prompt ?? '')
  const [refVideo, setRefVideo] = useState((k?.referenceVideo ?? []).join('\n'))
  const [refImg, setRefImg] = useState((k?.product ?? []).join('\n'))
  const [media, setMedia] = useState(Array.isArray(video?.media) ? video.media.join('\n') : (video?.media ?? ''))
  const [flow, setFlow] = useState<VideoFlow | ''>(video?.flow ?? '')
  const [agent, setAgent] = useState(video?.agent ?? '')
  const [gA, setGA] = useState<GateState>(video?.gates?.A ?? 'Chưa review')
  const [gC, setGC] = useState<GateState>(video?.gates?.C ?? 'Chưa review')
  const [gB, setGB] = useState<GateState>(video?.gates?.B ?? 'Chưa review')

  const save = () => {
    if (!id.trim()) return
    const fields = { mode, hook, setting, product, avatar, duration, resolution, aspect, audio }
    const config = [mode && `Mode ${mode}`, hook && `Hook ${hook}`, setting && `Setting ${setting}`, product && `Product ${product}`, avatar && `Avatar ${avatar}`, resolution, duration, aspect, `Audio ${audio.toLowerCase()}`].filter(Boolean).join(' · ')
    const kit = { ...video?.kit, tool, config, fields, prompt, referenceVideo: lines(refVideo), product: lines(refImg) }
    onSave({ gate: 'C', status: 'Chưa qua cổng', ...video, last_updated: new Date().toISOString().slice(0, 10), id: id.trim(), title: title.trim() || id.trim(), media: media.trim() ? (media.includes('\n') ? lines(media) : media.trim()) : undefined, kit, flow: flow || undefined, agent: agent.trim() || undefined, gates: { A: gA, C: gC, B: gB } })
  }
  const sel = (v: string, set: (x: string) => void, opts: string[]) => (
    <select value={v} onChange={(e) => set(e.target.value)}>{opts.map((o) => <option key={o} value={o}>{o || '—'}</option>)}</select>
  )

  return (
    <Modal title={video ? 'Sửa creative' : 'Tạo creative (prompt)'} onClose={onClose}>
      <p className="note">Không có video thì lưu thành Draft (xóa được bất cứ lúc nào). Gen xong thì dán đường dẫn video vào ô cuối.</p>
      <div className="grid2">
        <Field label="Mã"><input id="v-id" value={id} disabled={!!video} onChange={(e) => setId(e.target.value)} /></Field>
        <Field label="Công cụ">{sel(tool, setTool, TOOLS)}</Field>
        <Field label="Flow (KAN-102)">{sel(flow, (x) => setFlow(x as VideoFlow | ''), FLOWS)}</Field>
        <Field label="Agent gen">{sel(agent, setAgent, ['', 'Muse', 'Flow'])}</Field>
      </div>
      <div className="grid2">
        <Field label="Cổng A · prompt">{sel(gA, (x) => setGA(x as GateState), GATE_STATES)}</Field>
        <Field label="Cổng C · ảnh neo">{sel(gC, (x) => setGC(x as GateState), GATE_STATES)}</Field>
        <Field label="Cổng B · video">{sel(gB, (x) => setGB(x as GateState), GATE_STATES)}</Field>
      </div>
      <Field label="Tên / angle"><input id="v-title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} /></Field>
      <div className="grid2">
        <Field label="Mode">{sel(mode, setMode, MODES)}</Field>
        <Field label="Hook preset">{sel(hook, setHook, HOOKS)}</Field>
        <Field label="Setting preset">{sel(setting, setSetting, SETTINGS)}</Field>
        <Field label="Product"><input value={product} placeholder="vd 11d85c81" onChange={(e) => setProduct(e.target.value)} /></Field>
        <Field label="Avatar / nhân vật"><input value={avatar} placeholder="Trống nếu không dùng" onChange={(e) => setAvatar(e.target.value)} /></Field>
        <Field label="Thời lượng"><input value={duration} onChange={(e) => setDuration(e.target.value)} /></Field>
        <Field label="Độ phân giải">{sel(resolution, setResolution, ['480p', '720p', '1080p'])}</Field>
        <Field label="Tỉ lệ">{sel(aspect, setAspect, ['9:16', '16:9', '1:1', 'auto'])}</Field>
        <Field label="Audio">{sel(audio, setAudio, ['Bật', 'Tắt'])}</Field>
      </div>
      <Field label="Prompt"><textarea rows={10} value={prompt} onChange={(e) => setPrompt(e.target.value)} /></Field>
      <Field label="Video ref (đường dẫn, mỗi dòng 1 file)"><textarea rows={2} value={refVideo} onChange={(e) => setRefVideo(e.target.value)} /></Field>
      <Field label="Ảnh ref / sản phẩm (đường dẫn, mỗi dòng 1 file)"><textarea rows={2} value={refImg} onChange={(e) => setRefImg(e.target.value)} /></Field>
      <Field label="Video đã gen (đường dẫn; để trống = Draft)"><input value={media} onChange={(e) => setMedia(e.target.value)} /></Field>
      <div className="rowact">
        <button className="btn pri" onClick={save}>{media.trim() ? 'Lưu' : 'Lưu Draft'}</button>
        <button className="btn" onClick={onClose}>Hủy</button>
        {video && <button className="link bad" onClick={() => { if (window.confirm(`Xóa ${video.id}?`)) onDelete(video.id) }}>Xóa</button>}
      </div>
    </Modal>
  )
}


function RefActions({ id, kit }: { id: string; kit?: GenKit }) {
  const [msg, setMsg] = useState('')
  const paths = [...(kit?.referenceVideo ?? []), ...(kit?.character ?? []), ...(kit?.product ?? [])].filter((f) => !/^https?:/.test(f))
  if (!paths.length) return null
  const openFolder = async () => {
    try {
      const r = await fetch('/open-refs', { method: 'POST', body: JSON.stringify({ name: id, paths }) })
      const j = await r.json()
      setMsg(r.ok ? `Đã mở thư mục: ${j.dest}` : (j.error ?? 'Lỗi'))
    } catch { setMsg('Chỉ chạy khi Store Hub dev đang bật') }
  }
  const downloadAll = () => paths.forEach((f, i) => setTimeout(() => {
    const a = document.createElement('a')
    a.href = `/media/${f.split('/').map(encodeURIComponent).join('/')}?download=1`
    a.download = ''
    document.body.appendChild(a); a.click(); a.remove()
  }, i * 400))
  return (
    <div className="kitslot">
      <b>Ref để upload ({paths.length} file)</b>
      <div className="rowact">
        <button className="btn pri" onClick={openFolder}>Mở thư mục ref (Finder)</button>
        <button className="btn" onClick={downloadAll}>Tải tất cả</button>
      </div>
      {msg && <p className="note">{msg}</p>}
    </div>
  )
}

export function Kit({ kit, id }: { kit: GenKit; id?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(kit.prompt ?? ''); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { window.prompt('Copy prompt:', kit.prompt) }
  }
  const Slot = ({ label, files }: { label: string; files?: string[] }) => (
    <div className="kitslot">
      <b>{label}</b>
      {files && files.length ? <div className="kitrow">{files.map((f) => <div key={f}><Media src={f} /><p className="note">{f.split('/').pop()}</p><a href={/^https?:/.test(f) ? f : `/media/${f.split('/').map(encodeURIComponent).join('/')}`} target="_blank" rel="noreferrer">Mở file</a> · {!/^https?:/.test(f) && <><a href={`/media/${f.split('/').map(encodeURIComponent).join('/')}?download=1`} download>Tải về</a> · </>}<DriveLink src={f} /></div>)}</div> : <p className="note">Không có</p>}
    </div>
  )
  return (
    <div className="kit">
      {(kit.tool || kit.config) && <div className="kitslot"><b>Nguồn tạo & config</b>{kit.tool && <p className="full"><b>Công cụ:</b> {kit.tool}</p>}{kit.config && <p className="note pre full">{kit.config}</p>}</div>}
      <Slot label="1. Reference video" files={kit.referenceVideo} />
      <Slot label="2. Character" files={kit.character} />
      <Slot label="3. Product" files={kit.product} />
      {id && <RefActions id={id} kit={kit} />}
      {kit.extra?.map((x) => <div className="kitslot" key={x.label}><b>{x.label}</b><p className="note pre full">{x.text}</p></div>)}
      <div className="kitslot">
        <b>4. Prompt</b>
        {kit.prompt ? <><p className="note pre full">{kit.prompt}</p><button className="btn pri" onClick={copy}>{copied ? 'Đã copy ✓' : 'Copy prompt'}</button></> : <p className="note">Không có</p>}
      </div>
    </div>
  )
}

// Cột Input (Flow 3): liệt kê asset đầu vào thực sự đã dùng, có thumbnail và xem trước; thiếu file/bằng chứng thì ghi rõ.
const mediaUrl = (p: string, start?: number, end?: number) => `/media/${p.split('/').map(encodeURIComponent).join('/')}${start !== undefined ? `#t=${start}${end !== undefined ? `,${end}` : ''}` : ''}`
function InputList({ v }: { v: Video }) {
  const [open, setOpen] = useState<VideoInput | null>(null)
  const xs = v.inputs ?? []
  return (
    <div className="fin-list" aria-label={`Input của ${v.id}`}>
      <p className="note fin-h">{xs.length} input đã dùng{v.inputsSource ? <> · nguồn: <span className="mono">{v.inputsSource.split('/').pop()}</span></> : null}</p>
      {xs.map((x) => (
        <div key={x.id} className="fin">
          {x.thumb ? (
            <button className="fin-th" onClick={() => setOpen(x)} aria-label={`Xem ${x.name}`} title={x.preview === 'audio' ? 'Nghe' : 'Xem'}><img src={mediaUrl(x.thumb)} alt="" loading="lazy" /><span aria-hidden="true">{x.preview === 'video' ? '▶' : ''}</span></button>
          ) : x.preview === 'audio' && x.path ? (
            <button className="fin-th fin-au" onClick={() => setOpen(x)} aria-label={`Nghe ${x.name}`}>♪</button>
          ) : <div className="fin-th fin-none" role="img" aria-label="Chưa có bằng chứng">Chưa có bằng chứng</div>}
          <div className="fin-b">
            <div><b>{x.id}</b> <span className="pill idle">{x.type}</span></div>
            <div className="fin-n">{x.name}</div>
            <div className="note">Vai trò: {x.role} · {x.at}</div>
            <div className="note">Nguồn: {/^https?:/.test(x.source) ? <a href={x.source} target="_blank" rel="noreferrer">{x.source}</a> : x.source}</div>
            {x.path ? <div className="note">File: <span className="mono">{x.path.split('/').slice(-3).join('/')}</span></div> : <div className="note"><b>Chưa có bằng chứng</b> (không có file đã lưu)</div>}
            <div className="note">Quyền: {x.rights}</div>
            <div className="note">Xác minh: {x.verify}</div>
            {x.note ? <div className="note">Ghi chú: {x.note}</div> : null}
            {x.path ? <div className="note"><button className="link" onClick={() => setOpen(x)}>{x.preview === 'audio' ? 'Nghe' : 'Xem'}</button> · <a href={mediaUrl(x.path, x.start, x.end)} target="_blank" rel="noreferrer">Mở file</a></div> : null}
          </div>
        </div>
      ))}
      {open && (
        <Modal title={`${open.id} · ${open.name}`} onClose={() => setOpen(null)}>
          {open.preview === 'video' && <video className="fin-pv" src={mediaUrl(open.path, open.start, open.end)} controls playsInline preload="metadata" />}
          {open.preview === 'image' && <img className="fin-pv" src={mediaUrl(open.path)} alt={open.name} />}
          {open.preview === 'audio' && <audio className="fin-au-pl" src={mediaUrl(open.path)} controls preload="metadata" />}
          <p className="note">{open.role} · {open.at}{open.start !== undefined ? ` · clip nguồn ${open.start}–${open.end} s` : ''}</p>
          <p className="note">Quyền: {open.rights}</p>
          <div className="actions"><button className="btn" onClick={() => setOpen(null)}>Đóng</button></div>
        </Modal>
      )}
    </div>
  )
}

// Ô Prompt: đầu ô là loại flow dạng "số · tên" (lấy từ dữ liệu flow đang có), dưới là prompt đã dùng.
function PromptCell({ store, v, compact }: { store: Store; v: Video; compact?: boolean }) {
  const f = flowLabel(v)
  return (
    <div className="pc">
      <div className="pc-flow">{f ? <span className={`fa-t fa-k${f.k}`} title={[v.flowName, v.flowDesc].filter(Boolean).join('\n')}>{f.t}</span> : <span className="note">Flow: —</span>}</div>
      <UsedPrompt store={store} v={v} compact={compact} />
    </div>
  )
}

// Hàng gọn: mỗi ô tối đa 1–2 dòng, chỉ tóm tắt; mở hàng để xem đủ.
function CompactRow({ store, v, g, onToggle, onEdit, onRemove }: { store: Store; v: Video; g?: CreativeGroup; onToggle: () => void; onEdit: () => void; onRemove: () => void }) {
  const ckBad = (checklistView(v)?.groups ?? []).flatMap((g) => g.rows).filter((r) => r.s === 'bad').map((r) => r.label)
  const label = v.verdict?.label ?? '—'
  const tone = label === 'Sẵn sàng' ? 'ok' : label === 'Chưa làm' || label === '—' ? 'idle' : 'bad'
  const nMedia = v.media ? mediaList(v.media).length : 0
  return (
    <tr className="vl-cz" id={`row-${v.id}`}>
      <td className="vl-id"><button type="button" className="vl-tg" onClick={onToggle} aria-expanded="false" aria-controls={`row-${v.id}`} aria-label={`Mở chi tiết ${v.id}`} title="Mở chi tiết"><span aria-hidden="true">▸</span></button><b>{v.id}</b><div className="vl-ag"><FlowAgentCell v={v} part="agent" /></div>{(g?.history.length ?? 0) + (v.archive?.length ?? 0) ? <span className="arch-b" title="Có version cũ trong Lịch sử phiên bản">+{(g?.history.length ?? 0) + (v.archive?.length ?? 0)} cũ</span> : null}</td>
      <td className="vl-media">{nMedia ? <Thumb list={mediaList(v.media!)} /> : <span className="note">Chưa có</span>}</td>
      <td className="vl-draft">{(v.draft ?? !v.media) ? <Pill tone="warn">Draft</Pill> : <span className="note">—</span>}</td>
      <td className="vl-angle"><div className="cz-clamp">{v.angle || v.hook || v.title || '—'}</div></td>
      <td className="vl-prompt"><PromptCell store={store} v={v} compact /></td>
      <td className="vl-ref">{v.inputs ? <span className="note">{v.inputs.length} input</span> : <UsedInputs store={store} v={v} compact />}</td>
      <td className="vl-gate vl-fck" colSpan={3}>{v.flowChecks ? (
        <div className="cz-ck"><ChecklistCount v={v} />{ckBad.length ? <span className="cz-clamp1 note">Không đạt: {ckBad.slice(0, 3).join(' · ')}</span> : null}</div>
      ) : <span className="note">{v.gates ? 'Cổng A/C/B cũ' : 'Chưa chấm'}</span>}</td>
      <td className="vl-ready"><Pill tone={tone}>{label}</Pill>{v.verdict?.gen ? <span className="note cz-gen">Gen: {v.verdict.gen}</span> : null}</td>
      <td className="vl-soc"><SocialCell store={store} v={v} /></td>
      <td className="vl-upd">{v.last_updated ?? <span className="note">—</span>}</td>
      <td className="vl-act"><button className="link" onClick={onEdit}>Sửa</button><button className="link bad" onClick={onRemove}>Xóa</button></td>
    </tr>
  )
  void store
}
