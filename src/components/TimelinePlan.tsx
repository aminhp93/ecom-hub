import { useEffect, useState } from 'react'
import type { TodayTimeline } from '../data/todayTypes'

/** Timeline (phần 4 của trang Hôm nay): kế hoạch tổng quan các task đang chạy còn lại. Nội dung kể chuyện lấy từ today/<ngày>.json (cập nhật theo ngày);
 *  tiến độ lượt (xong/tổng) lấy sống từ /worklog/all (chỉ đọc), nên task nào xong lượt thì tự nhích. */
const JIRA = 'https://phamsworkspace-42448765.atlassian.net/browse/'
const ST: Record<string, string> = { doing: 'Đang làm', waiting: 'Chờ', blocked: 'Vướng', todo: 'Chưa làm', parked: 'Tạm dừng' }
interface W { key: string; status: string }

export function TimelinePlan({ tl }: { tl: TodayTimeline }) {
  const [rows, setRows] = useState<W[] | null>(null)
  useEffect(() => { fetch('/worklog/all').then((r) => r.json()).then((d: { items: W[] }) => setRows(d.items)).catch(() => setRows(null)) }, [])
  const prog = (k: string) => { const r = (rows ?? []).filter((x) => x.key === k); return r.length ? { done: r.filter((x) => x.status === 'Đã xong').length, n: r.length } : null }
  return (
    <>
      {tl.note && <p className="td-rhythm">{tl.note}</p>}
      <div className="tl-kw" role="list" aria-label="Gọi nhanh task bằng keyword">
        {[...tl.tasks].sort((a, b) => Number(!!b.prio) - Number(!!a.prio)).map((t) => (
          <a key={t.key} role="listitem" href={`#tl-${t.key}`} className={`tl-chip tl-${t.state}${t.prio ? ' prio' : ''}`} title={t.s}><b>{t.key.replace('KAN-', '')}</b> {t.kw}{t.prio ? ' ★' : ''}</a>))}
        {tl.recentlyDone.map((d) => <span key={d.key} className="tl-chip tl-done-chip" title={d.s}><b>{d.key.replace('KAN-', '')}</b> {d.kw ?? d.s} ✓</span>)}
      </div>
      <ol className="tl-list">
        {tl.tasks.map((t) => { const p = prog(t.key); return (
          <li key={t.key} id={`tl-${t.key}`} className={`tl-it tl-${t.state}${t.prio ? ' prio' : ''}`}>
            <i className="tl-dot" aria-hidden="true" />
            <div className="tl-card">
              <div className="tl-h"><a className="td-key solid" href={JIRA + t.key} target="_blank" rel="noreferrer">{t.key}</a>
                <b>{t.s}</b><span className={`aw-chip ${t.state === 'doing' ? 'doing' : t.state === 'todo' || t.state === 'parked' ? 'todo' : 'wait'}`}>{ST[t.state]}</span>
                {t.due && <small>hạn {t.due}</small>}</div>
              {p && <div className="tl-pb" title={`${p.done}/${p.n} lượt worklog đã xong`}><i style={{ width: `${Math.round((p.done / p.n) * 100)}%` }} /><span>{p.done}/{p.n} lượt xong</span></div>}
              {t.done && t.done.length > 0 && <ul className="tl-done">{t.done.map((x, i) => <li key={i}>✓ {x}</li>)}</ul>}
              <ul className="tl-rem">{t.remaining.map((x, i) => <li key={i}>○ {x}</li>)}</ul>
              {t.next && <p className="tl-next"><b>Tiếp:</b> {t.next}</p>}
              {t.note && <p className="aw-note">{t.note}</p>}
            </div>
          </li>) })}
      </ol>
      {tl.recentlyDone.length > 0 && <div className="td-grp"><h3 className="t-ok">Vừa xong <span className="td-n">{tl.recentlyDone.length}</span></h3>
        <ul>{tl.recentlyDone.map((d) => <li key={d.key} className="td-row t-ok"><span className="td-mark">✓</span><span className="td-txt"><b>{d.kw}</b> {d.s} <a className="td-key" href={JIRA + d.key} target="_blank" rel="noreferrer">{d.key}</a> <small>{d.date}</small></span></li>)}</ul></div>}
    </>
  )
}
