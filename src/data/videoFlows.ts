import type { GateKey, GateState, LedgerStatus, RightsStatus, VideoFlow } from './types'

// Tóm tắt từ 1-dropship/docs/3-creative/8-video-flows.md (v2.0, 16/11/2026, KAN-111). Sửa file doc thì cập nhật lại ở đây.
export const FLOW_DOC = '1-dropship/docs/3-creative/8-video-flows.md'
export const FLOW_DOC_VERSION = 'v2.0 · 16/11/2026'

export const FLOW_LABEL: Record<VideoFlow, string> = {
  A: 'Flow A · phân tích video đối thủ → đề xuất',
  B: 'Flow B · tự prompt từ thông tin sản phẩm',
  '1': '(cũ) Flow 1 · ảnh + prompt có biến',
  '2a': '(cũ) Flow 2a · rút cấu trúc ref bằng chữ',
  '2b': '(cũ) Flow 2b · upload video ref có quyền',
  '3': '(cũ) Flow 3 · remix, đã bỏ 16/11/2026',
}

export const ROUTER: { have: string; want: string; flow: string; note: string }[] = [
  { have: 'Video gốc của đối thủ (kho 3-creative/refs/doi-thu/)', want: 'Học hook/cấu trúc cho sản phẩm mình', flow: 'Flow A', note: 'Phân tích, chấm ≥ 8/12, viết structure_spec bằng chữ, đề xuất. Rights not_permitted: chỉ xem nội bộ, không upload vào Flow/Muse.' },
  { have: 'Thông tin sản phẩm + ảnh sản phẩm thật', want: 'Video mới tự nghĩ', flow: 'Flow B', note: 'Config YAML, validate-flow1.py → READY, prompt-flow.md / prompt-muse.md, cổng A, Amin duyệt trần, gen trên Google Flow (minhpham.piscada@gmail.com) hoặc Muse, cổng C/B.' },
]

export const DEFAULT_WORKFLOW = ['Flow A (phân tích ad, 0 credit)', 'Flow B (config + prompt, có trần credit)', 'Gen trên Flow/Muse → cổng C/B → Amin duyệt']

export const FALLBACK = [
  'Google Flow đăng nhập minhpham.piscada@gmail.com (kiểm watermark Veo)',
  'Muse (tài khoản Amin; email khác: Trống)',
  'Higgsfield tạm không dùng (hết credit), chỉ lấy cảm hứng từ prompt cũ',
]

export const P0_EVIDENCE = 'Đã bỏ Flow 3 (remix/HyperFrames) ngày 16/11/2026 theo quyết định của Amin. Video làm trước đó vẫn giữ nhãn flow cũ (1/2a/2b/3).'

export const GATES: [GateKey, string][] = [['A', 'Cổng A · prompt'], ['C', 'Cổng C · ảnh neo'], ['B', 'Cổng B · video']]

export const GATE_TONE: Record<GateState, string> = { 'Đạt': 'ok', 'Không đạt': 'bad', 'Chưa review': 'warn', 'Không áp dụng': 'idle' }
export const RIGHTS_TONE: Record<RightsStatus, string> = { owned: 'ok', licensed: 'ok', permitted: 'ok', unknown: 'warn', not_permitted: 'bad' }
export const LEDGER_TONE: Record<LedgerStatus, string> = { approved: 'ok', pending: 'warn', blocked: 'bad' }
