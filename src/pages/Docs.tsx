import { useEffect, useState, type ReactNode } from 'react'
import { Preview } from './TikTok'
import { DEFAULT_WORKFLOW, FALLBACK, FLOW_DOC, FLOW_DOC_VERSION, P0_EVIDENCE, ROUTER } from '../data/videoFlows'
import { GATE_WHAT } from '../components/CreativeEval'
import { CriteriaTables } from '../components/CriteriaTables'
import { MarketResearchDoc } from './MarketResearchDoc'

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


// Cấu trúc một ngày làm việc: Root → task cha → session con, kèm skill/lệnh từng tầng và folder của một task (21/11/2026)
function Cm({ t, k = 'a' }: { t: string; k?: 'a' | 'w' | 'g' }) { return <code className={`dw-cm ${k}`}>{t}</code> }

function Tier({ title, sub, children }: { title: string; sub: string; children: ReactNode }) {
  return (
    <div className="dw-tier">
      <p className="db-sec">{title}</p>
      <p className="note">{sub}</p>
      <div className="dc-grid">{children}</div>
    </div>
  )
}


const CMD_STEPS: { cmd: string; who: string; when: string; steps: string[]; note?: string }[] = [
  {
    cmd: '/new-task', who: 'Root', when: 'Amin giao một việc mới',
    steps: [
      'Đọc Jira (nếu đã có KEY) và đối chiếu với việc Amin nói; khác hoặc rộng hơn thì báo ngay',
      'Tìm quy trình áp dụng trong quy-trinh/ (vd market research)',
      'Tạo Jira KAN ở trạng thái Idea, mô tả đủ Mục tiêu, Requirement, Input, Done, Giới hạn',
      'Tạo task-hub/<KEY>/ từ _template: manifest.md, input/TIEU-CHI.md (cổng vào), progress/, output/',
      'Chờ Amin duyệt tiêu chí và trần bằng con số trước khi làm',
      'Chạy /sync-hub để web hiện ở tab Idea; đổi In Progress và mở session cha chỉ khi Amin bảo',
    ],
    note: 'Bản skill hiện còn bước ghi artifact Bảng điều khiển đã cũ; chờ Amin chốt viết lại.',
  },
  {
    cmd: '/start-task', who: 'Root', when: 'Amin chuyển task sang In Progress và bắt đầu làm',
    steps: [
      'Đọc manifest, TIEU-CHI, Jira; đã có session cha thì báo link, không mở thêm',
      'Kiểm cổng vào: tiêu chí đã duyệt, trần bằng số, có người verify khác người làm; thiếu thì dừng và hỏi',
      'Chuyển Jira In Progress (tra transition theo project)',
      'Chạy /sync-hub cho web khớp',
      'Mở session cha trong nhóm working, brief: chỉ plan và tổng hợp, thực thi qua /task-child',
      'Ghi manifest "Bắt đầu <ngày>, session cha, trần"; đề xuất /task-child KEY P1',
    ],
  },
  {
    cmd: '/task-child', who: 'Task cha', when: 'Sắp thực thi: gen, checklist, dữ liệu dài, thao tác web',
    steps: [
      'Chọn section_id (P1, P2…) cho một lượt khoảng 1 giờ',
      'Tạo item_id <KEY>-YYYYMMDD-NNN',
      'Tạo thư mục progress/runs/<item_id>/ từ _MAU, điền summary phần Bắt đầu; worklog.py add --event plan',
      'Mở session con KEY/section bằng start_session với brief tự đủ: phạm vi, định nghĩa xong, trần, danh sách cấm',
      'Cha ghi "đã giao" vào manifest rồi dừng thực thi, chờ con báo',
      'Khi con xong: cha kiểm file con tạo, tổng hợp vào manifest/ban-giao, đề xuất lượt kế',
    ],
  },
  {
    cmd: '/verify-task', who: 'Session khác người làm', when: 'Trước khi đóng hoặc chuyển task',
    steps: [
      'Chạy verify-task.py <KEY> (thêm --strict cho task mới): kiểm thư mục, manifest, TOM-TAT ≤ 400 từ, tiêu chí có mã C1.., DANH-GIA phủ hết tiêu chí',
      'Đối chiếu chất lượng đánh giá: mỗi C* có bằng chứng mở được, không đổi tiêu chí sau khi làm',
      'So trạng thái Jira với Store Hub và manifest; lệch thì báo, không tự sửa',
      'Kiểm bàn giao (Holder/Chờ còn đúng không), Muse đã có brief + report, chi phí khớp progress',
      'Báo cáo PASS/WARN/FAIL từng nhóm, tối đa 5 điểm lệch, mỗi điểm kèm file và người sửa',
      'Chỉ lưu verify-<ngày>.md khi Amin muốn; mặc định trả lời trong chat',
    ],
    note: 'Chỉ đọc: không sửa file, không đổi Jira.',
  },
  {
    cmd: '/done-task', who: 'Root hoặc cha', when: 'Amin nói kết thúc / done task',
    steps: [
      'Đọc hiện trạng: manifest, ban-giao, Jira, worklog, danh sách session cha và con',
      'Dừng nếu còn session hoặc run đang chạy, hỏi Amin',
      'Kê việc còn mở: chưa xong, chưa verify, câu hỏi chưa quyết, chi phí so với trần',
      'Đọc nội dung các session của task, ghi vào worklog (import) rồi đóng worklog, validate',
      'Ghi quyết định đóng và việc còn mở vào manifest',
      'Chuyển Jira Done (tra transition từng project) rồi /sync-hub',
      'Chuyển session cha và con sang nhóm Archive; archive_session chỉ khi Amin bảo',
      'Báo Amin: việc còn mở, chi phí, gợi ý /verify-task nếu chưa verify độc lập',
    ],
  },
  {
    cmd: '/sync-hub', who: 'Root hoặc cha', when: 'Sau khi tạo task hoặc đổi trạng thái Jira',
    steps: [
      'Lấy Jira: task chưa Done và task Done trong 14 ngày (KAN, GA, GEN)',
      'Ghi gộp thành JSON key, status, title',
      'Chạy sync-tasks.py xem thay đổi, rồi thêm --apply để ghi dashboard.json',
      'Báo dòng đổi và task đang chạy session nhưng Jira còn Idea',
    ],
    note: 'Không đổi trạng thái Jira; chỉ phản chiếu Jira lên web.',
  },
]

function CmdSteps() {
  return (
    <div className="dc-grid dw-steps">
      {CMD_STEPS.map((c) => (
        <div key={c.cmd} className="dc-card">
          <b><code className="dw-cm a">{c.cmd}</code> <span className="note">chạy ở: {c.who}</span></b>
          <span className="note">Dùng khi: {c.when}</span>
          <ol className="dw-ol">{c.steps.map((x, i) => <li key={i}>{x}</li>)}</ol>
          {c.note && <span className="note">{c.note}</span>}
        </div>
      ))}
    </div>
  )
}

function DayWork() {
  return (
    <>
      <Block title="Một ngày làm việc: Root, task cha, session con" note="Root chỉ nghĩ và lập plan; việc thật chạy ở task bên dưới. Chuẩn đã duyệt 21/11/2026 (quy-trinh/chuan-section-task.md).">
        <Chain steps={[
          { t: '1 Summary', sub: 'hôm qua xong gì, còn gì' },
          { t: '2 Brainstorm', sub: 'ý hôm nay, đã có task chưa' },
          { t: '3 Plan', sub: 'tối đa 3 việc, map vào task', tone: 'amin' },
          { t: '4 Giao', sub: 'mỗi việc về đúng task cha' },
          { t: '5 Làm', sub: 'cha mở con, ~1 giờ mỗi lượt', tone: 'tool' },
          { t: '6 Chốt', sub: 'summary, worklog, Done', tone: 'ok' },
        ]} />
        <p className="note">Chú giải màu: <Cm t="skill của bạn" /> <Cm t="script worklog / sync" k="w" /> <Cm t="skill có sẵn khác" k="g" /></p>
      </Block>
      <Block title="Skill và lệnh theo từng tầng" note="Root giao việc xuống, task cha mở con bằng /task-child, con làm xong báo ngược lên.">
        <Tier title="Tầng 1: Root Dashboard (session quản lý)" sub="Brainstorm, plan, tạo task, điều phối. Không thực thi chi tiết.">
          <div className="dc-card"><b>Hay dùng</b><span><Cm t="/new-task" /> <Cm t="/start-task" /> <Cm t="/sync-hub" /> <Cm t="/done-task" /> <Cm t="/verify-task" /> <Cm t="/dashboard" /> <Cm t="/todo" /> <Cm t="/daily-log" /></span></div>
          <div className="dc-card"><b>Việc Root làm</b><span>Đọc worklog hôm qua, viết trang Hôm nay (Summary / Brainstorm / Plan), tạo Jira + task-hub, giao việc, tổng hợp báo cáo từ task cha.</span></div>
          <div className="dc-card"><b>Script</b><span><Cm t="worklog.py query" k="w" /> <Cm t="sync-tasks.py" k="w" /> <Cm t="/loop" k="g" /> <Cm t="/schedule" k="g" /></span></div>
        </Tier>
        <Tier title="Tầng 2: Task cha (một KAN = một session)" sub="Giữ nội dung chính, overview, plan, tiến độ. Chỉ plan, mở con, kiểm kết quả, tổng hợp.">
          <div className="dc-card"><b>Lệnh chính</b><span><Cm t="/task-child" /> <Cm t="/verify-task" /> <Cm t="/done-task" /> <Cm t="/sync-hub" /></span></div>
          <div className="dc-card"><b>Script</b><span><Cm t="worklog.py plan" k="w" /> <Cm t="worklog.py validate" k="w" /> <Cm t="worklog.py render" k="w" /></span></div>
          <div className="dc-card"><b>Cha ghi file</b><span>manifest, TIEU-CHI, TOM-TAT, DANH-GIA, ban-giao. Đổi Jira chỉ khi Amin bảo.</span></div>
        </Tier>
        <Tier title="Tầng 3: Session con KAN-xxx/P1, P2… (phiên làm thật)" sub="Một section, một item_id; ghi worklog + notebook + summary rồi báo cha.">
          <div className="dc-card"><b>Skill theo loại việc</b><span><Cm t="/dropship-video-flow" /> <Cm t="/dropship-creative" /> <Cm t="/store-6-videos" /> <Cm t="/dropship-research" /> <Cm t="/dropship-run" /> <Cm t="/video-from-script" /> <Cm t="/tiktok-edit" /> <Cm t="/build-web" /></span></div>
          <div className="dc-card"><b>Script ghi sổ</b><span><Cm t="worklog.py add --event start" k="w" /> <Cm t="worklog.py add --event update" k="w" /> <Cm t="worklog.py add --event end" k="w" /></span></div>
          <div className="dc-card"><b>Kiểm tra (code, web)</b><span><Cm t="/code-review" k="g" /> <Cm t="/simplify" k="g" /> <Cm t="/run" k="g" /> Verify output do con khác làm, không tự chấm.</span></div>
        </Tier>
      </Block>
      <Block title="Mỗi lệnh gồm những bước nào" note="Rút từ file skill ở ~/.claude/skills/<tên>/SKILL.md. Đổi skill thì cập nhật lại khối này.">
        <CmdSteps />
      </Block>
      <Block title="Folder của một task trong working" note="Mỗi task một thư mục; cha và con ghi đúng phần của mình.">
        <pre className="dw-tree">{`0-dashboard/task-hub/KAN-124/
  manifest.md            overview, trần, người giữ, quyết định    (cha)
  input/TIEU-CHI.md      tiêu chí, requirement, checklist         (cha)
  progress/
    ban-giao.md          bàn giao cha, con, Root                  (cha + con)
    worklog.jsonl        sổ giờ, nguồn sự kiện chính              (con ghi, cha đọc)
    worklog.md           bản đọc sinh tự động
    sections.json        danh sách section P1, P2…
    runs/KAN-124-20261121-001/
      summary.md         chốt đầu và cuối lượt                    (con)
      notebook.md        diễn biến, lỗi, quyết định               (con)
  output/                kết quả, TOM-TAT.md, DANH-GIA.md, CREDIT-LOG.csv

0-dashboard/dashboard-data/today/2026-11-21.json   Root viết: Summary, Brainstorm, Plan`}</pre>
      </Block>
    </>
  )
}

const SECTIONS: { slug: string; group: string; title: string; short: string; render: () => ReactNode }[] = [
  {
    slug: 'ngay-lam-viec',
    group: 'Quy trình làm việc',
    title: 'Một ngày làm việc: Root, task cha, session con',
    short: 'Một ngày làm việc (Root, task, session con)',
    render: () => <DayWork />,
  },
  {
    slug: 'luat-chung',
    group: 'Quy trình làm việc',
    title: 'Luật chung',
    short: 'Luật chung',
    render: () => (
      <Block title="9. Luật chung" >
    <ul className="dc-rules">
      <li>Claude làm, Amin duyệt. Không liên hệ supplier.</li>
      <li>Không chi tiền, credit hay ads khi chưa có con số Amin duyệt.</li>
      <li>Video đối thủ chỉ để tham khảo nội bộ: không đăng, không ghép, không crop hay che watermark.</li>
      <li>Không đọc hay dán key vào chat; key do Amin đặt trong file ngoài Drive.</li>
      <li>Số liệu chưa kiểm ghi "chưa xác minh" kèm ngày.</li>
    </ul>
      </Block>
    ),
  },
  {
    slug: 'luong-tao-video',
    group: 'Video creative',
    title: 'Các luồng tạo video hiện có',
    short: 'Các luồng tạo video hiện có',
    render: () => (
      <Block title="4. Các luồng tạo video hiện có" note={`Theo ${FLOW_DOC} (${FLOW_DOC_VERSION}). Chọn flow theo thứ đang có trong tay.`}>
    <div className="scroll">
      <table className="rt">
        <thead><tr><th>Đang có</th><th>Muốn</th><th>Flow</th><th>Cách làm</th></tr></thead>
        <tbody>
          {ROUTER.map((r) => (
            <tr key={r.flow}>
              <td data-label="Đang có">{r.have}</td>
              <td data-label="Muốn">{r.want}</td>
              <td data-label="Flow"><b>{r.flow}</b></td>
              <td data-label="Cách làm" className="note">{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="dc-two">
      <div><p className="db-sec">Workflow mặc định</p><ol className="vf-steps">{DEFAULT_WORKFLOW.map((x) => <li key={x}>{x}</li>)}</ol></div>
      <div><p className="db-sec">Công cụ gen (theo thứ tự ưu tiên)</p><ol className="vf-steps">{FALLBACK.map((x) => <li key={x}>{x}</li>)}</ol></div>
    </div>
    <p className="banner">{P0_EVIDENCE}</p>
    <p className="note">Flow C (cắt ghép đối thủ + footage mạng) mới là đề xuất ở KAN-115 B6, chưa duyệt, chưa dùng.</p>
      </Block>
    ),
  },
  {
    slug: 'nghien-cuu-doi-thu',
    group: 'Video creative',
    title: 'Nghiên cứu đối thủ và hiểu sản phẩm (Bước 0, trước cổng A)',
    short: 'Nghiên cứu đối thủ và hiểu sản phẩm (Bước 0, trước cổng A)',
    render: () => (
      <Block title="5. Nghiên cứu đối thủ và hiểu sản phẩm (Bước 0, trước cổng A)" note="Đề xuất Amin duyệt 17/11/2026 (KAN-115). Dùng chung cho Flow A và B. Tab Nghiên cứu trên web sẽ làm ở KAN-116.">
    <div className="dc-grid">
      <div className="dc-card"><b>0A · Hồ sơ sản phẩm (mỗi store)</b><span>Sản phẩm, người dùng, vấn đề; tính năng và bằng chứng (số chưa kiểm = "chưa xác minh"); claim được/cấm theo thị trường; ảnh thật làm ảnh neo; chân dung khách, giọng thương hiệu.</span></div>
      <div className="dc-card"><b>0B · Đánh giá video ads đối thủ</b><span>Nguồn, link, ngày xem, quyền dùng; cấu trúc (hook 3 giây, nhịp, CTA, thời lượng, có lời không); chấm theo thang G/Q/S bên dưới; angle và format đáng học, điều cần tránh; mức chắc chắn (đã xem hay chỉ metadata).</span></div>
      <div className="dc-card"><b>0C · Đầu ra chuyển sang cổng A</b><span>Angle ưu tiên kèm video ref và lý do; danh sách cần tránh; flow đề xuất cho từng angle.</span></div>
    </div>
    <p className="note">Luật: video đối thủ chỉ tham chiếu nội bộ, không upload vào công cụ gen, không cắt ghép, không che watermark.</p>
      </Block>
    ),
  },
  {
    slug: 'tieu-chi',
    group: 'Video creative',
    title: 'Tiêu chí đánh giá',
    short: 'Tiêu chí đánh giá',
    render: () => (
      <Block title="6. Tiêu chí đánh giá" note="Thang KAN-115 B2 (Amin duyệt 17/11/2026) và các cổng của pipeline. Ngưỡng điểm là tạm, chưa hiệu chỉnh.">
    <p className="db-sec">Ba cổng của pipeline</p>
    <ul className="dc-rules">
      <li>{GATE_WHAT.A}</li>
      <li>{GATE_WHAT.C}</li>
      <li>{GATE_WHAT.B}</li>
    </ul>
    <CriteriaTables />
      </Block>
    ),
  },
  {
    slug: 'dang-bai',
    group: 'Đăng bài',
    title: 'Đăng bài lên Facebook, YouTube',
    short: 'Đăng bài lên Facebook, YouTube',
    render: () => (
      <Block title="7. Đăng bài lên Facebook, YouTube" note="Mỗi store một key Zernio. Một bài chỉ gửi được qua tài khoản của đúng store.">
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
    ),
  },
  {
    slug: 'market-research',
    group: 'Dropship và thị trường',
    title: 'Market Research',
    short: 'Market Research',
    render: () => <MarketResearchDoc />,
  },
  {
    slug: 'tai-lieu-dropship',
    group: 'Dropship và thị trường',
    title: 'Tài liệu Dropship',
    short: 'Tài liệu Dropship',
    render: () => (
      <Block title="8. Tài liệu Dropship" note="Thư mục 1-dropship/docs trên Drive. Bấm tên file để mở trên Drive; file .md có nút Xem trước ngay trong web.">
    <DocLibrary />
      </Block>
    ),
  },
]

/** Các trang con của Tài liệu, dùng cho menu bên trái (dưới mục Tài liệu). */
export const DOC_PAGES = SECTIONS.map((x) => ({ slug: x.slug, group: x.group, label: x.short }))
export const docSlug = (): string => slugOf()

const slugOf = (): string => { const m = window.location.hash.match(/^#\/docs\/([^/?]+)/); return m && SECTIONS.some((x) => x.slug === m[1]) ? m[1] : SECTIONS[0].slug }

export function Docs() {
  const [slug, setSlug] = useState(slugOf)
  useEffect(() => {
    const on = () => setSlug(slugOf())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const i = SECTIONS.findIndex((x) => x.slug === slug)
  const cur = SECTIONS[i]
  const prev = SECTIONS[i - 1], next = SECTIONS[i + 1]
  return (
    <div className="stack">
      <div className="db-top">
        <div>
          <h1>Tài liệu: luồng hiện tại</h1>
          <p className="note">Cập nhật 21/11/2026. Hình vẽ lại các luồng đang chạy, không phải kế hoạch.</p>
        </div>
      </div>
      {cur.render()}
      <div className="dc-pn">
        {prev ? <a href={`#/docs/${prev.slug}`}>← {prev.title}</a> : <span />}
        {next ? <a href={`#/docs/${next.slug}`}>{next.title} →</a> : <span />}
      </div>
    </div>
  )
}
