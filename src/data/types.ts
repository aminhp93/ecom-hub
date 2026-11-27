export type Evidence = '' | 'verified' | 'hypothesis' | 'competitor_observation' | 'supplier_statement' | 'estimated'
export type StoreStatus = 'Đang làm' | 'Tạm dừng' | 'Đã dừng'
export type Market = 'US' | 'AU' | 'UK'
export type ChannelKey = 'FB' | 'IG' | 'TT' | 'YT'
export type ChannelStatus = 'Chưa tạo' | 'Đã tạo' | 'Đã đăng bài đầu'
export type PostStatus = 'Chưa đăng' | 'Đã lên lịch' | 'Đã đăng'
export type PostFormat = 'Video ngắn' | 'Video dài' | 'Ảnh' | 'Bài viết'
export type Gate = 'A' | 'B' | 'C'
export type VideoStatus = 'Chưa qua cổng' | 'Đã qua cổng'
// KAN-102: cách tạo video (docs/3-creative/8-video-flows.md). 1 ảnh + prompt có biến; 2a rút cấu trúc ref bằng chữ rồi gen bằng Flow 1; 2b upload video ref (chỉ ref có quyền); 3 remix asset sạch quyền.
// A/B = quy trình v2.0 (16/11/2026); 1/2a/2b/3 = nhãn cũ v1.0 của video đã làm, chỉ để hiển thị
export type VideoFlow = 'A' | 'B' | '1' | '2a' | '2b' | '3'
export type GateState = 'Đạt' | 'Không đạt' | 'Chưa review' | 'Không áp dụng'
export type GateKey = 'A' | 'C' | 'B'
export type RightsStatus = 'owned' | 'licensed' | 'permitted' | 'unknown' | 'not_permitted'
export type LedgerStatus = 'approved' | 'pending' | 'blocked'

// Một dòng asset ledger (theo 0-dashboard/task-hub/archive/KAN-102/output/05b-ASSET-LEDGER-mau.csv)
export interface AssetLedgerRow {
  asset_id: string
  type: string
  description: string
  file_path?: string
  source_type: string
  source_ref?: string
  rights_status: RightsStatus
  status: LedgerStatus
  flow?: string
  used_in_video?: string
  notes?: string
}

export interface ProductInfoItem {
  n: number
  group: string
  name: string
  value: string
  evidence: Evidence
  source: string
  date: string
}

/** Sản phẩm của store (nạp từ 1-info/products.json). Ảnh có thể thay bằng ảnh Muse sau, chỉ đổi path. */
export interface StoreProduct {
  id: string
  code: string
  name: string
  slug?: string
  images: { path: string; role: string; label: string }[]
  price_sell_usd: number
  cost_ref_usd: number
  cost_note?: string
  margin: { usd: number; pct: number; formula?: string; labels?: string[]; cpa_scenarios?: { cpa_usd: number; profit_after_ads_usd: number; label: string }[] }
  summary?: string
  description?: string
  audience?: string
  usage?: string[]
  claims_ok?: string[]
  claims_no?: string[]
  specs?: { k: string; v: string; label?: string }[]
  reference?: { ali_url?: string; ali_item_id?: string; seller?: string; supplier_price_note?: string; status?: string }
  risks?: string[]
  price_rationale?: string
  image_status?: string
  detail_path?: string
}

export interface Video {
  id: string
  /** Các lần gen cũ của cùng video (số thứ tự trùng, lần gen nhỏ hơn). Chỉ bản mới nhất nằm trong danh sách chính. */
  archive?: Video[]
  legacy_id?: string
  title: string
  status: VideoStatus
  gate: Gate
  // Trường tùy chọn (nhập từ artifact; store tạo mới có thể để trống)
  // Cột "Angle / Hook" chỉ hiện angle + hook; thiếu thì hiện —
  angle?: string
  format?: string
  hook?: string
  step?: string
  note?: string
  // Đường dẫn video/ảnh tính từ thư mục working (dev) hoặc URL https
  media?: string | string[]
  // Ngày cập nhật gần nhất (YYYY-MM-DD); tự ghi khi lưu trong UI
  last_updated?: string
  // Bộ đầu vào cho công cụ gen (vd Higgsfield Genjutsu): video tham chiếu, nhân vật, sản phẩm, prompt. Thiếu thì UI ghi "Không có".
  kit?: GenKit
  // KAN-102: flow tạo video và trạng thái cổng A (prompt) / C (ảnh neo) / B (video)
  flow?: VideoFlow
  // Hiển thị dễ hiểu (không dùng mã nội bộ làm nhãn chính): tên flow, mô tả ngắn, agent/công cụ gen (Muse | Flow). Có thì bảng Creative dùng; không có thì giữ nhãn cũ.
  flowName?: string
  flowDesc?: string
  agent?: string
  // Quick Preview ở ô Cổng A/B/C: keyword ngắn + dấu hiệu (ok ✓ / bad ✕ / unk ?), lấy từ review thật; n = ghi chú hiện ở tooltip. Cổng N/A không cần mục.
  gateChecks?: Partial<Record<GateKey, Array<{ k: string; t?: string; s: 'ok' | 'bad' | 'unk' | 'na'; n?: string }>>>
  gates?: Partial<Record<GateKey, GateState>>
  // Checklist riêng theo flow (KAN-120/P15, từ F3): 4 nhóm, mức M/C/O, chỉ tiêu chí M hoặc C đang bật quyết định kết luận. Có thì bảng Creative dùng thay cho cổng A/C/B; gateChecks/gates cũ giữ để tương thích.
  // Cột Draft (Amin 25/11/2026): true = bản nháp chưa chốt/chưa gen; bỏ trường này thì suy từ việc chưa có video
  draft?: boolean
  flowChecks?: { schema: string; source?: string; groups: Array<{ id: string; name: string; items: Array<{ k: string; t: string; tier: 'M' | 'C' | 'O'; s: 'ok' | 'bad' | 'unk' | 'na'; n?: string; cond?: string; ft?: 'Chặn' | 'Hậu kỳ'; stage?: 'G' | 'P' }> }>; flow?: string; gateGen?: string }
  brief?: { goal: string; channel?: string; duration?: string; cta?: boolean; text?: boolean; voice?: boolean; music?: boolean; ai?: boolean; source?: string }
  // Flow 3: tài nguyên đầu vào thực sự đã dùng (cột Input). Không có file/bằng chứng thì để path rỗng, UI ghi "Chưa có bằng chứng".
  inputs?: VideoInput[]
  // Yêu cầu gen từ form tạo creative (placeholder, chưa nối agent)
  genRequest?: { flow: 'F1' | 'F2' | 'F3'; agent: string; model: string; inputMode: 'auto' | 'manual'; inputs: string[]; structure?: string; createdAt: string }
  inputsSource?: string
  verdict_prev?: { label: string; by: string; date: string; source?: string }
  // Ghi chú về flow/quyền ref (vd ref chưa rõ quyền, đề xuất gỡ bài)
  flowNote?: string
  // Bằng chứng đầu vào cho bảng "Mức sẵn sàng" (8 tiêu chí). Điểm do readiness.ts tính, không nhập tay.
  readiness?: ReadinessInput
  // KAN-115 B4: đánh giá ads/social cụ thể
  evaluation?: CreativeEval
  // Kết luận tổng của verify độc lập (cột "Kết luận"): có thì ưu tiên; không có thì suy từ readiness (chỉ Sẵn sàng khi Final approved)
  verdict?: { label: 'Sẵn sàng' | 'Chưa sẵn sàng' | 'Chưa làm'; gen?: string; reasons?: { chan?: string[]; hauky?: string[]; chua?: string[]; chung?: string; next?: string }; by: string; date: string; source?: string }
  // Chi phí gen (token + lượt thử), nhập tay từ báo cáo gen / CREDIT-LOG; web chỉ hiển thị, không tự tính.
  // KAN-132/P29: đánh giá nhiều nguồn (Amin thủ công, ChatGPT độc lập, Claude V28), tách bạch; cột "Đánh giá"
  reviews?: Array<{ id: string; label: string; kind: string; by: string; date: string; headline: string; full: string[]; file: string; note?: string }>
  // KAN-132/P29: cột Input chỉ preview các asset chính (ảnh neo nhân vật + ảnh sản phẩm); file còn lại vào "Input phụ" (thu gọn)
  inputMain?: Array<{ path: string; role: string }>
  cost?: { tokens: string; tokensLeft?: string; attempts?: { anchor: number; clip1: number; clip2: number; total: number }; note?: string }
}

// KAN-115 B4: đánh giá cụ thể từng creative (ads vs social). Do Claude-A ghi, chờ verify.
export interface EvalVariant {
  tool: string; file: string; dur: number; res: string; audio: string
  gates: Record<string, string>   // G1–G7: Đạt | Sai | Không xác minh được
  Q: Record<string, number | null>; S: Record<string, number | null>
  adsScore: number; adsMax: number; socScore: number; socMax: number
  ads: string; soc: string; adsOk: boolean; socOk: boolean; blocked: boolean; unverified: number; note: string
}
export interface CreativeEval {
  date: string; by: string; verify: string
  flowV2: string; flowRaw: string
  seen: boolean
  variants?: EvalVariant[]
  bestTool?: string; ads: string; social: string; adsScore?: string; socScore?: string
  recommend: 'Giữ' | 'Sửa' | 'Bỏ' | 'Chưa đủ dữ liệu'; recommendNote: string
}

export interface ReadinessInput {
  // Kết quả chạy validate-flow1.py (do Claude ghi sau khi chạy thật)
  validator?: { result: 'READY' | 'INVALID' | 'BLOCKED'; at: string; note?: string }
  // asset_id trong store.assetLedger mà video này dùng
  ledgerIds?: string[]
  // Trần credit Amin duyệt bằng con số
  budget?: { cap: string; approved_at: string; note?: string }
  // Tiêu chí "Không áp dụng": key = số tiêu chí (chỉ 5), value = lý do
  na?: Record<string, string>
  // Bản Final cụ thể Amin duyệt (đường dẫn trùng video.media)
  final?: { file: string; approved_by: 'Amin'; at: string }
  // Lý do/ghi chú cổng (vd cổng C không áp dụng)
  gateNotes?: Partial<Record<GateKey, string>>
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
  // Id bài trên Zernio (lưu khi hẹn giờ) để đồng bộ trạng thái
  zernioId?: string
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
  /** Danh sách sản phẩm (WhiskerWall: 3 SP A/B/C). Tab Store info hiện danh sách này nếu có. */
  products?: StoreProduct[]
  creative: Video[]
  social: Record<ChannelKey, Channel>
  // Task Jira liên quan và các agent (Claude, Muse, Amin...) đang làm từng task
  tasks?: TaskLink[]
  // KAN-102: asset ledger của store (ảnh, video, nhạc dùng để làm video và quyền dùng)
  assetLedger?: AssetLedgerRow[]
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

export type VideoInput = { id: string; type: string; name: string; source: string; path: string; thumb: string; preview: 'video' | 'image' | 'audio' | 'none'; start?: number; end?: number; role: string; at: string; rights: string; verify: string; note: string }
