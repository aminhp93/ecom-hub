// Thang tiêu chí KAN-115 B2 (Amin duyệt 17/11/2026). Nguồn: task-hub/KAN-115/output/02-tieu-chi-ads-vs-social.md. Sửa file đó thì cập nhật lại ở đây.
export interface CritRow { id: string; name: string; how: string; src: string }

export const GATES_G: CritRow[] = [
  { id: 'G1', name: 'Sản phẩm đúng hình thái, màu, SKU; không thêm cơ chế không có', how: 'So khung với ảnh/REFERENCE', src: 'B2, A2, A3' },
  { id: 'G2', name: 'Không claim ngoài Product Truth / forbidden_claims', how: 'Đọc chữ, prompt, caption', src: 'A7, P6' },
  { id: 'G3', name: 'Không chữ, logo, footage đối thủ; video đối thủ không nằm trong timeline', how: 'Xem khung, ledger', src: 'A6, P2' },
  { id: 'G4', name: 'Asset có dòng ledger; quyền là owned, licensed hoặc permitted, có bằng chứng', how: 'ASSET-LEDGER.csv', src: 'P1' },
  { id: 'G5', name: 'Không watermark hiển thị (✦ của Flow, chữ "Veo"), không crop hay che', how: 'Trích khung góc dưới phải', src: 'P3' },
  { id: 'G6', name: 'Nhân vật AI có nhãn; không giả khách thật, review giả, người nổi tiếng', how: 'Xem video và prompt', src: 'P5' },
  { id: 'G7', name: 'Không lỗi AI rõ (xuyên vật, biến dạng, ngón thừa, UI/logo)', how: 'Trích khung 0,5 s', src: 'B11' },
]

export const ADS_Q: CritRow[] = [
  { id: 'Q1', name: 'Hook 0–3 s: có vấn đề hoặc tò mò rõ; cho phép sản phẩm vào sớm', how: '0 = không hook, 2 = hook rõ', src: 'B9, A5' },
  { id: 'Q2', name: 'Giá trị/lợi ích thấy được (một thao tác chính, không cần giải thích)', how: '0–2', src: 'B3' },
  { id: 'Q3', name: 'CTA hoặc thông điệp cuối rõ (chữ hậu kỳ hoặc dòng cuối)', how: '0 = thiếu, 2 = đọc được', src: 'B10' },
  { id: 'Q4', name: 'Chữ đọc được, vùng an toàn, trên 1/5 khung trống', how: '0–2', src: 'B5, C7' },
  { id: 'Q5', name: 'Nhịp và độ dài hợp ads: 6–15 s prospecting, demo 15–30 s (nguồn blog, chưa xác minh); clip 8 s chưa đủ cấu trúc ghi 0–1', how: 'Độ dài thật', src: 'B8' },
  { id: 'Q6', name: 'Sản phẩm là trung tâm, đúng hình, không bị che', how: '0–2', src: 'B4, B2' },
  { id: 'Q7', name: '9:16, từ 720p (1080 khuyến nghị: chưa xác minh)', how: 'ffprobe', src: '8-flows mục 3' },
  { id: 'Q8', name: 'Nhạc/âm: license thương mại hoặc không nhạc (nhạc model sinh: chưa xác minh)', how: 'Ledger; chưa nghe nên thường để trống', src: 'P7' },
  { id: 'Q9', name: 'Kiểm thử A/B được (một biến đổi rõ: hook, angle hoặc CTA)', how: 'Có angle và hook trong List Angle', src: '5-formats B' },
]

export const SOCIAL_S: CritRow[] = [
  { id: 'S1', name: 'Hook 0–3 s (cảm xúc, tò mò), chưa cần CTA bán hàng', how: '0–2', src: 'B9' },
  { id: 'S2', name: 'Mạch nội dung hoàn chỉnh trong độ dài nền tảng (Reels/Shorts ≤ 60–90 s: chưa xác minh)', how: '0–2', src: 'B3, B8' },
  { id: 'S3', name: 'Caption và hashtag đúng claim, có nhãn AI trong caption', how: 'Đọc caption (chỉ chấm khi đã đăng)', src: 'P4' },
  { id: 'S4', name: 'Nhãn AI của nền tảng đã bật', how: 'URL đã đăng; chưa kiểm thì để trống', src: 'P4' },
  { id: 'S5', name: 'Nhạc dùng được theo nền tảng (TikTok Commercial Music Library, thư viện IG/YT)', how: 'Ledger; chưa nghe nên thường để trống', src: 'P7' },
  { id: 'S6', name: 'Hợp tone store, không bán hàng gắt', how: '0–2', src: 'MỚI' },
  { id: 'S7', name: 'Đăng lại được cùng một bản ở 4 kênh (FB, IG, TT, YT) mà không sửa', how: 'Khớp tỉ lệ, độ dài', src: 'MỚI' },
  { id: 'S8', name: 'Phản ứng thực tế: hold 3 s, xem hết, share (sau đăng)', how: 'Số liệu nền tảng; "chưa xác minh" nếu chưa có; không tính vào ngưỡng', src: '8-flows mục 8' },
]

export const CRIT_RULES = [
  'Kết luận từng clip: có G = Sai → Bị chặn (loại cho cả ads và social). Có G "không xác minh được" nhưng không Sai → Chỉ dùng nội bộ. Còn lại → qua cổng chặn, rồi xét điểm.',
  'ADS: tối đa 18; đề xuất ≥ 14 và Q1, Q2, Q6 đều khác 0 → "dùng cho test ads". Ô không chấm được (null) bị loại khỏi mẫu số.',
  'SOCIAL: S1–S7 tối đa 14; đề xuất ≥ 11 → đạt. S8 chỉ điền sau đăng.',
  'Ngưỡng 14/18 và 11/14 do Claude-A đặt, chưa có dữ liệu ads để hiệu chỉnh: chưa xác minh. Q7 và Q9 gần như luôn 2 nên không phân biệt được clip.',
  'Ads khác social ở: CTA bắt buộc (Q3) với ads; nhạc ads cần license thương mại; claim ads chặt nhất; đo hiệu quả ads bằng CTR, CPA, hold 3 s.',
]
