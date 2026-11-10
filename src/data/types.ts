export type Evidence = '' | 'verified' | 'hypothesis' | 'competitor_observation' | 'supplier_statement' | 'estimated'
export type StoreStatus = 'Đang làm' | 'Tạm dừng' | 'Đã dừng'
export type Market = 'US' | 'AU' | 'UK'
export type ChannelKey = 'FB' | 'IG' | 'TT' | 'YT'
export type ChannelStatus = 'Chưa tạo' | 'Đã tạo' | 'Đã đăng bài đầu'
export type PostStatus = 'Chưa đăng' | 'Đã lên lịch' | 'Đã đăng'
export type PostFormat = 'Video ngắn' | 'Video dài' | 'Ảnh' | 'Bài viết'
export type Gate = 'A' | 'B' | 'C'
export type VideoStatus = 'Chưa qua cổng' | 'Đã qua cổng'

export interface ProductInfoItem {
  n: number
  group: string
  name: string
  value: string
  evidence: Evidence
  source: string
  date: string
}

export interface Video {
  id: string
  title: string
  status: VideoStatus
  gate: Gate
  // Trường tùy chọn (nhập từ artifact; store tạo mới có thể để trống)
  format?: string
  hook?: string
  step?: string
  note?: string
  // Đường dẫn video/ảnh tính từ thư mục working (dev) hoặc URL https
  media?: string
  // Bộ đầu vào cho công cụ gen (vd Higgsfield Genjutsu): video tham chiếu, nhân vật, sản phẩm, prompt. Thiếu thì UI ghi "Không có".
  kit?: GenKit
}

export interface GenKit {
  // Công cụ tạo (Higgsfield / Muse / Google Flow...) và config (model, thời lượng, credit...)
  tool?: string
  config?: string
  referenceVideo?: string[]
  character?: string[]
  product?: string[]
  prompt?: string
  // Các ô cấu hình kiểu form gen của Higgsfield (nhập từ form tạo creative)
  fields?: Partial<Record<'mode' | 'hook' | 'setting' | 'product' | 'avatar' | 'duration' | 'resolution' | 'aspect' | 'audio', string>>
  // Khối chữ bổ sung (config, hook, nhạc...) để Amin duyệt trước khi gen
  extra?: { label: string; text: string }[]
}

export interface Post {
  id: string
  title: string
  format: PostFormat
  status: PostStatus
  url: string
  // Tùy chọn: ngày đăng (nếu Đã đăng) hoặc ngày dự kiến, ghi chú, file video, caption, hashtag
  date?: string
  note?: string
  file?: string
  media?: string
  caption?: string
  hashtags?: string
  // Mã creative nguồn (ví dụ R7-V01), dùng để lấy đầu vào gen
  creative?: string
  // Tiêu đề đăng YouTube (tối đa 100 ký tự)
  ytTitle?: string
  // Đầu vào đã dùng để gen video (tham chiếu, nhân vật, sản phẩm, config, prompt)
  kit?: GenKit
}

export interface Channel {
  status: ChannelStatus
  posts: Post[]
  note?: string
  name?: string
  handle?: string
  url?: string
  description?: string
  email?: string
  category?: string
}

export type AgentKind = 'Claude' | 'Muse' | 'Codex' | 'Amin' | 'Khác'
export type AgentState = 'Đang chạy' | 'Chờ Amin' | 'Idle' | 'Xong'

export interface AgentLink {
  id: string
  kind: AgentKind
  name: string
  url: string
  role: string
  state: AgentState
  // Ghi chú ngắn: agent này đang làm gì, đang chờ gì (ngày giờ chụp trạng thái nằm ở đây)
  note?: string
}

export interface TaskLink {
  id: string
  key: string
  title: string
  url: string
  status: string
  note?: string
  agents: AgentLink[]
}

export interface Store {
  id: string
  name: string
  product: string
  jira: string
  market: Market
  status: StoreStatus
  email: string
  domain: string
  updated: string
  // Tăng số này trong seed để ghi đè bản đã lưu trong trình duyệt (chỉ store có seedRev)
  seedRev?: number
  note?: string
  // Avatar của store (đường dẫn trong Drive working/, phục vụ qua /media/)
  avatar?: string
  /** Ảnh tham chiếu sản phẩm để xem nhanh (đường dẫn tương đối từ thư mục working, phục vụ qua /media/). */
  productImages?: { src: string; label: string }[]
  productInfo: ProductInfoItem[]
  creative: Video[]
  social: Record<ChannelKey, Channel>
  // Task Jira liên quan và các agent (Claude, Muse, Amin...) đang làm từng task
  tasks?: TaskLink[]
}

export const CHANNELS: Record<ChannelKey, string> = {
  FB: 'Facebook',
  IG: 'Instagram',
  TT: 'TikTok',
  YT: 'YouTube',
}

export const EVIDENCE_LABEL: Record<Exclude<Evidence, ''>, { label: string; tone: string }> = {
  verified: { label: 'Đã xác minh', tone: 'ok' },
  hypothesis: { label: 'Giả thuyết', tone: 'warn' },
  competitor_observation: { label: 'Quan sát đối thủ', tone: 'idle' },
  supplier_statement: { label: 'Lời nhà bán', tone: 'idle' },
  estimated: { label: 'Ước tính', tone: 'warn' },
}
