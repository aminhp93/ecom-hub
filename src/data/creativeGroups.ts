import type { Video } from './types'

/**
 * Nhóm Creative theo Creative ID (KAN-129/UI-CREATIVE, quy tắc: 0-dashboard/quy-trinh/quy-tac-creative-id-version.md).
 * Tên video `<store>-<id 3 số>-<lần gen 2 số>`; Creative ID = `<store>-<id>`; version = số lần gen.
 * Active = version có số lớn nhất hiện có, trừ khi một version trong nhóm có `activeVersion` (số hoặc "02") ghi đè.
 * Chỉ đổi cách hiển thị: không xoá, không ghi đè dữ liệu version cũ. ID không theo mẫu (R7-V15, PT1-A1...) = nhóm riêng 1 phần tử, không nhãn version.
 */
const RE = /^(.+-\d{3})-(\d{2})$/

export interface CreativeGroup {
  /** Creative ID (vd aquanest-135); ID cũ không theo mẫu thì = id video */
  key: string
  /** Version đang hiện (bản phát/hiển thị trên thẻ) */
  active: Video
  /** Nhãn version đang hiện, vd "v02"; rỗng nếu ID không theo mẫu */
  label: string
  /** Mọi version khác trong nhóm (cũ → mới) cho mục Lịch sử phiên bản; kèm archive lồng sẵn của từng bản */
  history: Video[]
  /** Tổng số version trong nhóm (kể cả active) */
  total: number
}

export const parseVid = (id: string): { key: string; ver: number } | null => {
  const m = RE.exec(id)
  return m ? { key: m[1], ver: Number(m[2]) } : null
}
const asNum = (x: unknown): number | null => { if (x === undefined || x === null || x === '') return null; const n = Number(x); return Number.isFinite(n) ? n : null }

export function groupCreatives(list: Video[]): CreativeGroup[] {
  const order: string[] = []
  const by = new Map<string, Video[]>()
  for (const v of list) {
    const p = parseVid(v.id)
    const k = p ? p.key : v.id
    if (!by.has(k)) { by.set(k, []); order.push(k) }
    by.get(k)!.push(v)
  }
  return order.map((key) => {
    const vs = by.get(key)!
    const ver = (v: Video) => parseVid(v.id)?.ver ?? 0
    const sorted = [...vs].sort((a, b) => ver(a) - ver(b))
    const forced = sorted.map((v) => asNum((v as Video & { activeVersion?: number | string }).activeVersion)).find((n) => n !== null) ?? null
    const active = (forced !== null ? sorted.find((v) => ver(v) === forced) : undefined) ?? sorted[sorted.length - 1]
    const history = sorted.filter((v) => v !== active)
    return { key, active, label: parseVid(active.id) ? `v${String(ver(active)).padStart(2, '0')}` : '', history, total: sorted.length }
  })
}
