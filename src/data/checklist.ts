import type { ChannelKey, Store } from './types'
import { CHANNELS } from './types'

// Các mục BẮT BUỘC phải có của Product info (số thứ tự trong template 20 dòng).
// Thiếu mục nào thì store chưa đủ điều kiện sang bước tiếp theo.
export const REQUIRED_PRODUCT: Array<[number, string]> = [
  [1, 'Tên sản phẩm'],
  [3, 'Thông tin / mô tả'],
  [4, 'Khách hàng mục tiêu'],
  [6, 'Ảnh sản phẩm'],
  [8, 'Nhà cung cấp'],
  [10, 'Giá mua'],
  [12, 'Giá bán'],
  [16, 'Hướng dẫn sử dụng'],
  [19, 'Claim được / không được'],
]

// Khi store đã có danh sách products (mỗi SP có ảnh, giá mua, giá bán), 3 mục này tính theo từng SP, không đọc từ productInfo (P18, KAN-125).
const COVERED_BY_PRODUCTS = new Set([6, 10, 12])
function productsCover(s: Store, n: number): boolean {
  const ps = s.products ?? []
  if (!ps.length) return false
  if (n === 6) return ps.every((x) => (x.images?.length ?? 0) > 0)
  if (n === 10) return ps.every((x) => x.cost_ref_usd != null)
  if (n === 12) return ps.every((x) => x.price_sell_usd != null)
  return false
}

export interface Check {
  product: { done: number; total: number; missing: string[] }
  creative: { total: number; passed: number; failed: number; unreviewed: number; evaluated: number; keep: number; fix: number; drop: number; unknown: number }
  social: { live: string[]; none: string[]; posts: number; posted: number }
  missingCount: number
}

export function checkStore(s: Store): Check {
  const missing = REQUIRED_PRODUCT.filter(([n]) => !(COVERED_BY_PRODUCTS.has(n) && productsCover(s, n)) && !s.productInfo.find((r) => r.n === n)?.value).map(([, l]) => l)
  // Qua cổng = cổng A và B đều "Đạt", cổng C "Đạt" hoặc "Không áp dụng". Chưa có gates thì dùng status cũ.
  const ok = (x?: string) => x === 'Đạt'
  const passedOf = (v: Store['creative'][number]) => v.gates ? ok(v.gates.A) && ok(v.gates.B) && (ok(v.gates.C) || v.gates.C === 'Không áp dụng') : v.status === 'Đã qua cổng'
  const failedOf = (v: Store['creative'][number]) => !!v.gates && Object.values(v.gates).some((g) => g?.startsWith('Không đạt'))
  const passed = s.creative.filter(passedOf).length
  const failed = s.creative.filter((v) => !passedOf(v) && failedOf(v)).length
  const rec = (r: string) => s.creative.filter((v) => v.evaluation?.recommend === r).length
  const keys = Object.keys(CHANNELS) as ChannelKey[]
  const live = keys.filter((k) => s.social[k].status === 'Đã đăng bài đầu').map((k) => CHANNELS[k])
  const none = keys.filter((k) => s.social[k].status !== 'Đã đăng bài đầu').map((k) => CHANNELS[k])
  const all = keys.flatMap((k) => s.social[k].posts)
  return {
    product: { done: REQUIRED_PRODUCT.length - missing.length, total: REQUIRED_PRODUCT.length, missing },
    creative: { total: s.creative.length, passed, failed, unreviewed: s.creative.length - passed - failed, evaluated: s.creative.filter((v) => v.evaluation).length, keep: rec('Giữ'), fix: rec('Sửa'), drop: rec('Bỏ'), unknown: rec('Chưa đủ dữ liệu') },
    social: { live, none, posts: all.length, posted: all.filter((p) => p.status === 'Đã đăng').length },
    missingCount: missing.length + (s.creative.length === 0 ? 1 : 0) + (live.length === 0 ? 1 : 0),
  }
}
