declare module 'virtual:working-data' {
  import type { Store } from './data/types'
  import type { DashboardData } from './data/dashboardTypes'
  export const DASH_SEED_REV: number
  export const DASH_SEED: DashboardData
  export const SEED_STORES: Store[]
}
