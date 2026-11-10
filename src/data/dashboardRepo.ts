import type { DashboardData } from './dashboardTypes'
import { DASH_SEED } from './dashboardSeed'

/**
 * Nguồn dữ liệu của trang Bảng điều khiển. Bản đầu: snapshot trong dashboardSeed.ts (chưa tự đồng bộ).
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
