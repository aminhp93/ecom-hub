/** Điều hướng của Nhật ký phiên hiện tại (KAN-117): nhớ route trước đó và phần tử đã mở để đóng xong trả lại đúng chỗ. Chỉ nằm trong bộ nhớ, không phải nguồn dữ liệu. */
/** Route nhật ký: #/today/worklog/<KEY> hoặc #/today/worklog/<KEY>/<SECTION_ID>. SECTION_ID là đúng section_id của worklog (một id dùng chung web, worklog, Claude). */
export const WL_RE = /^#\/today\/worklog\/((?:KAN|GA|GEN)-\d+)(?:\/([A-Za-z0-9_-]{1,24}))?$/
export const SEC_RE = /^[A-Za-z0-9_-]{1,24}$/
export const wlHref = (k: string, sec?: string) => `#/today/worklog/${k}${sec ? `/${sec}` : ''}`
let ret: string | null = null
let opener: 'ft' | 'card' = 'card'
/** Gọi ngay trước khi chuyển sang #/today/worklog/<KEY> (click timer hoặc thẻ). */
export const rememberReturn = (from: 'ft' | 'card') => { if (!WL_RE.test(window.location.hash)) ret = window.location.hash; opener = from }
export const returnHash = (): string => (ret !== null ? ret : '#/today')
export const openerKind = () => opener
/** Hash dùng để chọn trang nền: khi đang mở nhật ký thì giữ trang trước đó, không nhảy sang tab Hôm nay. */
export const effectiveHash = (): string => (WL_RE.test(window.location.hash) ? returnHash() : window.location.hash)
