import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { useFetchJson as useFetch } from '../useFetchJson'
import { SavedSummaries } from './WorklogSummary'
import { WL_RE, openerKind, rememberReturn, returnHash, wlHref } from '../worklogNav'
import { runningSection } from '../activeSection'
import { DASH_SEED } from 'virtual:working-data'
import { TaskCard } from '../pages/Dashboard'
import { WL_STATUSES, type WlCounts, type WlItem, type WlQuery, type WlStatus } from '../data/worklogTypes'

/** "Nhật ký phiên hiện tại" (KAN-117 theo worklog/1). Chỉ đọc: gọi cầu nối /worklog/* (dev) chạy parser chuẩn worklog.py; không localStorage, không ghi, không đoán giờ/credit. */

const hm = (t: string | null) => (t ? t.slice(11, 16) : null)
const mins = (a: string, b: string) => Math.max(0, Math.round((new Date(b).getTime() - new Date(a).getTime()) / 60000))
const addHour = (t: string) => { const d = new Date(new Date(t).getTime() + 3600000); const o = new Date(d.getTime() + 7 * 3600000); return o.toISOString().slice(11, 16) }
const dur = (m: number) => (m >= 60 ? `${Math.floor(m / 60)}g${String(m % 60).padStart(2, '0')}` : `${m} phút`)
const STATUS_CLS: Record<WlStatus, string> = { 'Còn lại': 'todo', 'Đang làm': 'doing', 'Chờ': 'wait', 'Đã xong': 'done' }
const total = (c: WlCounts) => WL_STATUSES.reduce((n, s) => n + c[s], 0)

const hashSub = () => window.location.hash
const subscribe = (cb: () => void) => { window.addEventListener('hashchange', cb); return () => window.removeEventListener('hashchange', cb) }
/** Task đang mở panel nhật ký theo route #/today/worklog/<KEY>, hoặc null. */
export function useWorklogRoute(): string | null {
  const h = useSyncExternalStore(subscribe, hashSub)
  const m = h.match(WL_RE)
  return m ? m[1] : null
}
/** Section ID trong route #/today/worklog/<KEY>/<SECTION_ID>, hoặc '' (route cũ chỉ có task). */
export function useWorklogSection(): string {
  const h = useSyncExternalStore(subscribe, hashSub)
  return h.match(WL_RE)?.[2] ?? ''
}

function Counters({ c }: { c: WlCounts }) {
  return (
    <div className="wl-counts">
      {WL_STATUSES.map((s) => <span key={s} className={`wl-c ${STATUS_CLS[s]}`}><b>{c[s]}</b> {s}</span>)}
    </div>
  )
}

const planMin = (k: string): number => { try { const v = JSON.parse(localStorage.getItem(`focus-timer:${k}`) ?? 'null'); if (v && typeof v.min === 'number' && v.min > 0) return v.min } catch { /* mặc định */ } return 60 }

/** Đồng hồ phiên worklog (ĐẾM NGƯỢC; hết giờ thì ĐẾM LÊN phần quá giờ, không dừng): chỉ hiện khi state = "Đang làm". Không ghi gì. */
function LiveClock({ since, k }: { since: string; k?: string }) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => { const id = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(id) }, [])
  // Giữ thời gian đã trôi khi phiên chuyển item/session con: mốc = started_at sớm nhất của cùng section đang chạy trong ngày (đọc /worklog/task, chỉ đọc).
  const [from, setFrom] = useState(since)
  useEffect(() => {
    let off = false
    if (!k) return
    fetch(`/worklog/task?task=${encodeURIComponent(k)}`).then((r) => r.json()).then((j: { items?: { date: string; section_id: string; status: string; started_at: string | null }[] }) => {
      if (off) return
      const its = j.items ?? []
      const run = its.find((i) => i.status === 'Đang làm' && i.started_at)
      if (!run) return
      const ts = its.filter((i) => i.date === run.date && i.section_id === run.section_id && i.started_at).map((i) => new Date(i.started_at!).getTime())
      const m = ts.length ? Math.min(...ts) : new Date(since).getTime() // mốc = lúc bắt đầu của section đang chạy, không phải của cả phiên (tránh tính quá giờ oan)
      setFrom(new Date(m).toISOString())
    }).catch(() => { /* giữ since */ })
    return () => { off = true }
  }, [k, since])
  // Thời lượng chọn: lấy từ focus-timer:<KEY>.min nếu có, mặc định 60 phút. Đếm ngược = thời lượng − đã trôi kể từ started_at (giữ nguyên phiên, không ghi gì).
  let min = 60
  try { const v = k ? JSON.parse(localStorage.getItem(`focus-timer:${k}`) ?? 'null') : null; if (v && typeof v.min === 'number' && v.min > 0) min = v.min } catch { /* mặc định 60 */ }
  const el = Math.max(0, Math.floor((now - new Date(from).getTime()) / 1000))
  const left = min * 60 - el
  const over = left < 0
  const s = Math.abs(left)
  const p = (n: number) => String(n).padStart(2, '0')
  const clock = `${s >= 3600 ? `${p(Math.floor(s / 3600))}:` : ''}${p(Math.floor((s % 3600) / 60))}:${p(s % 60)}`
  return <span className={`wl-live${over ? ' over' : ''}`} title={`${over ? `QUÁ GIỜ ${Math.floor(s / 60)} phút so với ${min} phút, vẫn đang tính` : `Đếm ngược từ ${min} phút`} · bắt đầu ${hm(since)} · đã trôi ${Math.floor(el / 60)} phút (chưa trừ lúc tạm dừng)`}><i aria-hidden="true" />{over ? `+${clock} quá` : `${clock.length === 5 ? '00:' : ''}${clock}`}</span>
}

/** Ô nổi mọi trang: mỗi task có phiên worklog "Đang làm" hiện một đồng hồ chạy; bấm mở nhật ký. Tự cập nhật từ /worklog/active mỗi 10 giây. Chỉ đọc. */
export function SessionDock() {
  const [list, setList] = useState<{ key: string; name: string; since: string; sec: string; state: string }[]>([])
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  const loadRef = useRef<() => void>(() => {})
  useEffect(() => {
    let off = false
    const load = () => fetch('/worklog/active').then((r) => r.json()).then((j: { tasks?: { key: string; ok: boolean; query?: WlQuery }[] }) => {
      if (off) return
      setList((j.tasks ?? []).flatMap((x) => x.ok && x.query?.session && ['Đang làm', 'Chờ'].includes(x.query.session.state) ? [{ key: x.key, name: x.query.session.name, since: x.query.session.started_at ?? '', sec: runningSection(x.query), state: x.query.session.state }] : []))
    }).catch(() => { /* không có cầu nối worklog: không hiện */ })
    loadRef.current = load
    load(); const id = window.setInterval(load, 10000)
    return () => { off = true; window.clearInterval(id) }
  }, [])
  const call = async (task: string, action: 'start' | 'end') => {
    setBusy(true); setMsg('')
    try {
      const r = await fetch('/worklog/session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ task, action, plan_min: planMin(task) }) })
      const j = await r.json() as { error?: string; stopped?: string[] }
      if (!r.ok) setMsg(j.error ?? 'Lỗi'); else if (action === 'start' && j.stopped?.length) setMsg(`Đã tạm dừng ${j.stopped.length} phiên khác (chỉ chạy 1 phiên một lúc).`)
    } catch (e) { setMsg(String(e)) }
    setBusy(false); loadRef.current()
  }
  if (!list.length) return null
  const runningN = list.filter((s) => s.state === 'Đang làm').length
  return (
    <div className="sd-wrap" aria-label="Phiên đang chạy">
      {runningN > 1 && <p className="note sd-warn">Đang có {runningN} phiên chạy cùng lúc. Bấm Bắt đầu ở một phiên để chỉ giữ 1 phiên.</p>}
      {msg && <p className="note sd-warn">{msg}</p>}
      {list.map((s) => (
        <span key={s.key} className={`sd-row${s.state === 'Đang làm' ? '' : ' idle'}`}>
          <a className="sd" href={wlHref(s.key, s.sec)} onClick={() => rememberReturn('ft')} title={`${s.name}: mở nhật ký ${s.key}${s.sec ? `/${s.sec}` : ''}`}>
            <b>{s.key}{s.sec ? `/${s.sec}` : ''}</b>{s.state === 'Đang làm' && s.since ? <LiveClock since={s.since} k={s.key} /> : <span className="note">Đã dừng</span>}
          </a>
          {s.state === 'Đang làm'
            ? <button className="sd-btn end" disabled={busy} onClick={() => call(s.key, 'end')}>Kết thúc</button>
            : <button className="sd-btn go" disabled={busy} onClick={() => call(s.key, 'start')}>Bắt đầu</button>}
        </span>
      ))}
    </div>
  )
}

/** Nhật ký phiên hiện tại (Amin 24/11): mỗi task một thẻ; trong thẻ liệt kê TỪNG sub-session (section) có việc hôm nay, mỗi cái Xong/Chưa xong riêng.
 *  Trạng thái task = Jira (không Done = Chưa xong), không suy từ sub-session. Theo NGÀY đang xem trên trang Hôm nay (Amin 26/11): chỉ task/sub-session có việc trong ngày đó. */
type AllItem = { key: string; item_id: string; date: string; section_id: string; section_name: string; status: WlStatus; action: string; actor: string }
export function WorklogCards({ date }: { date: string }) {
  const all = useFetch<{ items: AllItem[] }>('/worklog/all')
  const today = date
  const items = all.data?.items ?? []
  const doneKeys = new Set((DASH_SEED.done ?? []).map((t: { key: string }) => t.key))
  const title = new Map([...(DASH_SEED.tasks ?? []), ...(DASH_SEED.done ?? [])].map((t) => [t.key, t.t] as const))
  const keys = Array.from(new Set(items.filter((i) => i.date === today).map((i) => i.key)))
  const cards = keys.map((key) => {
    const mine = items.filter((i) => i.key === key)
    const bySec = new Map<string, AllItem[]>()
    for (const i of mine.filter((x) => x.date === today)) bySec.set(i.section_id, [...(bySec.get(i.section_id) ?? []), i])
    const secs = Array.from(bySec.entries()).map(([sid, its]) => {
      const fin = its.every((i) => i.status === 'Đã xong')
      const open = its.find((i) => i.status !== 'Đã xong')
      return { sid, name: its[0].section_name, fin, detail: fin ? `${its.length}/${its.length} xong` : `${its.filter((i) => i.status === 'Đã xong').length}/${its.length} xong · ${open?.status ?? ''}` }
    })
    const last = mine.sort((a, b) => a.item_id.localeCompare(b.item_id)).pop()
    return { key, title: title.get(key) ?? key, fin: doneKeys.has(key), secs, last }
  }).sort((a, b) => Number(a.fin) - Number(b.fin) || a.key.localeCompare(b.key, 'en', { numeric: true }))
  return (
    <section className="card td-wl" aria-labelledby="wl-h">
      <h2 id="wl-h">Nhật ký phiên · {today.slice(8, 10)}/{today.slice(5, 7)}</h2>
      {all.loading ? <p className="note">Đang đọc worklog…</p>
        : all.error ? <p className="err" role="alert">Không đọc được worklog: {all.error}. (Chỉ chạy được khi dev cục bộ có WORKING_ROOT.)</p>
        : !cards.length ? <p className="note">Ngày này chưa có worklog.</p>
        : (
          <div className="wl-cards">
            {cards.map((c) => (
              <div key={c.key} className="wl-card" data-wl={c.key}>
                <span className="wl-ctop"><a className="td-key solid" href={wlHref(c.key, '')} onClick={() => rememberReturn('card')}>{c.key}</a><span className={`wl-state ${c.fin ? 'done' : 'wait'}`}>{c.fin ? 'Task: Xong' : 'Task: Chưa xong'}</span></span>
                <span className="wl-cname">{c.title}</span>
                {c.secs.length ? (
                  <ul className="wl-subs">
                    {c.secs.map((s) => (
                      <li key={s.sid}>
                        <a href={wlHref(c.key, s.sid)} onClick={() => rememberReturn('card')} title={s.name}><b>{c.key}/{s.sid}</b> {s.name}</a>
                        <span className={`wl-state ${s.fin ? 'done' : 'wait'}`}>{s.fin ? 'Xong' : 'Chưa xong'}</span>
                        <span className="note">{s.detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
    </section>
  )
}

function Field({ k, children, empty }: { k: string; children?: React.ReactNode; empty?: string }) {
  return <div className="wl-f"><dt>{k}</dt><dd>{children ?? <span className="note">{empty ?? 'chưa có dữ liệu'}</span>}</dd></div>
}

function Evidence({ list }: { list: string[] }) {
  if (!list.length) return <span className="note">chưa có bằng chứng</span>
  return <ul className="wl-ev">{list.map((e, i) => <li key={i}>{/^https:\/\//.test(e) ? <a href={e} target="_blank" rel="noreferrer">{e}</a> : <code>{e}</code>}</li>)}</ul>
}

function spanText(it: WlItem): string {
  const { from, to, kind } = it.span
  if (kind === 'unknown' && !from && !to) return it.time_precision === 'date' ? 'chưa có giờ (nhập theo ngày)' : 'chưa có giờ'
  const verb = { ended: 'kết thúc', paused: 'tạm dừng', ongoing: 'cập nhật cuối', unknown: '' }[kind]
  return `${hm(from) ?? 'chưa có giờ bắt đầu'} → ${hm(to) ?? 'chưa có giờ'}${verb ? ` (${verb})` : ''}`
}

function ItemCard({ it }: { it: WlItem }) {
  const [open, setOpen] = useState(false)
  const credit = it.credit_value !== null && it.credit_unit && it.credit_source
  return (
    <li className={`wl-item ${STATUS_CLS[it.status]}${open ? ' open' : ''}`}>
      <button className="wl-ib" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="wl-act">{it.action}</span>
        <span className="wl-meta"><span className="wl-actor">{it.actor}</span><span>{it.span.kind === 'unknown' ? 'chưa có giờ' : spanText(it).replace(/ \(.*\)/, '')}</span></span>
        <span className="wl-flags" aria-hidden="true">
          {it.evidence.length > 0 && <span title="Có bằng chứng">▤ {it.evidence.length}</span>}
          {it.verify && <span title="Đã ghi verify">✓ verify</span>}
          {it.next_or_blocker && <span className={it.status === 'Chờ' ? 'bad' : ''} title="Có bước tiếp/blocker">→ tiếp</span>}
        </span>
      </button>
      {open && (
        <dl className="wl-detail">
          <Field k="Thời điểm">{spanText(it)}</Field>
          <Field k="Ai làm">{it.actor}</Field>
          <Field k="Hành động">{it.action}</Field>
          <Field k="Kết quả / bằng chứng"><Evidence list={it.evidence} /></Field>
          <Field k="Verify" empty="chưa kiểm">{it.verify}</Field>
          <Field k={it.status === 'Chờ' ? 'Blocker / chờ' : 'Bước tiếp / blocker'} empty="chưa có">{it.next_or_blocker && <span className={it.status === 'Chờ' ? 'bad' : ''}>{it.next_or_blocker}</span>}</Field>
          <Field k="Credit" empty="Chưa có dữ liệu credit">{credit ? `${it.credit_value} ${it.credit_unit} (nguồn: ${it.credit_source})` : undefined}</Field>
          {it.source && <Field k="Nguồn nhập">{it.source}</Field>}
          <Field k="Mã"><code>{it.item_id}</code> · rev {it.rev}</Field>
        </dl>
      )}
    </li>
  )
}

function Header({ q, section }: { q: WlQuery; section?: string }) {
  const s = q.session!
  const paused = q.items.filter((i) => i.span.kind === 'paused' && i.span.to).map((i) => i.span.to!).sort().pop() ?? null
  const endAt = s.ended_at ?? (s.state === 'Chờ' ? paused : null) ?? s.last_update_at
  const m = s.started_at && endAt ? mins(s.started_at, endAt) : null
  const credits = q.items.filter((i) => i.credit_value !== null && i.credit_unit && i.credit_source)
  const sums = new Map<string, number>()
  credits.forEach((i) => sums.set(i.credit_unit!, (sums.get(i.credit_unit!) ?? 0) + i.credit_value!))
  return (
    <div className="wl-head">
      <div className="wl-title">
        <b className="td-key solid">{q.task_key}{section ? `/${section}` : ''}</b>
        <span className="wl-sess">{s.name === 'unknown' ? `${q.task_key}${section ? `/${section}` : ''} (sub-session)` : s.name}</span>
        <span className={`wl-state ${STATUS_CLS[s.state]}`}>{s.state}</span>
        <span className="note">{q.date} · {q.tz}</span>
      </div>
      <dl className="wl-times">
        <Field k="Người làm">{s.actors.join(', ')}</Field>
        <Field k="Bắt đầu" empty="chưa có giờ">{hm(s.started_at)}</Field>
        <Field k="Tạm dừng" empty="—">{s.state === 'Chờ' ? hm(paused) : null}</Field>
        <Field k="Kết thúc" empty="—">{hm(s.ended_at)}</Field>
        <Field k="Thời lượng" empty="chưa có giờ">{m !== null ? dur(m) : null}</Field>
        <Field k="Credit" empty="Chưa có dữ liệu credit">{sums.size ? [...sums].map(([u, v]) => `${v} ${u}`).join(' + ') + ` (${credits.length}/${q.items.length} item có nguồn)` : undefined}</Field>
      </dl>
      <div className="wl-goal">
        <span>Mục tiêu phiên 60 phút</span>
        {s.started_at && m !== null ? (
          <>
            <span className="wl-bar" role="progressbar" aria-valuemin={0} aria-valuemax={60} aria-valuenow={Math.min(m, 60)} aria-label="Thời gian so với mục tiêu 60 phút"><i style={{ width: `${Math.min(100, (m / 60) * 100)}%` }} /></span>
            <span className="note">{dur(m)} / 60 phút · mốc 1 giờ lúc {addHour(s.started_at)}</span>
          </>
        ) : <span className="note">chưa có giờ (không đoán)</span>}
      </div>
      <Counters c={s.counts} />
    </div>
  )
}

/** Panel mở bằng route #/today/worklog/<KEY>. */
export function WorklogPanel({ task, section0 = '' }: { task: string; section0?: string }) {
  const [section, setSection] = useState(section0)
  useEffect(() => { setSection(section0) }, [section0])
  const base = useFetch<WlQuery>(`/worklog/query?task=${task}`)
  const filt = useFetch<WlQuery>(section ? `/worklog/query?task=${task}&section=${encodeURIComponent(section)}` : null)
  const close = () => { window.location.hash = returnHash() }
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const prevEl = document.activeElement as HTMLElement | null
    ref.current?.querySelector<HTMLElement>('button.wl-x')?.focus({ preventScroll: true })
    return () => { (document.querySelector<HTMLElement>(`[data-${openerKind()}="${task}"]`) ?? document.querySelector<HTMLElement>(`[data-ft="${task}"], [data-wl="${task}"]`) ?? prevEl)?.focus?.() }
  }, [task])
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.preventDefault(); close() }
    if (e.key === 'Tab' && ref.current) {
      const f = [...ref.current.querySelectorAll<HTMLElement>('button, a[href]')].filter((x) => !x.hasAttribute('disabled'))
      if (!f.length) return
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }
  const q = base.data
  const shown = section ? filt.data : q
  return (
    <div className="modal wl-modal" onMouseDown={(e) => { if (e.target === e.currentTarget) close() }}>
      <div className="wl-panel" role="dialog" aria-modal="true" aria-labelledby="wl-t" ref={ref} onKeyDown={onKey}>
        <div className="wl-bar-top"><h2 id="wl-t">Nhật ký phiên hiện tại</h2><button className="btn wl-x" onClick={close} aria-label="Đóng nhật ký">Đóng ✕</button></div>
        {base.loading ? <p className="note">Đang đọc worklog…</p>
          : base.error ? <p className="err" role="alert">Không đọc được worklog {task}: {base.error}</p>
          : !q?.session ? <p className="note">Chưa có việc hôm nay ({q?.date}). Không hiển thị ngày hoặc phiên cũ.</p>
          : (
            <>
              <Header q={q} section={section} />
              {(() => { const dt = [...DASH_SEED.tasks, ...(DASH_SEED.todo ?? []), ...(DASH_SEED.idea ?? [])].find((x) => x.key === task); return dt ? <details className="wl-taskinfo" open><summary><b>Input · Output · Progress</b> (cùng dữ liệu với Bảng điều khiển)</summary><TaskCard t={dt} bare noWorklog /></details> : null })()}
              <div className="td-filters" role="group" aria-label="Lọc section">
                <button className={`td-f${!section ? ' on' : ''}`} aria-pressed={!section} onClick={() => setSection('')}>Tất cả <span>{q.items.length}</span></button>
                {q.sections.map((s) => (
                  <button key={s.id} className={`td-f${section === s.id ? ' on' : ''}`} aria-pressed={section === s.id} onClick={() => setSection(s.id)} title={s.name}>{s.id} <span>{total(s.counts)}</span></button>
                ))}
              </div>
              {section && filt.loading ? <p className="note">Đang lọc…</p>
                : section && filt.error ? <p className="err" role="alert">{filt.error}</p>
                : shown && (
                  <>
                    <p className="note" aria-live="polite">{shown.items.length} item{section ? ` · section ${section}: ${q.sections.find((s) => s.id === section)?.name ?? ''}` : ''}</p>
                    <div className="wl-board">
                      {WL_STATUSES.map((st) => {
                        const its = shown.items.filter((i) => i.status === st)
                        return (
                          <details key={st} className={`wl-col ${STATUS_CLS[st]}`} open={its.length > 0}>
                            <summary><b>{st}</b> <span className="td-n">{its.length}</span></summary>
                            {its.length ? <ul>{its.map((it) => <ItemCard key={it.item_id} it={it} />)}</ul> : <p className="note">Không có.</p>}
                          </details>
                        )
                      })}
                    </div>
                  </>
                )}
              <SavedSummaries task={task} />
            </>
          )}
      </div>
    </div>
  )
}

type TaskWl = { item_id: string; rev: number; date: string; session_name: string; section_id: string; section_name: string; actor: string; action: string; status: WlStatus; started_at: string | null; updated_at: string | null; evidence: string[]; verify: string | null; next_or_blocker: string | null }

/** Worklog của một task, hiện trong chi tiết task (mọi ngày, mới nhất trước). Chỉ đọc từ /worklog/task. */
export function TaskWorklog({ task }: { task: string }) {
  const { loading, data, error } = useFetch<{ items: TaskWl[] }>(`/worklog/task?task=${task}`)
  if (loading) return <p className="note">Đang đọc worklog…</p>
  if (error) return <p className="note">Không đọc được worklog (chỉ có khi chạy dev cục bộ).</p>
  const items = data?.items ?? []
  if (!items.length) return <p className="note">Task này chưa có worklog.</p>
  const days = [...new Set(items.map((i) => i.date))]
  return (
    <div className="tw-log">
      {days.map((d) => (
        <div key={d} className="tw-day">
          <h4>{d}</h4>
          <ul>
            {items.filter((i) => i.date === d).map((it) => (
              <li key={it.item_id} className={`wl-item ${STATUS_CLS[it.status]}`}>
                <details>
                  <summary><span className={`wl-state ${STATUS_CLS[it.status]}`}>{it.status}</span> <span className="wl-act">{it.action}</span> <span className="note">{it.actor} · {hm(it.started_at) ?? '—'}{it.updated_at && it.status === 'Đã xong' ? `→${hm(it.updated_at)}` : ''}</span></summary>
                  <dl className="wl-detail">
                    <Field k="Section">{it.section_id}. {it.section_name}</Field>
                    <Field k="Phiên">{it.session_name}</Field>
                    <Field k="Bằng chứng"><Evidence list={it.evidence} /></Field>
                    <Field k="Verify" empty="chưa kiểm">{it.verify}</Field>
                    <Field k="Bước tiếp / blocker" empty="chưa có">{it.next_or_blocker}</Field>
                  </dl>
                </details>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
