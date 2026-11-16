export interface DashLink { label: string; url?: string; path?: string }
export interface DashNotes {
  objective?: string
  progress?: string
  done?: string
  next?: string
  blocker?: string
  note?: string
}
export interface DashTask {
  key: string
  t: string
  status: string
  /** Ngày trạng thái Jira được kiểm trực tiếp hoặc đối chiếu từ báo cáo Jira. */
  statusVerifiedAt?: string
  project?: string
  jira?: { key: string; url: string }
  inputs?: DashLink[]
  outputs?: DashLink[]
  /** File tiến độ chi tiết (xem trước khi bấm). */
  progressFile?: DashLink
  notes?: DashNotes
  /** Hạn dạng YYYY-MM-DD. */
  due?: string
}
export interface DashEvent { date: string; label: string }
export interface DashWidget {
  id: string
  title?: string
  status?: string
  tone?: 'ok' | 'warn' | 'bad' | 'idle'
  headline?: string
  updated?: string
  type?: string
  alerts: string[]
  issues: string[]
  next: { t: string; due?: string }[]
  metrics: { l: string; v?: string; sub?: string; tone?: string; date?: string }[]
}
export interface DashboardData {
  /** Ngày lấy snapshot từ artifact (YYYY-MM-DD). */
  snapshotAt: string
  source: string
  focus: string | null
  milestones: DashEvent[]
  lastUpdate: { at: string; text: string }
  events: DashEvent[]
  tasks: DashTask[]
  todo: DashTask[]
  idea: DashTask[]
  done: DashTask[]
  widgets: DashWidget[]
}
