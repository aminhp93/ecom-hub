import { useState } from 'react'
import type { Store, Video } from '../data/types'
import { uid } from '../data/template'
import { Modal } from './Modal'
import { Field, Media, Pill, DriveLink } from './ui'
import type { GenKit } from '../data/types'

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
  const drafts = store.creative.filter((v) => !v.media).length
  // Draft (chưa có video) lên đầu, giữ nguyên thứ tự còn lại
  const shown = [...store.creative.filter((v) => (filter === 'video' ? !!v.media : filter === 'draft' ? !v.media : true))].sort((a, b) => Number(!!a.media) - Number(!!b.media))
  const remove = (id: string) => onChange({ ...store, creative: store.creative.filter((x) => x.id !== id) })

  return (
    <>
      <div className="bar">
        <h2>Creative</h2>
        <span className="sp" />
        {([['all', `Tất cả ${store.creative.length}`], ['draft', `Draft ${drafts}`], ['video', `Có video ${store.creative.length - drafts}`]] as const).map(([k, l]) => (
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
                    <thead><tr><th>ID</th><th>Video</th><th>Nguồn</th><th>Prompt</th><th>Ref</th><th /></tr></thead>
                    <tbody>
                      {shown.map((v) => {
                        const k = v.kit
                        const items = [k?.tool && `Công cụ: ${k.tool}`, ...(k?.config ? k.config.split(' · ') : [])].filter(Boolean) as string[]
                        const links = k?.extra?.filter((x) => x.label.startsWith('Link')) ?? []
                        const notes = k?.extra?.filter((x) => x.label.startsWith('Ref') || x.label.startsWith('Chưa')) ?? []
                        const slots: [string, string[] | undefined][] = [['Video ref', k?.referenceVideo], ['Nhân vật', k?.character], ['Sản phẩm', k?.product]]
                        const hasRef = slots.some(([, f]) => f?.length)
                        return (
                          <tr key={v.id}>
                            <td className="vl-id"><div className="vl-scroll"><b>{v.id}</b>{!v.media && <div><Pill tone="warn">Draft</Pill></div>}<div className="note">{v.title}</div></div></td>
                            <td className="vl-media">{v.media ? <Media src={v.media} /> : <div className="thumb">Chưa có</div>}</td>
                            <td className="vl-src"><div className="vl-scroll">{items.length ? <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul> : <span className="note">Trống</span>}{links.map((x) => <div key={x.label}><a href={x.text} target="_blank" rel="noreferrer">{x.label} ↗</a></div>)}</div></td>
                            <td className="vl-prompt"><div className="vl-scroll">{k?.prompt ? <p className="note pre">{k.prompt}</p> : <span className="note">Không có</span>}</div></td>
                            <td className="vl-ref"><div className="vl-scroll">
                              {slots.map(([label, files]) => files?.length ? <div key={label}><b>{label}</b><div className="kitrow">{files.map((f) => <div key={f}><Media src={f} /><p className="note">{f.split('/').pop()}</p></div>)}</div></div> : null)}
                              {!hasRef && <span className="note">Không có file</span>}
                              {notes.map((x) => <p key={x.label} className="note pre">{x.text}</p>)}
                            </div></td>
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
                      {v.media ? <div className="vmedia"><Media src={v.media} /></div> : <div className="thumb">Chưa có video</div>}
                      <div className="vbody">
                        <div className="bar">
                          <b>{v.id}</b>
                          <Pill tone={v.status === 'Đã qua cổng' ? 'ok' : 'warn'}>{v.status}</Pill>
                          <Pill>Cổng {v.gate}</Pill>
                        </div>
                        <div>{v.title}</div>
                        {v.format && <div className="note full"><b>Format:</b> {v.format}</div>}
                        {v.hook && <div className="note full"><b>Hook:</b> {v.hook}</div>}
                        {v.step && <p className="note full"><b>Bước hiện tại:</b> {v.step}</p>}
                        {v.note && <p className="note pre full">{v.note}</p>}
                        {v.kit && <Kit kit={v.kit} />}
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

const TOOLS = ['Higgsfield Marketing Studio', 'Higgsfield Genjutsu', 'Muse (muse.ai)', 'Google Flow', 'Khác']
const MODES = ['', 'UGC Selfie Testimonial', 'Camera POV', 'Mess to Fresh', 'Unboxing', 'Khác']
const HOOKS = ['', 'Spicy', 'Product Crash', 'Epic Fail', 'Không hook']
const SETTINGS = ['', 'Bedroom', 'Nature', 'Roofing', 'Living room', 'Office', 'Khác']
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
  const [media, setMedia] = useState(video?.media ?? '')

  const save = () => {
    if (!id.trim()) return
    const fields = { mode, hook, setting, product, avatar, duration, resolution, aspect, audio }
    const config = [mode && `Mode ${mode}`, hook && `Hook ${hook}`, setting && `Setting ${setting}`, product && `Product ${product}`, avatar && `Avatar ${avatar}`, resolution, duration, aspect, `Audio ${audio.toLowerCase()}`].filter(Boolean).join(' · ')
    const kit = { ...video?.kit, tool, config, fields, prompt, referenceVideo: lines(refVideo), product: lines(refImg) }
    onSave({ gate: 'C', status: 'Chưa qua cổng', ...video, id: id.trim(), title: title.trim() || id.trim(), media: media.trim() || undefined, kit })
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

export function Kit({ kit }: { kit: GenKit }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(kit.prompt ?? ''); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { window.prompt('Copy prompt:', kit.prompt) }
  }
  const Slot = ({ label, files }: { label: string; files?: string[] }) => (
    <div className="kitslot">
      <b>{label}</b>
      {files && files.length ? <div className="kitrow">{files.map((f) => <div key={f}><Media src={f} /><p className="note">{f.split('/').pop()}</p><a href={/^https?:/.test(f) ? f : `/media/${f.split('/').map(encodeURIComponent).join('/')}`} target="_blank" rel="noreferrer">Mở file</a> · <DriveLink src={f} /></div>)}</div> : <p className="note">Không có</p>}
    </div>
  )
  return (
    <div className="kit">
      {(kit.tool || kit.config) && <div className="kitslot"><b>Nguồn tạo & config</b>{kit.tool && <p className="full"><b>Công cụ:</b> {kit.tool}</p>}{kit.config && <p className="note pre full">{kit.config}</p>}</div>}
      <Slot label="1. Reference video" files={kit.referenceVideo} />
      <Slot label="2. Character" files={kit.character} />
      <Slot label="3. Product" files={kit.product} />
      {kit.extra?.map((x) => <div className="kitslot" key={x.label}><b>{x.label}</b><p className="note pre full">{x.text}</p></div>)}
      <div className="kitslot">
        <b>4. Prompt</b>
        {kit.prompt ? <><p className="note pre full">{kit.prompt}</p><button className="btn pri" onClick={copy}>{copied ? 'Đã copy ✓' : 'Copy prompt'}</button></> : <p className="note">Không có</p>}
      </div>
    </div>
  )
}
