/** Dữ liệu tab "Hôm nay": một file mỗi ngày 0-dashboard/dashboard-data/today/YYYY-MM-DD.json (nguồn ở Drive, không nằm trong repo). */
/** s = nhãn ngắn để nhắc (không có thì dùng t); kw = keyword chính; flow = chuỗi bước (nếu ý có luồng). */
export interface TodayItem { t: string; s?: string; key?: string }
export interface TodayIdea { topic: string; t: string; kind: 'has-task' | 'no-task' | 'unverified'; keys: string[]; note?: string; s?: string; kw?: string[]; flow?: string[]; hl?: string[] }
/** Đánh giá một ý Brainstorm với tình hình task hiện tại (Plan). */
export interface PlanEval { idea: number; verdict: 'first' | 'into-task' | 'new-task' | 'later' | 'done'; key?: string; state: string; today: 'yes' | 'wait' | 'no'; todayNote?: string; why: string }
export interface TodayTop extends TodayItem { done?: boolean }
export interface TodayDay {
  date: string
  status: 'draft' | 'published'
  yesterday: { done: TodayItem[]; open: TodayItem[]; blockers: TodayItem[]; planImpact?: TodayItem[]; timelineImpact?: TodayItem[] }
  ideas: TodayIdea[]
  plan: { top: TodayTop[]; intoTasks: TodayItem[]; parking: TodayItem[]; rhythm?: string; eval?: PlanEval[] }
  /** Timeline (tổng quan, cập nhật theo ngày): các task đang chạy còn lại + task vừa xong. */
  timeline?: TodayTimeline
  /** Plan chung (preview, tuỳ chọn): 5 khối nhìn xuyên ngày. */
  overview?: { note?: string; todayPlan: TodayItem[]; activeSnapshot: TodayItem[]; catchup: TodayItem[]; weekly: TodayItem[]; recentlyDone: TodayItem[] }
}

export interface TimelineTask { key: string; s: string; kw: string; prio?: boolean; state: 'doing' | 'waiting' | 'blocked' | 'todo' | 'parked'; done?: string[]; remaining: string[]; next?: string; due?: string; note?: string }
export interface TodayTimeline { note?: string; tasks: TimelineTask[]; recentlyDone: { key: string; s: string; kw?: string; date: string }[] }
