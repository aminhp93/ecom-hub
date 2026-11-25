import { useMemo, useState, type ReactNode } from 'react'
import { TODAY_DAYS } from 'virtual:working-data'
import { WorklogCards } from '../components/WorklogPanel'
import { AllWorklog } from '../components/AllWorklog'
import { TimelinePlan } from '../components/TimelinePlan'
import { DashAside } from './Dashboard'
import type { TodayDay, TodayIdea, TodayItem } from '../data/todayTypes'

/** Tab "Hôm nay" (Morning Overview, KAN-117). Dữ liệu: today/YYYY-MM-DD.json ở Drive, nạp qua virtual:working-data. */

const JIRA = 'https://phamsworkspace-42448765.atlassian.net/browse/'
const WD = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
const fmtDate = (s: string) => `${WD[new Date(`${s}T00:00:00`).getDay()]}, ${s.slice(8, 10)}/${s.slice(5, 7)}/${s.slice(0, 4)}`
const todayIso = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` }

function Key({ k, solid }: { k: string; solid?: boolean }) {
  return <a className={solid ? 'td-key solid' : 'td-key'} href={JIRA + encodeURIComponent(k)} target="_blank" rel="noreferrer" title={`Mở ${k} trên Jira`}>{k}</a>
}

function Sec({ title, count, children, className = '', phase, hint, id }: { title: string; count?: number; children: ReactNode; className?: string; phase?: 0 | 1 | 2 | 3 | 4; hint?: string; id?: string }) {
  return (
    <details id={id} className={`card td-sec ${phase !== undefined ? `td-ph td-ph${phase} ` : ''}${className}`} open>
      <summary>{phase !== undefined && <span className="td-phb" aria-hidden="true">{phase}</span>}<h2>{title}</h2>{count !== undefined && <span className="td-n">{count}</span>}</summary>
      {hint && <p className="td-hint">{hint}</p>}
      <div className="td-body">{children}</div>
    </details>
  )
}

function Row({ it, tone }: { it: TodayItem; tone?: 'ok' | 'bad' }) {
  return (
    <li className={`td-row ${tone ? 't-' + tone : ''}`} title={it.t}>
      <span className="td-mark" aria-hidden="true">{tone === 'ok' ? '✓' : tone === 'bad' ? '!' : '•'}</span>
      <span className="td-txt">{it.s ?? it.t}{it.key && <> <Key k={it.key} /></>}</span>
    </li>
  )
}

function Group({ label, items, tone }: { label: string; items: TodayItem[]; tone?: 'ok' | 'bad' }) {
  return (
    <div className="td-grp">
      <h3 className={tone ? 't-' + tone : ''}>{label} <span className="td-n">{items.length}</span></h3>
      {items.length ? <ul>{items.map((it, i) => <Row key={i} it={it} tone={tone} />)}</ul> : <p className="note">Không có.</p>}
    </div>
  )
}

/** Cấu trúc trang: 1 Summary (hôm qua) → 2 Brainstorm (ý hôm nay) → 3 Plan (làm gì hôm nay). Bấm để nhảy tới phần. */
type Tab = 0 | 1 | 2 | 3 | 4

function PhaseNav({ day, active, onPick }: { day: TodayDay; active: Tab | null; onPick: (n: Tab) => void }) {
  const phases: { n: Tab; id: string; title: string; sub: string; stats: { v: number; l: string; tone?: string }[] }[] = [
    { n: 0, id: 'td-attn', title: 'Chú ý & lịch', sub: 'Cần chú ý và lịch hạn',
      stats: [] },
    { n: 1, id: 'td-summary', title: 'Summary', sub: 'Hôm qua đã làm gì',
      stats: [{ v: day.yesterday.done.length, l: 'xong', tone: 'ok' }, { v: day.yesterday.open.length, l: 'dở' }, { v: day.yesterday.blockers.length, l: 'vướng', tone: 'bad' }] },
    { n: 2, id: 'td-brainstorm', title: 'Brainstorm', sub: 'Ý và việc muốn làm hôm nay',
      stats: day.plan.eval ? [{ v: day.ideas.length, l: 'ý của Amin' }] : [{ v: day.ideas.length, l: 'ý' }, { v: day.ideas.filter((x) => x.kind === 'no-task').length, l: 'chưa có task' }] },
    { n: 3, id: 'td-plan', title: 'Plan', sub: 'Kế hoạch theo ngày: việc sẽ làm hôm nay',
      stats: [{ v: day.plan.top.length, l: 'việc hôm nay', tone: 'now' }, { v: day.plan.intoTasks.length, l: 'vào task' }, { v: day.plan.parking.length, l: 'để sau' }] },
    { n: 4, id: 'td-timeline', title: 'Timeline', sub: 'Tổng quan các task còn lại',
      stats: [{ v: day.timeline?.tasks.length ?? 0, l: 'task còn lại' }, { v: day.timeline?.recentlyDone.length ?? 0, l: 'vừa xong', tone: 'ok' }] },
  ]
  return (
    <nav className="td-phases" role="tablist" aria-label="Các phần của trang: Chú ý, Summary, Brainstorm, Plan, Timeline">
      {phases.map((p) => (
        <button key={p.n} type="button" role="tab" aria-selected={active === p.n} aria-controls={p.id} className={`td-phase td-ph${p.n}${active === p.n ? ' on' : ''}`} onClick={() => onPick(p.n)}>
          <span className="td-phb">{p.n}</span>
          <span className="td-pht"><b>{p.title}</b><small>{p.sub}</small></span>
          <span className="td-phs">{p.stats.map((x) => <i key={x.l} className={x.tone ? 'f-' + x.tone : ''}><b>{x.v}</b> {x.l}</i>)}</span>
        </button>
      ))}
    </nav>
  )
}

function Idea({ idea }: { idea: TodayIdea }) {
  // Gọn: task id chỉ hiện MỘT lần (chip), không lặp ở topic/tiêu đề; keyword chỉ hiện khi ý chưa gắn task.
  const hasTask = idea.kind === 'has-task'
  const strip = (x: string) => x.replace(/^((KAN|GEN)-\d+(\/\S+)?[\s,:·★]*)+/, '').trim()
  const title = hasTask ? strip(idea.s ?? idea.t) : (idea.s ?? idea.t)
  const topicIsKey = hasTask && idea.keys.some((k) => idea.topic.includes(k))
  return (
    <li className={`td-idea ${idea.kind}`} title={[idea.t, idea.note].filter(Boolean).join(' — ')}>
      <div className="td-ihead">
        {!topicIsKey && <span className="td-topic">{idea.topic}</span>}
        <span className="td-chips">
          {hasTask ? idea.keys.map((k) => <Key key={k} k={k} solid />)
            : idea.kind === 'no-task' ? <span className="td-chip none">○ chưa có task</span>
            : <span className="td-chip unv" title="Chưa xác minh">?</span>}
        </span>
      </div>
      <b className="td-ititle">{title}</b>
      {idea.hl && idea.hl.length > 0 && <p className="td-hl">{idea.hl.map((h) => <mark key={h}>{h}</mark>)}</p>}
      {idea.flow && <ol className="td-flow">{idea.flow.map((f, n) => <li key={n}>{f}</li>)}</ol>}
      {!hasTask && idea.kw && <p className="td-kws">{idea.kw.map((k) => <span key={k}>#{k}</span>)}</p>}
      {!hasTask && idea.keys.length > 0 && <p className="td-rel">{idea.keys.map((k) => <Key key={k} k={k} />)}</p>}
    </li>
  )
}


/** Brainstorm = ghi chú ý của Amin (không hiện task). */
function Note({ idea }: { idea: TodayIdea }) {
  return <li className="td-note"><b>{idea.s ?? idea.topic}</b><p>{idea.t}</p></li>
}

const readTicks = (k: string): number[] => {
  try { const v = JSON.parse(localStorage.getItem(k) ?? '[]'); return Array.isArray(v) ? v : [] } catch { return [] }
}

export function Today() {
  const days = useMemo(() => [...(TODAY_DAYS as TodayDay[])].sort((a, b) => a.date.localeCompare(b.date)), [])
  // Mặc định luôn là ngày hôm nay; ngày cũ chọn bằng mũi tên hoặc danh sách. Không có file của hôm nay thì báo rõ, không tự nhảy sang ngày cũ.
  const [sel, setSel] = useState(todayIso)
  const day = days.find((d) => d.date === sel)
  const prev = [...days].reverse().find((d) => d.date < sel)
  const next = days.find((d) => d.date > sel)
  // Mặc định tất cả card đóng; bấm card đang mở thì đóng lại (Amin 24/11).
  const [tab, setTab] = useState<Tab | null>(null)
  const pickTab = (n: Tab) => setTab((cur) => (cur === n ? null : n))
  const lsKey = day ? `sh-today-done:${day.date}` : ''
  const [saved, setSaved] = useState<Record<string, number[]>>({})
  const ticks = saved[lsKey] ?? readTicks(lsKey)
  const tick = (n: number) => {
    const next = ticks.includes(n) ? ticks.filter((x) => x !== n) : [...ticks, n]
    setSaved((cur) => ({ ...cur, [lsKey]: next }))
    try { localStorage.setItem(lsKey, JSON.stringify(next)) } catch { /* không lưu được thì bỏ qua */ }
  }

  const nav = (
    <div className="td-nav" role="group" aria-label="Đổi ngày">
      <button className="btn" onClick={() => prev && setSel(prev.date)} disabled={!prev} aria-label="Ngày trước">←</button>
      <label className="td-pick"><span className="td-sr">Chọn ngày</span>
        <select value={sel} onChange={(e) => setSel(e.target.value)} aria-label="Chọn ngày">
          {!days.some((d) => d.date === sel) && <option value={sel}>{fmtDate(sel)} (chưa có dữ liệu)</option>}
          {[...days].reverse().map((d) => <option key={d.date} value={d.date}>{fmtDate(d.date)}{d.date === todayIso() ? ' · hôm nay' : ''}{d.status === 'draft' ? ' · nháp' : ''}</option>)}
        </select>
      </label>
      <button className="btn" onClick={() => next && setSel(next.date)} disabled={!next} aria-label="Ngày sau">→</button>
    </div>
  )

  if (!day) {
    return (
      <>
        <header className="top td-top"><h1>Hôm nay</h1>{nav}</header>
        <div className="card">
          <p className="note">{days.length ? `Chưa có dữ liệu cho ${fmtDate(sel)}. Chọn ngày khác ở trên (không tự dùng dữ liệu ngày cũ).` : 'Chưa có dữ liệu ngày nào. File nằm ở 0-dashboard/dashboard-data/today/YYYY-MM-DD.json (chỉ đọc được khi chạy cục bộ có WORKING_ROOT).'}</p>
        </div>
        <WorklogCards />
      </>
    )
  }

  const ideas = day.ideas
  const top = day.plan.top

  return (
    <>
      <header className="top td-top">
        <h1>Hôm nay</h1>
        {nav}
      </header>
      {day.status === 'draft' && <p className="banner"><b>Bản nháp, chưa duyệt.</b> Chỉ hiện ở máy cục bộ; chưa publish.</p>}
      <PhaseNav day={day} active={tab} onPick={pickTab} />
      <div className="td-grid">
        {tab === 0 && <Sec id="td-attn" phase={0} title="Chú ý & lịch" hint="Cần chú ý và lịch hạn từ Bảng điều khiển." className="td-attn">
          <DashAside />
        </Sec>}
        {tab === 1 && <Sec id="td-summary" phase={1} title="Summary · kết quả hôm qua" hint="Việc đã xong, còn dở và đang vướng của ngày hôm trước." className="td-yest">
          <div className="td-cols">
            <Group label="Đã xong" items={day.yesterday.done} tone="ok" />
            <Group label="Dang dở" items={day.yesterday.open} />
            <Group label="Blocker" items={day.yesterday.blockers} tone="bad" />
          </div>
          <div className="td-cols td-impact">
            <Group label="Ảnh hưởng tới Plan hôm qua (plan → kết quả)" items={day.yesterday.planImpact ?? []} />
            <Group label="Ảnh hưởng tới Timeline chung" items={day.yesterday.timelineImpact ?? []} />
          </div>
        </Sec>}

        {tab === 2 && <Sec id="td-brainstorm" phase={2} title="Brainstorm · ý hôm nay" hint={day.plan.eval ? "Ghi chú ý của Amin, nguyên văn ngắn gọn; chưa phải cam kết." : "Ý, việc muốn làm; chưa phải cam kết."} count={day.ideas.length} className="td-brain">
          {day.plan.eval
            ? <ul className="td-notes">{day.ideas.map((x, n) => <Note key={n} idea={x} />)}</ul>
            : <>
          {ideas.length ? <ul className="td-ideas">{ideas.map((x, n) => <Idea key={n} idea={x} />)}</ul> : <p className="note">Chưa có ý nào.</p>}
            </>}
        </Sec>}

        {tab === 3 && <Sec id="td-plan" phase={3} title="Plan · kế hoạch hôm nay" hint="Kế hoạch theo ngày: các việc sẽ làm / định làm, chốt từ đầu ngày. Tick khi xong." className="td-plan">
          <>
          {day.plan.rhythm && <p className="td-rhythm"><b>Nhịp ngày:</b> {day.plan.rhythm}</p>}
          <div className="td-cols">
            <div className="td-grp">
              <h3>Việc trong ngày <span className="td-n">{top.length}</span></h3>
              {!top.length && <p className="note">Chưa lập kế hoạch ngày này.</p>}
              <ol className="td-top">
                {top.map((p, n) => {
                  const on = ticks.includes(n) !== !!p.done
                  return (
                    <li key={n} className={on ? 'on' : ''}>
                      <label className="td-tick">
                        <input type="checkbox" checked={on} onChange={() => tick(n)} />
                        <span className="td-txt" title={p.t}>{p.s ?? p.t}{p.key && <> <Key k={p.key} /></>}</span>
                      </label>
                    </li>
                  )
                })}
              </ol>
            </div>
            <div className="td-grp">
              <h3>Đưa vào task đang có <span className="td-n">{day.plan.intoTasks.length}</span></h3>
              <ul>{day.plan.intoTasks.map((it, n) => <Row key={n} it={it} />)}</ul>
            </div>
            <div className="td-grp">
              <h3>Để sau (parking lot) <span className="td-n">{day.plan.parking.length}</span></h3>
              <ul>{day.plan.parking.map((it, n) => <Row key={n} it={it} />)}</ul>
            </div>
          </div>
          </>
        </Sec>}
        {tab === 4 && !day.timeline && day.overview && (
          <Sec phase={4} title="Plan chung (cũ)" hint="Dữ liệu ngày cũ, trước khi có Timeline." className="td-plan td-plan-sub">
            <div className="td-cols">
              <Group label="Today Plan" items={day.overview.todayPlan} />
              <Group label="Active Task Snapshot" items={day.overview.activeSnapshot} />
              <Group label="Catch-up" items={day.overview.catchup} />
              <Group label="Weekly Plan" items={day.overview.weekly} />
              <Group label="Recently Completed" items={day.overview.recentlyDone} tone="ok" />
            </div>
          </Sec>
        )}
        {tab === 4 && day.timeline && (
          <Sec id="td-timeline" phase={4} title="Timeline · tổng quan các task còn lại" hint="Kế hoạch tổng quan, cập nhật theo ngày: task đang chạy còn lại, việc đã xong và việc còn phải làm." count={day.timeline.tasks.length} className="td-plan td-tl">
            <TimelinePlan tl={day.timeline} />
          </Sec>
        )}
      </div>
      <WorklogCards />
      <div className="td-grid"><AllWorklog /></div>
    </>
  )
}
