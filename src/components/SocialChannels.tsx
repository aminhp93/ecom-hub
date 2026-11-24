import { useEffect, useState } from 'react'
import type { ChannelKey, ChannelStatus, Post, PostFormat, PostStatus, Store } from '../data/types'
import { CHANNELS } from '../data/types'
import { uid } from '../data/template'
import { Modal } from './Modal'
import { Field, Media, Pill } from './ui'
import { Kit } from './CreativeBoard'
import { postInput } from '../data/postInputs'


interface Props {
  store: Store
  onChange: (s: Store) => void
}

export function SocialChannels({ store, onChange }: Props) {
  const [name, setName] = useState(store.name)
  const [email, setEmail] = useState(store.email)
  const [domain, setDomain] = useState(store.domain)
  const [adding, setAdding] = useState<ChannelKey | null>(null)
  const [filter, setFilter] = useState<ChannelKey | 'all'>('FB')
  const [openId, setOpenId] = useState<string | null>(null)
  const [more, setMore] = useState<Record<string, boolean>>({})
  const [syncMsg, setSyncMsg] = useState('')

  const allPosts = (Object.keys(CHANNELS) as ChannelKey[]).flatMap((k) => store.social[k].posts.map((p) => [k, p] as const))

  // Đồng bộ các bài "Đã lên lịch" với Zernio: bài Zernio báo published thì chuyển "Đã đăng" + link + ngày thật. Chỉ đọc từ Zernio, không gửi/đăng gì.
  const syncZernio = async (quiet = false) => {
    const pending = allPosts.filter(([, p]) => p.status === 'Đã lên lịch')
    if (pending.length === 0) { if (!quiet) setSyncMsg('Không có bài nào đang "Đã lên lịch".'); return }
    try {
      if (!quiet) setSyncMsg('Đang hỏi Zernio…')
      const r = await fetch(`/zernio/posts?store=${encodeURIComponent(store.id)}&limit=100`)
      const j = await r.json()
      if (!r.ok) { if (!quiet) setSyncMsg(`Zernio lỗi ${r.status}: ${JSON.stringify(j).slice(0, 200)}`); return }
      const zs = ((j.posts ?? []) as ZPost[])
      const norm = (t?: string) => (t ?? '').replace(/\s+/g, ' ').trim()
      const social = { ...store.social }
      let done = 0, failed = 0, waiting = 0
      for (const [k, p] of pending) {
        const text = norm([p.caption, p.hashtags].filter(Boolean).join('\n\n'))
        const cands = zs.filter((z) => (p.zernioId ? z._id === p.zernioId : norm(z.content) === text) && (z.platforms ?? []).some((x) => x.platform === PLATFORM[k]))
        const byFile = p.file ? cands.filter((z) => (z.mediaItems ?? []).some((m) => m.url.endsWith(p.file as string))) : []
        const pool = byFile.length ? byFile : cands
        const plats = pool.flatMap((z) => (z.platforms ?? []).filter((x) => x.platform === PLATFORM[k]).map((x) => ({ z, x })))
        const pub = plats.find(({ x }) => x.status === 'published' && x.platformPostUrl)
        let patch: Partial<Post> | null = null
        if (pub) { patch = { status: 'Đã đăng', url: pub.x.platformPostUrl ?? p.url, date: pub.x.publishedAt ? new Date(pub.x.publishedAt).toLocaleDateString('en-CA') : today, zernioId: pub.z._id }; done++ }
        else if (plats.some(({ x }) => x.status === 'failed')) { failed++ }
        else waiting++
        if (patch) social[k] = { ...social[k], posts: social[k].posts.map((x) => (x.id === p.id ? { ...x, ...patch } : x)) }
      }
      if (done) onChange({ ...store, social })
      setSyncMsg(`Zernio: ${done} bài đã chuyển "Đã đăng"${waiting ? `, ${waiting} còn chờ giờ đăng` : ''}${failed ? `, ${failed} báo lỗi (kiểm trên Zernio)` : ''}.`)
    } catch (e) { if (!quiet) setSyncMsg(String(e)) }
  }

  const setChannel = (k: ChannelKey, patch: Partial<Store['social'][ChannelKey]>) =>
    onChange({ ...store, social: { ...store.social, [k]: { ...store.social[k], ...patch } } })

  const addPost = (k: ChannelKey, p: Post) => {
    setChannel(k, { posts: [...store.social[k].posts, p] })
    setAdding(null)
  }

  const shown = filter === 'all' ? allPosts : allPosts.filter(([k]) => k === filter)
  const opened = openId ? allPosts.find(([k, p]) => k + p.id === openId) : undefined
  const patchPost = (k: ChannelKey, id: string, patch: Partial<Post>) =>
    setChannel(k, { posts: store.social[k].posts.map((x) => (x.id === id ? { ...x, ...patch } : x)) })

  // Ngày mặc định là hôm nay: mở chi tiết bài chưa có ngày thì tự điền ngày hôm nay
  const today = new Date().toLocaleDateString('en-CA')
  useEffect(() => {
    if (!opened) return
    const [k, p] = opened
    if (!p.date) patchPost(k, p.id, { date: today })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId])

  // Mở tab Social: tự đồng bộ các bài đang "Đã lên lịch" với Zernio
  useEffect(() => { void syncZernio(true) }, [store.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const channelCard = (k: ChannelKey) => {
    const c = store.social[k]
    const open = !!more[k]
    return (
              <div className="ch">
                <header>
                  <b>{CHANNELS[k]}</b>
                  <Pill tone={c.status === 'Chưa tạo' ? 'idle' : 'ok'}>{c.status}</Pill>
                  <select aria-label={`Trạng thái ${CHANNELS[k]}`} value={c.status} onChange={(e) => setChannel(k, { status: e.target.value as ChannelStatus })}>
                    <option>Chưa tạo</option><option>Đã tạo</option><option>Đã đăng bài đầu</option>
                  </select>
                </header>
                {c.url
                  ? <p><a href={c.url} target="_blank" rel="noreferrer">{c.url}</a></p>
                  : <p className="note">Chưa có link kênh.</p>}
                <div><button className="btn" aria-expanded={open} onClick={() => setMore({ ...more, [k]: !open })}>{open ? 'Thu gọn' : 'Xem thêm'}</button></div>
                {open && <>
                <div className="grid2 chinfo">
                  {([['name', 'Tên kênh'], ['handle', 'Handle / ID'], ['url', 'Link kênh'], ['email', 'Email'], ['category', 'Danh mục']] as const).map(([f, label]) => (
                    <Field key={f} label={label}>
                      <input aria-label={`${label} ${CHANNELS[k]}`} defaultValue={c[f] ?? ''} placeholder="Chưa có"
                        onBlur={(e) => { if (e.target.value.trim() !== (c[f] ?? '')) setChannel(k, { [f]: e.target.value.trim() }) }} />
                    </Field>
                  ))}
                </div>
                <Field label="Mô tả / bio">
                  <textarea rows={2} aria-label={`Mô tả ${CHANNELS[k]}`} defaultValue={c.description ?? ''} placeholder="Chưa có"
                    onBlur={(e) => { if (e.target.value.trim() !== (c.description ?? '')) setChannel(k, { description: e.target.value.trim() }) }} />
                </Field>
                {c.note && <p className="note full">{c.note}</p>}
                <div><button className="btn" onClick={() => setAdding(k)}>+ Thêm bài</button></div>
                </>}
              </div>
    )
  }

  return (
    <>
      <div className="card">
        <h2>Thông tin store</h2>
        <div className="grid2">
          <Field label="Tên store"><input id="s-name" value={name} onChange={(e) => setName(e.target.value)} /></Field>
          <Field label="Email dùng cho kênh"><input id="s-email" value={email} placeholder="Chưa chọn" onChange={(e) => setEmail(e.target.value)} /></Field>
          <Field label="Tên miền"><input id="s-domain" value={domain} onChange={(e) => setDomain(e.target.value)} /></Field>
        </div>
        {store.note && <p className="note">{store.note}</p>}
        <div className="rowact">
          <button className="btn pri" onClick={() => onChange({ ...store, name: name.trim() || store.name, email: email.trim(), domain: domain.trim() })}>
            Lưu thông tin
          </button>
        </div>
      </div>
      <div className="card">
        <h2>Tổng hợp bài ({shown.length}{filter !== 'all' ? `/${allPosts.length}` : ''})</h2>
        <div className="chips" role="group" aria-label="Lọc theo kênh">
          {(Object.keys(CHANNELS) as ChannelKey[]).map((k) => (
            <button key={k} className={'chip' + (filter === k ? ' on' : '')} onClick={() => setFilter(k)}>
              {CHANNELS[k]} ({store.social[k].posts.length})
            </button>
          ))}
          <button className={'chip' + (filter === 'all' ? ' on' : '')} onClick={() => setFilter('all')}>Tất cả ({allPosts.length})</button>
          <button className="btn" onClick={() => void syncZernio()}>Đồng bộ trạng thái Zernio</button>
        </div>
        {syncMsg && <p className="note" role="status">{syncMsg}</p>}
        {filter !== 'all' && channelCard(filter)}
        {shown.length === 0 ? <p className="note">Chưa có bài nào.</p> : (
          <div className="scroll">
            <p className="sp-sum"><b>{shown.filter(([, p]) => p.status === 'Đã đăng').length}</b> / {shown.length} bài đã đăng</p>
            <table className="sp">
              <thead><tr><th>Bài (ngày)</th>{filter === 'all' && <th>Kênh</th>}<th>Trạng thái</th><th>Creative</th><th>Thao tác</th></tr></thead>
              <tbody>
                {shown.map(([k, p]) => (
                  <tr key={k + p.id} className={p.status === 'Đã đăng' ? 'posted' : ''}>
                    <td data-label="Bài">
                      <div className="sp-post">
                        <Thumb src={p.media} />
                        <div className="sp-txt">
                          <b>{p.title}</b>
                          {p.caption && <span className="sp-cap">{p.caption.replace(/\s+/g, ' ')}</span>}
                          <span className="note">{p.date ? (p.status === 'Đã đăng' ? p.date : `dự kiến ${p.date}`) : 'chưa có ngày'}</span>
                        </div>
                      </div>
                    </td>
                    {filter === 'all' && <td data-label="Kênh">{CHANNELS[k]}</td>}
                    <td data-label="Trạng thái">{p.status === 'Đã đăng' ? <span className="sp-done">✓ Đã đăng</span> : <Pill tone={p.status === 'Đã lên lịch' ? 'warn' : 'idle'}>{p.status}</Pill>}</td>
                    <td className="note" data-label="Creative">{p.creative ?? ''}</td>
                    <td data-label="Thao tác">
                      <div className="sp-act">
                        <button className="ib" title="Làm việc với bài này (input, output, đăng)" aria-label={`Mở bài ${p.title}`} onClick={() => setOpenId(k + p.id)}>
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                        </button>
                        {p.url && <a className="ib" title="Mở bài đã đăng" aria-label="Mở bài đã đăng" href={p.url} target="_blank" rel="noreferrer">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>
                        </a>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {opened && (() => {
        const [k, p] = opened
        const inp = postInput(store, p)
        const posted = p.status === 'Đã đăng'
        const tone = p.status === 'Đã đăng' ? 'ok' : p.status === 'Đã lên lịch' ? 'warn' : 'idle'
        const edit = (f: 'title' | 'ytTitle' | 'caption' | 'hashtags' | 'note' | 'url' | 'date' | 'file', v: string) => {
          if (v.trim() !== ((p[f] as string | undefined) ?? '')) patchPost(k, p.id, { [f]: v.trim() })
        }
        const copy = (t?: string) => { try { void navigator.clipboard.writeText(t ?? '') } catch { /* bỏ qua */ } }
        return (
          <Modal wide title={`${CHANNELS[k]} · ${p.title}`} onClose={() => setOpenId(null)}>
            <div className="pd-head">
              <span className="note">{CHANNELS[k]} · {p.format}</span>
              {posted ? <span className="sp-done">✓ Đã đăng</span> : <Pill tone={tone}>{p.status}</Pill>}
              <button className="btn" onClick={() => setOpenId(null)}>Đóng</button>
            </div>
            {posted && (
              <div className="pd-posted" role="status">
                <b>✓ Đã đăng{p.date ? ` ngày ${p.date.split('-').reverse().join('/')}` : ''}</b>
                {p.url ? <a href={p.url} target="_blank" rel="noreferrer">Mở bài đã đăng ↗</a> : <span>Chưa có link bài, dán vào ô "Link bài đã đăng" bên dưới.</span>}
              </div>
            )}
            <div className="pd" key={k + p.id}>
              <section className="pd-col">
                <h3>1 · Input <span className="note">đầu vào dùng để làm bài</span></h3>
                <Field label="Tên bài"><input defaultValue={p.title} onBlur={(e) => edit('title', e.target.value)} /></Field>
                {inp.creative && <p className="note full">Creative nguồn: <b>{inp.creative.id}</b> · {inp.creative.status} · cổng {inp.creative.gate}{inp.creative.step ? ` · ${inp.creative.step}` : ''}{inp.creative.flowName ? ` · Flow: ${inp.creative.flowName}` : ''}{inp.creative.agent ? ` · Agent gen: ${inp.creative.agent}` : ''}</p>}
                {inp.empty
                  ? <p className="note">Chưa có dữ liệu nguồn tạo, config, prompt hay reference cho bài này trong store hub.</p>
                  : <Kit kit={inp.kit} />}
                <Field label="File gốc (đường dẫn)"><input defaultValue={p.file ?? ''} placeholder="Chưa có" onBlur={(e) => edit('file', e.target.value)} /></Field>
                <Field label="Ghi chú nguồn"><textarea rows={5} defaultValue={p.note ?? ''} placeholder="Chưa có" onBlur={(e) => edit('note', e.target.value)} /></Field>
              </section>
              <section className="pd-col">
                <h3>2 · Output <span className="note">nội dung sẽ đăng</span></h3>
                {p.media ? <Media src={p.media} drive /> : <p className="note">Chưa có video.</p>}
                {k === 'YT' && <Field label="Title YouTube (tối đa 100 ký tự)"><input maxLength={100} defaultValue={p.ytTitle ?? ''} placeholder="Chưa có" onBlur={(e) => edit('ytTitle', e.target.value)} /></Field>}
                <Field label="Caption + hashtag">
                  <textarea rows={12} defaultValue={[p.caption, p.hashtags].filter(Boolean).join('\n\n')} placeholder="Chưa có"
                    onBlur={(e) => { const v = e.target.value.trim(); if (v !== [p.caption, p.hashtags].filter(Boolean).join('\n\n')) patchPost(k, p.id, { caption: v, hashtags: '' }) }} />
                </Field>
              </section>
              <section className={`pd-col${posted ? ' posted' : ''}`}>
                <h3>3 · Action <span className="note">đăng và quản lý</span></h3>
                <Field label="Trạng thái">
                  <select value={p.status} onChange={(e) => patchPost(k, p.id, { status: e.target.value as PostStatus })}>
                    <option>Chưa đăng</option><option>Đã lên lịch</option><option>Đã đăng</option>
                  </select>
                </Field>
                <Field label="Ngày (đăng hoặc dự kiến)"><input type="date" defaultValue={p.date ?? ''} onBlur={(e) => edit('date', e.target.value)} /></Field>
                <Field label="Link bài đã đăng"><input defaultValue={p.url} placeholder="https://" onBlur={(e) => edit('url', e.target.value)} /></Field>
                <div className="pd-actions">
                  {(() => {
                    const z = <ZernioSend channel={k} post={p} store={store} onSent={(url, zid) => patchPost(k, p.id, { ...(url ? { url } : {}), ...(zid ? { zernioId: zid } : {}), status: 'Đã lên lịch' })} onPosted={(url) => patchPost(k, p.id, { url, status: 'Đã đăng', date: new Date().toISOString().slice(0, 10) })} />
                    // Đã đăng: gập khu gửi Zernio lại để tránh bấm đăng lần hai
                    return posted ? <details className="more"><summary>Đăng lại lên Zernio (bài đã đăng rồi)</summary>{z}</details> : z
                  })()}
                  {p.url && <a className="btn" href={p.url} target="_blank" rel="noreferrer">Mở bài đã đăng</a>}
                  <button className="btn" onClick={() => copy([p.caption, p.hashtags].filter(Boolean).join('\n\n'))}>Sao chép caption + hashtag</button>
                  <button className="btn bad" onClick={() => { if (window.confirm(`Xóa bài "${p.title}"?`)) { setChannel(k, { posts: store.social[k].posts.filter((x) => x.id !== p.id) }); setOpenId(null) } }}>Xóa bài</button>
                </div>
                <p className="note">Sửa ô nào xong bấm ra ngoài là lưu.</p>
              </section>
            </div>
          </Modal>
        )
      })()}
      {adding && <PostForm channel={adding} onSave={(p) => addPost(adding, p)} onClose={() => setAdding(null)} />}
    </>
  )
}

function Thumb({ src }: { src?: string }) {
  const [dur, setDur] = useState(0)
  const [playing, setPlaying] = useState(false)
  if (!src) return <div className="sp-thumb none">Chưa có</div>
  const url = /^https?:/.test(src) ? src : `/media/${src.split('/').map(encodeURIComponent).join('/')}`
  const fmt = (n: number) => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(Math.round(n % 60)).padStart(2, '0')}`
  return (
    <div className="sp-thumb" onClick={(e) => { const v = e.currentTarget.querySelector('video'); if (!v) return; if (v.paused) void v.play(); else v.pause() }}>
      <video src={`${url}#t=0.1`} muted playsInline preload="metadata" onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
      {dur > 0 && <i>{fmt(dur)}</i>}
      {!playing && <span className="play" aria-hidden>▶</span>}
    </div>
  )
}

function PostForm({ channel, onSave, onClose }: { channel: ChannelKey; onSave: (p: Post) => void; onClose: () => void }) {
  const [title, setTitle] = useState('')
  const [format, setFormat] = useState<PostFormat>('Video ngắn')
  const [status, setStatus] = useState<PostStatus>('Chưa đăng')
  const [url, setUrl] = useState('')

  return (
    <Modal title={`Thêm bài · ${CHANNELS[channel]}`} onClose={onClose}>
      <Field label="Tên bài"><input id="p-title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ví dụ: KAN80-FB-01" /></Field>
      <div className="grid2">
        <Field label="Định dạng">
          <select id="p-format" value={format} onChange={(e) => setFormat(e.target.value as PostFormat)}>
            <option>Video ngắn</option><option>Video dài</option><option>Ảnh</option><option>Bài viết</option>
          </select>
        </Field>
        <Field label="Trạng thái">
          <select id="p-status" value={status} onChange={(e) => setStatus(e.target.value as PostStatus)}>
            <option>Chưa đăng</option><option>Đã lên lịch</option><option>Đã đăng</option>
          </select>
        </Field>
      </div>
      <Field label="Link bài (nếu đã đăng)"><input id="p-url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://" /></Field>
      <div className="rowact">
        <button className="btn pri" onClick={() => onSave({ id: uid(), title: title.trim() || '(chưa đặt tên)', format, status, url: url.trim() })}>Thêm</button>
        <button className="btn" onClick={onClose}>Hủy</button>
      </div>
    </Modal>
  )
}

interface ZPost { _id: string; content?: string; mediaItems?: { url: string }[]; platforms?: { platform: string; status?: string; platformPostUrl?: string; publishedAt?: string }[] }
const PLATFORM: Record<ChannelKey, string> = { FB: 'facebook', IG: 'instagram', TT: 'tiktok', YT: 'youtube' }
interface ZAccount { _id: string; platform: string; username?: string; displayName?: string }

const norm = (t?: string) => (t ?? '').toLowerCase().replace(/[^a-z0-9]/g, '')
// Tài khoản Zernio thuộc store này: tên/username chứa tên store hoặc handle của kênh (không fallback sang store khác)
function belongsToStore(a: ZAccount, store: Store, channel: ChannelKey): boolean {
  const names = [norm(store.name), norm(store.social[channel].handle?.replace(/^@/, '').split(/\s/)[0])].filter((x) => x.length >= 4)
  const have = [norm(a.displayName), norm(a.username)]
  return names.some((n) => have.some((h) => h && (h.includes(n) || n.includes(h))))
}

function ZernioSend({ channel, post, store, onSent, onPosted }: { channel: ChannelKey; post: Post; store: Store; onSent: (url?: string, zernioId?: string) => void; onPosted: (url: string) => void }) {
  const [accounts, setAccounts] = useState<ZAccount[] | null>(null)
  const [err, setErr] = useState('')
  const [accountId, setAccountId] = useState('')
  const [mode, setMode] = useState<'draft' | 'schedule' | 'now'>('now')
  const [when, setWhen] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    let live = true
    fetch(`/zernio/accounts?store=${encodeURIComponent(store.id)}`).then((r) => r.json()).then((j) => {
      if (!live) return
      if (j.error) { setErr(typeof j.error === 'string' ? j.error : JSON.stringify(j.error)); return }
      const list = ((j.accounts ?? []) as ZAccount[]).filter((a) => a.platform === PLATFORM[channel] && belongsToStore(a, store, channel))
      setAccounts(list)
      if (list[0]) setAccountId(list[0]._id)
    }).catch((e) => live && setErr(String(e)))
    return () => { live = false }
  }, [channel, store])

  const send = async () => {
    const acc = accounts?.find((a) => a._id === accountId)
    const text = [post.caption, post.hashtags].filter(Boolean).join('\n\n')
    const label = mode === 'draft' ? 'lưu NHÁP (chưa đăng)' : mode === 'now' ? 'ĐĂNG NGAY, CÔNG KHAI, không hoàn tác được từ đây' : `HẸN GIỜ ${when}`
    if (!text.trim() && !post.media) { setMsg('Bài chưa có caption hay video.'); return }
    if (mode === 'schedule' && !when) { setMsg('Chọn giờ hẹn.'); return }
    if (!window.confirm(`Gửi lên Zernio (${acc?.displayName ?? acc?.username ?? accountId}, ${CHANNELS[channel]}): ${label}\n\nVideo: ${post.media ?? 'không có'}\n\nCaption:\n${text}`)) return
    setBusy(true); setMsg('')
    try {
      const r = await fetch('/zernio/publish', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ storeId: store.id, mediaPath: post.media, caption: text, title: (channel === 'YT' && post.ytTitle ? post.ytTitle : post.title).slice(0, 100), platform: PLATFORM[channel], accountId, mode, scheduledFor: when || undefined, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone }),
      })
      const j = await r.json()
      if (!r.ok) { setMsg(`Lỗi ${r.status}: ${JSON.stringify(j).slice(0, 400)}`); return }
      if (mode === 'now') {
        const post = (j.post ?? {}) as { status?: string; platforms?: { platformPostUrl?: string; status?: string }[] }
        const link = post.platforms?.find((x) => x.platformPostUrl)?.platformPostUrl ?? (j as { platformPostUrl?: string }).platformPostUrl
        if (r.status === 207 || post.status === 'failed' || post.status === 'partial') { setMsg(`Zernio báo đăng chưa trọn vẹn (${r.status}): ${JSON.stringify(j).slice(0, 400)}`); return }
        setMsg(link ? `Zernio báo đã đăng: ${link}. Hãy mở link kiểm lại.` : `Zernio nhận lệnh đăng (trạng thái ${post.status ?? '?'}), chưa có link. Kiểm trên Page rồi dán link vào ô bên trên.`)
        if (post.status === 'published' && link) onPosted(link)
        return
      }
      setMsg(mode === 'draft' ? 'Đã lưu nháp trên Zernio. Vào dashboard Zernio để xem và đăng.' : 'Đã hẹn giờ trên Zernio.')
      if (mode === 'schedule') onSent(undefined, ((j as { post?: { _id?: string } }).post?._id) ?? undefined)
    } catch (e) { setMsg(String(e)) } finally { setBusy(false) }
  }

  if (err) return <p className="note">Zernio chưa dùng được: {err}</p>
  if (!accounts) return <p className="note">Đang hỏi Zernio…</p>
  if (accounts.length === 0) return <p className="note">Chưa có kênh {CHANNELS[channel]} của store {store.name} trên Zernio (tài khoản phải có tên khớp store). <a href="https://zernio.com/dashboard/connections" target="_blank" rel="noreferrer">Nối kênh</a> rồi mở lại popup.</p>
  return (
    <div className="zsend">
      <Field label="Tài khoản Zernio">
        <select value={accountId} onChange={(e) => setAccountId(e.target.value)}>
          {accounts.map((a) => <option key={a._id} value={a._id}>{a.displayName ?? a.username ?? a._id}</option>)}
        </select>
      </Field>
      <Field label="Cách gửi">
        <select value={mode} onChange={(e) => setMode(e.target.value as 'draft' | 'schedule' | 'now')}>
          <option value="draft">Lưu nháp (an toàn, chưa đăng)</option>
          <option value="schedule">Hẹn giờ đăng</option>
          <option value="now">Đăng ngay (công khai)</option>
        </select>
      </Field>
      {mode === 'schedule' && <Field label="Giờ đăng"><input type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} /></Field>}
      <button className="btn pri" disabled={busy} onClick={send}>{busy ? 'Đang gửi…' : mode === 'now' ? 'Đăng ngay lên Zernio' : 'Gửi lên Zernio'}</button>
      {msg && <p className="note full">{msg}</p>}
    </div>
  )
}
