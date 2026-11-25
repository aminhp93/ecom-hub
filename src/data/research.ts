// Tab "Nghiên cứu" (KAN-115 Bước 0, 0A): chân dung khách và tiêu chí video của từng store.
// Nguồn: Product Information (store.json), 3-creative/*/brief.md, 1-info/REFERENCE.md, competitor-notes.md. Chỗ nào không có nguồn ghi rõ "chưa có" hoặc "suy luận".
export interface Fact { t: string; src: string; level: 'nguồn' | 'suy luận' | 'chưa có' }
export interface Crit { c: string; map: string; note?: string }
export interface Research {
  persona: { who: Fact[]; pains: Fact[]; buy: Fact[]; unknown: string[] }
  truth: string
  must: Crit[]
  forbid: string[]
  format: string
  rights: string
  competitors: string[]
}

const COMMON: Crit[] = [
  { c: 'Không watermark hiển thị (✦ của Flow, chữ "Veo")', map: 'G5' },
  { c: 'Không footage, chữ, logo, nhạc của đối thủ', map: 'G3' },
  { c: 'Có dòng ledger cho asset dùng trong video', map: 'G4' },
  { c: 'Nhân vật AI có nhãn AI; không đóng vai khách thật', map: 'G6, S3, S4' },
  { c: 'Không lỗi AI rõ (tay, mặt, vật xuyên nhau)', map: 'G7' },
  { c: '9:16, từ 720p', map: 'Q7' },
]

export const RESEARCH: Record<string, Research> = {
  aquanest: {
    persona: {
      who: [
        { t: 'Người nuôi cá biển (reef) dùng bể rimless hở', src: 'Product Info mục 4', level: 'nguồn' },
        { t: 'Thị trường Mỹ (đối thủ và giá đều tính theo US)', src: 'Product Info mục 17, 18', level: 'nguồn' },
      ],
      pains: [
        { t: 'Cá nhảy khỏi bể hở', src: 'Product Info mục 5 (trích Reef2Reef)', level: 'nguồn' },
        { t: 'Nắp kính chặn sáng và giữ nhiệt', src: 'Product Info mục 5', level: 'nguồn' },
        { t: 'Kit lưới tự làm trông xấu', src: 'Product Info mục 5', level: 'nguồn' },
      ],
      buy: [
        { t: 'Đối thủ bán US$89–530 tùy size (Kraken Reef, ClearView Lids, Top Lids)', src: 'Product Info mục 17', level: 'nguồn' },
        { t: 'Cần nắp đúng size bể: đo dài, đo rộng rồi đặt cắt', src: 'brief R7-V18; AN competitor-notes', level: 'suy luận' },
      ],
      unknown: ['Tuổi, thu nhập, kênh xem video: chưa xác minh', 'Mức quan tâm ngoại hình nắp so với độ chắc: chưa xác minh', 'Không có dữ liệu khách thật (store chưa bán)'],
    },
    truth: 'Nắp polycarbonate trong 6 mm, cắt theo kích thước bể, có lưới thoáng khí, lỗ cho ăn tuỳ chọn. Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng sản phẩm.',
    must: [
      { c: 'Hình nắp đúng truth: trong, có lưới, có lỗ cho ăn; không bản lề hay cơ cấu mở/đóng', map: 'G1', note: 'Verify B4 thấy nhiều clip bịa nắp bản lề hoặc nhiều lỗ lớn' },
      { c: 'Hook 0–3 s thấy vấn đề: bể hở, cá nhảy, nắp xấu', map: 'Q1, S1' },
      { c: 'Cảnh đo bể rồi nắp cắt theo size (angle "Cut to your tank")', map: 'Q2, S2' },
      { c: 'Chữ hook đọc được, CTA cuối', map: 'Q3, Q4' },
      { c: 'Sản phẩm là trung tâm, nắp thấy rõ ở nửa cuối', map: 'Q6' },
      ...COMMON,
    ],
    forbid: ['Vừa mọi bể', 'Chắn bụi hoặc bắn nước', 'An toàn cho mèo (clip cận mũi mèo qua lỗ nắp ngầm ý điều này)', 'Bảo hành', 'Made in USA', 'Giao nhanh', '"No measuring"'],
    format: '9:16, 720p trở lên, 10–15 s (Flow 8 s, Muse 10 s). Công cụ: Google Flow (kiểm watermark Veo), Muse.',
    rights: 'Quyền ảnh sản phẩm (ledger AN-001) chưa rõ, chưa đăng thương mại.',
    competitors: ['Kraken Reef: ~12 ad active, sớm nhất 13/10/2025', 'Top Lids: ~40 ad active (nhiều video)', 'ClearView Lids: ~3 ad active'],
  },
  heartbond: {
    persona: {
      who: [
        { t: 'Product Info mục 4 (khách hàng mục tiêu) đang TRỐNG', src: 'store.json', level: 'chưa có' },
        { t: 'Người trưởng thành mua quà cho mẹ, bà hoặc con gái ở xa', src: 'angle các creative HR-B1 đến HR-B13', level: 'suy luận' },
        { t: 'Đối thủ Hope Rings chia quà theo người nhận: Granddaughter, Daughter, Wife, Son', src: 'HB competitor-notes', level: 'nguồn' },
      ],
      pains: [
        { t: 'Không ở bên được: "Can\'t be at every birthday", "Mom never asked for anything"', src: 'hook trong brief/creative', level: 'suy luận' },
        { t: 'Muốn tỏ lòng biết ơn bằng một món quà nhỏ, có ý nghĩa', src: 'angle tặng mẹ KAN-82', level: 'suy luận' },
      ],
      buy: [
        { t: 'Hope Rings: 304 stainless, one size, 39,99 USD (gạch 79,98); giá của mình chưa có', src: 'Product Info mục 17', level: 'nguồn' },
      ],
      unknown: ['Người mua và người nhận là ai: chờ Amin chốt', 'Độ tuổi, thu nhập, kênh: chưa xác minh', 'Chất liệu, size, giá, ảnh thật của mình: chưa có'],
    },
    truth: 'Nhẫn hở, hai đầu là hai bàn tay nhỏ ôm quanh ngón tay; bạc bóng, trơn (theo ảnh tham chiếu). Chất liệu, size, giá, hộp: chưa có.',
    must: [
      { c: 'Nhẫn đúng hình: hở, hai bàn tay nhỏ ôm ngón; cận cảnh thấy rõ', map: 'G1' },
      { c: 'Hook cảm xúc 0–3 s bằng chữ hậu kỳ, đọc được', map: 'Q1, Q4, S1' },
      { c: 'Đủ mạch: hook, nhẫn cận, đeo lên ngón, phản ứng, chữ cuối', map: 'Q2, S2' },
      { c: 'Không ghép clip; một nhân vật nhất quán', map: 'G7' },
      { c: 'Chữ và caption không claim ngoài truth', map: 'G2' },
      ...COMMON,
    ],
    forbid: ['Khắc chữ, đá; hộp quà và thẻ chữ chỉ cấm trong brief HR-B10 (Amin chốt 17/11), các creative khác không bị chặn vì hộp quà', 'Adjustable / one size, chất liệu, giá, giao hàng, đổi trả', '"Forever", "always with you"', 'Angle tưởng nhớ người mất', 'Hiệu quả tâm lý, claim sức khỏe', 'Tarnish-free, lifetime, số khách, 90-day returns, free gift box, 50% off, free shipping'],
    format: '9:16, 720p, 8 s (Flow) hoặc 10 s (Muse). Muse không nhận ảnh từ Claude nên prompt chỉ dùng chữ.',
    rights: 'Ảnh tham chiếu Hope Rings chỉ để xem nội bộ (ledger HB-TMP-01 not_permitted, chỉ dùng text_only). Clip Flow có ✦ không đăng.',
    competitors: ['Hope Rings (hoperings.com): ad Library 1347264390847048 chỉ học nhịp, không lấy cảnh, chữ, nhạc, người'],
  },
  whiskerwall: {
    persona: {
      who: [
        { t: 'Chủ mèo sống căn hộ nhỏ ở Mỹ', src: 'Product Info mục 4', level: 'nguồn' },
        { t: 'Lắp tường bằng vít vào stud (nhà Mỹ khung gỗ, stud cách ~16 inch)', src: '1-info/REFERENCE.md mục 3 (chưa kiểm trên mẫu)', level: 'nguồn' },
      ],
      pains: [
        { t: 'Cây mèo chiếm sàn căn hộ nhỏ', src: 'Product Info mục 5', level: 'nguồn' },
        { t: 'Muốn đồ cho mèo hòa với nội thất', src: 'hook A3 "Cat furniture that looks like decor"', level: 'suy luận' },
      ],
      buy: [
        { t: 'Đối thủ US$147–806 (Petomg 147–467; Catastrophic Creations 253–806); giá bán dự kiến US$129–199', src: 'Product Info mục 17, 12', level: 'nguồn' },
        { t: 'Rủi ro: lắp tường, trách nhiệm sản phẩm', src: 'Product Info mục 20', level: 'nguồn' },
      ],
      unknown: ['Thuê hay sở hữu nhà (có được khoan tường không): chưa xác minh', 'Tuổi, thu nhập, kênh: chưa xác minh', 'Chưa có SKU, mẫu thật, hướng dẫn lắp chính thức của supplier'],
    },
    truth: 'Bộ minh hoạ 5 loại, 6 vật thể: 2 kệ thảm xám, 1 trụ sisal, 1 bộ bậc thang, 1 nhà hộp cửa mặt mèo, 1 ống tròn. Gỗ sáng, bố cục chéo lên tường. Không võng.',
    must: [
      { c: 'Đủ 6 vật thể, đúng loại và màu (gỗ sáng, kệ thảm xám); không thừa võng, không thêm kệ', map: 'G1', note: 'A24-HF thấy nhiều kệ hơn bộ chuẩn' },
      { c: 'Hook thấy vấn đề: cây mèo chiếm sàn rồi sàn trống', map: 'Q1, S1' },
      { c: 'Mèo leo bộ kệ theo bước nhảy hợp lý, kết ở nhà hộp; mèo không quá lớn', map: 'Q2, S2' },
      { c: 'Chữ hook nhỏ, đọc được; kết nhãn "AI illustration, concept only"', map: 'Q4, S3' },
      { c: 'Không chữ tải trọng, claim vật liệu', map: 'G2' },
      ...COMMON,
    ],
    forbid: ['Tải trọng "40 lb" và claim vật liệu (lời supplier)', '"Non-slip", "comfortable", "space-saving" từ ảnh listing', 'Võng, giường mây (ngoài bộ minh hoạ)', 'Dùng g02, g03, g04, g05, g06, g07–g09 làm đầu vào gen (chữ, claim, logo VEVOR)'],
    format: '9:16, 720p, 15 s (Muse/Higgsfield), Flow 8 s. Cảnh lắp đặt chưa dùng vì chưa có hướng dẫn chính thức.',
    rights: 'Ảnh SucceBuy chỉ tham chiếu nội bộ, chưa có quyền. Ledger WW-A12/A13/A15 cho flow ghép đã bỏ.',
    competitors: ['4 advertiser, ad lâu nhất 82 ngày', 'Petomg, Youniss, Catastrophic Creations "The Juggernaut" (khác trục lắp/chất liệu)'],
  },
}
