# Changelog

Định dạng theo [Keep a Changelog](https://keepachangelog.com/vi/1.1.0/). Bản nháp cho release đầu tiên, soạn 2026-11-10 từ code hiện tại và lịch sử làm việc (KAN-83, 84, 87, 89, 90, 91, 92). `version` trong `package.json` đã đặt `0.0.1`. Chưa gắn tag git (thư mục này chưa là git repo).

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
