import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { Modal } from './components/Modal'
import { SEC_RE, wlHref } from './worklogNav'
import { useActiveSections } from './activeSection'
import { EndSummaryModal } from './components/WorklogSummary'

/**
 * Bộ đếm giờ tập trung theo task. Trạng thái lưu trong localStorage (khóa focus-timer:<KEY>), nên:
 * - tải lại trang vẫn chạy tiếp theo giờ thật;
 * - thẻ task và ô nổi ở góc màn hình (FocusDock) luôn dùng chung một nguồn;
 * - ô nổi nằm ở App nên không mất khi đổi trang, chỉ tắt khi bấm ✕.
 */
/** sec = section_id của worklog (vd P1): cùng một id với dòng worklog và nested section trong Claude. Timer cũ không có sec vẫn hợp lệ. */
export type FocusState = { min: number; endAt?: number; left?: number; startedAt?: number; sec?: string; overMs?: number }
export const FOCUS_OPTS = [15, 25, 45, 60, 90]
const PREFIX = 'focus-timer:'
const EVT = 'focus-timer-change'
const pad = (n: number) => String(n).padStart(2, '0')
export const fmtOver = (ms: number) => { const s = Math.max(0, Math.floor(ms / 1000)); const h = Math.floor(s / 3600); return `+${h ? `${h}:` : ''}${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}` }
export const fmtClock = (ms: number) => { const s = Math.max(0, Math.ceil(ms / 1000)); const h = Math.floor(s / 3600); return `${h ? `${h}:` : ''}${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}` }

const raw = (k: string): string => { try { return localStorage.getItem(PREFIX + k) ?? '' } catch { return '' } }
const parse = (s: string): FocusState | null => { try { const v = JSON.parse(s || 'null'); return v && typeof v.min === 'number' ? (typeof v.sec === 'string' && !SEC_RE.test(v.sec) ? { ...v, sec: undefined } : v) : null } catch { return null } }
export const loadFocus = (k: string): FocusState => parse(raw(k)) ?? { min: 60 }
export const saveFocus = (k: string, s: FocusState) => { try { localStorage.setItem(PREFIX + k, JSON.stringify(s)) } catch { /* bỏ qua */ } window.dispatchEvent(new Event(EVT)) }
export const clearFocus = (k: string) => { try { localStorage.removeItem(PREFIX + k) } catch { /* bỏ qua */ } window.dispatchEvent(new Event(EVT)) }
/** Chỉ coi là "đang tồn tại" khi đã bấm Bắt đầu (chạy hoặc tạm dừng). */
const isLive = (s: FocusState | null): s is FocusState => !!s && (s.endAt !== undefined || s.left !== undefined)

const subscribe = (cb: () => void) => {
  window.addEventListener(EVT, cb); window.addEventListener('storage', cb)
  return () => { window.removeEventListener(EVT, cb); window.removeEventListener('storage', cb) }
}
const useRaw = (k: string) => useSyncExternalStore(subscribe, () => raw(k))
const liveKeys = (): string => { try { return Object.keys(localStorage).filter((x) => x.startsWith(PREFIX) && isLive(parse(localStorage.getItem(x) ?? ''))).map((x) => x.slice(PREFIX.length)).sort().join(',') } catch { return '' } }
const useLiveKeys = () => { const s = useSyncExternalStore(subscribe, liveKeys); return useMemo(() => (s ? s.split(',') : []), [s]) }

function useTick(on: boolean) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    if (!on) return
    setNow(Date.now())
    const id = window.setInterval(() => setNow(Date.now()), 500)
    return () => window.clearInterval(id)
  }, [on])
  return now
}

const POPUP = 'focus-popup'
type PopupDetail = { k: string; mode: 'start' | 'end' }
const openPopup = (k: string, mode: 'start' | 'end') => window.dispatchEvent(new CustomEvent<PopupDetail>(POPUP, { detail: { k, mode } }))
const act = (k: string, st: FocusState) => ({
  start: () => {
    const first = st.startedAt === undefined
    saveFocus(k, { min: st.min, sec: st.sec, startedAt: st.startedAt ?? Date.now(), endAt: Date.now() + (st.left ?? st.min * 60000), overMs: st.overMs })
    if (first) openPopup(k, 'start')
  },
  // Hết giờ vẫn chạy tiếp: phần quá giờ cộng dồn vào overMs (giữ qua tạm dừng/tiếp tục) để đánh giá sau.
  pause: () => { const d = (st.endAt ?? Date.now()) - Date.now(); saveFocus(k, { min: st.min, sec: st.sec, startedAt: st.startedAt, left: Math.max(0, d), overMs: (st.overMs ?? 0) + Math.max(0, -d) }) },
  reset: () => saveFocus(k, { min: st.min, sec: st.sec }),
  pick: (m: number) => saveFocus(k, { min: m, sec: st.sec }),
  setSec: (s: string) => saveFocus(k, { min: st.min, sec: s || undefined }),
})

// ---- Nhật ký các phiên đã kết thúc (localStorage) + ảnh chụp lúc bắt đầu để so sánh khi kết thúc ----
export type FocusLog = { start: number; end: number; files: number; comments: number; note: string }
const logKey = (k: string) => `focus-log:${k}`
const snapKey = (k: string) => `focus-snap:${k}`
export const loadLog = (k: string): FocusLog[] => { try { const v = JSON.parse(localStorage.getItem(logKey(k)) ?? '[]'); return Array.isArray(v) ? v : [] } catch { return [] } }
const pushLog = (k: string, l: FocusLog) => { try { localStorage.setItem(logKey(k), JSON.stringify([...loadLog(k), l].slice(-50))) } catch { /* bỏ qua */ } }
type Snap = { status: string; ok: number; total: number }
const loadSnap = (k: string): Snap | null => { try { return JSON.parse(localStorage.getItem(snapKey(k)) ?? 'null') } catch { return null } }
const saveSnap = (k: string, v: Snap) => { try { localStorage.setItem(snapKey(k), JSON.stringify(v)) } catch { /* bỏ qua */ } }

type Act = {
  jira: { status?: string; summary?: string; sections?: Record<string, { text: string[] }> | null; comments: { id: string; created: string; author: string; text: string }[]; error?: string }
  files: { path: string; mtime: number; size: number }[]
  banGiao: string
}
const verifyCount = (a: Act): Snap => {
  const v = a.jira.sections?.verify?.text ?? []
  return { status: a.jira.status ?? '', ok: v.filter((x) => /^\s*(✅|✓|☑)/.test(x)).length, total: v.length }
}
const firstLine = (t: string) => (t.split('\n').map((x) => x.trim()).filter((x) => x && !/^##\s/.test(x))[0] ?? '').slice(0, 170)
/** Ý chính của một comment Jira: dòng đầu của mục Done/Progress (nếu có), không thì dòng nội dung đầu tiên. */
const gist = (t: string) => {
  const m = /^##\s+(?:Done|Đã xong|Progress)[^\n]*\n+([\s\S]*?)(?=\n##\s|$)/im.exec(t)
  return (m ? firstLine(m[1].replace(/^[\s*•-]+/, '')) : '') || firstLine(t)
}
const rel = (ms: number) => { const m = Math.round((Date.now() - ms) / 60000); return m < 1 ? 'vừa xong' : m < 60 ? `${m} phút trước` : m < 1440 ? `${Math.round(m / 60)} giờ trước` : `${Math.round(m / 1440)} ngày trước` }
const hm = (ms: number) => new Date(ms).toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
const dur = (a: number, b: number) => { const m = Math.max(1, Math.round((b - a) / 60000)); return m >= 60 ? `${Math.floor(m / 60)} giờ ${m % 60} phút` : `${m} phút` }

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="fp-s"><h3>{title}</h3>{children}</section>
}
function Lines({ xs, empty }: { xs?: string[]; empty: string }) {
  return xs?.length ? <ul>{xs.map((x, i) => <li key={i}>{x}</li>)}</ul> : <p className="fp-e">{empty}</p>
}

function FocusPopup({ k, mode, onClose }: { k: string; mode: 'start' | 'end'; onClose: () => void }) {
  const [a, setA] = useState<Act | null>(null)
  const [err, setErr] = useState('')
  const [note, setNote] = useState('')
  const st = parse(useRaw(k))
  const startedAt = st?.startedAt ?? Date.now()
  const [endedAt] = useState(() => Date.now())
  useEffect(() => {
    let off = false
    fetch(`/task/activity?key=${encodeURIComponent(k)}`).then((r) => r.json()).then((j: Act & { error?: string }) => {
      if (off) return
      if (j.error) setErr(j.error); else { setA(j); if (mode === 'start') saveSnap(k, verifyCount(j)) }
    }).catch((e) => !off && setErr(String(e)))
    return () => { off = true }
  }, [k, mode])
  const log = loadLog(k)
  const sc = a?.jira.sections
  const vc = a ? verifyCount(a) : null
  const lastLines = (x?: { text: string[] }, n = 4) => x?.text.slice(-n).map((l) => l.slice(0, 200))
  const since = mode === 'end' ? startedAt : 0
  const newFiles = a ? a.files.filter((f) => f.mtime >= since) : []
  const newComments = a ? a.jira.comments.filter((c) => new Date(c.created).getTime() >= since) : []
  const snap = mode === 'end' ? loadSnap(k) : null
  const finish = () => { pushLog(k, { start: startedAt, end: endedAt, files: newFiles.length, comments: newComments.length, note: note.trim() }); clearFocus(k); try { localStorage.removeItem(snapKey(k)) } catch { /* bỏ qua */ } onClose() }
  return (
    <Modal title={mode === 'start' ? `Bắt đầu phiên · ${k}` : `Tổng kết phiên · ${k}`} onClose={onClose} wide>
      <div className="fp">
        {a?.jira.summary && <p className="fp-t">{a.jira.summary}</p>}
        <p className="fp-note">Tổng hợp tự động từ Jira (comment của các agent) và file trong Task Hub trên Drive, không phải bản Claude viết tay. Việc agent làm mà chưa ghi lên Jira/Task Hub sẽ không hiện ở đây.</p>
        {err && <p className="fp-err">Không lấy được dữ liệu: {err}</p>}
        {!a && !err && <p className="fp-e">Đang tổng hợp…</p>}
        {a && mode === 'start' && <>
          <Sec title="Tình hình hiện tại">
            <p><b>{a.jira.status || '—'}</b>{vc && vc.total > 0 ? ` · Verify ${vc.ok}/${vc.total} đạt` : ''}{a.jira.error ? ` · (Jira: ${a.jira.error})` : ''}</p>
            {sc?.objective && <p>{sc.objective.text.join(' ').slice(0, 300)}</p>}
          </Sec>
          <Sec title="Đã làm (gần nhất)"><Lines xs={lastLines(sc?.done) ?? lastLines(sc?.progress)} empty="Chưa có mục Done/Progress trên Jira." /></Sec>
          {sc?.blocker && <Sec title="Đang chờ"><Lines xs={lastLines(sc.blocker, 5)} empty="" /></Sec>}
          <Sec title="Việc tiếp theo"><Lines xs={lastLines(sc?.next, 5)} empty="Chưa có mục Next trên Jira." /></Sec>
          <Sec title="Hoạt động gần đây">
            <Lines xs={a.jira.comments.slice(-3).reverse().map((c) => `${hm(new Date(c.created).getTime())} · ${c.author} · ${gist(c.text)}`)} empty="Chưa có comment nào." />
            <Lines xs={a.files.slice(0, 5).map((f) => `${f.path} (${rel(f.mtime)})`)} empty="Task Hub chưa có file." />
          </Sec>
          <Sec title="Các phiên trước">
            {log.length ? <><p>{log.length} phiên · lần gần nhất {hm(log[log.length - 1].start)} ({dur(log[log.length - 1].start, log[log.length - 1].end)}){log[log.length - 1].note ? `: ${log[log.length - 1].note}` : ''}</p></> : <p className="fp-e">Chưa có phiên nào được lưu trên máy này.</p>}
            {a.banGiao && <details><summary>Bàn giao gần nhất (Task Hub)</summary><pre>{a.banGiao}</pre></details>}
          </Sec>
        </>}
        {a && mode === 'end' && <>
          <Sec title="Phiên này">
            <p>{dur(startedAt, endedAt)} (từ {hm(startedAt)}) · {newFiles.length} file đổi · {newComments.length} comment Jira mới</p>
            {snap && vc && <p>Trạng thái: {snap.status || '—'} → <b>{vc.status || '—'}</b> · Verify {snap.ok}/{snap.total} → <b>{vc.ok}/{vc.total}</b></p>}
          </Sec>
          <Sec title="File đã cập nhật trong Drive (Task Hub)"><Lines xs={newFiles.slice(0, 20).map((f) => `${f.path} (${hm(f.mtime)})`)} empty="Không có file nào đổi trong phiên." /></Sec>
          <Sec title="Việc các agent đã ghi lên Jira"><Lines xs={newComments.map((c) => `${hm(new Date(c.created).getTime())} · ${c.author} · ${gist(c.text)}`)} empty="Không có comment mới trong phiên." /></Sec>
          <Sec title="Tình hình sau phiên">
            <Lines xs={lastLines(sc?.progress, 3)} empty="Chưa có mục Progress." />
            {sc?.blocker && <Lines xs={lastLines(sc.blocker, 3)} empty="" />}
            <Lines xs={lastLines(sc?.next, 3)} empty="Chưa có mục Next." />
          </Sec>
          <Sec title="Ghi chú của bạn cho phiên sau"><textarea className="fp-ta" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Kết quả chính / việc dở / quyết định…" rows={3} /></Sec>
        </>}
        <div className="fp-act">
          {mode === 'start' ? <button className="ft-b go" onClick={onClose}>Bắt đầu làm</button> : <><button className="ft-b" onClick={onClose}>Quay lại</button><button className="ft-b go" onClick={finish}>Lưu phiên và đóng đồng hồ</button></>}
        </div>
      </div>
    </Modal>
  )
}

type SecOpt = { id: string; name: string }
/** Section của task hôm nay lấy từ worklog (cùng id với worklog.section_id); lỗi/không có thì rỗng. */
function useSections(k: string): SecOpt[] {
  const [xs, setXs] = useState<SecOpt[]>([])
  useEffect(() => {
    let off = false
    fetch(`/worklog/query?task=${encodeURIComponent(k)}`).then((r) => (r.ok ? r.json() : null)).then((j: { sections?: SecOpt[] } | null) => { if (!off && j?.sections) setXs(j.sections.map((s) => ({ id: s.id, name: s.name }))) }).catch(() => {})
    return () => { off = true }
  }, [k])
  return xs
}

/** Điều khiển trên thẻ task. */
export function FocusTimer({ k }: { k: string }) {
  const st = parse(useRaw(k)) ?? { min: 60 }
  const running = st.endAt !== undefined
  const now = useTick(running)
  const left = running ? st.endAt! - now : (st.left ?? st.min * 60000)
  const over = running && left <= 0
  const idle = !running && st.left === undefined
  const secs = useSections(k)
  const active = useActiveSections()[k] ?? ''
  const sec = st.sec ?? active
  const a = act(k, { ...st, sec: sec || undefined })
  return (
    <span className={`ft${running ? ' on' : ''}${over ? ' over' : ''}`}>
      {sec && <a className="ft-ref" href={wlHref(k, sec)} title={`Mở nhật ký ${k}/${sec}`}>{k}/{sec}</a>}
      {(secs.length > 0 || sec) && (
        <select className="ft-sec" aria-label={`Section của timer ${k}`} value={sec} disabled={!idle} onChange={(e) => a.setSec(e.target.value)} title="Section ID dùng chung với worklog và nested section Claude">
          <option value="">Chọn section…</option>
          {sec && !secs.some((s) => s.id === sec) && <option value={sec}>{sec}</option>}
          {secs.map((s) => <option key={s.id} value={s.id}>{s.id} · {s.name}</option>)}
        </select>
      )}
      <span className="ft-c" title={over ? 'Quá giờ vẫn đang tính, lưu lại để đánh giá' : 'Đếm giờ tập trung'}>{over ? `${fmtOver((st.overMs ?? 0) - left)} quá` : (st.overMs ? `${fmtClock(left)} (quá ${fmtOver(st.overMs)})` : fmtClock(left))}</span>
      {idle && FOCUS_OPTS.map((m) => <button key={m} className={`ft-o${m === st.min ? ' sel' : ''}`} onClick={() => a.pick(m)}>{m}′</button>)}
      {running ? <button className="ft-b" onClick={a.pause}>{over ? 'Xong' : 'Tạm dừng'}</button> : <button className="ft-b go" onClick={a.start}>{idle ? 'Bắt đầu' : 'Tiếp tục'}</button>}
      {!idle && <button className="ft-b" onClick={a.reset}>Đặt lại</button>}
    </span>
  )
}

/** Ô nổi ở góc màn hình: hiện mọi đồng hồ đã bắt đầu, tồn tại qua mọi trang cho tới khi bấm ✕. */
export function FocusDock() {
  const keys = useLiveKeys()
  const tick = useTick(keys.length > 0)
  const [pop, setPop] = useState<PopupDetail | null>(null)
  useEffect(() => {
    const on = (e: Event) => setPop((e as CustomEvent<PopupDetail>).detail)
    window.addEventListener(POPUP, on)
    return () => window.removeEventListener(POPUP, on)
  }, [])
  // Tiêu đề tab: giờ còn lại của đồng hồ đang chạy gần hết nhất
  useEffect(() => {
    const live = keys.map((k) => ({ k, end: parse(raw(k))?.endAt })).filter((x): x is { k: string; end: number } => x.end !== undefined).map((x) => ({ k: x.k, left: x.end - Date.now() })).sort((x, y) => x.left - y.left)[0]
    if (!live) return
    const prev = document.title
    const lk = live.k + (parse(raw(live.k))?.sec ? `/${parse(raw(live.k))!.sec}` : '')
    document.title = live.left <= 0 ? `${fmtOver(-live.left)} quá · ${lk}` : `${fmtClock(live.left)} · ${lk}`
    return () => { document.title = prev }
  }, [keys, tick])
  return (
    <>
      {pop && pop.mode === 'end' && <EndSummaryModal key={`${pop.k}:end`} k={pop.k} startedAt={parse(raw(pop.k))?.startedAt} onFinish={() => clearFocus(pop.k)} onClose={() => setPop(null)} />}
      {pop && pop.mode === 'start' && <FocusPopup key={`${pop.k}:start`} k={pop.k} mode="start" onClose={() => setPop(null)} />}
    </>
  )
}
