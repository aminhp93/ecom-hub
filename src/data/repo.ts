import type { Store } from './types'

/**
 * Giao diện lưu trữ duy nhất mà UI dùng. Hiện cài bằng localStorage (localRepo).
 * Khi chuyển Supabase chỉ cần viết supabaseRepo cùng giao diện này và đổi một dòng ở data/index.ts.
 */
export interface StoreRepo {
  list(): Promise<Store[]>
  get(id: string): Promise<Store | undefined>
  create(store: Store): Promise<Store>
  update(store: Store): Promise<Store>
  remove(id: string): Promise<void>
  /** Đưa dữ liệu mẫu về trạng thái ban đầu. */
  reset(): Promise<void>
}
