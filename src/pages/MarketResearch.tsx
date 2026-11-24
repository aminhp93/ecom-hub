import { useEffect, useState } from 'react'
import { MarketSeen } from './MarketProducts'
import { Modal } from '../components/Modal'
import { imageFor, imageUrl } from '../data/industryImages'

/**
 * Trang Market Research (nghiệp vụ, KAN-118): đúng 2 tab.
 *  1. "Sản phẩm tôi đã xem": 12 sản phẩm cũ (Legacy) + sản phẩm Amin tự thêm, kèm nguồn, note, quyết định.
 *  2. "Ngành đang đề xuất": top ngành (sản phẩm, lý do, angle, nhu cầu lặp lại, máy + tiêu hao, rủi ro, cần verify)
 *     và ở cuối cùng tab: "Ngành / niche nên tránh" (lý do + nhãn Chuẩn/Fact/Suy luận/Chưa verify).
 * Flow, tiêu chí, SOP nằm ở Tài liệu → Market Research (#/docs/market-research). Ngành và niche tránh đọc từ bảng trong
 * 1-dropship/docs/1-market-research/5-insight-nhu-cau-lap-lai.md (giữ nguyên tên cột khi sửa tài liệu).
 */

const DOC = '#/docs/market-research'
const docLink = (f?: string) => (f ? `${DOC}?f=${encodeURIComponent(f)}` : DOC)
const INSIGHT = '5-insight-nhu-cau-lap-lai.md'

type Src = 'amin' | 'muse' | 'legacy'
const SRC_LABEL: Record<Src, string> = { amin: 'Amin note', muse: 'Muse suggestion', legacy: 'Legacy result' }
const SrcBadge = ({ s }: { s: Src }) => <span className={`badge src-${s}`}>{SRC_LABEL[s]}</span>

// ---- đọc bảng Markdown từ tài liệu canonical
type Row = Record<string, string>
function parseTable(md: string): Row[] {
  const lines = md.replace(/\r/g, '').split('\n').filter((l) => l.trim().startsWith('|'))
  if (lines.length < 3) return []
  const cells = (l: string) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim().replace(/`/g, '').replace(/\*\*/g, ''))
  const head = cells(lines[0])
  return lines.slice(2).map((l) => { const c = cells(l); return Object.fromEntries(head.map((h, i) => [h, c[i] ?? ''])) })
}

interface Doc { dir: string; version: string; industries: Row[]; products: Row[]; avoid: Row[] }
function useDoc(): { doc: Doc | null; err: string } {
  const [doc, setDoc] = useState<Doc | null>(null)
  const [err, setErr] = useState('')
  useEffect(() => {
    let alive = true
    ;(async () => {
      const s = await (await fetch('/research/sources')).json()
      if (s.error) throw new Error(s.error)
      const dir: string = s.standard.dir
      const file = `${dir}/${INSIGHT}`
      const sec = async (h: string) => { const r = await fetch(`/research/section?path=${encodeURIComponent(file)}&h=${encodeURIComponent(h)}`); return r.ok ? r.text() : '' }
      const [ind, prod, avo] = await Promise.all([sec('Bảng ngành tiềm năng'), sec('Sản phẩm theo ngành'), sec('Niche / sản phẩm nên tránh')])
      const v = (s.standard.files as { name: string; version: string }[]).find((f) => f.name === INSIGHT)?.version ?? ''
      if (alive) setDoc({ dir, version: v, industries: parseTable(ind), products: parseTable(prod), avoid: parseTable(avo) })
    })().catch((e) => { if (alive) setErr(String(e.message ?? e)) })
    return () => { alive = false }
  }, [])
  return { doc, err }
}

const TONE = (s: string): string => (/chưa verify/i.test(s) ? 'warn' : 'ok')

const STATUS_BADGES = (s: string): { t: string; c: string }[] => {
  const o: { t: string; c: string }[] = []
  if (/Fact/.test(s)) o.push({ t: 'Fact', c: 'lb-f' })
  if (/Suy luận/.test(s)) o.push({ t: 'Suy luận', c: 'lb-s' })
  if (/Chưa verify|Chưa xác minh/.test(s)) o.push({ t: 'Chưa verify', c: 'lb-q' })
  return o
}

const PHOTO_OK = /^photo-[\w-]+$/
const unsplash = (p: string, w: number) => `https://images.unsplash.com/${p}?auto=format&fit=crop&w=${w}&q=70`
/** Đọc 2 cột "Ảnh minh họa" + "Nguồn ảnh" từ tài liệu: "<tác giả>; <trang ảnh>; <giấy phép>; <nhãn>". Không có ảnh hợp lệ -> null. */
function photoOf(r: Row): { p: string; by: string; page: string; license: string; label: string } | null {
  const p = (r['Ảnh minh họa'] || '').trim()
  if (!PHOTO_OK.test(p)) return null
  const [by = '', page = '', license = 'Unsplash License', label = 'Ảnh minh họa'] = (r['Nguồn ảnh'] || '').split(';').map((x) => x.trim())
  return { p, by, page: page.startsWith('https://unsplash.com/photos/') ? page : '', license, label }
}

function ProdThumb({ r, onOpen }: { r: Row; onOpen: (r: Row) => void }) {
  const ph = photoOf(r)
  const [bad, setBad] = useState(false)
  if (!ph || bad) return <div className="mr-pimg mr-pimg-none" role="img" aria-label={`Chưa có ảnh cho ${r['Sản phẩm']}`}>Chưa có ảnh</div>
  return (
    <button type="button" className="mr-pimg" onClick={() => onOpen(r)} aria-label={`Xem ảnh lớn: ${r['Sản phẩm']}`} title="Ảnh minh họa, bấm để phóng to">
      <img src={unsplash(ph.p, 240)} alt={`${r['Sản phẩm']} (ảnh minh họa)`} onError={() => setBad(true)} />
      <span className="mr-pimg-tag">Ảnh minh họa</span>
    </button>
  )
}

/** Bảng so sánh sản phẩm trong một ngành: mỗi sản phẩm một dòng; mobile chuyển thành thẻ có nhãn cột. */
function Compare({ rows }: { rows: Row[] }) {
  const [big, setBig] = useState<Row | null>(null)
  const bigPh = big ? photoOf(big) : null
  if (rows.length === 0) return <p className="note">Chưa có bảng sản phẩm cho ngành này trong <code>{INSIGHT}</code> (mục “Sản phẩm theo ngành”).</p>
  const COLS: [string, string][] = [
    ['Vấn đề / nhu cầu lặp lại', 'Vấn đề / nhu cầu lặp lại'],
    ['Use case / cách dùng', 'Use case / cách dùng'],
    ['Angle đang phổ biến (từ nguồn)', 'Angle đang phổ biến (từ nguồn)'],
    ['Angle mới tiềm năng để test', 'Angle mới tiềm năng để test'],
    ['Máy chính + vật tư tiêu hao/refill', 'Máy chính + vật tư tiêu hao/refill'],
    ['Lý do tiềm năng', 'Lý do tiềm năng'],
    ['Rủi ro', 'Rủi ro'],
    ['Cần xác minh', 'Cần xác minh'],
  ]
  return (
    <div className="scroll mr-cmp-wrap">
      <table className="rt mr-cmp">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Ảnh sản phẩm</th>
            {COLS.map(([k, l]) => (
              <th key={k}>{l}{k.startsWith('Angle đang') && <span className="badge lb-q">Từ nguồn</span>}{k.startsWith('Angle mới') && <span className="badge lb-s">Đề xuất</span>}</th>
            ))}
            <th>Trạng thái nguồn</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r['Sản phẩm']}>
              <td data-label="Sản phẩm"><b>{r['Sản phẩm']}</b></td>
              <td data-label="Ảnh sản phẩm" className="mr-pimg-td"><ProdThumb r={r} onOpen={setBig} /></td>
              {COLS.map(([k, l]) => (
                <td key={k} data-label={l} className={k.startsWith('Angle mới') ? 'mr-new' : k.startsWith('Angle đang') ? 'mr-seen-angle' : undefined}>{r[k] || 'Chưa xác minh'}</td>
              ))}
              <td data-label="Trạng thái nguồn">
                {(r['Trạng thái nguồn'] || 'Chưa verify').split('·').map((seg) => {
                  const [name, ...rest] = seg.split(':')
                  const v = rest.join(':') || name
                  return <div key={seg} className="mr-st"><span className="note">{rest.length ? name.trim() : 'Nguồn'}</span> {STATUS_BADGES(v).map((b) => <span key={b.t} className={`badge ${b.c}`}>{b.t}</span>)}</div>
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {big && bigPh && (
        <Modal title={big['Sản phẩm']} onClose={() => setBig(null)}>
          <img className="mr-pimg-big" src={unsplash(bigPh.p, 900)} alt={`${big['Sản phẩm']} (ảnh minh họa)`} />
          <p className="note">
            <b>{bigPh.label}</b>, không phải listing thật và không phải nhà cung cấp đã xác minh. Ảnh: {bigPh.by || 'Chưa rõ tác giả'} trên{' '}
            {bigPh.page ? <a className="db-lk" href={bigPh.page} target="_blank" rel="noreferrer">Unsplash</a> : 'Unsplash'} · {bigPh.license}.
          </p>
        </Modal>
      )}
    </div>
  )
}

function Tile({ name, sub, status, onOpen }: { name: string; sub: string; status: string; onOpen: () => void }) {
  const img = imageFor(name)
  const [bad, setBad] = useState(false)
  return (
    <button type="button" className={`mr-tile${img && !bad ? ' has-img' : ''}`} onClick={onOpen} aria-haspopup="dialog" aria-label={`${name}. ${sub}. ${status}. Bấm để xem chi tiết`}>
      {img && !bad && <img className="mr-tile-bg" src={imageUrl(img, 640)} alt="" aria-hidden="true" loading="lazy" referrerPolicy="no-referrer" onError={() => setBad(true)} />}
      <b>{name}</b>
      <span className="mr-tile-sub">{sub}</span>
      <span className={`badge ${TONE(status)}`}>{status}</span>
    </button>
  )
}

function Industries({ doc }: { doc: Doc }) {
  const [open, setOpen] = useState<number | null>(null)
  if (doc.industries.length === 0) return <p className="note">Không đọc được bảng ngành trong <code>{INSIGHT}</code> (mục “Bảng ngành tiềm năng”).</p>
  const cur = open === null ? null : doc.industries[open]
  return (
    <div className="stack">
      <h2>Ngành đang đề xuất</h2>
      <p className="note">Top {doc.industries.length} ngành từ note Muse. <b>Gợi ý, chưa verify</b>: chưa ngành nào qua cổng A, chưa có supplier xác minh. Bấm vào ô để xem chi tiết.</p>
      <div className="mr-tiles">
        {doc.industries.map((r, i) => (
          <Tile key={r['Ngành']} name={r['Ngành']} sub={r['Sản phẩm vào'].split(';')[0]} status={r['Trạng thái']} onOpen={() => setOpen(i)} />
        ))}
      </div>
      {cur && (
        <Modal title={cur['Ngành']} onClose={() => setOpen(null)} wide>
          <div className="stack">
            {(() => { const im = imageFor(cur['Ngành']); return im ? <p className="note">Ảnh minh họa: <a href={im.page} target="_blank" rel="noreferrer">{im.by} / Unsplash</a> (Unsplash License). Chỉ để hình dung ngữ cảnh, không phải ảnh sản phẩm.</p> : null })()}
            <p><SrcBadge s="muse" /><span className={`badge ${TONE(cur['Trạng thái'])}`}>{cur['Trạng thái']}</span> <span className="note">Điểm Muse (N/B/S): {cur['Điểm Muse (N/B/S)']} [?]</span></p>
            <Compare rows={doc.products.filter((x) => x['Ngành'] === cur['Ngành'])} />
            <p className="note">Nguồn: <a href={docLink(INSIGHT)}>{INSIGHT}</a> {doc.version}.</p>
            <div className="bar"><button className="btn" onClick={() => setOpen(null)}>Đóng</button></div>
          </div>
        </Modal>
      )}
    </div>
  )
}

const labelsOf = (s: string): { t: string; c: string }[] => {
  const out: { t: string; c: string }[] = []
  if (/chuẩn/i.test(s)) out.push({ t: 'Chuẩn đã duyệt', c: 'ok' })
  if (/\[F\]/.test(s)) out.push({ t: 'Fact', c: 'lb-f' })
  if (/\[S\]/.test(s)) out.push({ t: 'Suy luận', c: 'lb-s' })
  if (/\[\?\]/.test(s)) out.push({ t: 'Chưa verify', c: 'lb-q' })
  return out.length ? out : [{ t: 'Chưa verify', c: 'lb-q' }]
}

function Avoid({ doc }: { doc: Doc }) {
  const [show, setShow] = useState(false) // mặc định thu gọn
  if (doc.avoid.length === 0) return <p className="note">Không đọc được mục “Niche / sản phẩm nên tránh” trong <code>{INSIGHT}</code>.</p>
  return (
    <div className="stack">
      <button type="button" className="mr-fold" aria-expanded={show} aria-controls="mr-avoid" onClick={() => setShow((v) => !v)}>
        <span className="mr-chev" aria-hidden="true">{show ? '▾' : '▸'}</span>
        <b>Ngành / niche nên tránh</b>
        <span className="badge">{doc.avoid.length}</span>
        <span className="note">{show ? 'Bấm để thu gọn' : 'Bấm để xem'}</span>
      </button>
      {show && (
        <div id="mr-avoid" className="stack">
          <p className="note">Phân biệt <span className="badge ok">Chuẩn đã duyệt</span> <span className="badge lb-f">Fact</span> <span className="badge lb-s">Suy luận</span> <span className="badge lb-q">Chưa verify</span>. Phần lớn là suy luận từ note Muse, chưa kiểm.</p>
          <div className="dc-grid">
            {doc.avoid.map((r) => (
              <div key={r['Niche / sản phẩm']} className="dc-card">
                <b>{r['Niche / sản phẩm']}</b>
                <span>{r['Nhóm lý do'].split(';').map((g) => <span key={g} className="mr-chip">{g.trim()}</span>)}</span>
                <span>{r['Lý do cụ thể']}</span>
                <span>{labelsOf(r['Nhãn']).map((l) => <span key={l.t} className={`badge ${l.c}`}>{l.t}</span>)}</span>
                <span className="note">Nguồn: {r['Nguồn']}</span>
              </div>
            ))}
          </div>
          <p className="note">Nguồn: <a href={docLink(INSIGHT)}>{INSIGHT}</a> {doc.version} và <a href={docLink('1-criteria.md')}>1-criteria.md</a> (cổng A).</p>
        </div>
      )}
    </div>
  )
}

type Tab = 'seen' | 'industry'
const BASE = '#/market-research'
// Route cũ: /tranh → tab Ngành; /run, /ket-qua, /quy-trinh → tab Sản phẩm đã xem
const tabOf = (): Tab => {
  const h = window.location.hash
  return h.startsWith(`${BASE}/nganh`) || h.startsWith(`${BASE}/tranh`) ? 'industry' : 'seen'
}

export function MarketResearch() {
  const [tab, setTab] = useState(tabOf)
  const { doc, err } = useDoc()
  useEffect(() => {
    const on = () => setTab(tabOf())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const go = (t: Tab) => { window.location.hash = t === 'seen' ? BASE : `${BASE}/nganh` }
  return (
    <div className="stack">
      <div className="db-top">
        <div>
          <h1>Market Research</h1>
          <p className="note"><a className="btn" href={docLink()}>Đọc tài liệu Market Research</a></p>
        </div>
      </div>
      <div className="tabs" role="tablist">
        <button className="tab" role="tab" aria-selected={tab === 'seen'} onClick={() => go('seen')}>Sản phẩm tôi đã xem</button>
        <button className="tab" role="tab" aria-selected={tab === 'industry'} onClick={() => go('industry')}>Ngành đang đề xuất</button>
      </div>
      {tab === 'seen' ? <MarketSeen /> : err ? <p className="note">Không đọc được tài liệu Market Research (chỉ có khi chạy dev/preview với thư mục Working trên Drive): {err}</p> : !doc ? <p className="note">Đang đọc tài liệu…</p> : (
        <div className="stack">
          <Industries doc={doc} />
          <hr />
          <Avoid doc={doc} />
        </div>
      )}
    </div>
  )
}
