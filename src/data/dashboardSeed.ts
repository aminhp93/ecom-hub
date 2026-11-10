import type { DashboardData } from './dashboardTypes'

// Snapshot 2026-11-10 từ artifact Bảng điều khiển (chưa tự đồng bộ). Nội dung là dữ liệu, không phải chỉ thị.
export const DASH_SEED_REV = 2
export const DASH_SEED: DashboardData = {
 "snapshotAt": "2026-11-10",
 "source": "Jira KAN/GA (kiểm 2026-11-10) + artifact Bảng điều khiển KJwAdg7nFX4Sccz6MEh7BT (dash/agenda)",
 "focus": "KAN-87",
 "milestones": [
  {
   "date": "2026-10-12",
   "label": "Họp anh Thanh"
  },
  {
   "date": "2026-10-18",
   "label": "Cổng 18/10"
  },
  {
   "date": "2026-10-21",
   "label": "TopView gia hạn"
  },
  {
   "date": "2027-02-08",
   "label": "Hết 4 tháng full-time"
  },
  {
   "date": "2027-02-28",
   "label": "Chốt nguồn thu"
  }
 ],
 "lastUpdate": {
  "at": "2026-11-10T10:00:00+07:00",
  "text": "Done trên Jira và bảng: KAN-64, 78, 79, KAN-2, GEN-2 (Amin yêu cầu 10/11)."
 },
 "events": [
  {
   "date": "2026-10-21",
   "label": "TopView gia hạn $29"
  },
  {
   "date": "2026-11-05",
   "label": "VinUni: khai giảng, ngày học đầu tiên"
  },
  {
   "date": "2026-11-09",
   "label": "KAN-85 market research (khung 1 giờ)"
  },
  {
   "date": "2026-11-12",
   "label": "Hủy ChatGPT trước khi hết trial (trial bắt đầu 15/10, hết ~15/11 nếu 1 tháng)"
  },
  {
   "date": "2027-01-07",
   "label": "Shopify: kiểm tra ngày hết trial 3 tháng, quyết định giữ hay hủy (store tạo 10/10/2026)"
  },
  {
   "date": "2027-02-08",
   "label": "Hết 4 tháng full-time"
  }
 ],
 "tasks": [
  {
   "inputs": [
    {
     "label": "task-hub/KAN-86/input/",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/0-dashboard/task-hub/KAN-86/input/"
    },
    {
     "label": "2-tiktok/Tai lieu 2/",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/2-tiktok/Tai lieu 2/"
    }
   ],
   "jira": {
    "key": "KAN-86",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-86"
   },
   "key": "KAN-86",
   "notes": {
    "blocker": "Chưa thấy dữ liệu TikTok US trong Tai lieu 2.",
    "next": "Session kan-86 đang làm: sync buổi 1–3, nhập giá vào file giá bán, soạn tin hỏi supplier (Amin gửi).",
    "note": "Đã tính giá trung vị theo nhóm từ Amazon; chưa nhập vào file giá bán."
   },
   "outputs": [
    {
     "label": "Giá bán trung vị theo nhóm (Amazon)",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/0-dashboard/task-hub/KAN-86/output/gia-trung-binh-amazon.md"
    }
   ],
   "project": "Dropship",
   "status": "In Progress",
   "t": "[TikTok Shop] Sync tiến độ buổi 1–3 với Huy Tim, phân tích dữ liệu Amazon/TikTok US, hỏi supplier báo giá cho meeting tuần này"
  },
  {
   "inputs": [
    {
     "label": "task-hub/KAN-87/input/",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/0-dashboard/task-hub/KAN-87/input/"
    },
    {
     "label": "Artifact Bảng điều khiển (chỉ đọc)",
     "url": "https://claude.ai/artifact/KJwAdg7nFX4Sccz6MEh7BT"
    }
   ],
   "jira": {
    "key": "KAN-87",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-87"
   },
   "key": "KAN-87",
   "notes": {
    "next": "Build, kiểm desktop + 375px + tối; báo Amin quyết định nguồn đồng bộ (Supabase).",
    "note": "Bản đầu là snapshot, chưa tự đồng bộ.",
    "progress": "2026-11-09: tạo Jira, task-hub; đang dựng trang #/dashboard trong store-hub từ snapshot dữ liệu artifact."
   },
   "outputs": [
    {
     "label": "task-hub/KAN-87/output/",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/0-dashboard/task-hub/KAN-87/output/"
    }
   ],
   "project": "Dropship",
   "status": "In Progress",
   "t": "[Tool] Tạo trang Bảng điều khiển (#/dashboard) trên web Store Hub"
  },
  {
   "inputs": [
    {
     "label": "task-hub/KAN-89/input/",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/0-dashboard/task-hub/KAN-89/input/"
    },
    {
     "label": "Artifact AquaNest",
     "url": "https://claude.ai/artifact/3K76XpqDdozrTRWkrdekf5"
    }
   ],
   "jira": {
    "key": "KAN-89",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-89"
   },
   "key": "KAN-89",
   "notes": {
    "blocker": "",
    "next": "Session riêng đang liệt kê video AquaNest + nguồn Higgsfield/Muse/Flow, prompt, ref; gom file video vào 1-dropship/workspace/aquanest.",
    "note": ""
   },
   "outputs": [],
   "project": "Dropship",
   "status": "In Progress",
   "t": "Tổng hợp nguồn prompt/ref và lưu video creative AquaNest vào 1 folder Drive"
  },
  {
   "inputs": [
    {
     "label": "Store Hub HeartBond",
     "url": "http://localhost:5173/#/store/heartbond"
    }
   ],
   "jira": {
    "key": "KAN-90",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-90"
   },
   "key": "KAN-90",
   "notes": {
    "blocker": "",
    "next": "Session riêng đang gom video, prompt, ref vào 1-dropship/workspace/<store>/3-creative/ (mẫu KAN-89).",
    "note": ""
   },
   "outputs": [],
   "project": "Dropship",
   "status": "In Progress",
   "t": "[Creative] Tổng hợp nguồn prompt/ref và lưu video creative của store HeartBond vào 1 folder Drive"
  },
  {
   "inputs": [
    {
     "label": "Store Hub WhiskerWall",
     "url": "http://localhost:5173/#/store/whiskerwall"
    }
   ],
   "jira": {
    "key": "KAN-91",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-91"
   },
   "key": "KAN-91",
   "notes": {
    "blocker": "",
    "next": "Session riêng đang gom video, prompt, ref vào 1-dropship/workspace/<store>/3-creative/ (mẫu KAN-89).",
    "note": ""
   },
   "outputs": [],
   "project": "Dropship",
   "status": "In Progress",
   "t": "[Creative] Tổng hợp nguồn prompt/ref và lưu video creative của store WhiskerWall vào 1 folder Drive"
  }
 ],
 "todo": [
  {
   "inputs": [],
   "jira": {
    "key": "GA-47",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GA-47"
   },
   "key": "GA-47",
   "notes": {},
   "outputs": [],
   "project": "AI",
   "status": "To Do",
   "t": "Ôn 18 câu phỏng vấn frontend: JavaScript, React, Frontend System Design"
  },
  {
   "inputs": [],
   "jira": {
    "key": "GA-28",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GA-28"
   },
   "key": "GA-28",
   "notes": {},
   "outputs": [],
   "project": "AI",
   "status": "To Do",
   "t": "Phần 2: Streaming chat UI"
  },
  {
   "inputs": [],
   "jira": {
    "key": "GA-29",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GA-29"
   },
   "key": "GA-29",
   "notes": {},
   "outputs": [],
   "project": "AI",
   "status": "To Do",
   "t": "Phần 3: MCP thật + nhiều tool + giới hạn an toàn"
  },
  {
   "inputs": [],
   "jira": {
    "key": "GA-30",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GA-30"
   },
   "key": "GA-30",
   "notes": {},
   "outputs": [],
   "project": "AI",
   "status": "To Do",
   "t": "Phần 4: RAG + structured output + eval"
  }
 ],
 "idea": [
  {
   "key": "KAN-92",
   "t": "[Store Hub] Cập nhật giao diện (UI) Store Hub",
   "status": "Idea",
   "project": "Dropship",
   "jira": {
    "key": "KAN-92",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-92"
   },
   "inputs": [],
   "outputs": [],
   "notes": {
    "next": "Chờ Amin nêu danh sách thay đổi UI"
   }
  },
  {
   "key": "KAN-88",
   "t": "[TikTok Shop] Tìm supplier cho 4 sản phẩm cân nhắc SP2, SP5, SP7, SP8 (VN + 1688)",
   "status": "Idea",
   "project": "Dropship",
   "jira": {
    "key": "KAN-88",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-88"
   },
   "inputs": [],
   "outputs": [],
   "notes": {}
  },
  {
   "due": "2026-11-09",
   "inputs": [
    {
     "label": "task-hub/KAN-85/input/",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/0-dashboard/task-hub/KAN-85/input/"
    },
    {
     "label": "Meta Ad Library: 3 keyword khuyến mãi (xem README input)",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/0-dashboard/task-hub/KAN-85/input/README.md"
    }
   ],
   "jira": {
    "key": "KAN-85",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-85"
   },
   "key": "KAN-85",
   "notes": {
    "next": "Amin chốt số ứng viên và giờ bắt đầu; sau đó chuyển Jira In Progress và làm.",
    "note": "3 link Meta Ad Library ở task-hub/KAN-85/input/README.md. Liên quan KAN-79."
   },
   "outputs": [
    {
     "label": "task-hub/KAN-85/output/",
     "path": "/Users/aminhp93/Library/CloudStorage/GoogleDrive-minhpham.piscada@gmail.com/My Drive/working/0-dashboard/task-hub/KAN-85/output/"
    }
   ],
   "project": "Dropship",
   "status": "Idea",
   "t": "[Market Research] Tìm sản phẩm từ Meta Ad Library theo keyword 50% off + free shipping, 50% off, buy 1 get 1 (khung 1 giờ hôm nay)"
  },
  {
   "inputs": [
    {
     "label": "task-hub/KAN-76/input/",
     "path": "/Users/aminhp93/working/0-dashboard/task-hub/KAN-76/input/"
    }
   ],
   "jira": {
    "key": "KAN-76",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-76"
   },
   "key": "KAN-76",
   "notes": {
    "next": "Amin chốt: market (ALL/US), số ứng viên mỗi run, thứ tự R19–R22, ruling \"Diff none\"."
   },
   "outputs": [
    {
     "label": "task-hub/KAN-76/output/",
     "path": "/Users/aminhp93/working/0-dashboard/task-hub/KAN-76/output/"
    }
   ],
   "project": "Dropship",
   "status": "Idea",
   "t": "[Market Research] Tìm sản phẩm cho 4 niche Shopify còn lại (R19–R22)"
  },
  {
   "inputs": [],
   "jira": {
    "key": "KAN-73",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-73"
   },
   "key": "KAN-73",
   "notes": {
    "blocker": "Chưa có người được phỏng vấn và lịch hẹn.",
    "next": "Viết bộ câu hỏi theo nhóm, đánh dấu câu cần số liệu."
   },
   "outputs": [
    {
     "label": "tiktok-vn/README.md",
     "path": "/Users/aminhp93/working/2-tiktok/tiktok-vn/README.md"
    }
   ],
   "project": "Dropship",
   "status": "Idea",
   "t": "[TikTok Shop] Chuẩn bị phỏng vấn người đã vận hành brand bỉm ~2 năm"
  },
  {
   "inputs": [],
   "jira": {
    "key": "GEN-4",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GEN-4"
   },
   "key": "DB-04",
   "notes": {
    "blocker": "Chưa có input.",
    "next": "Chưa bắt đầu: hỏi Amin ưu tiên và ngày review."
   },
   "outputs": [],
   "project": "Roadmap",
   "status": "Idea",
   "t": "[Idea/Roadmap] Timeline cuộc sống & gia đình"
  },
  {
   "inputs": [],
   "jira": {
    "key": "GEN-5",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GEN-5"
   },
   "key": "DB-05",
   "notes": {
    "blocker": "Chưa có input.",
    "next": "Chưa bắt đầu: hỏi Amin ưu tiên và ngày review."
   },
   "outputs": [],
   "project": "Roadmap",
   "status": "Idea",
   "t": "[Idea/Roadmap] Chuyển từ làm thuê sang tự kinh doanh"
  },
  {
   "inputs": [],
   "jira": {
    "key": "GEN-6",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GEN-6"
   },
   "key": "DB-06",
   "notes": {
    "blocker": "Chưa có input.",
    "next": "Chưa bắt đầu: hỏi Amin ưu tiên và ngày review."
   },
   "outputs": [],
   "project": "Roadmap",
   "status": "Idea",
   "t": "[Idea/Roadmap] Hệ thống kênh social đa nền tảng"
  },
  {
   "inputs": [
    {
     "label": "HĐGV MiTu Eco (PDF)",
     "path": "/Users/aminhp93/Downloads/MiTu Eco_HDGV.docx.pdf"
    },
    {
     "label": "CNGV MiTu Eco (PDF)",
     "path": "/Users/aminhp93/Downloads/MiTu Eco_CNGV.docx.pdf"
    },
    {
     "label": "task-hub/GEN-7/",
     "path": "/Users/aminhp93/working/0-dashboard/task-hub/GEN-7/"
    }
   ],
   "jira": {
    "key": "GEN-7",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GEN-7"
   },
   "key": "DB-07",
   "notes": {
    "blocker": "Hai file lệch số; chưa đạt điều kiện xuống tiền (đất, báo cáo tài chính, sổ cổ đông).",
    "next": "Amin chốt số tiền/số cổ phần (10 triệu/1.000 hay 25 triệu/2.500); chưa ký, chưa chuyển tiền."
   },
   "outputs": [
    {
     "label": "Review hợp đồng + giấy chứng nhận",
     "path": "/Users/aminhp93/working/5-journal/reviews/2026-11-02-gen7-mitu-eco-contract-review.md"
    }
   ],
   "project": "Roadmap",
   "status": "Idea",
   "t": "[Idea/Roadmap] Đánh giá đầu tư 50–100 triệu"
  },
  {
   "inputs": [],
   "jira": {
    "key": "GEN-8",
    "url": "https://phamsworkspace-42448765.atlassian.net/browse/GEN-8"
   },
   "key": "DB-08",
   "notes": {
    "blocker": "Chưa có dữ kiện cá nhân (ngày chấm dứt, lịch sử BHXH, nơi nộp).",
    "next": "Hỏi Amin: ngày chấm dứt và ngày muốn bắt đầu."
   },
   "outputs": [],
   "project": "Roadmap",
   "status": "Idea",
   "t": "[Idea/Roadmap] Quy trình nhận BHXH và BHTN bắt đầu từ tháng 11/2026"
  }
 ],
 "done": [
  {
   "key": "KAN-80",
   "t": "[Social] Xây kênh Facebook & YouTube cho store kệ leo tường cho mèo",
   "status": "Done"
  },
  {
   "key": "KAN-81",
   "t": "[Social] Xây kênh Facebook & YouTube cho store nắp bể cá rimless",
   "status": "Done"
  },
  {
   "key": "KAN-82",
   "t": "[Social] Xây kênh Facebook & YouTube cho store trang sức cảm xúc",
   "status": "Done"
  },
  {
   "key": "KAN-83",
   "t": "[Tool] Dựng web Store Hub (Vite + React + TypeScript) quản lý 3 store theo template chung",
   "status": "Done"
  },
  {
   "key": "KAN-84",
   "t": "[Tool] Tạo trang \"Sản phẩm Market Research\" trên web Store Hub, liệt kê sản phẩm như Google Sheet mẫu",
   "status": "Done"
  },
  {
   "key": "DB-01",
   "t": "Đo tốc độ, số lượng và chất lượng làm việc của Dropship và TikTok",
   "status": "Done"
  },
  {
   "key": "KAN-64",
   "t": "[Creative] Dùng tháng Higgsfield thử 10–20 biến thể cùng form",
   "status": "Done"
  },
  {
   "key": "KAN-78",
   "t": "[Market Research] Tổng hợp R19–R22 vào artifact Dropship tổng quan, kiểm thông tin và format",
   "status": "Done"
  },
  {
   "key": "KAN-79",
   "t": "[Market Research] Tìm sản phẩm từ Meta Ad Library theo keyword khuyến mãi",
   "status": "Done"
  },
  {
   "key": "KAN-2",
   "t": "[Social] Xây kênh social: Facebook, Instagram, TikTok, YouTube",
   "status": "Done"
  },
  {
   "key": "DB-02",
   "t": "Quy trình giao việc và duyệt việc giữa Amin, ChatGPT, Claude và Muse",
   "status": "Done"
  }
 ],
 "widgets": [
  {
   "title": "Dropship",
   "status": "Tập trung 2 mảng",
   "tone": "warn",
   "headline": "Tập trung 2 mảng: Market research và Creative. Mục tiêu là rèn luyện 2 kỹ năng này, trước khi đi tìm sản phẩm để bán.",
   "updated": "2026-11-01",
   "type": "topic",
   "id": "dropship",
   "alerts": [
    "Bước chọn sản phẩm hiện tại còn mơ hồ và cho kết quả kém; video R7-02 đã có Higgsfield, Flow, Muse nhưng chưa video nào qua review độc lập.",
    "Cần chốt 2 sản phẩm, rồi làm 5–10 video cho mỗi sản phẩm.",
    "Luyện kỹ năng trước; tìm sản phẩm để bán sau."
   ],
   "issues": [],
   "next": [
    {
     "t": "KAN-63: chốt lại ngưỡng giá (>80 USD) rồi ghi kết quả lọc sản phẩm vào task."
    },
    {
     "t": "KAN-64: quyết định gen lại angle 9 (20 credit) và đưa kết quả angle 8–12 lên artifact R7-02."
    },
    {
     "t": "KAN-64: xác minh bảng giá gói Higgsfield (task $94, yêu cầu $100) rồi tính token 20/40/60 video."
    },
    {
     "t": "Chốt 2 sản phẩm để luyện (Market research)."
    },
    {
     "t": "Làm 5–10 video cho mỗi sản phẩm (Creative)."
    }
   ],
   "metrics": []
  },
  {
   "title": "TikTok",
   "status": "Cần chú ý",
   "tone": "warn",
   "headline": "TikTok Shop US: đang ở bước 2/8 (tìm nhà cung cấp và mẫu) cho ngách đồ chơi thú cưng tự nhiên, KAN-74 In Progress.",
   "updated": "2026-10-31",
   "type": "topic",
   "id": "tiktok",
   "alerts": [],
   "issues": [
    "Mới có 1 báo giá thật, mục tiêu ≥ 2 (giá, MOQ, lead time) kèm bảng so sánh VN/TQ và bảng rủi ro.",
    "Số liệu ngách là ước tính Accio, chưa qua FastMoss (FastMoss hết credit theo STATUS 26/10); số thị trường VN trong Sheet chưa chứng minh nhu cầu US.",
    "Kalodata/iOS chưa có dữ liệu; Bước 1 chưa chốt sản phẩm từ dữ liệu."
   ],
   "next": [
    {
     "t": "KAN-74: lấy ≥ 2 báo giá thật, điền file tính giá, cập nhật bảng so sánh và rủi ro."
    },
    {
     "t": "KAN-73: hẹn buổi phỏng vấn người vận hành brand bỉm."
    }
   ],
   "metrics": [
    {
     "l": "Báo giá thật",
     "v": "1 / 2",
     "sub": "Sunnyhomey QUO261027Z01, 27/10",
     "tone": "warn"
    },
    {
     "l": "Xưởng đã liên hệ",
     "v": "7",
     "sub": "tracker 29/10; 6 chưa xác minh trả lời",
     "tone": "warn"
    },
    {
     "l": "Ứng viên xưởng",
     "v": "9",
     "sub": "desk research, theo artifact TikTok"
    },
    {
     "l": "Phỏng vấn đã hẹn",
     "v": "0",
     "sub": "KAN-73 blocker",
     "tone": "warn"
    }
   ]
  },
  {
   "title": "AI",
   "status": "Cần định hướng",
   "tone": "warn",
   "headline": "Chưa biết nên làm gì trong phần AI: xem nhiều video và thực tế đang dùng AI trong công việc. Cần xác định mình muốn gì ở AI: quy trình, ứng dụng hay nghiên cứu?",
   "updated": "2026-10-24",
   "type": "board",
   "id": "tech",
   "alerts": [],
   "issues": [],
   "next": [
    {
     "t": "Đăng video YouTube #1 (hạn cũ 18/10 đã qua, chưa đặt hạn mới; chưa chốt dành bao nhiêu giờ mỗi tuần cho kênh khi full-time dropship)"
    },
    {
     "t": "2 buổi khám phá 45 phút với Kiên và Ngô Thanh (hạn cũ 18/10 đã qua, chưa đặt hạn mới; đã bỏ khỏi todo, chờ chốt AI chạy song song hay không)"
    },
    {
     "t": "Xây bộ tiêu chí đánh giá đầu ra AI + bản đồ công cụ"
    }
   ],
   "metrics": [
    {
     "l": "Khoá LinkedIn",
     "v": "2/4",
     "sub": "LinkedIn đã huỷ"
    },
    {
     "l": "Video đã đăng",
     "v": "0"
    },
    {
     "l": "Jira GA đang chạy",
     "v": "3",
     "sub": "GA-35, GA-36, GA-47"
    },
    {
     "l": "Khách trả phí",
     "v": "0"
    }
   ]
  },
  {
   "title": "Gói đăng ký",
   "status": "Ổn",
   "tone": "ok",
   "headline": "Đang trả ~$51/tháng cho 2 gói; đã huỷ 5 gói (thêm Shopify cũ)",
   "updated": "2026-10-11",
   "type": "topic",
   "id": "subs",
   "alerts": [],
   "issues": [
    "Shopify store mới `7kdimz-ep` ở gói Basic (theo connector, 10/10): chưa rõ ngày hết thời gian thử và phí. Ghi lại để khỏi bị tính bất ngờ.",
    "TopView: huỷ trước 21/10 nếu dropship không qua cổng 18/10.",
    "LinkedIn: kiểm tra còn truy cập đến ngày nào để học nốt 2 khoá."
   ],
   "next": [
    {
     "t": "Ghi gói Shopify của store mới (ngày hết thử, phí)"
    },
    {
     "t": "Quyết định TopView theo cổng dropship",
     "due": "2026-10-18"
    }
   ],
   "metrics": [
    {
     "l": "Claude",
     "v": "$22,22",
     "sub": "27 hằng tháng"
    },
    {
     "l": "TopView",
     "v": "$29",
     "sub": "21/10 (còn {d} ngày)",
     "tone": "warn",
     "date": "2026-10-21"
    }
   ]
  },
  {
   "title": "Finance",
   "status": "Có vấn đề",
   "tone": "bad",
   "headline": "Chưa có mục tiêu đo được (hạn 18/10) · gói trả phí ~$51/tháng (đã huỷ Shopify cũ) · sync dữ liệu chạy ổn",
   "updated": "2026-10-11",
   "type": "board",
   "id": "finance",
   "alerts": [],
   "issues": [
    "Mục tiêu Finance chưa có: cần tiền mặt ròng sau nợ, chi phí tháng, chi phí sinh con. Chưa file nào ghi các số này.",
    "Còn đường dẫn `~/personal/stock` ở 6 skill trong `.agents/skills/`, 2 script transcript (sẽ lỗi nếu chạy) và chân trang `ban_tin_sang.py`. Chưa sửa; chờ bạn xác nhận.",
    "Crontab còn 1 dòng cũ chạy thứ Hai 08:00 một công cụ ngoài repo; chưa quyết giữ hay gỡ.",
    "Store Shopify mới `7kdimz-ep` ở gói Basic (theo connector, 10/10) nhưng chưa ghi ngày hết thời gian thử và phí sau đó."
   ],
   "next": [
    {
     "t": "Đặt mục tiêu Finance: quỹ dự phòng em bé, ngân sách dropship/AI, quy tắc rủi ro (~1 giờ)",
     "due": "2026-10-18"
    },
    {
     "t": "Ghi gói Shopify của store mới (ngày hết thử, phí) và quyết định TopView (gia hạn 21/10)",
     "due": "2026-10-21"
    },
    {
     "t": "Xác nhận cho sửa các đường dẫn cũ còn lại"
    }
   ],
   "metrics": [
    {
     "l": "Tới hạn mục tiêu",
     "v": "{d} ngày",
     "date": "2026-10-18"
    },
    {
     "l": "Gói trả phí",
     "v": "~$51/th",
     "sub": "Claude $22 + TopView $29; Shopify cũ đã huỷ"
    },
    {
     "l": "Danh mục (28/09)",
     "v": "−38%",
     "sub": "chưa thực hiện; chưa kiểm chứng lại",
     "tone": "bad"
    },
    {
     "l": "Sync dữ liệu",
     "v": "Chạy",
     "sub": "chạy ổn 05/10 đến 09/10 (1,8 phút ngày 09/10)",
     "tone": "ok"
    }
   ]
  },
  {
   "id": "roadmap",
   "title": "Roadmap & hướng đi",
   "headline": "4 tháng tới (08/10 → ~08/02/2027): dropship full-time. VinUni đã xác nhận nhập học (khai giảng 05/11).",
   "tone": "idle",
   "alerts": [],
   "issues": [],
   "next": [],
   "metrics": [],
   "updated": "2026-10-24"
  }
 ]
}
