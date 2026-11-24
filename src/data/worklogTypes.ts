/** Kiểu dữ liệu đầu ra `worklog-query/1` của quy-trinh/worklog.py (chuẩn worklog/1, KAN-97). UI chỉ đọc. */
export type WlStatus = 'Còn lại' | 'Đang làm' | 'Chờ' | 'Đã xong'
export const WL_STATUSES: WlStatus[] = ['Còn lại', 'Đang làm', 'Chờ', 'Đã xong']
export interface WlItem {
  item_id: string; rev: number; event: string; task_key: string; date: string
  session_id: string; session_name: string; section_id: string; section_name: string
  actor: string; action: string; status: WlStatus
  started_at: string | null; updated_at: string | null; ended_at: string | null; time_precision: 'second' | 'date'
  evidence: string[]; verify: string | null; next_or_blocker: string | null
  credit_value: number | null; credit_unit: string | null; credit_source: string | null; source: string | null
  span: { from: string | null; to: string | null; kind: 'ended' | 'paused' | 'ongoing' | 'unknown' }
}
export type WlCounts = Record<WlStatus, number>
export interface WlQuery {
  schema: 'worklog-query/1'; task_key: string; date: string; tz: string; generated_at: string; source: string
  filters: { session_id: string | null; section_id: string | null }
  session: { id: string; name: string; state: WlStatus; started_at: string | null; last_update_at: string | null; ended_at: string | null; actors: string[]; counts: WlCounts; time_known: boolean } | null
  sections: { id: string; name: string; counts: WlCounts; items: WlItem[] }[]
  columns: Record<WlStatus, string[]>
  items: WlItem[]
}
