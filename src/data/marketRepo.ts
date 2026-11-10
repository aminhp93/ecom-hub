import type { MarketProduct } from './marketTypes'
import { MARKET_PRODUCTS, MARKET_SEED_REV } from './marketSeed'

/** Lưu trữ sản phẩm Market Research (tách khỏi StoreRepo). Local trước; Supabase viết cùng giao diện sau. */
export interface MarketRepo {
  list(): Promise<MarketProduct[]>
  /** Cập nhật một dòng (khóa theo STT `n`). */
  update(item: MarketProduct): Promise<MarketProduct>
  /** Đưa về dữ liệu Sheet ban đầu (bỏ mọi chỉnh sửa). */
  reset(): Promise<MarketProduct[]>
}

const KEY = 'store-hub:market:v1' // kèm rev; đổi MARKET_SEED_REV thì bản đã lưu bị bỏ
interface Saved { rev: number; items: MarketProduct[] }

function read(): MarketProduct[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const s = JSON.parse(raw) as Saved
      if (s.rev === MARKET_SEED_REV && Array.isArray(s.items)) return s.items
    }
  } catch { /* localStorage bị chặn hoặc hỏng: dùng seed */ }
  return structuredClone(MARKET_PRODUCTS)
}

function write(items: MarketProduct[]): void {
  try { localStorage.setItem(KEY, JSON.stringify({ rev: MARKET_SEED_REV, items } satisfies Saved)) } catch { /* giữ trong bộ nhớ */ }
}

let cache: MarketProduct[] | null = null
const all = () => (cache ??= read())

export const localMarketRepo: MarketRepo = {
  async list() { return structuredClone(all()) },
  async update(item) {
    cache = all().map((p) => (p.n === item.n ? item : p))
    write(cache)
    return structuredClone(item)
  },
  async reset() {
    cache = structuredClone(MARKET_PRODUCTS)
    write(cache)
    return structuredClone(cache)
  },
}

// Đổi dòng này sang supabaseMarketRepo khi Amin duyệt bản local.
export const marketRepo: MarketRepo = localMarketRepo
