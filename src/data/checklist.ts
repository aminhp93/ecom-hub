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

export interface Check {
  product: { done: number; total: number; missing: string[] }
  creative: { total: number; passed: number; doing: number }
  social: { live: string[]; none: string[]; posts: number; posted: number }
  missingCount: number
}

export function checkStore(s: Store): Check {
  const missing = REQUIRED_PRODUCT.filter(([n]) => !s.productInfo.find((r) => r.n === n)?.value).map(([, l]) => l)
  const passed = s.creative.filter((v) => v.status === 'Đã qua cổng').length
  const keys = Object.keys(CHANNELS) as ChannelKey[]
  const live = keys.filter((k) => s.social[k].status === 'Đã đăng bài đầu').map((k) => CHANNELS[k])
  const none = keys.filter((k) => s.social[k].status !== 'Đã đăng bài đầu').map((k) => CHANNELS[k])
  const all = keys.flatMap((k) => s.social[k].posts)
  return {
    product: { done: REQUIRED_PRODUCT.length - missing.length, total: REQUIRED_PRODUCT.length, missing },
    creative: { total: s.creative.length, passed, doing: s.creative.length - passed },
    social: { live, none, posts: all.length, posted: all.filter((p) => p.status === 'Đã đăng').length },
    missingCount: missing.length + (s.creative.length === 0 ? 1 : 0) + (live.length === 0 ? 1 : 0),
  }
}
