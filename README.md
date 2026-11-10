# Store Hub

Web quản lý store dropship theo một template chung (KAN-83). Vite + React + TypeScript.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # kiểm kiểu + build
```

## Cấu trúc
- `src/pages/StoreList.tsx`: danh sách store, tạo / sửa / xóa / tìm kiếm.
- `src/pages/StoreDetail.tsx`: chi tiết 3 tab (Product info, Creative, Social).
- `src/components/`: bảng Product info, Creative, kênh Social, form, modal.
- `src/data/types.ts`: kiểu dữ liệu. `template.ts`: template store mới (20 dòng Product info, 4 kênh).
- `src/data/repo.ts`: giao diện lưu trữ. `localRepo.ts`: bản đang dùng (localStorage). `index.ts`: nơi chọn repo.
- `src/data/seed.ts`: dữ liệu thật của 3 store (nhập 2026-11-08 từ artifact + Excel; sau khi đổi seed, dùng nút "Đưa về dữ liệu mẫu ban đầu" để nạp lại).

## Chuyển sang Supabase
Viết `supabaseRepo.ts` cùng giao diện `StoreRepo` rồi đổi một dòng trong `src/data/index.ts`. UI không đổi.

## Video và ảnh
Trường `media` (Video, Post) là đường dẫn tính từ thư mục `working`; dev server phục vụ qua `/media/...` (xem `vite.config.ts`). Bản deploy cần storage thay thế.

## Chưa làm
- Supabase (chờ Amin duyệt bản local).
- Chưa nhập: Creative kit và Chi phí gen của WhiskerWall, ảnh/video nhúng trong artifact, video Flow của AquaNest (xem `task-hub/KAN-83/progress/README.md`).
