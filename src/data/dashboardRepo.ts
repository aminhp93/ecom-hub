import type { DashboardData, DashTask } from './dashboardTypes'
import { DASH_SEED } from 'virtual:working-data'

/**
 * Nguồn dữ liệu của trang Bảng điều khiển. Bản đầu: dữ liệu trong 0-dashboard/dashboard-data/dashboard.json (nguồn chính, đọc qua virtual:working-data).
 * Khi Amin duyệt Supabase: viết supabaseDashboardRepo cùng giao diện và đổi một dòng ở data/index.ts.
 */
export interface DashboardRepo {
  load(): Promise<DashboardData>
}

export const localDashboardRepo: DashboardRepo = {
  async load() {
    return structuredClone(DASH_SEED)
  },
}

type Sec = { text: string[]; links: { label: string; url: string }[] }
export interface JiraIssue { key: string; t: string; status: string; sections?: Record<string, Sec> | null }
const BUCKET: Record<string, 'tasks' | 'todo' | 'idea' | 'done'> = { 'In Progress': 'tasks', 'In Review': 'tasks', 'To Do': 'todo', Idea: 'idea', Done: 'done' }
const PROJ: Record<string, string> = { KAN: 'Dropship', GA: 'AI', GEN: 'Cá nhân', DB: 'Dashboard' }
const SITE = 'https://phamsworkspace-42448765.atlassian.net/browse/'

/** Ghép trạng thái Jira (trực tiếp) vào dữ liệu: đổi nhóm/trạng thái theo Jira, giữ nguyên input/output/ghi chú đã có. */
export function mergeJira(data: DashboardData, issues: JiraIssue[]): DashboardData {
  const d = structuredClone(data)
  const today = new Date().toISOString().slice(0, 10)
  const buckets = ['tasks', 'todo', 'idea', 'done'] as const
  for (const it of issues) {
    const b = BUCKET[it.status]
    if (!b) continue
    let task: DashboardData['tasks'][number] | undefined
    for (const bb of buckets) {
      const i = d[bb].findIndex((x) => x.key === it.key)
      if (i < 0) continue
      task = d[bb][i]
      if (bb === b) { d[bb].splice(i, 1) } else d[bb].splice(i, 1)
      break
    }
    const t: DashTask = task ?? { key: it.key, t: it.t, status: it.status, project: PROJ[it.key.split('-')[0]] ?? 'Khác', jira: { key: it.key, url: SITE + it.key }, inputs: [], outputs: [], notes: {} }
    t.status = it.status; t.statusVerifiedAt = today; t.t = it.t
    const sc = it.sections
    if (sc) {
      // Jira là nguồn chính: có mục nào thì thay đúng mục đó, link chuyển thành nút mở Drive/URL
      if (sc.input?.links.length) t.inputs = sc.input.links.map((l) => ({ label: l.label, url: l.url }))
      if (sc.output?.links.length) t.outputs = sc.output.links.map((l) => ({ label: l.label, url: l.url }))
      t.notes = { ...(t.notes ?? {}) }
      if (sc.objective) t.notes.objective = sc.objective.text.join('\n')
      if (sc.progress) t.notes.progress = sc.progress.text.join('\n')
      if (sc.done) t.notes.done = sc.done.text.join('\n')
      if (sc.requirement) t.requirements = sc.requirement.text
      if (sc.verify) t.verify = sc.verify.text.map((x) => {
        const m = /^\s*(✅|✓|☑|\[x\]|❌|✗|✘|\[!\]|⬜|☐|\[ \])?\s*(.*)$/i.exec(x)!
        const g = (m[1] ?? '').toLowerCase()
        return { text: m[2], state: ['✅', '✓', '☑', '[x]'].includes(g) ? 'ok' : ['❌', '✗', '✘', '[!]'].includes(g) ? 'fail' : 'pending' } as const
      })
      if (sc.next) t.notes.next = sc.next.text.join('\n')
      if (sc.blocker) t.notes.blocker = sc.blocker.text.join('\n')
    }
    d[b].push(t)
  }
  return d
}

export async function fetchJira(): Promise<{ issues: JiraIssue[]; at: string } | { error: string }> {
  try {
    const r = await fetch('/jira/tasks')
    const j = await r.json()
    if (!r.ok || j.error) return { error: String(j.error ?? r.status) }
    return { issues: j.issues as JiraIssue[], at: j.fetchedAt as string }
  } catch (e) { return { error: String(e) } }
}
