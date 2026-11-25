# Mẫu video (video templates)

Các mẫu tái sử dụng để gen video sản phẩm: chỉ đổi sản phẩm, phòng, mèo và
2 dòng text là ra video mới, không cần viết lại brief/prompt từ đầu.

| Mẫu | Nguồn | Cấu trúc | Khi dùng |
|---|---|---|---|
| [whiskerwall-flow2-floor-to-wall.md](whiskerwall-flow2-floor-to-wall.md) | whiskerwall-138-01 v2 (25/11/2026) | 15 s, 2 clip × 7.5 s, 1 cắt ở 7.5 s | Kệ/tủ treo tường: linh kiện trên sàn → cắt cứng → tường đã lắp, mèo leo lên |
| Flow 3 — 4 cảnh × 3.75 s | whiskerwall-139-01 v2 (25/11/2026) | 15 s, 4 cảnh × 3.75 s, cắt ở 3.75/7.50/11.25 s | Remix khung hình ref đối thủ, đổi sản phẩm sang của store (chưa tách thành file mẫu riêng) |
| Flow 1 — 2 clip × 7.5 s | whiskerwall-137-01 (25/11/2026) | 15 s, 2 clip × 7.5 s, 1 nối ở 7.5 s | Tự nghĩ từ angle/hook, không cần anchor phòng mới |

Kiểu text chuẩn cho mọi mẫu: chữ trắng Liberation Sans Bold 74 pt + halo mờ
+ bóng đổ (xem mục 4 trong file mẫu F2). Chi phí thực tế mỗi video 11–12M
Additional tokens (chạy sạch ≈ 6M; thử lại là thứ đội chi phí).
