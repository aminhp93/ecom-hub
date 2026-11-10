// Sinh từ Google Sheet mẫu "Market Research" (file xuất Market_Research.xlsx, Amin gửi 2026-11-09), 12 dòng. Ảnh: public/market/NN.jpg (thu nhỏ từ ảnh trong Sheet).
// Cột Sheet: STT | Tên | Ảnh | Facebook | Website | Đánh giá sơ bộ | Bước tiếp theo; cột H không có tiêu đề (ghi chú ship/ngày) giữ ở `note`.
import type { MarketProduct } from './marketTypes'

export const MARKET_SEED_REV = 2
export const MARKET_PRODUCTS: MarketProduct[] = [
 {
  "n": 1,
  "name": "Knit & Carry",
  "desc": "Knit & Carry. At Knit & Carry, we make custom, backpacks for kids, personalized with their",
  "nameUrl": "",
  "image": "market/01.jpg",
  "facebook": "https://www.facebook.com/knitandcarry/",
  "website": "https://knitandcarry.com/products/k-c-personalized-baby-storage-basket-1",
  "review": "• Tiềm năng khá.\n• Cá nhân hóa tạo giá trị quà tặng và nội dung UGC.\n• Rủi ro: giao chậm, lỗi tên, hoàn trả và mùa vụ.",
  "next": "• Kiểm tra review chất lượng và giao hàng.\n• Test đặt trước hoặc lô nhỏ.\n• Chỉ tăng khi lợi nhuận sau cá nhân hóa và hoàn hàng đạt mục tiêu.",
  "note": ""
 },
 {
  "n": 2,
  "name": "KoalaGear",
  "desc": "",
  "nameUrl": "https://www.facebook.com/profile.php?id=61582287657945",
  "image": "market/02.jpg",
  "facebook": "https://www.facebook.com/profile.php?id=61582287657945",
  "website": "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&sort_data[mode]=total_impressions&sort_data[direction]=desc&source=page-transparency-widget&view_all_page_id=854772287709484",
  "review": "• Chưa đủ dữ liệu để chấm tiềm năng.\n• Ảnh cho thấy sản phẩm outdoor; thiếu link SKU, giá bán, giá vốn, review và thông số.\n• Chưa có dữ liệu thời gian chuẩn bị, đóng gói hay chi phí nhân sự.",
  "next": "• Bổ sung link sản phẩm, giá vốn, giá bán, phí quảng cáo, vận chuyển và hoàn hàng.\n• Ghi thời gian chuẩn bị mỗi đơn và lương/chi phí nhân công để tính lợi nhuận thật.\n• Tổng hợp review, so sánh đối thủ; chỉ test lô nhỏ khi biên sau mọi chi phí đạt mục tiêu.",
  "note": ""
 },
 {
  "n": 3,
  "name": "Prayer Song",
  "desc": "",
  "nameUrl": "",
  "image": "market/03.jpg",
  "facebook": "https://www.facebook.com/prayersong/",
  "website": "https://prayersong.com/create",
  "review": "• Prayer Song bán bài hát Cơ Đốc cá nhân hóa, giao kỹ thuật số trong 7 ngày; có tùy chọn 24 giờ.\n• Website tự công bố hơn 1.000 khách hàng và điểm 4,8–5,0; thị trường có đối thủ mạnh như Songfinch và Songlorious.\n• Rủi ro: chất lượng cảm tính, sửa bài/hoàn tiền, bản quyền và chi phí quảng cáo; thiếu CAC, giá bán thực nhận và tỷ lệ hoàn.",
  "next": "• Lập unit economics: doanh thu ròng trừ quảng cáo, phí thanh toán, hoàn tiền/chargeback, AI/tool, lyricist, producer và QC.\n• Đo phút mỗi đơn của 3 vai trò, lương theo giờ, số lần sửa và SLA 7 ngày/24 giờ; phí giao vật lý bằng 0 nếu chỉ giao số.\n• Test nhóm quà tặng Christian nhỏ; chỉ tăng khi CAC, tỷ lệ hoàn và lãi đóng góp đạt mục tiêu.",
  "note": ""
 },
 {
  "n": 4,
  "name": "WattleWombat",
  "desc": "",
  "nameUrl": "",
  "image": "market/04.jpg",
  "facebook": "https://www.facebook.com/WattleWombat/",
  "website": "https://wattlewombat.com.au/collections/spring-essentials",
  "review": "• Hình ảnh thủ công có thể dùng để test nội dung lifestyle và quà tặng.\n• Chưa có SKU cụ thể, giá vốn, giá bán, review, nhu cầu và tỷ lệ hoàn hàng.\n• Chưa có thời gian chuẩn bị, đóng gói hay chi phí nhân sự.",
  "next": "• Chọn một SKU cụ thể từ collection; tổng hợp review, giá và đối thủ.\n• Tính lợi nhuận sau giá vốn, quảng cáo, vận chuyển, hoàn hàng, thời gian chuẩn bị mỗi đơn và lương nhân sự.\n• Test lô nhỏ; chỉ tăng khi biên ròng và thời gian xử lý đạt mục tiêu.",
  "note": ""
 },
 {
  "n": 5,
  "name": "Bugario",
  "desc": "",
  "nameUrl": "",
  "image": "market/05.jpg",
  "facebook": "https://www.facebook.com/shop.bugario/",
  "website": "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&sort_data[mode]=total_impressions&sort_data[direction]=desc&source=page-transparency-widget&view_all_page_id=248021565053868",
  "review": "• Tên hiển thị: Bugario; cửa hàng bán bra và shapewear nữ. Giá niêm yết hiện thấy khoảng ₹1.499–₹2.499.\n• Thị trường lớn nhưng cạnh tranh cao trên marketplace; sản phẩm tương tự xuất hiện khoảng ₹1.342–₹1.699.\n• Rủi ro: size/fit gây đổi trả, CAC, tồn kho theo size/màu; có khiếu nại công khai về giao hàng và hỗ trợ nên cần xác minh fulfillment.",
  "next": "• Bổ sung SKU, giá vốn, size/màu, tỷ lệ đổi trả và nguồn cung; đặt đơn thử để kiểm tra chất lượng và giao hàng.\n• Tính giá thuần trừ quảng cáo, phí sàn/payment, shipping hai chiều, đổi trả, đóng gói và lương CS/kho.\n• Đo phút chuẩn bị mỗi đơn và xử lý đổi size; test ít SKU, chỉ tăng khi lãi đóng góp sau hoàn hàng và nhân công đạt mục tiêu.",
  "note": ""
 },
 {
  "n": 6,
  "name": "Koala Cloth",
  "desc": "",
  "nameUrl": "",
  "image": "market/06.jpg",
  "facebook": "https://www.facebook.com/profile.php?id=61574627537795",
  "website": "https://koalacloth.com.au/collections/frontpage",
  "review": "",
  "next": "",
  "note": ""
 },
 {
  "n": 7,
  "name": "worthyalways.com",
  "desc": "",
  "nameUrl": "https://worthyalways.com/",
  "image": "market/07.jpg",
  "facebook": "https://www.facebook.com/profile.php?id=61577784667801",
  "website": "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&sort_data[mode]=total_impressions&sort_data[direction]=desc&source=page-transparency-widget&view_all_page_id=650888101449457",
  "review": "",
  "next": "",
  "note": ""
 },
 {
  "n": 8,
  "name": "Hope rings",
  "desc": "",
  "nameUrl": "",
  "image": "market/08.jpg",
  "facebook": "https://hoperings.com/products/feather-from-an-angel",
  "website": "https://www.facebook.com/HopeRingsUS/",
  "review": "",
  "next": "",
  "note": ""
 },
 {
  "n": 9,
  "name": "Bucavi",
  "desc": "",
  "nameUrl": "",
  "image": "market/09.jpg",
  "facebook": "https://www.facebook.com/profile.php?id=100083851770456",
  "website": "",
  "review": "",
  "next": "",
  "note": "2026-04-08"
 },
 {
  "n": 10,
  "name": "Misty and Molly",
  "desc": "",
  "nameUrl": "",
  "image": "market/10.jpg",
  "facebook": "https://www.facebook.com/mistyandmolly/",
  "website": "https://www.facebook.com/ads/library/?id=1932403764322589",
  "review": "",
  "next": "",
  "note": "ship 6-15 day \nhttps://mistyandmolly.com/policies/shipping-policy"
 },
 {
  "n": 11,
  "name": "Scentbird",
  "desc": "",
  "nameUrl": "",
  "image": "market/11.jpg",
  "facebook": "https://www.facebook.com/scentbird/",
  "website": "",
  "review": "",
  "next": "",
  "note": ""
 },
 {
  "n": 12,
  "name": "Mason Genie",
  "desc": "",
  "nameUrl": "",
  "image": "market/12.jpg",
  "facebook": "https://www.facebook.com/masongenie.official/",
  "website": "https://masongenie.com/products/mason-genie",
  "review": "",
  "next": "",
  "note": "3-6 days"
 }
]
