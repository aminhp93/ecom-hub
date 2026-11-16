// Mockup HTML Shopify của từng store (KAN-93/94/95). Snapshot 2026-11-11 từ README của các session
// (stores/<store>/4-shopify/README.md). Bản hiện tại (style Noctanest, nhiều ảnh ít chữ) do Claude dựng
// HTML; bản đầu do Muse dựng (0 credit theo Muse) chỉ còn ở link Muse, chưa lưu mã nguồn.
export interface ShopifyPreview {
  task: string
  taskUrl: string
  status: string
  /** Link bản Muse đầu tiên (cần đăng nhập Muse), chỉ để đối chiếu. */
  museUrl: string
  threadUrl: string
  credit: string
  asOf: string
  madeBy: string
  images: string
  includes: string[]
  missing: string[]
  placeholders: string[]
  notes: string[]
  /** Thư mục kết quả của session (tính từ working/). */
  folder: string
}

const JIRA = 'https://phamsworkspace-42448765.atlassian.net/browse/'
const COMMON_MISSING = ['Checkout và thanh toán thật', 'Email đơn hàng', 'Pixel Meta/TikTok', 'Domain', 'Đơn test end-to-end', 'Store Shopify thật (chưa tạo)']
const STYLE = 'Style Noctanest: nền tối #070B14, chữ kem, nhấn hổ phách, serif + Inter, nút viên thuốc'

export const SHOPIFY: Record<string, ShopifyPreview> = {
  whiskerwall: {
    task: 'KAN-93', taskUrl: `${JIRA}KAN-93`, status: 'Mockup HTML xong (file), Jira Done', asOf: '2026-11-11',
    museUrl: 'https://muse.ai/library/artifacts/whiskerwall-store-mockup',
    threadUrl: 'https://muse.ai/thread/6c8d2c21-99f7-4821-96da-fc264d40f1c9',
    credit: '0 (chưa gen ảnh mới)',
    madeBy: 'Claude dựng HTML (bản Muse đầu chỉ còn ở link Muse)',
    images: '12 ảnh: 8 ảnh AI mockup (ảnh neo Higgsfield) + 4 crop; có nhãn "AI mockup image"; không ảnh đối thủ/SucceBuy',
    includes: [
      STYLE,
      'Home: hero full ảnh, dải 4 số, lưới 6 thẻ ảnh, ảnh trước/sau, bảng so sánh, 3 bước lắp, cam kết ✓, FAQ, CTA cuối',
      'Product: gallery 8 ảnh, giá hổ phách, Add to cart sticky mobile, infographic lắp 3 bước, sơ đồ kích thước [TBD]',
      'Collection, Cart, Contact, 4 policy (Refund, Shipping, Privacy, Terms) dạng DRAFT',
    ],
    missing: COMMON_MISSING,
    placeholders: ['Giá "$199 [PLACEHOLDER]"', 'Kích thước, cân nặng, tải trọng [TBD]', 'Ship, đổi trả, ngưỡng free ship', 'Ảnh sản phẩm thật (đang dùng ảnh AI mockup)', 'Nội dung 4 policy chỉ là khung, cần Amin/luật sư duyệt'],
    notes: ['Cảnh báo (theo Muse, chưa xác minh): sản phẩm từng bị loại ở run R18-12, giá Mỹ phổ biến $47–70 so với $129–199 dự kiến. Cân nhắc trước khi chi tiền cho store thật.', 'Đã kiểm qua http local, mobile 375px; chưa kiểm desktop, Safari, file://.'],
    folder: '1-dropship/stores/whiskerwall/4-shopify/',
  },
  aquanest: {
    task: 'KAN-94', taskUrl: `${JIRA}KAN-94`, status: 'Mockup HTML xong (file), Jira Done', asOf: '2026-11-11',
    museUrl: 'https://muse.ai/library/artifacts/~avFOUarJ1VEsFukK648hPw',
    threadUrl: 'https://muse.ai/thread/7d8390b0-e4f9-4a22-94a3-1a246ad6bd01',
    credit: '0 (không gen ảnh/video, ảnh trích bằng ffmpeg)',
    madeBy: 'Claude dựng toàn bộ HTML (Muse trả chậm, trạng thái Disconnected, bản Muse chưa lưu mã)',
    images: '15 file trong assets (dùng 14 + logo): khung hình AI trích từ video creative; 0 ảnh thật; 0 ảnh đối thủ',
    includes: [
      STYLE,
      'Home: hero ảnh, dải số, ảnh bể hở vs có nắp, 4 ô chi tiết, 3 bước (đo, chọn, lắp), bảng so sánh với nắp kính/kit DIY, FAQ',
      'Product: gallery 8 ảnh, chọn hãng/model bể, ô Custom size, mesh/polycarbonate, cut-out, hướng dẫn đo 3 ảnh, sticky Add to cart',
      'Cart (checkout khóa), Contact, Refund (ngoại lệ hàng cắt theo yêu cầu), Shipping, Privacy, Terms',
    ],
    missing: COMMON_MISSING,
    placeholders: ['Giá, thông số, thời gian giao, bảo hành, đổi trả chi tiết: "to be verified"', 'Danh sách model và kích thước bể là mẫu, chưa kiểm với hãng', 'Ảnh sản phẩm thật (hiện có banner "images are AI-generated")', 'Logo avatar đề xuất, chờ Amin duyệt'],
    notes: ['Một số video Higgsfield làm từ ref đối thủ, quyền chưa xác minh (xem README KAN-89); nên thay bằng ảnh thật trước khi chạy ads.', 'Đã kiểm qua localhost: 0 ảnh lỗi, 0 lỗi console, luồng Custom size → cart → policy → contact chạy. Mobile bản dark chưa kiểm riêng; chưa mở bằng file://.'],
    folder: '1-dropship/stores/aquanest/4-shopify/',
  },
  heartbond: {
    task: 'KAN-95', taskUrl: `${JIRA}KAN-95`, status: 'Mockup HTML xong (file), Jira Done', asOf: '2026-11-11',
    museUrl: 'https://muse.ai/library/artifacts/heartbond-html-mockup',
    threadUrl: 'https://muse.ai/thread/8b5e5b71-d79b-4cb0-8d20-542d3a0d45a3',
    credit: '0',
    madeBy: 'Claude dựng toàn bộ HTML (tin style gửi Muse không thấy hiện trong thread; bản Muse chưa lưu mã)',
    images: '18 ảnh: 16 khung AI demo từ video creative + 2 ảnh TẠM chưa có quyền (TMP-ring-*); guide size là SVG',
    includes: [
      STYLE,
      'Home: hero ảnh, dải số, lưới 6 thẻ, lưới người nhận, 3 bước, cam kết ✓, FAQ, CTA cuối',
      'Product Hug Ring "To My Granddaughter": gallery 8 ảnh, giá hổ phách, tab Details/Size/Shipping/Care, sticky Add to cart',
      'Collection, Cart, Checkout preview (Pay tắt), Contact, 4 policy DRAFT; nút "Toggle labels" ẩn/hiện nhãn ảnh',
    ],
    missing: COMMON_MISSING,
    placeholders: ['Giá, chất liệu, size, giao hàng, đổi trả, email, nội dung policy (đánh dấu vàng)', 'Dải số chỉ có "2 tiny hands", "1 message card" (TBC), còn lại PLACEHOLDER'],
    notes: ['2 ảnh TẠM (TMP-ring-*) có thể dựa trên ảnh tham chiếu đối thủ, chưa có quyền: thay trước khi dùng thật.', 'Nhẫn trong ảnh AI có thể khác mẫu của supplier; cần ảnh thật trước khi chạy ads.', 'Đã kiểm qua localhost: 10 trang chuyển được, 28 thẻ ảnh không lỗi, không link ngoài. Font không nhúng (máy không cài thì Georgia/system sans); chưa kiểm Safari/điện thoại thật.'],
    folder: '1-dropship/stores/heartbond/4-shopify/',
  },
}
