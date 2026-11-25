import { useEffect, useMemo, useState } from 'react'
import { dashboardRepo } from '../data'
import { fetchJira, mergeJira } from '../data/dashboardRepo'
import { ProgressStrip, ResultVideos, WorklogGroup, useTaskItems } from '../components/TaskProgress'
import type { DashboardData, DashLink, DashTask, DashVerify, DashWidget } from '../data/dashboardTypes'
import { Preview } from './TikTok'
import { FocusTimer } from '../focusTimer'

const pad = (n: number) => String(n).padStart(2, '0')
const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const startOfToday = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d }
const daysTo = (s: string) => Math.round((new Date(`${s}T00:00:00`).getTime() - startOfToday().getTime()) / 864e5)
const fmtDM = (s: string) => `${s.slice(8, 10)}/${s.slice(5, 7)}`
const dayText = (d: number) => (d < 0 ? `trễ ${-d} ngày` : d === 0 ? 'hôm nay' : `${d} ngày`)

function DueChip({ due }: { due: string }) {
  const d = daysTo(due)
  const cls = d <= 3 ? 'bad' : 'idle'
  return <span className={`pill ${cls}`}>{d < 0 ? `trễ ${-d} ngày` : d === 0 ? 'hôm nay' : `${fmtDM(due)} · ${d}d`}</span>
}

/** Đường dẫn tuyệt đối cũ hoặc tương đối (chuẩn mới, từ Working/) → đường dẫn tương đối từ thư mục "working" (cho /preview/). */
const relWorking = (p: string) => { if (!p.startsWith('/')) return p; const i = p.indexOf('/working/'); return i < 0 ? null : p.slice(i + 9) }

function Links({ list, miss }: { list?: DashLink[]; miss: string }) {
  const [pv, setPv] = useState<{ path: string; title: string } | null>(null)
  if (!list?.length) return <span className="db-unv">{miss}</span>
  return (
    <>
      {list.map((l, i) => {
        const drive = l.url && /^https:\/\//.test(l.url) ? l.url : null
        const rel = l.path && !l.path.endsWith('/') ? relWorking(l.path) : null
        // Mặc định bấm tên = xem trước trong web; biểu tượng ↗ nhỏ bên cạnh mở file trên Drive (Amin, 24/11).
        if (rel) return (
          <span key={i} className="db-lkw">
            <button className="db-lk db-pv" title={`Xem trước: ${rel}`} onClick={() => setPv({ path: rel, title: l.label })}>{l.label}</button>
            {drive && <a className="db-drv" href={drive} target="_blank" rel="noreferrer" title="Mở trên Google Drive" aria-label={`Mở ${l.label} trên Drive`}>↗</a>}
          </span>
        )
        if (drive) return <a key={i} className="db-lk" href={drive} target="_blank" rel="noreferrer">{l.label}</a>
        return <span key={i} className="db-lk" title={l.path}>{l.label}</span>
      })}
      {pv && <Preview path={pv.path} title={pv.title} onClose={() => setPv(null)} />}
    </>
  )
}

/** Tách đoạn văn dài thành các checkpoint ngắn: theo dòng, dấu ';' và hết câu. */
const lines = (x?: string) => (x ?? '')
  .split('\n')
  .flatMap((l) => l.split(/;\s+|\.\s+(?=[A-ZÀ-Ỵ0-9])/))
  .map((l) => l.trim().replace(/[.;]$/, ''))
  .filter(Boolean)

/** Làm đậm cụm đầu (trước dấu ':') để lướt nhanh ý chính. */
function Cp({ text }: { text: string }) {
  const i = text.indexOf(': ')
  return i > 0 && i < 34 ? <><b>{text.slice(0, i)}:</b> {text.slice(i + 2)}</> : <>{text}</>
}

function Steps({ t }: { t: DashTask }) {
  const [open, setOpen] = useState(false)
  const done = lines(t.notes?.done)
  const seen = new Set(done)
  const fresh = (xs: string[]) => xs.filter((x) => !/^Chi tiết/i.test(x) && !seen.has(x) && (seen.add(x), true))
  const now = fresh(lines(t.notes?.progress)), next = fresh(lines(t.notes?.next))
  const wait = lines(t.notes?.blocker).map((x) => x.replace(/^Chờ [^:]{1,20}:\s*/i, ''))
  if (![done, now, next, wait].some((x) => x.length)) return <span className="db-unv">—</span>
  const doneShown = open ? done : done.slice(-1)
  return (
    <ol className="st">
      {done.length > doneShown.length && <li className="st-more"><button className="link" onClick={() => setOpen(true)}>+{done.length - doneShown.length} bước đã xong</button></li>}
      {doneShown.map((x, i) => <li key={`d${i}`} className="st-done"><Cp text={x} /></li>)}
      {open && done.length > 1 && <li className="st-more"><button className="link" onClick={() => setOpen(false)}>Thu gọn</button></li>}
      {now.map((x, i) => <li key={`n${i}`} className="st-now"><Cp text={x} /></li>)}
      {wait.map((x, i) => <li key={`w${i}`} className="st-wait"><b>Đang chờ</b> <Cp text={x} /></li>)}
      {next.map((x, i) => <li key={`x${i}`} className="st-next"><Cp text={x} /></li>)}
    </ol>
  )
}

function VerifyList({ t }: { t: DashTask }) {
  const items: DashVerify[] = t.verify?.length ? t.verify : (t.requirements ?? []).map((x) => ({ text: x, state: 'pending' as const }))
  if (!items.length) return null
  const ok = items.filter((x) => x.state === 'ok').length
  return (
    <div className="vf">
      <p className="tc-fl">Verify <b>{ok}/{items.length}</b></p>
      <div className="vf-bar"><i style={{ width: `${(ok / items.length) * 100}%` }} /></div>
      <ul>{items.map((x, i) => <li key={i} className={`vf-${x.state}`}>{x.text}</li>)}</ul>
    </div>
  )
}

/** Chuẩn file của task (task-hub/<KEY>/): mỗi cột có các "ô" cố định; file không khớp ô nào vào "Khác". */
type Slot = 'req' | 'src' | 'prog' | 'hist' | 'sum' | 'ver' | 'out' | 'refp' | 'other'
const SLOT_RE: [Slot, RegExp][] = [
  ['req', /tiêu chí|tieu-chi|yêu cầu|requirement/i],
  ['ver', /đánh giá|danh-gia|verify|kiểm/i],
  ['sum', /tóm tắt|tom-tat|summary/i],
  ['hist', /bàn giao|ban-giao|lịch sử|lich-su|history/i],
  ['prog', /tiến độ|tien-do|progress/i],
  ['src', /nguồn|readme|input/i],
]
const slotOf = (l: DashLink): Slot => (l.slot as Slot | undefined) ?? SLOT_RE.find(([, re]) => re.test(`${l.label} ${l.url ?? l.path ?? ''}`))?.[0] ?? 'other'

function SlotRow({ name, links }: { name: string; links: DashLink[] }) {
  return (
    <div className="io">
      {name && <em>{name}</em>}
      {links.length ? <Links list={links} miss="" /> : <span className="db-unv">thiếu</span>}
    </div>
  )
}

function Other({ links }: { links: DashLink[] }) {
  if (!links.length) return null
  return <details className="io-other"><summary>Khác ({links.length})</summary><Links list={links} miss="" /></details>
}

export function TaskCard({ t, bare, noWorklog }: { t: DashTask; bare?: boolean; noWorklog?: boolean }) {
  // Hạn chỉ làm nổi bật khi còn ≤ 3 ngày hoặc đã trễ (Amin, 09/11).
  const hot = !!t.due && daysTo(t.due) <= 3
  const all = [...(t.inputs ?? []).map((l) => ({ l, from: 'in' as const })), ...(t.outputs ?? []).map((l) => ({ l, from: 'out' as const })), ...(t.progressFile ? [{ l: t.progressFile, from: 'out' as const }] : [])]
  const by = (slot: Slot) => all.filter((x) => slotOf(x.l) === slot).map((x) => x.l)
  const wl = useTaskItems(t.key)
  const other = (from: 'in' | 'out') => all.filter((x) => slotOf(x.l) === 'other' && x.from === from).map((x) => x.l)
  return (
    <article className={`tc${hot ? ' hot' : ''}`}>
      {!bare && <header className="tc-h">
        {t.jira?.url
          ? <a className="db-jk" href={t.jira.url} target="_blank" rel="noreferrer">{t.jira.key}</a>
          : <code className="db-jk">{t.key}</code>}
        {t.due && <DueChip due={t.due} />}
        <FocusTimer k={t.key} />
      </header>}
      {!bare && <h3 className="tc-t">{t.t}</h3>}
      <div className="tc-cols">
        <section>
          <p className="tc-fl">1. Input</p>
          {!t.compact && t.notes?.objective && <div className="io"><em>Mục tiêu</em><p>{t.notes.objective}</p></div>}
          {(!t.compact || by('req').length > 0) && <div className="io">
            <em>Requirement</em>
            {t.requirements?.length ? <ul className="rq">{t.requirements.map((x, i) => <li key={i}>{x}</li>)}</ul> : !t.compact && <span className="db-unv">chưa có</span>}
            {by('req').length > 0 && <Links list={by('req')} miss="" />}
          </div>}
          <SlotRow name="Nguồn" links={by('src')} />
          <Other links={other('in')} />
        </section>
        <section>
          <p className="tc-fl">2. Output</p>
          <ResultVideos items={wl.items} />
          {!t.compact && <SlotRow name="Tóm tắt" links={by('sum')} />}
          {by('out').length > 0 && <SlotRow name="File output" links={by('out')} />}
          <div className="io">
            <em>Verify</em>
            <VerifyList t={t} />
            {by('ver').length > 0 ? <Links list={by('ver')} miss="" /> : !t.verify?.length && !t.requirements?.length && <span className="db-unv">thiếu</span>}
          </div>
          <Other links={other('out')} />
        </section>
        <section>
          <p className="tc-fl">3. Progress</p>
          <ProgressStrip items={wl.items} loading={wl.loading} error={wl.error} />
          {!wl.loading && !wl.items.length && <Steps t={t} />}
          <SlotRow name="" links={[...by('prog'), ...by('hist')]} />
          {by('refp').length > 0 && <details className="io-other"><summary>File tham chiếu ({by('refp').length})</summary><Links list={by('refp')} miss="" /></details>}
        </section>
      </div>
      {!noWorklog && <section className="tc-wl">
        <p className="tc-fl">4. Worklog</p>
        <WorklogGroup task={t.key} items={wl.items} loading={wl.loading} error={wl.error} />
      </section>}
    </article>
  )
}

function brief(t: DashTask) {
  const x = lines(t.notes?.progress)
  const y = x.length ? x : lines(t.notes?.next)
  return y[0] ?? ''
}

type WlRow = { key: string; item_id: string; date: string; section_id: string; action: string; status: string }
/** Từ khóa tiến độ gần nhất: mệnh đề đầu của action ở item worklog mới nhất (theo item_id) của task. */
function useLatestWorklog() {
  const [m, setM] = useState<Map<string, WlRow>>(new Map())
  useEffect(() => {
    fetch('/worklog/all').then((r) => r.json()).then((d: { items: WlRow[] }) => {
      const n = new Map<string, WlRow>()
      for (const r of d.items) { const o = n.get(r.key); if (!o || r.item_id > o.item_id) n.set(r.key, r) }
      setM(n)
    }).catch(() => {})
  }, [])
  return m
}
const keyword = (a: string) => {
  const c = a.split(/[:;(]| — |, /)[0].trim()
  const w = c.split(/\s+/)
  return w.length > 5 ? w.slice(0, 5).join(' ') + '…' : c
}

function TaskTable({ title, tasks }: { title: string; tasks: DashTask[] }) {
  const lw = useLatestWorklog()
  const [open, setOpen] = useState<Set<string>>(new Set())
  const toggle = (k: string) => setOpen((s) => { const n = new Set(s); if (n.has(k)) n.delete(k); else n.add(k); return n })
  const groups: [string, DashTask[]][] = [['', tasks]]
  return (
    <div className="stack">
      {title && <p className="db-sec">{title} <span className="note">{tasks.length}</span></p>}
      {tasks.length > 0 && (
        <div className="tbl-wrap">
          <table className="tt">
            <thead><tr><th className="tt-k">Key</th><th>Việc</th><th className="tt-p">Tiến độ gần nhất</th></tr></thead>
            {groups.map(([g, list]) => (
              <tbody key={g || title}>
                {list.map((t) => {
                  const hot = !!t.due && daysTo(t.due) <= 3
                  const on = open.has(t.key)
                  return [
                    <tr key={t.key} className={`tt-r${hot ? ' hot' : ''}${on ? ' on' : ''}`}>
                      <td className="tt-k"><button className="link tt-ex" aria-expanded={on} aria-label={on ? 'Thu gọn' : 'Mở chi tiết'} onClick={() => toggle(t.key)}>{on ? '▾' : '▸'}</button>{t.jira?.url
                        ? <a className="db-jk" href={t.jira.url} target="_blank" rel="noreferrer">{t.jira.key}</a>
                        : <code className="db-jk">{t.key}</code>}</td>
                      <td className="tt-t" title={t.t}><span className="tt-c2">{t.t}</span></td>
                      <td className="tt-p">{(() => {
                        const w = lw.get(t.key)
                        if (!w) return <span className="tt-c2" title={brief(t)}>{brief(t) || '—'}</span>
                        return <span className="tt-c2" title={`${w.item_id} · ${w.status} · ${w.action}`}><mark className="tt-kw">{keyword(w.action)}</mark> <span className="note">{w.section_id} · {w.date.slice(8)}/{w.date.slice(5, 7)}</span></span>
                      })()}</td>
                    </tr>,
                    on && <tr key={t.key + '-d'} className="tt-det"><td colSpan={3}><div className="tt-tm"><FocusTimer k={t.key} /></div><TaskCard t={t} bare /></td></tr>,
                  ]
                })}
              </tbody>
            ))}
          </table>
        </div>
      )}
      {!tasks.length && <p className="note">Trống</p>}
    </div>
  )
}

function FlowCard({ t, done }: { t: DashTask; done?: boolean }) {
  const hot = !!t.due && daysTo(t.due) <= 3
  const key = t.jira?.key ?? t.key
  const title = t.t.replace(/^\[[^\]]+\]\s*/, '')
  return (
    <a className={`fc${hot && !done ? ' hot' : ''}${done ? ' done' : ''}`} href={t.jira?.url} target="_blank" rel="noreferrer" title={t.t}>
      <span className="fc-k">{done ? '✓ ' : ''}{key}{t.notes?.blocker && !done ? ' · chờ' : ''}</span>
      <span className="fc-t">{title}</span>
      {t.due && !done && <span className="fc-d">Hạn {fmtDM(t.due)}{hot ? ` · ${dayText(daysTo(t.due))}` : ''}</span>}
    </a>
  )
}

function FlowCol({ name, tasks, done, max }: { name: string; tasks: DashTask[]; done?: boolean; max: number }) {
  const [all, setAll] = useState(false)
  const shown = all ? tasks : tasks.slice(0, max)
  return (
    <div className={`fl-col${done ? ' done' : ''}`}>
      <div className="fl-h"><b>{tasks.length}</b><span>{name}</span></div>
      <div className="fl-b">
        {shown.map((t) => <FlowCard key={t.key} t={t} done={done} />)}
        {tasks.length > max && <button className="link" onClick={() => setAll(!all)}>{all ? 'Thu gọn' : `+${tasks.length - max} nữa`}</button>}
        {!tasks.length && <span className="db-unv">Trống</span>}
      </div>
    </div>
  )
}

function FlowView({ data }: { data: DashboardData }) {
  return (
    <div className="fl">
      <FlowCol name="Idea" tasks={data.idea} max={6} />
      <FlowCol name="To do" tasks={data.todo} max={6} />
      <FlowCol name="Đang làm" tasks={data.tasks} max={8} />
      <FlowCol name="Xong gần đây" tasks={data.done} done max={5} />
    </div>
  )
}

function MapView({ data }: { data: DashboardData }) {
  const stages: [string, DashTask[], string][] = [['Đang làm', data.tasks, 'doing'], ['To do', data.todo, 'todo'], ['Idea', data.idea, 'idea']]
  const projects = useMemo(() => {
    const m: Record<string, [string, DashTask[], string][]> = {}
    stages.forEach(([, list, cls]) => list.forEach((t) => {
      const proj = t.project || 'Khác'
      const g = (m[proj] ||= stages.map(([n, , c]) => [n, [], c] as [string, DashTask[], string]))
      g.find((x) => x[2] === cls)![1].push(t)
    }))
    return Object.entries(m).sort((a, b) => b[1].reduce((n, x) => n + x[1].length, 0) - a[1].reduce((n, x) => n + x[1].length, 0))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  return (
    <div className="mp">
      <div className="mp-root">Công việc</div>
      <ul className="mp-l1">
        {projects.map(([proj, st]) => (
          <li key={proj}>
            <div className="mp-n1">{proj} <small>{st.reduce((n, x) => n + x[1].length, 0)}</small></div>
            <ul className="mp-l2">
              {st.filter((x) => x[1].length).map(([name, list, cls]) => (
                <li key={name}>
                  <div className={`mp-n2 ${cls}`}>{name} <small>{list.length}</small></div>
                  <ul className="mp-l3">
                    {list.map((t) => {
                      const hot = !!t.due && daysTo(t.due) <= 3
                      return (
                        <li key={t.key}>
                          <a className={`mp-n3 ${cls}${hot ? ' hot' : ''}`} href={t.jira?.url} target="_blank" rel="noreferrer" title={t.t}>
                            <code>{t.jira?.key ?? t.key}</code> {t.t.replace(/^\[[^\]]+\]\s*/, '')}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Calendar({ data }: { data: DashboardData }) {
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

export function Attention({ widgets }: { widgets: DashWidget[] }) {
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
          <AttnBox key={w.id} w={w} list={list} />
        ))}
      </div>
    </section>
  )
}

function AttnBox({ w, list }: { w: DashWidget; list: { t: string; due?: string }[] }) {
  const [all, setAll] = useState(false)
  const shown = all ? list : list.slice(0, 2)
  return (
          <div className="db-attn-b">
            <b className="db-attn-h">{w.title ?? w.id} {w.status && <span className={`pill ${w.tone === 'bad' ? 'bad' : 'idle'}`}>{w.status}</span>}</b>
            {!list.length && w.headline && <p className="note">{w.headline}</p>}
            {list.length > 0 && <ul>{shown.map((x, i) => <li key={i}>{x.t}{x.due && <> <DueChip due={x.due} /></>}</li>)}</ul>}
            {list.length > 2 && <button className="link" onClick={() => setAll(!all)}>{all ? 'Thu gọn' : `+${list.length - 2} mục nữa`}</button>}
          </div>
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
  const [tab, setTab] = useState<'doing' | 'todo' | 'idea'>('doing')
  const [mode, setModeS] = useState<'list' | 'flow' | 'map'>(() => { try { const v = localStorage.getItem('db-mode'); return v === 'flow' || v === 'map' ? v : 'list' } catch { return 'list' } })
  const setMode = (m: 'list' | 'flow' | 'map') => { setModeS(m); try { localStorage.setItem('db-mode', m) } catch { /* bỏ qua */ } }
  const [live, setLive] = useState<{ at?: string; error?: string }>({})
  useEffect(() => {
    let on = true
    let seed: DashboardData | null = null
    const pull = async () => {
      if (!seed) { seed = await dashboardRepo.load(); if (on) setData(seed) }
      const r = await fetchJira()
      if (!on || !seed) return
      if ('error' in r) { setLive({ error: r.error }); return }
      setData(mergeJira(seed, r.issues)); setLive({ at: r.at })
    }
    void pull()
    const id = setInterval(() => void pull(), 90000)
    return () => { on = false; clearInterval(id) }
  }, [])
  if (!data) return <p className="note">Đang tải…</p>

  const doing = data.tasks
  const doneDetail = data.done.filter((x) => x.notes || x.progressFile || x.outputs?.length)
  const queued = tab === 'idea' ? data.idea : data.todo
  const lu = new Date(data.lastUpdate.at)
  return (
    <div className="stack">
      <div className="db-top">
        <div>
          <h1>Bảng điều khiển</h1>
        </div>
        {live.at && <span className="note" title="Trạng thái task lấy trực tiếp từ Jira, làm mới mỗi 90 giây">Jira trực tiếp {pad(new Date(live.at).getHours())}:{pad(new Date(live.at).getMinutes())}</span>}
        {live.error && <span className="pill warn" title={live.error}>Jira lỗi, dùng dữ liệu file</span>}
        <span className="note" title={data.lastUpdate.text}>Cập nhật {pad(lu.getHours())}:{pad(lu.getMinutes())} {pad(lu.getDate())}/{pad(lu.getMonth() + 1)}</span>
      </div>
            <section className="db-main solo" aria-label="Việc đang làm">
        <div className="stack db-tasks">
          <div className="db-modes" role="group" aria-label="Chế độ xem">
            <button className={`seg${mode === 'list' ? ' on' : ''}`} onClick={() => setMode('list')}>Danh sách</button>
            <button className={`seg${mode === 'flow' ? ' on' : ''}`} onClick={() => setMode('flow')}>Sơ đồ</button>
            <button className={`seg${mode === 'map' ? ' on' : ''}`} onClick={() => setMode('map')}>Cây</button>
          </div>
          {mode === 'flow' ? <FlowView data={data} /> : mode === 'map' ? <MapView data={data} /> : <>
          <div className="db-tabs" role="tablist">
            <button role="tab" aria-selected={tab === 'doing'} className="tab" onClick={() => setTab('doing')}>Đang làm ({data.tasks.length})</button>
            <button role="tab" aria-selected={tab === 'todo'} className="tab" onClick={() => setTab('todo')}>To do ({data.todo.length})</button>
            <button role="tab" aria-selected={tab === 'idea'} className="tab" onClick={() => setTab('idea')}>Idea ({data.idea.length})</button>
          </div>
          {tab === 'doing' ? <TaskTable title="" tasks={doing} /> : <TaskTable title={tab === 'idea' ? 'Idea' : 'To do'} tasks={queued} />}
          {doneDetail.length > 0 && (
            <details className="more">
              <summary>Đã xong gần đây, có chi tiết ({doneDetail.length})</summary>
              <TaskTable title="Done" tasks={doneDetail} />
            </details>
          )}
          </>}
        </div>
      </section>
      <details className="more"><summary>Chi tiết các mảng ({data.widgets.length})</summary><div className="db-wg">{data.widgets.map((w) => <WidgetCard key={w.id} w={w} />)}</div></details>
      <p className="note">Nguồn: {data.source}. Đã xong gần đây: {data.done.map((d) => d.key).join(', ')}.</p>
    </div>
  )
}

/** Cột "Cần chú ý" + Lịch, dùng ở trang Hôm nay (mục 0, trước Summary). */
export function DashAside() {
  const [data, setData] = useState<DashboardData | null>(null)
  useEffect(() => { void dashboardRepo.load().then(setData) }, [])
  if (!data) return <p className="note">Đang tải…</p>
  return (
    <div className="td-aside">
      <Attention widgets={data.widgets} />
      <div className="card"><Calendar data={data} /></div>
    </div>
  )
}
