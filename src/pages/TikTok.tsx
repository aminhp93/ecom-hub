import { useEffect, useState, type ReactNode } from 'react'
import { TIKTOK } from '../data/tiktokSeed'
import type { StepState, TkDoc, TkStep } from '../data/tiktokSeed'
import { Pill } from '../components/ui'
import { Modal } from '../components/Modal'

type Tab = 'process' | 'lessons' | 'exercises' | 'docs'
const TABS: Array<[Tab, string]> = [
  ['process', 'Quá trình'],
  ['lessons', 'Bài giảng'],
  ['exercises', 'Bài tập'],
  ['docs', 'Tài liệu'],
]
const STATE_LABEL: Record<StepState, string> = { done: 'Xong', doing: 'Đang làm', almost: 'Gần hoàn tất', todo: 'Chưa bắt đầu' }

/** Mở file trên Google Drive (dev: đọc ID qua /drive-id/); không có thì sao chép đường dẫn. */
async function openDoc(path: string) {
  try {
    const r = await fetch(`/drive-id/${encodeURIComponent(path)}`)
    const j = (await r.json()) as { url?: string }
    if (j.url) { window.open(j.url, '_blank', 'noopener'); return }
  } catch { /* rơi xuống sao chép */ }
  try { await navigator.clipboard.writeText(path) } catch { /* không sao chép được thì bỏ qua */ }
  window.alert(`Chưa lấy được link Drive. Đường dẫn (trong thư mục working):\n${path}`)
}

/** Markdown gọn (không thêm thư viện): tiêu đề, danh sách, bảng, in đậm/nghiêng, code, đoạn. */
function inline(t: string, k: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*\s][^*]*\*)/g
  let last = 0, m: RegExpExecArray | null, i = 0
  while ((m = re.exec(t))) {
    if (m.index > last) out.push(t.slice(last, m.index))
    const x = m[0]
    out.push(x.startsWith('**') ? <b key={`${k}${i++}`}>{x.slice(2, -2)}</b> : x.startsWith('`') ? <code key={`${k}${i++}`}>{x.slice(1, -1)}</code> : <i key={`${k}${i++}`}>{x.slice(1, -1)}</i>)
    last = m.index + x.length
  }
  if (last < t.length) out.push(t.slice(last))
  return out
}
const cells = (l: string) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
export function Markdown({ text }: { text: string }) {
  const lines = text.replace(/\r/g, '').split('\n')
  const els: ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const l = lines[i]
    if (/^```/.test(l)) {
      const buf: string[] = []; i++
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++])
      i++; els.push(<pre key={els.length} style={{ background: 'var(--bg)', padding: 8, borderRadius: 6, overflow: 'auto', fontSize: 12 }}>{buf.join('\n')}</pre>); continue
    }
    const h = /^(#{1,6})\s+(.*)$/.exec(l)
    if (h) { const n = h[1].length; els.push(<div key={els.length} style={{ fontWeight: 700, fontSize: n === 1 ? 20 : n === 2 ? 17 : 14.5, margin: '10px 0 2px' }}>{inline(h[2], `h${els.length}`)}</div>); i++; continue }
    if (/^\s*\|/.test(l) && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
      const head = cells(l); i += 2; const rows: string[][] = []
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(cells(lines[i++]))
      els.push(<div key={els.length} style={{ overflow: 'auto' }}><table style={{ borderCollapse: 'collapse', fontSize: 12.5 }}><thead><tr>{head.map((c, j) => <th key={j} style={{ border: '1px solid var(--line)', padding: '3px 7px', textAlign: 'left' }}>{inline(c, `th${j}`)}</th>)}</tr></thead><tbody>{rows.map((r, a) => <tr key={a}>{r.map((c, j) => <td key={j} style={{ border: '1px solid var(--line)', padding: '3px 7px', verticalAlign: 'top' }}>{inline(c, `td${a}${j}`)}</td>)}</tr>)}</tbody></table></div>); continue
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(l)) {
      const items: string[] = []
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*([-*]|\d+\.)\s+/, ''))
      els.push(<ul key={els.length} style={{ margin: '4px 0', paddingLeft: 20 }}>{items.map((t, a) => <li key={a}>{inline(t, `li${a}`)}</li>)}</ul>); continue
    }
    if (!l.trim()) { i++; continue }
    els.push(<p key={els.length} style={{ margin: '4px 0' }}>{inline(l, `p${els.length}`)}</p>); i++
  }
  return <div style={{ fontSize: 13.5, lineHeight: 1.55 }}>{els}</div>
}
function parseCsv(t: string): string[][] {
  const rows: string[][] = []; let row: string[] = [], f = '', q = false
  for (let i = 0; i < t.length; i++) {
    const c = t[i]
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++ } else q = false } else f += c }
    else if (c === '"') q = true
    else if (c === ',') { row.push(f); f = '' }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = '' }
    else if (c !== '\r') f += c
  }
  if (f || row.length) { row.push(f); rows.push(row) }
  return rows
}
function Grid({ rows }: { rows: string[][] }) {
  return (
    <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
      <table style={{ borderCollapse: 'collapse', fontSize: 12 }}>
        <tbody>{rows.map((row, ri) => <tr key={ri}>{row.map((c, ci) => <td key={ci} style={{ border: '1px solid var(--line)', padding: '2px 6px', maxWidth: 320, verticalAlign: 'top', fontWeight: ri === 0 ? 600 : 400 }}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}

interface Sheet { name: string; rows: string[][]; totalRows: number; totalCols: number }
type PreviewData = { kind: 'pdf' | 'image' | 'html' | 'video'; url: string } | { kind: 'text'; text: string; ext: string } | { kind: 'sheets'; sheets: Sheet[] } | { kind: 'error'; msg: string }

/** Xem trước file ngay trong web (dev: /preview/<đường dẫn trong working>). */
export function Preview({ path, title, onClose }: { path: string; title: string; onClose: () => void }) {
  const [data, setData] = useState<PreviewData | null>(null)
  const [sheet, setSheet] = useState(0)
  useEffect(() => {
    let alive = true
    const url = `/preview/${path.split('/').map(encodeURIComponent).join('/')}`
    const ext = path.slice(path.lastIndexOf('.')).toLowerCase()
    const done = (d: PreviewData) => { if (alive) setData(d) }
    if (ext === '.pdf') done({ kind: 'pdf', url })
    else if (ext === '.html') done({ kind: 'html', url })
    else if (['.mp4', '.mov', '.webm'].includes(ext)) done({ kind: 'video', url })
    else if (['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext)) done({ kind: 'image', url })
    else fetch(url).then(async (r) => {
      if (!r.ok) return done({ kind: 'error', msg: `Không mở được (${r.status}). Dùng nút "Mở trên Drive".` })
      if (ext === '.xlsx') return done({ kind: 'sheets', sheets: (await r.json()) as Sheet[] })
      done({ kind: 'text', text: await r.text(), ext })
    }).catch(() => done({ kind: 'error', msg: 'Không đọc được file. Dùng nút "Mở trên Drive".' }))
    return () => { alive = false }
  }, [path])
  const sh = data?.kind === 'sheets' ? data.sheets[sheet] : null
  return (
    <Modal title={title} onClose={onClose} wide>
      <div className="note">{path}</div>
      <div className="row" style={{ gap: 8 }}>
        <button className="btn" onClick={() => openDoc(path)}>Mở trên Drive</button>
        <button className="btn" onClick={onClose}>Đóng</button>
      </div>
      {!data && <p className="note">Đang tải…</p>}
      {data?.kind === 'error' && <p>{data.msg}</p>}
      {data?.kind === 'pdf' && <iframe title={title} src={data.url} style={{ width: '100%', height: '70vh', border: 0 }} />}
      {data?.kind === 'html' && <iframe title={title} src={data.url} sandbox="allow-scripts" style={{ width: '100%', height: '75vh', border: '1px solid var(--line)', borderRadius: 8 }} />}
      {data?.kind === 'video' && <video src={data.url} controls style={{ maxWidth: '100%', maxHeight: '70vh' }} />}
      {data?.kind === 'image' && <img src={data.url} alt={title} style={{ maxWidth: '100%' }} />}
      {data?.kind === 'text' && data.ext === '.md' && <Markdown text={data.text} />}
      {data?.kind === 'text' && data.ext === '.csv' && <Grid rows={parseCsv(data.text).slice(0, 300)} />}
      {data?.kind === 'text' && data.ext !== '.md' && data.ext !== '.csv' && <pre style={{ whiteSpace: 'pre-wrap', fontSize: 13, margin: 0 }}>{data.text}</pre>}
      {data?.kind === 'sheets' && sh && (
        <>
          <div className="tabs" role="tablist">
            {data.sheets.map((x, i) => <button key={x.name} className="tab" role="tab" aria-selected={i === sheet} onClick={() => setSheet(i)}>{x.name}</button>)}
          </div>
          <Grid rows={sh.rows} />
          {(sh.totalRows > 150 || sh.totalCols > 26) && <p className="note">Chỉ hiện 150 dòng × 26 cột đầu (sheet có {sh.totalRows} dòng × {sh.totalCols} cột). Giá trị ô công thức chưa tính hiện dưới dạng công thức.</p>}
        </>
      )}
    </Modal>
  )
}

function Doc({ d }: { d: TkDoc }) {
  if (!d.path) return <div className="tk-doc tk-doc-empty"><span>{d.title}</span><Pill>{d.note ?? 'CHƯA NHẬN'}</Pill></div>
  return (
    <button className="tk-doc" onClick={() => window.dispatchEvent(new CustomEvent('tk-preview', { detail: { path: d.path, title: d.title } }))} title={d.path}>
      <span className="tk-doc-ico" aria-hidden="true">▢</span>
      <span>{d.title}</span>
      {d.note && <Pill>{d.note}</Pill>}
    </button>
  )
}

function Step({ s, last }: { s: TkStep; last: boolean }) {
  const [open, setOpen] = useState(!!s.here || s.state === 'doing')
  const hasMore = s.summary.length > 0 || (s.missing?.length ?? 0) > 0
  return (
    <div className={`tk-step tk-${s.state}`}>
      <div className="tk-left">
        <div className="tk-title">
          <h3>{s.n}. {s.title}</h3>
          {hasMore && (
            <button className="tk-chev" aria-expanded={open} aria-label={open ? 'Thu gọn' : 'Xem đầy đủ'} onClick={() => setOpen(!open)}>{open ? '▴' : '▾'}</button>
          )}
        </div>
        <div className="tk-badges">
          {s.here && <span className="tk-here">BẠN Ở ĐÂY</span>}
          <span className="tk-state">{s.tag ?? STATE_LABEL[s.state]}</span>
          {s.exercises.length > 0 && <span className="tk-count">{s.exercises.length} bài tập</span>}
        </div>
        {open && hasMore && (
          <div className="tk-detail">
            {s.summary.length > 0 && <ul>{s.summary.map((t) => <li key={t}>{t}</li>)}</ul>}
            {(s.missing?.length ?? 0) > 0 && (
              <div className="tk-missing"><b>Còn thiếu</b><ul>{s.missing!.map((t) => <li key={t}>{t}</li>)}</ul></div>
            )}
          </div>
        )}
      </div>
      <div className="tk-rail" aria-hidden="true">
        <span className={`tk-dot tk-dot-${s.state}`}>{s.state === 'done' ? '✓' : s.state === 'todo' ? s.n : ''}</span>
        {!last && <span className="tk-line" />}
      </div>
      <div className="tk-right">
        {s.docs.length > 0 && (
          <>
            <div className="tk-sub">Tài liệu</div>
            {s.docs.map((d) => <Doc key={d.title} d={d} />)}
          </>
        )}
      </div>
    </div>
  )
}

export function TikTok() {
  const [tab, setTab] = useState<Tab>('process')
  const [pv, setPv] = useState<{ path: string; title: string } | null>(null)
  useEffect(() => {
    const h = (e: Event) => setPv((e as CustomEvent<{ path: string; title: string }>).detail)
    window.addEventListener('tk-preview', h)
    return () => window.removeEventListener('tk-preview', h)
  }, [])
  const T = TIKTOK
  const allDocs = T.steps.flatMap((s) => s.docs.map((d) => ({ step: s.n, d })))
  const allEx = T.steps.flatMap((s) => s.exercises.map((d) => ({ step: s.n, d })))
  return (
    <div className="stack">
      <div className="db-top">
        <div>
          <h1>TikTok Shop US</h1>
          <p className="note">{T.title} · snapshot {T.snapshotAt.slice(8, 10)}/{T.snapshotAt.slice(5, 7)}/{T.snapshotAt.slice(0, 4)}</p>
        </div>
        <a className="pill idle" href={T.task.url} target="_blank" rel="noreferrer">{T.task.key} · {T.task.status}</a>
      </div>

      <section className="card">
        <div className="bar">
          <h2>{T.task.key}: đã làm đến đâu</h2>
          <span className="sp" />
          <span className="note">Tiến độ theo Huy: {T.mentorProgress.done} / {T.mentorProgress.total} bước</span>
        </div>
        <div className="tk-goals">
          {T.goals.map((g) => (
            <div key={g.t} className={`tk-goal tk-g-${g.state}`}>
              <b>{g.t}</b>
              <span className="tk-gs">{g.state === 'done' ? 'Xong' : g.state === 'partial' ? 'Một phần' : 'Chờ Amin'}</span>
              <p className="note">{g.detail}</p>
            </div>
          ))}
        </div>
        <div className="tk-next">
          <b>Gợi ý việc tiếp theo</b>
          <ul>{T.next.map((n) => <li key={n.t}><span className={`tk-who tk-who-${n.who}`}>{n.who}</span> {n.t}</li>)}</ul>
        </div>
      </section>

      <section className="card">
        <div className="bar"><h2>File của {T.task.key} (bấm để xem trước)</h2></div>
        <div className="tk-goals">
          {T.taskFiles.map((g) => (
            <div key={g.label} className="tk-goal">
              <b>{g.label}</b>
              {g.note && <p className="note">{g.note}</p>}
              <div style={{ display: 'grid', gap: 6, marginTop: 6 }}>{g.docs.map((d) => <Doc key={d.path} d={d} />)}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="tabs" role="tablist">
        {TABS.map(([k, label]) => (
          <button key={k} className="tab" role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{label}</button>
        ))}
      </div>

      {tab === 'process' && (
        <>
          <p className="note">{T.mentorProgress.note} Bấm mũi tên ở mỗi bước để xem đầy đủ; bấm tài liệu để mở trên Drive.</p>
          <div className="tk-steps">
            {T.steps.map((s, i) => <Step key={s.n} s={s} last={i === T.steps.length - 1} />)}
            <div className="tk-goal-end"><span className="tk-flag" aria-hidden="true">⚑</span><b>Đích: đơn hàng thật đầu tiên trên sàn</b></div>
          </div>
        </>
      )}
      {tab === 'lessons' && (
        <div className="card"><p>Chưa có danh sách bài giảng trong folder. <Pill>CHƯA NHẬN</Pill></p><p className="note">Amin dán hoặc chụp tab "Bài giảng" trên mentor.huytim.com thì mình thêm vào đây.</p></div>
      )}
      {tab === 'exercises' && (
        <div className="card">
          {allEx.map(({ step, d }) => <div key={d.title} className="tk-row"><span className="note">Bước {step}</span><Doc d={d} /></div>)}
          <p className="note">Đề bài và hạn của tab Bài tập trên mentor.huytim.com: CHƯA NHẬN.</p>
        </div>
      )}
      {tab === 'docs' && (
        <div className="card">
          {allDocs.map(({ step, d }) => <div key={d.title} className="tk-row"><span className="note">Bước {step}</span><Doc d={d} /></div>)}
        </div>
      )}
      {pv && <Preview path={pv.path} title={pv.title} onClose={() => setPv(null)} />}
    </div>
  )
}
