import { localRepo } from './localRepo'
import type { StoreRepo } from './repo'
import { localDashboardRepo } from './dashboardRepo'
import type { DashboardRepo } from './dashboardRepo'

// Đổi dòng này sang supabaseRepo khi Amin duyệt bản local.
export const repo: StoreRepo = localRepo

// Bảng điều khiển (KAN-87): đổi dòng này sang supabaseDashboardRepo khi Amin duyệt.
export const dashboardRepo: DashboardRepo = localDashboardRepo
