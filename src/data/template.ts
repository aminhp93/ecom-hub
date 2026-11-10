import type { ChannelKey, Channel, ProductInfoItem, Store } from './types'

const PRODUCT_INFO_TEMPLATE: ReadonlyArray<readonly [string, string]> = [
  ['Nhận diện', 'Tên sản phẩm'],
  ['Nhận diện', 'Ngành hàng'],
  ['Nhận diện', 'Mô tả ngắn và hình thái'],
  ['Khách hàng', 'Khách hàng mục tiêu'],
  ['Khách hàng', 'Vấn đề giải quyết'],
  ['Tư liệu', 'Ảnh sản phẩm (đúng sản phẩm)'],
  ['Tư liệu', 'Video demo hoặc hướng dẫn'],
  ['Nguồn hàng', 'Nhà cung cấp (link listing)'],
  ['Nguồn hàng', 'Báo giá thật bằng văn bản'],
  ['Giá', 'Giá mua ước tính'],
  ['Giá', 'Phí ship, landed cost ước tính'],
  ['Giá', 'Giá bán dự kiến'],
  ['Giá', 'Biên gộp ước tính'],
  ['Vật lý', 'Kích thước, cân nặng'],
  ['Vật lý', 'Vật liệu, thông số'],
  ['Cách dùng', 'Cách dùng, lắp đặt'],
  ['Thị trường', 'Đối thủ chính và giá'],
  ['Thị trường', 'Bằng chứng ads (Ad Library)'],
  ['Rủi ro', 'Claim được và không được'],
  ['Rủi ro', 'Rủi ro, quy định'],
]

export function emptyProductInfo(): ProductInfoItem[] {
  return PRODUCT_INFO_TEMPLATE.map(([group, name], i) => ({
    n: i + 1,
    group,
    name,
    value: '',
    evidence: '',
    source: '',
    date: '',
  }))
}

export function emptySocial(): Record<ChannelKey, Channel> {
  return {
    FB: { status: 'Chưa tạo', posts: [] },
    IG: { status: 'Chưa tạo', posts: [] },
    TT: { status: 'Chưa tạo', posts: [] },
    YT: { status: 'Chưa tạo', posts: [] },
  }
}

export const today = (): string => new Date().toISOString().slice(0, 10)

export const slugify = (s: string): string =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export function newStore(input: Pick<Store, 'name' | 'product' | 'jira' | 'market' | 'status'>): Store {
  return {
    ...input,
    id: slugify(input.name) || `store-${Date.now()}`,
    email: '',
    domain: '',
    updated: today(),
    productInfo: emptyProductInfo(),
    creative: [],
    social: emptySocial(),
  }
}

export const uid = (): string => Math.random().toString(36).slice(2, 10)
