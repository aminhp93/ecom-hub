import { useEffect, useState, type ReactNode } from 'react'
import type { StoreStatus } from '../data/types'

export function Pill({ tone = 'idle', children }: { tone?: string; children: ReactNode }) {
  return <span className={`pill ${tone}`}>{children}</span>
}

export function StatusPill({ status }: { status: StoreStatus }) {
  return <Pill tone={status === 'Đang làm' ? 'ok' : status === 'Tạm dừng' ? 'warn' : 'idle'}>{status}</Pill>
}

export function Meter({ value, max }: { value: number; max: number }) {
  const pct = max ? Math.round((value * 100) / max) : 0
  return (
    <span className="meter">
      <i>
        <b style={{ width: `${pct}%` }} />
      </i>
      {value}/{max}
    </span>
  )
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label>
      {label}
      {children}
    </label>
  )
}

// Phát video/ảnh: đường dẫn tương đối được phục vụ qua /media/ (dev); URL https dùng trực tiếp.
export function DriveLink({ src }: { src: string }) {
  const [url, setUrl] = useState('')
  useEffect(() => {
    if (/^https?:/.test(src)) { setUrl(src); return }
    let live = true
    fetch(`/drive-id/${src.split('/').map(encodeURIComponent).join('/')}`).then((r) => r.json()).then((j) => { if (live && j.url) setUrl(j.url) }).catch(() => {})
    return () => { live = false }
  }, [src])
  return url ? <a href={url} target="_blank" rel="noreferrer">Mở trên Google Drive</a> : <span className="note">Chưa có link Drive</span>
}

export function Media({ src, drive }: { src?: string; drive?: boolean }) {
  const [bad, setBad] = useState(false)
  if (!src) return null
  const url = /^https?:/.test(src) ? src : `/media/${src.split('/').map(encodeURIComponent).join('/')}`
  const el = bad ? <p className="note">Không mở được file: {src}</p>
    : /\.(png|jpe?g|gif|webp)$/i.test(src) ? <img className="media" src={url} alt="" onError={() => setBad(true)} />
    : <video className="media" src={url} controls preload="metadata" playsInline onError={() => setBad(true)} />
  if (!drive) return el
  return <div className="mdrive">{el}<p className="note full">{src.split('/').pop()} · <DriveLink src={src} /></p></div>
}
