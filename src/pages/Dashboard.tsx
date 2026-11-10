import { useEffect, useMemo, useState } from 'react'
import { dashboardRepo } from '../data'
import type { DashboardData, DashLink, DashTask, DashWidget } from '../data/dashboardTypes'

const WD = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
const pad = (n: number) => String(n).padStart(2, '0')
const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const startOfToday = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d }
const daysTo = (s: string) => Math.round((new Date(`${s}T00:00:00`).getTime() - startOfToday().getTime()) / 864e5)
const fmtDM = (s: string) => `${s.slice(8, 10)}/${s.slice(5, 7)}`
const dayText = (d: number) => (d < 0 ? `trễ ${-d} ngày` : d === 0 ? 'hôm nay' : `${d} ngày`)

function DueChip({ due }: { due: string }) {
  const d = daysTo(due)
  const cls = d < 0 ? 'bad' : d <= 3 ? 'warn' : 'idle'
  return <span className={`pill ${cls}`}>{d < 0 ? `trễ ${-d} ngày` : d === 0 ? 'hôm nay' : `${fmtDM(due)} · ${d}d`}</span>
}

function Links({ list, miss }: { list?: DashLink[]; miss: string }) {
  if (!list?.length) return <span className="db-unv">{miss}</span>
  return (
    <>
      {list.map((l, i) =>
        l.url && /^https:\/\//.test(l.url)
          ? <a key={i} className="db-lk" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          : <span key={i} className="db-lk" title={l.path}>{l.label}</span>,
      )}
    </>
  )
}

const NOTE_LABELS: [keyof NonNullable<DashTask['notes']>, string][] = [['progress', 'Progress'], ['next', 'Next'], ['blocker', 'Blocker'], ['note', 'Note']]

function TaskRow({ t, focus }: { t: DashTask; focus: boolean }) {
  // Hạn chỉ làm nổi bật khi còn ≤ 3 ngày hoặc đã trễ (Amin, 09/11).
  const hot = !!t.due && daysTo(t.due) <= 3
  const notes = NOTE_LABELS.filter(([k]) => t.notes?.[k])
  const [open, setOpen] = useState(false)
  const long = notes.reduce((n, [k]) => n + (t.notes?.[k]?.length ?? 0), 0) > 220
  return (
    <tr className={`db-r${focus ? ' focus' : ''}${hot ? ' hot' : ''}`}>
      <td data-label="Jira · Task">
        {focus && <span className="db-now">Đang làm</span>}
        {t.jira?.url
          ? <a className="db-jk" href={t.jira.url} target="_blank" rel="noreferrer">{t.jira.key}</a>
          : <code className="db-jk">{t.key}</code>}{' '}
        <b>{t.t}</b>
        {t.due && <div className="db-due">Hạn {fmtDM(t.due)} {hot && <DueChip due={t.due} />}</div>}
      </td>
      <td data-label="Input"><Links list={t.inputs} miss="chưa có input link" /></td>
      <td data-label="Progress">
        {notes.length
          ? <>
              <div className={`db-notes${long && !open ? ' clamp' : ''}`}>{notes.map(([k, l]) => <div key={k}><em>{l}</em>{t.notes?.[k]}</div>)}</div>
              {long && <button className="link" onClick={() => setOpen(!open)}>{open ? 'Thu gọn' : 'Xem thêm'}</button>}
            </>
          : <span className="db-unv">—</span>}
      </td>
      <td data-label="Output"><Links list={t.outputs} miss="chưa có output link" /></td>
    </tr>
  )
}

function TaskTable({ title, tasks, focus, grouped }: { title: string; tasks: DashTask[]; focus: string | null; grouped?: boolean }) {
  const groups = useMemo(() => {
    if (!grouped) return [['', tasks]] as [string, DashTask[]][]
    const g: Record<string, DashTask[]> = {}
    tasks.forEach((t) => (g[t.project || 'Khác'] ||= []).push(t))
    return Object.entries(g)
  }, [tasks, grouped])
  return (
    <div className="stack">
      <p className="db-sec">{title} <span className="note">{tasks.length}</span></p>
      <div className="scroll">
        <table className="db-tab">
          <thead><tr><th>Jira · Task</th><th>Input</th><th>Progress</th><th>Output</th></tr></thead>
          <tbody>
            {groups.map(([g, list]) => [
              g ? <tr key={`g-${g}`} className="db-grp"><td colSpan={4}>{g}</td></tr> : null,
              ...list.map((t) => <TaskRow key={t.key} t={t} focus={focus === t.key} />),
            ])}
            {!tasks.length && <tr><td colSpan={4} className="note">Trống</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Calendar({ data }: { data: DashboardData }) {
  const [month, setMonth] = useState(() => { const n = startOfToday(); return new Date(n.getFullYear(), n.getMonth(), 1) })
  const now = iso(startOfToday())
  const marks = useMemo(() => {
    const m: Record<string, string[]> = {}
    ;[...data.events.map((e) => ({ date: e.date, label: e.label })), ...data.tasks.filter((t) => t.due).map((t) => ({ date: t.due as string, label: t.key }))]
      .forEach((e) => (m[e.date] ||= []).push(e.label))
    return m
  }, [data])
  const lead = (month.getDay() + 6) % 7
  const start = new Date(month); start.setDate(1 - lead)
  const cells: React.ReactNode[] = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((d) => <span key={d} className="dow">{d}</span>)
  for (let i = 0; i < 42; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i)
    if (i >= 35 && d.getMonth() !== month.getMonth()) break
    const k = iso(d), ev = marks[k]
    cells.push(
      <span key={k} className={`dy${d.getMonth() !== month.getMonth() ? ' off' : ''}${k === now ? ' today' : ''}${ev ? ' ev' : ''}`} title={ev?.join(', ')}>
        {d.getDate()}
      </span>,
    )
  }
  const upcoming = data.events.filter((e) => daysTo(e.date) >= 0).sort((a, b) => a.date.localeCompare(b.date))
  const shift = (n: number) => setMonth(new Date(month.getFullYear(), month.getMonth() + n, 1))
  return (
    <div className="db-cal">
      <div className="db-calhd">
        <button className="btn" onClick={() => shift(-1)} aria-label="Tháng trước">‹</button>
        <b>Tháng {month.getMonth() + 1}/{month.getFullYear()}</b>
        <button className="btn" onClick={() => shift(1)} aria-label="Tháng sau">›</button>
      </div>
      <div className="db-calg">{cells}</div>
      {upcoming.length > 0 && (
        <div className="db-evl">
          {upcoming.map((e, i) => (
            <div key={i} className="db-evr">
              <div className="db-evd"><b>{fmtDM(e.date)}</b><small>{dayText(daysTo(e.date))}</small></div>
              <span>{e.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function Attention({ widgets }: { widgets: DashWidget[] }) {
  const groups = widgets
    .filter((w) => w.id !== 'finance') // Finance không đưa vào "Cần chú ý" (Amin, 24/10)
    .map((w) => {
      const list: { t: string; due?: string }[] = [
        ...w.alerts.map((t) => ({ t })),
        ...w.issues.map((t) => ({ t })),
        ...w.metrics.filter((m) => m.tone === 'bad').map((m) => ({ t: `${m.l}: ${m.v ?? ''}` })),
        ...w.next.filter((n) => n.due && daysTo(n.due) <= 7),
      ]
      const hot = w.tone === 'bad' || w.tone === 'warn'
      return { w, list, hot, rank: w.tone === 'bad' ? 0 : w.tone === 'warn' ? 1 : 2 }
    })
    .filter((g) => g.list.length || g.hot)
    .sort((a, b) => a.rank - b.rank)
  if (!groups.length) return null
  const total = groups.reduce((n, g) => n + (g.list.length || 1), 0)
  return (
    <section className="db-attn" aria-label="Cần chú ý">
      <h2>Cần chú ý ({total})</h2>
      <div className="db-attn-g">
        {groups.map(({ w, list }) => (
          <div key={w.id} className="db-attn-b">
            <b className="db-attn-h">{w.title ?? w.id} {w.status && <span className={`pill ${w.tone ?? 'idle'}`}>{w.status}</span>}</b>
            {!list.length && w.headline && <p className="note">{w.headline}</p>}
            {list.length > 0 && <ul>{list.map((x, i) => <li key={i}>{x.t}{x.due && <> <DueChip due={x.due} /></>}</li>)}</ul>}
          </div>
        ))}
      </div>
    </section>
  )
}

function WidgetCard({ w }: { w: DashWidget }) {
  const age = w.updated ? -daysTo(w.updated) : null
  return (
    <article className="card db-w">
      <header className="bar">
        <h3 className="db-wt">{w.title ?? w.id}</h3>
        {w.status && <span className={`pill ${w.tone ?? 'idle'}`}>{w.status}</span>}
      </header>
      {w.headline && <p className="db-hl">{w.headline}</p>}
      {w.metrics.length > 0 && (
        <div className="db-stats">
          {w.metrics.map((m, i) => (
            <div key={i} className={`db-stat ${m.tone ?? ''}`}>
              <b>{m.v?.includes('{d}') && m.date ? (daysTo(m.date) > 0 ? m.v.replace('{d}', String(daysTo(m.date))) : dayText(daysTo(m.date))) : m.v}</b>
              <span>{m.l}</span>
            </div>
          ))}
        </div>
      )}
      {w.next.length > 0 && (
        <div className="stack">
          <p className="db-sec">Việc tiếp theo</p>
          <ul className="db-ul">{w.next.slice(0, 5).map((n, i) => <li key={i}>{n.t}{n.due && <> <DueChip due={n.due} /></>}</li>)}</ul>
        </div>
      )}
      {w.updated && <p className={`note db-upd${age !== null && age > 3 ? ' stale' : ''}`}>Cập nhật {fmtDM(w.updated)}{age !== null && age > 3 ? ` · cũ ${age} ngày` : ''}</p>}
    </article>
  )
}

export function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [tab, setTab] = useState<'todo' | 'idea'>('todo')
  const [hide, setHide] = useState(false)
  useEffect(() => { void dashboardRepo.load().then(setData) }, [])
  if (!data) return <p className="note">Đang tải…</p>

  const t = new Date()
  const doing = [...data.tasks].sort((a, b) => Number(b.key === data.focus) - Number(a.key === data.focus))
  const queued = tab === 'idea' ? data.idea : data.todo
  const lu = new Date(data.lastUpdate.at)
  return (
    <div className="stack">
      <div className="db-top">
        <div>
          <h1>Bảng điều khiển</h1>
          <p className="note">{WD[t.getDay()]}, {pad(t.getDate())}/{pad(t.getMonth() + 1)}/{t.getFullYear()}</p>
        </div>
        <span className="pill idle" title={data.lastUpdate.text}>Cập nhật {pad(lu.getHours())}:{pad(lu.getMinutes())} {pad(lu.getDate())}/{pad(lu.getMonth() + 1)}</span>
      </div>
      <Attention widgets={data.widgets} />
      <section className="card db-agenda" aria-label="Lịch và việc đang làm">
        <Calendar data={data} />
        <div className="stack db-tasks">
          <TaskTable title="In Progress" tasks={doing} focus={data.focus} />
          <div className="db-tabs" role="tablist">
            <button role="tab" aria-selected={tab === 'todo'} className="tab" onClick={() => setTab('todo')}>To do ({data.todo.length})</button>
            <button role="tab" aria-selected={tab === 'idea'} className="tab" onClick={() => setTab('idea')}>Idea ({data.idea.length})</button>
            <button className="link" onClick={() => setHide(!hide)}>{hide ? 'Hiện' : 'Ẩn'}</button>
          </div>
          {!hide && <TaskTable title={tab === 'idea' ? 'Idea' : 'To do'} tasks={queued} focus={data.focus} grouped />}
        </div>
      </section>
      <div className="db-wg">{data.widgets.map((w) => <WidgetCard key={w.id} w={w} />)}</div>
      <p className="note">Nguồn: {data.source}. Đã xong gần đây: {data.done.map((d) => d.key).join(', ')}.</p>
    </div>
  )
}
