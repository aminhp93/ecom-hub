import { useFetchJson as useFetch } from '../useFetchJson'

/** Dữ liệu worklog của một task (đọc /worklog/task, chỉ đọc) dùng cho 3 chỗ trong thẻ task: thanh tiến độ (nhóm Progress), video kết quả (nhóm Output), danh sách lượt (nhóm Worklog). */

type St = 'Còn lại' | 'Đang làm' | 'Chờ' | 'Đã xong'
export type WlItem = { item_id: string; date: string; session_name: string; section_id: string; section_name: string; action: string; status: St; started_at: string | null; updated_at: string | null; evidence: string[]; verify: string | null; next_or_blocker: string | null }

const CLS: Record<St, string> = { 'Còn lại': 'todo', 'Đang làm': 'doing', 'Chờ': 'wait', 'Đã xong': 'done' }
const hm = (t: string | null) => (t ? t.slice(11, 16) : null)
const mins = (a: string, b: string) => Math.max(0, Math.round((new Date(b).getTime() - new Date(a).getTime()) / 60000))
const dur = (m: number) => (m >= 60 ? `${Math.floor(m / 60)}g${String(m % 60).padStart(2, '0')}` : `${m} phút`)
const isVideo = (p: string) => /\.(mp4|mov|webm)$/i.test(p)
const url = (p: string) => `/preview/0-dashboard/${p}`
const label = (p: string) => { const a = p.replace(/\/+$/, '').split('/'); return a[a.length - 1] + (p.endsWith('/') ? '/' : '') }
const store = (p: string) => (p.match(/\/(heartbond|aquanest|whiskerwall)\//i)?.[1] ?? '').replace(/^./, (c) => c.toUpperCase())

function when(it: WlItem) {
  if (it.started_at && it.updated_at && it.status === 'Đã xong') return `${hm(it.started_at)}→${hm(it.updated_at)} · ${dur(mins(it.started_at, it.updated_at))}`
  if (it.started_at) return `từ ${hm(it.started_at)}`
  return 'chưa ghi giờ'
}

export function useTaskItems(task: string) {
  const { loading, data, error } = useFetch<{ items: WlItem[] }>(`/worklog/task?task=${task}`)
  const items = [...(data?.items ?? [])].sort((a, b) => (a.date + (a.started_at ?? '') + a.item_id).localeCompare(b.date + (b.started_at ?? '') + b.item_id))
  return { loading, error: !!error, items }
}

/** Nhóm Progress: thanh các lượt + 1 dòng "đang ở đâu" + việc đang chờ. Ngắn; chi tiết ở nhóm Worklog và file bàn giao. */
export function ProgressStrip({ items, loading, error }: { items: WlItem[]; loading: boolean; error: boolean }) {
  if (loading) return <p className="note">Đang đọc…</p>
  if (error) return <p className="note">Chưa đọc được worklog (chỉ có khi chạy dev cục bộ).</p>
  if (!items.length) return <p className="note">Chưa có lượt nào trong worklog.</p>
  const waiting = [...items].reverse().find((i) => i.status !== 'Đã xong' && i.next_or_blocker)?.next_or_blocker
  return (
    <div className="pg">
      {waiting && <p className="tp-next"><em>Đang chờ</em> {waiting}</p>}
    </div>
  )
}

/** Nhóm Output: video của lượt gần nhất có video (bản mới nhất), phát ngay trong trang. */
export function ResultVideos({ items }: { items: WlItem[] }) {
  const lastVid = [...items].reverse().find((i) => i.evidence.some(isVideo))
  const vids = lastVid ? lastVid.evidence.filter(isVideo) : []
  if (!lastVid || !vids.length) return null
  return (
    <div className="io">
      <em>Video mới nhất <span className="note">({lastVid.section_id})</span></em>
      <div className="tp-vids">
        {vids.map((v) => (
          <figure key={v}>
            <video src={url(v)} controls preload="metadata" playsInline />
            <figcaption>{store(v) || label(v)} <span className="note">{label(v).replace(/^.*FINAL-/, '').replace('.mp4', '')}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

/** Nhóm Worklog: mỗi lượt một dòng (task cha → lượt con); bấm một dòng để xem việc đã làm, file, verify. */
export function WorklogGroup({ task, items, loading, error }: { task: string; items: WlItem[]; loading: boolean; error: boolean }) {
  if (loading) return <p className="note">Đang đọc worklog…</p>
  if (error) return <p className="note">Chưa đọc được worklog (chỉ có khi chạy dev cục bộ).</p>
  if (!items.length) return <p className="note">Chưa có lượt nào (chưa chạy /task-child).</p>
  return (
    <ol className="tp-tree">
      <li className="tp-root"><span className="tp-dot root" /><b>{task}</b> <span className="note">task cha: lập kế hoạch, tổng hợp; mỗi lượt làm là một session con</span></li>
      {items.map((it) => (
        <li key={it.item_id} className={`tp-it ${CLS[it.status]}`}>
          <span className={`tp-dot ${CLS[it.status]}`} />
          <details className="tp-d">
            <summary>
              <code className="tp-sec">{it.section_id}</code>
              <span className="tp-nm">{it.section_name}</span>
              <span className={`wl-state ${CLS[it.status]}`}>{it.status}</span>
              <span className="note tp-w">{it.date.slice(8, 10)}/{it.date.slice(5, 7)} · {when(it)}</span>
            </summary>
            <div className="tp-body">
              <p className="tp-act">{it.action}</p>
              {it.evidence.length > 0 && (
                <p className="tp-ev">{it.evidence.map((e) => (
                  <a key={e} href={url(e)} target="_blank" rel="noreferrer" className={isVideo(e) ? 'vid' : ''}>{isVideo(e) ? '▶ ' : ''}{label(e)}</a>
                ))}</p>
              )}
              {it.verify && <p className="tp-ver"><em>Verify</em> {it.verify}</p>}
              {it.next_or_blocker && <p className="tp-ver"><em>Tiếp / chờ</em> {it.next_or_blocker}</p>}
            </div>
          </details>
        </li>
      ))}
    </ol>
  )
}
