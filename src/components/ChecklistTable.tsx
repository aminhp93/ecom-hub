import { useEffect, useState } from 'react'
import type { Video } from '../data/types'
import { checklistView, countText, CK_ICON, CK_LABEL, type CkRow } from '../data/checklistView'
import { Modal } from './Modal'
import { Markdown } from './Markdown'

/** Bộ đếm chữ ở cell Checklist mặc định (đủ mọi tiêu chí). */
export function ChecklistCount({ v }: { v: Video }) {
  const c = checklistView(v)
  if (!c) return null
  return (
    <div className="ck-count" aria-label={`Checklist ${c.total} tiêu chí: ${countText(c.counts)}`}>
      <span className="ck-ok">{c.counts.ok} đạt</span> · <span className="ck-bad">{c.counts.bad} không đạt</span> · <span className="ck-unk">{c.counts.unk} chưa xác minh</span> · <span className="ck-na">{c.counts.na} không áp dụng</span>
    </div>
  )
}

// ---- Định nghĩa tiêu chí: đọc từ file md template qua /preview sẵn có (không backend mới) ----
const V4 = 'task-hub/KAN-120/output/checklist/TEMPLATE-CHECKLIST-VIDEO-v4-2026-11-20.md'
const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/')
const mdCache = new Map<string, Promise<string | null>>()
const readMd = (p: string) => {
  if (!mdCache.has(p)) mdCache.set(p, fetch(`/preview/0-dashboard/${enc(p)}`).then((r) => (r.ok ? r.text() : null)).catch(() => null))
  return mdCache.get(p)!
}
const cellsOf = (l: string) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())
const isSepLine = (l: string) => /^\s*\|?\s*:?-{2,}/.test(l)
/** Tìm dòng của tiêu chí `k` trong các bảng của file md; trả các cặp (tên cột, giá trị) trừ cột Mã. */
const words = (t: string) => new Set((t.toLowerCase().match(/[\p{L}\p{N}]{3,}/gu) ?? []))
/** Cùng mã có thể khác nghĩa giữa các template (F1/F2/F3): chỉ nhận dòng khi tên tiêu chí trong file có ít nhất một từ trùng với tên đang hiển thị. */
const sameCriterion = (cols: { col: string; val: string }[], label: string) => { const t = cols.find((x) => x.col === 'Tiêu chí')?.val; if (!t) return true; const a = words(label); return [...words(t)].some((w) => a.has(w)) }
function defOf(md: string, k: string, label: string): { col: string; val: string }[] | null {
  const L = md.split('\n')
  let head: string[] = []
  for (let i = 0; i < L.length; i++) {
    if (!L[i].includes('|')) continue
    if (isSepLine(L[i + 1] ?? '') && !isSepLine(L[i])) { head = cellsOf(L[i]); continue }
    if (isSepLine(L[i])) continue
    const c = cellsOf(L[i])
    if (head.length && c.findIndex((x) => x.replace(/[~*]/g, '') === k) >= 0) { const cols = c.map((val, j) => ({ col: head[j] ?? '', val })); return sameCriterion(cols, label) ? cols.filter((x) => x.val && x.col && !['Mã', 'Nhóm', 'Mức', 'Cổng'].includes(x.col)) : null }
  }
  return null
}

const TIER = { M: 'Bắt buộc', C: 'Có điều kiện', O: 'Tùy chọn' } as const
const NEXT: Record<CkRow['s'], (r: CkRow) => string> = {
  ok: () => 'Không cần làm thêm cho tiêu chí này.',
  bad: (r) => `Sửa để đạt (${r.ft === 'Hậu kỳ' ? 'hậu kỳ, không tốn credit gen' : 'gen lại hoặc đổi nguồn'}), rồi chấm lại và ghi bằng chứng mới.`,
  unk: () => 'Xác minh: xem video/file liên quan, đối chiếu định nghĩa ở trên, rồi ghi đạt hoặc không đạt kèm bằng chứng.',
  na: () => 'Không áp dụng cho creative này; không cần làm.',
}
const PATH_RE = /(?:1-dropship|0-dashboard|task-hub|input|output)\/[^\s,;·()]+\.[A-Za-z0-9]{2,5}/g
const absPath = (p: string, id: string, store: string) => (p.startsWith('input/') || p.startsWith('output/') ? `1-dropship/stores/${store}/3-creative/${id}/${p}` : p.startsWith('task-hub/') ? `0-dashboard/${p}` : p)

function Detail({ v, r, flowSrc, groupName, onClose }: { v: Video; r: CkRow; flowSrc?: string; groupName: string; onClose: () => void }) {
  const [def, setDef] = useState<{ col: string; val: string }[] | null | undefined>(undefined)
  const srcPath = /task-hub\/[\w./-]+\.md/.exec(flowSrc ?? '')?.[0]
  // Chỉ file dạng checklist/template mới chứa định nghĩa tiêu chí; file DANH-GIA chỉ là nguồn chấm
  const srcMd = srcPath && /CHECKLIST|TEMPLATE/i.test(srcPath) ? srcPath : V4
  useEffect(() => {
    let live = true
    readMd(srcMd).then(async (t) => {
      let d = t ? defOf(t, r.k, r.label) : null
      if (!d && srcMd !== V4) { const t4 = await readMd(V4); d = t4 ? defOf(t4, r.k, r.label) : null }
      if (live) setDef(d)
    })
    return () => { live = false }
  }, [srcMd, r.k])
  const store = v.id.split('-')[0]
  const paths = Array.from(new Set(r.full.match(PATH_RE) ?? [])).map((p) => absPath(p, v.id, store))
  const link = (p: string) => `[${p}](/preview/${enc(p)})`
  const imgs = paths.filter((p) => /\.(jpe?g|png|webp)$/i.test(p))
  const nums = Array.from(new Set(Array.from(r.full.matchAll(/\b\d+(?:[.,]\d+)?\s?(?:s|giây|p|px|fps|MB|kB|%)(?![\w])/g)).map((m) => m[0])))
  const next = v.verdict?.reasons?.next
  const parts = r.full.split(' · ')
  const md = [
    '## Tiêu chí',
    `- **Tên tiêu chí:** ${r.label} (mã \`${r.k}\`)`,
    `- **Mức:** ${TIER[r.tier]}${r.cond ? ` (điều kiện: ${r.cond})` : ''}`,
    `- **Thuộc cổng:** ${r.stage === 'G' ? 'G · Sẵn sàng gen (kiểm trước khi gen)' : r.stage === 'P' ? 'P · Sẵn sàng đăng (kiểm trên video đã gen)' : 'dữ liệu chưa ghi cổng'} · nhóm ${groupName}`,
    def === undefined ? '- **Định nghĩa / cách kiểm:** đang đọc file template…' : def && def.length ? def.map((d) => `- **${d.col === 'Tiêu chí' ? 'Định nghĩa trong template' : d.col}:** ${d.val}`).join('\n') : '- **Định nghĩa / cách kiểm:** chưa có định nghĩa chi tiết trong file template.',
    `- **Nguồn định nghĩa:** [${srcMd}](/preview/0-dashboard/${enc(srcMd)})`,
    '## Trạng thái',
    `**${CK_ICON[r.s]} ${CK_LABEL[r.s]}**${r.ft && r.s === 'bad' ? ` · loại lỗi: ${r.ft}` : ''} · creative \`${v.id}\``,
    `## Giải thích: vì sao ${r.s === 'ok' ? 'đạt' : r.s === 'bad' ? 'chưa đạt' : r.s === 'na' ? 'không áp dụng' : 'chưa xác minh được'}`,
    r.full ? parts[0] : 'Chưa có giải thích chi tiết trong dữ liệu.',
    ...(parts.length > 1 ? ['', parts.slice(1).join(' · ')] : []),
    '## Bằng chứng',
    paths.length ? paths.map((p) => `- ${link(p)}`).join('\n') : '- Chưa có đường dẫn file bằng chứng riêng cho tiêu chí này trong dữ liệu.',
    ...(srcPath ? [`- Nguồn chấm của creative: [${srcPath}](/preview/0-dashboard/${enc(srcPath)})`] : []),
    ...(nums.length ? [`- Số đo trong ghi chú: ${nums.join(', ')}`] : []),
    '## Việc tiếp',
    NEXT[r.s](r),
    ...(r.s !== 'ok' && r.s !== 'na' && next ? [`- Bước tiếp của creative: ${next}`] : []),
    ...(v.flowChecks?.gateGen && r.stage === 'G' && r.s !== 'ok' && r.s !== 'na' ? [`- Cổng gen: ${v.flowChecks.gateGen}`] : []),
  ].join('\n')
  return (
    <Modal title={`${r.k} · ${r.label}`} onClose={onClose} wide>
      <Markdown text={md} />
      {imgs.length > 0 && <div className="ckt-imgs">{imgs.slice(0, 4).map((p) => <a key={p} href={`/preview/${enc(p)}`} target="_blank" rel="noreferrer"><img src={`/preview/${enc(p)}`} alt={`Bằng chứng ${p.split('/').pop()}`} loading="lazy" onError={(e) => { const a = e.currentTarget.parentElement; if (a) a.style.display = 'none' }} /></a>)}</div>}
      <div className="rowact"><button type="button" className="btn" onClick={onClose}>Đóng</button></div>
    </Modal>
  )
}

/** Bảng checklist 2 cột: Tiêu chí | Trạng thái. Chi tiết (định nghĩa, giải thích, bằng chứng, việc tiếp) mở bằng nút mắt trong popup (KAN-132/P11). */
export function ChecklistTable({ v }: { v: Video }) {
  const c = checklistView(v)
  const [sel, setSel] = useState<{ r: CkRow; g: string } | null>(null)
  if (!c) return null
  return (
    <div className="ckt" aria-label="Checklist theo flow">
      <div className="ckt-sum"><b>{c.total} tiêu chí:</b> <ChecklistCount v={v} /></div>
      <div className="ckt-wrap">
        <table className="ckt-t ckt-2">
          <thead><tr><th>Tiêu chí</th><th>Trạng thái</th></tr></thead>
          {c.groups.map((g) => (
            <tbody key={g.id}>
              <tr className="ckt-g"><th colSpan={2} scope="colgroup">{g.name}</th></tr>
              {g.rows.map((r) => (
                <tr key={`${v.id}:${r.k}`} className={`ckt-r ck-${r.s}`}>
                  <td title={r.tip}>
                    <span className="ckt-lbl">{r.label}</span>
                    <button type="button" className="ckt-eye" aria-label={`Xem chi tiết ${r.k} ${r.label}`} title="Xem chi tiết" onClick={() => setSel({ r, g: g.name })}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
                    </button>
                  </td>
                  <td><span className={`ckt-st ck-${r.s}`}><span aria-hidden="true">{CK_ICON[r.s]}</span> {CK_LABEL[r.s]}</span></td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
      {sel && <Detail v={v} r={sel.r} groupName={sel.g} flowSrc={v.flowChecks?.source} onClose={() => setSel(null)} />}
    </div>
  )
}
