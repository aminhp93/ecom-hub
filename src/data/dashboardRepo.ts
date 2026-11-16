import type { DashboardData } from './dashboardTypes'
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
