// Trang "TikTok Shop US" (theo format bảng theo dõi học viên của Huy Tim). Snapshot 2026-11-10 từ
// 2-tiktok/ và task-hub/KAN-86. Fact = có file; chỗ chưa có ghi CHƯA NHẬN / THIẾU. Không tự đồng bộ.
export type StepState = 'done' | 'doing' | 'almost' | 'todo'

export interface TkDoc {
  title: string
  /** Đường dẫn tính từ thư mục working (mở qua /drive-id/ khi dev). Trống = CHƯA NHẬN. */
  path?: string
  note?: string
}
export interface TkStep {
  n: number
  title: string
  state: StepState
  /** Chữ nhỏ cạnh tiêu đề, ví dụ "xong 16/10". */
  tag?: string
  here?: boolean
  summary: string[]
  missing?: string[]
  docs: TkDoc[]
  exercises: TkDoc[]
}
export interface TkGoal { t: string; state: 'done' | 'partial' | 'wait'; detail: string }
export interface TkFileGroup { label: string; note?: string; docs: TkDoc[] }
export interface TkNext { who: 'Amin' | 'Claude' | 'Huy'; t: string }

const T = '2-tiktok/'
const M1 = `${T}03-Tai-lieu/01-mentor/buoc-1/tai-lieu/`
const M2 = `${T}03-Tai-lieu/01-mentor/buoc-2/tai-lieu/`
const K86 = '0-dashboard/task-hub/KAN-86/output/'
const K86t = '0-dashboard/task-hub/KAN-86/'
const K88 = '0-dashboard/task-hub/archive/KAN-88/'

export const TIKTOK = {
  snapshotAt: '2026-11-10',
  title: 'TikTok Shop US với Huy Tim',
  mentorProgress: { done: 2, total: 8, note: 'Cập nhật 10/11/2026 (Amin): Bước 1 xong, Bước 4 xong 16/10, đang ở Bước 2. (Bảng gốc của Huy trước đó ghi 1/8, "Bạn ở đây" ở Bước 1.)' },
  task: { key: 'KAN-86', url: 'https://phamsworkspace-42448765.atlassian.net/browse/KAN-86', status: 'In Progress' },
  taskFiles: [
    { label: 'input', note: 'Chỉ có README, chưa có file đầu vào nào khác', docs: [
      { title: 'input/README.md', path: `${K86t}input/README.md` },
    ] },
    { label: 'progress', docs: [
      { title: 'progress/README.md', path: `${K86t}progress/README.md` },
      { title: '02-file-tinh-gia/02_TinhGia_TuDong_output_2026-11-09.xlsx', path: `${K86t}progress/02-file-tinh-gia/02_TinhGia_TuDong_output_2026-11-09.xlsx` },
      { title: '02-file-tinh-gia/…_truoc-fastmoss.xlsx', path: `${K86t}progress/02-file-tinh-gia/02_TinhGia_TuDong_output_2026-11-09_truoc-fastmoss.xlsx` },
      { title: '02-file-tinh-gia/Supplier_Pricing_By_Supplier_KAN86_copy.xlsx', path: `${K86t}progress/02-file-tinh-gia/Supplier_Pricing_By_Supplier_KAN86_copy.xlsx` },
      { title: '02-file-tinh-gia/TinhGia_TuDong_KAN86_copy.xlsx', path: `${K86t}progress/02-file-tinh-gia/TinhGia_TuDong_KAN86_copy.xlsx` },
      { title: '02-file-tinh-gia/gia-trung-binh-amazon.md', path: `${K86t}progress/02-file-tinh-gia/gia-trung-binh-amazon.md` },
      { title: 'tracker-cu-04/README-04-progress-task-2026-11-09.md', path: `${K86t}progress/tracker-cu-04/README-04-progress-task-2026-11-09.md` },
      { title: 'tracker-cu-04/buoc-1-cho-file-keyword/README.md', path: `${K86t}progress/tracker-cu-04/buoc-1-cho-file-keyword/README.md` },
      { title: 'tracker-cu-04/buoc-1-cho-file-keyword/README-cu.md', path: `${K86t}progress/tracker-cu-04/buoc-1-cho-file-keyword/README-cu.md` },
    ] },
    { label: 'output', docs: [
      { title: 'output/tien-do-buoi-1-3.md', path: `${K86t}output/tien-do-buoi-1-3.md` },
      { title: 'output/gia-trung-binh-amazon.md', path: `${K86t}output/gia-trung-binh-amazon.md` },
      { title: 'output/tin-supplier-soan.md', path: `${K86t}output/tin-supplier-soan.md` },
      { title: 'output/TinhGia_TuDong_KAN86_copy.xlsx', path: `${K86t}output/TinhGia_TuDong_KAN86_copy.xlsx` },
      { title: 'output/Supplier_Pricing_By_Supplier_KAN86_copy.xlsx', path: `${K86t}output/Supplier_Pricing_By_Supplier_KAN86_copy.xlsx` },
    ] },
  ] as TkFileGroup[],
  goals: [
    { t: '1. Sync tiến độ buổi 1–3 với Huy', state: 'partial', detail: 'Có bản nháp tiến độ (tien-do-buoi-1-3). Buổi 1 và 3 THIẾU ghi chép; buổi 2 (26/10) có từ content-management. Chờ Amin bổ sung note.' },
    { t: '2. Phân tích dữ liệu Amazon/TikTok US', state: 'partial', detail: 'Xong phần Amazon: 699 dòng → 138 sản phẩm đúng phạm vi, giá trung vị theo nhóm, bản copy file tính giá có 10 nhóm (đề xuất, chưa kiểm công thức). Dữ liệu TikTok US Huy nói đã cào: CHƯA THẤY. 10/11: lọc nhóm xơ mướp (71 dòng) vào sheet "AMAZON XƠ MƯỚP" của file giá KAN-88: giá trung vị 9,99 USD/gói (tự nhiên 10,99; nylon 8,99), giá/cái trung vị 3,33 (tự nhiên 4,00; nylon 2,50). Chỉ 2 dòng là đồ chơi chim, không có cho thỏ; chỉ dùng tham chiếu, không thay số FastMoss.' },
    { t: '3. Hỏi supplier báo giá cho meeting', state: 'wait', detail: 'Sunnyhomey, HiBrews đã có báo giá (2/7 bên cũ). KAN-88 (SP2/5/7/8): 09/11 Muse gửi Facebook Messenger cho 6 bên (Petami, Ecoka, Viet Trang, Mộc Xơ, Làng Mướp, Vi Lâm); 10/11 Ecoka và Mr Mướp (Khoa) trả lời thật, Viet Trang/Vi Lâm chỉ tự động. Chưa bên nào báo giá bằng số. Còn 1688 chưa liên hệ.' },
  ] as TkGoal[],
  next: [
    { who: 'Amin', t: 'Xác nhận "file giá bán" là TinhGia_TuDong.xlsx và ngày meeting tuần này (chưa xác minh).' },
    { who: 'Huy', t: 'Hỏi Huy dữ liệu TikTok US đã cào (đang chỉ có Amazon) và đề bài tab Bài tập.' },
    { who: 'Amin', t: 'Duyệt rồi gửi follow-up cho Sunnyhomey và HiBrews: hỏi Incoterm (FOB/EXW), cân nặng, lead time, mẫu, MOQ bậc thấp.' },
    { who: 'Claude', t: 'Kiểm tính lại công thức file tính giá khi có Excel/LibreOffice, rồi nhập số đã xác nhận.' },
    { who: 'Amin', t: 'Ecoka: gửi ảnh mẫu bóng + gậy/dây (đã gửi ảnh 10/11), chờ báo giá theo mốc 100/500/1.000, phí mẫu (hoàn khi lên đơn), hỏi "hộp" trong master box là loại nào.' },
    { who: 'Amin', t: 'Mr Mướp/Làng Mướp: hỏi lại 5 câu (cắt xơ mướp Ø7–8 cm, giá, kiểm nghiệm, MOQ, mẫu); họ xin số Zalo, anh quyết có cho không.' },
    { who: 'Amin', t: 'Viet Trang: họ hướng sang sales@viettrangcraft.com / WhatsApp +84 915709 666; Vi Lâm: 0972 997 510. Quyết có nhắn tiếp kênh đó không.' },
    { who: 'Claude', t: 'Cập nhật trang này sau mỗi báo giá hoặc tài liệu mới (KAN-88 cho SP2/5/7/8); nhập NHẬP HÀNG khi có giá bằng số.' },
  ] as TkNext[],
  steps: [
    {
      n: 1, title: 'Phân tích: keyword sản phẩm & dữ liệu Kalodata US', state: 'done', tag: 'xong 10/11',
      summary: [
        'Học tư duy ngách và công cụ FastMoss (tài liệu mentor).',
        'Bài tập nghiên cứu ngách đồ chơi thú cưng tự nhiên: 5 sản phẩm + keyword, vệ tinh, xưởng & RFQ.',
        'Buổi 2 (26/10): hướng loofah/xơ mướp, sản phẩm nhẹ, gọn, tròn.',
        'Dữ liệu Huy gửi 09/11: Amazon US/Kalodata, 699 ASIN → 138 sản phẩm; giá trung vị theo nhóm (ví dụ bông tắm xơ mướp 4,00 USD, lưới nylon 2,50 USD).',
      ],
      missing: ['Amin báo Bước 1 đã xong 10/11. Chưa có trong folder (ghi để truy vết, không chặn): file Excel keyword buổi 1, dữ liệu TikTok US Huy cào, note buổi 1 và 3'],
      docs: [
        { title: 'Tìm ngách bằng tư duy (US)', path: `${M1}tim-ngach-us.pdf` },
        { title: 'Sổ tay dùng AI (PDF)', path: `${M1}so-tay-dung-ai-fastmoss.pdf` },
        { title: 'Bộ prompt FastMoss', path: `${M1}Bộ prompt FastMoss.html` },
        { title: 'Dữ liệu Amazon/Kalodata 09/11 (báo cáo)', path: `${T}03-Tai-lieu/02-du-lieu-noi-bo/buoc-1-amazon-kalodata/du-lieu/tai-lieu-huy-2026-11-09/BaoCao_Amazon_US_VatLieu_ThucVat.pdf` },
        { title: 'Giá trung bình Amazon (KAN-86)', path: `${K86}gia-trung-binh-amazon.md` },
      ],
      exercises: [
        { title: 'Nghiên cứu ngách & keyword đồ chơi thú cưng tự nhiên', path: `${T}02-Bai-tap/01-buoc-1-keyword-data-us/bai-tap-va-ket-qua/Đồ chơi thú cưng tự nhiên — Nghiên cứu ngách & keyword (2).html` },
        { title: 'Workbook nghiên cứu (tổng quan, vệ tinh, xưởng & RFQ)', path: `${T}02-Bai-tap/01-buoc-1-keyword-data-us/bai-tap-va-ket-qua/output-nghien-cuu-do-choi-thu-cung` },
        { title: 'File Excel keyword buổi 1', note: 'CHƯA NHẬN (Bước 1 đã đóng theo Amin)' },
      ],
    },
    {
      n: 2, title: 'Tìm nhà cung cấp & mẫu mã tại Việt Nam / Trung Quốc', state: 'doing', tag: 'đang làm, đang tắc', here: true,
      summary: [
        'Gửi tin cho 7 supplier (theo Amin), 2 bên trả lời: Sunnyhomey (QUO261027Z01, 30 mã, 0,077–0,596 USD, MOQ 300, lục bình MOQ 2.000) và HiBrews (0,36–0,465 USD, MOQ 500+).',
        'Bảng giá theo supplier đã bổ sung LD004–LD019; soạn tin follow-up (bản nháp, chưa gửi).',
        'KAN-88 (SP2 bộ gặm, SP5 túi cỏ, SP7 ống chui, SP8 giá cỏ): Muse tìm 42 supplier VN + 1688; 09/11 gửi Messenger 6 bên VN (Amin duyệt nội dung). 10/11 Ecoka trả lời: làm bóng Ø7–8 cm từ lục bình/cói/mây + gậy/dây tre theo mẫu, đơn thử từ 100/mẫu, mẫu có phí hoàn khi lên đơn, 5–7 ngày, FOB hoặc nội địa, có hồ sơ xuất khẩu (theo lời Ecoka, chưa kiểm chứng).',
        '10/11 Mr Mướp (Khoa) trả lời: làm đồ gặm từ xơ mướp (bên trong độn xơ mướp), xuất Nhật >10 năm (theo lời họ). Viet Trang, Vi Lâm, Làng Mướp: tin tự động hướng sang email/Zalo/SĐT; Mộc Xơ, Petami chưa trả lời.',
        'Bài tập mentor: đào sâu sản phẩm đặc trưng Việt Nam cho thị trường US (Amin tự làm); FastMoss + Kalodata → file tính giá → xem xét số lượng nhập.',
      ],
      missing: [
        'Vì sao tắc: MOQ nhập thử ~100 < MOQ 300; Incoterm Sunnyhomey mâu thuẫn FOB/EXW',
        'Thiếu: cân nặng, carton/CBM, lead time, mẫu, test/hóa chất, HS code, OEM, an toàn cho thú nhỏ',
        'Chưa có báo giá: Shengfeng, King Craft Viet, Uni-Oriental, Takimex, Meierluo; KAN-88: chưa bên nào báo giá bằng số (Ecoka chờ ảnh mẫu), 1688 chưa liên hệ, SP5/7/8 chưa nhắn bên nào',
      ],
      docs: [
        { title: 'Tìm nhà cung cấp (US)', path: `${M2}tim-nha-cung-cap-us.pdf` },
        { title: 'File tính giá (TinhGia_TuDong)', path: `${M2}TinhGia_TuDong.xlsx` },
        { title: 'Bản copy file tính giá KAN-86 (10 nhóm Amazon)', path: `${K86}TinhGia_TuDong_KAN86_copy.xlsx` },
        { title: 'Bảng giá theo supplier (copy KAN-86)', path: `${K86}Supplier_Pricing_By_Supplier_KAN86_copy.xlsx` },
        { title: 'Tin soạn cho supplier', path: `${K86}tin-supplier-soan.md` },
        { title: 'KAN-88: thông tin nhà cung cấp + nhật ký liên hệ', path: `${K88}progress/01_Thong_Tin_Nha_Cung_Cap_KAN88.xlsx` },
        { title: 'KAN-88: file tính giá (có sheet Amazon xơ mướp)', path: `${K88}progress/02_TinhGia_TuDong_KAN88.xlsx` },
      ],
      exercises: [
        { title: 'Đào sâu sản phẩm VN cho US', note: 'Đề bài CHƯA NHẬN; Amin tự làm' },
      ],
    },
    { n: 3, title: 'Nhập hàng, packing mẫu mã & dán barcode', state: 'todo', summary: [], docs: [], exercises: [] },
    {
      n: 4, title: 'Đăng ký LLC & giấy tờ', state: 'done', tag: 'xong 16/10', summary: ['Theo bảng của Huy: xong 16/10.'],
      docs: [{ title: 'Đăng ký LLC (US)', path: `${T}03-Tai-lieu/01-mentor/buoc-4-llc/dang-ky-llc-us.pdf` }], exercises: [],
    },
    { n: 5, title: 'Đăng ký đơn vị fulfillment', state: 'todo', summary: [], docs: [], exercises: [] },
    { n: 6, title: 'Liên kết đơn vị logistics', state: 'todo', summary: [], docs: [], exercises: [] },
    { n: 7, title: 'Đăng ký tài khoản & list sản phẩm', state: 'todo', summary: [], docs: [], exercises: [] },
    { n: 8, title: 'Bán hàng & đơn đầu tiên', state: 'todo', summary: [], docs: [], exercises: [] },
  ] as TkStep[],
}
