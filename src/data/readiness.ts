import type { Store, Video } from './types'

// Bảng điểm "Mức sẵn sàng" của một creative: 8 tiêu chí, tính tự động từ store.json
// (productInfo, assetLedger, video.gates, video.readiness). Không có chỗ nhập điểm thủ công.
export type CState = 'pass' | 'fail' | 'pending' | 'na'
export interface Criterion { n: number; label: string; state: CState; evidence: string; date: string }
export type ReadyLabel = 'Draft' | 'Blocked' | 'Ready to generate' | 'In review' | 'Final approved'
export interface Readiness { criteria: Criterion[]; score: number; pct: number; label: ReadyLabel; blocker?: Criterion }

export const CRITERIA = [
  'Product Truth đầy đủ, không có claim sai',
  'Config hợp lệ, validator đạt',
  'Asset có ledger và quyền sử dụng phù hợp',
  'Prompt qua cổng A',
  'Ảnh neo qua cổng C (hoặc không áp dụng, có lý do)',
  'Video qua cổng B',
  'Trần credit đã được Amin duyệt',
  'Bản Final cụ thể đã được Amin duyệt',
]
const FORBIDDEN = ['vừa mọi bể', 'fits every', 'fit every tank', 'made in usa', 'no measuring', 'an toàn cho mèo', 'safe for cat', 'warranty', 'bảo hành']
const OK_RIGHTS = ['owned', 'licensed', 'permitted']

export function computeReadiness(store: Store, v: Video): Readiness {
  const r = v.readiness ?? {}
  const upd = v.last_updated ?? ''
  const c: Criterion[] = []
  const add = (n: number, state: CState, evidence: string, date = upd) => c.push({ n, label: CRITERIA[n - 1], state, evidence, date })

  // 1. Product Truth
  const claimRow = store.productInfo.find((x) => /claim/i.test(x.name))
  const prompt = (v.kit?.prompt ?? '').split(/Avoid:|Negative:/i)[0].toLowerCase()
  const hit = FORBIDDEN.find((f) => prompt.includes(f))
  if (hit) add(1, 'fail', `Prompt chứa claim cấm: "${hit}"`)
  else if (!claimRow || !claimRow.value.trim()) add(1, 'pending', 'Product Information chưa có mục "Claim được / không được"', store.updated)
  else add(1, 'pass', `Claim được/không được đã điền (${claimRow.evidence || 'chưa gắn nhãn bằng chứng'}); prompt không chứa claim cấm`, claimRow.date || store.updated)

  // 2. Validator
  if (!r.validator) add(2, 'pending', 'Chưa chạy validate-flow1.py')
  else add(2, r.validator.result === 'READY' ? 'pass' : 'fail', `validate-flow1.py = ${r.validator.result}${r.validator.note ? ': ' + r.validator.note : ''}`, r.validator.at)

  // 3. Ledger + quyền
  const ids = r.ledgerIds ?? []
  if (!ids.length) add(3, 'pending', 'Chưa gắn asset nào vào ledger (readiness.ledgerIds)')
  else {
    const rows = ids.map((id) => ({ id, row: (store.assetLedger ?? []).find((x) => x.asset_id === id) }))
    const missing = rows.filter((x) => !x.row).map((x) => x.id)
    const bad = rows.filter((x) => x.row && (x.row.status === 'blocked' || x.row.rights_status === 'not_permitted')).map((x) => x.id)
    const notOk = rows.filter((x) => x.row && !(x.row.status === 'approved' && OK_RIGHTS.includes(x.row.rights_status))).map((x) => `${x.id} (${x.row!.rights_status}/${x.row!.status})`)
    if (bad.length) add(3, 'fail', `Bị chặn hoặc không có quyền: ${bad.join(', ')}`)
    else if (missing.length) add(3, 'pending', `Chưa có dòng ledger: ${missing.join(', ')}`)
    else if (notOk.length) add(3, 'pending', `Chờ xác nhận quyền: ${notOk.join(', ')}`)
    else add(3, 'pass', `Ledger approved, quyền hợp lệ: ${ids.join(', ')}`)
  }

  // 4–6 cổng A/C/B
  const g = v.gates ?? {}
  const gate = (n: number, k: 'A' | 'C' | 'B', name: string) => {
    const s = g[k]
    if (s === 'Đạt') add(n, 'pass', `Cổng ${k} (${name}): Đạt`)
    else if (s === 'Không đạt') add(n, 'fail', `Cổng ${k} (${name}): Không đạt`)
    else if (s === 'Không áp dụng') {
      const why = r.na?.[String(n)] || r.gateNotes?.[k]
      if (n === 5 && why) add(n, 'na', `Không áp dụng: ${why}`)
      else add(n, 'pending', `Cổng ${k} ghi "Không áp dụng" nhưng thiếu lý do`)
    } else add(n, 'pending', `Cổng ${k} (${name}): chưa review độc lập`)
  }
  gate(4, 'A', 'prompt'); gate(5, 'C', 'ảnh neo'); gate(6, 'B', 'video')

  // 7. Trần credit
  if (r.budget?.cap && r.budget.approved_at) add(7, 'pass', `Amin duyệt trần ${r.budget.cap}${r.budget.note ? ' · ' + r.budget.note : ''}`, r.budget.approved_at)
  else add(7, 'pending', 'Chưa có trần credit Amin duyệt bằng con số')

  // 8. Final (chỉ khi 1–7 đã đủ)
  const satisfied = c.every((x) => x.state === 'pass' || x.state === 'na')
  if (r.final && r.final.approved_by === 'Amin' && r.final.file && r.final.file === v.media) {
    if (satisfied) add(8, 'pass', `Amin duyệt Final: ${r.final.file.split('/').pop()}`, r.final.at)
    else add(8, 'pending', 'Amin đã duyệt file nhưng tiêu chí 1–7 chưa đủ', r.final.at)
  } else if (r.final && r.final.file !== v.media) add(8, 'pending', 'File Final đã duyệt khác với video hiện tại, cần duyệt lại', r.final.at)
  else add(8, 'pending', v.media ? 'Có video nhưng Amin chưa duyệt bản Final' : 'Chưa có video để duyệt Final')

  const score = c.filter((x) => x.state === 'pass' || x.state === 'na').length
  const failed = c.find((x) => x.state === 'fail')
  const blocker = failed ?? c.find((x) => x.state === 'pending')
  const gateOk = [1, 2, 3, 4, 5, 7].every((n) => ['pass', 'na'].includes(c[n - 1].state))
  const label: ReadyLabel = score === 8 ? 'Final approved' : failed ? 'Blocked' : v.media ? 'In review' : gateOk ? 'Ready to generate' : 'Draft'
  return { criteria: c, score, pct: Math.round((score / 8) * 100), label, blocker }
}

export const READY_TONE: Record<ReadyLabel, string> = { Draft: 'idle', Blocked: 'bad', 'Ready to generate': 'warn', 'In review': 'warn', 'Final approved': 'ok' }
