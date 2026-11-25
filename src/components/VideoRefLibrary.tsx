import { useEffect, useMemo, useState } from 'react'
import type { Store } from '../data/types'
import { Modal } from './Modal'
import { Pill } from './ui'

// Kho video ref của store (KAN-132/P16). Nguồn chính: 1-dropship/kho-video-ref/CHI-MUC.csv, đọc chỉ-đọc qua /preview/ của dev server.
const CSV_PATH = '1-dropship/kho-video-ref/CHI-MUC.csv'
const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/')

interface Ref {
  id: string; store: string; loai: string; nenTang: string; link: string; file: string; taiKhoan: string; ngay: string
  soLieu: string; hook: string; quyen: string; ghiChu: string
}

// Đọc CSV có ngoặc kép và xuống dòng trong ô.
function parseCsv(t: string): string[][] {
  const rows: string[][] = []; let row: string[] = []; let cur = ''; let q = false
  for (let i = 0; i < t.length; i++) {
    const c = t[i]
    if (q) { if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++ } else q = false } else cur += c }
    else if (c === '"') q = true
    else if (c === ',') { row.push(cur); cur = '' }
    else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = '' }
    else if (c !== '\r') cur += c
  }
  if (cur || row.length) { row.push(cur); rows.push(row) }
  return rows
}

function toRefs(text: string): Ref[] | null {
  const body = text.replace(/^﻿/, '')
  if (!body.startsWith('id,store,')) return null
  const [head, ...rest] = parseCsv(body)
  const ix = (n: string) => head.indexOf(n)
  return rest.filter((r) => r[0]).map((r) => {
    const g = (n: string) => r[ix(n)] ?? ''
    return { id: g('id'), store: g('store'), loai: g('loai'), nenTang: g('nen_tang'), link: g('link_goc'), file: g('file_tren_drive'), taiKhoan: g('tai_khoan'), ngay: g('ngay_xem'), soLieu: g('so_lieu_cong_khai'), hook: g('angle_hook'), quyen: g('quyen_su_dung'), ghiChu: g('ghi_chu') }
  })
}

// "Ref mình thêm" = video Amin đưa/đính kèm, video tự thêm, bản Muse của mình. Còn lại là ref từ đối thủ.
const isMine = (r: Ref) => r.loai === 'tự-thêm' || /Amin/.test(r.loai) || /Amin đưa|bản của mình/.test(r.taiKhoan)

// Ảnh khung đầu có sẵn cho ads đối thủ: refs/doi-thu/frames/<mã thư viện>.jpg
function frameOf(r: Ref): string {
  const m = /^[A-Z]{2}-AD-(\d+)$/.exec(r.id)
  return m ? `/media/${enc(`1-dropship/stores/${r.store}/3-creative/refs/doi-thu/frames/${m[1]}.jpg`)}` : ''
}

async function copy(text: string): Promise<boolean> {
  try { await navigator.clipboard.writeText(text); return true } catch { window.prompt('Copy:', text); return false }
}

function Card({ r, used, onPlay }: { r: Ref; used: string[]; onPlay: () => void }) {
  const [badImg, setBadImg] = useState(false)
  const [msg, setMsg] = useState('')
  const flash = (m: string) => { setMsg(m); setTimeout(() => setMsg(''), 1800) }
  const fr = frameOf(r)
  const name = r.file ? r.file.split('/').pop()! : r.id
  return (
    <div className="card stack" style={{ padding: 10 }}>
      <button className="thumb" style={{ width: '100%', aspectRatio: '16/9', cursor: 'pointer', overflow: 'hidden', padding: 0 }} onClick={onPlay} disabled={!r.file} aria-label={`Xem video ${name}`}>
        {fr && !badImg ? <img src={fr} alt="" loading="lazy" onError={() => setBadImg(true)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span>{r.file ? '▶ Xem video' : 'Chỉ có link gốc'}</span>}
      </button>
      <p style={{ margin: 0, fontWeight: 600, wordBreak: 'break-word' }}>{r.id}</p>
      <p className="note" style={{ margin: 0 }}>{r.nenTang}{r.taiKhoan ? ` · ${r.taiKhoan}` : ''} · xem {r.ngay || '—'}</p>
      <div className="chips" style={{ margin: 0 }}>
        <Pill tone="idle">{isMine(r) ? 'Ref mình thêm' : 'Ref từ đối thủ'}</Pill>
        <Pill tone="idle">{r.loai}</Pill>
        {r.quyen && <Pill tone="ok">{r.quyen}</Pill>}
      </div>
      {r.hook && <p className="note" style={{ margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} title={r.hook}>{r.hook}</p>}
      {r.link && <a href={r.link} target="_blank" rel="noreferrer" className="note">Link gốc</a>}
      {used.length > 0 && <p className="note" style={{ margin: 0 }}>Creative nhắc tới ref này: <b>{used.join(', ')}</b></p>}
      <div className="chips" style={{ margin: 0 }}>
        {r.file && <button className="btn" onClick={onPlay}>Xem video</button>}
        <button className="btn" onClick={async () => flash((await copy(r.file || r.link)) ? 'Đã copy đường dẫn' : '')} disabled={!r.file && !r.link}>Copy đường dẫn</button>
        <button className="btn pri" onClick={async () => flash((await copy(`/gen-video-tu-ref ${r.store}`)) ? 'Đã copy lệnh' : '')}>Làm từ ref này</button>
      </div>
      {msg && <p className="note" style={{ margin: 0 }}>{msg}</p>}
    </div>
  )
}

export function VideoRefLibrary({ store }: { store: Store }) {
  const [all, setAll] = useState<Ref[] | null>(null)
  const [state, setState] = useState<'loading' | 'ok' | 'nodev'>('loading')
  const [kind, setKind] = useState<'all' | 'doi-thu' | 'mine'>('all')
  const [shown, setShown] = useState(24)
  const [play, setPlay] = useState<Ref | null>(null)

  useEffect(() => {
    let live = true
    fetch(`/preview/${enc(CSV_PATH)}`).then((r) => r.text()).then((t) => {
      if (!live) return
      const rs = toRefs(t)
      if (rs) { setAll(rs); setState('ok') } else setState('nodev')
    }).catch(() => live && setState('nodev'))
    return () => { live = false }
  }, [])

  // Chuỗi JSON của từng creative để tra ref đã dùng (khớp đường dẫn file, tên file, mã dòng hoặc mã thư viện quảng cáo).
  const creatives = useMemo(() => store.creative.map((c) => ({ id: c.id, text: JSON.stringify(c) })), [store])
  const usedBy = (r: Ref) => {
    const toks = [r.file, r.file.split('/').pop() ?? '', r.id, /^[A-Z]{2}-AD-(\d{8,})$/.exec(r.id)?.[1] ?? ''].filter((x) => x.length >= 8)
    return creatives.filter((c) => toks.some((t) => c.text.includes(t))).map((c) => c.id)
  }

  const mine = useMemo(() => (all ?? []).filter((r) => r.store === store.id), [all, store.id])
  const list = useMemo(() => mine.filter((r) => kind === 'all' || (kind === 'mine') === isMine(r)), [mine, kind])
  useEffect(() => setShown(24), [kind, store.id])

  return (
    <div className="card stack">
      <h2>Kho video ref</h2>
      <p className="note">Nguồn: 1-dropship/kho-video-ref/CHI-MUC.csv, lọc theo store đang xem. Video không bị chép hay di chuyển, chỉ trỏ tới file hiện có.</p>
      {state === 'loading' && <p className="note">Đang đọc kho video ref…</p>}
      {state === 'nodev' && <p className="banner">Xem trước chỉ chạy ở máy dev (kho video nằm trên Google Drive, bản deploy không đọc được).</p>}
      {state === 'ok' && (
        <>
          <div className="chips">
            {([['all', `Tất cả (${mine.length})`], ['doi-thu', `Ref từ đối thủ (${mine.filter((r) => !isMine(r)).length})`], ['mine', `Ref mình thêm (${mine.filter(isMine).length})`]] as const).map(([k, l]) => (
              <button key={k} className={`chip${kind === k ? ' on' : ''}`} onClick={() => setKind(k)}>{l}</button>
            ))}
          </div>
          {list.length === 0 && <p className="note">Chưa có video ref nào trong nhóm này.</p>}
          <div className="vgrid">
            {list.slice(0, shown).map((r) => <Card key={r.id} r={r} used={usedBy(r)} onPlay={() => setPlay(r)} />)}
          </div>
          {list.length > shown && <button className="btn" onClick={() => setShown(shown + 24)}>Hiện thêm ({list.length - shown} video nữa)</button>}
        </>
      )}
      {play && (
        <Modal title={play.id} onClose={() => setPlay(null)} wide>
          <video src={`/media/${enc(play.file)}`} controls autoPlay playsInline style={{ width: '100%', maxHeight: '70vh', background: '#000' }} />
          <p className="note">{play.file}</p>
          <button className="btn" onClick={() => setPlay(null)}>Đóng</button>
        </Modal>
      )}
    </div>
  )
}
