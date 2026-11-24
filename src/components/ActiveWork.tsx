import { useEffect, useState } from 'react'

/** "Đang làm" (cuối trang Hôm nay): mỗi task có phiên worklog "Đang làm" một thẻ, vẽ workload (các lượt) và nội suy tiến độ từ workload.
 *  Chỉ đọc: /worklog/active, /worklog/task, /worklog/criteria. Không ghi gì, không thay bảng điều khiển (nguồn Jira). */

type St = 'Còn lại' | 'Đang làm' | 'Chờ' | 'Đã xong'
interface Item { item_id: string; date: string; section_id: string; section_name: string; actor: string; action: string; status: St
  started_at: string | null; updated_at: string | null; ended_at?: string | null; evidence: string[]; next_or_blocker: string | null }
interface Crit { file: string | null; draft: boolean; criteria: { id: string; text: string }[] }
interface Card { key: string; items: Item[]; crit: Crit }

const W: Record<St, number> = { 'Đã xong': 1, 'Đang làm': 0.5, 'Chờ': 0.25, 'Còn lại': 0 }
const CLS: Record<St, string> = { 'Còn lại': 'todo', 'Đang làm': 'doing', 'Chờ': 'wait', 'Đã xong': 'done' }
const JIRA = 'https://phamsworkspace-42448765.atlassian.net/browse/'
const hm = (t: string | null) => (t ? t.slice(11, 16) : '—')
const ms = (t: string) => new Date(t).getTime()
const dur = (m: number) => (m >= 60 ? `${Math.floor(m / 60)}g${String(m % 60).padStart(2, '0')}` : `${m} phút`)

function Bar({ items, now }: { items: Item[]; now: number }) {
  const timed = items.filter((i) => i.started_at)
  if (!timed.length) return <p className="aw-note">Chưa lượt nào có giờ bắt đầu để vẽ trục thời gian.</p>
  const t0 = Math.min(...timed.map((i) => ms(i.started_at!)))
  const t1 = Math.max(now, ...timed.map((i) => ms(i.ended_at ?? i.updated_at ?? i.started_at!)))
  const span = Math.max(1, t1 - t0)
  return (
    <div className="aw-gantt" role="img" aria-label="Trục thời gian các lượt">
      {timed.map((i) => {
        const a = ms(i.started_at!); const b = i.status === 'Đang làm' ? now : ms(i.ended_at ?? i.updated_at ?? i.started_at!)
        return <div key={i.item_id} className="aw-gr"><span className="aw-gl">{i.section_id}</span>
          <div className="aw-gt"><i className={`aw-seg ${CLS[i.status]}`} style={{ left: `${((a - t0) / span) * 100}%`, width: `${Math.max(1.5, ((b - a) / span) * 100)}%` }} title={`${i.section_id}: ${hm(i.started_at)} → ${i.status === 'Đang làm' ? 'nay' : hm(i.ended_at ?? i.updated_at)}`} /></div>
          <span className="aw-gd">{dur(Math.max(0, Math.round((b - a) / 60000)))}</span></div>
      })}
      <div className="aw-ax"><span>{hm(new Date(t0 + 7 * 3600000).toISOString())}</span><span>{hm(new Date(t1 + 7 * 3600000).toISOString())}</span></div>
    </div>
  )
}

function TaskCard({ c, now }: { c: Card; now: number }) {
  const [all, setAll] = useState(false)
  const runDate = c.items.filter((i) => i.status === 'Đang làm').map((i) => i.date).sort().pop() ?? ''
  const older = c.items.filter((i) => i.date < runDate).length
  const its = all ? c.items : c.items.filter((i) => i.date >= runDate)
  const n = its.length
  const weighted = n ? Math.round((its.reduce((s, i) => s + W[i.status], 0) / n) * 100) : 0
  const done = its.filter((i) => i.status === 'Đã xong')
  const proven = done.filter((i) => i.evidence.length > 0).length
  const provenPct = n ? Math.round((proven / n) * 100) : 0
  const running = its.filter((i) => i.status === 'Đang làm')
  const blocked = its.filter((i) => /BLOCKED|chặn|chờ/i.test(i.next_or_blocker ?? '') && i.status !== 'Đã xong')
  const nc = c.crit.criteria.length
  return (
    <article className="aw-card">
      <header className="aw-h">
        <a className="td-key solid" href={JIRA + c.key} target="_blank" rel="noreferrer">{c.key}</a>
        <span className="aw-run">{running.map((r) => <b key={r.item_id} className="aw-chip doing">{r.section_id} · {r.section_name}</b>)}</span>
      </header>
      <div className="aw-prog">
        <div className="aw-pb" title="Nội suy: Đã xong=1, Đang làm=½, Chờ=¼, Còn lại=0 trên tổng số lượt trong worklog">
          <i className="aw-pv" style={{ width: `${weighted}%` }} /><i className="aw-pp" style={{ width: `${provenPct}%` }} />
        </div>
        <p className="aw-pn"><b>{weighted}%</b> theo workload {all ? 'toàn bộ' : 'hôm nay'} ({done.length} xong / {running.length} đang / {n - done.length - running.length} chưa, tổng {n} lượt) · <b>{provenPct}%</b> có bằng chứng ({proven}/{n} lượt xong kèm file)</p>
      </div>
      {older > 0 && <button type="button" className="btn" onClick={() => setAll(!all)}>{all ? 'Chỉ lượt hôm nay' : `Gồm ${older} lượt các ngày trước`}</button>}
      <Bar items={its.filter((i) => i.date === runDate)} now={now} />
      <ul className="aw-list">
        {its.map((i) => (
          <li key={i.item_id} className={`aw-it ${CLS[i.status]}`}>
            <span className={`aw-chip ${CLS[i.status]}`}>{i.status}</span>
            <div><b>{i.section_id}</b> · {i.section_name}<small> — {i.action}</small>
              <div className="aw-meta">
                {i.started_at ? `${i.date.slice(8, 10)}/${i.date.slice(5, 7)} ${hm(i.started_at)}` : 'chưa bắt đầu'}
                {i.status === 'Đã xong' && (i.evidence.length ? ` · ${i.evidence.length} file bằng chứng` : ' · ⚠ xong nhưng chưa ghi bằng chứng')}
                {i.next_or_blocker && <em> · {i.next_or_blocker}</em>}
              </div></div>
          </li>
        ))}
      </ul>
      <div className="aw-req">
        {nc ? <><b>Yêu cầu ({nc})</b>{c.crit.draft && <span className="aw-chip wait">tiêu chí NHÁP</span>}
          <ul>{c.crit.criteria.map((x) => <li key={x.id}><code>{x.id}</code> {x.text}</li>)}</ul>
          <p className="aw-note">Chưa có bảng chấm từng tiêu chí (output/DANH-GIA.md), nên tiến độ trên là theo workload, không phải % đã đạt yêu cầu. Chấm xong C* sẽ hiện thêm ở đây.</p></>
          : <p className="aw-note">Task chưa có input/TIEU-CHI.md dạng "- C1: …" nên chưa đối chiếu được yêu cầu.</p>}
        {blocked.length > 0 && <p className="aw-block">Đang vướng: {blocked.map((b) => b.section_id).join(', ')}</p>}
      </div>
    </article>
  )
}

export function ActiveWork() {
  const [cards, setCards] = useState<Card[] | null>(null)
  const [err, setErr] = useState('')
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    let off = false
    const load = async () => {
      try {
        const a = await fetch('/worklog/active').then((r) => r.json()) as { tasks?: { key: string; ok: boolean; query?: { session: { counts: Record<St, number> } | null } }[] }
        const keys = (a.tasks ?? []).filter((t) => t.ok && (t.query?.session?.counts?.['Đang làm'] ?? 0) > 0).map((t) => t.key)
        const out = await Promise.all(keys.map(async (key) => {
          const [w, c] = await Promise.all([fetch(`/worklog/task?task=${key}`).then((r) => r.json()), fetch(`/worklog/criteria?task=${key}`).then((r) => r.json())])
          return { key, items: ((w.items ?? []) as Item[]).slice().sort((x, y) => x.item_id.localeCompare(y.item_id)), crit: c as Crit }
        }))
        if (!off) { setCards(out); setErr(''); setNow(Date.now()) }
      } catch { if (!off) setErr('Không đọc được /worklog/* (chỉ có khi chạy dev server).') }
    }
    load(); const id = window.setInterval(load, 10000)
    return () => { off = true; window.clearInterval(id) }
  }, [])
  return (
    <details className="card td-sec aw" open>
      <summary><h2>Đang làm: workload và tiến độ</h2>{cards && <span className="td-n">{cards.length}</span>}</summary>
      <div className="td-body">
        <p className="aw-note">Khác Bảng điều khiển (danh sách task lấy từ Jira/Supabase): đây là việc đang chạy, vẽ từ worklog; % là nội suy từ workload, tự làm mới mỗi 10 giây.</p>
        {err && <p className="aw-block">{err}</p>}
        {cards && !cards.length && <p className="aw-note">Hiện không task nào có lượt "Đang làm".</p>}
        <div className="aw-grid">{cards?.map((c) => <TaskCard key={c.key} c={c} now={now} />)}</div>
      </div>
    </details>
  )
}
