import { useEffect, useState, type ReactNode } from 'react'
import { Preview } from './TikTok'

/** Trang tài liệu: các luồng làm việc hiện tại của hệ thống, vẽ bằng hình. Cập nhật khi quy trình đổi (17/11/2026). */

interface Step { t: string; sub?: string; tone?: 'ok' | 'warn' | 'amin' | 'tool' }

function Chain({ steps }: { steps: Step[] }) {
  return (
    <ol className="dc-chain">
      {steps.map((s, i) => (
        <li key={i} className={`dc-step ${s.tone ?? ''}`}>
          <b>{s.t}</b>
          {s.sub && <span>{s.sub}</span>}
        </li>
      ))}
    </ol>
  )
}

function Block({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <section className="card stack">
      <h2>{title}</h2>
      {note && <p className="note">{note}</p>}
      {children}
    </section>
  )
}

// Sơ đồ nguồn dữ liệu: Jira, Drive, Claude, Store Hub và các kênh
function DataMap() {
  const box = (x: number, y: number, w: number, h: number, t: string, s: string, cls: string) => (
    <g key={t}>
      <rect x={x} y={y} width={w} height={h} rx="10" className={`dc-box ${cls}`} />
      <text x={x + w / 2} y={y + h / 2 - 3} textAnchor="middle" className="dc-bt">{t}</text>
      <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" className="dc-bs">{s}</text>
    </g>
  )
  const arrow = (x1: number, y1: number, x2: number, y2: number, label: string, lx: number, ly: number) => (
    <g key={label}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} className="dc-ln" markerEnd="url(#dcar)" />
      <text x={lx} y={ly} textAnchor="middle" className="dc-lb">{label}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 760 330" className="dc-svg" role="img" aria-label="Sơ đồ nguồn dữ liệu: Jira, Drive, Claude, Store Hub, Zernio">
      <defs>
        <marker id="dcar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="dc-ah" /></marker>
      </defs>
      {box(20, 20, 190, 62, 'Jira', 'title · description · status · bình luận', 'src')}
      {box(20, 240, 190, 62, 'Drive (working/)', 'file thật: video, báo cáo, store.json', 'src')}
      {box(285, 130, 190, 70, 'Store Hub (web)', 'localhost:5173 · chỉ đọc + đăng', 'hub')}
      {box(550, 20, 190, 62, 'Claude', 'làm việc, ghi bình luận Jira, sửa file', 'ai')}
      {box(550, 240, 190, 62, 'Zernio', '1 key mỗi store → Facebook, YouTube', 'ext')}
      {arrow(210, 51, 285, 150, 'cầu nối /jira/tasks (90 giây)', 205, 105)}
      {arrow(210, 271, 285, 182, 'đọc dashboard.json, store.json', 195, 245)}
      {arrow(550, 51, 475, 150, '', 0, 0)}
      {arrow(550, 51, 210, 51, 'bình luận + chuyển trạng thái (khi Amin bảo)', 380, 42)}
      {arrow(550, 60, 210, 271, 'ghi file, video, link Drive', 520, 175)}
      {arrow(475, 182, 550, 271, 'cầu nối /zernio/publish', 525, 235)}
    </svg>
  )
}


interface DocItem { path: string; name: string; dir: boolean; size: number; mtime: number; url: string }

function DocLibrary() {
  const [items, setItems] = useState<DocItem[] | null>(null)
  const [base, setBase] = useState('')
  const [err, setErr] = useState('')
  const [pv, setPv] = useState<{ path: string; title: string } | null>(null)
  useEffect(() => {
    fetch('/docs/tree').then((r) => r.json()).then((j) => { if (j.error) setErr(j.error); else { setItems(j.items); setBase(j.base) } }).catch((e) => setErr(String(e)))
  }, [])
  if (err) return <p className="note">Không đọc được thư mục tài liệu: {err}</p>
  if (!items) return <p className="note">Đang tải danh sách…</p>
  const fmt = (n: number) => new Date(n).toLocaleDateString('vi-VN')
  const groups = new Map<string, DocItem[]>()
  for (const it of items) {
    if (it.dir) { if (!groups.has(it.path)) groups.set(it.path, []); continue }
    const parent = it.path.slice(0, it.path.lastIndexOf('/'))
    if (!groups.has(parent)) groups.set(parent, [])
    groups.get(parent)!.push(it)
  }
  const folder = (p: string) => items.find((x) => x.path === p)
  return (
    <div className="stack">
      {[...groups.entries()].filter(([, v]) => v.length).map(([g, files]) => (
        <div key={g} className="stack">
          <p className="db-sec">
            {g === base ? 'docs/' : g.slice(base.length + 1) + '/'} <span className="note">{files.length}</span>
            {folder(g)?.url && <> <a className="db-lk" href={folder(g)!.url} target="_blank" rel="noreferrer">mở thư mục Drive</a></>}
          </p>
          <ul className="dc-files">
            {files.map((f) => (
              <li key={f.path}>
                {f.url ? <a className="db-lk" href={f.url} target="_blank" rel="noreferrer">{f.name}</a> : <span title="Drive chưa cấp id cho file này">{f.name}</span>}
                <span className="note">{fmt(f.mtime)}</span>
                {f.name.endsWith('.md') && <button className="link" onClick={() => setPv({ path: f.path, title: f.name })}>Xem trước</button>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {pv && <Preview path={pv.path} title={pv.title} onClose={() => setPv(null)} />}
    </div>
  )
}

export function Docs() {
  return (
    <div className="stack">
      <div className="db-top">
        <div>
          <h1>Tài liệu: luồng hiện tại</h1>
          <p className="note">Cập nhật 17/11/2026. Hình vẽ lại các luồng đang chạy, không phải kế hoạch.</p>
        </div>
      </div>

      <Block title="1. Nguồn dữ liệu (ai giữ cái gì)" note="Jira là nguồn duy nhất của task. Drive giữ file thật. Web chỉ ghép hai nguồn và hiển thị.">
        <DataMap />
        <div className="dc-grid">
          <div className="dc-card"><b>Jira</b><span>Key, title, description, status. Input, Progress, Output nằm trong bình luận mới nhất theo mẫu <code>## Input / Progress / Output / Next / Blocker</code>.</span></div>
          <div className="dc-card"><b>Drive</b><span>File thật (video, báo cáo, store.json). Jira và web chỉ giữ link <code>drive.google.com</code>, không giữ đường dẫn local.</span></div>
          <div className="dc-card"><b>Store Hub</b><span>Tab In Progress, To do, Idea lấy từ Jira mỗi 90 giây. Nếu Jira lỗi, web dùng <code>dashboard.json</code> và báo "Jira lỗi".</span></div>
        </div>
      </Block>

      <Block title="2. Vòng đời một task" note="Chuyển trạng thái chỉ khi Amin bảo rõ. Claude làm hết các nơi trong một lượt.">
        <Chain steps={[
          { t: 'Amin giao việc', sub: 'tạo task KAN-xxx', tone: 'amin' },
          { t: 'Idea', sub: 'Jira' },
          { t: 'In Progress', sub: 'Amin bảo rồi mới chuyển', tone: 'amin' },
          { t: 'Claude làm', sub: 'file lên Drive, bình luận mẫu lên Jira', tone: 'tool' },
          { t: 'Amin duyệt', sub: 'bản cụ thể', tone: 'amin' },
          { t: 'Done', sub: 'Amin bảo' },
        ]} />
        <p className="note">Lệnh <code>/sync-hub</code> chỉ còn là bản dự phòng ghi trạng thái xuống file khi web không gọi được Jira.</p>
      </Block>

      <Block title="3. Làm video creative (2 flow)" note="Flow A đi từ video đối thủ. Flow B tự prompt từ thông tin sản phẩm. Hai flow nối nhau; B chạy độc lập được.">
        <div className="dc-two">
          <div>
            <p className="db-sec">Flow A · từ video đối thủ</p>
            <Chain steps={[
              { t: 'Kho ref đối thủ', sub: 'chỉ xem nội bộ, không upload vào công cụ gen' },
              { t: 'Phân tích', sub: 'hook 3 s, cấu trúc, on_niche' },
              { t: 'Chấm 12 điểm', sub: '≥ 8/12, "khớp store" = 0 thì loại' },
              { t: 'structure_spec', sub: 'chữ, đổi ≥ 4/6 yếu tố' },
            ]} />
          </div>
          <div>
            <p className="db-sec">Flow B · tự prompt</p>
            <Chain steps={[
              { t: 'Product Information', sub: 'ảnh thật + angle' },
              { t: 'config.yaml', sub: 'validator: INVALID / BLOCKED / READY' },
              { t: 'prompt-flow, prompt-muse', sub: 'không bịa tính năng' },
            ]} />
          </div>
        </div>
        <p className="db-sec">Sau khi có prompt (chung cho cả hai flow)</p>
        <Chain steps={[
          { t: 'Cổng A', sub: 'agent độc lập review prompt', tone: 'ok' },
          { t: 'Amin duyệt trần credit', sub: 'bằng con số', tone: 'amin' },
          { t: 'Gen', sub: 'Google Flow + Muse', tone: 'tool' },
          { t: 'Cổng B', sub: 'agent độc lập review clip', tone: 'ok' },
          { t: 'Amin duyệt bản cuối', sub: '8/8 Final approved', tone: 'amin' },
          { t: 'Social: Chưa đăng', sub: 'bài nháp, caption, nhãn AI' },
        ]} />
        <div className="dc-grid">
          <div className="dc-card warn"><b>Chặn đăng</b><span>Clip có watermark hiển thị (dấu ✦ của Flow), quyền ảnh sản phẩm (ledger AN-001) chưa rõ, nắp lệch ảnh thật.</span></div>
          <div className="dc-card"><b>Bảng điểm 8 tiêu chí</b><span>Product Truth, validator, ledger, cổng A, cổng C hoặc N/A, cổng B, trần credit, bản cuối. Nằm ở tab Creative của từng store.</span></div>
          <div className="dc-card"><b>Công cụ</b><span>Flow: tài khoản minhpham.piscada@gmail.com, 24 credit mỗi clip 8 s. Muse: allowance miễn phí theo tuần. Higgsfield tạm không dùng.</span></div>
        </div>
      </Block>

      <Block title="4. Đăng bài lên Facebook, YouTube" note="Mỗi store một key Zernio. Một bài chỉ gửi được qua tài khoản của đúng store.">
        <Chain steps={[
          { t: 'Bài ở tab Social', sub: 'trạng thái Chưa đăng' },
          { t: 'Chọn cách gửi', sub: 'Đăng ngay (mặc định) · Hẹn giờ · Lưu nháp', tone: 'amin' },
          { t: 'Hộp xác nhận', sub: 'tài khoản, video, caption', tone: 'amin' },
          { t: 'Cầu nối /zernio/publish', sub: 'key theo store, tải video lên Zernio', tone: 'tool' },
          { t: 'Facebook / YouTube', sub: 'Page đúng store' },
          { t: 'Dán link, đổi Đã đăng', sub: 'sau khi kiểm bài thật', tone: 'ok' },
        ]} />
        <div className="dc-grid">
          <div className="dc-card"><b>Key theo store</b><span><code>ZERNIO_API_KEY_AQUANEST</code>, <code>ZERNIO_API_KEY_HEARTBOND</code>, <code>ZERNIO_API_KEY_WHISKERWALL</code>. Đặt trong <code>.env.local</code> của store-hub, ngoài Drive.</span></div>
          <div className="dc-card warn"><b>Chưa nối</b><span>Instagram và TikTok chưa nối Zernio; gói Zernio đang giới hạn số tài khoản (KAN-114).</span></div>
        </div>
      </Block>

      <Block title="5. Tài liệu Dropship" note="Thư mục 1-dropship/docs trên Drive. Bấm tên file để mở trên Drive; file .md có nút Xem trước ngay trong web.">
        <DocLibrary />
      </Block>

      <Block title="6. Luật chung">
        <ul className="dc-rules">
          <li>Claude làm, Amin duyệt. Không liên hệ supplier.</li>
          <li>Không chi tiền, credit hay ads khi chưa có con số Amin duyệt.</li>
          <li>Video đối thủ chỉ để tham khảo nội bộ: không đăng, không ghép, không crop hay che watermark.</li>
          <li>Không đọc hay dán key vào chat; key do Amin đặt trong file ngoài Drive.</li>
          <li>Số liệu chưa kiểm ghi "chưa xác minh" kèm ngày.</li>
        </ul>
      </Block>
    </div>
  )
}
