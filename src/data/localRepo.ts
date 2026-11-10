import type { Store } from './types'
import type { StoreRepo } from './repo'
import { SEED_STORES } from './seed'

const KEY = 'store-hub:v1'

function read(): Store[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const stored = JSON.parse(raw) as Store[]
      // Store trong seed có seedRev mới hơn bản đã lưu thì lấy bản seed (các store khác giữ nguyên)
      return stored.map((s) => {
        const seed = SEED_STORES.find((x) => x.id === s.id)
        return seed?.seedRev && seed.seedRev > (s.seedRev ?? 0) ? structuredClone(seed) : s
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
