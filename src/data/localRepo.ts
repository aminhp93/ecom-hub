import type { Store } from './types'
import type { StoreRepo } from './repo'
import { SEED_STORES } from 'virtual:working-data'

const KEY = 'store-hub:v1'

// Seed mới hơn thì lấy seed, NHƯNG giữ phần người dùng đã sửa trong UI: trạng thái/link/ngày của bài social đã đăng hoặc đã lên lịch,
// trạng thái + link + handle của kênh, bài social do người dùng tự tạo (không có trong seed). Creative lấy theo seed (xoá trong seed thì mất).
function mergeKeepUserEdits(seed: Store, old: Store): Store {
  try {
    for (const k of Object.keys(seed.social) as (keyof Store['social'])[]) {
      const sc = seed.social[k]
      const oc = old.social?.[k]
      if (!oc) continue
      if (oc.status && oc.status !== 'Chưa tạo' && (sc.status === 'Chưa tạo' || oc.status === 'Đã đăng bài đầu')) sc.status = oc.status
      for (const f of ['url', 'handle', 'email'] as const) if (oc[f] && !sc[f]) sc[f] = oc[f]
      for (const op of oc.posts ?? []) {
        const sp = sc.posts.find((x) => x.id === op.id)
        if (!sp) { sc.posts.push(op); continue }
        if (op.status !== 'Chưa đăng' || op.url) { sp.status = op.status; sp.url = op.url; sp.date = op.date }
        else if (op.status === 'Chưa đăng' && !sp.url) { sp.status = 'Chưa đăng'; sp.date = '' } // Amin hạ về Chưa đăng, seed không có link thì giữ
      }
    }
  } catch { /* nếu cấu trúc lạ thì dùng seed nguyên bản */ }
  return seed
}

function read(): Store[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const stored = JSON.parse(raw) as Store[]
      // Store trong seed có seedRev mới hơn bản đã lưu thì lấy bản seed (các store khác giữ nguyên)
      return stored.map((s) => {
        const seed = SEED_STORES.find((x) => x.id === s.id)
        return seed?.seedRev && seed.seedRev > (s.seedRev ?? 0) ? mergeKeepUserEdits(structuredClone(seed), s) : s
      })
    }
  } catch {
    /* localStorage bị chặn hoặc dữ liệu hỏng: dùng dữ liệu mẫu */
  }
  return structuredClone(SEED_STORES)
}

function write(stores: Store[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(stores))
  } catch {
    /* không lưu được: giữ trong bộ nhớ của phiên */
  }
}

let cache: Store[] | null = null
const all = (): Store[] => (cache ??= read())
const save = (next: Store[]): void => {
  cache = next
  write(next)
}

export const localRepo: StoreRepo = {
  async list() {
    return structuredClone(all())
  },
  async get(id) {
    const s = all().find((x) => x.id === id)
    return s ? structuredClone(s) : undefined
  },
  async create(store) {
    let id = store.id
    const taken = new Set(all().map((s) => s.id))
    for (let i = 2; taken.has(id); i++) id = `${store.id}-${i}`
    const created = { ...store, id }
    save([...all(), created])
    return structuredClone(created)
  },
  async update(store) {
    save(all().map((s) => (s.id === store.id ? store : s)))
    return structuredClone(store)
  },
  async remove(id) {
    save(all().filter((s) => s.id !== id))
  },
  async reset() {
    save(structuredClone(SEED_STORES))
  },
}
