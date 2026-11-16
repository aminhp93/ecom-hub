# Changelog

Định dạng theo [Keep a Changelog](https://keepachangelog.com/vi/1.1.0/). Bản nháp cho release đầu tiên, soạn 2026-11-10 từ code hiện tại và lịch sử làm việc (KAN-83, 84, 87, 89, 90, 91, 92). `version` trong `package.json` đã đặt `0.0.1`. Chưa gắn tag git (thư mục này chưa là git repo).

## [Unreleased]

### Thêm
- Tab **Video flow** trong chi tiết store (KAN-102, 13/11/2026), đặt sau tab Creative:
  - Router 3 flow (Flow 1 ảnh + prompt có biến, Flow 2 video ref với 2a/2b, Flow 3 remix asset sạch quyền), workflow mặc định 2a → 1 → 3, thứ tự fallback và bằng chứng P0; tóm tắt từ `1-dropship/docs/3-creative/8-video-flows.md` v1.0, nằm ở `src/data/videoFlows.ts` (sửa doc thì cập nhật file này).
  - Bảng flow + cổng A/C/B của từng creative, đếm số video theo flow.
  - Bảng **asset ledger** (asset_id, loại, nguồn, rights_status, status, flow · dùng ở, ghi chú) đọc từ trường mới `assetLedger` của store trong `seed.ts`; dữ liệu lấy từ `0-dashboard/task-hub/KAN-102/output/05b-ASSET-LEDGER-mau.csv` (14 dòng: WW 8, AN 2, HB 4; người kiểm và ngày kiểm còn "(mẫu)", chưa dòng nào approved).
- Creative có thêm trường `flow` (1 / 2a / 2b / 3), `gates` (A prompt, C ảnh neo, B video: Đạt / Không đạt / Chưa review / Không áp dụng) và `flowNote`; hiện thành pill ở cả dạng danh sách và dạng thẻ, sửa được trong form creative.
  - Flow của 75 video cũ được **gán hồi tố** theo công cụ và ref trong kit (chưa xác minh từng video): Genjutsu / replace object có video nguồn → 2b (kèm cảnh báo ref chưa rõ quyền hoặc của đối thủ; A22 và HR-B6 ghi đề xuất gỡ bài theo quyết định 13/11, Amin làm); A24 (WW) và HR-D1-FLOW → 2a; còn lại → 1. FB-PROFILE không gắn flow.
  - Cổng: "Đạt" khi trạng thái cũ là "Đã qua cổng" (và PT1-A12 v3 Đạt có ghi chú); R7-V13-FLOW cổng B "Không đạt"; còn lại "Chưa review".
- Thêm creative **WW-P0-F3-route-v1** (Flow 3, 14,4 s, 0 credit, file trong `0-dashboard/task-hub/KAN-102/output/pilot-P0/`), chưa review cổng B, chưa đăng.
- `seedRev`: WhiskerWall 18 → 19, AquaNest 23 → 24, HeartBond 44 → 45 (Creative lấy lại theo seed; chỉnh tay creative trong trình duyệt của 3 store sẽ bị thay).
- Trang **TikTok Shop US** (`#/tiktok`, mục thứ 4 trên sidebar) theo format bảng theo dõi học viên của Huy Tim: timeline 8 bước ("Bạn ở đây", "xong 16/10", số bài tập), cột Tài liệu theo bước (bấm mở file trên Drive, chỉ dev), tab Quá trình / Bài giảng / Bài tập / Tài liệu.
- Khung "KAN-86 đã làm đến đâu" (3 mục tiêu: xong / một phần / chờ) và "Gợi ý việc tiếp theo" gắn Amin / Claude / Huy.
- Tab **Preview Shopify** trong chi tiết store (WhiskerWall, AquaNest, HeartBond; KAN-93/94/95): nhúng và mở trực tiếp **file HTML mockup** lưu trong Drive (`workspace/<store>/4-shopify/mockup/index.html`, ảnh tương đối trong `assets/`), kèm ai làm, số ảnh, mục có trong mockup / chưa có / còn placeholder, link thread và bản Muse cũ. Mockup theo style Noctanest (nền tối, nhấn hổ phách, nhiều ảnh ít chữ); HTML do Claude dựng, ảnh là khung AI demo và ảnh tạm, chưa có ảnh sản phẩm thật. Dữ liệu ở `src/data/shopifySeed.ts` (không dùng `seedRev`). Route dev `/mockup/<store>/` phục vụ file (chỉ đọc, chặn `../`).
- Bảng điều khiển sync 2026-11-11 (`DASH_SEED_REV` 3): Done KAN-87, 89, 90, 91, 93, 94, 95, 96, GEN-1; giữ KAN-86 (In Progress), thêm KAN-97 (Idea).
- Dữ liệu là bản chụp 2026-11-10 trong `src/data/tiktokSeed.ts`, không tự đồng bộ; chỗ chưa có ghi CHƯA NHẬN.

## [0.0.1] - 2026-11-10

Bản đầu tiên: web quản lý store dropship theo một template chung. Vite + React 19 + TypeScript, dữ liệu lưu trong trình duyệt (localStorage), chưa có backend.

### Điều hướng
- Sidebar bên trái với 3 mục: **Store**, **Sản phẩm Market Research**, **Bảng điều khiển** (hash routing: `#/`, `#/store/<id>`, `#/products`, `#/dashboard`).
- Sidebar thu gọn được (chỉ còn icon, có tooltip); trạng thái được nhớ qua lần tải lại. Trên mobile (dưới 820px) menu thành thanh ngang.
- Bố cục rộng hơn: khung ngoài tối đa 1840px, nội dung không giới hạn bề ngang.
- Bỏ thanh trên cùng (dòng mô tả và hai chấm trạng thái Local / Supabase).

### Store (`#/`)
- Danh sách store: tìm theo tên, sản phẩm, mã KAN; tạo, sửa, xóa; nút "Đưa về dữ liệu mẫu ban đầu".
- Cột: Store, Jira (task Done cũ và task đang chạy), Trạng thái, Product info, Còn thiếu, Creative (số video / số mục), Social (số kênh đã đăng bài đầu), Cập nhật.
- Dữ liệu thật của 3 store: **WhiskerWall** (kệ leo tường cho mèo), **AquaNest** (nắp bể cá rimless), **HeartBond** (nhẫn Hug Ring).
- `seedRev` theo từng store: tăng số này trong seed thì bản đã lưu trong trình duyệt của store đó bị thay bằng seed.

### Chi tiết store (`#/store/<id>`)
- 4 tab: **Product info**, **Creative**, **Social**, **Task & agent** (tên tab không còn kèm số đếm).
- Đầu trang: trạng thái, Jira, thị trường, ngày cập nhật; khung tóm tắt Product info bắt buộc, Creative, Social, "Ai đang làm".

#### Product info
- **Thông tin chính** ở trên cùng, mỗi mục một dòng: hình ảnh sản phẩm (ảnh thu nhỏ, bấm để xem lớn và mở ảnh gốc), Facebook page / Web / Ads của đối thủ, Giá mua, Giá bán, và link kênh TikTok, Facebook, YouTube, Instagram của store.
- **Thông tin chi tiết** thu gọn bên dưới: bảng đầy đủ (nhóm, giá trị, nhãn bằng chứng, nguồn, ngày), sửa từng dòng, link tự bấm được. Ô chưa có dữ liệu hiện "Trống".
- Avatar store xem lớn, tải về.

#### Creative
- Bảng creative (video và nháp) dạng thẻ hoặc danh sách, lọc Tất cả / Video / Nháp, tạo, sửa, xóa.
- Mỗi mục có trạng thái cổng, định dạng, hook, preview video (từ `/media/`), và **kit gen**: công cụ (Higgsfield / Muse / Google Flow), cấu hình, prompt, ref (video, nhân vật, sản phẩm).
- Gom video và ref của AquaNest vào một folder Drive (`1-dropship/workspace/aquanest/3-creative/`, 17 video + ref + prompt) và hiển thị nguồn, prompt, ref cho từng video (KAN-89). HeartBond (KAN-90) và WhiskerWall (KAN-91) đã có session làm theo cùng cách, đang chờ duyệt.

#### Social
- 4 kênh (Facebook, Instagram, TikTok, YouTube): thông tin kênh (tên, handle, link, mô tả, email, danh mục), trạng thái kênh, danh sách bài, lọc theo kênh, thêm bài, mở từng bài.
- Mỗi bài: tiêu đề, định dạng, trạng thái (Chưa đăng / Đã lên lịch / Đã đăng), link, ngày, ghi chú, caption, hashtag; sao chép caption + hashtag; xóa bài.
- Gửi bài lên **Zernio** từ giao diện (lưu nháp hoặc hẹn giờ), luôn hỏi xác nhận trước khi gửi.
- Số đã đăng lấy theo báo cáo của Muse; các ô chưa tự kiểm ghi rõ "chưa xác minh".

#### Task & agent
- Task Jira liên quan và các agent (Claude, Muse, Codex, Amin) đang làm từng task: trạng thái, ghi chú.

### Sản phẩm Market Research (`#/products`)
- Bảng sản phẩm từ Google Sheet "Market Research" (bản xuất 2026-11-09, 12 sản phẩm), tìm theo tên.
- Sửa như Excel: nhấp đúp để sửa ô, Enter lưu, Shift+Enter xuống dòng, Esc hủy. Chỉnh sửa lưu trong trình duyệt, không ghi ngược về Sheet. Nút đưa về dữ liệu Sheet ban đầu.

### Bảng điều khiển (`#/dashboard`)
- Lịch tháng và sự kiện, dải "Cần chú ý", các widget (Dropship, AI, Gói đăng ký...).
- Bảng task theo nhóm **In Progress**, **To do**, **Idea** (mã Jira, hạn, input, progress, output, ghi chú tiếp theo / blocker); dòng "Đang làm" đánh dấu task focus.
- Dữ liệu là bản chụp trong `dashboardSeed.ts`, đã sync với Jira ngày 2026-11-10 (KAN-80..84, KAN-64, 78, 79, KAN-2, GEN-2 đã Done). Chưa tự đồng bộ; đã bỏ banner "Snapshot".
- Bỏ card "Agent đang làm các task" khỏi trang chủ Store (còn trong tab Task & agent của từng store).

### Dev server
- Phục vụ video và ảnh từ thư mục `working` qua `/media/<đường dẫn>` (chỉ dev/preview).
- Cầu nối `/zernio/accounts`, `/zernio/publish` cho nút gửi bài lên Zernio.

### Giới hạn đã biết
- Dữ liệu lưu trong trình duyệt (localStorage), không đồng bộ giữa máy hoặc trình duyệt. Supabase chưa bật (chờ Amin duyệt).
- `/media/` chỉ chạy ở dev server; bản deploy cần storage thay thế.
- Dữ liệu social lấy từ báo cáo Muse (08–10/11/2026), Claude chưa tự mở từng kênh. Chưa kiểm được: Instagram của WhiskerWall (bị chặn phiên Muse), Page Facebook của AquaNest (Muse 10/11: không thấy trong danh sách Page quản lý, mở thẳng báo "không khả dụng").
- Product info còn nhiều ô trống (nhà cung cấp, giá mua, giá bán, hướng dẫn sử dụng) vì chưa có dữ liệu xác minh; ảnh sản phẩm hiện là ảnh tham chiếu, chưa xác minh là đúng sản phẩm của mình.
- Tăng `seedRev` của một store sẽ ghi đè mọi chỉnh sửa tay của store đó trong trình duyệt.
- Chưa kiểm giao diện chế độ tối và Safari/Firefox.
