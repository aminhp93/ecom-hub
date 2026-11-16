# Store Hub

Web quản lý store dropship theo một template chung (KAN-83). Vite + React + TypeScript.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # kiểm kiểu + build
```

## Cấu trúc
- `src/pages/StoreList.tsx`: danh sách store, tạo / sửa / xóa / tìm kiếm.
- `src/pages/StoreDetail.tsx`: chi tiết store (Product info, Creative, Video flow, Social, Preview Shopify, Task & agent).
- `src/components/VideoFlowTab.tsx` + `src/data/videoFlows.ts`: tab Video flow (KAN-102): router 3 flow, cổng A/C/B của creative, asset ledger (`assetLedger` trong seed).
- `src/components/`: bảng Product info, Creative, kênh Social, form, modal.
- `src/data/types.ts`: kiểu dữ liệu. `template.ts`: template store mới (20 dòng Product info, 4 kênh).
- `src/data/repo.ts`: giao diện lưu trữ. `localRepo.ts`: bản đang dùng (localStorage). `index.ts`: nơi chọn repo.
- Dữ liệu seed không nằm trong code: `0-dashboard/dashboard-data/dashboard.json` và `1-dropship/stores/<store>/store.json` (thứ tự `stores/_index.json`) trong thư mục Working (`WORKING_ROOT`), nạp qua module ảo `virtual:working-data` (xem `vite.config.ts`). Sau khi sửa JSON, tải lại trang; store có `seedRev` mới hơn bản đã lưu thì được nạp lại, hoặc dùng nút "Đưa về dữ liệu mẫu".

## Chuyển sang Supabase
Viết `supabaseRepo.ts` cùng giao diện `StoreRepo` rồi đổi một dòng trong `src/data/index.ts`. UI không đổi.

## Video và ảnh
Trường `media` (Video, Post) là đường dẫn tính từ thư mục `working`; dev server phục vụ qua `/media/...` (xem `vite.config.ts`). Bản deploy cần storage thay thế.

## Chưa làm
- Supabase (chờ Amin duyệt bản local).
- Chưa nhập: Creative kit và Chi phí gen của WhiskerWall, ảnh/video nhúng trong artifact, video Flow của AquaNest (xem `task-hub/KAN-83/progress/README.md`).
