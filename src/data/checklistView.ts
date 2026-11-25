import type { Video } from './types'

/**
 * KAN-129/UI-CREATIVE: cách TRÌNH BÀY checklist (không đổi dữ liệu verify gốc trong store.json).
 * 4 nhóm cố định, tên tiêu chí theo ngôn ngữ người dùng, mã N0/D2/Q1, tier M/C/O và stage G/P ẩn mặc định (chỉ nằm ở tooltip).
 */
type Item = NonNullable<Video['flowChecks']>['groups'][number]['items'][number]
export type CkStatus = Item['s']
export const CK_LABEL: Record<CkStatus, string> = { ok: 'Đạt', bad: 'Không đạt', unk: 'Chưa xác minh', na: 'Không áp dụng' }
export const CK_ICON: Record<CkStatus, string> = { ok: '✓', bad: '✕', unk: '?', na: '–' }

export const CK_GROUPS = [
  { id: 'input', name: 'Nguồn đầu vào' },
  { id: 'script', name: 'Kịch bản & sản phẩm' },
  { id: 'audio', name: 'Chữ & âm thanh' },
  { id: 'tech', name: 'Kỹ thuật' },
] as const
export type CkGroupId = (typeof CK_GROUPS)[number]['id']
const groupOf = (k: string): CkGroupId => (k[0] === 'N' ? 'input' : k[0] === 'D' || k[0] === 'Q' ? 'script' : k[0] === 'T' ? 'audio' : 'tech')

const PLAIN: Record<string, string> = {
  'Dòng brief đủ': 'Brief đầy đủ',
  'Nguồn clip': 'Dựng từ footage nguồn/đối thủ đã lưu',
  'Nguồn clip trong bảng cắt ghép': 'Dựng từ footage nguồn/đối thủ đã lưu (có trong bảng cắt ghép)',
  'Clip đúng đoạn': 'Đoạn clip được chọn đúng vai',
  'Clip đúng đoạn Hook → Value → CTA': 'Đoạn clip được chọn đúng vai (Hook → Value → CTA)',
  'Không chữ/logo bên thứ ba': 'Không có chữ/logo của bên thứ ba',
  'Lưu đủ input vào folder creative': 'Đã lưu đủ file đầu vào',
  'Lưu đủ input (clip, overlay, audio)': 'Đã lưu đủ file đầu vào (clip, chữ, audio)',
  'Ảnh neo đúng sản phẩm': 'Ảnh neo đúng sản phẩm thật',
  'Chất lượng ảnh neo/khung đầu': 'Chất lượng ảnh neo / khung đầu',
  'Quyền asset': 'Quyền sử dụng asset',
  'Product Truth': 'Thông tin sản phẩm đúng thực tế',
  'Prompt phòng lỗi': 'Prompt có phòng lỗi',
  'Prompt phòng lỗi (1 hành động/shot + negative)': 'Prompt có phòng lỗi (1 hành động/shot, có negative)',
  'Product Truth + prompt phòng lỗi': 'Thông tin sản phẩm đúng thực tế + prompt phòng lỗi',
  'Trần credit + cấu hình': 'Cấu hình và trần credit',
  'Video tham chiếu có nguồn/ID': 'Video tham chiếu có nguồn/ID',
  'Cấu trúc rút ra → angle + storyboard': 'Cấu trúc rút ra thành angle + storyboard',
  'Khung đầu/ảnh neo': 'Khung đầu / ảnh neo',
  'Angle + insight có nguồn': 'Angle và insight có nguồn',
  'Storyboard có mốc giây': 'Storyboard có mốc giây',
  'Hook 0–3 s': 'Hook 3 giây đầu',
  'Hook dừng lướt (điểm 1–3)': 'Chất lượng hook 3 giây',
  'Sản phẩm của store': 'Đúng sản phẩm của store',
  'Sản phẩm của store, rõ': 'Đúng sản phẩm của store, nhìn rõ',
  'Sản phẩm của store, đúng hình': 'Đúng sản phẩm của store, đúng hình',
  'Sản phẩm đúng hình, rõ': 'Sản phẩm đúng hình, nhìn rõ',
  'Value/lợi ích': 'Thể hiện giá trị sản phẩm',
  'Value, không claim cấm': 'Thể hiện giá trị sản phẩm, không claim cấm',
  'Hành động khớp storyboard': 'Hành động khớp storyboard',
  'Hành động khớp kế hoạch': 'Hành động khớp kế hoạch',
  'Không claim cấm': 'Không có claim bị cấm',
  'Không sao chép ref': 'Không sao chép nguyên video tham chiếu',
  'CTA cuối': 'CTA cuối video',
  'Thứ tự Hook→Value→CTA': 'Thứ tự Hook → Value → CTA',
  'Thứ tự khớp EDL': 'Thứ tự cảnh khớp bảng cắt ghép',
  'Chữ đọc được': 'Chữ đọc được',
  'Chữ đọc được, đúng mốc': 'Chữ đọc được, đúng mốc',
  'Voice': 'Voice (lời dẫn)',
  'Nhạc': 'Nhạc riêng',
  'Âm thanh đã nghe + có quyền': 'Âm thanh (đã nghe, có quyền dùng)',
  '9:16 ≥720p': '9:16, từ 720p',
  '9:16, ≥720p': '9:16, từ 720p',
  'Ghép liền mạch': 'Ghép liền mạch',
  'Liên tục, không lỗi AI': 'Liền mạch, không lỗi AI',
  'Thời lượng + vùng an toàn theo kênh': 'Thời lượng và vùng an toàn chữ (safe zone) theo kênh',
  'Nhãn AI': 'Nhãn AI lúc đăng',
  'Nhãn AI khi đăng': 'Nhãn AI lúc đăng',
  'Nhãn AI (phần clip AI)': 'Nhãn AI lúc đăng (phần clip AI)',
}
export function plainLabel(t: string): string {
  if (/^Footage có quyền/.test(t)) return 'Quyền sử dụng footage' // luật 11: quyền là tiêu chí riêng, không ghi "không clip đối thủ"
  return PLAIN[t] ?? t
}
/** Nhãn flow theo luật hiện hành (AGENTS.md luật 11) */
export const F3_LABEL = 'Dựng từ footage nguồn/đối thủ đã lưu'
export const flowTextFix = (s: string) => s.replace(/dựng\/cắt ghép từ clip tự gen/gi, 'dựng từ footage nguồn/đối thủ đã lưu').replace(/Dựng từ footage có quyền/g, F3_LABEL)

export interface CkRow { k: string; label: string; s: CkStatus; why: string; src: string; full: string; tip: string; tier: 'M' | 'C' | 'O'; cond?: string; ft?: 'Chặn' | 'Hậu kỳ'; stage?: 'G' | 'P' }
export interface CkView { counts: Record<CkStatus, number>; total: number; groups: { id: CkGroupId; name: string; rows: CkRow[] }[] }

const short = (t: string, n: number) => (t.length > n ? t.slice(0, n - 1).trimEnd() + '…' : t)
function splitNote(n: string): { why: string; src: string } {
  const [head, ...rest] = n.split(/\s·\s*nguồn:\s*/i)
  let src = rest.join(' ').trim()
  if (!src) src = (/((?:input|output)\/[\w./-]+|DANH-GIA[^,;·]*|task-hub\/[\w./-]+)/.exec(n)?.[1]) ?? ''
  const first = head.split(/(?<=[.;])\s/)[0]
  return { why: short(first, 90), src: short(src, 48) }
}

/** Đếm đủ MỌI tiêu chí (kể cả optional và không áp dụng). Kết luận cổng là dữ liệu riêng (verdict). */
export function checklistView(v: Video): CkView | null {
  const fc = v.flowChecks
  if (!fc) return null
  const counts: Record<CkStatus, number> = { ok: 0, bad: 0, unk: 0, na: 0 }
  const buckets = new Map<CkGroupId, CkRow[]>()
  for (const g of fc.groups) for (const i of g.items) {
    counts[i.s]++
    const { why, src } = splitNote(i.n ?? '')
    const gid = groupOf(i.k)
    const tip = `Mã ${i.k} · ${i.tier === 'M' ? 'bắt buộc' : i.tier === 'C' ? 'có điều kiện' : 'tùy chọn'}${i.stage ? ` · cổng ${i.stage === 'G' ? 'sẵn sàng gen' : 'sẵn sàng đăng'}` : ''}${i.ft ? ` · lỗi ${i.ft}` : ''}`
    if (!buckets.has(gid)) buckets.set(gid, [])
    buckets.get(gid)!.push({ k: i.k, label: plainLabel(i.t), s: i.s, why: why || '—', src, full: i.n ?? '', tip, tier: i.tier, cond: i.cond, ft: i.ft, stage: i.stage })
  }
  return { counts, total: counts.ok + counts.bad + counts.unk + counts.na, groups: CK_GROUPS.filter((g) => buckets.has(g.id)).map((g) => ({ id: g.id, name: g.name, rows: buckets.get(g.id)! })) }
}
export const countText = (c: Record<CkStatus, number>) => `${c.ok} đạt · ${c.bad} không đạt · ${c.unk} chưa xác minh · ${c.na} không áp dụng`
