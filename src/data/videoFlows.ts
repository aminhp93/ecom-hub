import type { GateKey, GateState, LedgerStatus, RightsStatus, VideoFlow } from './types'

// Tóm tắt từ 1-dropship/docs/3-creative/8-video-flows.md (v1.0, 13/11/2026, KAN-102). Sửa file doc thì cập nhật lại ở đây.
export const FLOW_DOC = '1-dropship/docs/3-creative/8-video-flows.md'
export const FLOW_DOC_VERSION = 'v1.0 · 13/11/2026'

export const FLOW_LABEL: Record<VideoFlow, string> = {
  '1': 'Flow 1 · ảnh + prompt có biến',
  '2a': 'Flow 2a · rút cấu trúc ref bằng chữ',
  '2b': 'Flow 2b · upload video ref có quyền',
  '3': 'Flow 3 · remix asset sạch quyền',
}

export const ROUTER: { have: string; want: string; flow: string; note: string }[] = [
  { have: 'Ảnh sản phẩm (hoặc mô tả chữ) + angle', want: 'Video mới', flow: 'Flow 1', note: 'Config YAML, chạy validate-flow1.py → READY mới render prompt (cổng A), báo giá thật, Amin duyệt trần, ảnh neo (cổng C), clip (cổng B).' },
  { have: 'Một video chạy tốt (ads đối thủ, video hook hay)', want: 'Bắt cấu trúc/hook đó cho sản phẩm mình', flow: 'Flow 2', note: 'Luôn làm 2a trước (structure_spec bằng chữ, 0 credit). 2b chỉ khi ref là owned/licensed/permitted và Amin duyệt riêng; ref đối thủ không bao giờ upload.' },
  { have: 'Video/ảnh/nhạc sạch quyền của mình', want: 'Biến thể nhanh, 0 credit', flow: 'Flow 3', note: 'Ghi ledger trước khi dùng, edit plan, dựng bằng ffmpeg/HyperFrames, chữ PNG phủ, nhãn AI, cổng B + compliance.' },
]

export const DEFAULT_WORKFLOW = ['Flow 2a (cấu trúc bằng chữ, 0 credit)', 'Flow 1 (gen asset sạch, có trần credit)', 'Flow 3 (nhân biến thể từ video đã Đạt, 0 credit)']

export const FALLBACK = [
  'Flow 1 trên Google Flow (Veo/Omni; chấp nhận 8 s, kiểm watermark)',
  'Muse khi Amin giao (đếm số lần gen)',
  'Flow 3 thuần từ video đã duyệt',
  'Flow 2b/Genjutsu (chỉ ref owned/licensed/permitted và Amin duyệt riêng)',
]

export const P0_EVIDENCE = 'Bằng chứng P0 (13/11/2026): Flow 3 chỉ chạy được ở store có asset sạch (WhiskerWall); AquaNest và HeartBond bị chặn vì asset hiện có chưa rõ quyền hoặc dính watermark. Vì vậy Flow 1 phải đi trước.'

export const GATES: [GateKey, string][] = [['A', 'Cổng A · prompt'], ['C', 'Cổng C · ảnh neo'], ['B', 'Cổng B · video']]

export const GATE_TONE: Record<GateState, string> = { 'Đạt': 'ok', 'Không đạt': 'bad', 'Chưa review': 'warn', 'Không áp dụng': 'idle' }
export const RIGHTS_TONE: Record<RightsStatus, string> = { owned: 'ok', licensed: 'ok', permitted: 'ok', unknown: 'warn', not_permitted: 'bad' }
export const LEDGER_TONE: Record<LedgerStatus, string> = { approved: 'ok', pending: 'warn', blocked: 'bad' }
