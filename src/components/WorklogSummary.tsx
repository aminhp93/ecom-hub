import { useState } from 'react'
import { Modal } from './Modal'
import { useFetchJson } from '../useFetchJson'

/** Tổng kết phiên (worklog-summary/1): dựng ở server chỉ từ worklog chuẩn (task + phiên hiện tại hôm nay, theo section). Không dùng Jira/ban-giao. */
export interface SumItem { item_id: string; actor: string; action: string; status: string; evidence: string[]; verify: string | null; next_or_blocker: string | null; span: { from: string | null; to: string | null; kind: string } }
export interface Summary {
  schema: 'worklog-summary/1'; task_key: string; date: string; tz: string; generated_at: string; saved_at?: string; note?: string | null; file?: string
  session: { id: string; name: string; state: string; started_at: string | null; last_update_at: string | null; ended_at: string | null; actors: string[] }
  sections: { id: string; name: string; done: SumItem[]; open: SumItem[] }[]
  totals: { done: number; open: number }
  source: { file: string; sha256_16: string; query: string }
}
const hm = (t: string | null) => (t ? t.slice(11, 16) : null)
const when = (it: SumItem) => (it.span.kind === 'unknown' && !it.span.from && !it.span.to ? 'chưa có giờ' : `${hm(it.span.from) ?? 'chưa có giờ bắt đầu'} → ${hm(it.span.to) ?? 'chưa có giờ'}`)

function Row({ it, sec, open }: { it: SumItem; sec: string; open?: boolean }) {
  return (
    <li className={`ws-row${open ? ' open' : ''}`}>
      <details>
        <summary>
          <span className="ws-sec">{sec}</span>
          {open && <span className={`ws-st${it.status === 'Chờ' ? ' wait' : ''}`}>{it.status}</span>}
          <span className="ws-act">{it.action}</span>
        </summary>
        <dl className="ws-det">
          <div><dt>Ai làm · thời điểm</dt><dd>{it.actor} · {when(it)}</dd></div>
          <div><dt>Kết quả / bằng chứng</dt><dd>{it.evidence.length ? it.evidence.join(' · ') : <i>chưa có bằng chứng</i>}</dd></div>
          <div><dt>Verify</dt><dd>{it.verify ?? <i>chưa kiểm</i>}</dd></div>
          <div><dt>{open ? 'Chờ gì / bước tiếp' : 'Bước tiếp / blocker'}</dt><dd>{it.next_or_blocker ?? <i>chưa có</i>}</dd></div>
        </dl>
      </details>
    </li>
  )
}

/** Hiển thị một bản tổng kết: trước hết Đang dở/Chờ (việc phải nhặt lại), sau đó Đã xong theo section; mỗi dòng full-width. */
export function SummaryView({ s, timerMs }: { s: Summary; timerMs?: number }) {
  const open = s.sections.flatMap((x) => x.open.map((it) => ({ it, sec: x.id })))
  return (
    <div className="ws">
      <p className="ws-head"><b>{s.task_key}</b> · {s.session.name} · {s.date} <span className="note">({s.tz})</span></p>
      <p className="note">Phạm vi: task {s.task_key} · phiên {s.session.id} · hôm nay {s.date} · {s.sections.length} section. Nguồn: {s.source.file} (sha {s.source.sha256_16}).{timerMs !== undefined ? ` Timer: ${Math.max(1, Math.round(timerMs / 60000))} phút.` : ''}</p>
      <div className="wl-counts"><span className="wl-c done"><b>{s.totals.done}</b> Đã xong</span><span className="wl-c wait"><b>{s.totals.open}</b> Đang dở / Chờ</span></div>
      {s.note && <p className="ws-note"><b>Ghi chú của bạn:</b> {s.note}</p>}
      <section className="ws-g wait" aria-label="Đang dở và Chờ">
        <h3>Đang dở / Chờ <span className="td-n">{open.length}</span></h3>
        {open.length ? <ul className="ws-list">{open.map(({ it, sec }) => <Row key={it.item_id} it={it} sec={sec} open />)}</ul> : <p className="note">Không còn việc dở.</p>}
      </section>
      <section className="ws-g done" aria-label="Đã xong">
        <h3>Đã xong <span className="td-n">{s.totals.done}</span></h3>
        {s.sections.filter((x) => x.done.length).map((x) => (
          <div key={x.id} className="ws-sect">
            <h4>{x.name} <span className="td-n">{x.done.length}</span></h4>
            <ul className="ws-list">{x.done.map((it) => <Row key={it.item_id} it={it} sec={x.id} />)}</ul>
          </div>
        ))}
        {!s.totals.done && <p className="note">Chưa có việc nào xong.</p>}
      </section>
    </div>
  )
}

/** Hộp "Kết thúc" của timer: xem trước tổng kết từ worklog, lưu, rồi đóng timer; sau khi lưu vẫn xem lại được ngay và trong panel nhật ký. */
export function EndSummaryModal({ k, startedAt, onFinish, onClose }: { k: string; startedAt?: number; onFinish: () => void; onClose: () => void }) {
  const pre = useFetchJson<Summary>(`/worklog/summary?task=${k}`)
  const [note, setNote] = useState('')
  const [saved, setSaved] = useState<Summary | null>(null)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [endedAt] = useState(() => Date.now())
  const save = async () => {
    setBusy(true); setErr('')
    try {
      const r = await fetch(`/worklog/summary?task=${k}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ note }) })
      const j = await r.json()
      if (!r.ok) throw new Error([j.error, j.details].filter(Boolean).join('\n'))
      setSaved(j as Summary); onFinish()
    } catch (e) { setErr(String((e as Error).message ?? e)) } finally { setBusy(false) }
  }
  const timerMs = startedAt !== undefined ? endedAt - startedAt : undefined
  return (
    <Modal title={saved ? `Đã lưu tổng kết · ${k}` : `Tổng kết phiên · ${k}`} onClose={onClose} wide>
      <div className="ws-modal">
        {saved ? (
          <>
            <p className="ws-ok" role="status">Đã lưu và đóng đồng hồ. Xem lại trong “Tổng kết đã lưu” của nhật ký {k}. File: {saved.file}</p>
            <SummaryView s={saved} timerMs={timerMs} />
            <div className="fp-act"><button className="ft-b" onClick={() => { window.location.hash = `#/today/worklog/${k}`; onClose() }}>Mở nhật ký {k}</button><button className="ft-b go" autoFocus onClick={onClose}>Đóng</button></div>
          </>
        ) : pre.loading ? <p className="fp-e">Đang đọc worklog…</p>
          : pre.error || !pre.data ? (
            <>
              <p className="err" role="alert">{pre.error ?? 'Không có dữ liệu'}</p>
              <p className="note">Không có tổng kết nào để lưu (không dùng Jira hay ngày cũ). Có thể đóng đồng hồ mà không lưu.</p>
              <div className="fp-act"><button className="ft-b" autoFocus onClick={onClose}>Quay lại</button><button className="ft-b go" onClick={() => { onFinish(); onClose() }}>Đóng đồng hồ, không lưu tổng kết</button></div>
            </>
          ) : (
            <>
              <SummaryView s={pre.data} timerMs={timerMs} />
              <label className="ws-ta">Ghi chú của bạn cho phiên sau (lưu kèm)<textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Kết quả chính / việc dở / quyết định…" /></label>
              {err && <p className="err" role="alert">Lưu lỗi: {err}</p>}
              <div className="fp-act"><button className="ft-b" onClick={onClose}>Quay lại</button><button className="ft-b go" autoFocus disabled={busy} onClick={save}>{busy ? 'Đang lưu…' : 'Lưu tổng kết và đóng đồng hồ'}</button></div>
            </>
          )}
      </div>
    </Modal>
  )
}

/** Danh sách tổng kết đã lưu của task (mới nhất trước), nằm cuối panel nhật ký. */
export function SavedSummaries({ task }: { task: string }) {
  const { loading, data, error } = useFetchJson<{ summaries: Summary[] }>(`/worklog/summaries?task=${task}`)
  return (
    <section className="ws-saved" aria-label="Tổng kết đã lưu">
      <h3>Tổng kết đã lưu</h3>
      {loading ? <p className="note">Đang đọc…</p> : error ? <p className="err" role="alert">{error}</p>
        : !data?.summaries.length ? <p className="note">Chưa có tổng kết nào được lưu cho {task}.</p>
        : data.summaries.map((s) => (
          <details key={s.file} className="ws-one">
            <summary>{s.date} · {s.session.name} · lưu {s.saved_at?.slice(11, 16) ?? '—'} · {s.totals.done} xong, {s.totals.open} dở/chờ</summary>
            <SummaryView s={s} />
          </details>
        ))}
    </section>
  )
}
