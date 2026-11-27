import { useEffect, useMemo, useState } from 'react'

/** "Tất cả worklog" (Hôm nay): bảng mọi item worklog của mọi task, lọc theo trạng thái / thiếu bằng chứng / thiếu summary. Chỉ đọc /worklog/all. */
type St = 'Còn lại' | 'Đang làm' | 'Chờ' | 'Đã xong'
interface Row { key: string; item_id: string; date: string; section_id: string; section_name: string; actor: string; action: string; status: St
  evidence: string[]; next_or_blocker: string | null; has_summary: boolean; has_notebook: boolean }
const CLS: Record<St, string> = { 'Còn lại': 'todo', 'Đang làm': 'doing', 'Chờ': 'wait', 'Đã xong': 'done' }
const JIRA = 'https://phamsworkspace-42448765.atlassian.net/browse/'
const num = (k: string) => Number(k.split('-')[1])

export function AllWorklog({ date }: { date: string }) {
  const [rows, setRows] = useState<Row[] | null>(null)
  const [err, setErr] = useState('')
  const [st, setSt] = useState<'all' | St>('all')
  const [flag, setFlag] = useState<'all' | 'noev' | 'nosum'>('all')
  const [task, setTask] = useState('all')
  useEffect(() => {
    fetch('/worklog/all').then((r) => r.json()).then((d: { items: Row[] }) => setRows(d.items.filter((r) => r.date === date))).catch(() => setErr('Không đọc được /worklog/all (chỉ có khi chạy dev server).'))
  }, [date])
  const tasks = useMemo(() => [...new Set((rows ?? []).map((r) => r.key))].sort((a, b) => num(a) - num(b)), [rows])
  const shown = useMemo(() => (rows ?? []).filter((r) =>
    (st === 'all' || r.status === st) && (task === 'all' || r.key === task) &&
    (flag === 'all' || (flag === 'noev' ? r.status === 'Đã xong' && !r.evidence.length : r.status !== 'Còn lại' && !r.has_summary))
  ).sort((a, b) => num(a.key) - num(b.key) || a.item_id.localeCompare(b.item_id)), [rows, st, flag, task])
  const cnt = (s: St) => (rows ?? []).filter((r) => r.status === s).length
  return (
    <details className="card td-sec aw">
      <summary><h2>Worklog ngày {date.slice(8, 10)}/{date.slice(5, 7)}</h2>{rows && <span className="td-n">{rows.length}</span>}</summary>
      <div className="td-body">
        {err && <p className="aw-block">{err}</p>}
        {rows && <>
          <p className="aw-note">{tasks.length} task · Đã xong {cnt('Đã xong')} · Đang làm {cnt('Đang làm')} · Chờ {cnt('Chờ')} · Còn lại {cnt('Còn lại')}. Chỉ đọc từ progress/worklog.jsonl.</p>
          <div className="aw-flt">
            <select value={task} onChange={(e) => setTask(e.target.value)}><option value="all">Mọi task</option>{tasks.map((k) => <option key={k}>{k}</option>)}</select>
            <select value={st} onChange={(e) => setSt(e.target.value as 'all' | St)}><option value="all">Mọi trạng thái</option>{(['Đã xong', 'Đang làm', 'Chờ', 'Còn lại'] as St[]).map((s) => <option key={s}>{s}</option>)}</select>
            <select value={flag} onChange={(e) => setFlag(e.target.value as 'all' | 'noev' | 'nosum')}><option value="all">Không lọc thiếu</option><option value="noev">Xong nhưng thiếu bằng chứng</option><option value="nosum">Đã bắt đầu nhưng thiếu summary</option></select>
            <span className="aw-note">{shown.length} dòng</span>
          </div>
          <div className="aw-tw"><table className="aw-tb">
            <thead><tr><th>Task</th><th>Item</th><th>Ngày</th><th>Section</th><th>Trạng thái</th><th>Bằng chứng</th><th>Summary</th><th>Việc</th></tr></thead>
            <tbody>{shown.map((r) => (
              <tr key={r.item_id}>
                <td><a className="td-key solid" href={JIRA + r.key} target="_blank" rel="noreferrer">{r.key}</a></td>
                <td><code>{r.item_id.split('-').pop()}</code></td>
                <td>{r.date.slice(8, 10)}/{r.date.slice(5, 7)}</td>
                <td><b>{r.section_id}</b></td>
                <td><span className={`aw-chip ${CLS[r.status]}`}>{r.status}</span></td>
                <td>{r.evidence.length ? r.evidence.length : r.status === 'Đã xong' ? '⚠ 0' : '—'}</td>
                <td title={r.has_notebook ? 'có notebook' : 'chưa có notebook'}>{r.has_summary ? '✓' : r.status === 'Còn lại' ? '—' : '✕'}</td>
                <td title={r.action}>{r.action.slice(0, 90)}{r.action.length > 90 ? '…' : ''}{r.next_or_blocker && <em> · {r.next_or_blocker.slice(0, 60)}</em>}</td>
              </tr>))}</tbody>
          </table></div>
        </>}
      </div>
    </details>
  )
}
