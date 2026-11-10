import type { Store } from './types'

// Dữ liệu thật của 3 store, nhập 2026-11-08 từ 3 artifact (KAN-80/81/82) và 3 file Excel social-post-tracker.
// Giữ nguyên nhãn bằng chứng và nguồn của từng dòng; ô chưa có dữ liệu để trống.
// Phần nhãn "chưa tự xác minh" nghĩa là số liệu lấy lại từ thread Muse / subagent, Claude chưa tự mở kênh hay trang.
export const SEED_STORES: Store[] = [
  {
    "id": "whiskerwall",
    "name": "WhiskerWall",
    "product": "Cat wall shelves · kệ leo tường cho mèo",
    "jira": "KAN-80, KAN-91",
    "market": "US",
    "status": "Đang làm",
    "email": "whiskerwall.store@gmail.com",
    "domain": "whiskerwall.com đã có người dùng (theo Excel KAN-80); chưa mua tên miền nào",
    "updated": "2026-11-10",
    "note": "Tên store do Amin chọn 2026-11-06; chưa kiểm nhãn hiệu. Email tạm, chưa xác minh đã tạo/còn trống; dự kiến đổi sang email theo tên miền khi mua. Nguồn: artifact Cat wall shelves + KAN-80-social-post-tracker.xlsx (đọc 2026-11-08). Trạng thái đăng lấy theo thread Muse, chưa tự xác minh trên từng kênh.",
    "productInfo": [
      {
        "n": 1,
        "group": "Nhận diện",
        "name": "Tên sản phẩm",
        "value": "Cat wall shelves: kệ leo tường module gỗ",
        "evidence": "",
        "source": "research/DRAFT-product-info-angles-v0.2.md",
        "date": "2026-10-24"
      },
      {
        "n": 2,
        "group": "Nhận diện",
        "name": "Ngành hàng",
        "value": "Pet, nội thất mèo",
        "evidence": "",
        "source": "research/DRAFT-product-info-angles-v0.2.md",
        "date": "2026-10-24"
      },
      {
        "n": 3,
        "group": "Nhận diện",
        "name": "Mô tả ngắn và hình thái",
        "value": "Bộ minh hoạ 5 loại món, 6 vật thể (Amin chốt 24/10): 2 kệ thảm xám, 1 trụ sisal, 1 bộ bậc thang, 1 nhà hộp mặt mèo, 1 ống tròn. Không võng. Không phải biến thể bán",
        "evidence": "hypothesis",
        "source": "1-info/REFERENCE.md (mục 1); research/DRAFT-product-info-angles-v0.2.md",
        "date": "2026-10-24"
      },
      {
        "n": 4,
        "group": "Khách hàng",
        "name": "Khách hàng mục tiêu",
        "value": "Chủ mèo căn hộ nhỏ ở Mỹ",
        "evidence": "hypothesis",
        "source": "research/DRAFT-product-info-angles-v0.2.md",
        "date": "2026-10-24"
      },
      {
        "n": 5,
        "group": "Khách hàng",
        "name": "Vấn đề giải quyết",
        "value": "Cây mèo chiếm sàn",
        "evidence": "hypothesis",
        "source": "research/DRAFT-product-info-angles-v0.2.md",
        "date": "2026-10-24"
      },
      {
        "n": 6,
        "group": "Tư liệu",
        "name": "Ảnh sản phẩm (đúng sản phẩm)",
        "value": "6 ảnh SucceBuy (tham chiếu, chưa có quyền)",
        "evidence": "supplier_statement",
        "source": "sourcing/succebuy-ref-2026-10-23/; 1-info/reference/",
        "date": "2026-10-24"
      },
      {
        "n": 7,
        "group": "Tư liệu",
        "name": "Video demo hoặc hướng dẫn",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 8,
        "group": "Nguồn hàng",
        "name": "Nhà cung cấp (link listing)",
        "value": "SucceBuy (AliExpress US), 3 nhà máy Alibaba",
        "evidence": "supplier_statement",
        "source": "research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 9,
        "group": "Nguồn hàng",
        "name": "Báo giá thật bằng văn bản",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 10,
        "group": "Giá",
        "name": "Giá mua ước tính",
        "value": "US$26–105/bộ tùy nguồn",
        "evidence": "estimated",
        "source": "research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 11,
        "group": "Giá",
        "name": "Phí ship, landed cost ước tính",
        "value": "Landed ~65 / 85 / 150 US$",
        "evidence": "estimated",
        "source": "research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 12,
        "group": "Giá",
        "name": "Giá bán dự kiến",
        "value": "US$129–199, khuyến nghị 199",
        "evidence": "estimated",
        "source": "research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 13,
        "group": "Giá",
        "name": "Biên gộp ước tính",
        "value": "34–67% tuỳ giá và nguồn",
        "evidence": "estimated",
        "source": "research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 14,
        "group": "Vật lý",
        "name": "Kích thước, cân nặng",
        "value": "Kiện nguồn B: 44×33×18 cm, 8,45 kg (không phải bộ minh hoạ)",
        "evidence": "supplier_statement",
        "source": "1-info/REFERENCE.md; research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 15,
        "group": "Vật lý",
        "name": "Vật liệu, thông số",
        "value": "Gỗ, ván 12 mm, \"40 lb\" (lời supplier)",
        "evidence": "supplier_statement",
        "source": "1-info/REFERENCE.md; research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 16,
        "group": "Cách dùng",
        "name": "Cách dùng, lắp đặt",
        "value": "Bắt vít vào stud",
        "evidence": "supplier_statement",
        "source": "1-info/REFERENCE.md; research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 17,
        "group": "Thị trường",
        "name": "Đối thủ chính và giá",
        "value": "Catastrophic Creations US$253–806; Petomg US$147–467",
        "evidence": "competitor_observation",
        "source": "research/meta-ads-competitors-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 18,
        "group": "Thị trường",
        "name": "Bằng chứng ads (Ad Library)",
        "value": "4 advertiser, ad lâu nhất 82 ngày",
        "evidence": "competitor_observation",
        "source": "research/meta-ads-competitors-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 19,
        "group": "Rủi ro",
        "name": "Claim được và không được",
        "value": "Có: draft v0.2 + danh sách mở rộng trong round-1/CREATIVE-TEST-FORM.md (Bước 0, Không được nói)",
        "evidence": "",
        "source": "research/DRAFT-product-info-angles-v0.2.md; 3-creative/round-1/CREATIVE-TEST-FORM.md",
        "date": "2026-10-24"
      },
      {
        "n": 20,
        "group": "Rủi ro",
        "name": "Rủi ro, quy định",
        "value": "Lắp tường, trách nhiệm sản phẩm, thuế ~37,5%",
        "evidence": "",
        "source": "research/sourcing-margin-install-2026-10-23.md",
        "date": "2026-10-24"
      },
      {
        "n": 21,
        "group": "Đối thủ ref",
        "name": "Facebook page ref (đối thủ)",
        "value": "https://www.facebook.com/profile.php?id=217994918350453",
        "evidence": "competitor_observation",
        "source": "Catastrophic Creations, page id 217994918350453 (72,1K follow) từ workspace/whiskerwall/meta-ads-competitors-2026-10-23.md (research 23/10/2026). Link dựng từ page id, Claude chưa mở kiểm.",
        "date": "2026-11-10"
      },
      {
        "n": 22,
        "group": "Đối thủ ref",
        "name": "Web ref (đối thủ)",
        "value": "https://catastrophicreations.com",
        "evidence": "competitor_observation",
        "source": "Catastrophic Creations (giá US$253–806), tên miền trích trong workspace/whiskerwall/meta-ads-competitors-2026-10-23.md (research 23/10/2026). Chưa mở kiểm.",
        "date": "2026-11-10"
      },
      {
        "n": 23,
        "group": "Đối thủ ref",
        "name": "Ads ref (đối thủ)",
        "value": "https://www.facebook.com/ads/library/?id=1785430765949390\nhttps://www.facebook.com/ads/library/?id=1019970117677782",
        "evidence": "competitor_observation",
        "source": "Library ID của 2 ad active của Catastrophic Creations (ad cũ nhất 82 ngày tính đến 23/10) từ workspace/whiskerwall/meta-ads-competitors-2026-10-23.md (research 23/10/2026). Link dựng từ Library ID, chưa mở kiểm.",
        "date": "2026-11-10"
      }
    ],
    "creative": [
      {
        "id": "PT1-A1",
        "title": "Cây mèo chiếm sàn căn hộ nhỏ; giữ sàn bằng cách đưa mèo lên tường",
        "status": "Đã qua cổng",
        "gate": "C",
        "format": "Before → After (bản V1 xuyên suốt: một cảnh liền mạch, không còn Before/After cắt)",
        "hook": "Give your cat the wall, not the floor (hook bản draft: Your cat tree is eating your living room)",
        "step": "Xong (Amin chốt 24/10/2026)",
        "note": "Trạng thái nguồn: Đã xong. Review: Agent: clip nguồn Không đạt nhẹ (24/10); bản xuyên suốt v3 chưa review; Amin: chưa duyệt · Amin chốt xong 24/10/2026. Version: v3 (V1-final-v3; bản trước v1 cắt, v2 có 4 dòng chữ). Ngày: 24/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file V1-final-v3.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/V1-final-v3.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 24/10/2026 qua Higgsfield MCP. Ảnh neo gpt_image_2 1k medium 9:16 (1 credit/ảnh); clip K1–K3 seedance_2_0 fast 480p (496×864) 9:16 câm, 3×4 s nối bằng khung cuối clip trước; dựng ffmpeg (xfade 0,2 s, chữ PNG, nhạc tạm tự tổng hợp) → 720×1280, 12,7 s. Credit: 39 (trần 40; Fact, CREDIT-LOG).",
          "prompt": "## Bước 5. Prompt pack (tiếng Anh cho model; khối cố định dán nguyên văn vào mọi prompt)\n**Khối sản phẩm (nguyên văn từ REFERENCE.md mục 5):**\n```text\na set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos.\n```\n**Khối nhân vật:**\n```text\none domestic orange tabby short-haired cat, medium size, round eyes, no collar; it is not any of the cats in the reference image\n```\n**Khối bối cảnh:**\n```text\nvertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa at the far left edge, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions\n```\n**Khối vật thể phụ (theo video):**\n- V1 shot 1–2: `a tall beige carpeted cat tree standing in the corner on the floor, not part of the wall set`\n- V2 shot 1–2: `a low wooden console table with one white mug on it, against the plain white wall`\n- V3 mọi shot: `a framed abstract print with no text hung high on the white wall at the far left, and a green potted plant on a small round table on the floor at the far left, both clearly to the left of and separate from the whole shelf set and the tunnel, never touching or overlapping them`\n\n**Dòng tránh (thêm vào cuối mọi prompt):**\n```text\nAvoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, shelves floating without brackets, a plain unwrapped sisal post, the number or position of the set pieces changing between shots, blurry or morphing wood.\n```\nỞ ảnh neo không có sản phẩm (V1-A1, V2-A1, V3-A1) bỏ phần \"extra shelves or extra pieces\" khỏi dòng tránh, thay bằng \"wall-mounted shelves\". Vật phụ V1/V2 không còn trong cảnh thì **không** viết \"is gone\" trong prompt; đưa vào dòng tránh (V1 ảnh sau cây mèo: `no cat tree`; V2: `no console table, no mug`).\n**Tỷ lệ cú nhảy (thêm vào mô tả kệ thấp ở mọi ảnh neo có sản phẩm):** `the lowest shelf is about one cat-length above the floor, and the cat is small enough to sit on it comfortably`. Thêm vào dòng tránh của V3: `the potted plant or its table turned into a shelf`.\n\n**Ảnh tham chiếu đưa vào công cụ gen:** chỉ `1-info/reference/g01-crop.jpg`, cho các ảnh neo có sản phẩm. Dặn trong prompt: `use the reference image only for the look of the shelves, steps, post and house; ignore the cat, the extra shelf at the top left, and both partial pieces at the left edge (a sliver of a shelf at the top and partial steps below)`.\n\n**Kế hoạch ảnh neo và clip.** Mỗi video 4 ảnh neo và 3 clip (6 + 4 + 5 = 15 s), ghép bằng ffmpeg; chữ bằng PNG phủ ở khâu dựng. Lệch quy trình mặc định (3 ảnh neo) vì shot kết quả bắt đầu ở trạng thái khác shot demo; số ảnh phải được Amin duyệt ở bước 6. Tiết kiệm nếu cần: dùng chung ảnh \"tường có sản phẩm, mèo dưới sàn\" giữa V1 và V2 (giảm 2 ảnh).\n\n### V1 · Before → After · hook \"Your cat tree is eating your living room\"\nẢnh neo (cùng bối cảnh, cùng góc máy):\n- **V1-A1** (shot 1): `[bối cảnh] + [nhân vật] + [vật thể phụ V1]. The orange tabby sits upright on top of the cat tree, calm, looking toward the camera. Bare white wall.`\n- **V1-A2** (đầu shot 3): `[bối cảnh] + [nhân vật] + [khối sản phẩm]. The orange tabby stands on the floor directly below the lowest grey-fleece shelf, head raised toward it, all paws on the floor.`\n- **V1-A3** (cuối shot 3): `[bối cảnh] + [nhân vật] + [khối sản phẩm]. Same room, same camera, same set. The orange tabby stands on the lowest grey-fleece shelf, all four paws on the fleece, calm.`\n- **V1-A4** (shot 4–5): `[bối cảnh] + [nhân vật] + [khối sản phẩm]. Same room, same camera, same set. The orange tabby lies curled inside the square cat house at the top right, head out of the round doorway, calm. The floor is empty.`\n\nClip (câm; mỗi prompt clip ghép đủ: bối cảnh + nhân vật + sản phẩm + mô tả chuyển động + dòng tránh):\n- **V1-C1** (6 s, start = A1): `The orange tabby sits still, then hops down onto the floor in front of the cat tree. Fixed camera.`\n- **V1-C2** (4 s, start = A2, end = A3): `[bối cảnh] + [nhân vật] + [khối sản phẩm]. The orange tabby crouches and jumps up onto the lowest grey-fleece shelf and lands on it. One smooth motion, the cat never passes through the post or the shelves. Fixed camera.` + [dòng tránh, thêm `no cat tree`]\n- **V1-C3** (5 s, start = A4): `The orange tabby stays lying in the cat house, a slow blink and a small ear movement only. Fixed camera.`",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-master.png; refs/anchors/round-1/anchors/V1-A1.png; refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-1/anchors/V1-A3.png; refs/anchors/round-1/anchors/V1-A4.png; refs/for-muse/round-4/V1-A2-cat-crop.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/V1-final-v3.mp4\nClip gốc/thành phần: videos/higgsfield/clips/round-1/v2/K1.mp4; videos/higgsfield/clips/round-1/v2/K2.mp4; videos/higgsfield/clips/round-1/v2/K3.mp4\nBản cũ/biến thể: videos/higgsfield/final/V1-final-v2.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-1__REVIEW-claude-anchors-2026-10-24.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-1__REVIEW-claude-V1-clips-2026-10-24.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Chưa xác minh: chưa review độc lập bản có chữ/nhạc (nếu có); cảnh/mèo là AI, không phải bằng chứng sản phẩm thật. Clip C1–C3 bản đầu (cắt cứng) là bản cũ, Amin yêu cầu làm lại thành cảnh liền (K1–K3). Đã đăng đúng file này (khớp byte với file KAN-80 trong tab Social; Fact)."
            }
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-master.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A1.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A3.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A4.png"
          ]
        }
      },
      {
        "title": "Cây mèo chiếm sàn căn hộ nhỏ; giữ sàn bằng cách đưa mèo lên tường (bản Muse)",
        "gate": "C",
        "format": "Before → After (bản V1 xuyên suốt: một cảnh liền mạch, không còn Before/After cắt)",
        "hook": "Give your cat the wall, not the floor (hook bản draft: Your cat tree is eating your living room)",
        "id": "PT1-A1-M",
        "status": "Chưa qua cổng",
        "step": "Có file Muse; chưa review độc lập, chưa qua cổng C",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/muse/v1-final-15s.mp4",
        "note": "Nguồn: Muse; 15 s · 720×1280 · 9:16 (đo từ file, 09/11/2026); model/credit: Trống / chưa xác minh (gen-muse NOTES.md và CREDIT-LOG.csv trống). Chưa thấy đăng. File: v1-final-15s.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/muse/.",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit/số lần gen: Trống / chưa xác minh. 15 s · 720×1280 · 9:16, câm (ffprobe).",
          "prompt": "# PROMPT PACK (đã qua review)\n\n## 5. Prompt pack (Bước 5): khối cố định dán nguyên văn vào mọi prompt\n**Khối sản phẩm (nguyên văn):**\n```text\na set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos.\n```\n**Khối nhân vật:**\n```text\none domestic orange tabby short-haired cat, medium size, round eyes, no collar; it is not any of the cats in the reference image\n```\n**Khối bối cảnh:**\n```text\nvertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa at the far left edge, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions\n```\n**Khối vật thể phụ (theo video):**\n- V1 shot 1–2: `a tall beige carpeted cat tree standing in the corner on the floor, not part of the wall set`\n- V2 shot 1–2: `a low wooden console table with one white mug on it, against the plain white wall`\n- V3 mọi shot: `a framed abstract print with no text hung high on the white wall at the far left, and a green potted plant on a small round table on the floor at the far left, both clearly to the left of and separate from the whole shelf set and the tunnel, never touching or overlapping them`\n\n**Dòng tránh (thêm vào cuối mọi prompt):**\n```text\nAvoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, shelves floating without brackets, a plain unwrapped sisal post, the number or position of the set pieces changing between shots, blurry or morphing wood.\n```\nỞ ảnh neo không có sản phẩm (V1-A1, V2-A1, V3-A1) bỏ phần \"extra shelves or extra pieces\" khỏi dòng tránh, thay bằng \"wall-mounted shelves\". Vật phụ V1/V2 không còn trong cảnh thì **không** viết \"is gone\" trong prompt; đưa vào dòng tránh (V1 ảnh sau cây mèo: `no cat tree`; V2: `no console table, no mug`).\n**Tỷ lệ cú nhảy (thêm vào mô tả kệ thấp ở mọi ảnh neo có sản phẩm):** `the lowest shelf is about one cat-length above the floor, and the cat is small enough to sit on it comfortably`. Thêm vào dòng tránh của V3: `the potted plant or its table turned into a shelf`.\n\n**Ảnh tham chiếu đưa vào công cụ gen:** chỉ `g01-crop.jpg` (đính kèm), cho các ảnh neo có sản phẩm. Dặn trong prompt: `use the reference image only for the look of the shelves, steps, post and house; ignore the cat, the extra shelf at the top left, and both partial pieces at the left edge (a sliver of a shelf at the top and partial steps below)`.\n\n**Kế hoạch ảnh neo và clip.** Mỗi video 4 ảnh neo và 3 clip (6 + 4 + 5 = 15 s), ghép bằng công cụ dựng của bạn; chữ bằng PNG phủ ở khâu dựng.\n\n### V1 · Before → After · hook \"Your cat tree is eating your living room\"\nẢnh neo (cùng bối cảnh, cùng góc máy):\n- **V1-A1** (shot 1): `[bối cảnh] + [nhân vật] + [vật thể phụ V1]. The orange tabby sits upright on top of the cat tree, calm, looking toward the camera. Bare white wall.`\n- **V1-A2** (đầu shot 3): `[bối cảnh] + [nhân vật] + [khối sản phẩm]. The orange tabby stands on the floor directly below the lowest grey-fleece shelf, head raised toward it, all paws on the floor.`\n- **V1-A3** (cuối shot 3): `[bối cảnh] + [nhân vật] + [khối sản phẩm]. Same room, same camera, same set. The orange tabby stands on the lowest grey-fleece shelf, all four paws on the fleece, calm.`\n- **V1-A4** (shot 4–5): `[bối cảnh] + [nhân vật] + [khối sản phẩm]. Same room, same camera, same set. The orange tabby lies curled inside the square cat house at the top right, head out of the round doorway, calm. The floor is empty.`\n\nClip (câm; mỗi prompt clip ghép đủ: bối cảnh + nhân vật + sản phẩm + mô tả chuyển động + dòng tránh):\n- **V1-C1** (6 s, start = A1): `The orange tabby sits still, then hops down onto the floor in front of the cat tree. Fixed camera.`\n- **V1-C2** (4 s, start = A2, end = A3): `[bối cảnh] + [nhân vật] + [khối sản phẩm]. The orange tabby crouches and jumps up onto the lowest grey-fleece shelf and lands on it. One smooth motion, the cat never passes through the post or the shelves. Fixed camera.` + [dòng tránh, thêm `no cat tree`]\n- **V1-C3** (5 s, start = A4): `The orange tabby stays lying in the cat house, a slow blink and a small ear movement only. Fixed camera.`\n\nGhép mọi prompt: `[khối bối cảnh] + [khối nhân vật] + [khối sản phẩm hoặc vật thể phụ] + [mô tả trạng thái] + [dòng tránh]`. Clip dùng `start_image` (và `end_image` nếu có) đúng ảnh neo đã chấm; không audio.\n**Review ảnh neo (mục C): xem `REVIEW-claude-anchors-2026-10-24.md`.**",
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png"
          ],
          "character": [],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt đây là phần prompt pack trong brief gửi Muse (1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/); chưa có bằng chứng Muse chạy đúng brief này. Nguồn gốc file chỉ suy từ thư mục gen-muse/final (Inference); LIST-ANGLE.csv lại ghi 'Muse: chưa gen/chưa nhận' (mâu thuẫn, cần Amin xác nhận). Brief đầy đủ: 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/ (BRIEF cùng mã). Không có video ref."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            }
          ]
        }
      },
      {
        "id": "PT1-A2",
        "title": "Mèo leo lên bàn, tủ, kệ sách: tạo chỗ leo riêng thay vì để mèo chiếm đồ nội thất",
        "status": "Đã qua cổng",
        "gate": "C",
        "format": "Problem → Solution",
        "hook": "Cat on the counter again?",
        "step": "Xong (Amin chốt 24/10/2026)",
        "note": "Trạng thái nguồn: Đã xong. Review: Amin duyệt bước 3, 4, 6 (trần 32) và từng clip K1–K3 ngày 24/10/2026. Đã gen 16 credit. Chưa agent review video (bước 8). Lưu ý để review: K3 khung bị zoom nhẹ, mèo sát mép phải; hình 480p phóng lên 720×1280. · Amin chốt xong 24/10/2026. Version: v1 (final dựng 24/10: K1 + K2 + K3, câm, nhạc tạm). Ngày: 24/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file A2-final.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A2-final.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 24/10/2026 qua Higgsfield MCP, phương án B (liền mạch). Ảnh neo B1 gpt_image_2 1k medium 9:16 (1 credit/ảnh) (ref V1-A2); clip K1 7 s + K2 4 s + K3 4 s seedance_2_0 fast 480p (496×864) 9:16 câm, nối bằng khung cuối; final 720×1280, 15 s, nhạc tạm. Credit: 16 (trần 32; Fact).",
          "prompt": "### A2 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A2-A):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Hook | Ảnh neo mới A2-1 (console + mèo, không bộ kệ) |\n| S2 · 3–6 s · Vấn đề | Clip C1 từ ảnh A2-1 |\n| S3 · 6–10 s · Giải pháp | Ảnh `V1-A2` (đã có) → clip C2 |\n| S4 · 10–13 s | Ảnh neo mới A2-4 → clip C3 |\n| S5 · 13–15 s · Giữ | Cùng clip C3 |\n\n**Prompt pack (A2-A)**: ghép đủ khối cố định của `Bước 5` (khối sản phẩm nguyên văn từ `REFERENCE.md`, khối nhân vật, khối bối cảnh, dòng tránh) vào mỗi prompt; clip nối bằng khung cuối của clip trước (`6-gen-recipe.md`).\n- **Ảnh neo A2-1 (shot 1):** [vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions] + [one domestic orange tabby short-haired cat, medium size, round eyes, no collar; it is not any of the cats in the reference image]. A low wooden console table with one white mug on it against the plain white wall; the orange tabby sits on the console table beside the mug, looking straight at the camera. Bare white wall, no shelves on the wall. Avoid: any text, logos or readable titles, people, hammock, bridge, wall-mounted shelves, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood\n- **Clip C1 (shot 1–2, 6 s, start = A2-1, câm):** The orange tabby sits still, then slowly raises its head and looks up toward the upper right of the frame. Nothing falls, nothing else moves. Fixed camera.\n- **Ảnh có sẵn cho shot 3:** Dùng lại `gen-claude/anchors/V1-A2.png` (mèo dưới sàn nhìn lên kệ thấp; đã review Đạt có ghi chú).\n- **Clip C2 (shot 3, 4 s, start = V1-A2):** [khối bối cảnh][khối nhân vật][khối sản phẩm]. The orange tabby crouches and leaps up in one smooth motion onto the lowest grey-fleece shelf and settles low beside the post. The cat keeps the same size. All shelves, the post, the steps, the tunnel and the house stay completely still. Fixed camera.\n- **Ảnh neo A2-4 (đầu shot 4):** [khối bối cảnh][khối nhân vật][khối sản phẩm]. The orange tabby stands at the open front of the round wooden tunnel on its own small shelf at the left, facing into it.\n- **Clip C3 (shot 4–5, 5 s, start = A2-4):** The orange tabby steps into the round tunnel (a single motion) and ends with its head peeking out of the opening, then stays still. Fixed camera.\n\n**Chi phí dự kiến (A2-A), chưa duyệt, chỉ áp dụng cho Claude:** Ước tính (Claude, `seedance_2_0` fast 480p, 1 credit/giây; `gpt_image_2` 1k medium 1 credit/ảnh): 2 ảnh neo mới (2) + clip 6+4+5 s (15) = **~17 credit**. Muse (công cụ khác) tự báo ngân sách và retry riêng.\n\n**Asset plan (A2-B):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Hook | Ảnh neo mới B1 (ref V1-A2: bỏ mèo dưới sàn, thêm bàn console + cốc + mèo ngồi trên bàn) |\n| S2 · 3–5 s · Vấn đề → giải pháp | Clip K1 (7 s: S1–S3, một clip) |\n| S3 · 5–7 s | Clip K1 (7 s, cùng clip) |\n| S4 · 7–11 s | Clip K2 (bắt đầu từ khung cuối K1) |\n| S5 · 11–15 s · Giữ | Clip K3 (bắt đầu từ khung cuối K2) |\n\n**Prompt pack (A2-B)**: ghép đủ khối cố định của `Bước 5` (khối sản phẩm nguyên văn từ `REFERENCE.md`, khối nhân vật, khối bối cảnh, dòng tránh) vào mỗi prompt; clip nối bằng khung cuối của clip trước (`6-gen-recipe.md`).\n- **Ảnh neo B1 (shot 1; ref chỉ `V1-A2`, không dùng g01-crop):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. Add a low wooden console table with one plain white mug (no printing) in front of the plain wall at the right of the frame; it is low, its top about half a cat-length below the top of the lowest shelf; the console table is not a shelf and is not attached to the wall. The orange tabby sits on the console table beside the mug, looking straight at the camera. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one console table with its mug, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, a second console table, the console table turned into a shelf or attached to the wall, printing on the mug\n- **Clip K1 (shot 1–3, 7 s, start = B1, câm):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped\n\n[… rút gọn trong Store Hub; bản đầy đủ 12472 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A2-prompt-pack.md]",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-1/anchors-a2/A2-B1.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nStoryboard: refs/storyboard/round-1/A2-A.png; refs/storyboard/round-1/A2-B.png"
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/A2-final.mp4\nClip gốc/thành phần: videos/higgsfield/clips/round-1/clips-a2/K1.mp4; videos/higgsfield/clips/round-1/clips-a2/K2.mp4; videos/higgsfield/clips/round-1/clips-a2/K3.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-1__REVIEW-claude-A2-A3-prompt-pack-2026-10-24.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-1__REVIEW-claude-anchors-2026-10-24.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Bản đã đăng trên 4 kênh cho A2 là bản Muse 15 s (xem mục PT1-A2-M), không phải file này. Chưa xác minh: chưa review độc lập bản có chữ/nhạc (nếu có); cảnh/mèo là AI, không phải bằng chứng sản phẩm thật."
            }
          ],
          "character": [],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-a2/A2-B1.png"
          ]
        }
      },
      {
        "title": "Mèo leo lên bàn, tủ, kệ sách: tạo chỗ leo riêng thay vì để mèo chiếm đồ nội thất (bản Muse)",
        "gate": "C",
        "format": "Problem → Solution",
        "hook": "Cat on the counter again?",
        "id": "PT1-A2-M",
        "status": "Chưa qua cổng",
        "step": "Có file Muse; chưa review độc lập, chưa qua cổng C",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/muse/a2-final-15s.mp4",
        "note": "Nguồn: Muse; 15 s · 720×1280 · 9:16 (đo từ file, 09/11/2026); model/credit: Trống / chưa xác minh (gen-muse NOTES.md và CREDIT-LOG.csv trống). Bản này là file đã đăng FB/IG/TT/YT cho A2 (khớp byte với IG-2 KAN-80; Fact). Có audio. File: a2-final-15s.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/muse/.",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit/số lần gen: Trống / chưa xác minh. 15 s · 720×1280 · 9:16, có audio (ffprobe).",
          "prompt": "## 6. Prompt pack (dán nguyên văn; mỗi prompt đã ghép đủ khối cố định)\n- **Ảnh neo B1 (shot 1; ref chỉ `V1-A2`, không dùng g01-crop):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. Add a low wooden console table with one plain white mug (no printing) in front of the plain wall at the right of the frame; it is low, its top about half a cat-length below the top of the lowest shelf; the console table is not a shelf and is not attached to the wall. The orange tabby sits on the console table beside the mug, looking straight at the camera. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one console table with its mug, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, a second console table, the console table turned into a shelf or attached to the wall, printing on the mug\n- **Clip K1 (shot 1–3, 7 s, start = B1, câm):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The console table with the mug stays in place and is not part of the set. The orange tabby sits on the console looking at the camera for the first 3 seconds, looks up at the shelves and crouches, then leaps in one smooth continuous arc, passing to the right of the lower shelf, up onto the flat top of the UPPER grey-fleece shelf and lands standing there, above the post. The cat keeps the same size throughout. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one console table with its mug, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, a second console table, the console table turned into a shelf or attached to the wall, printing on the mug\n- **Clip K2 (shot 4, 4 s, start = khung cuối K1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The console table with the mug stays in place. The orange tabby, standing on the upper shelf, walks up the sloped climbing steps in one smooth continuous motion to the small ledge at the base of the cat house and steps up onto the flat top of the house. The cat keeps the same size throughout. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one console table with its mug, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changin\n\n[… rút gọn trong Store Hub; bản đầy đủ 8720 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A2-muse-brief-prompt.md]",
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png"
          ],
          "character": [],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt đây là phần prompt pack trong brief gửi Muse (1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/); chưa có bằng chứng Muse chạy đúng brief này. Nguồn gốc file chỉ suy từ thư mục gen-muse/final (Inference); LIST-ANGLE.csv lại ghi 'Muse: chưa gen/chưa nhận' (mâu thuẫn, cần Amin xác nhận). Brief đầy đủ: 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/ (BRIEF cùng mã). Không có video ref."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            }
          ]
        }
      },
      {
        "id": "PT1-A3",
        "title": "Kệ mèo hòa vào nội thất: phòng khách đẹp, mèo leo và nằm trên kệ",
        "status": "Đã qua cổng",
        "gate": "C",
        "format": "POV thẩm mỹ / continuous lifestyle",
        "hook": "Cat furniture that looks like decor",
        "step": "Xong (Amin chốt 24/10/2026)",
        "note": "Trạng thái nguồn: Đã xong. Review: Amin duyệt bước 3, 4, 6 (trần 32) và từng clip 24/10/2026. Ảnh neo bản 2: agent mục C Đạt (3 lỗi nhỏ ghi trong REVIEW-claude-A3-anchor-v2). K2 bản 1 lỗi phụ đề chữ Trung tự sinh, đã bỏ và gen lại. Đã dùng 21 credit trong trần 32. Chưa agent review video (bước 8). · Amin chốt xong 24/10/2026. Version: v1 (final dựng 24/10: K1 + K2 bản 2 + K3, câm, nhạc tạm). Ngày: 24/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file A3-final.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A3-final.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 24/10/2026 qua Higgsfield MCP. Ảnh neo S1 (làm lại 1 lần) gpt_image_2 1k medium 9:16 (1 credit/ảnh); clip K1 7 s + K2 4 s (gen lại vì phụ đề chữ Trung tự sinh) + K3 4 s seedance_2_0 fast 480p (496×864) 9:16 câm; final 720×1280, 15 s. Credit: 21 (trần 32; Fact).",
          "prompt": "### A3 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A3):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Hook | Ảnh neo mới S1 (ref V1-A2: bỏ mèo dưới sàn, đặt mèo ngồi trên kệ thấp, thêm tranh + chậu cây + nắng ấm) |\n| S2 · 3–7 s | Clip K1 (từ ảnh S1) |\n| S3 · 7–11 s | Clip K2 (từ khung cuối K1) |\n| S4 · 11–15 s · Giữ | Clip K3 (từ khung cuối K2) |\n\n**Prompt pack (A3)**: ghép đủ khối cố định của `Bước 5` (khối sản phẩm nguyên văn từ `REFERENCE.md`, khối nhân vật, khối bối cảnh, dòng tránh) vào mỗi prompt; clip nối bằng khung cuối của clip trước (`6-gen-recipe.md`).\n- **Ảnh neo S1 (ref chỉ `V1-A2`, không dùng g01-crop):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. Style the room: a framed abstract print with no text hung on the wall above the round tunnel with a clear gap between the print and the tunnel, and ONE small green potted plant on a low round stool on the floor next to the sofa, with a visible gap below and left of the lowest shelf; warm late-afternoon sunlight. The orange tabby sits at the left end of the lowest grey-fleece shelf, in the open space to the left of the post, calm, looking out into the room. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, the framed print and the one potted plant on its stool, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, a second plant, the plant or its stool turned into a shelf, any text on the print\n- **Clip K1 (shot 1–2, 7 s, start = S1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The print and the single plant stay still. The orange tabby sits at the left end of the lowest shelf, in the open space left of the post, for the first 3 seconds, then stands up, crouches and leaps in one smooth continuous motion up onto the flat top of the UPPER grey-fleece shelf and lands standing there, above the post. Warm light shifts very slightly. The cat keeps the same size throughout. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, the framed print and the one potted plant on its stool, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, a second plant, the plant or its stool turned into a shelf, any text on the print\n- **Clip K2 (shot 3, 4 s, start = khung cuối K1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The print and the single plant stay still. The orange tabby, standing on the upper shelf, walks up the sloped climbing steps in one smooth continuous motion to the small ledge at the base of the cat house and steps up onto the flat top of the house. The cat keeps the same size throughout. It\n\n[… rút gọn trong Store Hub; bản đầy đủ 9552 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A3-prompt-pack.md]",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-1/anchors-a3/A3-S1.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nStoryboard: refs/storyboard/round-1/A3.png"
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/A3-final.mp4\nClip gốc/thành phần: videos/higgsfield/clips/round-1/clips-a3/K1.mp4; videos/higgsfield/clips/round-1/clips-a3/K2.mp4; videos/higgsfield/clips/round-1/clips-a3/K3.mp4\nBản cũ/biến thể: videos/higgsfield/clips/round-1/clips-a3/K2-v1-subtitle-defect.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-1__REVIEW-claude-A3-anchor-v2-2026-10-24.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-1__REVIEW-claude-A2-A3-prompt-pack-2026-10-24.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Chưa xác minh: chưa review độc lập bản có chữ/nhạc (nếu có); cảnh/mèo là AI, không phải bằng chứng sản phẩm thật. Đã đăng đúng file này (khớp byte với file KAN-80 trong tab Social; Fact)."
            }
          ],
          "character": [],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-a3/A3-S1.png"
          ]
        }
      },
      {
        "title": "Kệ mèo hòa vào nội thất: phòng khách đẹp, mèo leo và nằm trên kệ (bản Muse)",
        "gate": "C",
        "format": "POV thẩm mỹ / continuous lifestyle",
        "hook": "Cat furniture that looks like decor",
        "id": "PT1-A3-M",
        "status": "Chưa qua cổng",
        "step": "Có file Muse; chưa review độc lập, chưa qua cổng C",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/muse/a3-final-15s.mp4",
        "note": "Nguồn: Muse; 15 s · 720×1280 · 9:16 (đo từ file, 09/11/2026); model/credit: Trống / chưa xác minh (gen-muse NOTES.md và CREDIT-LOG.csv trống). Chưa thấy đăng. File: a3-final-15s.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/muse/.",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit/số lần gen: Trống / chưa xác minh. 15 s · 720×1280 · 9:16, câm (ffprobe).",
          "prompt": "## 6. Prompt pack (dán nguyên văn; mỗi prompt đã ghép đủ khối cố định)\n- **Ảnh neo S1 (ref chỉ `V1-A2`, không dùng g01-crop):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. Style the room: a framed abstract print with no text hung on the wall above the round tunnel with a clear gap between the print and the tunnel, and ONE small green potted plant on a low round stool on the floor next to the sofa, with a visible gap below and left of the lowest shelf; warm late-afternoon sunlight. The orange tabby sits at the left end of the lowest grey-fleece shelf, in the open space to the left of the post, calm, looking out into the room. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, the framed print and the one potted plant on its stool, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, a second plant, the plant or its stool turned into a shelf, any text on the print\n- **Clip K1 (shot 1–2, 7 s, start = S1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The print and the single plant stay still. The orange tabby sits at the left end of the lowest shelf, in the open space left of the post, for the first 3 seconds, then stands up, crouches and leaps in one smooth continuous motion up onto the flat top of the UPPER grey-fleece shelf and lands standing there, above the post. Warm light shifts very slightly. The cat keeps the same size throughout. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, the framed print and the one potted plant on its stool, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, a second plant, the plant or its stool turned into a shelf, any text on the print\n- **Clip K2 (shot 3, 4 s, start = khung cuối K1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty for captions. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The print and the single plant stay still. The orange tabby, standing on the upper shelf, walks up the sloped climbing steps in one smooth continuous motion to the small ledge at the base of the cat house and steps up onto the flat top of the house. The cat keeps the same size throughout. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, the framed print and the one potted plant on its stool, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the\n\n[… rút gọn trong Store Hub; bản đầy đủ 8800 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A3-muse-brief-prompt.md]",
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png"
          ],
          "character": [],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt đây là phần prompt pack trong brief gửi Muse (1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/); chưa có bằng chứng Muse chạy đúng brief này. Nguồn gốc file chỉ suy từ thư mục gen-muse/final (Inference); LIST-ANGLE.csv lại ghi 'Muse: chưa gen/chưa nhận' (mâu thuẫn, cần Amin xác nhận). Brief đầy đủ: 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/ (BRIEF cùng mã). Không có video ref."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            }
          ]
        }
      },
      {
        "id": "PT1-A4",
        "title": "Tự phối bố cục từng module theo không gian (CHỈ khi có cấu hình và hướng dẫn lắp đã xác minh)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Demo / How it works",
        "hook": "Design your own cat wall (nháp, chờ xác minh)",
        "step": "Bước 0: bị chặn, chờ xác minh supplier/hướng dẫn lắp",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chờ xác minh supplier/hướng dẫn lắp. Script, storyboard là nháp, chưa duyệt, chưa review.. Version: v0 (chưa gen, bị chặn). Ngày: 24/10/2026. · KAN-91: chưa có media; có storyboard + prompt pack nháp.",
        "kit": {
          "tool": "Chưa gen (Trống)",
          "config": "Chưa chọn công cụ/model; chưa duyệt trần credit (Trống)",
          "prompt": "### A4 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A4):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Hook (nháp) | Ảnh minh hoạ mới (BỊ CHẶN: cần danh sách món đã xác minh) |\n| S2 · 3–6 s | Ảnh minh hoạ mới (BỊ CHẶN: cần hướng dẫn lắp chính thức) |\n| S3 · 6–10 s | Ảnh `V1-master` (đã có) |\n| S4 · 10–13 s | Clip kiểu K3 (BỊ CHẶN tới khi S1–S2 xác minh) |\n\n**Prompt pack (A4)**: ghép đủ khối cố định của `Bước 5` (khối sản phẩm nguyên văn từ `REFERENCE.md`, khối nhân vật, khối bối cảnh, dòng tránh) vào mỗi prompt; clip nối bằng khung cuối của clip trước (`6-gen-recipe.md`).\n- **Prompt pack:** **CHƯA VIẾT (chờ xác minh).** Không viết prompt cho cảnh trải phẳng, mẫu đánh dấu hay cấu hình khác khi chưa có danh sách món theo biến thể, hướng dẫn lắp chính thức và cấu hình được phép. Chỉ khung S3 (bộ đã khoá) dùng lại `V1-master`.\n\n**Chi phí dự kiến (A4), chưa duyệt, chỉ áp dụng cho Claude:** **Không ước tính** (bị chặn, chưa có gì để gen). Muse (công cụ khác) tự báo ngân sách và retry riêng.",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa gen. Bị chặn: chờ xác minh supplier/hướng dẫn lắp; storyboard là nháp. Không có video/ảnh gen cho mục này (đã tìm: product-test-1/3-creative/round-*/gen-claude, gen-muse, gen-genjutsu, LIST-ANGLE.csv, CREATIVE.xlsx)."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Storyboard: refs/storyboard/round-2/A4.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            }
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/storyboard/round-2/A4.png"
          ],
          "character": []
        }
      },
      {
        "id": "PT1-A5",
        "title": "Tận dụng chiều cao tường thay vì thêm diện tích sàn",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Problem → Solution / educational demo",
        "hook": "More height. Same floor.",
        "step": "Bước 3–4: chờ Amin duyệt storyboard và wording; cần kiểm chứng asset",
        "note": "Trạng thái nguồn: Đang làm. Review: Chuẩn bị v1.4: nháp chờ Amin duyệt; cần kiểm chứng asset và wording; chưa review prompt pack, chưa review video.. Version: v0 (chưa gen). Ngày: 24/10/2026. · KAN-91: chưa có media; có storyboard + prompt pack nháp.",
        "kit": {
          "tool": "Chưa gen (Trống)",
          "config": "Chưa chọn công cụ/model; chưa duyệt trần credit (Trống)",
          "prompt": "### A5 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A5):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Hook | Ảnh `V1-A2` (đã có) hoặc ảnh neo mới nhấn sàn trống |\n| S2 · 3–7 s | Clip K1 (từ ảnh S1) |\n| S3 · 7–11 s | Clip K2 (từ khung cuối K1) |\n| S4 · 11–14 s · Giữ | Clip K3 (từ khung cuối K2) |\n\n**Prompt pack (A5)**: ghép đủ khối cố định của `Bước 5` (khối sản phẩm nguyên văn từ `REFERENCE.md`, khối nhân vật, khối bối cảnh, dòng tránh) vào mỗi prompt; clip nối bằng khung cuối của clip trước (`6-gen-recipe.md`).\n- **Ảnh neo S1:** Dùng lại `gen-claude/anchors/V1-A2.png` (mèo trên sàn nhìn lên kệ thấp, thảm và sàn trống rõ). Nếu cần nhấn sàn trống hơn thì gen ảnh mới từ `V1-master` với dặn \"the rug and the bare floor fill the lower half of the frame, nothing on the floor except the cat\".\n- **Clip K1 (shot 1–2, 7 s, start = S1):** The orange tabby stands on the floor looking up, crouches, then leaps in one smooth continuous motion up onto the UPPER grey-fleece shelf and lands standing next to the sisal post. The floor and the rug below stay bare. The cat keeps the same size. The set stays unchanged. Fixed camera.\n- **Clip K2 (shot 3, 4 s, start = khung cuối K1):** The orange tabby walks up the sloped climbing steps in one smooth continuous motion and steps onto the top of the cat house. The floor below stays bare. Fixed camera.\n- **Clip K3 (shot 4, 4 s, start = khung cuối K2):** The orange tabby slowly settles down and lies on the top of the cat house, relaxed, one slow blink. The floor below stays bare. Fixed camera.\n\n**Chi phí dự kiến (A5), chưa duyệt, chỉ áp dụng cho Claude:** Ước tính: dùng lại `V1-A2` (0) + clip 7+4+4 s (15) = **~15 credit** (+1 nếu gen ảnh neo mới). Muse (công cụ khác) tự báo ngân sách và retry riêng.",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa gen: chờ Amin duyệt storyboard/wording, cần kiểm chứng asset. Không có video/ảnh gen cho mục này (đã tìm: product-test-1/3-creative/round-*/gen-claude, gen-muse, gen-genjutsu, LIST-ANGLE.csv, CREATIVE.xlsx)."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Storyboard: refs/storyboard/round-2/A5.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            }
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/storyboard/round-2/A5.png"
          ],
          "character": []
        }
      },
      {
        "id": "PT1-A6",
        "title": "Phối bố cục từng món",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "POV demo",
        "hook": "Build your cat's wall, piece by piece",
        "step": "Chưa vào pipeline (bước 1–2 chưa làm)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chưa review. Version: chưa có. Ngày: 24/10/2026.",
        "kit": {
          "tool": "Trống",
          "config": "Trống",
          "prompt": "Trống",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Trống / chưa xác minh: không có video, ảnh, storyboard, prompt hay ref nào cho mục này. Đã tìm: product-test-1/3-creative/round-1..4 (form, for-muse, gen-*), LIST-ANGLE.csv (ghi 'Chưa làm', các cột Trống), CREATIVE.xlsx, KAN-80 output."
            }
          ]
        }
      },
      {
        "id": "PT1-A7",
        "title": "Lắp vào stud (chờ hướng dẫn lắp chính thức của supplier; không nêu tải trọng)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Tutorial",
        "hook": "Find the stud. Then it holds.",
        "step": "Chưa vào pipeline (bước 1–2 chưa làm)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chưa review. Version: chưa có. Ngày: 24/10/2026.",
        "kit": {
          "tool": "Trống",
          "config": "Trống",
          "prompt": "Trống",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Trống / chưa xác minh: không có video, ảnh, storyboard, prompt hay ref nào cho mục này. Đã tìm: product-test-1/3-creative/round-1..4 (form, for-muse, gen-*), LIST-ANGLE.csv (ghi 'Chưa làm', các cột Trống), CREATIVE.xlsx, KAN-80 output."
            }
          ]
        }
      },
      {
        "id": "PT1-A8",
        "title": "Mèo nhảy lên kệ, tiếng gỗ (cần footage thật, âm thanh thật)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "ASMR",
        "hook": "(âm thanh thật, chưa có hook chữ)",
        "step": "Chưa vào pipeline (bước 1–2 chưa làm)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chưa review. Version: chưa có. Ngày: 24/10/2026.",
        "kit": {
          "tool": "Trống",
          "config": "Trống",
          "prompt": "Trống",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Trống / chưa xác minh: không có video, ảnh, storyboard, prompt hay ref nào cho mục này. Đã tìm: product-test-1/3-creative/round-1..4 (form, for-muse, gen-*), LIST-ANGLE.csv (ghi 'Chưa làm', các cột Trống), CREATIVE.xlsx, KAN-80 output."
            }
          ]
        }
      },
      {
        "id": "PT1-A9",
        "title": "bức tường trống thành tuyến leo hoàn chỉnh",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Before → After",
        "hook": "Blank wall. Climbing route.",
        "step": "Bước 3–4: chờ Amin duyệt storyboard; bước 5 chờ agent review prompt pack (Ưu tiên 1)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chuẩn bị v1.4 xong bước 0–5 (nháp): chờ Amin duyệt; chưa review prompt pack, chưa review video. Ưu tiên 1.. Version: v0 (chưa gen). Ngày: 24/10/2026. · KAN-91: chưa có media; có storyboard + prompt pack nháp.",
        "kit": {
          "tool": "Chưa gen (Trống)",
          "config": "Chưa chọn công cụ/model; chưa duyệt trần credit (Trống)",
          "prompt": "### A9 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A9):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Trước | Ảnh neo TRƯỚC-A9 (ref `V1-A2`: bỏ bộ kệ, mèo ngồi trên thảm) → clip TRƯỚC-A9 (4 s, cắt còn 3 s khi dựng) |\n| S2 · 3–7 s · Sau | Ảnh neo SAU (dùng chung) → clip SAU-1 |\n| S3 · 7–11 s | Clip SAU-2 (từ khung cuối SAU-1) |\n| S4 · 11–15 s · Giữ | Clip SAU-3 (từ khung cuối SAU-2) |\n\n**Prompt pack (A9)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh neo TRƯỚC-A9 (ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room and the camera framing: same plain white wall, same light wood floor, same pale beige sofa edge at the far left, same beige rug. Remove the cat and remove EVERY shelf, step, house and tunnel from the wall: the wall is completely bare and plain. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos.. The orange tabby sits on the beige rug in the middle-left of the room, facing the bare wall, looking up at it calmly; soft daylight. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, any shelf, step, house or tunnel on the wall.\n- **Clip TRƯỚC-A9 (shot 1, 4 s, start = ảnh neo TRƯỚC-A9; cắt còn 3 s):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The wall is bare and plain. The orange tabby sits on the rug looking at the bare wall, then slowly tilts its head up once. Nothing else moves. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, any shelf, step, house or tunnel on the wall.\n- **Ảnh neo SAU (dùng chung A9, A10, A11, A13, A14; ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wood\n\n[… rút gọn trong Store Hub; bản đầy đủ 14537 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A9-prompt-pack.md]",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa gen clip. Ảnh neo SAU (dùng chung A9/A10/A11/A13/A14) đã gen, xem bên Ref. Không có video/ảnh gen cho mục này (đã tìm: product-test-1/3-creative/round-*/gen-claude, gen-muse, gen-genjutsu, LIST-ANGLE.csv, CREATIVE.xlsx)."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Storyboard: refs/storyboard/round-3/A9.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nBrief gửi Muse (chưa có bằng chứng đã gửi/gen): 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/round-3__BRIEF-A9.md"
            }
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/SAU.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/storyboard/round-3/A9.png"
          ],
          "character": []
        }
      },
      {
        "id": "PT1-A10",
        "title": "góc chơi bừa bộn thành góc mèo gọn trên tường",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Before → After",
        "hook": "Play corner, minus the clutter.",
        "step": "Bước 3–4: chờ Amin duyệt storyboard; bước 5 chờ agent review prompt pack (Chuẩn bị, chưa ưu tiên)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chuẩn bị v1.4 xong bước 0–5 (nháp): chờ Amin duyệt; chưa review prompt pack, chưa review video. Chuẩn bị, chưa ưu tiên.. Version: v0 (chưa gen). Ngày: 24/10/2026. · KAN-91: chưa có media; có storyboard + prompt pack nháp.",
        "kit": {
          "tool": "Chưa gen (Trống)",
          "config": "Chưa chọn công cụ/model; chưa duyệt trần credit (Trống)",
          "prompt": "### A10 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A10):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Trước | Ảnh neo TRƯỚC-A10 (ref `V1-A2`: bỏ bộ kệ, thêm ổ mèo + đồ chơi trên sàn) → clip TRƯỚC-A10 |\n| S2 · 3–7 s · Sau | Ảnh neo SAU (dùng chung) → clip SAU-1 |\n| S3 · 7–11 s | Clip SAU-2 (từ khung cuối SAU-1) |\n| S4 · 11–15 s · Giữ | Clip SAU-3 (từ khung cuối SAU-2) |\n\n**Prompt pack (A10)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh neo TRƯỚC-A10 (ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room and the camera framing: same plain white wall, same light wood floor, same pale beige sofa edge at the far left, same beige rug. Remove the cat and remove EVERY shelf, step, house and tunnel from the wall: the wall is completely bare and plain. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos.. On the beige rug and the floor around it lie a plain round cat bed and three or four simple cat toys scattered around (a felt ball, a small plush mouse, a feather wand), all plain with no text or logos. The orange tabby sits among the toys, looking at one of them. Soft daylight. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, any shelf on the wall, more than four toys, text or logos on toys.\n- **Clip TRƯỚC-A10 (shot 1, 4 s, start = ảnh neo TRƯỚC-A10; cắt còn 3 s):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The wall is bare and plain. The orange tabby sits among the scattered toys and gently taps one toy with a front paw once. Nothing else moves. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, any shelf on the wall, toys multiplying, toys flying.\n- **Ảnh neo SAU (dùng chung A9, A10, A11, A13, A14; ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on\n\n[… rút gọn trong Store Hub; bản đầy đủ 14603 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A10-prompt-pack.md]",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa gen clip. Ảnh neo SAU dùng chung. Không có video/ảnh gen cho mục này (đã tìm: product-test-1/3-creative/round-*/gen-claude, gen-muse, gen-genjutsu, LIST-ANGLE.csv, CREATIVE.xlsx)."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Storyboard: refs/storyboard/round-3/A10.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nBrief gửi Muse (chưa có bằng chứng đã gửi/gen): 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/round-3__BRIEF-A10.md"
            }
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/SAU.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/storyboard/round-3/A10.png"
          ],
          "character": []
        }
      },
      {
        "id": "PT1-A11",
        "title": "mèo không có chỗ riêng thành khu leo và nằm riêng",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Before → After",
        "hook": "A spot of its own.",
        "step": "Bước 3–4: chờ Amin duyệt storyboard; bước 5 chờ agent review prompt pack (Chuẩn bị, chưa ưu tiên)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chuẩn bị v1.4 xong bước 0–5 (nháp): chờ Amin duyệt; chưa review prompt pack, chưa review video. Chuẩn bị, chưa ưu tiên.. Version: v0 (chưa gen). Ngày: 24/10/2026. · KAN-91: chưa có media; có storyboard + prompt pack nháp.",
        "kit": {
          "tool": "Chưa gen (Trống)",
          "config": "Chưa chọn công cụ/model; chưa duyệt trần credit (Trống)",
          "prompt": "### A11 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A11):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Trước | Ảnh neo TRƯỚC-A11 (ref `V1-A2`: bỏ bộ kệ, mèo ngồi trên tay vịn sofa) → clip TRƯỚC-A11 |\n| S2 · 3–7 s · Sau | Ảnh neo SAU (dùng chung) → clip SAU-1 |\n| S3 · 7–11 s | Clip SAU-2 (từ khung cuối SAU-1) |\n| S4 · 11–15 s · Giữ | Clip SAU-3 (từ khung cuối SAU-2) |\n\n**Prompt pack (A11)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh neo TRƯỚC-A11 (ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room and the camera framing: same plain white wall, same light wood floor, same pale beige sofa edge at the far left, same beige rug. Remove the cat and remove EVERY shelf, step, house and tunnel from the wall: the wall is completely bare and plain. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos.. The orange tabby sits on the armrest of the pale beige sofa at the far left, balanced, looking out into the room. Soft daylight. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, any shelf on the wall, a second cat, the cat floating.\n- **Clip TRƯỚC-A11 (shot 1, 4 s, start = ảnh neo TRƯỚC-A11; cắt còn 3 s):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The wall is bare and plain. The orange tabby sits on the sofa armrest, shifts its weight slightly and looks toward the bare wall once. Nothing else moves. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, any shelf on the wall, the cat falling.\n- **Ảnh neo SAU (dùng chung A9, A10, A11, A13, A14; ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square woode\n\n[… rút gọn trong Store Hub; bản đầy đủ 14436 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A11-prompt-pack.md]",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa gen clip. Ảnh neo SAU dùng chung. Không có video/ảnh gen cho mục này (đã tìm: product-test-1/3-creative/round-*/gen-claude, gen-muse, gen-genjutsu, LIST-ANGLE.csv, CREATIVE.xlsx)."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Storyboard: refs/storyboard/round-3/A11.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nBrief gửi Muse (chưa có bằng chứng đã gửi/gen): 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/round-3__BRIEF-A11.md"
            }
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/SAU.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/storyboard/round-3/A11.png"
          ],
          "character": []
        }
      },
      {
        "id": "PT1-A12",
        "title": "mèo ngồi trên tủ thấp (dresser) giữa đồ trang trí của chủ được chuyển sang kệ tường cao hơn đỉnh tủ; kết thúc bằng mèo nằm lại trên kệ, nhìn lại đỉnh tủ đã trống",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Problem → Solution",
        "hook": "Off the cabinet. Onto the wall.",
        "step": "Bước 8 xong (v3 Đạt có ghi chú); chờ Amin: bỏ cảnh nhìn lại tủ (0 credit) hoặc gen lại K3 (~4 credit)",
        "note": "Trạng thái nguồn: Đang làm. Review: Amin duyệt angle, hook, script, storyboard 24/10/2026; Amin xác nhận hook \"Off the cabinet. Onto the wall.\" Prompt pack cổng A (agent độc lập): lần 1 Không đạt (đã sửa), lần 2 Đạt có ghi chú (round-3/REVIEW-claude-A12-A13-A15-prompt-pack-2026-10-24.md). Ảnh neo A12-1 đã gen 24/10 (1 credit): cổng C Qua cổng có ghi chú (mép trái tủ cách kệ thấp chỉ ~0,35–0,6 thân mèo, cú nhảy qua dưới bậc không khả thi nên đã sửa prompt K1: cung nhảy phía trên mút bậc; rủi ro mèo xuyên bậc cao, dừng sau K1) (round-3/REVIEW-claude-anchors-A12-A13-A15-SAU-2026-10-24.md). Amin duyệt trần credit và cho gen 24/10/2026; đã gen đủ clip (24/30 credit trong trần: gen lại K2+K3 thành một clip 8 s theo yêu cầu Amin 24/10), dựng final nháp; chưa chuyển Muse. Review video độc lập (24/10): v1 KHÔNG ĐẠT (hình xuống cấp ở K2/K3, thiếu cảnh nhìn lại đỉnh tủ); v3 ĐẠT CÓ GHI CHÚ (hết loang/nhiễu, nối 7 s ổn, hook một dòng, hình học đạt; còn thiếu cảnh mèo nhìn lại đỉnh tủ ở 11–15 s). Cần Amin chọn: chấp nhận bỏ cảnh nhìn lại tủ (0 credit; sửa S4 thành nằm yên chớp mắt) hoặc gen lại K3 ~4 credit (tổng ~28/30). Chưa chuyển Muse (round-3/REVIEW-claude-video-A12-A13-A15-2026-10-24.md).. Version: v3 (K1 + clip K2+K3 gộp 8 s gen lại; dựng 24/10). Ngày: 24/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file A12-final-v3.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A12-final-v3.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 24/10/2026 qua Higgsfield MCP. Ảnh neo A12-1 gpt_image_2 1k medium 9:16 (1 credit/ảnh); clip K1 7 s + K2+K3 gộp 8 s (gen lại) seedance_2_0 fast 480p (496×864) 9:16 câm; final v3 720×1280, 15 s. Credit: 24 (trần 30; Fact).",
          "prompt": "### A12 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A12):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Vấn đề | Ảnh neo A12-1 (ref `V1-A2`: bỏ mèo sàn, thêm dresser trắng + bình + sách + mèo ngồi trên đỉnh) |\n| S2 · 3–7 s · Giải pháp | Clip K1 (7 s: S1 + S2, một clip) |\n| S3 · 7–11 s | Clip K2 (từ khung cuối K1) |\n| S4 · 11–15 s · Giữ | Clip K3 (từ khung cuối K2) |\n\n**Prompt pack (A12)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh neo A12-1 (ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. A low plain white dresser cabinet (no handles with text) stands at the far right of the frame in front of the plain wall, its top level with the underside of the lowest grey-fleece shelf and clearly below the climbing steps and the cat house, its left end at least one cat-length to the right of the lowest shelf; on its top stand a plain ceramic vase (no pattern, no text) and a short stack of three plain books with blank spines. Cool early-morning daylight. The orange tabby, a little smaller than in the reference, sits on top of the dresser between the vase and the books, looking at the camera. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one white dresser with its one vase and three books, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second dresser, the dresser attached to the wall or turned into a shelf, any text on the books or vase, the cat knocking anything over.\n- **Clip K1 (shot 1–2, 7 s, start = A12-1, câm):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. A low plain white dresser cabinet (no handles with text) stands at the far right of the frame in front of the plain wall, its top level with the underside of the lowest grey-fleece shelf and clearly below the climbing steps and the cat house, its left end at least one cat-length to the right of the lowest shelf; on its top stand a plain ceramic vase (no pattern, no text) and a short stack of three plain books with blank spines. Cool early-morning daylight. The dresser, vase and books stay completely still. The orange tabby sits among the objects for the first 3 seconds, looks up at the shelves, crouches and leaps in one smooth continuous arc, staying in front of the wall, leaping up and to the left in an arc that passes above the lowest tip of the climbing steps, and lands on the left half of the flat top of the UPPER grey-fleece shelf, standing there compact and entirely on the shelf; it never touches the climbing steps or the shelf bracket and it does not step onto the lowest grey-fleece shelf. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one white dresser with its one vase and th\n\n[… rút gọn trong Store Hub; bản đầy đủ 12806 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A12-prompt-pack.md]",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-1/anchors-r3/A12-1.png; refs/for-muse/round-4/V1-A2-cat-crop.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nStoryboard: refs/storyboard/round-3/A12.png"
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/A12-final-v3.mp4\nClip gốc/thành phần: videos/higgsfield/clips/round-1/clips-r3/A12-K1.mp4; videos/higgsfield/clips/round-1/clips-r3/A12-K23.mp4\nBản cũ/biến thể: videos/higgsfield/final/A12-final.mp4; videos/higgsfield/final/A12-final-v2.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-3__REVIEW-claude-video-A12-A13-A15-2026-10-24.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-3__REVIEW-claude-anchors-A12-A13-A15-SAU-2026-10-24.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Chưa xác minh: chưa review độc lập bản có chữ/nhạc (nếu có); cảnh/mèo là AI, không phải bằng chứng sản phẩm thật. Chưa đăng kênh nào (Fact, tab Social không có A12)."
            }
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/A12-1.png"
          ]
        }
      },
      {
        "title": "mèo ngồi trên tủ thấp (dresser) giữa đồ trang trí của chủ được chuyển sang kệ tường cao hơn đỉnh tủ; kết thúc bằng mèo nằm lại trên kệ, nhìn lại đỉnh tủ đã trống (bản Muse)",
        "gate": "C",
        "format": "Problem → Solution",
        "hook": "Off the cabinet. Onto the wall.",
        "id": "PT1-A12-M",
        "status": "Chưa qua cổng",
        "step": "Có file Muse; chưa review độc lập, chưa qua cổng C",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/muse/a12-final-15s.mp4",
        "note": "Nguồn: Muse; 15 s · 720×1280 · 9:16 (đo từ file, 09/11/2026); model/credit: Trống / chưa xác minh (gen-muse NOTES.md và CREDIT-LOG.csv trống). Chưa thấy đăng. File: a12-final-15s.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/muse/.",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit/số lần gen: Trống / chưa xác minh. 15 s · 720×1280 · 9:16, câm (ffprobe).",
          "prompt": "## 6. Prompt pack (dán nguyên văn; mỗi prompt đã ghép đủ khối cố định)\n- **Ảnh neo A12-1 (ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. A low plain white dresser cabinet (no handles with text) stands at the far right of the frame in front of the plain wall, its top level with the underside of the lowest grey-fleece shelf and clearly below the climbing steps and the cat house, its left end at least one cat-length to the right of the lowest shelf; on its top stand a plain ceramic vase (no pattern, no text) and a short stack of three plain books with blank spines. Cool early-morning daylight. The orange tabby, a little smaller than in the reference, sits on top of the dresser between the vase and the books, looking at the camera. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one white dresser with its one vase and three books, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second dresser, the dresser attached to the wall or turned into a shelf, any text on the books or vase, the cat knocking anything over.\n- **Clip K1 (shot 1–2, 7 s, start = A12-1, câm):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. A low plain white dresser cabinet (no handles with text) stands at the far right of the frame in front of the plain wall, its top level with the underside of the lowest grey-fleece shelf and clearly below the climbing steps and the cat house, its left end at least one cat-length to the right of the lowest shelf; on its top stand a plain ceramic vase (no pattern, no text) and a short stack of three plain books with blank spines. Cool early-morning daylight. The dresser, vase and books stay completely still. The orange tabby sits among the objects for the first 3 seconds, looks up at the shelves, crouches and leaps in one smooth continuous arc, staying in front of the wall, leaping up and to the left in an arc that passes above the lowest tip of the climbing steps, and lands on the left half of the flat top of the UPPER grey-fleece shelf, standing there compact and entirely on the shelf; it never touches the climbing steps or the shelf bracket and it does not step onto the lowest grey-fleece shelf. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one white dresser with its one vase and three books, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second dresser, anything on the dresser falling or moving.\n- **Clip K2 (shot 3, 4 s, start = khung cuối K1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no te\n\n[… rút gọn trong Store Hub; bản đầy đủ 11790 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A12-muse-brief-prompt.md]",
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png"
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt đây là phần prompt pack trong brief gửi Muse (1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/); chưa có bằng chứng Muse chạy đúng brief này. Nguồn gốc file chỉ suy từ thư mục gen-muse/final (Inference); LIST-ANGLE.csv lại ghi 'Muse: chưa gen/chưa nhận' (mâu thuẫn, cần Amin xác nhận). Brief đầy đủ: 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/ (BRIEF cùng mã). Không có video ref."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            }
          ]
        }
      },
      {
        "id": "PT1-A13",
        "title": "cây mèo chiếm sàn (nhìn từ trên xuống) được thay bằng không gian dọc; sàn trống rồi mới cho thấy tuyến leo trên tường",
        "status": "Đã qua cổng",
        "gate": "C",
        "format": "Problem → Solution (đồ hoạ nhìn từ trên xuống, rồi cảnh chính diện)",
        "hook": "Your floor, back.",
        "step": "Bước 10 và 11 xong (Amin duyệt 24/10); chưa chuyển Muse",
        "note": "Trạng thái nguồn: Đã xong. Review: Amin duyệt angle, hook, script, storyboard 24/10/2026. Prompt pack cổng A: lần 1 Đạt có ghi chú, lần 2 Đạt có ghi chú (round-3/REVIEW-claude-A12-A13-A15-prompt-pack-2026-10-24.md). Ảnh TD-1 và TD-2 đã gen 24/10 (2 credit): cổng C Qua cổng có ghi chú (round-3/REVIEW-claude-anchors-A12-A13-A15-SAU-2026-10-24.md). Ảnh neo SAU (dùng chung A9/A10/A11/A13/A14): bản 1 Không qua cổng (kệ thấp tụt, trụ dài +35%), bản 2 Qua cổng có ghi chú (2 credit tổng). Amin duyệt trần credit và cho gen 24/10/2026; đã gen đủ clip (13/18 credit trong trần), dựng final nháp; chưa chuyển Muse. Review video độc lập (24/10): Đạt có ghi chú (nối F1→F2 tường chuyển xám nhẹ, kệ thấp tụt ~20 px, mèo vươn lên nhà hộp chạm vùng 1/5 trên). Đã dựng lại v2 (khử nhiễu, tăng âm) (round-3/REVIEW-claude-video-A12-A13-A15-2026-10-24.md). Amin duyệt 24/10/2026 (\"A13, A15 ok rồi\"): bản v2 (cùng clip, dựng lại khử nhiễu, âm nhạc to hơn; v1 đã gửi trước đó nếu Amin muốn bản v1 thì báo). Bước 10 và 11 xong.. Version: v2 (dựng lại 24/10 sau review video; clip gen v1). Ngày: 24/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file A13-final-v2.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A13-final-v2.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 24/10/2026 qua Higgsfield MCP. Ảnh neo TD1, TD2 (nhìn từ trên xuống) và SAU v2 (dùng chung A9/A10/A11/A13/A14) gpt_image_2 1k medium 9:16 (1 credit/ảnh); clip F1 4 s + F2 5 s seedance_2_0 fast 480p (496×864) 9:16 câm; final v2 720×1280, 15 s. Credit: 11 riêng A13 (+2 ảnh SAU dùng chung; Fact).",
          "prompt": "### A13 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A13):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Vấn đề | Ảnh TD-1 (ảnh AI nhìn từ trên xuống, ref `V1-A2` chỉ cho màu/thảm/sofa/mèo); chuyển động chỉ là phóng nhẹ khi dựng |\n| S2 · 3–6 s · Giải pháp 1 | Ảnh TD-2 (ảnh AI, ref TD-1, bỏ cây mèo và mèo); cắt cứng từ S1 |\n| S3 · 6–10 s · Giải pháp 2 | Ảnh neo SAU (dùng chung, cũng của A9/A10/A11/A14) → clip F1 (4 s, riêng A13) |\n| S4 · 10–15 s · Giữ | Clip F2 (5 s, từ khung cuối F1) |\n\n**Prompt pack (A13)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh TD-1 (nhìn từ trên xuống, ref `V1-A2` chỉ cho màu/thảm/sofa/mèo):** Overhead top-down view, camera straight above, vertical 9:16 image of a small bright living room floor: light wood floor, a beige rug, the edge of a pale beige sofa at the left, a strip of plain white wall along the top edge, soft daylight. A plain multi-level beige carpeted cat tree (generic, unbranded, no text or logos) stands in the middle of the floor taking a large part of it, seen from above; the orange tabby from the reference sits on its top platform. The orange tabby is the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The top fifth of the frame is plain floor and wall with nothing important in it. Use the reference image only for the colours, the sofa, the rug and the look of the cat. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any shelf on the wall, any cat other than the one orange tabby, people, a second cat, furniture other than the sofa edge, the rug and the cat tree, a recognisable branded cat tree.\n- **Ảnh TD-2 (ref chỉ TD-1):** Use the reference image (TD-1) for the exact same room, same camera position straight above, same floor, same rug and same sofa edge. Remove the cat tree and the cat completely: the floor is clear and only the beige rug remains. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. The top fifth of the frame is plain floor and wall with nothing important in it. Avoid: any cat tree, any cat, any object on the floor, people, any change of the rug, floor or sofa.\n- **Ảnh neo SAU (dùng chung A9, A10, A11, A13, A14; ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The floor is clear: only the beige rug, nothing else on the floor and nothing on the sofa. The orange tabby, a little smaller than in the reference, sits at the very left end of the lowest grey-fleece shelf, in the open space to the left of the post, calm, looking out into the room; warm late-afternoon sunlight. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark.\n- **Clip F1 (shot 3, 4 s) = dùng lại clip SAU-1 (prompt giống hệt, cùng ảnh neo SAU). Nếu A9 chưa gen thì gen một lần SAU-1 và dùng chung; không gen riêng cho A13.:** Dùng lại clip SAU-1 của nhóm Before→After (crouches and leaps: bỏ \"stands\"). Prompt: vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The floor stays c\n\n[… rút gọn trong Store Hub; bản đầy đủ 10093 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A13-prompt-pack.md]",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-1/anchors-r3/TD1.png; refs/anchors/round-1/anchors-r3/TD2.png; refs/anchors/round-1/anchors-r3/SAU.png; refs/for-muse/round-4/V1-A2-cat-crop.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nStoryboard: refs/storyboard/round-3/A13.png"
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/A13-final-v2.mp4\nClip gốc/thành phần: videos/higgsfield/clips/round-1/clips-r3/A13-F1.mp4; videos/higgsfield/clips/round-1/clips-r3/A13-F2.mp4\nBản cũ/biến thể: videos/higgsfield/final/A13-final.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-3__REVIEW-claude-video-A12-A13-A15-2026-10-24.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-3__REVIEW-claude-anchors-A12-A13-A15-SAU-2026-10-24.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Chưa xác minh: chưa review độc lập bản có chữ/nhạc (nếu có); cảnh/mèo là AI, không phải bằng chứng sản phẩm thật. Đã đăng đúng file này (khớp byte với file KAN-80 trong tab Social; Fact)."
            }
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/TD1.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/TD2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/SAU.png"
          ]
        }
      },
      {
        "title": "cây mèo chiếm sàn (nhìn từ trên xuống) được thay bằng không gian dọc; sàn trống rồi mới cho thấy tuyến leo trên tường (bản Muse)",
        "gate": "C",
        "format": "Problem → Solution (đồ hoạ nhìn từ trên xuống, rồi cảnh chính diện)",
        "hook": "Your floor, back.",
        "id": "PT1-A13-M",
        "status": "Chưa qua cổng",
        "step": "Có file Muse; chưa review độc lập, chưa qua cổng C",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/muse/a13-final-15s.mp4",
        "note": "Nguồn: Muse; 15 s · 720×1280 · 9:16 (đo từ file, 09/11/2026); model/credit: Trống / chưa xác minh (gen-muse NOTES.md và CREDIT-LOG.csv trống). Chưa thấy đăng. File: a13-final-15s.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/muse/.",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit/số lần gen: Trống / chưa xác minh. 15 s · 720×1280 · 9:16, câm (ffprobe).",
          "prompt": "## 6. Prompt pack (dán nguyên văn; mỗi prompt đã ghép đủ khối cố định)\n- **Ảnh TD-1 (nhìn từ trên xuống, ref `V1-A2` chỉ cho màu/thảm/sofa/mèo):** Overhead top-down view, camera straight above, vertical 9:16 image of a small bright living room floor: light wood floor, a beige rug, the edge of a pale beige sofa at the left, a strip of plain white wall along the top edge, soft daylight. A plain multi-level beige carpeted cat tree (generic, unbranded, no text or logos) stands in the middle of the floor taking a large part of it, seen from above; the orange tabby from the reference sits on its top platform. The orange tabby is the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The top fifth of the frame is plain floor and wall with nothing important in it. Use the reference image only for the colours, the sofa, the rug and the look of the cat. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any shelf on the wall, any cat other than the one orange tabby, people, a second cat, furniture other than the sofa edge, the rug and the cat tree, a recognisable branded cat tree.\n- **Ảnh TD-2 (ref chỉ TD-1):** Use the reference image (TD-1) for the exact same room, same camera position straight above, same floor, same rug and same sofa edge. Remove the cat tree and the cat completely: the floor is clear and only the beige rug remains. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. The top fifth of the frame is plain floor and wall with nothing important in it. Avoid: any cat tree, any cat, any object on the floor, people, any change of the rug, floor or sofa.\n- **Ảnh neo SAU (dùng chung A9, A10, A11, A13, A14; ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The floor is clear: only the beige rug, nothing else on the floor and nothing on the sofa. The orange tabby, a little smaller than in the reference, sits at the very left end of the lowest grey-fleece shelf, in the open space to the left of the post, calm, looking out into the room; warm late-afternoon sunlight. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark.\n- **Clip F1 (shot 3, 4 s) = dùng lại clip SAU-1 (prompt giống hệt, cùng ảnh neo SAU). Nếu A9 chưa gen thì gen một lần SAU-1 và dùng chung; không gen riêng cho A13.:** Dùng lại clip SAU-1 của nhóm Before→After (crouches and leaps: bỏ \"stands\"). Prompt: vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The floor stays clear. The orange tabby sits at the left end of the lowest shelf for the first 1 second, then crouches and leaps in one smooth continuous motion up onto the flat top of the UPPER grey-fleece shelf and lands standing there, above the post. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the c\n\n[… rút gọn trong Store Hub; bản đầy đủ 8895 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A13-muse-brief-prompt.md]",
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png"
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt đây là phần prompt pack trong brief gửi Muse (1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/); chưa có bằng chứng Muse chạy đúng brief này. Nguồn gốc file chỉ suy từ thư mục gen-muse/final (Inference); LIST-ANGLE.csv lại ghi 'Muse: chưa gen/chưa nhận' (mâu thuẫn, cần Amin xác nhận). Brief đầy đủ: 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/ (BRIEF cùng mã). Không có video ref."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            }
          ]
        }
      },
      {
        "id": "PT1-A14",
        "title": "mèo buồn chán trong căn hộ có nhiều điểm dừng trên tường (nội bộ: không dùng chữ \"buồn chán\" trong copy)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Problem → Solution",
        "hook": "Where to next?",
        "step": "Bước 3–4: chờ Amin duyệt storyboard; bước 5 chờ agent review prompt pack (Chuẩn bị, chưa ưu tiên)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chuẩn bị v1.4 xong bước 0–5 (nháp): chờ Amin duyệt; chưa review prompt pack, chưa review video. Chuẩn bị, chưa ưu tiên.. Version: v0 (chưa gen). Ngày: 24/10/2026. · KAN-91: chưa có media; có storyboard + prompt pack nháp.",
        "kit": {
          "tool": "Chưa gen (Trống)",
          "config": "Chưa chọn công cụ/model; chưa duyệt trần credit (Trống)",
          "prompt": "### A14 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A14):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Trước | Ảnh neo TRƯỚC-A14 (ref `V1-A2`: bỏ bộ kệ, mèo nằm trên thảm) → clip TRƯỚC-A14 |\n| S2 · 3–7 s · Sau | Ảnh neo SAU (dùng chung) → clip SAU-1 |\n| S3 · 7–11 s | Clip SAU-2 (từ khung cuối SAU-1) |\n| S4 · 11–15 s · Giữ | Clip SAU-3 (từ khung cuối SAU-2) |\n\n**Prompt pack (A14)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh neo TRƯỚC-A14 (ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room and the camera framing: same plain white wall, same light wood floor, same pale beige sofa edge at the far left, same beige rug. Remove the cat and remove EVERY shelf, step, house and tunnel from the wall: the wall is completely bare and plain. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos.. The orange tabby lies stretched out on the beige rug, calm, eyes open, looking toward the bare wall; nothing else on the floor. Soft daylight. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, any shelf on the wall, toys, a second cat.\n- **Clip TRƯỚC-A14 (shot 1, 4 s, start = ảnh neo TRƯỚC-A14; cắt còn 3 s):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The wall is bare and plain. The orange tabby lies on the rug and slowly blinks once, then lifts its head slightly. Nothing else moves. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, any shelf on the wall.\n- **Ảnh neo SAU (dùng chung A9, A10, A11, A13, A14; ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doo\n\n[… rút gọn trong Store Hub; bản đầy đủ 14379 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A14-prompt-pack.md]",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa gen clip. Ảnh neo SAU dùng chung. Không có video/ảnh gen cho mục này (đã tìm: product-test-1/3-creative/round-*/gen-claude, gen-muse, gen-genjutsu, LIST-ANGLE.csv, CREATIVE.xlsx)."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Storyboard: refs/storyboard/round-3/A14.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nBrief gửi Muse (chưa có bằng chứng đã gửi/gen): 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/round-3__BRIEF-A14.md"
            }
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/SAU.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/storyboard/round-3/A14.png"
          ],
          "character": []
        }
      },
      {
        "id": "PT1-A15",
        "title": "kệ mèo hòa vào nội thất phòng khách; cảnh mở đầu chưa thấy mèo, sau đó mèo lộ diện ở cửa nhà hộp",
        "status": "Đã qua cổng",
        "gate": "C",
        "format": "POV thẩm mỹ (kiểu \"tìm mèo\": cảnh trống rồi mèo lộ diện)",
        "hook": "Spot the cat furniture.",
        "step": "Bước 10 và 11 xong (Amin duyệt 24/10); chưa chuyển Muse",
        "note": "Trạng thái nguồn: Đã xong. Review: Amin duyệt angle, hook, script, storyboard 24/10/2026. Prompt pack cổng A: lần 1 Không đạt (đã sửa), lần 2 Đạt có ghi chú (round-3/REVIEW-claude-A12-A13-A15-prompt-pack-2026-10-24.md). Ảnh neo A15-1 (không mèo) đã gen 24/10 (1 credit): cổng C Qua cổng, cửa nhà hộp có lưng gỗ đặc (round-3/REVIEW-claude-anchors-A12-A13-A15-SAU-2026-10-24.md). Công cụ nhận ảnh đầu + ảnh tham chiếu thứ hai (đã dùng cho R2/R3). Amin duyệt trần credit và cho gen 24/10/2026; đã gen đủ clip (16/30 credit trong trần), dựng final nháp; chưa chuyển Muse. Review video độc lập (24/10): Đạt có ghi chú (ánh nắng đổi mạnh giữa R1–R3, nhìn như nắng bật tắt; mèo ló đầu đúng ý, không xuyên tường). Đã dựng lại v2 (0 credit); sửa hẳn cần gen lại R3 ~5 credit, Amin duyệt (round-3/REVIEW-claude-video-A12-A13-A15-2026-10-24.md). Amin duyệt 24/10/2026 (\"A13, A15 ok rồi\"): bản v2 (cùng clip, dựng lại khử nhiễu, âm nhạc to hơn; v1 đã gửi trước đó nếu Amin muốn bản v1 thì báo). Bước 10 và 11 xong.. Version: v2 (dựng lại 24/10 sau review video; clip gen v1). Ngày: 24/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file A15-final-v2.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A15-final-v2.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 24/10/2026 qua Higgsfield MCP. Ảnh neo A15-1 (không mèo) gpt_image_2 1k medium 9:16 (1 credit/ảnh); clip R1/R2/R3 5 s seedance_2_0 fast 480p (496×864) 9:16 câm, R2–R3 thêm ảnh tham chiếu mèo cat-crop; final v2 720×1280, 15 s. Credit: 16 (trần 30; Fact).",
          "prompt": "### A15 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A15):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–5 s · Hook | Ảnh neo A15-1 (ref `V1-A2`: bỏ mèo sàn, không mèo, thêm tiền cảnh) → clip R1 (5 s, chỉ nắng dịch) |\n| S2 · 5–10 s | Clip R2 (5 s, từ khung cuối R1; ref phụ `V1-A2-cat-crop` cho nhận diện mèo) |\n| S3 · 10–15 s · Giữ | Clip R3 (5 s, từ khung cuối R2) |\n\n**Prompt pack (A15)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh neo A15-1 (ref chỉ `V1-A2`; KHÔNG có mèo):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat completely: there is NO cat anywhere in the frame. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The existing pale beige sofa edge at the far left now has a plain folded throw blanket on its armrest; in the foreground at the bottom-right a low plain wooden coffee table with one plain white mug (no printing); both stay low in the frame, well below the shelves, and do not hide any piece of the set. The round cat-head-shaped doorway of the cat house shows the plain cushion inside and a solid wooden back (not the white wall). Warm late-afternoon sunlight. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one folded throw on the existing sofa armrest, the one low coffee table with its one plain mug, wires or pulleys, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second sofa, a second table, printing on the mug, any cat or animal in the frame, a framed print, a potted plant, objects hiding the set.\n- **Clip R1 (shot 1, 5 s, start = A15-1, câm):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The existing pale beige sofa edge at the far left now has a plain folded throw blanket on its armrest; in the foreground at the bottom-right a low plain wooden coffee table with one plain white mug (no printing); both stay low in the frame, well below the shelves, and do not hide any piece of the set. The foreground items and all pieces of the set stay completely still. There is no cat and no animal anywhere in the frame for the whole clip; nothing but the warm light drifts slowly across the wall. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one folded throw on the existing sofa armrest, the one low coffee table with its one plain mug, wires or pulleys, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second sofa, a second table, printing on the mug, any cat or animal appearing, anything moving except the light.\n- **Clip R2 (shot 2, 5 s, start = khung cuối R1; ảnh tham chiếu thứ hai = `V1-A2-cat-crop`):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf di\n\n[… rút gọn trong Store Hub; bản đầy đủ 11907 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A15-prompt-pack.md]",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-1/anchors-r3/A15-1.png; refs/for-muse/round-4/V1-A2-cat-crop.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nStoryboard: refs/storyboard/round-3/A15.png"
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/A15-final-v2.mp4\nClip gốc/thành phần: videos/higgsfield/clips/round-1/clips-r3/A15-R1.mp4; videos/higgsfield/clips/round-1/clips-r3/A15-R2.mp4; videos/higgsfield/clips/round-1/clips-r3/A15-R3.mp4\nBản cũ/biến thể: videos/higgsfield/final/A15-final.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-3__REVIEW-claude-video-A12-A13-A15-2026-10-24.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-3__REVIEW-claude-anchors-A12-A13-A15-SAU-2026-10-24.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Chưa xác minh: chưa review độc lập bản có chữ/nhạc (nếu có); cảnh/mèo là AI, không phải bằng chứng sản phẩm thật. Đã đăng đúng file này (khớp byte với file KAN-80 trong tab Social; Fact)."
            }
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors-r3/A15-1.png"
          ]
        }
      },
      {
        "title": "kệ mèo hòa vào nội thất phòng khách; cảnh mở đầu chưa thấy mèo, sau đó mèo lộ diện ở cửa nhà hộp (bản Muse)",
        "gate": "C",
        "format": "POV thẩm mỹ (kiểu \"tìm mèo\": cảnh trống rồi mèo lộ diện)",
        "hook": "Spot the cat furniture.",
        "id": "PT1-A15-M",
        "status": "Chưa qua cổng",
        "step": "Có file Muse; chưa review độc lập, chưa qua cổng C",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/muse/a15-final-15s.mp4",
        "note": "Nguồn: Muse; 15 s · 720×1280 · 9:16 (đo từ file, 09/11/2026); model/credit: Trống / chưa xác minh (gen-muse NOTES.md và CREDIT-LOG.csv trống). Chưa thấy đăng. File: a15-final-15s.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/muse/.",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit/số lần gen: Trống / chưa xác minh. 15 s · 720×1280 · 9:16, câm (ffprobe).",
          "prompt": "## 6. Prompt pack (dán nguyên văn; mỗi prompt đã ghép đủ khối cố định)\n- **Ảnh neo A15-1 (ref chỉ `V1-A2`; KHÔNG có mèo):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat completely: there is NO cat anywhere in the frame. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The existing pale beige sofa edge at the far left now has a plain folded throw blanket on its armrest; in the foreground at the bottom-right a low plain wooden coffee table with one plain white mug (no printing); both stay low in the frame, well below the shelves, and do not hide any piece of the set. The round cat-head-shaped doorway of the cat house shows the plain cushion inside and a solid wooden back (not the white wall). Warm late-afternoon sunlight. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one folded throw on the existing sofa armrest, the one low coffee table with its one plain mug, wires or pulleys, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second sofa, a second table, printing on the mug, any cat or animal in the frame, a framed print, a potted plant, objects hiding the set.\n- **Clip R1 (shot 1, 5 s, start = A15-1, câm):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The existing pale beige sofa edge at the far left now has a plain folded throw blanket on its armrest; in the foreground at the bottom-right a low plain wooden coffee table with one plain white mug (no printing); both stay low in the frame, well below the shelves, and do not hide any piece of the set. The foreground items and all pieces of the set stay completely still. There is no cat and no animal anywhere in the frame for the whole clip; nothing but the warm light drifts slowly across the wall. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described and the one folded throw on the existing sofa armrest, the one low coffee table with its one plain mug, wires or pulleys, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second sofa, a second table, printing on the mug, any cat or animal appearing, anything moving except the light.\n- **Clip R2 (shot 2, 5 s, start = khung cuối R1; ảnh tham chiếu thứ hai = `V1-A2-cat-crop`):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The existing pale beige sofa edge at the far left now has a plain folded throw blanket on its armrest; in the foreground at the bottom-right a low plain wooden coffee table with one plain white mug (no printing); both stay low in the frame, well below the shelves, and do not hide any piece of the set. The foreground items stay still. The cat is the orange tabby\n\n[… rút gọn trong Store Hub; bản đầy đủ 10760 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A15-muse-brief-prompt.md]",
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png"
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt đây là phần prompt pack trong brief gửi Muse (1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/); chưa có bằng chứng Muse chạy đúng brief này. Nguồn gốc file chỉ suy từ thư mục gen-muse/final (Inference); LIST-ANGLE.csv lại ghi 'Muse: chưa gen/chưa nhận' (mâu thuẫn, cần Amin xác nhận). Brief đầy đủ: 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/ (BRIEF cùng mã). Không có video ref."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp."
            }
          ]
        }
      },
      {
        "id": "PT1-A16",
        "title": "một mảng tường đẹp cho cả mèo và chủ",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "POV thẩm mỹ",
        "hook": "One wall for both of you.",
        "step": "Bước 3–4: chờ Amin duyệt storyboard; bước 5 chờ agent review prompt pack (Chuẩn bị, chưa ưu tiên)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chuẩn bị v1.4 xong bước 0–5 (nháp): chờ Amin duyệt; chưa review prompt pack, chưa review video. Chuẩn bị, chưa ưu tiên.. Version: v0 (chưa gen). Ngày: 24/10/2026. · KAN-91: chưa có media; có storyboard + prompt pack nháp.",
        "kit": {
          "tool": "Chưa gen (Trống)",
          "config": "Chưa chọn công cụ/model; chưa duyệt trần credit (Trống)",
          "prompt": "### A16 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A16):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Hook | Ảnh neo A16-1 (ref `V1-A2`: bỏ mèo sàn, mèo trên kệ thấp, thêm tranh + kệ treo nhỏ + sách + chậu cây bên trái) |\n| S2 · 3–7 s | Clip K1 (7 s, từ ảnh A16-1) |\n| S3 · 7–11 s | Clip K2 (từ khung cuối K1) |\n| S4 · 11–15 s · Giữ | Clip K3 (từ khung cuối K2) |\n\n**Prompt pack (A16)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh neo A16-1 (ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the pale beige sofa edge at the far left and the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. On the left part of the wall, well apart from the cat shelves: one framed abstract print with no text, and below it one small plain white wall ledge holding two plain books with blank spines and one small green plant in a plain pot. The print stays below the empty top fifth of the frame and does not touch the tunnel. The orange tabby, a little smaller than in the reference, sits at the very left end of the lowest shelf, calm, looking out into the room; warm late-afternoon sunlight. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second plant, any text on the print or book spines, the ledge turned into a cat shelf.\n- **Clip K1 (shot 1–2, 7 s, start = A16-1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. On the left part of the wall, well apart from the cat shelves: one framed abstract print with no text, and below it one small plain white wall ledge holding two plain books with blank spines and one small green plant in a plain pot. The print, ledge, books and plant stay completely still. The orange tabby sits at the left end of the lowest shelf for the first 3 seconds, then stands up, crouches and leaps in one smooth continuous motion up onto the flat top of the UPPER grey-fleece shelf and lands standing there. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second plant, any text on the print or book spines.\n- **Clip K2 (shot 3, 4 s, start = khung cuối K1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the\n\n[… rút gọn trong Store Hub; bản đầy đủ 10683 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A16-prompt-pack.md]",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa gen (chưa có ảnh neo/clip). Không có video/ảnh gen cho mục này (đã tìm: product-test-1/3-creative/round-*/gen-claude, gen-muse, gen-genjutsu, LIST-ANGLE.csv, CREATIVE.xlsx)."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Storyboard: refs/storyboard/round-3/A16.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nBrief gửi Muse (chưa có bằng chứng đã gửi/gen): 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/round-3__BRIEF-A16.md"
            }
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/storyboard/round-3/A16.png"
          ],
          "character": []
        }
      },
      {
        "id": "PT1-A17",
        "title": "căn hộ nhỏ vẫn có góc chơi cao cấp cho mèo (nội bộ: không dùng chữ \"cao cấp\" trong copy)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "POV thẩm mỹ",
        "hook": "Small space. Big climb.",
        "step": "Bước 3–4: chờ Amin duyệt storyboard; bước 5 chờ agent review prompt pack (Chuẩn bị, chưa ưu tiên)",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chuẩn bị v1.4 xong bước 0–5 (nháp): chờ Amin duyệt; chưa review prompt pack, chưa review video. Chuẩn bị, chưa ưu tiên.. Version: v0 (chưa gen). Ngày: 24/10/2026. · KAN-91: chưa có media; có storyboard + prompt pack nháp.",
        "kit": {
          "tool": "Chưa gen (Trống)",
          "config": "Chưa chọn công cụ/model; chưa duyệt trần credit (Trống)",
          "prompt": "### A17 · Bước 5. Asset plan và prompt pack\n\n**Asset plan (A17):**\n| Asset | Nguồn |\n|---|---|\n| S1 · 0–3 s · Hook | Ảnh neo A17-1 (ref `V1-A2`: đổi sofa thành giường đơn, thêm bàn tròn + hai ghế, mèo trên kệ thấp) |\n| S2 · 3–7 s | Clip K1 (7 s, từ ảnh A17-1) |\n| S3 · 7–11 s | Clip K2 (từ khung cuối K1) |\n| S4 · 11–15 s · Giữ | Clip K3 (từ khung cuối K2) |\n\n**Prompt pack (A17)**: mỗi prompt đã ghép đủ khối cố định (bối cảnh, nhân vật, bộ kệ nguyên văn từ `REFERENCE.md`, dòng tránh); clip nối bằng khung cuối của clip trước. Đã thêm các phòng ngừa từ lỗi lượt gen 24/10: **cấm phụ đề/chữ mọi ngôn ngữ** (K2 của A3 từng tự sinh phụ đề chữ Trung), **mèo ở trong khung, không zoom/đổi khung** (K3 của A2 từng bị zoom và cắt mèo sát mép phải). **Chưa review prompt pack bằng agent độc lập (cổng A).**\n- **Ảnh neo A17-1 (ref chỉ `V1-A2`):** Use the reference image (V1-A2) only for the exact room, the camera framing and the wall shelf set; keep every piece of the set in exactly the same position, same size, same wood, and keep the beige rug. Remove the cat that stands on the floor in the reference. Do not move, resize, lower, narrow or redraw any piece of the set: the lowest grey-fleece shelf keeps the same width and height as in the reference, and the sisal post keeps the same short length (about the height of the cat's body) between the lower shelf and the upper shelf. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The room is a compact studio apartment: at the far left a small neatly made single bed with plain white linen (instead of the sofa), at the right a small round table with two simple chairs on the beige rug; all low, plain, with no text, and none of them touch or hide the wall set. The orange tabby, a little smaller than in the reference, sits at the very left end of the lowest shelf, calm, looking out into the room; warm late-afternoon sunlight. no subtitles, no captions, no watermark, no text of any language anywhere in the frame. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a sofa, a second table, a lamp or any extra decor, objects hiding the set.\n- **Clip K1 (shot 1–2, 7 s, start = A17-1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The room is a compact studio apartment: at the far left a small neatly made single bed with plain white linen (instead of the sofa), at the right a small round table with two simple chairs on the beige rug; all low, plain, with no text, and none of them touch or hide the wall set. The bed, table and chairs stay completely still. The orange tabby sits at the left end of the lowest shelf for the first 3 seconds, then stands up, crouches and leaps in one smooth continuous motion up onto the flat top of the UPPER grey-fleece shelf and lands standing there. The cat keeps the same size throughout and stays fully inside the frame, away from the edges. It never passes through the shelves, the post or the house. No glow or halo around the cat's face. The back and sides of the cat house are solid wood, nothing see-through. All pieces of the set stay completely still. Fixed camera, no zoom, no reframing. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a sofa, furniture moving.\n- **Clip K2 (shot 3, 4 s, start = khung cuối K1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, soft daylight, one fixed camera position at eye level facing the wall, no camera movement, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. the same orange tabby short-haired cat as in the reference, medium size, round eyes, no collar; no other cat. The wall set: a set of light natural-wood cat wall shelves mounted on\n\n[… rút gọn trong Store Hub; bản đầy đủ 10491 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A17-prompt-pack.md]",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa gen (chưa có ảnh neo/clip). Không có video/ảnh gen cho mục này (đã tìm: product-test-1/3-creative/round-*/gen-claude, gen-muse, gen-genjutsu, LIST-ANGLE.csv, CREATIVE.xlsx)."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Storyboard: refs/storyboard/round-3/A17.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nBrief gửi Muse (chưa có bằng chứng đã gửi/gen): 1-dropship/workspace/whiskerwall/3-creative/prompts/for-muse/round-3__BRIEF-A17.md"
            }
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/storyboard/round-3/A17.png"
          ],
          "character": []
        }
      },
      {
        "id": "PT1-A18",
        "title": "Cả bộ kệ rao như một căn hộ thẳng đứng; mèo đi xem nhà, mỗi vật thể một tên \"phòng\"; không Trước/Sau, không giành chỗ cao",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Cinematic deadpan (tin rao bán nhà, parody)",
        "hook": "NEW LISTING · 0 m² of floor",
        "step": "Bước 1–5 chuẩn bị xong (nháp); chờ Amin duyệt bước 3–4, review prompt, trần credit",
        "note": "Trạng thái nguồn: Đang làm. Review: Chưa review. Version: chưa có. Ngày: 24/10/2026.",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP) (mới gen ảnh neo)",
          "config": "Ảnh neo A18-2, A18-3, A18-3b: gpt_image_2 1k medium 9:16 (1 credit/ảnh), 3 credit (Fact, CREDIT-LOG). Trần duyệt 60 (kế hoạch Seedance 2.5 draft 480p 15 s = 45 credit). Clip chưa gen: không có file A18 clip (Fact: không có dòng gen clip trong CREDIT-LOG và không có mp4).",
          "prompt": "## A18 · Bước 5. Asset plan và prompt pack (chưa review)\n| Asset | Nguồn |\n|---|---|\n| Ảnh neo A18-1 | ref `V1-A2` (giữ mèo ngồi trên thảm, bố cục phòng và bộ kệ) |\n| R1 (S1, 5 s) | từ A18-1: chỉ nắng dịch, mèo ngồi yên, tai xoay một lần |\n| R2 (S2, 5 s) | từ khung cuối R1; ref phụ `V1-A2-cat-crop` |\n| R3 (S3, 5 s) | từ khung cuối R2; ref phụ `V1-A2-cat-crop` |\nChữ thêm bằng HyperFrames ở bước 9 (không để AI vẽ chữ).\n\n**Khối sản phẩm (nguyên văn REFERENCE §5):** a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos.\n**Khối phòng:** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, a beige rug, soft warm late-afternoon daylight, one fixed camera position at eye level facing the wall, no camera movement, no zoom, no reframing, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame.\n**Khối mèo:** The cat is the orange tabby shown in the reference image (V1-A2 / V1-A2-cat-crop): same short-haired medium-size cat, round eyes, no collar; no other cat; it keeps the same size throughout and stays fully inside the frame, away from the edges; it never passes through the shelves, the post or the house.\n**Dòng tránh:** Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the cat falling, slipping or the shelves shaking or moving, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second sofa, the house becoming transparent, the cat leaving the frame.\n\n- **Ảnh neo A18-1:** Use the reference image (V1-A2) for the exact room, the camera framing, the wall shelf set and the orange tabby cat; keep every piece of the set in the same position, size and wood. The cat sits on the beige rug at the foot of the wall, seen from the side, looking up at the shelves; nothing else on the floor. vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, a beige rug, soft warm late-afternoon daylight, one fixed camera position at eye level facing the wall, no camera movement, no zoom, no reframing, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The cat is the orange tabby shown in the reference image (V1-A2 / V1-A2-cat-crop): same short-haired medium-size cat, round eyes, no collar; no other cat; it keeps the same size throughout and stays fully inside the frame, away from the edges; it never passes through the shelves, the post or the house. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing through shelves, the post or the house walls, the post floating or detached, the cat changing size, the cat falling, slipping or the shelves shaking or moving, the set pieces moving or changing, blurry or morphing wood, subtitles, captions, Chinese or any other characters, watermark, a second sofa, the house becoming transparent, the cat leaving the frame.\n- **R1 (start = A18-1):** vertical 9:16 video, a small bright living room, plain white wall, light wood floor, a pale beige sofa edge at the far left, a beige rug, soft warm late-afternoon daylight, one fixed camera position at eye level facing the wall, no camera movement, no zoom, no reframing, the top fifth of the frame left empty and completely clear: no subtitles, no captions, no watermark, no text of any language anywhere in the frame. The wall set: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The orange tabby sits on the rug looking up at the shelves; the warm light drifts slowly across the wall; the cat turns one ear once and stays seated; all pieces of the set stay completely still. The cat is the orange tabby shown in the reference image (V1-A2 / V1-A2-cat-crop): same short-haired medium-size cat, round eyes, no collar; no other cat; it keeps the same size throughout and stays fully inside the frame, away from the edges; it never passes through the shelves, the post or the house. Avoid: any text, logos or readable titles, people, hammock, bridge, extra shelves or extra pieces beyond the set described, wires or pulleys, any cat other than the one orange tabby, the cat passing thr\n\n[… rút gọn trong Store Hub; bản đầy đủ 24949 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A18-prompt-pack.md]",
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Chưa có video A18. LIST-ANGLE.csv ghi 'Chưa gen'. Cần Amin quyết có gen clip 45 credit hay không."
            },
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nẢnh neo: refs/anchors/round-4/anchors/A18-1.png, A18-2.png, A18-3.png, A18-3b.png; storyboard refs/storyboard/round-4/A18.png\nReview: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A18-anchors-2026-10-24.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A18-prompt-pack-2026-10-24.md"
            }
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A18-1.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A18-2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A18-3.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A18-3b.png"
          ]
        }
      },
      {
        "id": "PT1-A19",
        "title": "Phòng xoay 90°: tường thành mặt sàn, mèo dạo qua các kệ như đá lát, rồi xoay về; không Trước/Sau, không giành chỗ cao",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Cinematic mind-bend (camera roll)",
        "hook": "The floor is a suggestion.",
        "step": "Bước 1–5 nháp; chờ Amin duyệt trần, review prompt",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chưa review. Version: chưa có. Ngày: 25/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file A19-draft.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A19-draft.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 25/10/2026 qua Higgsfield MCP: seedance_2_5 omni_reference draft 480p (480×854) 15 s 9:16, generate_audio false (file không có audio). Ảnh neo A19-mid = A18-2 xoay 90° bằng PIL (0 credit). Credit: 45 (Fact, CREDIT-LOG; job 636cfcae).",
          "prompt": "## A19 · GRAVITY OFF (nháp 24/10/2026, theo yêu cầu Amin \"thử cả hai hướng 1 và 2\")\n- **Creative ID:** PT1-A19 · **Format:** Cinematic mind-bend (camera roll) · **Hook:** \"The floor is a suggestion.\" · **Chữ:** GRAVITY OFF → The floor is a suggestion. → Gravity: off. → Back to normal.\n- **Angle:** căn phòng xoay 90°: bức tường thành mặt sàn, mèo dạo bước qua các kệ như đá lát, rồi phòng xoay lại và mèo đã ở trong nhà hộp. Không Trước/Sau, không giá, không claim.\n- **Khác A1–A18:** là trò thị giác (camera roll), không kể chuyện leo hay giành chỗ; không có giọng \"môi giới/leo núi\".\n- **Camera và ánh sáng:** một chuyển động duy nhất: camera nghiêng (roll) chậm 0→90° ở 3–7 s, giữ 90° ở 7–10 s, nghiêng về 0° ở 10–13 s; giờ vàng, tia nắng xiên, bụi. Rủi ro **cao**: AI dễ làm bộ kệ biến dạng khi xoay; kệ ở 90° trông như đặt ngang (cố ý, vì là trò đùa trọng lực), nhưng vẫn phải đúng 6 vật thể và đúng hình.\n- **Hành động:** 0–3 s mèo đứng nhìn lên; 3–6 s mèo nhảy lên kệ thấp rồi kệ cao khi camera bắt đầu nghiêng; 6–11 s mèo đi bộ ngang qua bộ kệ trong khung đã xoay; 11–15 s khung xoay về, mèo ló đầu ở cửa nhà hộp.\n- **Âm thanh:** nhạc nền gợi phim khoa học viễn tưởng (công cụ tạo, không dùng bản có sẵn), tiếng chân chạm gỗ, giọng AI thì thầm khô: \"The floor is a suggestion.\" / \"Gravity: off.\" / \"Back to normal.\" (giọng đọc cố định, theo workflow `narration`).\n- **Ảnh storyboard:** `storyboard/A19.png`. **Ảnh neo cần gen:** `A19-mid` (mèo trên kệ cao, cảnh đã xoay 90°, 1 credit). Khung đầu dùng lại `A18-1`; khung cuối dùng lại `A18-3b`.\n- **Prompt clip (Seedance 2.5, 15 s, start_image A18-1, end_image A18-3b, image_references cat-crop, `draft`, `generate_audio` true hoặc false tuỳ quyết định giọng):** vertical 9:16, a small bright living room, plain white wall, light wood floor, a pale beige armchair edge at the far left, a beige rug, warm golden-hour light with soft diagonal sunbeams and dust motes. a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. 0-3 s: locked camera, the orange tabby stands on the floor looking up at the shelves. 3-7 s: the cat jumps onto the lower shelf then the upper shelf while the camera slowly rolls clockwise, rotating the whole room 90 degrees. 7-10 s: the room is rotated 90 degrees; the wall now reads as the floor; the cat calmly walks across the shelves as if on stepping stones; the shelves keep their exact shape and count. 10-13 s: the camera rolls slowly back to upright while the cat climbs the steps. 13-15 s: upright locked camera, only the cat's head in the round doorway of the cat house, slow blink, all six pieces visible. The cat is the orange tabby shown in the reference image: same short-haired medium-size cat, round eyes, no collar; no other cat; same size throughout; it never passes through shelves, post or house. Avoid: any text, logos, people, hammock, bridge, extra shelves or extra pieces beyond the set, wires, any second cat, the cat passing through shelves, the post or the house walls, the cat changing size or shape, the cat falling or slipping, the shelves shaking, bending or changing shape or count, blurry or morphing wood, subtitles, captions, Chinese or other characters, watermark, the house becoming transparent, the post floating or detached, a second armchair, glow or halo around the cat.\n- **Checklist claim:** không sức khoẻ/hành vi/\"mèo thích\"; không tải trọng hay độ chắc (mèo đi ngang kệ trong cảnh xoay là trò thị giác, không nói gì về chịu lực); không \"không khoan\"/cách lắp; không giá/CTA; không đối thủ; không nhạc/giọng bên thứ ba; minh hoạ AI, không mèo thật.\n- **Rủi ro chính:** (1) camera roll làm biến dạng bộ kệ, đổi số món; (2) cảnh 90° bị đọc là \"kệ gắn ngang\", gây hiểu sai hình dạng sản phẩm, nên phải cắt về đúng hình dạng ở S1 và S4 và ghi chú \"minh hoạ AI\"; (3) lỗi giữa clip không cắt được, làm lại cả clip.\n\n### A19 · sửa (B1–B3)\n- **B1:** mèo đứng/ngồi trên kệ xoay cùng phòng khi camera roll, nên trong khung 90° mèo **nằm ngang theo kệ**, không \"đi bộ qua các kệ\". Bỏ \"dạo bước như đá lát\"; ở 6–10 s mèo ngồi yên trên kệ cao, cả phòng xoay quanh nó.\n- **B2:** mỗi đoạn một việc: 0–3 s mèo đứng; 3–6 s một cú nhảy từ sàn lên đầu trái kệ thấp (camera roll chưa bắt đầu); 6–9 s camera roll 0→90° (mèo ngồi yên đầu trái kệ cao, trái trụ); 9–10 s giữ 90° (≤ 2 s, sàn hiện rõ thành dải dọc bên phải, chữ \"Gravity: off.\" cùng khung); 10–13 s roll ngược về 0°; 13–15 s đầu mèo ở cửa nhà hộp (end_image A18-3b).\n- **Prompt clip A19 (Seedance 2.5, 15 s, start_image A18-1, end_image A18-3b, image_references cat-crop, `draft`, `generate_audio: false`):** vertical 9:16, a small bright living room, plain white wall, light wood floor, a pale beige armchair edge at the far left, a beige rug, warm golden-hour light with soft diagonal sunbeams. a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. 0-3 s: locked camera, the orange tabby stands on the floor looking up at the shelves. 3-6 s: it makes one small jump onto the left end of the lower dark-grey fleece shelf, then one more onto the left end of the upper shelf, in front of the left side of the sisal post, and sits. 6-9 s: the camera slowly rolls 90 degrees clockwise; the whole room rotates with the cat sitting still on the shelf, so the wall becomes the floor; all six pieces keep their exact shape and count. 9-10 s: hold, the rotated room, floor v\n\n[… rút gọn trong Store Hub; bản đầy đủ 7549 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A19-prompt-pack.md]",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-4/anchors/A18-3b.png; refs/anchors/round-4/anchors/A19-mid.png; refs/for-muse/round-4/V1-A2-cat-crop.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nStoryboard: refs/storyboard/round-4/A19.png"
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/A19-draft.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A19-A20-clips-2026-10-25.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A19-A20-anchors-2026-10-25.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A19-A20-prompt-pack-2026-10-25.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Chưa xác minh: ảnh khung đầu thật sự dùng. Form ghi start_image A18-1; sổ CREDIT-LOG ghi start V1-A2, end A18-3b (API hiển thị cả 3 ảnh là reference_images). Đây là bản nháp 480p, chưa chữ/giọng/nhạc."
            }
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A18-3b.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A19-mid.png"
          ]
        }
      },
      {
        "id": "PT1-A20",
        "title": "Mèo lẻn qua từng tầng như trộm trong đêm; kết đèn bật, mèo đã ở nhà hộp, \"Nothing happened.\"",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Cinematic heist (đêm, twist)",
        "hook": "Tonight. Three levels.",
        "step": "Bước 1–5 nháp; chờ Amin duyệt trần, review prompt",
        "note": "Trạng thái nguồn: Chưa làm. Review: Chưa review. Version: chưa có. Ngày: 25/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file A20-draft.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A20-draft.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 25/10/2026 qua Higgsfield MCP: seedance_2_5 omni_reference draft 480p (480×854) 15 s 9:16, generate_audio false. Ảnh neo A20-1, A20-3 gpt_image_2 1k medium 9:16 (1 credit/ảnh). Credit: 47 (45 clip + 2 ảnh; Fact; job 19210616).",
          "prompt": "## A20 · NIGHT HEIST (nháp 24/10/2026, theo yêu cầu Amin \"thử cả hai hướng 1 và 2\")\n- **Creative ID:** PT1-A20 · **Format:** Cinematic heist (đêm, hồi hộp, twist) · **Hook:** \"Tonight. Three levels.\" · **Chữ:** THE HEIST → Level one. Level two. → The vault. → Nothing happened.\n- **Angle:** phòng khách ban đêm, tia trăng quét ngang tường; mèo lẻn qua từng tầng như tên trộm vào \"két sắt\" (nhà hộp); kết: đèn bật ấm, mèo đã ngồi trong nhà hộp, nhìn thẳng ống kính, \"Nothing happened.\"\n- **Khác A1–A18:** là phim hồi hộp có twist, tối–sáng, không giành chỗ cao với ai khác (không trùng \"Highest Spot Heist\" ở chỗ không có đối thủ), không leo tường để \"chiếm\" gì.\n- **Camera và ánh sáng:** đêm xanh lạnh, một tia trăng chéo; camera cố định hoặc push-in rất nhẹ; ở 12 s đèn bật ấm (cắt ánh sáng đột ngột). Không dùng bóng đèn pin hay người. Rủi ro **trung bình**: chuyển sáng tối lớn giữa khung đầu và cuối.\n- **Hành động:** 0–3 s mèo đứng im trong bóng tối nhìn lên; 3–8 s mèo lẻn lên kệ thấp rồi kệ cao, bước thật nhẹ, đuôi vẫy chậm; 8–12 s đi lên bậc, vào nhà hộp tối; 12–15 s đèn bật ấm, mèo ngồi trong nhà hộp, nhìn thẳng ống kính, chớp mắt chậm.\n- **Âm thanh:** nhạc nền căng kiểu phim trộm (công cụ tạo), tiếng tim đập nhẹ, tiếng chân chạm gỗ; giọng thì thầm khô: \"Tonight. Three levels.\" / \"The vault.\" / \"Nothing happened.\"; tiếng công tắc ở 12 s.\n- **Ảnh storyboard:** `storyboard/A20.png`. **Ảnh neo cần gen:** `A20-1` (đêm, mèo đứng dưới nhìn lên, ánh trăng), `A20-3` (đèn bật ấm, đầu mèo ở cửa nhà hộp, hướng ống kính): 2 credit.\n- **Prompt clip (Seedance 2.5, 15 s, start_image A20-1, end_image A20-3, image_references cat-crop, `draft`):** vertical 9:16, the same small living room at night, cool blue moonlight from a window casting one diagonal beam across the plain white wall, deep shadows, a pale beige armchair edge at the far left, a beige rug. a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. 0-3 s: the orange tabby stands still in the dark looking up. 3-8 s: it sneaks silently onto the lower shelf and then the upper shelf, tail swaying slowly. 8-12 s: it walks up the steps and slips into the dark cat house. 12 s: the room lights switch on to a warm yellow glow. 12-15 s: the cat sits inside the cat house looking straight at the camera and blinks slowly; all six pieces visible. The cat is the orange tabby shown in the reference image: same short-haired medium-size cat, round eyes, no collar; no other cat; same size throughout; it never passes through shelves, post or house. Avoid: any text, logos, people, hammock, bridge, extra shelves or extra pieces beyond the set, wires, any second cat, the cat passing through shelves, the post or the house walls, the cat changing size or shape, the cat falling or slipping, the shelves shaking, bending or changing shape or count, blurry or morphing wood, subtitles, captions, Chinese or other characters, watermark, the house becoming transparent, the post floating or detached, a second armchair, glow or halo around the cat.\n- **Checklist claim:** như A19; thêm: không có người hay đèn pin; không \"an toàn/chắc\"; âm thanh gốc sinh bằng công cụ.\n- **Rủi ro chính:** (1) khung đầu và cuối chênh sáng tối mạnh, nội suy dễ biến dạng; (2) mèo \"ló vào bóng tối\" khó thấy sản phẩm, nên đảm bảo 3 s cuối sáng đủ để thấy 6 vật thể; (3) lỗi giữa clip không cắt được.\n\n### A20 · sửa (N2–N4)\n- **Điểm đáp:** mèo nhảy từ sàn lên đầu trái kệ thấp, rồi lên đầu trái kệ cao, trước trụ; không xuyên kệ.\n- **Tách đoạn:** 8–10 s đi lên bậc; 10–12 s vào nhà hộp (tối); 12 s đèn bật; 12–15 s đầu mèo ở cửa.\n- **Tia trăng:** một tia cố định chéo, không quét (không đèn pin).\n- **Phương án an toàn nếu nội suy sáng–tối lỗi:** gen 12 s đêm (start A20-1, end ảnh `A20-3n` đêm), rồi cắt cứng sang 3 s sáng (start/end A20-3). Cần thêm 1 ảnh và 1 clip ngắn; Amin quyết sau khi xem bản nháp.\n- **Prompt clip A20 (Seedance 2.5, 15 s, start_image A20-1, end_image A20-3, image_references cat-crop, `draft`, `generate_audio: false`):** vertical 9:16, the same small living room at night, one fixed beam of cool blue moonlight across the plain white wall, deep shadows, a pale beige armchair edge at the far left, a beige rug. a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. 0-3 s: the orange tabby stands still in the dark looking up. 3-6 s: it jumps onto the left end of the lower shelf, then onto the left end of the upper shelf in front of the post, quietly, tail swaying slowly. 6-10 s: it walks up the steps. 10-12 s: it slips into the dark cat house. 12 s: the room lights switch on to a warm yellow. 12-15 s: the cat sits inside the cat house looking straight at the camera and blinks slowly, only its head visible in the round doorway; all six pieces visible. The cat is the orange tabby shown in the reference image: same short-haired medium-size cat, round eyes, no collar; no other cat; same size throughout; it never passes through shelves, post or house. Avoid: any text, logos, people, hammock, bridge, extra shelves or extra pieces beyond the set, wires, any second cat, the cat passing through shelves, the post or the house walls, the cat changing size or shape, the cat falling or slipping, the shelves shaking, bending or changing shape or count, blurry or morphing wood, subtitles, captions, Chinese or other characters, watermark, the house becoming transpa\n\n[… rút gọn trong Store Hub; bản đầy đủ 6590 ký tự: 1-dropship/workspace/whiskerwall/3-creative/prompts/by-angle/PT1-A20-prompt-pack.md]",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-4/anchors/A20-1.png; refs/anchors/round-4/anchors/A20-3.png; refs/for-muse/round-4/V1-A2-cat-crop.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nStoryboard: refs/storyboard/round-4/A20.png"
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/A20-draft.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A19-A20-clips-2026-10-25.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A19-A20-anchors-2026-10-25.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A19-A20-prompt-pack-2026-10-25.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Bản nháp 480p, chưa chữ/giọng/nhạc; chưa review độc lập sau chỉnh sửa."
            }
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A20-1.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A20-3.png"
          ]
        }
      },
      {
        "id": "PT1-A21",
        "title": "Mèo cam đứng thẳng như host UGC, dẫn người xem \"đi một vòng\" bộ kệ: vẫy chân, ta-da, chỉ ba món, che miệng \"ối\", áp mũi vào ống kính; không leo, không so sánh; theo nhịp video tham chiếu generation.mp4",
        "status": "Đã qua cổng",
        "gate": "C",
        "format": "Anthropomorphic UGC (thú cưng diễn như host)",
        "hook": "(cận mặt mèo vẫy chân, không sản phẩm)",
        "step": "Xong (Amin chốt 26/10/2026)",
        "note": "Trạng thái nguồn: Đã xong. Review: Chưa review · Amin chốt xong 26/10/2026. Version: chưa có. Ngày: 25/10/2026. · Nguồn media (KAN-91, 09/11/2026): Higgsfield (Claude gen qua MCP); file A21v3-draft-music-hook.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A21v3-draft-music-hook.mp4",
        "kit": {
          "tool": "Higgsfield (Claude gen qua MCP)",
          "config": "Claude gen 25/10/2026 qua Higgsfield MCP: seedance_2_5 omni_reference draft 480p (480×854) 15 s 9:16, generate_audio false; start A21v3-1, end A21v3-5, ref V1-A2 + cat-crop. Ảnh neo 5 ảnh gpt_image_2 1k medium 9:16 (1 credit/ảnh). Hậu kỳ cục bộ 0 credit: nhạc tự tổng hợp (python+ffmpeg) + chữ PNG. Credit: 50 (5 ảnh + 45 clip; Fact).",
          "prompt": "## 6. Prompt pack\n**Ảnh neo `A21v3-1` (1 credit; ref `V1-A2` + `V1-A2-cat-crop`):** vertical 9:16, the same small bright living room as the first reference image (V1-A2): plain white wall, light wood floor, a pale beige armchair edge at the far left, a beige rug; this set is mounted on the wall exactly as in the first reference image, all six pieces fully visible: a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The orange tabby cat of the second reference image stands upright on its two hind legs on the floor in front of the wall, about a cat's body length away from it, facing the camera, its two front paws (real cat paws with pink-grey pads, orange fur) held out to the sides in a friendly \"ta-da\" gesture; handheld selfie-style framing at the cat's eye level, medium full-body shot; warm daylight from the camera side; the top fifth of the frame left empty. The cat is the one orange tabby of the cat reference image (V1-A2-cat-crop): short-haired, medium size, round amber eyes, no collar; no other cat; same size and markings throughout. Avoid: any text, logos, readable titles, people, a second cat, extra shelves or extra pieces beyond the six described, hammock, bridge, a second room, a second armchair, repeated or duplicated objects, wires, the cat touching or passing through the shelves, the post or the house, the cat changing size or shape, extra legs or extra paws, the shelves bending, melting, floating or changing shape or count, the post floating or detached, blurry or morphing wood, subtitles, captions, Chinese or other characters, watermark, the house becoming transparent, glow or halo around the cat, brightening or recolouring the dark charcoal-grey fleece tops, human hands, human face on the cat, a cat mouth speaking in sync like a human.\n**Prompt clip 15 s (Seedance 2.5 `omni_reference`, `draft` 480p, 9:16, `generate_audio: false`; start_image `A21v3-1`, image_references `V1-A2` + `V1-A2-cat-crop`, không end_image):** One continuous handheld selfie-style shot in the same room, the first frame is exactly the start image. a set of light natural-wood cat wall shelves mounted on a plain white wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. 0-3 s: the camera moves in close on the upright orange cat's face; it waves one front paw at the lens with a cheerful look, the wall softly blurred behind. 3-6 s: the camera steps back as the cat stands tall on its hind legs and spreads both front paws out to the sides like a presenter saying \"ta-da\", the whole shelf set visible behind it. 6-8 s: the cat tilts its head to one side as if listening. 8-11 s: the cat points one front paw, in the air without touching anything, first toward the lower grey-fleece shelf, then toward the upper shelf, then toward the cat house at the top right, its head turning to follow each point; the shelf set stays completely still. 11-13 s: the cat turns back to the camera and covers its mouth with one front paw as if saying \"oops\", eyes wide. 13-15 s: the cat leans in until its nose fills the lens, then gently boops the lens with a front paw and the camera pulls back as the cat raises both front paws in cheer. The cat always stays on the floor in front of the wall and never touches the shelves. The cat is the one orange tabby of the cat reference image (V1-A2-cat-crop): short-haired, medium size, round amber eyes, no collar; no other cat; same size and markings throughout. Avoid: any text, logos, readable titles, people, a second cat, extra shelves or extra pieces beyond the six described, hammock, bridge, a second room, a second armchair, repeated or duplicated objects, wires, the cat touching or passing through the shelves, the post or the house, the cat changing size or shape, extra legs or extra paws, the shelves bending, melting, floating or changing shape or count, the post floating or detached, blurry or morphing wood, subtitles, captions, Chinese or other characters, watermark, the house becoming transparent, glow or halo around the cat, brightening or recolouring the dark charcoal-grey fleece tops, human hands, human face on the cat, a cat mouth speaking in sync like a human.",
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "Ảnh neo/ref đã lưu trong folder (Fact): refs/anchors/round-1/anchors/V1-A2.png; refs/anchors/round-4/anchors/A21v3-1.png; refs/anchors/round-4/anchors/A21v3-2.png; refs/anchors/round-4/anchors/A21v3-3.png; refs/anchors/round-4/anchors/A21v3-4.png; refs/anchors/round-4/anchors/A21v3-5.png; refs/for-muse/round-4/V1-A2-cat-crop.png\nẢnh bộ kệ tham chiếu g01-crop.jpg: cắt từ ảnh listing SucceBuy (AliExpress US), supplier tạm; chưa SKU, chưa mẫu thật, chưa có quyền dùng ảnh (Fact, theo refs/product/REFERENCE.md). Chỉ dùng cho hình dáng kệ/bậc/trụ/nhà hộp.\nStoryboard: refs/storyboard/round-4/A21.png"
            },
            {
              "label": "Ref file video",
              "text": "File chính: videos/higgsfield/final/A21v3-draft-music-hook.mp4\nClip gốc/thành phần: videos/higgsfield/final/A21v3-draft-music-text.mp4"
            },
            {
              "label": "Review & nhật ký",
              "text": "Review độc lập: 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A21v3-clip-2026-10-25.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A21v3-2026-10-25.md; 1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A21-prompt-pack-2026-10-25.md\nNhật ký gen: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/ (CREDIT-LOG.csv, NOTES.md); form: 1-dropship/workspace/whiskerwall/3-creative/prompts/forms/"
            },
            {
              "label": "Chưa xác minh",
              "text": "Video ref (chó nói chuyện, 30 s) là của bên thứ ba, nguồn/quyền dùng chưa rõ; review 25/10: lỗi chặn nếu dùng ngoài là tỷ lệ bộ kệ (chỉ dùng nội bộ/draft). File 'music-text' là biến thể có chữ. Đã đăng đúng file này (khớp byte với file KAN-80 trong tab Social; Fact)."
            }
          ],
          "character": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/for-muse/round-4/V1-A2-cat-crop.png"
          ],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-1/anchors/V1-A2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A21v3-1.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A21v3-2.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A21v3-3.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A21v3-4.png",
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/anchors/A21v3-5.png"
          ]
        }
      },
      {
        "id": "PT1-A22",
        "title": "Thay chó trong video nguồn bằng mèo cam đứng thẳng và bếp bằng phòng có bộ kệ, giữ nguyên nhịp/cử chỉ/âm thanh gốc",
        "status": "Đã qua cổng",
        "gate": "C",
        "format": "Anthropomorphic UGC (Genjutsu Object Swap từ video nguồn)",
        "hook": "(theo video nguồn: vẫy chân vào ống kính)",
        "step": "Xong (Amin chốt 26/10/2026)",
        "note": "Trạng thái nguồn: Đã xong. Review: Review 25/10: Không đạt (bán kệ), nội bộ OK · Amin chốt xong 26/10/2026. Version: v1 (30 s, 720p). Ngày: 25/10/2026. · Nguồn media (KAN-91): Higgsfield Genjutsu (Amin); file A22-genjutsu-objectswap-30s-720p.mp4 trong 1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/.",
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/A22-genjutsu-objectswap-30s-720p.mp4",
        "kit": {
          "tool": "Higgsfield Genjutsu – Object Swap (Amin gen trực tiếp trên web)",
          "config": "720p (720×1280, 24 fps), ~29,7 s, có audio gốc từ video nguồn (nội dung chưa nghe). Credit theo Amin: 210; theo sổ cái Higgsfield (transactions 25/10/2026): 2 giao dịch 0 credit, số dư không đổi (chưa thống nhất; Amin xác nhận). Không phải Claude gen.",
          "prompt": "## Prompt (Amin dùng)\n@Image1 — CAT ROOM, the replacement LOCATION: a warm off-white wall with light wood flooring, a pale rug edge, and a wall-mounted natural-wood cat furniture system: cylindrical tunnel bed at left, staggered climbing steps, a lower perch platform, and an upper enclosed cube with a cat-head-shaped opening. Preserve the furniture's exact design, natural wood color, proportions, shapes, and visible details.\nVideo edit. Keep this @Video1 clip exactly as it is — the same shots and cuts (cuts at 9.6s, 10.7s, 12.3s, 16.2s, 18.2s, 21.0s, 22.8s, 23.9s, 26.6s), the same camera moves, framing and composition, the same rhythmic dance performance, poses, blocking, screen placement, pacing and timing of every shot. Change only the modern kitchen hallway and the German Shepherd dog, keeping the original choreography and camera-driven story intact.\n1. REPLACE the original modern kitchen hallway (all shots, 0-29.5s) with CAT ROOM from @Image1. Put the exact wall-mounted cat furniture environment from @Image1 behind and around the performer in every shot, maintaining its original product design, color, shape, scale, layout, and details; integrate it naturally with the inherited perspective, occlusion, lighting, and camera movement.\n2. REPLACE the original German Shepherd dog (0-9.6s; 9.6-10.7s; 10.7-12.3s; 12.3-16.2s; 16.2-18.2s; 18.2-21.0s; 21.0-22.8s; 22.8-23.9s; 23.9-26.6s; 26.6-29.5s) with a natural orange tabby cat, matched beat-for-beat to the original upright dance, paw gestures, head tilts, close-up expressions, and lens-reaching actions. Keep the cat's fur, paws, silhouette, contact points, floor shadows, and occlusions coherent through every cut.\nIdentity lock: CAT ROOM from @Image1 belongs only to the replacement environment throughout the clip; preserve its exact product design without adding, removing, redesigning, or substituting any product. Within the entire clip, replace the original source person identified as the German Shepherd dog in @Video1 completely with the orange tabby cat in every appearance; the original identity must not appear within those windows. Retain the original performance, pose, blocking, interactions, and timing. Outside those windows, preserve that source person's original appearance, subject only to other explicitly requested edits. Lock the orange tabby cat's identity across frames and cuts; it is never duplicated onto another figure. Its shadows follow the cat throughout the active window.\nEverything else — the inherited choreography, source audio synchronization, original shot structure, camera moves and all timing — stays exactly the same.",
          "referenceVideo": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/videos-nguon/SOURCE-video1-generation.mp4"
          ],
          "character": [],
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/anchors/round-4/gen-genjutsu/A22-sheet.png"
          ],
          "extra": [
            {
              "label": "Ref (đã kiểm file)",
              "text": "@Video1 = refs/videos-nguon/SOURCE-video1-generation.mp4 (30 s, chó German Shepherd trong bếp; bên thứ ba, quyền dùng và âm thanh chưa rõ). @Image1 (ảnh phòng có bộ kệ): Trống / chưa rõ file (NOTES.md ghi 'chưa rõ file'). Bản xem trước 540p: videos/higgsfield/final/A22-preview-540p.mp4."
            },
            {
              "label": "Chưa xác minh",
              "text": "Review 25/10: Không đạt cho mục tiêu bán bộ kệ (giải phẫu mèo đứng hai chân, bộ kệ bị che/cắt); chỉ dùng nội bộ. Đã đăng đúng file này (khớp byte với file KAN-80 trong tab Social; Fact)."
            },
            {
              "label": "Review & nhật ký",
              "text": "1-dropship/workspace/whiskerwall/3-creative/prompts/reviews/round-4__REVIEW-claude-A22-genjutsu-2026-10-25.md\nNOTES: 1-dropship/workspace/whiskerwall/3-creative/prompts/gen-logs/round-4__gen-genjutsu__NOTES.md"
            }
          ]
        }
      },
      {
        "id": "PT1-A23-MS",
        "title": "PT1-A23 (Marketing Studio): Product Crash, Camera POV, office, 15 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Camera POV (camera an ninh góc làm việc tại nhà), hook Product Crash, 15 s, 9:16",
        "hook": "Product Crash: hộp vận chuyển rơi, đồ đạc văng tung tóe, mèo chạy mất; hình sắc gắt rồi cắt sang cảnh sạch, bộ kệ đã trên tường.",
        "step": "Đã gen (Genjutsu Lite, 0 credit). Không qua kiểm tra của Muse, chưa đăng.",
        "note": "Kết quả: 15 s, 724x1292, Higgsfield Genjutsu Lite (đổi vật thể trên clip nguồn AquaNest V02), 0 credit (còn 2 lượt free).\nLỗi: còn giọng đọc cá cảnh của clip nguồn, logo Apple trên laptop, camera zoom, mèo bị kéo giãn.\n\nScript:\n0-3 s HOOK: the shipping box holding the shelf set drops from above onto the grey rug, bursts open, cat toys, papers and a plant pot scatter across the floor, a mug tips over; the orange tabby bolts out of frame. The image goes harsh and over-sharpened with a short glitch.\n3-7 s: hard cut, same angle, the room is perfectly clean and restored; the wall already shows the shelf set. A person seen from behind calmly looks at the wall and steps back to look at it.\n7-11 s: the orange tabby walks in, crouches and leaps onto the upper grey-fleece shelf, then walks up the climbing steps.\n11-15 s: the cat settles on top of the cat house, one slow blink; the floor stays clear. Motion continues to the end, no freeze. · Media (10/11/2026): file PT1-A23-MS-genjutsu-lite.mp4 trong whiskerwall/3-creative/videos/ (copy từ product-test-1/3-creative/videos/); 15,1 s 724×1292, có audio. Gắn vào mục MS theo tên file (Inference); công cụ/prompt thật của file: chưa xác minh.",
        "kit": {
          "tool": "Higgsfield Genjutsu Lite (Objects swap)",
          "config": "hf_mult_replace_object_flash · 720p · 15 s · 9:16 · free generation, 0 credit · clip nguồn AquaNest R7-V02 + ảnh g01 (thay bản Marketing Studio ~45 credit)",
          "fields": {
            "mode": "Camera POV",
            "hook": "Product Crash",
            "setting": "Office",
            "product": "Bộ kệ leo tường (ảnh SucceBuy g01)",
            "avatar": "Không chọn",
            "duration": "15 s",
            "resolution": "480p",
            "aspect": "9:16",
            "audio": "Bật"
          },
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg"
          ],
          "prompt": "Found-footage home-office security camera POV, static corner-mounted wide lens, 9:16 vertical. Small blinking red REC dot and a \"CAM 1\" label, no clock. One locked wide shot for all scenes, no digital crop, mild compression, slight sensor noise. Small home-office corner, plain sage-green wall, dark walnut wood floor, the corner of a small home-office desk with a closed laptop at the far right, a grey rug, warm evening lamp light. Hero object @Image1: a set of light natural-wood cat wall shelves mounted on a plain sage-green wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The same orange tabby short-haired cat in every shot, medium size, round eyes, no collar; no other cat. One adult seen only from behind.\nScene 1 (0-3 s, HOOK): the shipping box holding the shelf set falls from above onto the grey rug and bursts open, cat toys, a few papers and a plant pot scatter, a mug tips over, the tabby bolts out of frame; the image goes harsh and over-sharpened with a jittery glitch, then stops.\nScene 2 (3-7 s): hard cut, same angle, the room is perfectly clean and restored, the shelf set is on the wall; the person, seen from behind, calmly looks at the wall.\nScene 3 (7-11 s): the tabby walks in, crouches and leaps onto the upper grey-fleece shelf, then walks up the sloped steps toward the cat house.\nScene 4 (11-15 s): the tabby settles on top of the cat house, one slow blink; the floor stays clear; motion continues to the end, no freeze.\nAudio: room tone, a box thud and soft clatter in the hook, then calm light lo-fi piano; no speech, no vocals.\nNegative: no readable text or logos anywhere, no hammock, no bridge, no extra shelves or pieces beyond the set described, the set pieces never move, shake or fall after the hook, the cat never passes through shelves, post or house, the cat keeps the same size, no second cat, no subtitles, no captions, no watermark.",
          "referenceVideo": [],
          "character": [],
          "extra": [
            {
              "label": "Nguồn kịch bản",
              "text": "Học theo AquaNest R7-V02 (Marketing Studio · Camera POV · Product Crash), đổi sang WhiskerWall. Bối cảnh đã đổi 09/11: góc làm việc tại nhà, tường xanh sage, sàn gỗ walnut tối, thảm xám, đèn tối ấm (thay phòng khách tường trắng/sofa be). Hook làm bằng HỘP VẬN CHUYỂN rơi, không cho kệ rơi/hỏng (tránh ngụ ý độ chắc/an toàn). Không nói tải trọng, lắp đặt, \"mèo thích/cần\". Ảnh sản phẩm SucceBuy là tham chiếu, chưa có quyền. Chưa gen, 0 credit. Bản đọc: https://claude.ai/artifact/JPmyk8mEUW8rhwcj6gGJDR (cùng khung kịch bản, bản HeartBond)."
            }
          ]
        },
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/PT1-A23-MS-genjutsu-lite.mp4"
      },
      {
        "id": "PT1-A23-MUSE",
        "title": "PT1-A23 (Muse): cùng kịch bản Product Crash, 15 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Camera POV (camera an ninh góc làm việc tại nhà), hook Product Crash, 15 s, 9:16",
        "hook": "Product Crash: hộp vận chuyển rơi, đồ đạc văng tung tóe, mèo chạy mất; hình sắc gắt rồi cắt sang cảnh sạch, bộ kệ đã trên tường.",
        "step": "Draft: chờ Amin duyệt rồi gen. Chưa gen.",
        "note": "Script:\n0-3 s HOOK: the shipping box holding the shelf set drops from above onto the grey rug, bursts open, cat toys, papers and a plant pot scatter across the floor, a mug tips over; the orange tabby bolts out of frame. The image goes harsh and over-sharpened with a short glitch.\n3-7 s: hard cut, same angle, the room is perfectly clean and restored; the wall already shows the shelf set. A person seen from behind calmly looks at the wall and steps back to look at it.\n7-11 s: the orange tabby walks in, crouches and leaps onto the upper grey-fleece shelf, then walks up the climbing steps.\n11-15 s: the cat settles on top of the cat house, one slow blink; the floor stays clear. Motion continues to the end, no freeze. · Media: Trống / chưa có file Muse cho A23 (đã tìm product-test-1/3-creative/videos, Downloads).",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Chat Muse mới, yêu cầu 1 video 9:16 15 s có tiếng. Muse từng tạo được video cho AquaNest; HeartBond bị 403 chặn vùng.",
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01.jpg",
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01-crop.jpg"
          ],
          "prompt": "Create ONE vertical 9:16 video, 15 seconds, with sound, for a cat wall shelf brand called WhiskerWall. Do not post or publish anything, do not create accounts.\nProduct (shown exactly, no claims): a set of light natural-wood cat wall shelves mounted on a plain sage-green wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. Do not state or imply load capacity, safety, material grade, installation time or ease, price, or what cats feel or need.\nStyle: found-footage home-office security camera POV, one locked wide corner shot for the whole video, red REC dot and a \"CAM 1\" label, no clock, mild compression, small home-office corner, plain sage-green wall, dark walnut floor, corner of a desk with a closed laptop at the far right, grey rug, warm evening lamp light. One orange tabby short-haired cat (same cat throughout, no collar) and one adult seen only from behind.\nStructure: 0-3 s HOOK: the shipping box holding the shelf set drops onto the grey rug and bursts open, toys, papers and a plant pot scatter, a mug tips over, the cat bolts out of frame, harsh over-sharpened glitch. 3-7 s: hard cut, same angle, the room is clean and restored, the shelf set is already on the wall, the person calmly looks at it. 7-11 s: the cat walks in, leaps onto the upper grey-fleece shelf and walks up the steps. 11-15 s: the cat settles on top of the cat house, slow blink; motion to the end.\nAudio: box thud and soft clatter in the hook, then calm light lo-fi piano; no speech.\nAvoid: any text or logos, hammock, bridge, extra shelves, set pieces moving or falling after the hook, the cat passing through objects, a second cat, watermark.\nAfter generating, report: model used, duration, credits spent, and any problem you noticed.",
          "referenceVideo": [],
          "character": [],
          "extra": [
            {
              "label": "Nguồn kịch bản",
              "text": "Học theo AquaNest R7-V02 (Marketing Studio · Camera POV · Product Crash), đổi sang WhiskerWall. Bối cảnh đã đổi 09/11: góc làm việc tại nhà, tường xanh sage, sàn gỗ walnut tối, thảm xám, đèn tối ấm (thay phòng khách tường trắng/sofa be). Hook làm bằng HỘP VẬN CHUYỂN rơi, không cho kệ rơi/hỏng (tránh ngụ ý độ chắc/an toàn). Không nói tải trọng, lắp đặt, \"mèo thích/cần\". Ảnh sản phẩm SucceBuy là tham chiếu, chưa có quyền. Chưa gen, 0 credit. Bản đọc: https://claude.ai/artifact/JPmyk8mEUW8rhwcj6gGJDR (cùng khung kịch bản, bản HeartBond)."
            }
          ]
        }
      },
      {
        "id": "PT1-A23-FLOW",
        "title": "PT1-A23 (Google Flow): cùng kịch bản Product Crash, nén 8 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Camera POV (camera an ninh góc làm việc tại nhà), hook Product Crash, 8 s, 9:16",
        "hook": "Product Crash: hộp vận chuyển rơi, đồ đạc văng tung tóe, mèo chạy mất; hình sắc gắt rồi cắt sang cảnh sạch, bộ kệ đã trên tường.",
        "step": "Đã gen (Flow Omni 1.2 Flash, 8 s, 24 credit). Chưa review.",
        "note": "Kết quả: 8 s, 720x1280, 24 credit. Chưa xem/kiểm tra theo checklist.\n\nScript:\n0-3 s HOOK: the shipping box holding the shelf set drops from above onto the grey rug, bursts open, cat toys, papers and a plant pot scatter across the floor, a mug tips over; the orange tabby bolts out of frame. The image goes harsh and over-sharpened with a short glitch.\n3-7 s: hard cut, same angle, the room is perfectly clean and restored; the wall already shows the shelf set. A person seen from behind calmly looks at the wall and steps back to look at it.\n7-11 s: the orange tabby walks in, crouches and leaps onto the upper grey-fleece shelf, then walks up the climbing steps.\n11-15 s: the cat settles on top of the cat house, one slow blink; the floor stays clear. Motion continues to the end, no freeze. · Media (10/11/2026): file PT1-A23-FLOW.mp4 trong whiskerwall/3-creative/videos/ (copy từ product-test-1/3-creative/videos/); 8 s 720×1280, có audio.",
        "kit": {
          "tool": "Google Flow",
          "config": "Omni 1.2 Flash · 8 s · 9:16 · 720p · 24 credit · đính kèm 1 ảnh phòng/kệ làm ref (anchor V1-A2 nếu dùng)",
          "product": [
            "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01.jpg"
          ],
          "prompt": "One 8-second vertical 9:16 video with sound, Omni 1.2 Flash. Use the attached reference only for the room and the wall shelf set. Found-footage home-office security camera look: one locked wide corner shot for the whole video, small blinking red REC dot and a \"CAM 1\" label, no clock, mild compression, small home-office corner, plain sage-green wall, dark walnut floor, corner of a desk with a closed laptop at the far right, grey rug, warm evening lamp light. The wall set: a set of light natural-wood cat wall shelves mounted on a plain sage-green wall: a small rectangular shelf with a grey fleece top on two wooden brackets at the bottom, a vertical sisal-rope-wrapped post standing on that shelf and holding a second grey-fleece shelf directly above it, a short sloped set of climbing steps to the right of the upper shelf leading up to a square wooden cat house with a round cat-head-shaped doorway and a cushion inside at the top right, and a round wooden tunnel on its own small shelf at the left at mid height; exactly these pieces, no hammock, no bridge, no extra shelves; plain surfaces, no text, no logos. The same orange tabby short-haired cat in every shot, no other cat; one adult seen only from behind. Story: (1) 0-2 s HOOK: a shipping box falls from above onto the grey rug and bursts open, cat toys, a few papers and a plant pot scatter, a mug tips over, the tabby bolts away, the image turns harsh and over-sharpened with a jittery glitch; (2) 2-4 s hard cut, same angle, the room is clean and restored, the shelf set is on the wall, the person calmly looks at it; (3) 4-6 s the tabby leaps onto the upper grey-fleece shelf and walks up the steps; (4) 6-8 s the tabby settles on top of the cat house, slow blink, motion continues to the end. Audio: box thud and soft clatter in the hook, then calm light lo-fi piano, no speech, no vocals. No text except the REC dot and CAM 1 label, no logos, no watermark, no hammock, no bridge, no extra shelves, the set never moves after the hook, the cat never passes through objects.",
          "referenceVideo": [],
          "character": [],
          "extra": [
            {
              "label": "Nguồn kịch bản",
              "text": "Học theo AquaNest R7-V02 (Marketing Studio · Camera POV · Product Crash), đổi sang WhiskerWall. Bối cảnh đã đổi 09/11: góc làm việc tại nhà, tường xanh sage, sàn gỗ walnut tối, thảm xám, đèn tối ấm (thay phòng khách tường trắng/sofa be). Hook làm bằng HỘP VẬN CHUYỂN rơi, không cho kệ rơi/hỏng (tránh ngụ ý độ chắc/an toàn). Không nói tải trọng, lắp đặt, \"mèo thích/cần\". Ảnh sản phẩm SucceBuy là tham chiếu, chưa có quyền. Chưa gen, 0 credit. Bản đọc: https://claude.ai/artifact/JPmyk8mEUW8rhwcj6gGJDR (cùng khung kịch bản, bản HeartBond)."
            }
          ]
        },
        "media": "1-dropship/workspace/whiskerwall/3-creative/videos/flow/PT1-A23-FLOW.mp4"
      }
    ],
    "social": {
      "FB": {
        "name": "WhiskerWall",
        "handle": "Page ID 1426368397229395 (profile 61596078880301)",
        "url": "https://www.facebook.com/people/WhiskerWall/61596078880301/",
        "description": "Wall-mounted shelves & climbing steps for cats. More places to climb, perch and nap.",
        "email": "whiskerwall.store@gmail.com",
        "category": "Pet Supplies",
        "status": "Đã đăng bài đầu",
        "note": "Facebook Page WhiskerWall (đề xuất tạo Page): category Pet Supplies (chưa xác minh tên mục thật); bio: \"Wall-mounted shelves & climbing steps for cats. More places to climb, perch and nap.\"; email liên hệ tạm whiskerwall.store@gmail.com (chưa xác minh). Trạng thái kênh trong Excel ghi \"Đã tạo\"; chuyển thành \"Đã đăng bài đầu\" vì đã có bài Đã đăng theo thread Muse (chưa tự xác minh).\n\nMuse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Page 4 followers, 7 Reels, đủ 7/7 bài live. Facebook không hiện reach (Meta bỏ chỉ số từ 31/10).",
        "posts": [
          {
            "id": "KAN80-FB-A1",
            "title": "PT1-A1 · Your cat tree is eating your living room",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/1693172478836181",
            "date": "2026-11-06",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): đăng 06/11 22:11; caption và hashtag khớp bản soạn, nhãn AI bật.",
            "file": "A1-final-claude.mp4 (bản Claude 12,7s, 720×1280, có nhạc)",
            "caption": "Your cat tree is eating your living room. 😹\n\nSmall apartment, big cat tree? Move your cat's climbing space up onto the wall — and get your floor back.\n\nGive your cat the wall, not the floor. 🐾\n\nWould your cat use this wall? Tell us in the comments 👇 Follow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-1-A1-your-cat-tree.mp4"
          },
          {
            "id": "KAN80-FB-A2",
            "title": "PT1-A2 · Cat on the counter again?",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/4162326780737928",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): đăng 08/11 09:14 (log cũ ghi ~09:31, lệch 17 phút; lấy theo Facebook); caption và hashtag khớp bản soạn, nhãn AI bật.",
            "file": "Muse chưa ghi tên file (15s, 720×1280, có nhạc nền)",
            "caption": "Cat on the counter again? 😹\n\nGive your cat its own route up the wall — instead of your table, your shelves, your books.\n\nA climbing route made for your cat. 🐾\n\nWhere does your cat climb that it shouldn't? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-2-A2-cat-on-the-counter.mp4"
          },
          {
            "id": "KAN80-FB-A3",
            "title": "PT1-A3 · Cat furniture that looks like decor",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/1371912194864447",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): đăng 08/11 10:55; caption và hashtag khớp bản soạn, nhãn AI bật.",
            "file": "File gốc lấy từ Drive (15s, có nhạc)",
            "caption": "Cat furniture that fits your home instead of fighting it. Light-wood shelves for climbing, napping, and watching the world go by. Would this blend into your living room? Tell us in the comments 👇 Follow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-3-A3-decor.mp4"
          },
          {
            "id": "KAN80-FB-A13",
            "title": "PT1-A13 · Your floor, back.",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/1473002428269104",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): đăng 08/11 13:31; caption và hashtag khớp bản soạn, nhãn AI bật. Mở lần đầu báo \"Unable to play media\" rồi phát bình thường.",
            "file": "A13-final-v2.mp4 (720×1280, 15s)",
            "caption": "Your floor, back. 🐾\nTake the climbing off the floor and put it on the wall.\nDoes your cat tree own half your living room? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-4-A13-your-floor-back.mp4"
          },
          {
            "id": "KAN80-FB-A15",
            "title": "PT1-A15 · Spot the cat furniture.",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/1489127623320972",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): đăng 08/11 15:31; caption và hashtag khớp bản soạn, nhãn AI bật.",
            "file": "A15-final-v2.mp4",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-5-A15-spot-the-furniture.mp4"
          },
          {
            "id": "KAN80-FB-A21",
            "title": "PT1-A21 · The Cat Will See You Now",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/2675361712912772",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): đăng 08/11 14:10; caption và hashtag khớp bản soạn, nhãn AI bật. Mở lần đầu báo \"Unable to play media\" rồi phát bình thường. Cảnh báo review: chỉ dùng nội bộ, Amin chọn đăng.",
            "file": "A21v3-draft-music-hook.mp4 (480×854, 15s)",
            "caption": "Welcome to my wall. 🐾\nYour cat gives you a tour of the wall — wave, ta-da, and a peek at the shelves. 👀\nWhich stop on the tour would your cat claim first? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-6-A21-welcome-to-my-wall.mp4"
          },
          {
            "id": "KAN80-FB-A22",
            "title": "PT1-A22 · Mèo nhảy 30s (object swap)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/2390393121766249",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): đăng 08/11 16:33; caption và hashtag khớp bản soạn, nhãn AI bật. Mở lần đầu báo \"Unable to play media\" rồi phát bình thường.",
            "file": "A22-genjutsu-objectswap-30s-720p.mp4 (33 MB)",
            "media": "1-dropship/workspace/product-test-1/3-creative/round-4/gen-genjutsu/A22-genjutsu-objectswap-30s-720p.mp4"
          },
          {
            "id": "PT1A23-FB-MS",
            "title": "PT1-A23-MS · Product Crash (Genjutsu Lite, 15 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Chờ Amin duyệt rồi báo Muse đăng hoặc Amin tự đăng. Video AI: bật nhãn AI. KHÔNG qua kiểm tra của Muse: còn giọng đọc cá cảnh của clip nguồn, logo Apple trên laptop, camera zoom, mèo bị kéo giãn. Chỉ đăng nếu sửa/duyệt. Không claim tải trọng, an toàn, lắp đặt, \"mèo thích/cần\".",
            "file": "PT1-A23-MS-genjutsu-lite.mp4 (724×1292, 15 s)",
            "caption": "The box lands. The cat bolts. 📦😹\nThen the wall gets a little makeover.\nWhat would your cat climb first? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/PT1-A23-MS-genjutsu-lite.mp4"
          },
          {
            "id": "PT1A23-FB-FLOW",
            "title": "PT1-A23-FLOW · Product Crash (Google Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Chờ Amin duyệt rồi báo Muse đăng hoặc Amin tự đăng. Video AI: bật nhãn AI. Chưa review video (chưa kiểm set piece, mèo xuyên vật thể, chữ/logo). Cần xem trước khi duyệt. Không claim tải trọng, an toàn, lắp đặt, \"mèo thích/cần\".",
            "file": "PT1-A23-FLOW.mp4 (720×1280, 8 s)",
            "caption": "The box lands. The cat bolts. 📦😹\nThen the wall gets a little makeover.\nWhat would your cat climb first? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "1-dropship/workspace/whiskerwall/3-creative/videos/flow/PT1-A23-FLOW.mp4"
          }
        ]
      },
      "IG": {
        "name": "whiskerwall.shop",
        "handle": "whiskerwall.shop",
        "url": "https://www.instagram.com/whiskerwall.shop/",
        "description": "",
        "email": "whiskerwall.store@gmail.com",
        "category": "",
        "status": "Đã đăng bài đầu",
        "note": "Đã có 7 Reels (A1, A2, A3, A13, A15, A21, A22) đăng tối 08/11 qua Muse, URL lấy theo báo cáo lúc đăng. Muse kiểm lại 09/11 không được vì Instagram chặn phiên (xác minh số điện thoại); không phải kết luận tài khoản bị khóa. Chưa tự xác minh.",
        "posts": [
          {
            "id": "KAN80-IG-A1",
            "title": "PT1-A1 · Your cat tree is eating your living room",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe6Q4mgvfD/",
            "date": "2026-11-08",
            "note": "Đăng 08/11 ~20:54 theo Muse (tự báo lúc đăng, caption đúng, nhãn AI bật). CHƯA kiểm lại 09/11: Instagram chặn phiên trình duyệt của Muse (đòi SĐT nhận mã). Sáng 09/11 Muse từng đọc số liệu IG: 118 views cho A1, 39–145 views cho các bài còn lại.",
            "file": "task-hub/KAN-80/output/instagram-reels/IG-1-A1-your-cat-tree.mp4",
            "caption": "Your cat tree is eating your living room. 😹\nSmall apartment, big cat tree? Move the climbing up onto the wall — and get your floor back.\nWould your cat use this wall? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #CatsOfInstagram",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-1-A1-your-cat-tree.mp4"
          },
          {
            "id": "KAN80-IG-A2",
            "title": "PT1-A2 · Cat on the counter again?",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe6YmpApe0/",
            "date": "2026-11-08",
            "note": "Đăng 08/11 ~20:55 theo Muse (tự báo lúc đăng, caption đúng, nhãn AI bật). CHƯA kiểm lại 09/11: Instagram chặn phiên trình duyệt của Muse (đòi SĐT nhận mã). Sáng 09/11 Muse từng đọc số liệu IG: 118 views cho A1, 39–145 views cho các bài còn lại.",
            "file": "task-hub/KAN-80/output/instagram-reels/IG-2-A2-cat-on-the-counter.mp4",
            "caption": "Cat on the counter again? 🐾\nGive them somewhere better to climb: up on the wall, not on your kitchen counter.\nWhere does your cat keep sneaking onto? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #CatsOfInstagram",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-2-A2-cat-on-the-counter.mp4"
          },
          {
            "id": "KAN80-IG-A3",
            "title": "PT1-A3 · Cat furniture that looks like decor",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe6hNhgLXZ/",
            "date": "2026-11-08",
            "note": "Đăng 08/11 ~20:56 theo Muse (tự báo lúc đăng, caption đúng, nhãn AI bật). CHƯA kiểm lại 09/11: Instagram chặn phiên trình duyệt của Muse (đòi SĐT nhận mã). Sáng 09/11 Muse từng đọc số liệu IG: 118 views cho A1, 39–145 views cho các bài còn lại.",
            "file": "task-hub/KAN-80/output/instagram-reels/IG-3-A3-decor.mp4",
            "caption": "Cat furniture that looks like decor. 🐾\nLight-wood shelves for climbing, napping, and watching the world go by.\nWould this blend into your living room? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #CatsOfInstagram",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-3-A3-decor.mp4"
          },
          {
            "id": "KAN80-IG-A13",
            "title": "PT1-A13 · Your floor, back.",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe6of4AMt0/",
            "date": "2026-11-08",
            "note": "Đăng 08/11 ~20:57 theo Muse (tự báo lúc đăng, caption đúng, nhãn AI bật). CHƯA kiểm lại 09/11: Instagram chặn phiên trình duyệt của Muse (đòi SĐT nhận mã). Sáng 09/11 Muse từng đọc số liệu IG: 118 views cho A1, 39–145 views cho các bài còn lại.",
            "file": "task-hub/KAN-80/output/instagram-reels/IG-4-A13-your-floor-back.mp4",
            "caption": "Your floor, back. 🐾\nTake the climbing off the floor and put it on the wall.\nDoes your cat tree own half your living room? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #CatsOfInstagram",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-4-A13-your-floor-back.mp4"
          },
          {
            "id": "KAN80-IG-A15",
            "title": "PT1-A15 · Spot the cat furniture.",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe6vn4A0gV/",
            "date": "2026-11-08",
            "note": "Đăng 08/11 ~20:58 theo Muse (tự báo lúc đăng, caption đúng, nhãn AI bật). CHƯA kiểm lại 09/11: Instagram chặn phiên trình duyệt của Muse (đòi SĐT nhận mã). Sáng 09/11 Muse từng đọc số liệu IG: 118 views cho A1, 39–145 views cho các bài còn lại.",
            "file": "task-hub/KAN-80/output/instagram-reels/IG-5-A15-spot-the-furniture.mp4",
            "caption": "Spot the cat furniture. 🐾\nCan you spot the cat furniture?\nIt blends right into the living room — until the cat peeks out. 👀\nDid you spot it before the reveal? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #CatsOfInstagram",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-5-A15-spot-the-furniture.mp4"
          },
          {
            "id": "KAN80-IG-A21",
            "title": "PT1-A21 · The Cat Will See You Now",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe629xgy-8/",
            "date": "2026-11-08",
            "note": "Đăng 08/11 ~20:59 theo Muse (tự báo lúc đăng, caption đúng, nhãn AI bật). CHƯA kiểm lại 09/11: Instagram chặn phiên trình duyệt của Muse (đòi SĐT nhận mã). Sáng 09/11 Muse từng đọc số liệu IG: 118 views cho A1, 39–145 views cho các bài còn lại.",
            "file": "task-hub/KAN-80/output/instagram-reels/IG-6-A21-welcome-to-my-wall.mp4",
            "caption": "Welcome to my wall. 🐾\nYour cat gives you a tour of the wall — wave, ta-da, and a peek at the shelves. 👀\nWhich stop on the tour would your cat claim first? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #CatsOfInstagram",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-6-A21-welcome-to-my-wall.mp4"
          },
          {
            "id": "KAN80-IG-A22",
            "title": "PT1-A22 · Mèo nhảy 30s (object swap)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe6_Y0gvPA/",
            "date": "2026-11-08",
            "note": "Đăng 08/11 ~21:01 theo Muse (tự báo lúc đăng, caption đúng, nhãn AI bật). CHƯA kiểm lại 09/11: Instagram chặn phiên trình duyệt của Muse (đòi SĐT nhận mã). Sáng 09/11 Muse từng đọc số liệu IG: 118 views cho A1, 39–145 views cho các bài còn lại.",
            "file": "A22-genjutsu-objectswap-30s-720p.mp4 (33 MB)",
            "media": "1-dropship/workspace/product-test-1/3-creative/round-4/gen-genjutsu/A22-genjutsu-objectswap-30s-720p.mp4"
          },
          {
            "id": "PT1A23-IG-MS",
            "title": "PT1-A23-MS · Product Crash (Genjutsu Lite, 15 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Chờ Amin duyệt rồi báo Muse đăng hoặc Amin tự đăng. Video AI: bật nhãn AI. KHÔNG qua kiểm tra của Muse: còn giọng đọc cá cảnh của clip nguồn, logo Apple trên laptop, camera zoom, mèo bị kéo giãn. Chỉ đăng nếu sửa/duyệt. Không claim tải trọng, an toàn, lắp đặt, \"mèo thích/cần\".",
            "file": "PT1-A23-MS-genjutsu-lite.mp4 (724×1292, 15 s)",
            "caption": "The box lands. The cat bolts. 📦😹\nThen the wall gets a little makeover.\nWhat would your cat climb first? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #CatsOfInstagram",
            "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/PT1-A23-MS-genjutsu-lite.mp4"
          },
          {
            "id": "PT1A23-IG-FLOW",
            "title": "PT1-A23-FLOW · Product Crash (Google Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Chờ Amin duyệt rồi báo Muse đăng hoặc Amin tự đăng. Video AI: bật nhãn AI. Chưa review video (chưa kiểm set piece, mèo xuyên vật thể, chữ/logo). Cần xem trước khi duyệt. Không claim tải trọng, an toàn, lắp đặt, \"mèo thích/cần\".",
            "file": "PT1-A23-FLOW.mp4 (720×1280, 8 s)",
            "caption": "The box lands. The cat bolts. 📦😹\nThen the wall gets a little makeover.\nWhat would your cat climb first? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #CatsOfInstagram",
            "media": "1-dropship/workspace/whiskerwall/3-creative/videos/flow/PT1-A23-FLOW.mp4"
          }
        ]
      },
      "TT": {
        "name": "WhiskerWall",
        "handle": "@whiskerwall",
        "url": "https://www.tiktok.com/@whiskerwall",
        "description": "",
        "email": "",
        "category": "",
        "status": "Đã đăng bài đầu",
        "note": "Tài khoản @whiskerwall. Trạng thái kênh trong Excel ghi \"Đã tạo\"; chuyển thành \"Đã đăng bài đầu\" vì đã có bài Đã đăng theo thread Muse (chưa tự xác minh).\n\nMuse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): @whiskerwall 0 follower, 7 video, đủ 7/7 bài live.",
        "posts": [
          {
            "id": "KAN80-TT-A1",
            "title": "PT1-A1 · Your cat tree is eating your living room",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@whiskerwall/video/7705077723756055816",
            "date": "2026-11-06",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok chỉ hiện \"2 ngày trước\", giờ cụ thể chưa kiểm; caption và hashtag khớp; nhãn AI bật.",
            "file": "A1-final-claude.mp4 (bản Claude 12,7s, 720×1280, có nhạc)",
            "caption": "Your cat tree is eating your living room. 😹\n\nSmall apartment, big cat tree? Move your cat's climbing space up onto the wall — and get your floor back.\n\nGive your cat the wall, not the floor. 🐾\n\nWould your cat use this wall? Tell us in the comments 👇 Follow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-1-A1-your-cat-tree.mp4"
          },
          {
            "id": "KAN80-TT-A2",
            "title": "PT1-A2 · Cat on the counter again?",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@whiskerwall/video/7705618756126461191",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok chỉ hiện \"1 ngày trước\", giờ cụ thể chưa kiểm; caption và hashtag khớp; nhãn AI KHÔNG hiện.",
            "file": "Muse chưa ghi tên file (15s, 720×1280, có nhạc nền)",
            "caption": "Cat on the counter again? 😹\n\nGive your cat its own route up the wall — instead of your table, your shelves, your books.\n\nA climbing route made for your cat. 🐾\n\nWhere does your cat climb that it shouldn't? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-2-A2-cat-on-the-counter.mp4"
          },
          {
            "id": "KAN80-TT-A3",
            "title": "PT1-A3 · Cat furniture that looks like decor",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@whiskerwall/video/7705647888650603794",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok chỉ hiện \"1 ngày trước\", giờ cụ thể chưa kiểm; caption và hashtag khớp; nhãn AI KHÔNG hiện.",
            "file": "File gốc lấy từ Drive (15s, có nhạc)",
            "caption": "Cat furniture that fits your home instead of fighting it. Light-wood shelves for climbing, napping, and watching the world go by. Would this blend into your living room? Tell us in the comments 👇 Follow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-3-A3-decor.mp4"
          },
          {
            "id": "KAN80-TT-A13",
            "title": "PT1-A13 · Your floor, back.",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@whiskerwall/video/7705684519835241746",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok chỉ hiện \"1 ngày trước\", giờ cụ thể chưa kiểm; caption và hashtag khớp; nhãn AI bật.",
            "file": "A13-final-v2.mp4 (720×1280, 15s)",
            "caption": "Your floor, back. 🐾\nTake the climbing off the floor and put it on the wall.\nDoes your cat tree own half your living room? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-4-A13-your-floor-back.mp4"
          },
          {
            "id": "KAN80-TT-A15",
            "title": "PT1-A15 · Spot the cat furniture.",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@whiskerwall/video/7705715152284585234",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok chỉ hiện \"1 ngày trước\", giờ cụ thể chưa kiểm; caption và hashtag khớp; nhãn AI bật (lúc đăng ghi tắt, có thể TikTok tự gắn).",
            "file": "A15-final-v2.mp4",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-5-A15-spot-the-furniture.mp4"
          },
          {
            "id": "KAN80-TT-A21",
            "title": "PT1-A21 · The Cat Will See You Now",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@whiskerwall/video/7705694532058270994",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok chỉ hiện \"1 ngày trước\", giờ cụ thể chưa kiểm; caption và hashtag khớp; nhãn AI bật.",
            "file": "A21v3-draft-music-hook.mp4 (480×854, 15s)",
            "caption": "Welcome to my wall. 🐾\nYour cat gives you a tour of the wall — wave, ta-da, and a peek at the shelves. 👀\nWhich stop on the tour would your cat claim first? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-6-A21-welcome-to-my-wall.mp4"
          },
          {
            "id": "KAN80-TT-A22",
            "title": "PT1-A22 · Mèo nhảy 30s (object swap)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@whiskerwall/video/7705731309187910920",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok chỉ hiện \"1 ngày trước (video 29 giây)\", giờ cụ thể chưa kiểm; caption và hashtag khớp; nhãn AI bật (lúc đăng ghi tắt, có thể TikTok tự gắn).",
            "file": "A22-genjutsu-objectswap-30s-720p.mp4 (33 MB)",
            "media": "1-dropship/workspace/product-test-1/3-creative/round-4/gen-genjutsu/A22-genjutsu-objectswap-30s-720p.mp4"
          },
          {
            "id": "PT1A23-TT-MS",
            "title": "PT1-A23-MS · Product Crash (Genjutsu Lite, 15 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Chờ Amin duyệt rồi báo Muse đăng hoặc Amin tự đăng. Video AI: bật nhãn AI. KHÔNG qua kiểm tra của Muse: còn giọng đọc cá cảnh của clip nguồn, logo Apple trên laptop, camera zoom, mèo bị kéo giãn. Chỉ đăng nếu sửa/duyệt. Không claim tải trọng, an toàn, lắp đặt, \"mèo thích/cần\".",
            "file": "PT1-A23-MS-genjutsu-lite.mp4 (724×1292, 15 s)",
            "caption": "The box lands. The cat bolts. 📦😹\nThen the wall gets a little makeover.\nWhat would your cat climb first? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/PT1-A23-MS-genjutsu-lite.mp4"
          },
          {
            "id": "PT1A23-TT-FLOW",
            "title": "PT1-A23-FLOW · Product Crash (Google Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Chờ Amin duyệt rồi báo Muse đăng hoặc Amin tự đăng. Video AI: bật nhãn AI. Chưa review video (chưa kiểm set piece, mèo xuyên vật thể, chữ/logo). Cần xem trước khi duyệt. Không claim tải trọng, an toàn, lắp đặt, \"mèo thích/cần\".",
            "file": "PT1-A23-FLOW.mp4 (720×1280, 8 s)",
            "caption": "The box lands. The cat bolts. 📦😹\nThen the wall gets a little makeover.\nWhat would your cat climb first? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "1-dropship/workspace/whiskerwall/3-creative/videos/flow/PT1-A23-FLOW.mp4"
          }
        ]
      },
      "YT": {
        "name": "WhiskerWallMinh",
        "handle": "@WhiskerWall · UCF4hA2TXHjIG7TSCUxI3oVw",
        "url": "https://www.youtube.com/@WhiskerWall",
        "description": "",
        "email": "",
        "category": "",
        "status": "Đã đăng bài đầu",
        "note": "Kênh WhiskerWall (UCF4hA2TXHjIG7TSCUxI3oVw). Trạng thái kênh trong Excel ghi \"Đã tạo\"; chuyển thành \"Đã đăng bài đầu\" vì đã có bài Đã đăng theo thread Muse (chưa tự xác minh).\n\nMuse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): kênh 3 subs, 7 Shorts, đủ 7/7 bài live; tên hiển thị \"WhiskerWallMinh\".",
        "posts": [
          {
            "id": "KAN80-YT-A1",
            "title": "PT1-A1 · Your cat tree is eating your living room",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/ooEhv4Hnx2I",
            "date": "2026-11-06",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube chỉ hiện ngày đăng, không hiện giờ; 1.489 lượt xem; mô tả khớp, nhãn AI bật.",
            "file": "A1-final-claude.mp4 (bản Claude 12,7s, 720×1280, có nhạc)",
            "caption": "Your cat tree is eating your living room. 😹\n\nSmall apartment, big cat tree? Move your cat's climbing space up onto the wall — and get your floor back.\n\nGive your cat the wall, not the floor. 🐾\n\nWould your cat use this wall? Tell us in the comments 👇 Follow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-1-A1-your-cat-tree.mp4"
          },
          {
            "id": "KAN80-YT-A2",
            "title": "PT1-A2 · Cat on the counter again?",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/nmupCyzBysk",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube chỉ hiện ngày đăng, không hiện giờ; 1.220 lượt xem; mô tả khớp, nhãn AI bật.",
            "file": "Muse chưa ghi tên file (15s, 720×1280, có nhạc nền)",
            "caption": "Cat on the counter again? 😹\n\nGive your cat its own route up the wall — instead of your table, your shelves, your books.\n\nA climbing route made for your cat. 🐾\n\nWhere does your cat climb that it shouldn't? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-2-A2-cat-on-the-counter.mp4"
          },
          {
            "id": "KAN80-YT-A3",
            "title": "PT1-A3 · Cat furniture that looks like decor",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/ZpOmxq52Lls",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube chỉ hiện ngày đăng, không hiện giờ; 11 lượt xem; mô tả khớp, nhãn AI bật.",
            "file": "File gốc lấy từ Drive (15s, có nhạc)",
            "caption": "Cat furniture that fits your home instead of fighting it. Light-wood shelves for climbing, napping, and watching the world go by. Would this blend into your living room? Tell us in the comments 👇 Follow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-3-A3-decor.mp4"
          },
          {
            "id": "KAN80-YT-A13",
            "title": "PT1-A13 · Your floor, back.",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/qcopP-PeB3s",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube chỉ hiện ngày đăng, không hiện giờ; 1.096 lượt xem; mô tả khớp, nhãn AI bật.",
            "file": "A13-final-v2.mp4 (720×1280, 15s)",
            "caption": "Your floor, back. 🐾\nTake the climbing off the floor and put it on the wall.\nDoes your cat tree own half your living room? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-4-A13-your-floor-back.mp4"
          },
          {
            "id": "KAN80-YT-A15",
            "title": "PT1-A15 · Spot the cat furniture.",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/5yDbUX2xLgw",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube chỉ hiện ngày đăng, không hiện giờ; 4 lượt xem; mô tả khớp, nhãn AI bật.",
            "file": "A15-final-v2.mp4",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-5-A15-spot-the-furniture.mp4"
          },
          {
            "id": "KAN80-YT-A21",
            "title": "PT1-A21 · The Cat Will See You Now",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://youtube.com/shorts/8Og2zUgGzIs",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube chỉ hiện ngày đăng, không hiện giờ; 5 lượt xem, tiêu đề \"The Cat Will See You Now\"; mô tả khớp, nhãn AI bật.",
            "file": "A21v3-draft-music-hook.mp4 (480×854, 15s)",
            "caption": "Welcome to my wall. 🐾\nYour cat gives you a tour of the wall — wave, ta-da, and a peek at the shelves. 👀\nWhich stop on the tour would your cat claim first? Tell me in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "0-dashboard/task-hub/KAN-80/output/instagram-reels/IG-6-A21-welcome-to-my-wall.mp4"
          },
          {
            "id": "KAN80-YT-A22",
            "title": "PT1-A22 · Mèo nhảy 30s (object swap)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://youtube.com/shorts/A1-IXzIJ5tQ",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube chỉ hiện ngày đăng, không hiện giờ; 4 lượt xem; không thấy claim trên trang công khai, nhưng Studio từng báo \"Claimed content found\" do nhạc gốc (chưa kiểm lại vì không đăng nhập); mô tả khớp, nhãn AI bật.",
            "file": "A22-genjutsu-objectswap-30s-720p.mp4 (33 MB)",
            "media": "1-dropship/workspace/product-test-1/3-creative/round-4/gen-genjutsu/A22-genjutsu-objectswap-30s-720p.mp4"
          },
          {
            "id": "PT1A23-YT-MS",
            "title": "PT1-A23-MS · Product Crash (Genjutsu Lite, 15 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Chờ Amin duyệt rồi báo Muse đăng hoặc Amin tự đăng. Video AI: bật nhãn AI. KHÔNG qua kiểm tra của Muse: còn giọng đọc cá cảnh của clip nguồn, logo Apple trên laptop, camera zoom, mèo bị kéo giãn. Chỉ đăng nếu sửa/duyệt. Không claim tải trọng, an toàn, lắp đặt, \"mèo thích/cần\".",
            "file": "PT1-A23-MS-genjutsu-lite.mp4 (724×1292, 15 s)",
            "caption": "The box lands. The cat bolts. 📦😹\nThen the wall gets a little makeover.\nWhat would your cat climb first? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "1-dropship/workspace/whiskerwall/3-creative/videos/higgsfield/final/PT1-A23-MS-genjutsu-lite.mp4"
          },
          {
            "id": "PT1A23-YT-FLOW",
            "title": "PT1-A23-FLOW · Product Crash (Google Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Chờ Amin duyệt rồi báo Muse đăng hoặc Amin tự đăng. Video AI: bật nhãn AI. Chưa review video (chưa kiểm set piece, mèo xuyên vật thể, chữ/logo). Cần xem trước khi duyệt. Không claim tải trọng, an toàn, lắp đặt, \"mèo thích/cần\".",
            "file": "PT1-A23-FLOW.mp4 (720×1280, 8 s)",
            "caption": "The box lands. The cat bolts. 📦😹\nThen the wall gets a little makeover.\nWhat would your cat climb first? Tell us in the comments 👇\nFollow WhiskerWall for more small-space cat ideas.",
            "hashtags": "#CatWall #CatFurniture #SmallApartment #CatLover #IndoorCat",
            "media": "1-dropship/workspace/whiskerwall/3-creative/videos/flow/PT1-A23-FLOW.mp4"
          }
        ]
      }
    },
    "tasks": [
      {
        "id": "t-kan80",
        "key": "KAN-80",
        "title": "[Social] Xây kênh Facebook & YouTube cho store kệ leo tường cho mèo",
        "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-80",
        "status": "Done",
        "note": "Hub: task-hub/KAN-80. Excel: output/KAN-80-social-post-tracker.xlsx. Gói Instagram Reel: output/instagram-reels/. Review Day 3 vào sáng 09/11.",
        "agents": [
          {
            "id": "a80-1",
            "kind": "Claude",
            "name": "KAN-80 · Social channels · Cat wall shelves",
            "url": "claude://claude.ai/epitaxy/local_7a11bcaf-0a7f-47fc-b9c9-8af2df4b902a",
            "role": "Cập nhật tab Social, Excel, Jira, Bảng điều khiển",
            "state": "Idle",
            "note": "Đã đồng bộ 15 bài đã đăng. Còn thiếu: caption A15/A22, xác nhận A15/A22 đã đăng."
          },
          {
            "id": "a80-2",
            "kind": "Muse",
            "name": "Muse · thread KAN-80",
            "url": "https://muse.ai/thread/8983fff5-ff3d-4222-9a19-ee59f4f87ac6",
            "role": "Đăng bài FB/TikTok/YouTube, ghi bảng tracking",
            "state": "Đang chạy",
            "note": "Hẹn đăng A15 ~15:30 và A22 ~16:30 ngày 08/11 (chưa xác nhận đã đăng). Muse tự ghi bảng tracking và file noi-dung-da-dang.md."
          },
          {
            "id": "a80-3",
            "kind": "Amin",
            "name": "Amin",
            "url": "",
            "role": "Duyệt, đăng tay Instagram",
            "state": "Chờ Amin",
            "note": "Tạo tài khoản Instagram, đăng 6 Reel theo output/instagram-reels/README.md. Quyết định A21/A22."
          }
        ]
      },
      {
        "id": "t-kan83",
        "key": "KAN-83",
        "title": "Web Store Hub (quản lý store, đồng bộ dữ liệu)",
        "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-83",
        "status": "Done",
        "note": "Task chung cho cả 3 store. Hub: task-hub/KAN-83. Code: 1-dropship/store-hub. Supabase chờ Amin duyệt bản local.",
        "agents": [
          {
            "id": "a83-1",
            "kind": "Claude",
            "name": "KAN-83 · Store Hub (session đang làm web)",
            "url": "",
            "role": "Dựng web, nhập seed, checklist, video",
            "state": "Đang chạy",
            "note": "Xong giai đoạn 2 (checklist, video, task & agent). Chờ Amin duyệt bản local rồi chọn project Supabase."
          },
          {
            "id": "a83-2",
            "kind": "Claude",
            "name": "Amin dashboard (fork 3)",
            "url": "claude://claude.ai/epitaxy/local_31f67b50-fd30-43af-afd1-2e131ee75abe",
            "role": "Session điều phối, giao KAN-83",
            "state": "Idle",
            "note": "Nhận báo cáo từ session KAN-83."
          },
          {
            "id": "a83-3",
            "kind": "Amin",
            "name": "Amin",
            "url": "",
            "role": "Duyệt bản local, chọn Supabase",
            "state": "Chờ Amin",
            "note": ""
          }
        ]
      }
    ],
    "seedRev": 11,
    "productImages": [
      {
        "src": "1-dropship/workspace/whiskerwall/3-creative/refs/product/g01.jpg",
        "label": "Ảnh nguồn SucceBuy g01"
      },
      {
        "src": "1-dropship/workspace/whiskerwall/3-creative/refs/product/g02.jpg",
        "label": "Ảnh nguồn SucceBuy g02"
      },
      {
        "src": "1-dropship/workspace/whiskerwall/3-creative/refs/product/g03.jpg",
        "label": "Ảnh nguồn SucceBuy g03"
      },
      {
        "src": "1-dropship/workspace/whiskerwall/3-creative/refs/product/g04.jpg",
        "label": "Ảnh nguồn SucceBuy g04"
      },
      {
        "src": "1-dropship/workspace/whiskerwall/3-creative/refs/product/g05.jpg",
        "label": "Ảnh nguồn SucceBuy g05"
      },
      {
        "src": "1-dropship/workspace/whiskerwall/3-creative/refs/product/g06.jpg",
        "label": "Ảnh nguồn SucceBuy g06"
      }
    ]
  },
  {
    "id": "aquanest",
    "name": "AquaNest",
    "product": "R7-02 Custom aquarium lid · nắp bể cá rimless",
    "jira": "KAN-81, KAN-89",
    "market": "US",
    "status": "Đang làm",
    "email": "aquanest.shop@gmail.com",
    "domain": "aquanest.com đã có người dùng (kiểm 2026-11-08); aquanest.store lúc kiểm trống nhưng Amin báo đã bị lấy; chưa mua tên miền nào",
    "updated": "2026-11-10",
    "note": "Tên store AquaNest và email do Amin chọn 2026-11-08 (email chưa xác minh đã tạo/còn trống). Chưa kiểm nhãn hiệu. Tên khác đã cân nhắc: TankTrove, TideNook. Thông tin Page/YouTube/avatar là ĐỀ XUẤT chờ Amin duyệt. Chưa SKU, supplier, báo giá, mẫu nên không ghi giá, spec, link mua. Nguồn: artifact R7-02 Custom aquarium lid + KAN-81-social-post-tracker.xlsx.",
    "productInfo": [
      {
        "n": 1,
        "group": "Nhận diện",
        "name": "Tên sản phẩm",
        "value": "Custom aquarium lid: nắp lưới/polycarbonate cho bể rimless, cắt theo model bể",
        "evidence": "hypothesis",
        "source": "MR-20261024-R7.xlsx dòng R7-02",
        "date": "2026-10-26"
      },
      {
        "n": 2,
        "group": "Nhận diện",
        "name": "Ngành hàng",
        "value": "Thú cưng/thủy sinh, phụ kiện bể cá biển (reef)",
        "evidence": "hypothesis",
        "source": "MR-20261024-R7.xlsx dòng R7-02",
        "date": "2026-10-26"
      },
      {
        "n": 3,
        "group": "Nhận diện",
        "name": "Mô tả ngắn và hình thái",
        "value": "Tấm lưới hoặc polycarbonate cắt CNC theo đúng model bể rimless (Waterbox, Red Sea, UNS, Innovative Marine). Chưa có SKU hay mẫu; hình thái theo sản phẩm của đối thủ",
        "evidence": "hypothesis",
        "source": "MR-20261024-R7.xlsx dòng R7-02",
        "date": "2026-10-26"
      },
      {
        "n": 4,
        "group": "Khách hàng",
        "name": "Khách hàng mục tiêu",
        "value": "Người nuôi cá biển dùng bể rimless hở",
        "evidence": "hypothesis",
        "source": "MR-20261024-R7.xlsx dòng R7-02",
        "date": "2026-10-26"
      },
      {
        "n": 5,
        "group": "Khách hàng",
        "name": "Vấn đề giải quyết",
        "value": "Cá nhảy khỏi bể hở; nắp kính chặn sáng và giữ nhiệt; kit lưới DIY trông xấu (trích Reef2Reef trong R7)",
        "evidence": "competitor_observation",
        "source": "MR-20261024-R7.xlsx dòng R7-02",
        "date": "2026-10-26"
      },
      {
        "n": 6,
        "group": "Tư liệu",
        "name": "Ảnh sản phẩm (đúng sản phẩm)",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 7,
        "group": "Tư liệu",
        "name": "Video demo hoặc hướng dẫn",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 8,
        "group": "Nguồn hàng",
        "name": "Nhà cung cấp (link listing)",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 9,
        "group": "Nguồn hàng",
        "name": "Báo giá thật bằng văn bản",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 10,
        "group": "Giá",
        "name": "Giá mua ước tính",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 11,
        "group": "Giá",
        "name": "Phí ship, landed cost ước tính",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 12,
        "group": "Giá",
        "name": "Giá bán dự kiến",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 13,
        "group": "Giá",
        "name": "Biên gộp ước tính",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 14,
        "group": "Vật lý",
        "name": "Kích thước, cân nặng",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 15,
        "group": "Vật lý",
        "name": "Vật liệu, thông số",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 16,
        "group": "Cách dùng",
        "name": "Cách dùng, lắp đặt",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 17,
        "group": "Thị trường",
        "name": "Đối thủ chính và giá",
        "value": "Kraken Reef US$89–469; ClearView Lids từ US$118; Top Lids US$180–530 theo size",
        "evidence": "competitor_observation",
        "source": "MR-20261024-R7.xlsx dòng R7-02 (kiểm 24/10/2026)",
        "date": "2026-10-26"
      },
      {
        "n": 18,
        "group": "Thị trường",
        "name": "Bằng chứng ads (Ad Library)",
        "value": "Ad Library US: Kraken Reef ~12 ad active, sớm nhất 13/10/2025; Toplids ~40 ad active, sớm nhất hiển thị 18/11/2025; ClearView ~3 ad active. Kiểm lại 26/10/2026: Kraken Reef 4 ad, Toplids nhiều ad video đang chạy",
        "evidence": "competitor_observation",
        "source": "R7 24/10/2026 + Meta Ads Library MCP 26/10/2026",
        "date": "2026-10-26"
      },
      {
        "n": 19,
        "group": "Rủi ro",
        "name": "Claim được và không được",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 20,
        "group": "Rủi ro",
        "name": "Rủi ro, quy định",
        "value": "Hàng đặt riêng không hoàn trả (đối thủ ghi rõ), tấm khổ lớn dễ trầy/nứt khi ship quốc tế, bể lớn tới ~183 cm là cồng kềnh, phải dựng thư viện file cắt từ đầu",
        "evidence": "hypothesis",
        "source": "MR-20261024-R7.xlsx dòng R7-02",
        "date": "2026-10-26"
      },
      {
        "n": 21,
        "group": "Đối thủ ref",
        "name": "Facebook page ref (đối thủ)",
        "value": "",
        "evidence": "",
        "source": "Chưa có link Facebook page của Kraken Reef/Toplids/ClearView trong dữ liệu. Cần thêm.",
        "date": ""
      },
      {
        "n": 22,
        "group": "Đối thủ ref",
        "name": "Web ref (đối thủ)",
        "value": "https://krakenreef.com/products/red-sea-max-130d-lid\nhttps://www.clearviewlids.com/products/custom-clearview-lid",
        "evidence": "competitor_observation",
        "source": "Kraken Reef và ClearView Lids, link sản phẩm trong trang Market Research (market-research/index.html), MR-20261024-R7.xlsx dòng R7-02 và trang Market Research (kiểm 24/10/2026). Chưa mở kiểm trong phiên này.",
        "date": "2026-11-10"
      },
      {
        "n": 23,
        "group": "Đối thủ ref",
        "name": "Ads ref (đối thủ)",
        "value": "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=Kraken%20Reef&search_type=keyword_unordered",
        "evidence": "competitor_observation",
        "source": "Link tìm kiếm Ad Library theo từ khóa \"Kraken Reef\" (không phải link ad cụ thể; ~4 ad active ngày 26/10/2026 theo dòng 18). Cần thay bằng Library ID/page id khi có. Chưa mở kiểm.",
        "date": "2026-11-10"
      }
    ],
    "creative": [
      {
        "id": "R7-V01",
        "title": "Dark room, bể cá rạn LED xanh, đặt nắp lên bể",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Motion Transfer (thay nắp trong video nguồn)",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Higgsfield; model: hf_mult_motion_control (Higgsfield Genjutsu · Motion Transfer); Quality 720p · 16 s · 9:16 · generate_audio: false (file vẫn có audio, nguồn âm thanh Cần xác minh); credit: 0 credit (giao dịch 14:46:05 UTC ghi 0); Cổng C: chưa qua; Lưu ý: Video nguồn do bên thứ ba (chưa rõ chủ sở hữu), cần kiểm quyền dùng.; Lưu ý: Ảnh reference 32427aaf theo mô tả của Higgsfield (ở video 3, 6) là nắp acrylic có lưới trắng, hai lỗ tròn: chưa xác nhận đó là sản phẩm của mình.. File: hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
        "kit": {
          "tool": "Higgsfield",
          "config": "hf_mult_motion_control (Higgsfield Genjutsu · Motion Transfer) · Quality 720p · 16 s · 9:16 · generate_audio: false (file vẫn có audio, nguồn âm thanh Cần xác minh) · 0 credit (Fact, từ lịch sử Higgsfield 26/10/2026)",
          "prompt": "Prompt gửi lên: Replace the lid shown in the source video with the product from the attached reference image, matching its shape exactly. Keep camera, timing and lighting. Remove all logos, watermarks and on-screen text.\n\n(Không có enhanced prompt trong params.)",
          "extra": [
            {
              "label": "Link Higgsfield",
              "text": "https://higgsfield.ai/asset/video/cd819882-416e-41ec-9e95-6460dbd9bb5e"
            },
            {
              "label": "Ref (đã kiểm Higgsfield)",
              "text": "Ảnh ref = 32427aaf (jpg; dung lượng khớp ảnh Amin gửi 09/11, 274394 byte). Video ref = e9e2e58b (video nguồn bên thứ ba, cần kiểm quyền dùng; đã tải về Drive 09/11/2026). Video ref V01 đã lưu local (file Amin gửi). Nguồn: Kiểm lại trên Higgsfield 09/11/2026 (Fact)."
            }
          ],
          "referenceVideo": [
            "1-dropship/workspace/aquanest/3-creative/refs/videos-nguon/R7-V01-source-e9e2e58b.mp4"
          ],
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/32427aaf-ref-image.jpg"
          ]
        }
      },
      {
        "id": "R7-V02",
        "title": "Camera POV, hook Product Crash, phòng ngủ",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Camera POV (camera an ninh bể cá trong phòng ngủ)",
        "hook": "Product Crash: sản phẩm rơi từ trên xuống làm đổ vỡ lộn xộn, hình ảnh sắc gắt, rồi cắt sang cảnh sạch gọn nơi một người bình thản bắt đầu review.",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Higgsfield; model: marketing_studio_v2_video (Higgsfield Marketing Studio · Video); 480p · 15 s · 9:16 · generate_audio: true · bitrate Standard; credit: 45 credit (giao dịch 15:10:57 UTC). Cùng buổi có 1 lượt 45 credit lúc 15:04:29 đã hoàn lại lúc 15:08:24 (gắn với video này là suy luận).; Review sơ bộ (không phải review độc lập): Khá tốt; Cổng C: chưa qua; Lưu ý: Lời thoại có claim chưa xác minh (vừa bể, thoáng khí, chắn bụi/nước bắn).; Lưu ý: Tracker ghi \"Không có History match\": SAI, job khớp Marketing Studio theo ID và theo giờ.. File: hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
        "kit": {
          "tool": "Higgsfield",
          "config": "marketing_studio_v2_video (Higgsfield Marketing Studio · Video) · 480p · 15 s · 9:16 · generate_audio: true · bitrate Standard · 45 credit (Fact, từ lịch sử Higgsfield 26/10/2026)",
          "prompt": "Prompt người dùng: Trống (để trống).\nMode: camera_pov · seed 313769444\nHook preset \"Product Crash\": The product itself falls from above and destroyed, creating chaos; harsh sharpness leads to a perfectly clean and restored scene where a person calmly begins reviewing the product.\nSetting preset \"Bedroom\": On bed or propped against pillows, soft window light. Unmade bed, cozy textures. Relaxed morning or evening wind-down vibe — honest, low-effort feel.\n\nLời thoại Higgsfield sinh: \"That clear polycarbonate aquarium lid fit my tank perfectly, and I can feed through the hole without taking the whole top off.\" / \"The vent mesh keeps airflow going, but it still blocks dust and splashes.\"\n\nEnhanced prompt do Higgsfield tự sinh (Fact, đọc 09/11/2026; lời thoại có claim chưa xác minh, không dùng lại):\n**Format & Look**\nFound-footage bedroom security cam POV, static corner-mounted fisheye, 9:16 vertical, 1080p. On-screen overlays: small blinking red REC dot + 'CAM 3' label (no clock). Mild compression blocks, slight rolling shutter, occasional autofocus hunt, realistic sensor noise. One locked wide shot for all scenes (no digital crop).\n\n**Lenses & Filtration**\nFixed 2.8mm equivalent fisheye (security cam). No cinematic DOF. Slight vignette, minor lens smudge/dust specs.\n\n**Grade / Palette**\nLo-fi home cam color: cool-neutral shadows, slightly green aquarium cast, lifted blacks, modest contrast. Brief 'harsh sharpness' over-processed glitch during the HOOK transition, then returns to normal.\n\n**Lighting & Atmosphere**\nSoft window light washing across an unmade bed; gentle falloff, cozy low-effort realism. Aquarium light adds subtle rippling caustics on nearby fabric. Tiny floating dust motes visible in the window beam.\n\n**Location & Framing**\nSETTING: On bed or propped against pillows, soft window light. Unmade bed, cozy textures. Relaxed morning/evening wind-down vibe. In frame: bed dominates foreground; a small glass aquarium sits on a bedside table close to the bed edge. Camera is high in a corner, angled down to capture bed + nightstand aquarium in the same wide frame.\n\n**Wardrobe / Props / Extras**\nHero object: @Image1 (Custom Cut 6mm clear polycarbonate aquarium lid with optional split panel vent mesh and feeding hole) present in-scene as a real physical item (not a graphic). Small aquarium (water, plants, small fish), fish food container, a measuring tape, microfiber cloth, a cup of water on the bed, pillows/blanket in disarray. One adult (gender-neutral) in comfy loungewear/hoodie; face not emphasized (seen from side/back in wide).\n\n**Sound**\nDiegetic: faint room tone, distant traffic/birds, bed fabric rustle, plastic clatter, a quick water spill splash, fish tank filter/bubbles hum.\nVO (owner-style, reviewing the clip later; casual American English):\n- 'That clear polycarbonate aquarium lid fit my tank perfectly, and I can feed through the hole without taking the whole top off.'\n- 'The vent mesh keeps airflow going, but it still blocks dust and splashes.'\n\n**Optimized Shot List (4 shots / 15s total)**\nScene 1, 0.0s-3.0s: HOOK plays immediately in the locked wide security-cam view: @Image1 drops from above into frame, slams onto the unmade bed and skids hard, knocking into the cup and fish food container; water splashes across the blanket and pellets scatter—instant chaos. The camera image momentarily goes over-sharpened and crunchy (harsh sharpness), with a jittery glitch as @Image1 rattles to a stop and the loose feeding-hole ring/insert piece clacks nearby.\nScene 2, 3.0s-7.0s: Hard cut within the same locked angle to a perfectly clean, restored bed scene (no spill, pellets gone). @Image1 now lies neatly on the bed near the pillows. The person calmly sits up against pillows, reaches for @Image1, and checks the edges with a measuring tape—subtle nod that it's custom-sized; aquarium continues bubbling on the nightstand.\nScene 3, 7.0s-11.0s: Still in the same wide frame, the person leans to the nightstand and installs @Image1 on the aquarium—@Image1 settles flush on the tank rim, clearly aligned and stable. The clear panel shows the waterline and fish unobstructed; slight reflections move naturally as the person adjusts the split panel/vent mesh section.\nScene 4, 11.0s-15.0s: Payoff in the same wide frame: with @Image1 seated, the person opens the feeding hole on @Image1 and sprinkles a small pinch of food; fish rise to nibble near the surface. A faint wisp of humid air escapes near the vent mesh while the lid stays in place. Owner VO over this moment: 'That clear polycarbonate aquarium lid fit my tank perfectly, and I can feed through the hole without taking the whole top off.' Then: 'The vent mesh keeps airflow going, but it still blocks dust and splashes.' Motion continues to the end (fish swimming, bubbles, slight hand movement), no freeze tail.\n\n**Camera Notes (Why It Reads)**\n- One locked, corner fisheye view sells authentic security-cam proof.\n- The HOOK chaos (drop + clatter + spill) creates a strong before/after contrast, then the clean cut signals 'reviewing the clip later.'\n- Clear state change: @Image1 goes from handled-on-bed to seated flush on the aquarium, then feeding-hole use shows convenience without removing the lid.\n\n**Finishing**\nseedance_2_0, 15s, 9:16, 1080p, declined_preset_id: 24bae836-2c4a-48e0-89b6-49fcc0b21612, medias: [product]. Router: General product | Ensure REC dot + 'CAM 3' label visible throughout | No clock | No digital crop | Keep @Image1 the same unit in all scenes.",
          "extra": [
            {
              "label": "Link Higgsfield",
              "text": "https://higgsfield.ai/asset/video/0996a104-eeb3-4129-9609-d138a15a2707"
            },
            {
              "label": "Ref (đã kiểm Higgsfield)",
              "text": "Product 11d85c81 \"Custom Cut Polycarbonate Aquarium Lid…\" với 1 ảnh listing (19300668). Params medias rỗng, avatars rỗng. Enhanced prompt ghi seedance_2_0, 15 s, 9:16, 1080p (theo chính prompt; params ghi 480p). Nguồn: Kiểm lại trên Higgsfield 09/11/2026 (Fact)."
            }
          ],
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/11d85c81-listing-image-19300668.jpg"
          ]
        }
      },
      {
        "id": "R7-V03",
        "title": "Cận bể rạn, ánh sáng tím xanh",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Object Swap (thay nắp trong video nguồn)",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Higgsfield; model: hf_mult_replace_object_flash (Higgsfield Genjutsu Lite · Object Swap); Quality 720p · duration 30 s · aspect_ratio: auto · generate_audio: false (file vẫn có audio, nguồn âm thanh Cần xác minh); credit: 0 credit (giao dịch 15:21:24 UTC ghi 0); Cổng C: chưa qua; Lưu ý: Video nguồn có end card logo (theo prompt Higgsfield): nguồn bên thứ ba, chưa rõ chủ sở hữu; cần kiểm quyền dùng.; Lưu ý: Tracker ghi nhóm ứng viên B/C/E/F: lịch sử giao dịch xác nhận là Genjutsu Lite Object Swap.. File: hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
        "kit": {
          "tool": "Higgsfield",
          "config": "hf_mult_replace_object_flash (Higgsfield Genjutsu Lite · Object Swap) · Quality 720p · duration 30 s · aspect_ratio: auto · generate_audio: false (file vẫn có audio, nguồn âm thanh Cần xác minh) · 0 credit (Fact, từ lịch sử Higgsfield 26/10/2026)",
          "prompt": "Prompt gửi lên: Replace the lid shown in the source video with the product from the attached reference image, matching its shape exactly. Keep camera, timing and lighting. Remove all logos, watermarks and on-screen text.\n\nEnhanced prompt (Higgsfield tự sinh từ prompt + ref):\nTASK\nEdit Video 1. Replace the clear acrylic and mesh aquarium lid in shots 1–3 with the lid product in Image 1, matching its shape exactly: a clear rectangular acrylic sheet, a large rounded rectangular fine-mesh center panel, a stepped left-side notch, and two circular access holes along the left edge. Remove all logos, watermarks, decals, labels, URLs, and on-screen text, including the final logo card. Video 1 controls the original performance, blocking, interactions, camera movement, framing, cuts and timing; everything outside the listed replacements keeps its look from Video 1.\n\nREFERENCES\nImage 1: clear rigid acrylic aquarium lid with a thin transparent rectangular perimeter, rounded fine-mesh panel, stepped side notch, and two circular access holes; use this lid shape exactly; ignore the hand and the secondary aquarium image.\n\nSOURCE VIDEO\nVideo 1 shows close views of an aquarium lid over a reef tank, side and low-angle tank views with fish, a dosing-station view, then a graphic end card. Keep all hard cuts, camera moves, timing, aquarium lighting, reflections, and water motion exactly in place.\n\nSHOTS\nShot 1 (0.0–10.6s, continuous): Close high angle tracks right across the replacement lid in the foreground, then tilts down into the reef tank. The transparent lid fills the upper frame, resting flat on the glass rim; its mesh panel, stepped left notch, and circular access holes stay rigid and exact. hard cut\nShot 2 (10.6–18.6s, hard cut): Medium side tank view tracks right-to-left. The replacement lid spans the upper third on the glass rim while the blue tang crosses central rockwork and the yellow tang remains low left. hard cut\nShot 3 (18.6–24.5s, hard cut): Low close-up glides beneath the overhead lights along the replacement lid, then tilts down to the blue tang beneath the water surface. Keep the lid’s clear flat sheet, fine mesh rectangle, left stepped notch, and circular holes intact. hard cut\nShot 4 (24.5–27.5s, hard cut): Straight-on medium view slowly tilts upward from the dosing containers to the lower reef tank. Remove the cabinet decal and all readable markings; leave the white fascia blank. hard cut\nShot 5 (27.5–30.0s, hard cut): Full-screen static light gray-white end card. Remove the badge, URL, and every graphic element; show only a clean blank background.\n\nPROPS\nThe replacement lid is one thin, rigid, transparent acrylic piece in every frame, flat on the tank rim. Its fine white mesh is a single taut rounded rectangle, with one stepped notch and two clean circular access holes on its left side; no extra tabs, ports, text, or changing geometry.\n\nSETTING\nKeep the original reef aquarium location from Video 1, including blue actinic overhead light, cyan acrylic reflections, water ripples, live rock, corals, fish, and white equipment stand.\n\nNEGATIVE\nno logos, watermarks, decals, labels, URLs, readable text, gibberish text, source lid left over, warped acrylic, morphing or melting mesh, missing circular holes, extra access ports, extra people, duplicated fish, extra cuts, new camera moves, slow motion, subtitles, clean frame edge to edge.",
          "extra": [
            {
              "label": "Link Higgsfield",
              "text": "https://higgsfield.ai/asset/video/553022e5-87a4-474a-8352-f70bc9580f41"
            },
            {
              "label": "Ref (đã kiểm Higgsfield)",
              "text": "Ảnh ref = 32427aaf (jpg; dung lượng khớp ảnh Amin gửi 09/11, 274394 byte). Video ref = df12ee02 (video nguồn bên thứ ba, cần kiểm quyền dùng; đã tải về Drive 09/11/2026). Nguồn: Kiểm lại trên Higgsfield 09/11/2026 (Fact)."
            }
          ],
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/32427aaf-ref-image.jpg"
          ],
          "referenceVideo": [
            "1-dropship/workspace/aquanest/3-creative/refs/videos-nguon/R7-V03-source-df12ee02_trim.mp4"
          ]
        }
      },
      {
        "id": "R7-V04",
        "title": "UGC selfie testimonial, hook Spicy, ngoài trời",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC Selfie Testimonial (TikTok, ngoài trời)",
        "hook": "Spicy: cận xương quai xanh, nghiêng lên lộ gương mặt, lùi về khung selfie, im lặng một nhịp rồi vào lời giới thiệu sản phẩm.",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Higgsfield; model: marketing_studio_v2_video (Higgsfield Marketing Studio · Video); 480p · 12 s · 9:16 · generate_audio: true · bitrate Standard; credit: 36 credit (giao dịch 15:28:09 UTC); Review sơ bộ (không phải review độc lập): Tốt nhất trong 3 video; Cổng C: chưa qua; Lưu ý: Lời thoại có claim chưa xác minh (\"Clear 6mm\", sits flush, airflow, hết cá nhảy).; Lưu ý: Tracker gán setting rooftop và hook backflip cho file này: SAI, đó là video 5. File này là Nature / Spicy.. File: hf_20261026_152809_7cb2af00-ba9d-49dc-999a-d72422a27f29.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152809_7cb2af00-ba9d-49dc-999a-d72422a27f29.mp4",
        "kit": {
          "tool": "Higgsfield",
          "config": "marketing_studio_v2_video (Higgsfield Marketing Studio · Video) · 480p · 12 s · 9:16 · generate_audio: true · bitrate Standard · 36 credit (Fact, từ lịch sử Higgsfield 26/10/2026)",
          "prompt": "Prompt người dùng: Trống (để trống).\nMode: ugc_selfie_testimonial · seed 664095029\nHook preset \"Spicy\": The shot starts with an extreme close-up of a collarbone, slowly tilts up to reveal a flawless makeup look, then pulls back into selfie framing before a silent pause leads into the product pitch.\nSetting preset \"Nature\": Outdoors — trail, park, beach, or garden depending on product. Natural light, greenery or open sky. Active or peaceful mood — setting adapts to product.\n\nLời thoại Higgsfield sinh: \"Jumping fish? This fixed it.\" / \"Clear 6mm, custom-cut—sits flush.\" / \"Vent mesh, feeding hole—quick feeds, airflow.\" / \"If yours never fits—try it.\"\n\nEnhanced prompt do Higgsfield tự sinh (Fact, đọc 09/11/2026; lời thoại có claim chưa xác minh, không dùng lại):\n**Format & Look**\nVertical 9:16 UGC selfie testimonial, 2K, 24–30fps. Feels like a real creator filming outside on a walk and stopping to show an actual problem-solve. Natural skin texture (no plastic smoothing), micro-expressions, slight handheld shake. Product must match @Image1 exactly (clear custom-cut polycarbonate aquarium lid with optional split/vent mesh + feeding-hole cutout; no branding, no text). Creator identity must match @Image2 exactly throughout.\n\n**Lenses & Filtration**\nPhone front camera look (≈24–28mm equiv). Occasional quick autofocus breathe when switching from face to lid edge. No beauty filter; mild diffusion only (very subtle), keep pores/texture.\n\n**Grade / Palette**\nClean, modern outdoor color: true greens, warm skin, crisp highlights on the clear polycarbonate. Moderate contrast, avoid crushed blacks. Water/tank glass stays neutral-cool.\n\n**Lighting & Atmosphere**\nGolden-hour or bright open shade in a park/garden trail area. Soft sun rim on hair/cheek, gentle fill from sky. Light breeze + birds. Keep reflections on the clear lid controlled but realistic.\n\n**Location & Framing**\nSETTING lock: Outdoors (park/garden trail vibe). Film beside a small patio table or bench area along the trail with a clean, unbranded glass aquarium set up (plants visible), so the product makes sense in an outdoor lifestyle moment. Background: greenery, path, trees; no readable signs.\n\n**Wardrobe / Props / Extras**\nCreator wears the same style as @Image2: stylish outdoor fit with green top, blue/green jacket, gold jewelry; adult (mid-20s+). Props: the clear polycarbonate lid (hero, matches @Image1), a simple unbranded glass aquarium on a small outdoor table/bench, fish food pinch (no labels), optional vent mesh visible as a section of the lid. No brand logos, no readable text anywhere.\n\n**Sound**\nNatural on-camera VO in English, relaxed conversational pace (never rushed). Low background: breeze + birds + faint aquarium water trickle. Subtle chill beat under VO (very low).\nVO lines (total 20 words):\n- Scene 1: \"Jumping fish? This fixed it.\" (5 words)\n- Scene 2: \"Clear 6mm, custom-cut—sits flush.\" (4 words)\n- Scene 3: \"Vent mesh, feeding hole—quick feeds, airflow.\" (6 words)\n- Scene 4: \"If yours never fits—try it.\" (5 words)\n\n**Optimized Shot List (4 shots / 12s total)**\nScene 1 (0.0–4.0s) — HOOK (must play exactly):\n- Start on an extreme close-up of collarbone/upper chest (face not visible yet). The clear lid edge from @Image1 is already in play, catching light near the collarbone (held low, hands not near lens).\n- Slow tilt up to reveal the creator's flawless makeup look and expressive eyes.\n- Pull back into true selfie framing (head/shoulders), then a brief silent pause where she locks eye contact and raises one brow.\n- VO starts after the pause: \"Jumping fish? This fixed it.\" (5 words)\nAction: she slightly tilts the lid so it flashes its clarity; keep fingers away from lens.\n\nScene 2 (4.0–6.8s) — WHY IT MATTERS:\n- Selfie angle shifts downward/over-shoulder to include the aquarium on the outdoor table behind her. She places the lid on top in one smooth motion, showing it landing evenly with a neat, gap-free fit.\n- VO: \"Clear 6mm, custom-cut—sits flush.\" (4 words)\nAction: gentle tap on the lid corner to show stiffness/impact-resistant feel (no aggressive bending).\n\nScene 3 (6.8–9.6s) — THE DETAIL THAT SOLD THEM:\n- Tight close-up (still handheld) on the lid's functional area: show the vent mesh section and the feeding-hole cutout from @Image1. She slides/points to the split/mesh area, then drops a tiny pinch of food through the feeding hole (no mess).\n- VO: \"Vent mesh, feeding hole—quick feeds, airflow.\" (6 words)\nAction: quick glance back to camera with a satisfied half-smile while keeping product detail centered.\n\nScene 4 (9.6–12.0s) — WARM CTA (resolve before end, stay in motion):\n- Return to selfie framing with the aquarium clearly visible over her shoulder and the lid now on the tank. She nods, small thumbs-up near her chest (not toward lens), and lightly traces the lid edge in frame.\n- VO: \"If yours never fits—try it.\" (5 words)\n- Keep micro-motion through the end (smile settling, tiny nod, lid catching a last glint).\n\n**Camera Notes (Why It Reads)**\n- The HOOK is a pattern interrupt: collarbone close-up → tilt reveal → pullback → silent beat → immediate personal payoff.\n- Clear product visibility from frame 1 (lid edge glint), then proof on the tank (flush fit), then functional detail (vent mesh + feeding hole) to earn trust.\n- Each scene changes framing and action (reveal, placement proof, feature close-up, CTA nod) to avoid repetitive talking-head energy.\n- Keep hands low and never crossing/covering the lens; no text overlays; no logos; no readable packaging.\n\n**Finishing**\n12.0s total. Arc pays off: hook (jumpers) → fit proof → detail that sold it → friendly recommendation. Final tail settle lasts ~0.5s (11.5–12.0s) as her nod and smile naturally ease to rest with the lid and tank still clearly visible.",
          "extra": [
            {
              "label": "Link Higgsfield",
              "text": "https://higgsfield.ai/asset/video/7cb2af00-ba9d-49dc-999a-d72422a27f29"
            },
            {
              "label": "Ref (đã kiểm Higgsfield)",
              "text": "Product 11d85c81 \"Custom Cut Polycarbonate Aquarium Lid…\" với 1 ảnh listing (19300668). Params medias rỗng, avatars rỗng. Enhanced prompt nhắc \"@Image2\" (nhân vật mặc áo xanh lá, áo khoác xanh, trang sức vàng) nhưng params avatars rỗng và medias rỗng: nhân vật Higgsfield dùng không xác định được (chưa xác minh). Nguồn: Kiểm lại trên Higgsfield 09/11/2026 (Fact)."
            }
          ],
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/11d85c81-listing-image-19300668.jpg"
          ]
        }
      },
      {
        "id": "R7-V05",
        "title": "Mess to Fresh, hook Epic Fail, sân thượng",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Mess to Fresh (trước/sau, sân thượng)",
        "hook": "Epic Fail: người lộn ngược thất bại, ngã, rồi không dừng lại, lấy sản phẩm ra review bình thản.",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Higgsfield; model: marketing_studio_v2_video (Higgsfield Marketing Studio · Video); 480p · 12 s · 9:16 · generate_audio: true · bitrate Standard; credit: 36 credit (giao dịch 15:29:04 UTC); Review sơ bộ (không phải review độc lập): Hook tốt, sản phẩm sai hình; Cổng C: chưa qua; Lưu ý: Lời thoại có claim chưa xác minh (6mm, sturdy, flush, visibility).; Lưu ý: Tracker ghi \"Không có History match\": SAI, job khớp Marketing Studio theo ID và theo giờ.. File: hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
        "kit": {
          "tool": "Higgsfield",
          "config": "marketing_studio_v2_video (Higgsfield Marketing Studio · Video) · 480p · 12 s · 9:16 · generate_audio: true · bitrate Standard · 36 credit (Fact, từ lịch sử Higgsfield 26/10/2026)",
          "prompt": "Prompt người dùng: Trống (để trống).\nMode: mess_to_fresh · seed 1895963864\nHook preset \"Epic Fail\": A person performs an unsuccessful backflip, lands unsuccessfully, falls, and immediately, without pause, takes out the product and begins an unflappable review.\nSetting preset \"Roofing\": Person on the edge of a skyscraper rooftop, city skyline stretched out behind, wind moving through hair, sun catching the buildings. Casual product review with the entire city below, character completely unbothered by the height — selfie camera, golden hour or dusk, urban scale visible in every direction.\n\nLời thoại Higgsfield sinh: \"Anyway—look at this lid situation.\" / \"Salt creep, water spots… and it never fits right.\" / \"I swapped it for a custom-cut 6mm polycarbonate top—clear, sturdy, and made to match your tank size.\" / \"Watch the difference—flush edges, cleaner look, and full visibility again.\" / \"If your top looks like this, upgrade it—get the cut that fits your tank and keep maintenance easy.\"\n\nEnhanced prompt do Higgsfield tự sinh (Fact, đọc 09/11/2026; lời thoại có claim chưa xác minh, không dùng lại):\n**Format & Look**\n12s vertical (9:16), scroll-stopping before/after transformation with oddly-satisfying, physically-correct action. Cold open HOOK on a skyscraper rooftop in selfie-cam, then tight macro product satisfaction. No on-screen text, no captions, no graphics, no watermarks.\n\n**Lenses & Filtration**\n- Scene 1: 18–24mm handheld selfie lens (slight wide distortion for energy)\n- Scene 2: 35mm handheld + quick punch-ins\n- Scene 3: 60–100mm macro for peel/wipe reveal, plus a slow micro-zoom\n- Scene 4: 24–35mm for hero + environment scale\nFiltration: subtle circular polarizer to control reflections on clear polycarbonate; keep some specular highlights for \"clean\" sparkle.\n\n**Grade / Palette**\nGolden-hour warmth on skin + rooftop concrete, cool teal city shadows, aquarium glass kept neutral/clean. Crisp whites, high micro-contrast, controlled highlights to avoid blown glare on the clear lid.\n\n**Lighting & Atmosphere**\nNatural golden-hour sun with a soft bounce (white reflector) to lift shadows on hands/product. Wind audible and visible (hair/clothing flutter). Keep aquarium lighting softly on to make waterline and fish silhouettes readable.\n\n**Location & Framing**\nSETTING LOCK: Edge of a skyscraper rooftop with the city skyline stretching behind in every direction; urban scale visible. Golden hour/dusk feel. Selfie camera perspective featured. Aquarium set near a sturdy parapet/ledge so the skyline stays huge in frame.\n\n**Wardrobe / Props / Extras**\n- On-camera adult creator (generic; no identity cues), casual streetwear (hoodie or tee, windbreaker), hair moving in wind.\n- Aquarium: rimmed glass tank with visible waterline and a planted aquascape.\n- BEFORE lid: a cloudy, warped/ill-fitting old lid with obvious salt creep/mineral crust, fingerprints, dust, and water spots; slight gap at the back.\n- Product reference: @Image1 (custom-cut clear 6mm polycarbonate aquarium lid with optional split-panel vent mesh + circular feeding hole insert). Keep packaging minimal/unbranded; do not invent readable brand names or label copy.\n- Cleaning props: microfiber cloth, small spray bottle of plain water, plastic scraper/old card, paper towel.\n\n**Sound**\nWind + distant city ambience under everything. Crisp practical SFX: shoe scuff, THUD/slide from the fall (non-graphic), plastic sleeve crinkle, protective film peel, cloth wipe on glass, light tap on polycarbonate, soft squeak of clean glass rim. Music optional: very low, minimal beat beneath VO.\n\n**Optimized Shot List (4 shots / 12s total)**\nScene 1 (0.0s–3.0s) — BEFORE/PROBLEM + HOOK (play exactly)\n- Visual (selfie cam, wide): The creator on the rooftop edge with massive skyline behind attempts a backflip.\n- They under-rotate, land awkwardly, stumble, and fall onto the rooftop (safe, non-graphic). Without any pause, still in selfie framing, they calmly pull the clear polycarbonate aquarium lid product from a slim protective sleeve and start reviewing—completely unbothered by the height and the fall.\n- Quick cut within the same scene to an extreme close-up of the aquarium's nasty, crusted old lid: thick salt creep, cloudy smears, droplets baked on; the gap is visible.\n- Spoken audio (on-camera for the first beat, then continue as VO over the macro):\n  - Creator (selfie, unfazed): 'Anyway—look at this lid situation.'\n  - VO over macro: 'Salt creep, water spots… and it never fits right.'\n\nScene 2 (3.0s–6.0s) — ACTION (physically correct, 2–3 passes)\n- Medium 35mm: Hands lift off the old lid; mineral crust flakes slightly.\n- Macro punch-in: A quick scrape along the rim (one satisfying pass), then a mist of water and a firm microfiber wipe (two short wipes).\n- Product enters frame: @Image1 lid shown clearly—transparent 6mm polycarbonate with the vent-mesh section and circular feeding hole piece visible. Hands flex it slightly to show rigidity (no bending unrealistically).\n- VO: 'I swapped it for a custom-cut 6mm polycarbonate top—clear, sturdy, and made to match your tank size.'\n\nScene 3 (6.0s–9.0s) — SATISFYING REVEAL (same area, decisive finish)\n- Tight macro: Hands align the new lid to the same rim corners—match the geography from Scene 1.\n- The decisive moment: peel protective film corner → long continuous peel (audible) while the lid settles into place; then one final glide-wipe across the top surface.\n- The transformation reads instantly: no crust, no haze, clean edges, flush fit; waterline and aquascape look clearer through the top.\n- VO: 'Watch the difference—flush edges, cleaner look, and full visibility again.'\n\nScene 4 (9.0s–12.0s) — HERO + CTA (keep micro-motion to final frame)\n- 24–35mm: Return to selfie framing with the skyline huge behind; aquarium and the newly installed lid visible in the lower frame.\n- Hands demonstrate the feeding access: open/slide the feeding hole insert once, then close it with a light tap; finger traces over the vent-mesh section to show airflow option.\n- Slow tracking pan around the tank corner to catch clean specular highlights on the clear lid; end with a gentle final buff motion on the lid (no static hold).\n- VO: 'If your top looks like this, upgrade it—get the cut that fits your tank and keep maintenance easy.'\n\n**Camera Notes (Why It Reads)**\n- The HOOK is an instant pattern-break: wide selfie + failed flip + immediate calm review, then smash-cut to the gross macro BEFORE.\n- The \"same spot\" proof is locked: same rim corner and back gap area shown in Scene 1 and Scene 3.\n- Macro peel + final wipe creates the satisfying \"fresh\" payoff without implying magic cleaning; it's a realistic swap + quick rim clean.\n- Alternating wide context (rooftop scale) and tight detail (salt creep, peel, wipe) prevents visual fatigue.\n\n**Finishing**\nRuntime: 12.0s. Wall-to-wall motion and audio through 11.4s; final 0.6s is a natural settle as the last buff slows, reflections glide across the clear lid, wind moves hair/clothing, skyline remains alive in the background. No frozen frames.",
          "extra": [
            {
              "label": "Link Higgsfield",
              "text": "https://higgsfield.ai/asset/video/8e60819f-60f3-4e7b-a89d-53852ee40a61"
            },
            {
              "label": "Ref (đã kiểm Higgsfield)",
              "text": "Product 11d85c81 \"Custom Cut Polycarbonate Aquarium Lid…\" với 1 ảnh listing (19300668). Params medias rỗng, avatars rỗng. Không có avatar trong params. Nguồn: Kiểm lại trên Higgsfield 09/11/2026 (Fact)."
            }
          ],
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/11d85c81-listing-image-19300668.jpg"
          ]
        }
      },
      {
        "id": "R7-V06",
        "title": "Cây lan ý trên bể, tay nhấc nắp tròn",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Object Swap (thay nắp trong video nguồn)",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Higgsfield; model: hf_mult_replace_object_flash (Higgsfield Genjutsu Lite · Object Swap); Quality 720p · duration 30 s · aspect_ratio: auto · generate_audio: false (file vẫn có audio, nguồn âm thanh Cần xác minh); credit: 0 credit (giao dịch 15:34:49 UTC ghi 0); Cổng C: chưa qua; Lưu ý: Video nguồn do bên thứ ba (chưa rõ chủ sở hữu), cần kiểm quyền dùng.; Lưu ý: Tracker ghi nhóm ứng viên B/C/E/F: lịch sử giao dịch xác nhận là Genjutsu Lite Object Swap.. File: hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
        "kit": {
          "tool": "Higgsfield",
          "config": "hf_mult_replace_object_flash (Higgsfield Genjutsu Lite · Object Swap) · Quality 720p · duration 30 s · aspect_ratio: auto · generate_audio: false (file vẫn có audio, nguồn âm thanh Cần xác minh) · 0 credit (Fact, từ lịch sử Higgsfield 26/10/2026)",
          "prompt": "Prompt gửi lên: Replace the lid shown in the source video with the product from the attached reference image, matching its shape exactly. Keep camera, timing and lighting. Remove all logos, watermarks and on-screen text.\n\nEnhanced prompt (Higgsfield tự sinh từ prompt + ref):\nTASK\nEdit Video 1. Replace the aquarium top lid with the clear acrylic aquarium lid in Image 1, matching its exact rectangular shape, transparent rigid acrylic perimeter, fine white mesh panels, two circular left-side openings, and long rounded central mesh opening. Replace every source lid detail, feed door, equipment cutout, lily-pipe notch, and plant opening with this Image 1 lid design. The feed-door handling becomes handling of the small clear circular removable insert from Image 1. Keep the aquarium, fish, peace lily, lily pipe, LED fixture, stand, room, camera, timing and lighting from Video 1. Video 1 controls the original performance, blocking, interactions, camera movement, framing, cuts and timing; everything outside the listed replacements keeps its look from Video 1.\n\nREFERENCES\nImage 1: clear rigid rectangular acrylic aquarium lid with fine white mesh, two circular openings along the left edge, a small clear circular removable insert, and a long rounded central mesh panel; use its exact lid shape and parts; ignore the hand, blue arrows, white background, and lower example aquarium.\n\nSOURCE VIDEO\nVideo 1 shows an aquarium and lid overview, a close-up of a hand lifting and reseating the lid insert, a right-corner lid detail, a lily-pipe detail, then the central plant opening. Keep all four hard cuts exactly in place.\n\nSHOTS\nShot 1 (0.0–2.6s, continuous): Full front-left establishing view with the tank centered and stand below. The replacement lid sits flush and rigid on the tank rim, with its two circular left openings and long central mesh panel visible; keep the peace lily above the tank without a source cutout. End hard cut\nShot 2 (2.6–8.6s, hard cut): High-angle close-up, lid fills the frame. The left hand grips the small clear circular acrylic insert, lifts it, tilts it toward camera, then reseats it flush in the circular left opening; no source feed door. End hard cut\nShot 3 (8.6–14.6s, hard cut): High-angle close-up tracking toward the right rear lid edge. Show only the replacement lid's continuous clear acrylic and fine mesh structure; retain the purple LED fixture and cables beside the tank, with no source box cutout. End hard cut\nShot 4 (14.6–21.6s, hard cut): Extreme close-up of the rear rim. The brushed steel lily pipe remains hooked over the rear glass behind the replacement lid; the lid stays a single rigid rectangular sheet with no source pipe notch. End hard cut\nShot 5 (21.6–29.4s, hard cut): Medium-close front-left high angle panning across the replacement lid and peace lily. The plant remains above and behind the lid, while the long rounded central mesh panel fills the lower frame; no source circular plant opening.\n\nPROPS\nThe removable insert is a palm-width, clear rigid acrylic circle with a raised clear rim, one solid flat piece in every frame; it is centered in the left hand during Shot 2 and sits flush in the upper left circular lid opening before and after handling. The lily pipe is a rigid brushed-steel U-shaped tube, fixed over the rear tank rim.\n\nSETTING\nKeep the original location from Video 1. Preserve the clear aquarium water, fish, planted interior, white stand, pale blue wall, neutral tank light, and purple right-side LED glow.\n\nNEGATIVE\nno source lid, source feed door, source equipment cutout, source lily-pipe notch, source plant opening, logos, watermarks, on-screen text, gibberish text, extra people, duplicated objects, morphing or melting acrylic, warped mesh, floating insert, extra cuts, new camera moves, slow motion, subtitles, clean frame edge to edge.",
          "extra": [
            {
              "label": "Link Higgsfield",
              "text": "https://higgsfield.ai/asset/video/4cdccff3-4b0e-48bb-9010-cbff43689614"
            },
            {
              "label": "Ref (đã kiểm Higgsfield)",
              "text": "Ảnh ref = 32427aaf (jpg; dung lượng khớp ảnh Amin gửi 09/11, 274394 byte). Video ref = 345c4605 (video nguồn bên thứ ba, cần kiểm quyền dùng; đã tải về Drive 09/11/2026). Nguồn: Kiểm lại trên Higgsfield 09/11/2026 (Fact)."
            }
          ],
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/32427aaf-ref-image.jpg"
          ],
          "referenceVideo": [
            "1-dropship/workspace/aquanest/3-creative/refs/videos-nguon/R7-V06-source-345c4605.mp4"
          ]
        }
      },
      {
        "id": "R7-V07",
        "title": "Phòng tối, bể thủy sinh lá đỏ",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Muse (muse.ai); Tên file ghi 12 s nhưng đo được 10,00 s; Cổng C: chưa qua; Lưu ý: Metadata tải về ghi nguồn là muse.ai, không phải Higgsfield; tracker ghi \"Genjutsu Lite / Marketing Studio (cần xác nhận)\" là sai theo metadata.; Lưu ý: Mở lịch sử Muse để lấy prompt, model, input.. File: media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472-c8e9-4793-9d7b-b4ead12738ed.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit/thời lượng xin: Trống / chưa xác minh. Đo từ file: 720p · 10 s · 9:16 (Fact, 02/11/2026)",
          "prompt": "Trống / chưa xác minh: không có prompt gốc. Đã tìm: lịch sử Higgsfield (không có giao dịch khớp), artifact R7-02, thread Muse KAN-81 (09/11/2026, chỉ nói về đăng bài). Tên file ghi \"aquarium-lid-ad-9x16-12s\". (Inference) Bản prompt viết lại từ khung hình ở prompts/muse-brief-2.md KHÔNG phải prompt đã dùng.",
          "extra": [
            {
              "label": "Ref",
              "text": "Trống / chưa xác minh (tracker ghi \"ảnh hero + ảnh bể mẫu\", không có file)."
            },
            {
              "label": "Lưu ý",
              "text": "File gốc nằm lẫn trong folder higgsfield của r7-02; metadata tải về ghi nguồn muse.ai nên xếp vào folder muse."
            }
          ]
        }
      },
      {
        "id": "R7-V08",
        "title": "Escape artist (cá nhảy): UGC nói trước camera",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Muse (muse.ai); 720p · 10,00 s · 9:16 (đo từ file); số giây đã xin: Chưa có dữ liệu; Review sơ bộ (không phải review độc lập): Đạt có điều kiện (sơ bộ); Cổng C: chưa qua; Lưu ý: 4 khung hình mới thấy cá quẫy nước ở mặt bể, chưa thấy rõ cá nhảy ra khỏi bể: cần xem hết video để biết có đúng angle \"Escape artist\" không.; Lưu ý: Prompt, model, hook preset, credit của video Muse này: Chưa có dữ liệu (Amin chỉ báo tên angle).; Lưu ý: Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng hay kích thước sản phẩm của mình.. File: video-08.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-08.mp4",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit: Trống / chưa xác minh. Xin 12 s, ra 10 s · 720p · 9:16 (Fact, đo từ file 01/11/2026). Gen ngày 01/11/2026 theo Amin báo.",
          "prompt": "Vertical 9:16 UGC selfie video, 12 seconds, with audio, bedroom at night lit by blue aquarium LED; start close on the collarbone, tilt up to reveal a person's face, step back into selfie framing, one silent beat, while behind them an open-top rimless fish tank has a colorful fish splashing near the surface; the person sets a clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly, onto the tank, shows a close-up of the mesh and the round hole, nods and runs a finger along the lid edge; voiceover \"Open tank, jumping fish, every night. Clear lid, mesh panel, feeding hole. Now I can relax.\"; handheld phone look, natural room sound; no text, logos or watermarks, no injured animals.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt là bản trong prompts/muse-brief-3.md gửi cho Muse; Muse có chạy đúng prompt này không: chưa xác minh (Muse thread KAN-81 đã đọc 09/11/2026, không chứa prompt tạo video)."
            }
          ]
        }
      },
      {
        "id": "R7-V09",
        "title": "Measure twice: đo và đặt thử",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Muse (muse.ai); 720p · 10,00 s · 9:16 (đo từ file); số giây đã xin: Chưa có dữ liệu; Review sơ bộ (không phải review độc lập): Không đạt về sản phẩm (sơ bộ); Cổng C: chưa qua; Lưu ý: Prompt, model, hook preset, credit của video Muse này: Chưa có dữ liệu (Amin chỉ báo tên angle).; Lưu ý: Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng hay kích thước sản phẩm của mình.; Lưu ý: Lời thoại và âm thanh chưa nghe/đối chiếu; claim trong lời thoại chưa kiểm.. File: video-09.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-09.mp4",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit: Trống / chưa xác minh. Xin 12 s, ra 10 s · 720p · 9:16 (Fact, đo từ file 01/11/2026). Gen ngày 01/11/2026 theo Amin báo.",
          "prompt": "Vertical 9:16 video, 12 seconds, with audio; wide security-camera POV of a home office with no clock and no on-screen text; hook: a clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly, drops onto the desk knocking over a tape measure and a tub of fish food in a harsh sharp image, then a hard cut to a calm clean scene where a hand pulls the tape measure along the rim of an empty rimless tank, lays a cardboard template, sets the lid on the tank and finally drops a pinch of food through the round hole; voiceover \"Measure the top first. Then order a lid cut to your tank. Clear panel, mesh, feeding hole.\"; soft window light, tape snap, room tone; no logos or watermarks.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt là bản trong prompts/muse-brief-3.md gửi cho Muse; Muse có chạy đúng prompt này không: chưa xác minh (Muse thread KAN-81 đã đọc 09/11/2026, không chứa prompt tạo video)."
            }
          ]
        }
      },
      {
        "id": "R7-V10",
        "title": "Feed through the hole: cho ăn",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Muse (muse.ai); 720p · 10,00 s · 9:16 (đo từ file); số giây đã xin: Chưa có dữ liệu; Review sơ bộ (không phải review độc lập): Đạt (sơ bộ); Cổng C: chưa qua; Lưu ý: Prompt, model, hook preset, credit của video Muse này: Chưa có dữ liệu (Amin chỉ báo tên angle).; Lưu ý: Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng hay kích thước sản phẩm của mình.; Lưu ý: Lời thoại và âm thanh chưa nghe/đối chiếu; claim trong lời thoại chưa kiểm.. File: video-10.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-10.mp4",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit: Trống / chưa xác minh. Xin 12 s, ra 10 s · 720p · 9:16 (Fact, đo từ file 01/11/2026). Gen ngày 01/11/2026 theo Amin báo.",
          "prompt": "Vertical 9:16 UGC selfie video, 12 seconds, with audio, outdoors in a garden with natural light; start close on the collarbone, tilt up to the face, step back into selfie framing, one silent beat; on a small outdoor table an aquarium is covered by a clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly; macro close-up of the person dropping a pinch of fish food through the round hole as fish rise and eat with tiny ripples, then a slow pull-back to the whole tank and a thumbs up; voiceover \"Feeding time, lid stays on. Drop it right through the hole.\"; soft ASMR splashes; no text, logos or watermarks.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt là bản trong prompts/muse-brief-3.md gửi cho Muse; Muse có chạy đúng prompt này không: chưa xác minh (Muse thread KAN-81 đã đọc 09/11/2026, không chứa prompt tạo video)."
            }
          ]
        }
      },
      {
        "id": "R7-V11",
        "title": "Curious cat: mèo tò mò",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Muse (muse.ai); 720p · 10,00 s · 9:16 (đo từ file); số giây đã xin: Chưa có dữ liệu; Review sơ bộ (không phải review độc lập): Đạt về hình (sơ bộ); Cổng C: chưa qua; Lưu ý: Âm thanh rất nhỏ (mức trung bình −37,0 dB, thấp hơn các video khác khoảng 17–20 dB): kiểm lại audio.; Lưu ý: Prompt, model, hook preset, credit của video Muse này: Chưa có dữ liệu (Amin chỉ báo tên angle).; Lưu ý: Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng hay kích thước sản phẩm của mình.. File: video-11.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-11.mp4",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit: Trống / chưa xác minh. Xin 12 s, ra 10 s · 720p · 9:16 (Fact, đo từ file 01/11/2026). Gen ngày 01/11/2026 theo Amin báo.",
          "prompt": "Vertical 9:16 video, 12 seconds, with audio; cozy living room where a curious tabby cat sits next to an open-top aquarium watching the fish with its tail flicking; a hand places a clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly, onto the tank, the cat tilts its head, and the final shot is a close-up of the mesh panel with the cat blurred behind; warm lamp light, soft purring and water sounds, no voiceover; the cat never touches the water or the fish; no text, logos or watermarks.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt là bản trong prompts/muse-brief-3.md gửi cho Muse; Muse có chạy đúng prompt này không: chưa xác minh (Muse thread KAN-81 đã đọc 09/11/2026, không chứa prompt tạo video)."
            }
          ]
        }
      },
      {
        "id": "R7-V12",
        "title": "Clear view: nhìn rõ bể",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Nguồn: Muse (muse.ai); 720p · 10,00 s · 9:16 (đo từ file); số giây đã xin: Chưa có dữ liệu; Review sơ bộ (không phải review độc lập): Đạt có điều kiện (sơ bộ); Cổng C: chưa qua; Lưu ý: Prompt, model, hook preset, credit của video Muse này: Chưa có dữ liệu (Amin chỉ báo tên angle).; Lưu ý: Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng hay kích thước sản phẩm của mình.; Lưu ý: Lời thoại và âm thanh chưa nghe/đối chiếu; claim trong lời thoại chưa kiểm.. File: video-12.mp4",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-12.mp4",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Model/credit: Trống / chưa xác minh. Xin 12 s, ra 10 s · 720p · 9:16 (Fact, đo từ file 01/11/2026). Gen ngày 01/11/2026 theo Amin báo.",
          "prompt": "Vertical 9:16 mess-to-fresh video, 12 seconds, with audio; a dark room with a reef aquarium glowing blue-purple, close-up of an old cloudy lid with salt crust, a hand removes and wipes the rim, then peels the protective film from a new clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly, and sets it on the tank, a top-down view through the clear lid shows corals and fish clearly, and the hand lifts the round insert from the hole and sets it back; voiceover \"Old lid, cloudy and crusty. New lid, clear view again.\"; slow smooth camera, reef hum and bubbles; no text, logos or watermarks.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt là bản trong prompts/muse-brief-3.md gửi cho Muse; Muse có chạy đúng prompt này không: chưa xác minh (Muse thread KAN-81 đã đọc 09/11/2026, không chứa prompt tạo video)."
            }
          ]
        }
      },
      {
        "id": "R7-F08",
        "title": "Flow · Escape artist (cá nhảy): UGC nói trước camera",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Google Flow (Veo 3.1 Fast), cặp với R7-V08",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Ghép cặp Muse ↔ Flow theo tên file và nội dung, chưa được Amin xác nhận (Inference, 02/11/2026). Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng/kích thước sản phẩm.",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_securing_fish_tank_lid_b558e7aa.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Veo 3.1 Fast · 9:16 · 8 s · có audio · 20 credit · 720p (artifact R7-02, 02/11/2026). Bản đã chạy 31/10 không lưu.",
          "prompt": "Vertical 9:16 UGC selfie video, 8 seconds, with audio, bedroom at night lit by blue aquarium LED; close on the collarbone, tilt up to the face, step back into selfie framing; behind them an open-top fish tank where a colorful fish splashes; the person sets a clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly, onto the tank and nods; voiceover \"Open tank, jumping fish. Clear lid, feeding hole. Now I can relax.\"; handheld phone look, room sound; no text, logos or watermarks, no injured animals.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt Flow là bản rút gọn 8 s viết lại 02/11/2026; prompt chính xác đã chạy: Trống (không lưu)."
            }
          ]
        }
      },
      {
        "id": "R7-F09",
        "title": "Flow · Measure twice: đo và đặt thử",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Google Flow (Veo 3.1 Fast), cặp với R7-V09",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Ghép cặp Muse ↔ Flow theo tên file và nội dung, chưa được Amin xác nhận (Inference, 02/11/2026). Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng/kích thước sản phẩm.",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Measuring_and_installing_aquariu…_89b3e0ca.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Veo 3.1 Fast · 9:16 · 8 s · có audio · 20 credit · 720p (artifact R7-02, 02/11/2026). Bản đã chạy 31/10 không lưu.",
          "prompt": "Vertical 9:16 video, 8 seconds, with audio; wide security-camera POV of a home office, no clock, no on-screen text; a hand measures the rim of an empty rimless tank with a tape measure, lays a cardboard template, then sets a clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly, on the tank, and a pinch of food falls through the round hole; voiceover \"Measure the top first. Clear panel, mesh, feeding hole.\"; room tone and tape snap; no logos or watermarks.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt Flow là bản rút gọn 8 s viết lại 02/11/2026; prompt chính xác đã chạy: Trống (không lưu)."
            }
          ]
        }
      },
      {
        "id": "R7-F10",
        "title": "Flow · Feed through the hole: cho ăn",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Google Flow (Veo 3.1 Fast), cặp với R7-V10",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Ghép cặp Muse ↔ Flow theo tên file và nội dung, chưa được Amin xác nhận (Inference, 02/11/2026). Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng/kích thước sản phẩm.",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_feeding_fish_in_aquarium_55f01fed.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Veo 3.1 Fast · 9:16 · 8 s · có audio · 20 credit · 720p (artifact R7-02, 02/11/2026). Bản đã chạy 31/10 không lưu.",
          "prompt": "Vertical 9:16 UGC selfie video, 8 seconds, with audio, outdoors in a garden; close on the collarbone, tilt up to the face, step back into selfie framing; a small table holds an aquarium covered by a clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly; macro of a pinch of fish food dropping through the round hole into the water and fish rising, then a thumbs up; voiceover \"Feeding time, lid stays on.\"; soft splashes; no text, logos or watermarks.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt Flow là bản rút gọn 8 s viết lại 02/11/2026; prompt chính xác đã chạy: Trống (không lưu)."
            }
          ]
        }
      },
      {
        "id": "R7-F11",
        "title": "Flow · Curious cat: mèo tò mò",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Google Flow (Veo 3.1 Fast), cặp với R7-V11",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Ghép cặp Muse ↔ Flow theo tên file và nội dung, chưa được Amin xác nhận (Inference, 02/11/2026). Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng/kích thước sản phẩm.",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Cat_watching_aquarium_fish_d5908f6a.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Veo 3.1 Fast · 9:16 · 8 s · có audio · 20 credit · 720p (artifact R7-02, 02/11/2026). Bản đã chạy 31/10 không lưu.",
          "prompt": "Vertical 9:16 video, 8 seconds, with audio; cozy living room, a tabby cat beside an open-top aquarium watching the fish; a hand places a clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly, onto the tank and the cat tilts its head; final close-up of the mesh with the cat blurred behind; warm lamp light, soft water sounds, no voiceover; the cat never touches the water or fish; no text, logos or watermarks.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt Flow là bản rút gọn 8 s viết lại 02/11/2026; prompt chính xác đã chạy: Trống (không lưu)."
            }
          ]
        }
      },
      {
        "id": "R7-F12",
        "title": "Flow · Clear view: nhìn rõ bể",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Google Flow (Veo 3.1 Fast), cặp với R7-V12",
        "hook": "",
        "step": "Đã gen và tải; chưa review độc lập, chưa qua cổng C",
        "note": "Ghép cặp Muse ↔ Flow theo tên file và nội dung, chưa được Amin xác nhận (Inference, 02/11/2026). Hình nắp trong video là AI tạo, không phải bằng chứng hình dáng/kích thước sản phẩm.",
        "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Replacing_cloudy_aquarium_lid_0afe8540.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Veo 3.1 Fast · 9:16 · 8 s · có audio · 20 credit · 720p (artifact R7-02, 02/11/2026). Bản đã chạy 31/10 không lưu.",
          "prompt": "Vertical 9:16 mess-to-fresh video, 8 seconds, with audio; dark room, a reef aquarium glowing blue-purple; close-up of an old cloudy lid with salt crust, a hand wipes the rim and sets a new clear acrylic lid with a white mesh panel and a round feeding hole, matching the attached reference image exactly, on the tank; top-down view through the clear lid shows corals and fish; voiceover \"Old lid, cloudy. New lid, clear view.\"; slow camera, reef hum; no text, logos or watermarks.",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/product_ref.png"
          ],
          "extra": [
            {
              "label": "Chưa xác minh",
              "text": "Prompt Flow là bản rút gọn 8 s viết lại 02/11/2026; prompt chính xác đã chạy: Trống (không lưu)."
            }
          ]
        }
      },
      {
        "status": "Chưa qua cổng",
        "gate": "C",
        "hook": "Spicy: cận xương quai xanh, nghiêng lên lộ mặt, lùi về selfie, im lặng một nhịp rồi vào lời thoại.",
        "step": "ĐÃ GEN 10/11/2026 (job 1440f404-5748-4130-9c26-a7632717b475, 42 credit). Chưa qua cổng C; đã soạn nháp social 4 kênh (chưa đăng)",
        "note": "Thay cho bản Object Swap (giữ ở R7-V13-HF-SWAP). Fact (10/11/2026, Claude xem contact sheet 8 khung của file 496×864, 12.04 s, có audio): hook đúng Spicy (cận dây chuyền/xương quai xanh → tilt lên mặt → lùi → im lặng); nhân vật nam trẻ (avatar Kai, auto-pick) mặc áo phông xám; phòng ngủ ánh xanh bể cá; có cảnh cầm nắp lưới và đặt lên bể; không thấy watermark hay chữ. Lưu ý: Higgsfield tự đổi prompt thành tripod/camera cố định (không selfie cầm tay), nhân vật nam thay vì \"creator\" chung, đeo dây chuyền bạc, nhẫn, đồng hồ. Nắp thấy rõ 1 lỗ tròn góc trái trên, lỗ thứ 2 chưa xác minh bằng mắt. Chưa kiểm: lời thoại có đúng 3 câu không (chưa nghe/transcribe), độ khớp nắp với ảnh ref. Enhanced prompt đã lưu trong prompts/higgsfield-enhanced-prompts.md. Chưa qua cổng C, chưa review độc lập.",
        "id": "R7-V13-HF",
        "title": "Escape artist (pilot) · Higgsfield Marketing Studio (UGC Selfie Testimonial)",
        "format": "UGC Selfie Testimonial · hook Spicy · Bedroom",
        "kit": {
          "tool": "Higgsfield Marketing Studio",
          "config": "Model marketing_studio_video (v2) · mode ugc_selfie_testimonial · hook Spicy · setting Bedroom · product 11d85c81 · avatar Kai (auto-pick) · 9:16 · 12 s · 480p (496×864) · audio có · 42 credit",
          "fields": {
            "mode": "UGC Selfie Testimonial",
            "hook": "Spicy",
            "setting": "Bedroom",
            "product": "11d85c81 (Custom Cut Polycarbonate Aquarium Lid)",
            "avatar": "Kai (auto-pick)",
            "duration": "12 s",
            "resolution": "480p",
            "aspect": "9:16",
            "audio": "Bật"
          },
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/11d85c81-listing-image-19300668.jpg"
          ],
          "prompt": "Angle \"Escape artist\": a fish keeper whose fish keep jumping out of an open tank at night. No unverified claims. Voiceover exactly: \"Open tank, jumping fish, every night.\" / \"Clear lid, mesh panel, feeding hole.\" / \"Now I can relax.\" Setting: bedroom at night lit by blue aquarium LED. Show the lid as in the product image: clear acrylic, white mesh panel, two circular holes along the left edge. The creator wears a plain grey t-shirt. No text, logos or watermarks, no injured animals.",
          "extra": [
            {
              "label": "Job",
              "text": "1440f404-5748-4130-9c26-a7632717b475 (10/11/2026). Enhanced prompt đầy đủ: prompts/higgsfield-enhanced-prompts.md."
            },
            {
              "label": "So với dự kiến",
              "text": "Higgsfield tự sinh cảnh tripod cố định 9:16, lời thoại dùng đúng 3 câu của prompt người dùng (theo enhanced prompt). Chưa nghe file để xác nhận."
            }
          ]
        },
        "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/R7-V13-HF-marketing-studio.mp4"
      },
      {
        "status": "Chưa qua cổng",
        "gate": "C",
        "hook": "",
        "step": "ĐÃ GEN 09/11/2026 bằng lượt miễn phí (0 credit, còn 3 lượt). Job e69b5c01-6199-44ae-8bbc-9b71fe4d6f76 · 10.0 s · 720×1280 · audio có trong file. Chưa đăng (xem note)",
        "note": "LƯU Ý: kết quả y hệt video-08 là đúng thiết kế của Object Swap (chỉ thay nắp), không phải lỗi. Fact (09/11/2026): Muse chạy trên higgsfield.ai (tk minhpham0529), Genjutsu Lite, 720p, aspect auto, generate_audio false, 0 credit, bộ đếm lượt free 4 → 3. Video nguồn = Muse video-08, ảnh ref = 32427aaf. Muse xem 10 khung: giữ nguyên khung cảnh video-08, không chữ/logo/watermark, nhân vật áo phông xám; nắp trong suốt có lưới mịn. Chỉ thấy 1 lỗ tròn rõ (lỗ thứ 2 chói sáng, giống video-08): Inference, chưa xác minh bằng mắt Amin. Enhanced prompt thật của Higgsfield đã lưu trong prompts/higgsfield-enhanced-prompts.md. Model giữ nhịp video nguồn nên KHÔNG có hook Spicy/lời thoại mới. Đăng social: 0/4 kênh (TikTok, Instagram, YouTube đã đăng xuất; Page Facebook AquaNest không truy cập được); chưa đăng gì. Chưa qua cổng C, chưa review độc lập.",
        "id": "R7-V13-HF-SWAP",
        "title": "Escape artist (thử) · Genjutsu Lite Object Swap (chỉ thay nắp video-08, không phải creative mới)",
        "format": "Object Swap: thay nắp trong video nguồn bằng sản phẩm (Genjutsu Lite)",
        "kit": {
          "tool": "Higgsfield Genjutsu Lite",
          "config": "Model hf_mult_replace_object_flash (Genjutsu Lite, Kling 4.0) · 720p · 10.0 s · aspect auto · generate_audio false · 0 credit (lượt miễn phí, còn 3)",
          "fields": {
            "mode": "Object Swap",
            "resolution": "720p",
            "aspect": "auto",
            "audio": "Tắt",
            "duration": "10.0 s"
          },
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/32427aaf-ref-image.jpg"
          ],
          "referenceVideo": [
            "1-dropship/workspace/aquanest/3-creative/videos/muse/video-08.mp4"
          ],
          "prompt": "Replace the lid shown in the source video with the product from the attached reference image, matching its shape exactly. Keep camera, timing and lighting. Remove all logos, watermarks and on-screen text.",
          "extra": [
            {
              "label": "Lưu ý: vì sao video gần như y hệt video-08",
              "text": "Genjutsu Lite (Object Swap) là video-to-video: nó giữ nguyên diễn xuất, camera, cắt cảnh, nhịp và nhân vật của video nguồn, chỉ thay nắp bằng ảnh ref (enhanced prompt ghi rõ: Video 1 controls the original performance, blocking, camera movement, framing, cuts and timing). Nên V13-HF KHÔNG phải creative mới, chỉ là video-08 đã sửa nắp. Muốn video khác kịch bản/hook/lời thoại thì dùng Marketing Studio hoặc Flow/Muse text-to-video, đừng dùng Object Swap. Ghi lại để không gen lại nhầm."
            },
            {
              "label": "Cách chạy (09/11/2026)",
              "text": "Muse chạy trên higgsfield.ai/ai/video?model=genjutsu-lite (tab Objects swap, Quality 720p) bằng lượt miễn phí. Công cụ Higgsfield qua MCP không dùng được lượt miễn phí nên không gen qua MCP."
            },
            {
              "label": "Enhanced prompt (Higgsfield tự sinh)",
              "text": "TASK: Edit Video 1. Replace the mesh tank lid with the clear aquarium cover product in Image 1 in every appearance from 3.9s onward. Match its exact shape: two thin transparent rectangular acrylic panels, each with a large rectangular fine-mesh inset, overlapping at the center, with a round feeding opening at the left edge and a removable clear round cap. Remove all logos, watermarks, and on-screen text. (Phần còn lại: REFERENCES, SOURCE VIDEO, SHOTS 0–3.9s và 3.9–9.4s, PROPS, SETTING, NEGATIVE: xem prompts/higgsfield-enhanced-prompts.md)"
            },
            {
              "label": "Nguồn video swap",
              "text": "Muse video-08 (Escape artist) là video của mình nên không vướng quyền bên thứ ba; nắp trong video gốc là AI vẽ, bị thay bằng ảnh ref."
            }
          ]
        },
        "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/R7-V13-HF-genjutsu-lite.mp4"
      },
      {
        "status": "Chưa qua cổng",
        "gate": "C",
        "hook": "Spicy: cận xương quai xanh, nghiêng lên lộ mặt, lùi về selfie, im lặng một nhịp rồi vào lời thoại.",
        "step": "ĐÃ GEN 09/11/2026, có file; KHÔNG ĐẠT (watermark Veo, nắp nhiều lỗ, nhân vật không áo). Không đăng, không gen lại",
        "note": "Pilot \"Escape artist\" V08b. Fact (10/11/2026, Claude xem file Amin tải về Person_feeding_fish_with_lid_5b484335.mp4: 720×1280, 7.92 s, có audio): 3 shot khớp prompt (cận xương quai xanh → mặt; hạ/nhấc nắp lưới; cận cảnh thả thức ăn qua lỗ; selfie nhìn thẳng). Thời lượng khớp báo cáo của Muse (7.93 s, tk minhpham.piscada, 20 credit, 934 → 914). Chưa xác minh: project Flow 8c8d8071-… không mở được từ Chrome của em (sai tài khoản Google, báo \"Project not found\"), nên chưa đối chiếu trực tiếp với project. Lỗi thấy trong file: (1) watermark \"Veo\" góc dưới phải; (2) nắp có hàng ~5 lỗ nhỏ dọc mép trái và 2 lỗ tròn ở mặt trước khi cận cảnh; ref 32427aaf chỉ 2 lỗ tròn; (3) nhân vật để trần vai/ngực suốt video. Quyết định: không đăng, không gen lại. Prompt Flow là bản tự soạn, chưa từ Higgsfield. Chi tiết: prompts/pilot-V08b-escape-artist.md.",
        "id": "R7-V13-FLOW",
        "title": "Escape artist (pilot) · Google Flow",
        "format": "UGC Selfie Testimonial (Veo 3.1 Fast)",
        "kit": {
          "tool": "Google Flow",
          "config": "Veo 3.1 Fast · 9:16 · 8 s (thực tế 7.93 s) · có audio · 20 credit (đã chạy)",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/32427aaf-ref-image.jpg"
          ],
          "prompt": "Vertical 9:16 UGC selfie video, 8 seconds, with audio. Bedroom at night lit by blue aquarium LED glow, handheld phone look, natural skin texture, no beauty filter.\nShot 1 (0-2.5s): extreme close-up of a collarbone, slow tilt up to reveal a young adult's face, pull back into selfie framing, one silent beat, raised eyebrow. Behind them an open-top rimless fish tank where a colorful fish splashes at the surface.\nShot 2 (2.5-5.5s): the person lowers a clear rigid acrylic lid onto the tank. The lid matches the reference image exactly: thin transparent rectangular frame, a long rounded fine white mesh panel in the middle, a stepped notch and two circular holes along the left edge. Gentle tap on the lid corner.\nShot 3 (5.5-8s): close-up of the mesh panel and the two round holes, a pinch of fish food drops through a hole, then selfie framing again, a small nod, a finger tracing the lid edge.\nVoiceover, calm and conversational: \"Open tank, jumping fish. Clear lid, feeding hole. Now I can relax.\"\nSound: room tone, faint water bubbling, soft fish splash. Keep micro-motion to the final frame. No text, logos or watermarks. No injured animals.",
          "extra": [
            {
              "label": "Kết quả",
              "text": "Flow project: https://flow.google.com/project/8c8d8071-e5d6-4e5d-93aa-708fdfb948f4 (tài khoản minhpham.piscada@gmail.com). File lưu videos/flow/R7-V13-FLOW-veo31fast.mp4. Không đạt: watermark Veo, nắp nhiều lỗ hơn ref, nhân vật không mặc áo."
            }
          ]
        },
        "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/R7-V13-FLOW-veo31fast.mp4"
      },
      {
        "status": "Chưa qua cổng",
        "gate": "C",
        "hook": "Spicy: cận xương quai xanh, nghiêng lên lộ mặt, lùi về selfie, im lặng một nhịp rồi vào lời thoại.",
        "step": "CHƯA GEN (bộ prompt pilot đã soạn 09/11/2026, 0 credit)",
        "note": "Pilot \"Escape artist\" V08b: cùng 1 kịch bản chạy Higgsfield → Flow → Muse theo khuôn enhanced prompt. Chi tiết và cách so sánh: workspace/aquanest/3-creative/prompts/pilot-V08b-escape-artist.md. Ref nắp thống nhất = ảnh 32427aaf (2 lỗ tròn); cần Amin chốt ảnh sản phẩm thật. | Prompt Muse là bản tự soạn, chưa từ Higgsfield. Chưa chạy.",
        "id": "R7-V13-MUSE",
        "title": "Escape artist (pilot) · Muse",
        "format": "UGC Selfie Testimonial",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Xin 12 s (Muse thường ra 10 s), 9:16, có audio. Model/credit: Trống / chưa xác minh",
          "product": [
            "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/32427aaf-ref-image.jpg"
          ],
          "prompt": "Vertical 9:16 UGC selfie testimonial video, 12 seconds (10 is acceptable), with audio.\nFORMAT & LOOK: real creator filming in a bedroom at night, handheld phone look, natural skin texture, no beauty filter. The lid must match the attached reference image exactly: clear rigid rectangular acrylic lid, thin transparent frame, a long rounded fine white mesh panel, a stepped notch and two circular holes along the left edge, no branding, no text.\nLENS: phone front camera look, about 24-28mm, slight autofocus breathe when switching from face to lid edge.\nGRADE: cool blue aquarium glow on the room, warm skin tones, crisp highlights on the clear lid.\nLIGHTING: dark bedroom lit mainly by blue aquarium LED, soft practical lamp fill on the face.\nLOCATION: bedside table with an open-top rimless fish tank, plants visible, a colorful fish splashing near the surface.\nSOUND: natural on-camera voiceover, conversational pace; room tone, faint water bubbling, soft splash.\nSHOT LIST:\nScene 1 (0-4s) HOOK: extreme close-up of the collarbone, slow tilt up to the face, pull back into selfie framing, one silent beat with raised eyebrow; fish splashes behind. Voiceover: \"Open tank, jumping fish, every night.\"\nScene 2 (4-7s): the person sets the clear lid onto the tank in one smooth motion, light tap on the corner. Voiceover: \"Clear lid, mesh panel, feeding hole.\"\nScene 3 (7-10s): close-up of the mesh panel and the two round holes, a pinch of food drops through a hole, fish rise to eat.\nScene 4 (10-12s): back to selfie framing with the lid on the tank, small nod, finger traces the lid edge. Voiceover: \"Now I can relax.\"\nHands stay low and never cover the lens. Keep motion to the final frame. No text, logos, watermarks. No injured animals."
        }
      }
    ],
    "social": {
      "FB": {
        "name": "AquaNest",
        "handle": "",
        "url": "https://www.facebook.com/profile.php?id=61596033105029",
        "description": "Aquarium ideas and tips for fish keepers.",
        "email": "aquanest.shop@gmail.com",
        "category": "Pet Supplies",
        "status": "Đã tạo",
        "posts": [
          {
            "id": "R7-V04-FB",
            "title": "R7-V04 · UGC selfie testimonial, hook Spicy, ngoài trời · Facebook Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/28948453638109496",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Facebook chưa kiểm được (phiên Facebook của Muse hết hạn, Page hiện form đăng nhập). URL reel lấy theo hồ sơ Muse, chưa mở được. Cần Amin hoặc Muse đăng nhập lại Facebook để kiểm.",
            "file": "KAN81-FB-01-video-04.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-01-video-04.mp4",
            "caption": "A lid that lets you see your tank — and feed through it. 🐠\n\nMesh panel on top, one round feeding hole, and a clear view of the fish below.\n\nWhat do you keep on top of your tank right now? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V04"
          },
          {
            "id": "R7-V11-FB",
            "title": "R7-V11 · Curious cat: mèo tò mò · Facebook Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.facebook.com/reel/1137950368990546",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Facebook chưa kiểm được (phiên Facebook của Muse hết hạn, Page hiện form đăng nhập). URL reel lấy theo hồ sơ Muse, chưa mở được. Cần Amin hoặc Muse đăng nhập lại Facebook để kiểm.",
            "file": "KAN81-FB-02-video-11.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-02-video-11.mp4",
            "caption": "Your cat is watching. Your fish are swimming. The lid is on. 🐱🐠\n\nA mesh lid with a feeding hole — so curious paws stay out of the water.\n\nDoes your cat sit by the tank like this? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #CatsOfFacebook #FishTank #CatLovers #AquariumLife",
            "creative": "R7-V11"
          },
          {
            "id": "R7-V10-FB",
            "title": "R7-V10 · Feed through the hole: cho ăn · Facebook Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Facebook chưa kiểm được (phiên Facebook của Muse hết hạn, Page hiện form đăng nhập). Hồ sơ Muse chỉ có post ID 122105646633534436, chưa có URL reel. Cần Amin hoặc Muse đăng nhập lại Facebook để kiểm.",
            "file": "KAN81-FB-03-video-10.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-03-video-10.mp4",
            "caption": "Feeding time, no lid lifting needed. 🐟\n\nDrop the food through the round hole and watch them come up for it.\n\nHow do you feed your fish — lid on or lid off? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishFeeding #FishTank #AquariumLife #FishKeeper",
            "creative": "R7-V10"
          },
          {
            "id": "R7-V08-FB",
            "title": "R7-V08 · Escape artist (cá nhảy): UGC nói trước camera · Facebook Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Facebook chưa kiểm được (phiên Facebook của Muse hết hạn, Page hiện form đăng nhập). Hồ sơ Muse trước đó ghi 835 views lúc xác minh live sáng 09/11, nhưng chưa có URL và chưa kiểm lại. Cần Amin hoặc Muse đăng nhập lại Facebook để kiểm.",
            "file": "KAN81-FB-04-video-08.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-04-video-08.mp4",
            "caption": "Night time in the fish room. 🌙🐠\n\nLid on, lights low, fish settling in for the night.\n\nDo you leave a lid on your tank overnight? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #NightTank",
            "creative": "R7-V08"
          },
          {
            "id": "R7-V12-FB",
            "title": "R7-V12 · Clear view: nhìn rõ bể · Facebook Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Facebook chưa kiểm được (phiên Facebook của Muse hết hạn, Page hiện form đăng nhập). Hồ sơ Muse trước đó ghi 1.464 views lúc xác minh live sáng 09/11, nhưng chưa có URL và chưa kiểm lại. Cần Amin hoặc Muse đăng nhập lại Facebook để kiểm.",
            "file": "KAN81-FB-05-video-12.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-05-video-12.mp4",
            "caption": "Same tank. Clearer view. ✨🐠\n\nA quick wipe, and the lid looks new again.\n\nHow often do you clean your tank lid? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #TankMaintenance #FishKeeper",
            "creative": "R7-V12"
          },
          {
            "id": "R7-V01-FB",
            "title": "R7-V01 · Dark room, bể cá rạn LED xanh, đặt nắp lên bể · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V01). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
            "caption": "Reef glow, lid on. 💙\n\nA clear lid keeps the tank tidy while the light does its thing.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V01"
          },
          {
            "id": "R7-V02-FB",
            "title": "R7-V02 · Camera POV, hook Product Crash, phòng ngủ · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
            "caption": "3 AM tank check. 👀\n\nA clear lid helps keep curious jumpers where they belong.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V02"
          },
          {
            "id": "R7-V03-FB",
            "title": "R7-V03 · Cận bể rạn, ánh sáng tím xanh · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V03). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
            "caption": "Purple and blue glow, lid on. 💜\n\nA clear lid you can still see through.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V03"
          },
          {
            "id": "R7-V05-FB",
            "title": "R7-V05 · Mess to Fresh, hook Epic Fail, sân thượng · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
            "caption": "From messy tank top to tidy. ✨\n\nSwap the old top for a clear lid with a feeding hole.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V05"
          },
          {
            "id": "R7-V06-FB",
            "title": "R7-V06 · Cây lan ý trên bể, tay nhấc nắp tròn · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V06). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
            "caption": "A plant on the tank, a lid under it. 🌿\n\nLifting a clear round lid to feed.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V06"
          },
          {
            "id": "R7-V07-FB",
            "title": "R7-V07 · Phòng tối, bể thủy sinh lá đỏ · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
            "caption": "Dark room, red plants, quiet tank. 🌱\n\nA clear lid keeps the view open.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V07"
          },
          {
            "id": "R7-V09-FB",
            "title": "R7-V09 · Measure twice: đo và đặt thử · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "video-09.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-09.mp4",
            "caption": "Measure twice, place once. 📏\n\nCheck your tank size before you pick a lid.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V09"
          },
          {
            "id": "R7-F08-FB",
            "title": "R7-F08 · Flow · Escape artist (cá nhảy): UGC nói trước camera · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Person_securing_fish_tank_lid_b558e7aa.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_securing_fish_tank_lid_b558e7aa.mp4",
            "caption": "Open tank. Jumping fish. Every night. 🐠\n\nA clear lid with a feeding hole, so you do not take the whole top off.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F08"
          },
          {
            "id": "R7-F09-FB",
            "title": "R7-F09 · Flow · Measure twice: đo và đặt thử · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Measuring_and_installing_aquariu…_89b3e0ca.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Measuring_and_installing_aquariu…_89b3e0ca.mp4",
            "caption": "Measure twice, place once. 📏\n\nCheck your tank size before you pick a lid.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F09"
          },
          {
            "id": "R7-F10-FB",
            "title": "R7-F10 · Flow · Feed through the hole: cho ăn · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Person_feeding_fish_in_aquarium_55f01fed.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_feeding_fish_in_aquarium_55f01fed.mp4",
            "caption": "Feeding time, no need to lift the whole lid. 🐟\n\nJust use the feeding hole.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F10"
          },
          {
            "id": "R7-F11-FB",
            "title": "R7-F11 · Flow · Curious cat: mèo tò mò · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Cat_watching_aquarium_fish_d5908f6a.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Cat_watching_aquarium_fish_d5908f6a.mp4",
            "caption": "Someone is very interested in the tank. 🐱\n\nA clear lid keeps the view and the paws apart.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F11"
          },
          {
            "id": "R7-F12-FB",
            "title": "R7-F12 · Flow · Clear view: nhìn rõ bể · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Replacing_cloudy_aquarium_lid_0afe8540.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Replacing_cloudy_aquarium_lid_0afe8540.mp4",
            "caption": "Cloudy lid out, clear lid in. 🔍\n\nSee your fish clearly again.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F12"
          },
          {
            "id": "R7-V13-HF-FB",
            "title": "R7-V13-HF · Escape artist (pilot) · Higgsfield Marketing Studio (UGC Selfie Testimonial) · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption không nêu số lỗ hay claim chưa xác minh (không \"fits perfectly\", không kích thước). Video đã xem contact sheet, chưa nghe lời thoại. Nhân vật là avatar AI của Higgsfield. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "R7-V13-HF-marketing-studio.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/R7-V13-HF-marketing-studio.mp4",
            "caption": "Open tank. Jumping fish. Every night. 🐠\n\nA clear lid with a fine mesh panel and a feeding hole, so you can feed without taking the whole top off.\n\nHave your fish ever tried to escape? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V13-HF"
          },
          {
            "id": "R7-V13-FLOW-FB",
            "title": "R7-V13-FLOW · Escape artist (pilot) · Google Flow · Facebook Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption không nêu số lỗ hay claim chưa xác minh (không \"fits perfectly\", không kích thước). KHÔNG KHUYẾN NGHỊ ĐĂNG: video có watermark \"Veo\" góc dưới phải, nắp nhiều lỗ hơn ảnh ref và nhân vật để trần vai/ngực (xem dòng R7-V13-FLOW). Chỉ đăng nếu Amin chấp nhận. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "R7-V13-FLOW-veo31fast.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/R7-V13-FLOW-veo31fast.mp4",
            "caption": "Open tank. Jumping fish. Now I can relax. 🐟\n\nClear lid, mesh panel, feeding hole.\n\nWhat do you keep on top of your tank? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V13-FLOW"
          }
        ],
        "note": "Đề xuất tạo Page (chờ Amin duyệt): tên AquaNest; category Pet Supplies (chưa xác minh tên mục trên Facebook); bio \"Aquarium ideas and tips for fish keepers.\"; email aquanest.shop@gmail.com (Amin chọn, chưa xác minh đã tạo). Avatar đề xuất: task-hub/KAN-81/output/aquanest-facebook-avatar.png. 5 bài nháp do Muse soạn (2026-11-08), Amin duyệt rồi tự đăng thủ công; video ở thư mục Drive https://drive.google.com/drive/folders/1GQMcLTxOWvROoLmPT_lXiKvWzpfQoy9y (chưa tự kiểm). Chưa bài nào qua cổng C hay đã đăng.\n\nCẬP NHẬT 09/11/2026: Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Page có thật tại URL trên; 5 bài FB chưa kiểm được vì phiên Facebook hết hạn (xem từng bài).\n\nCẬP NHẬT 10/11/2026 (theo báo cáo Muse, Claude chưa tự mở): trong tài khoản Facebook của Muse, Page AquaNest không còn trong danh sách Page quản lý (chỉ còn Nhà Minh Nhi, Noctanest, Github Coffee, Madagasca 3d); mở thẳng URL báo \"nội dung không khả dụng\". Page có thể bị gỡ, bị hạn chế hoặc mất quyền: CHƯA XÁC MINH, Amin cần kiểm. Các bài FB bên dưới coi là chưa xác minh."
      },
      "IG": {
        "status": "Đã đăng bài đầu",
        "posts": [
          {
            "id": "R7-V04-IG",
            "title": "R7-V04 · UGC selfie testimonial, hook Spicy, ngoài trời · Instagram Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe-gy6hlh1/",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Instagram 08/11 21:31; hashtag khớp, nhãn \"AI content\" bật. Bản đọc công khai không hiện đủ caption toàn văn (Muse ghi khớp bản duyệt lúc đăng).",
            "file": "KAN81-FB-01-video-04.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-01-video-04.mp4",
            "caption": "A lid that lets you see your tank — and feed through it. 🐠\n\nMesh panel on top, one round feeding hole, and a clear view of the fish below.\n\nWhat do you keep on top of your tank right now? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V04"
          },
          {
            "id": "R7-V11-IG",
            "title": "R7-V11 · Curious cat: mèo tò mò · Instagram Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe-rkHp67G/",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Instagram 08/11 21:33; hashtag khớp, nhãn \"AI content\" bật. 8 like, 1 share. Bản đọc công khai không hiện đủ caption toàn văn (Muse ghi khớp bản duyệt lúc đăng).",
            "file": "KAN81-FB-02-video-11.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-02-video-11.mp4",
            "caption": "Your cat is watching. Your fish are swimming. The lid is on. 🐱🐠\n\nA mesh lid with a feeding hole — so curious paws stay out of the water.\n\nDoes your cat sit by the tank like this? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #CatsOfFacebook #FishTank #CatLovers #AquariumLife",
            "creative": "R7-V11"
          },
          {
            "id": "R7-V10-IG",
            "title": "R7-V10 · Feed through the hole: cho ăn · Instagram Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe-5eJNrSH/",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Instagram 08/11 21:35; hashtag khớp, nhãn \"AI content\" bật. Bản đọc công khai không hiện đủ caption toàn văn (Muse ghi khớp bản duyệt lúc đăng).",
            "file": "KAN81-FB-03-video-10.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-03-video-10.mp4",
            "caption": "Feeding time, no lid lifting needed. 🐟\n\nDrop the food through the round hole and watch them come up for it.\n\nHow do you feed your fish — lid on or lid off? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishFeeding #FishTank #AquariumLife #FishKeeper",
            "creative": "R7-V10"
          },
          {
            "id": "R7-V08-IG",
            "title": "R7-V08 · Escape artist (cá nhảy): UGC nói trước camera · Instagram Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe_FoFBpSU/",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Instagram 08/11 21:37; hashtag khớp, nhãn \"AI content\" bật. 1 share. Bản đọc công khai không hiện đủ caption toàn văn (Muse ghi khớp bản duyệt lúc đăng).",
            "file": "KAN81-FB-04-video-08.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-04-video-08.mp4",
            "caption": "Night time in the fish room. 🌙🐠\n\nLid on, lights low, fish settling in for the night.\n\nDo you leave a lid on your tank overnight? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #NightTank",
            "creative": "R7-V08"
          },
          {
            "id": "R7-V12-IG",
            "title": "R7-V12 · Clear view: nhìn rõ bể · Instagram Reel",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe_THmhiC5/",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): Instagram 08/11 21:39; hashtag khớp, nhãn \"AI content\" bật. 2 like. Bản đọc công khai không hiện đủ caption toàn văn (Muse ghi khớp bản duyệt lúc đăng).",
            "file": "KAN81-FB-05-video-12.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-05-video-12.mp4",
            "caption": "Same tank. Clearer view. ✨🐠\n\nA quick wipe, and the lid looks new again.\n\nHow often do you clean your tank lid? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #TankMaintenance #FishKeeper",
            "creative": "R7-V12"
          },
          {
            "id": "R7-V01-IG",
            "title": "R7-V01 · Dark room, bể cá rạn LED xanh, đặt nắp lên bể · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V01). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
            "caption": "Reef glow, lid on. 💙\n\nA clear lid keeps the tank tidy while the light does its thing.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V01"
          },
          {
            "id": "R7-V02-IG",
            "title": "R7-V02 · Camera POV, hook Product Crash, phòng ngủ · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
            "caption": "3 AM tank check. 👀\n\nA clear lid helps keep curious jumpers where they belong.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V02"
          },
          {
            "id": "R7-V03-IG",
            "title": "R7-V03 · Cận bể rạn, ánh sáng tím xanh · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V03). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
            "caption": "Purple and blue glow, lid on. 💜\n\nA clear lid you can still see through.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V03"
          },
          {
            "id": "R7-V05-IG",
            "title": "R7-V05 · Mess to Fresh, hook Epic Fail, sân thượng · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
            "caption": "From messy tank top to tidy. ✨\n\nSwap the old top for a clear lid with a feeding hole.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V05"
          },
          {
            "id": "R7-V06-IG",
            "title": "R7-V06 · Cây lan ý trên bể, tay nhấc nắp tròn · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V06). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
            "caption": "A plant on the tank, a lid under it. 🌿\n\nLifting a clear round lid to feed.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V06"
          },
          {
            "id": "R7-V07-IG",
            "title": "R7-V07 · Phòng tối, bể thủy sinh lá đỏ · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
            "caption": "Dark room, red plants, quiet tank. 🌱\n\nA clear lid keeps the view open.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V07"
          },
          {
            "id": "R7-V09-IG",
            "title": "R7-V09 · Measure twice: đo và đặt thử · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "video-09.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-09.mp4",
            "caption": "Measure twice, place once. 📏\n\nCheck your tank size before you pick a lid.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V09"
          },
          {
            "id": "R7-F08-IG",
            "title": "R7-F08 · Flow · Escape artist (cá nhảy): UGC nói trước camera · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Person_securing_fish_tank_lid_b558e7aa.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_securing_fish_tank_lid_b558e7aa.mp4",
            "caption": "Open tank. Jumping fish. Every night. 🐠\n\nA clear lid with a feeding hole, so you do not take the whole top off.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F08"
          },
          {
            "id": "R7-F09-IG",
            "title": "R7-F09 · Flow · Measure twice: đo và đặt thử · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Measuring_and_installing_aquariu…_89b3e0ca.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Measuring_and_installing_aquariu…_89b3e0ca.mp4",
            "caption": "Measure twice, place once. 📏\n\nCheck your tank size before you pick a lid.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F09"
          },
          {
            "id": "R7-F10-IG",
            "title": "R7-F10 · Flow · Feed through the hole: cho ăn · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Person_feeding_fish_in_aquarium_55f01fed.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_feeding_fish_in_aquarium_55f01fed.mp4",
            "caption": "Feeding time, no need to lift the whole lid. 🐟\n\nJust use the feeding hole.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F10"
          },
          {
            "id": "R7-F11-IG",
            "title": "R7-F11 · Flow · Curious cat: mèo tò mò · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Cat_watching_aquarium_fish_d5908f6a.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Cat_watching_aquarium_fish_d5908f6a.mp4",
            "caption": "Someone is very interested in the tank. 🐱\n\nA clear lid keeps the view and the paws apart.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F11"
          },
          {
            "id": "R7-F12-IG",
            "title": "R7-F12 · Flow · Clear view: nhìn rõ bể · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Replacing_cloudy_aquarium_lid_0afe8540.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Replacing_cloudy_aquarium_lid_0afe8540.mp4",
            "caption": "Cloudy lid out, clear lid in. 🔍\n\nSee your fish clearly again.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F12"
          },
          {
            "id": "R7-V13-HF-IG",
            "title": "R7-V13-HF · Escape artist (pilot) · Higgsfield Marketing Studio (UGC Selfie Testimonial) · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption không nêu số lỗ hay claim chưa xác minh (không \"fits perfectly\", không kích thước). Video đã xem contact sheet, chưa nghe lời thoại. Nhân vật là avatar AI của Higgsfield. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "R7-V13-HF-marketing-studio.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/R7-V13-HF-marketing-studio.mp4",
            "caption": "Open tank. Jumping fish. Every night. 🐠\n\nA clear lid with a fine mesh panel and a feeding hole, so you can feed without taking the whole top off.\n\nHave your fish ever tried to escape? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V13-HF"
          },
          {
            "id": "R7-V13-FLOW-IG",
            "title": "R7-V13-FLOW · Escape artist (pilot) · Google Flow · Instagram Reel",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption không nêu số lỗ hay claim chưa xác minh (không \"fits perfectly\", không kích thước). KHÔNG KHUYẾN NGHỊ ĐĂNG: video có watermark \"Veo\" góc dưới phải, nắp nhiều lỗ hơn ảnh ref và nhân vật để trần vai/ngực (xem dòng R7-V13-FLOW). Chỉ đăng nếu Amin chấp nhận. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "R7-V13-FLOW-veo31fast.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/R7-V13-FLOW-veo31fast.mp4",
            "caption": "Open tank. Jumping fish. Now I can relax. 🐟\n\nClear lid, mesh panel, feeding hole.\n\nWhat do you keep on top of your tank? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V13-FLOW"
          }
        ],
        "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): 5/5 Reels live, 0 follower, nhãn AI bật cả 5. Ngoài phạm vi Jira KAN-81 gốc (FB + YT) nhưng Amin yêu cầu đăng thêm.",
        "url": "https://www.instagram.com/aquanest.shop",
        "handle": "aquanest.shop"
      },
      "TT": {
        "status": "Đã đăng bài đầu",
        "posts": [
          {
            "id": "R7-V04-TT",
            "title": "R7-V04 · UGC selfie testimonial, hook Spicy, ngoài trời · TikTok",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@aquanest.shop/video/7705690118455037185",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok 08/11 ~13:53; caption và hashtag khớp; nhãn AI BẬT (FB-01 đăng trước dặn của Amin 15:08 là TikTok không cần nhãn AI).",
            "file": "KAN81-FB-01-video-04.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-01-video-04.mp4",
            "caption": "A lid that lets you see your tank — and feed through it. 🐠\n\nMesh panel on top, one round feeding hole, and a clear view of the fish below.\n\nWhat do you keep on top of your tank right now? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V04"
          },
          {
            "id": "R7-V11-TT",
            "title": "R7-V11 · Curious cat: mèo tò mò · TikTok",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@aquanest.shop/video/7705730092952997138",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok 08/11 ~16:28; caption và hashtag khớp; nhãn AI TẮT (đúng dặn của Amin 15:08: TikTok không cần nhãn AI).",
            "file": "KAN81-FB-02-video-11.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-02-video-11.mp4",
            "caption": "Your cat is watching. Your fish are swimming. The lid is on. 🐱🐠\n\nA mesh lid with a feeding hole — so curious paws stay out of the water.\n\nDoes your cat sit by the tank like this? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #CatsOfFacebook #FishTank #CatLovers #AquariumLife",
            "creative": "R7-V11"
          },
          {
            "id": "R7-V10-TT",
            "title": "R7-V10 · Feed through the hole: cho ăn · TikTok",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@aquanest.shop/video/7705731065868045576",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok hẹn 08/11 16:50, nay đã lên (\"1d ago\"); caption và hashtag khớp; nhãn AI TẮT (đúng dặn của Amin 15:08: TikTok không cần nhãn AI).",
            "file": "KAN81-FB-03-video-10.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-03-video-10.mp4",
            "caption": "Feeding time, no lid lifting needed. 🐟\n\nDrop the food through the round hole and watch them come up for it.\n\nHow do you feed your fish — lid on or lid off? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishFeeding #FishTank #AquariumLife #FishKeeper",
            "creative": "R7-V10"
          },
          {
            "id": "R7-V08-TT",
            "title": "R7-V08 · Escape artist (cá nhảy): UGC nói trước camera · TikTok",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@aquanest.shop/video/7705732669446966546",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok hẹn 08/11 17:20, nay đã lên (\"1d ago\"); caption và hashtag khớp; nhãn AI TẮT (đúng dặn của Amin 15:08: TikTok không cần nhãn AI).",
            "file": "KAN81-FB-04-video-08.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-04-video-08.mp4",
            "caption": "Night time in the fish room. 🌙🐠\n\nLid on, lights low, fish settling in for the night.\n\nDo you leave a lid on your tank overnight? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #NightTank",
            "creative": "R7-V08"
          },
          {
            "id": "R7-V12-TT",
            "title": "R7-V12 · Clear view: nhìn rõ bể · TikTok",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@aquanest.shop/video/7705732894257351954",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): TikTok hẹn 08/11 17:50, nay đã lên (\"23h ago\"); caption và hashtag khớp; nhãn AI TẮT (đúng dặn của Amin 15:08: TikTok không cần nhãn AI).",
            "file": "KAN81-FB-05-video-12.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-05-video-12.mp4",
            "caption": "Same tank. Clearer view. ✨🐠\n\nA quick wipe, and the lid looks new again.\n\nHow often do you clean your tank lid? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #TankMaintenance #FishKeeper",
            "creative": "R7-V12"
          },
          {
            "id": "R7-V01-TT",
            "title": "R7-V01 · Dark room, bể cá rạn LED xanh, đặt nắp lên bể · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V01). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
            "caption": "Reef glow, lid on. 💙\n\nA clear lid keeps the tank tidy while the light does its thing.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V01"
          },
          {
            "id": "R7-V02-TT",
            "title": "R7-V02 · Camera POV, hook Product Crash, phòng ngủ · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
            "caption": "3 AM tank check. 👀\n\nA clear lid helps keep curious jumpers where they belong.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V02"
          },
          {
            "id": "R7-V03-TT",
            "title": "R7-V03 · Cận bể rạn, ánh sáng tím xanh · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V03). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
            "caption": "Purple and blue glow, lid on. 💜\n\nA clear lid you can still see through.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V03"
          },
          {
            "id": "R7-V05-TT",
            "title": "R7-V05 · Mess to Fresh, hook Epic Fail, sân thượng · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
            "caption": "From messy tank top to tidy. ✨\n\nSwap the old top for a clear lid with a feeding hole.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V05"
          },
          {
            "id": "R7-V06-TT",
            "title": "R7-V06 · Cây lan ý trên bể, tay nhấc nắp tròn · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V06). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
            "caption": "A plant on the tank, a lid under it. 🌿\n\nLifting a clear round lid to feed.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V06"
          },
          {
            "id": "R7-V07-TT",
            "title": "R7-V07 · Phòng tối, bể thủy sinh lá đỏ · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
            "caption": "Dark room, red plants, quiet tank. 🌱\n\nA clear lid keeps the view open.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V07"
          },
          {
            "id": "R7-V09-TT",
            "title": "R7-V09 · Measure twice: đo và đặt thử · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "video-09.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-09.mp4",
            "caption": "Measure twice, place once. 📏\n\nCheck your tank size before you pick a lid.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V09"
          },
          {
            "id": "R7-F08-TT",
            "title": "R7-F08 · Flow · Escape artist (cá nhảy): UGC nói trước camera · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Person_securing_fish_tank_lid_b558e7aa.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_securing_fish_tank_lid_b558e7aa.mp4",
            "caption": "Open tank. Jumping fish. Every night. 🐠\n\nA clear lid with a feeding hole, so you do not take the whole top off.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F08"
          },
          {
            "id": "R7-F09-TT",
            "title": "R7-F09 · Flow · Measure twice: đo và đặt thử · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Measuring_and_installing_aquariu…_89b3e0ca.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Measuring_and_installing_aquariu…_89b3e0ca.mp4",
            "caption": "Measure twice, place once. 📏\n\nCheck your tank size before you pick a lid.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F09"
          },
          {
            "id": "R7-F10-TT",
            "title": "R7-F10 · Flow · Feed through the hole: cho ăn · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Person_feeding_fish_in_aquarium_55f01fed.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_feeding_fish_in_aquarium_55f01fed.mp4",
            "caption": "Feeding time, no need to lift the whole lid. 🐟\n\nJust use the feeding hole.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F10"
          },
          {
            "id": "R7-F11-TT",
            "title": "R7-F11 · Flow · Curious cat: mèo tò mò · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Cat_watching_aquarium_fish_d5908f6a.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Cat_watching_aquarium_fish_d5908f6a.mp4",
            "caption": "Someone is very interested in the tank. 🐱\n\nA clear lid keeps the view and the paws apart.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F11"
          },
          {
            "id": "R7-F12-TT",
            "title": "R7-F12 · Flow · Clear view: nhìn rõ bể · TikTok",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Replacing_cloudy_aquarium_lid_0afe8540.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Replacing_cloudy_aquarium_lid_0afe8540.mp4",
            "caption": "Cloudy lid out, clear lid in. 🔍\n\nSee your fish clearly again.\n\nWhat do you keep on top of your tank? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F12"
          },
          {
            "id": "R7-V13-HF-TT",
            "title": "R7-V13-HF · Escape artist (pilot) · Higgsfield Marketing Studio (UGC Selfie Testimonial) · TikTok",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "",
            "date": "2026-11-10",
            "note": "ĐÃ ĐĂNG trên TikTok 10/11/2026 11:35–11:36 (Fact: Amin gửi ảnh chụp TikTok Studio; quyền riêng tư Everyone, 0 view/like/comment lúc chụp). Link bài chưa có. Do Muse đăng, ngoài kế hoạch Claude (Muse từng được dặn không đăng V13-FLOW). Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption không nêu số lỗ hay claim chưa xác minh (không \"fits perfectly\", không kích thước). Video đã xem contact sheet, chưa nghe lời thoại. Nhân vật là avatar AI của Higgsfield. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "R7-V13-HF-marketing-studio.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/R7-V13-HF-marketing-studio.mp4",
            "caption": "Open tank. Jumping fish. Every night. 🐠\n\nA clear lid with a fine mesh panel and a feeding hole, so you can feed without taking the whole top off.\n\nHave your fish ever tried to escape? Tell us below 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V13-HF"
          },
          {
            "id": "R7-V13-FLOW-TT",
            "title": "R7-V13-FLOW · Escape artist (pilot) · Google Flow · TikTok",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "",
            "date": "2026-11-10",
            "note": "ĐÃ ĐĂNG trên TikTok 10/11/2026 11:35–11:36 (Fact: Amin gửi ảnh chụp TikTok Studio; quyền riêng tư Everyone, 0 view/like/comment lúc chụp). Link bài chưa có. Do Muse đăng, ngoài kế hoạch Claude (Muse từng được dặn không đăng V13-FLOW). Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption không nêu số lỗ hay claim chưa xác minh (không \"fits perfectly\", không kích thước). KHÔNG KHUYẾN NGHỊ ĐĂNG: video có watermark \"Veo\" góc dưới phải, nắp nhiều lỗ hơn ảnh ref và nhân vật để trần vai/ngực (xem dòng R7-V13-FLOW). Chỉ đăng nếu Amin chấp nhận. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "R7-V13-FLOW-veo31fast.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/R7-V13-FLOW-veo31fast.mp4",
            "caption": "Open tank. Jumping fish. Now I can relax. 🐟\n\nClear lid, mesh panel, feeding hole.\n\nWhat do you keep on top of your tank? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V13-FLOW"
          }
        ],
        "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): 5/5 video live, 0 follower. Ngoài phạm vi Jira KAN-81 gốc nhưng Amin yêu cầu đăng thêm.",
        "url": "https://www.tiktok.com/@aquanest.shop",
        "handle": "aquanest.shop"
      },
      "YT": {
        "name": "AquaNest",
        "handle": "@Minh-m7j8g",
        "url": "https://www.youtube.com/channel/UCURNa1OQNQfDrlr66I44bTQ",
        "description": "Aquarium ideas and tips for fish keepers. Videos are illustrative and may be AI-generated.",
        "email": "aquanest.shop@gmail.com",
        "category": "",
        "status": "Đã đăng bài đầu",
        "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): kênh hiển thị \"AquaNest\", 1 sub, 5/5 Shorts công khai (kênh có sẵn của tài khoản Google, Muse không tạo mới).",
        "posts": [
          {
            "id": "R7-V04-YT",
            "title": "R7-V04 · UGC selfie testimonial, hook Spicy, ngoài trời · YouTube Short",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/q339kjJE6Wo",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube 08/11, 1.198 lượt xem; Studio báo \"Yes, AI was used\"; caption và hashtag khớp.",
            "file": "KAN81-FB-01-video-04.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-01-video-04.mp4",
            "caption": "A lid that lets you see your tank — and feed through it. 🐠\n\nMesh panel on top, one round feeding hole, and a clear view of the fish below.\n\nWhat do you keep on top of your tank right now? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V04",
            "ytTitle": "A lid that lets you see your tank — and feed through it. 🐠"
          },
          {
            "id": "R7-V11-YT",
            "title": "R7-V11 · Curious cat: mèo tò mò · YouTube Short",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/Nk_tVvQ5eAM",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube 08/11, 20 lượt xem; Studio báo \"Yes, AI was used\"; caption và hashtag khớp.",
            "file": "KAN81-FB-02-video-11.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-02-video-11.mp4",
            "caption": "Your cat is watching. Your fish are swimming. The lid is on. 🐱🐠\n\nA mesh lid with a feeding hole — so curious paws stay out of the water.\n\nDoes your cat sit by the tank like this? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #CatsOfFacebook #FishTank #CatLovers #AquariumLife",
            "creative": "R7-V11",
            "ytTitle": "Your cat is watching. Your fish are swimming. The lid is on. 🐱🐠"
          },
          {
            "id": "R7-V10-YT",
            "title": "R7-V10 · Feed through the hole: cho ăn · YouTube Short",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/VjCSfaKppMc",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube 08/11, 1.393 lượt xem; Studio báo \"Yes, AI was used\"; caption và hashtag khớp.",
            "file": "KAN81-FB-03-video-10.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-03-video-10.mp4",
            "caption": "Feeding time, no lid lifting needed. 🐟\n\nDrop the food through the round hole and watch them come up for it.\n\nHow do you feed your fish — lid on or lid off? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishFeeding #FishTank #AquariumLife #FishKeeper",
            "creative": "R7-V10",
            "ytTitle": "Feeding time, no lid lifting needed. 🐟"
          },
          {
            "id": "R7-V08-YT",
            "title": "R7-V08 · Escape artist (cá nhảy): UGC nói trước camera · YouTube Short",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/woGODPdBwd8",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube 08/11, 1.038 lượt xem; Studio báo \"Yes, AI was used\"; caption và hashtag khớp.",
            "file": "KAN81-FB-04-video-08.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-04-video-08.mp4",
            "caption": "Night time in the fish room. 🌙🐠\n\nLid on, lights low, fish settling in for the night.\n\nDo you leave a lid on your tank overnight? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #NightTank",
            "creative": "R7-V08",
            "ytTitle": "Night time in the fish room. 🌙🐠"
          },
          {
            "id": "R7-V12-YT",
            "title": "R7-V12 · Clear view: nhìn rõ bể · YouTube Short",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/arfE7uOkgLE",
            "date": "2026-11-08",
            "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): YouTube 08/11, 10 lượt xem; Studio báo \"Yes, AI was used\"; caption và hashtag khớp.",
            "file": "KAN81-FB-05-video-12.mp4",
            "media": "0-dashboard/task-hub/KAN-81/output/facebook-drafts/KAN81-FB-05-video-12.mp4",
            "caption": "Same tank. Clearer view. ✨🐠\n\nA quick wipe, and the lid looks new again.\n\nHow often do you clean your tank lid? Tell us in the comments 👇\n\nFollow AquaNest for more aquarium ideas.\n\n#AquariumLid #FishTank #AquariumLife #TankMaintenance #FishKeeper",
            "creative": "R7-V12",
            "ytTitle": "Same tank. Clearer view. ✨🐠"
          },
          {
            "id": "R7-V01-YT",
            "title": "R7-V01 · Dark room, bể cá rạn LED xanh, đặt nắp lên bể · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V01). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_144605_cd819882-416e-41ec-9e95-6460dbd9bb5e.mp4",
            "caption": "Reef glow, lid on. 💙\n\nA clear lid keeps the tank tidy while the light does its thing.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V01",
            "ytTitle": "Reef glow, lid on. 💙"
          },
          {
            "id": "R7-V02-YT",
            "title": "R7-V02 · Camera POV, hook Product Crash, phòng ngủ · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_151057_0996a104-eeb3-4129-9609-d138a15a2707.mp4",
            "caption": "3 AM tank check. 👀\n\nA clear lid helps keep curious jumpers where they belong.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V02",
            "ytTitle": "3 AM tank check. 👀"
          },
          {
            "id": "R7-V03-YT",
            "title": "R7-V03 · Cận bể rạn, ánh sáng tím xanh · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V03). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152124_553022e5-87a4-474a-8352-f70bc9580f41.mp4",
            "caption": "Purple and blue glow, lid on. 💜\n\nA clear lid you can still see through.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V03",
            "ytTitle": "Purple and blue glow, lid on. 💜"
          },
          {
            "id": "R7-V05-YT",
            "title": "R7-V05 · Mess to Fresh, hook Epic Fail, sân thượng · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_152904_8e60819f-60f3-4e7b-a89d-53852ee40a61.mp4",
            "caption": "From messy tank top to tidy. ✨\n\nSwap the old top for a clear lid with a feeding hole.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V05",
            "ytTitle": "From messy tank top to tidy. ✨"
          },
          {
            "id": "R7-V06-YT",
            "title": "R7-V06 · Cây lan ý trên bể, tay nhấc nắp tròn · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. KHÔNG KHUYẾN NGHỊ ĐĂNG: video nguồn của bên thứ ba, chưa rõ quyền dùng (xem dòng R7-V06). Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/hf_20261026_153449_4cdccff3-4b0e-48bb-9010-cbff43689614.mp4",
            "caption": "A plant on the tank, a lid under it. 🌿\n\nLifting a clear round lid to feed.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V06",
            "ytTitle": "A plant on the tank, a lid under it. 🌿"
          },
          {
            "id": "R7-V07-YT",
            "title": "R7-V07 · Phòng tối, bể thủy sinh lá đỏ · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-07-media-generation-aquarium-lid-ad-9x16-12s-0-eec7c472.mp4",
            "caption": "Dark room, red plants, quiet tank. 🌱\n\nA clear lid keeps the view open.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V07",
            "ytTitle": "Dark room, red plants, quiet tank. 🌱"
          },
          {
            "id": "R7-V09-YT",
            "title": "R7-V09 · Measure twice: đo và đặt thử · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng.  Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "video-09.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/muse/video-09.mp4",
            "caption": "Measure twice, place once. 📏\n\nCheck your tank size before you pick a lid.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V09",
            "ytTitle": "Measure twice, place once. 📏"
          },
          {
            "id": "R7-F08-YT",
            "title": "R7-F08 · Flow · Escape artist (cá nhảy): UGC nói trước camera · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Person_securing_fish_tank_lid_b558e7aa.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_securing_fish_tank_lid_b558e7aa.mp4",
            "caption": "Open tank. Jumping fish. Every night. 🐠\n\nA clear lid with a feeding hole, so you do not take the whole top off.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F08",
            "ytTitle": "Open tank. Jumping fish. Every night. 🐠"
          },
          {
            "id": "R7-F09-YT",
            "title": "R7-F09 · Flow · Measure twice: đo và đặt thử · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Measuring_and_installing_aquariu…_89b3e0ca.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Measuring_and_installing_aquariu…_89b3e0ca.mp4",
            "caption": "Measure twice, place once. 📏\n\nCheck your tank size before you pick a lid.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F09",
            "ytTitle": "Measure twice, place once. 📏"
          },
          {
            "id": "R7-F10-YT",
            "title": "R7-F10 · Flow · Feed through the hole: cho ăn · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Person_feeding_fish_in_aquarium_55f01fed.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Person_feeding_fish_in_aquarium_55f01fed.mp4",
            "caption": "Feeding time, no need to lift the whole lid. 🐟\n\nJust use the feeding hole.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F10",
            "ytTitle": "Feeding time, no need to lift the whole lid. 🐟"
          },
          {
            "id": "R7-F11-YT",
            "title": "R7-F11 · Flow · Curious cat: mèo tò mò · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Cat_watching_aquarium_fish_d5908f6a.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Cat_watching_aquarium_fish_d5908f6a.mp4",
            "caption": "Someone is very interested in the tank. 🐱\n\nA clear lid keeps the view and the paws apart.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F11",
            "ytTitle": "Someone is very interested in the tank. 🐱"
          },
          {
            "id": "R7-F12-YT",
            "title": "R7-F12 · Flow · Clear view: nhìn rõ bể · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption soạn theo chủ đề video, không nêu số lỗ, kích thước hay claim chưa xác minh; chưa xem lại nội dung video từng cảnh, Amin cần xem trước khi đăng. Chưa kiểm watermark Veo; xem video trước khi đăng, nếu có watermark thì không đăng. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "Replacing_cloudy_aquarium_lid_0afe8540.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/Replacing_cloudy_aquarium_lid_0afe8540.mp4",
            "caption": "Cloudy lid out, clear lid in. 🔍\n\nSee your fish clearly again.\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-F12",
            "ytTitle": "Cloudy lid out, clear lid in. 🔍"
          },
          {
            "id": "R7-V13-HF-YT",
            "title": "R7-V13-HF · Escape artist (pilot) · Higgsfield Marketing Studio (UGC Selfie Testimonial) · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption không nêu số lỗ hay claim chưa xác minh (không \"fits perfectly\", không kích thước). Video đã xem contact sheet, chưa nghe lời thoại. Nhân vật là avatar AI của Higgsfield. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "R7-V13-HF-marketing-studio.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/higgsfield/R7-V13-HF-marketing-studio.mp4",
            "caption": "Open tank. Jumping fish. Every night. 🐠\n\nA clear lid with a fine mesh panel and a feeding hole, so you can feed without taking the whole top off.\n\nHave your fish ever tried to escape? Tell us below 👇\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V13-HF",
            "ytTitle": "Open tank. Jumping fish. Every night. 🐠"
          },
          {
            "id": "R7-V13-FLOW-YT",
            "title": "R7-V13-FLOW · Escape artist (pilot) · Google Flow · YouTube Short",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Nháp 10/11/2026 do Claude soạn, chờ Amin xem; CHƯA đăng. Bật nhãn nội dung AI khi đăng. Caption không nêu số lỗ hay claim chưa xác minh (không \"fits perfectly\", không kích thước). KHÔNG KHUYẾN NGHỊ ĐĂNG: video có watermark \"Veo\" góc dưới phải, nắp nhiều lỗ hơn ảnh ref và nhân vật để trần vai/ngực (xem dòng R7-V13-FLOW). Chỉ đăng nếu Amin chấp nhận. Kênh đăng nhập: TikTok/Instagram/YouTube đã đăng xuất, Page Facebook AquaNest không mở được (Muse báo 10/11/2026), cần đăng nhập lại trước khi đăng.",
            "file": "R7-V13-FLOW-veo31fast.mp4",
            "media": "1-dropship/workspace/aquanest/3-creative/videos/flow/R7-V13-FLOW-veo31fast.mp4",
            "caption": "Open tank. Jumping fish. Now I can relax. 🐟\n\nClear lid, mesh panel, feeding hole.\n\nWhat do you keep on top of your tank? Tell us in the comments 👇\n\nVideos are illustrative and may be AI-generated.\n\n#AquariumLid #FishTank #AquariumLife #FishKeeper #PlantedTank",
            "creative": "R7-V13-FLOW",
            "ytTitle": "Open tank. Jumping fish. Now I can relax. 🐟"
          }
        ]
      }
    },
    "tasks": [
      {
        "id": "t-kan81",
        "key": "KAN-81",
        "title": "[Social] Tab Social + thông tin store AquaNest",
        "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-81",
        "status": "Done",
        "note": "Hub: task-hub/KAN-81. Draft Facebook: output/facebook-drafts/ (5 video).",
        "agents": [
          {
            "id": "a81-1",
            "kind": "Claude",
            "name": "KAN-81 · Social tab + thông tin store",
            "url": "claude://claude.ai/epitaxy/local_0464fc38-baf4-4d21-aed9-4a20cf613e48",
            "role": "Dựng tab Social, Excel, brief Muse",
            "state": "Idle",
            "note": "Phần dựng xong; chưa ghi STATUS lúc báo."
          },
          {
            "id": "a81-2",
            "kind": "Muse",
            "name": "Muse · soạn 5 bài Facebook",
            "url": "",
            "role": "Soạn caption/hashtag 5 bài draft",
            "state": "Idle",
            "note": "Thread chưa ghi link trong task-hub; bổ sung khi có."
          },
          {
            "id": "a81-3",
            "kind": "Amin",
            "name": "Amin",
            "url": "",
            "role": "Duyệt tên Page, đăng tay",
            "state": "Chờ Amin",
            "note": "Duyệt 5 bài nháp, tạo Page AquaNest."
          }
        ]
      },
      {
        "id": "t-kan83",
        "key": "KAN-83",
        "title": "Web Store Hub (quản lý store, đồng bộ dữ liệu)",
        "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-83",
        "status": "Done",
        "note": "Task chung cho cả 3 store. Hub: task-hub/KAN-83. Code: 1-dropship/store-hub. Supabase chờ Amin duyệt bản local.",
        "agents": [
          {
            "id": "a83-1",
            "kind": "Claude",
            "name": "KAN-83 · Store Hub (session đang làm web)",
            "url": "",
            "role": "Dựng web, nhập seed, checklist, video",
            "state": "Đang chạy",
            "note": "Xong giai đoạn 2 (checklist, video, task & agent). Chờ Amin duyệt bản local rồi chọn project Supabase."
          },
          {
            "id": "a83-2",
            "kind": "Claude",
            "name": "Amin dashboard (fork 3)",
            "url": "claude://claude.ai/epitaxy/local_31f67b50-fd30-43af-afd1-2e131ee75abe",
            "role": "Session điều phối, giao KAN-83",
            "state": "Idle",
            "note": "Nhận báo cáo từ session KAN-83."
          },
          {
            "id": "a83-3",
            "kind": "Amin",
            "name": "Amin",
            "url": "",
            "role": "Duyệt bản local, chọn Supabase",
            "state": "Chờ Amin",
            "note": ""
          }
        ]
      }
    ],
    "seedRev": 22,
    "avatar": "1-dropship/workspace/aquanest/3-creative/refs/avatar/aquanest-avatar.jpg",
    "productImages": [
      {
        "src": "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/11d85c81-listing-image-19300668.jpg",
        "label": "Ảnh listing tham chiếu"
      },
      {
        "src": "1-dropship/workspace/aquanest/3-creative/refs/higgsfield-input/32427aaf-ref-image.jpg",
        "label": "Ảnh ref nắp dùng gen video"
      }
    ]
  },
  {
    "id": "heartbond",
    "name": "HeartBond",
    "product": "Hug Ring · nhẫn hai bàn tay ôm ngón (To My Granddaughter)",
    "jira": "KAN-82, KAN-90",
    "market": "US",
    "status": "Đang làm",
    "email": "",
    "domain": "heartbond.com đã có người đăng ký (Shopify, 08/11/2026); heartbond.net còn trống 19 USD năm đầu (kiểm 08/11/2026, chưa mua, Amin tự mua sau)",
    "updated": "2026-11-10",
    "seedRev": 33,
    "note": "Tên store HeartBond do Amin chọn 08/11/2026; chưa kiểm nhãn hiệu (có thương hiệu gần giống Bond Touch), chưa kiểm handle. Email kênh: chờ Amin. Chưa có supplier, mẫu thật, giá vốn/bán, SKU, store, kênh; chưa đăng gì. Sản phẩm đổi từ Worth Always sang Hug Ring; creative đầu HR-B1 thay HR-A1. Dữ liệu theo task-hub/KAN-82 (manifest, pack HR-B1, xlsx).",
    "productInfo": [
      {
        "n": 1,
        "group": "Nhận diện",
        "name": "Tên sản phẩm",
        "value": "Hug Ring (mẫu To My Granddaughter). Nhẫn hở kết thúc bằng hai bàn tay nhỏ ôm quanh ngón tay. Product 7 trước đó (Worth Always) đã được thay bằng Hug Ring.",
        "evidence": "",
        "source": "task-hub/KAN-82/output/KAN-82-HR-B1-pack.md (mục 1)",
        "date": "2026-11-08"
      },
      {
        "n": 2,
        "group": "Nhận diện",
        "name": "Ngành hàng",
        "value": "Trang sức cảm xúc / quà tặng: nhẫn",
        "evidence": "",
        "source": "KAN-82-HR-B1-pack.md",
        "date": "2026-11-08"
      },
      {
        "n": 3,
        "group": "Nhận diện",
        "name": "Mô tả ngắn và hình thái",
        "value": "Nhẫn hở kết thúc bằng hai bàn tay nhỏ ôm quanh ngón tay (xem ảnh neo). Chất liệu, size, ảnh thật của mình: CHƯA CÓ.",
        "evidence": "",
        "source": "KAN-82-HR-B1-pack.md; ảnh neo HR-B1-assets/",
        "date": "2026-11-08"
      },
      {
        "n": 4,
        "group": "Khách hàng",
        "name": "Khách hàng mục tiêu",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 5,
        "group": "Khách hàng",
        "name": "Vấn đề giải quyết",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 6,
        "group": "Tư liệu",
        "name": "Ảnh sản phẩm (đúng sản phẩm)",
        "value": "Ảnh của Hope Rings chỉ tham chiếu hình dáng, nội bộ, không đăng. Cần ảnh/mẫu thật của mình trước khi đăng. Neo: anchor-1-ring-shape.png, anchor-2-ring-on-finger.jpg.",
        "evidence": "competitor_observation",
        "source": "https://hoperings.com/products/to-my-granddaughter-hug-ring (đọc 08/11/2026 (public .json của trang))",
        "date": "2026-11-08"
      },
      {
        "n": 7,
        "group": "Tư liệu",
        "name": "Video demo hoặc hướng dẫn",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 8,
        "group": "Nguồn hàng",
        "name": "Nhà cung cấp (link listing)",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 9,
        "group": "Nguồn hàng",
        "name": "Báo giá thật bằng văn bản",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 10,
        "group": "Giá",
        "name": "Giá mua ước tính",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 11,
        "group": "Giá",
        "name": "Phí ship, landed cost ước tính",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 12,
        "group": "Giá",
        "name": "Giá bán dự kiến",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 13,
        "group": "Giá",
        "name": "Biên gộp ước tính",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 14,
        "group": "Vật lý",
        "name": "Kích thước, cân nặng",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 15,
        "group": "Vật lý",
        "name": "Vật liệu, thông số",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 16,
        "group": "Cách dùng",
        "name": "Cách dùng, lắp đặt",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 17,
        "group": "Thị trường",
        "name": "Đối thủ chính và giá",
        "value": "Trang tham chiếu (hàng của Hope Rings, KHÔNG phải giá của mình): 304 stainless steel, adjustable one size, 39.99 USD (gạch 79.98). Giá vốn/giá bán của mình: chưa có.",
        "evidence": "competitor_observation",
        "source": "https://hoperings.com/products/to-my-granddaughter-hug-ring (đọc 08/11/2026 (public .json của trang))",
        "date": "2026-11-08"
      },
      {
        "n": 18,
        "group": "Thị trường",
        "name": "Bằng chứng ads (Ad Library)",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 19,
        "group": "Rủi ro",
        "name": "Claim được và không được",
        "value": "Tránh angle tưởng nhớ người mất. Không dùng: tarnish-free, lifetime, số khách, 90-day returns, free gift box, 50% off, free shipping, chất liệu, claim sức khỏe/tâm lý.",
        "evidence": "",
        "source": "KAN-82-HR-B1-pack.md mục 3 (đề xuất, chờ Amin duyệt)",
        "date": "2026-11-08"
      },
      {
        "n": 20,
        "group": "Rủi ro",
        "name": "Rủi ro, quy định",
        "value": "",
        "evidence": "",
        "source": "",
        "date": ""
      },
      {
        "n": 21,
        "group": "Đối thủ ref",
        "name": "Facebook page ref (đối thủ)",
        "value": "https://www.facebook.com/HopeRingsUS/",
        "evidence": "competitor_observation",
        "source": "Trang Sản phẩm Market Research (#/products), dòng 8 \"Hope rings\", cột Website; trong Sheet 2 cột Facebook/Website của dòng này đang bị đổi chỗ. Claude chưa mở kiểm.",
        "date": "2026-11-10"
      },
      {
        "n": 22,
        "group": "Đối thủ ref",
        "name": "Web ref (đối thủ)",
        "value": "https://hoperings.com/products/feather-from-an-angel",
        "evidence": "competitor_observation",
        "source": "Trang Sản phẩm Market Research (#/products), dòng 8 \"Hope rings\", cột Facebook (thực ra là link web). Claude chưa mở kiểm trong phiên này.",
        "date": "2026-11-10"
      },
      {
        "n": 23,
        "group": "Đối thủ ref",
        "name": "Ads ref (đối thủ)",
        "value": "https://www.facebook.com/ads/library/?id=2060905101404100",
        "evidence": "competitor_observation",
        "source": "Dòng 8 trên #/products không có link Ads; mã 2060905101404100 lấy từ tên file video mẫu \"AdLibNote_Hope Rings_2060905101404100\". Chưa mở kiểm, cần xác minh trên Ad Library.",
        "date": "2026-11-10"
      }
    ],
    "creative": [
      {
        "id": "HR-B1",
        "title": "Ôm từ xa: người bà ở xa cháu gái, tặng một cái ôm mang theo được. UGC POV 12 s, chữ hậu kỳ, không thoại, nhạc piano nhẹ",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC POV 12 s, 4 shot cố định, 9:16",
        "hook": "Hook 0–3 s: bà ~65 tuổi quay lưng bên cửa sổ bếp, cầm cốc, ánh sáng sớm; chưa có nhẫn. Chữ hậu kỳ: \"If you can't be there to hug her…\"",
        "step": "08/11: đã gen 2 video thử. Higgsfield 12 s (84 credit, 2 ảnh neo, KHÔNG có tiếng vì tắt audio; nhẫn/bàn tay chưa rõ, góc từ phía sau) và Google Flow 8 s (24 credit, chỉ text prompt, có track audio chưa nghe, nhẫn có thể lệch). Muse không tạo được video (403 chặn vùng). CHƯA review độc lập, CHƯA qua cổng C.",
        "note": "Primary text đề xuất: \"For the granddaughter you can't hug today.\"; headline: \"A little hug, to keep\". Chỉ là BẢN THỬ NỘI BỘ; chưa đăng cho tới khi có hàng thật khớp video. Nhân vật là AI, cần nhãn AI. Gói: task-hub/KAN-82/output/KAN-82-HR-B1-pack.md.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B1-higgsfield-seedance-v1.mp4",
        "kit": {
          "tool": "Higgsfield",
          "config": "seedance_2_5 · 12 s · 9:16 · 720p · generate_audio: false (tắt nên video không có tiếng) · seed 27014125 · 84 credit (Fact: lịch sử Higgsfield 08/11/2026 07:14 UTC, job 245f91dd)",
          "prompt": "Vertical 9:16, 12 seconds, realistic phone-filmed UGC look, soft warm morning window light, each shot is a fixed frame with no camera movement inside it, hard cuts between shots. The two reference images show only the shape of the ring: an open ring that ends in two small hands wrapping around a finger. Use them for the ring's shape only; do not copy the red velvet box, the card or any text from them, and do not invent engraving. Character (identical in every shot): a grandmother about 65 with neat silver-grey shoulder-length hair, a thick cream chunky-knit cardigan without text or logo, short natural unpainted nails, wearing no jewelry at all. Bright kitchen with a light wooden counter and a window with a sheer curtain. Shot 1 (0-3 s, NO ring in frame): seen from behind, the grandmother stands at the kitchen window holding a mug, quietly looking outside; top third of the frame left empty. Shot 2 (3-6 s): close-up of both her hands on the cream knit sleeve placing the hug ring on a small cream cloth inside an open ivory gift box with an ivory ribbon, no writing; the ring matches the references exactly. Shot 3 (6-9 s): one hand lays a blank cream card beside the ring while the other hand closes the lid. Shot 4 (9-12 s): she holds the closed box against her chest with both hands and smiles softly, the window blurred behind her; hold the last 2 seconds, top third empty. No spoken words, no on-screen text, no captions, no subtitles, no logo, no watermark, no readable writing on the card or box, no engraving visible, no red velvet or hexagon box, no extra or missing fingers, no other jewelry on anyone, no sparkles or CGI effects, no camera movement inside a shot.",
          "referenceVideo": [],
          "character": [],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "extra": [
            {
              "label": "Nguồn dữ liệu (Fact / Inference)",
              "text": "Prompt = prompt người dùng gửi lên (Fact, đọc từ lịch sử Higgsfield 09/11). 2 ref ảnh = anchor-1 + anchor-2 (Inference: khớp số lượng/định dạng png+jpg và ghi chú KAN-82)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B1-higgsfield-seedance-v1.mp4\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ]
        }
      },
      {
        "id": "HR-B1-flow",
        "title": "HR-B1 bản Google Flow (Omni 1.2 Flash, 8 s, chỉ text prompt)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC POV 8 s, 4 shot × 2 s, 9:16",
        "step": "Gen 08/11 trên tài khoản piscada, 24 credit. Không có ảnh neo nên hình nhẫn có thể lệch so với Hug Ring. Có track audio, chưa nghe.",
        "note": "Bản thử nội bộ, chưa review độc lập. Nhân vật AI, cần nhãn AI.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B1-flow-omni12flash-v1.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Omni 1.2 Flash · 8 s · 9:16 · chỉ text prompt, không ảnh neo · 24 credit",
          "prompt": "Realistic phone-filmed UGC look, soft warm morning window light, fixed frames with hard cuts, no camera movement inside a shot, soft piano music, no speech. Same grandmother in every shot: about 65, neat silver-grey shoulder-length hair, thick cream chunky-knit cardigan without text or logo, short natural unpainted nails, no jewelry. Bright kitchen, light wooden counter, window with a sheer curtain. The ring is a smooth polished silver-colored open ring whose two ends are shaped as two small hands that wrap around a finger and almost touch. 0-2 s (no ring in frame): seen from behind, she stands at the kitchen window holding a mug, top third of the frame empty. 2-4 s: close-up of her hands on the knit sleeve placing the hand-shaped ring on cream cloth inside an open ivory gift box with an ivory ribbon. 4-6 s: one hand lays a blank cream card beside the ring while the other closes the lid. 6-8 s: she holds the closed box to her chest and smiles softly, window blurred behind her. Negative: no spoken words, no on-screen text, no captions, no subtitles, no logo, no watermark, no readable writing on the card or box, no engraving, no red velvet or hexagon box, no extra or missing fingers, no other jewelry, no sparkles or CGI effects.",
          "referenceVideo": [],
          "character": [],
          "product": [],
          "extra": [
            {
              "label": "Nguồn dữ liệu (Fact / Inference)",
              "text": "Prompt đọc nguyên văn từ clip \"Woman packing silver ring box\" trong project Flow (Fact, 09/11). Project: https://flow.google.com/u/3/project/e9713e63-a54c-4560-849e-5d3da18009dc"
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B1-flow-omni12flash-v1.mp4\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ]
        }
      },
      {
        "id": "HR-B1-v2",
        "title": "HR-B1 v2: prompt gen CÓ TIẾNG (Amin tự gen bằng lượt free Higgsfield)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC 12 s, 9:16, audio bật, piano nhẹ không lời",
        "step": "Chờ Amin gen. Bản v1 Higgsfield không có tiếng (tắt audio). Kết nối Higgsfield trong Claude không dùng được lượt free; gen bằng credit: Seedance 2.5, 84 credit. Chi tiết: task-hub/KAN-82/output/KAN-82-HR-B1-v2-prompt-co-tieng.md.",
        "note": "Ảnh character là ảnh preview AI (nhân vật AI, cần nhãn AI). Ảnh product lấy từ Hope Rings, chỉ tham chiếu nội bộ, không đăng.",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-preview-storyboard/preview-frame-1.png"
          ],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "prompt": "Vertical 9:16, 12 s, realistic phone-filmed UGC look, soft warm morning window light, each shot is a fixed frame with no camera movement inside it, hard cuts between shots. Attach 2 product reference photos: anchor-1 (shape of the ring: an open ring ending in two small hands that wrap around a finger) and anchor-2 (how it looks on a finger). Use them only for the ring's shape; do not copy the red velvet box, the card or any text from them, and do not invent engraving. Character (identical in every shot): a grandmother about 65 with neat silver-grey shoulder-length hair, a thick cream chunky-knit cardigan without text or logo, short natural unpainted nails, wearing no jewelry at all. Bright kitchen with a light wooden counter and a window with a sheer curtain.\nShot 1 (0-3 s, NO ring in frame): seen from behind, the grandmother stands at the kitchen window holding a mug, quietly looking outside; top third of the frame left empty.\nShot 2 (3-6 s): close-up of both her hands on the cream knit sleeve placing the hug ring on a small cream cloth inside an open ivory gift box with an ivory ribbon, no writing; the ring matches the references.\nShot 3 (6-9 s): one hand lays a blank cream card beside the ring while the other hand closes the lid.\nShot 4 (9-12 s): she holds the closed box against her chest with both hands and smiles softly, the window blurred behind her; hold the last 2 s, top third empty.\nAUDIO (emotion: tender longing that turns into quiet warmth): one continuous soft solo piano, slow tempo, gentle and sparse notes, warm and slightly wistful in shots 1-2, opening into a warmer, more hopeful chord in shots 3-4, fading softly at the end. Very quiet natural room tone only: faint kitchen ambience, soft fabric rustle, the small click of the box lid closing in shot 3. No speech, no vocals, no singing, no lyrics, no sound effects beyond these, no sudden loud sounds.\nNegative: no spoken words, no on-screen text, no captions, no subtitles, no logo, no watermark, no readable writing on the card or box, no engraving visible, no red velvet or hexagon box, no extra or missing fingers, no other jewelry on anyone, no sparkles or CGI effects, no camera movement inside a shot.",
          "tool": "Higgsfield (Seedance 2.5) — CHƯA gen",
          "extra": [
            {
              "label": "File & đăng",
              "text": "Prompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ]
        }
      },
      {
        "id": "HR-B2",
        "title": "HR-B2: dựng lại ad mẫu Hope Rings bằng Higgsfield Genjutsu (đổi nhân vật + sản phẩm)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Ad mẫu 25,7 s, 360x640, đổi người/nhẫn/hộp/thẻ",
        "step": "Chờ Amin gen (Genjutsu replace object, lượt free ở connector ChatGPT/web). Chưa gen, chưa tốn credit. Chi tiết: task-hub/KAN-82/output/KAN-82-HR-B2-genjutsu-prompt.md.",
        "note": "CHỈ DÙNG NỘI BỘ: video mẫu là của đối thủ (Hope Rings), có người thật, logo, thẻ in lời và chữ tục; bản ra vẫn giữ cảnh quay gốc nên rủi ro bản quyền/thương hiệu, không đăng cho tới khi Amin duyệt. Chưa nghe audio gốc. Genjutsu không có tham số audio nên bản ra có thể không có tiếng. Nhân vật là AI, cần nhãn AI.",
        "kit": {
          "referenceVideo": [
            "1-dropship/workspace/heartbond/3-creative/refs/video-mau-doi-thu/hope-rings-ad-ref.mp4"
          ],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-preview-storyboard/preview-frame-4.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-preview-storyboard/preview-frame-1.png"
          ],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "prompt": "Edit the reference video. Keep the original timing, cuts, camera framing, camera movement and lighting exactly as they are. Only replace the following, using the reference images.\nPEOPLE: replace every appearance of the blonde woman (kitchen shot seen from behind at 0-3 s, face close-up at 10-14 s, the hand-on-chest ending) with the grandmother from the character images: about 65, neat silver-grey shoulder-length hair, thick cream chunky-knit cardigan, short natural unpainted nails, no other jewelry or bracelets. Remove the man completely from the kitchen shot, she stands alone. In the couple holding hands shot (16-18 s) show instead the grandmother's hand holding the hand of a young adult woman (clearly an adult, about 22). Keep the cream chunky-knit sleeve in the hand close-ups.\nPRODUCT: replace every ring (the engraved wrap-around band) with the hug ring from the product images: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only on the finger, plain surface, no engraving, no text, shape taken only from the references.\nBRANDING AND TEXT: replace the white gift box having a logo and printed words with a plain ivory gift box with an ivory ribbon, no logo, no writing. Replace the printed card with a blank cream card, no heart, no text. Remove all burned-in captions and any other on-screen text. No logos, no watermark.\nAUDIO: do not reuse the original voice, lyrics or music. If the model outputs audio, use only soft solo piano, no speech, no vocals.\nNegative: no readable text anywhere, no engraving, no Hope Rings logo or box, no extra or missing fingers, no sparkles or CGI effects, no change of camera movement or cut timing.",
          "tool": "Higgsfield (Genjutsu Lite) — CHƯA gen",
          "extra": [
            {
              "label": "File & đăng",
              "text": "Prompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ]
        }
      },
      {
        "id": "HR-B3-1",
        "title": "HR-B3-1 (Flow): bếp → nhẫn trên chăn lông → bà chạm ngực rưng rưng",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC 8 s, 9:16, piano nhẹ",
        "step": "Đã gen 08/11. Bếp quay lưng, cận tay đeo nhẫn trên chăn lông trắng, bà nhìn camera chạm ngực.",
        "note": "Google Flow Omni 1.2 Flash, 8 s, 9:16, 24 credit, chỉ text prompt (không ảnh neo), có track audio (chưa nghe), có dấu sao nhỏ ở góc dưới phải. Nhân vật AI, cần nhãn AI. Chưa review độc lập, chưa qua cổng C. Phong cách theo ad mẫu nhưng không chép chữ/claim/hộp/thẻ. Bản thử nội bộ, chưa có hàng thật.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B3-flow-1-kitchen-ring-stairs.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Omni 1.2 Flash · 8 s · 9:16 · chỉ text prompt (không ảnh neo) · 24 credit",
          "prompt": "Realistic phone-filmed UGC look, soft natural window light, fixed frames with hard cuts, no camera movement inside a shot, no on-screen text, no logos. Same grandmother in every shot: about 65, neat silver-grey shoulder-length hair, thick cream chunky-knit cardigan, short natural unpainted nails, no other jewelry. Product: a silver-tone hug ring, an open ring that ends in two small hands wrapping around a finger, plain surface with no engraving or text. 0-2 s: bright home kitchen with brick wall and white window shutters, the grandmother alone seen from behind at the stove, gently looking out. 2-5 s: close-up of her hand wearing the hug ring on a soft white fluffy blanket, her cream knit sleeve in frame, the ring turns slightly in soft light. 5-8 s: she faces the camera on a sunlit staircase, smiles softly with watery eyes and rests her hand with the ring against her chest. Audio: soft solo piano, tender and warm, only quiet room tone, no speech, no vocals, no lyrics. Negative: no spoken words, no captions, no subtitles, no watermark, no extra fingers, no other rings or bracelets, no sparkles or CGI effects.",
          "referenceVideo": [],
          "character": [],
          "product": [],
          "extra": [
            {
              "label": "Nguồn dữ liệu (Fact / Inference)",
              "text": "Prompt đọc từ clip \"Grandmother wearing hug ring\" trong project Flow (Fact, 09/11). Ghép clip ↔ file HR-B3-flow-1 theo nội dung mô tả (Inference)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B3-flow-1-kitchen-ring-stairs.mp4\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ]
        }
      },
      {
        "id": "HR-B3-2",
        "title": "HR-B3-2 (Flow): mở hộp quà, cầm nhẫn lên, đeo vào ngón",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC 8 s, 9:16, piano nhẹ",
        "step": "Đã gen 08/11. Mở hộp ngà, thẻ trắng, nhẫn hai bàn tay rõ nhất ở cận cảnh, đeo vào ngón.",
        "note": "Google Flow Omni 1.2 Flash, 8 s, 9:16, 24 credit, chỉ text prompt (không ảnh neo), có track audio (chưa nghe), có dấu sao nhỏ ở góc dưới phải. Nhân vật AI, cần nhãn AI. Chưa review độc lập, chưa qua cổng C. Phong cách theo ad mẫu nhưng không chép chữ/claim/hộp/thẻ. Bản thử nội bộ, chưa có hàng thật.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B3-flow-2-unbox-ring.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Omni 1.2 Flash · 8 s · 9:16 · chỉ text prompt (không ảnh neo) · 24 credit",
          "prompt": "Realistic phone-filmed UGC look, soft natural window light, fixed frames with hard cuts, no camera movement inside a shot, no on-screen text, no logos. Same grandmother as before: about 65, neat silver-grey shoulder-length hair, thick cream chunky-knit cardigan, short natural unpainted nails, no other jewelry. Product: a silver-tone hug ring, an open ring that ends in two small hands wrapping around a finger, plain surface with no engraving or text. 0-2 s: close-up of her hands in the cream knit sleeves opening a plain ivory gift box with an ivory ribbon on a soft white fluffy blanket, no writing on the box. 2-4 s: she lifts out a blank cream card with no text and lays it aside. 4-6 s: macro close-up, two fingertips hold the hug ring up to the light so its shape of two small hands is clearly visible. 6-8 s: the ring is slipped onto her finger and she smiles softly at it. Audio: soft solo piano, tender and warm, quiet room tone and the faint rustle of the box, no speech, no vocals, no lyrics. Negative: no spoken words, no captions, no subtitles, no watermark, no logo on the box, no extra fingers, no other rings or bracelets, no sparkles or CGI effects.",
          "referenceVideo": [],
          "character": [],
          "product": [],
          "extra": [
            {
              "label": "Nguồn dữ liệu (Fact / Inference)",
              "text": "Prompt đọc từ clip \"Grandmother opens ring gift box\" trong project Flow (Fact, 09/11). Ghép clip ↔ file HR-B3-flow-2 theo nội dung mô tả (Inference)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B3-flow-2-unbox-ring.mp4\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ]
        }
      },
      {
        "id": "HR-B3-3",
        "title": "HR-B3-3 (Flow): bà nắm tay cháu gái trưởng thành đeo nhẫn",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC 8 s, 9:16, piano nhẹ",
        "step": "Đã gen 08/11. Bếp quay lưng, hai bàn tay nắm nhau có nhẫn, cô gái ~22 tuổi cười nhìn nhẫn.",
        "note": "Google Flow Omni 1.2 Flash, 8 s, 9:16, 24 credit, chỉ text prompt (không ảnh neo), có track audio (chưa nghe), có dấu sao nhỏ ở góc dưới phải. Nhân vật AI, cần nhãn AI. Chưa review độc lập, chưa qua cổng C. Phong cách theo ad mẫu nhưng không chép chữ/claim/hộp/thẻ. Bản thử nội bộ, chưa có hàng thật.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B3-flow-3-grandmother-granddaughter-hands.mp4",
        "kit": {
          "tool": "Google Flow",
          "config": "Omni 1.2 Flash · 8 s · 9:16 · chỉ text prompt (không ảnh neo) · 24 credit",
          "referenceVideo": [],
          "character": [],
          "product": [],
          "extra": [
            {
              "label": "Nguồn dữ liệu (Fact / Inference)",
              "text": "Prompt: Trống / chưa xác minh. Đã tìm: project Flow Nov 08 14:18 (đã mở 5/9 clip, không thấy clip nắm tay bà-cháu), pack KAN-82, seed. Cần Amin mở lịch sử Flow khác nếu muốn lấy."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B3-flow-3-grandmother-granddaughter-hands.mp4\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ]
        }
      },
      {
        "id": "HR-B4-amin-v1",
        "title": "HR-B4 bản Amin (Higgsfield Genjutsu): dựng lại ad mẫu 25,7 s với nhẫn Hug Ring",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "720x1280, 25,7 s, có audio",
        "step": "Amin gen xong 08/11 (file hf_20261108_084417_...). Đây là bản chuẩn để Flow làm theo: bếp quay lưng, cận nhẫn, cười khoe tay, tay ôm ngực, thẻ giấy, cầm nhẫn, hai người nắm tay, hộp quà.",
        "note": "Nhân vật trong bản này vẫn là người lớn tuổi (tóc bạc), chưa phải cặp đôi hay mẹ-con đã duyệt. Còn giữ khung cảnh của ad đối thủ: chỉ dùng nội bộ, chưa đăng. Audio mean -18,1 dB, max -1,7 dB (chưa nghe nội dung). Không có chữ hook, thẻ giấy trống.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B4-amin-genjutsu-v1.mp4",
        "kit": {
          "tool": "Higgsfield (Genjutsu Lite · Replace Object)",
          "config": "hf_mult_replace_object_flash · 360x640 · 26 s (file ra 25,7 s) · aspect auto · job 806f318f · file gốc hf_20261108_084417_806f318f… (Fact: lịch sử Higgsfield 08/11/2026 08:44 UTC)",
          "prompt": "Edit the reference video. Keep the original timing, cuts, camera framing, camera movement and lighting exactly as they are. Only replace the following, using the reference images.\nPEOPLE: replace every appearance of the blonde woman (kitchen shot seen from behind at 0-3 s, face close-up at 10-14 s, the hand-on-chest ending) with the grandmother from the character images: about 65, neat silver-grey shoulder-length hair, thick cream chunky-knit cardigan, short natural unpainted nails, no other jewelry or bracelets. Remove the man completely from the kitchen shot, she stands alone. In the couple holding hands shot (16-18 s) show instead the grandmother's hand holding the hand of a young adult woman (clearly an adult, about 22). Keep the cream chunky-knit sleeve in the hand close-ups.\nPRODUCT: replace every ring (the engraved wrap-around band) with the hug ring from the product images: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only on the finger, plain surface, no engraving, no text, shape taken only from the references.\nBRANDING AND TEXT: replace the white gift box having a logo and printed words with a plain ivory gift box with an ivory ribbon, no logo, no writing. Replace the printed card with a blank cream card, no heart, no text. Remove all burned-in captions and any other on-screen text. No logos, no watermark.\nAUDIO: do not reuse the original voice, lyrics or music. If the model outputs audio, use only soft solo piano, no speech, no vocals.\nNegative: no readable text anywhere, no engraving, no Hope Rings logo or box, no extra or missing fingers, no sparkles or CGI effects, no change of camera movement or cut timing.",
          "referenceVideo": [
            "1-dropship/workspace/heartbond/3-creative/refs/video-mau-doi-thu/hope-rings-ad-ref.mp4"
          ],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-preview-storyboard/preview-frame-4.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-preview-storyboard/preview-frame-1.png"
          ],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "extra": [
            {
              "label": "Nguồn dữ liệu (Fact / Inference)",
              "text": "Ref gửi lên: 1 video + 4 ảnh (Fact). Ghép ảnh 3-4 = preview-frame-4/-1 (bà) là Inference từ thứ tự trong kit HR-B2; ảnh 1-2 là 2 ảnh nhẫn."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B4-amin-genjutsu-v1.mp4\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ]
        }
      },
      {
        "id": "HR-B6-amin-couple",
        "title": "HR-B6 (Higgsfield, Amin): CẶP ĐÔI, cận nhẫn Hug Ring, 25,75 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC 25,75 s, 9:16, 720x1280, có audio",
        "step": "Amin gen 08/11 trên Higgsfield, báo 'sản phẩm xong' để đăng. File gốc hf_20261108_110906_e004bce4.",
        "note": "Do Amin tạo. Cặp đôi + nhiều cận tay đeo nhẫn Hug Ring. Lỗi thấy khi xem khung hình: (1) thẻ chữ trên hộp đỏ ở khoảng 12-15 s là chữ AI vô nghĩa; (2) hộp nhung ĐỎ (brief trước ghi tránh hộp đỏ); (3) có cảnh hai nhẫn và nhẫn khác trên tay cô gái; (4) cảnh nhẫn không đồng nhất. Nhãn AI cần bật. Audio mean -18,1 dB, chưa nghe nội dung. Chưa qua review độc lập. Amin yêu cầu Muse đăng; ghi nhận Amin chấp nhận lỗi trên.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B6-amin-higgsfield-couple-v1.mp4",
        "kit": {
          "referenceVideo": [
            "1-dropship/workspace/heartbond/3-creative/refs/video-mau-doi-thu/hope-rings-ad-ref.mp4"
          ],
          "character": [],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "extra": [
            {
              "label": "Nguồn",
              "text": "Amin tự gen trên Higgsfield; công cụ/prompt chưa được ghi."
            },
            {
              "label": "Caption đăng",
              "text": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍  #HugRing #GiftIdeas #CoupleGift"
            },
            {
              "label": "Nguồn dữ liệu (Fact / Inference)",
              "text": "Nguồn đã xác minh: dựng lại ad Hope Rings (video ref d9901f3f, cùng ad-ref của HR-B4) bằng Genjutsu Lite, thay nhân vật + nhẫn. Cập nhật so với ghi chú cũ \"công cụ/prompt chưa ghi\". Ảnh nhân vật (Image 3, 4) trên Higgsfield là file .jpg ID ef796d01/c8e81d3d, KHÔNG khớp couple-*.png đã lưu → ô Character để trống / chưa xác minh. Video ref là ad đối thủ: chỉ nội bộ, rủi ro bản quyền (video đã được đăng IG/TT/YT theo seed, cần Amin cân nhắc)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B6-amin-higgsfield-couple-v1.mp4\nĐã đăng: IG: https://www.instagram.com/p/Dfe3fnpvhdk/ | TT: https://www.tiktok.com/@heartbond.shop/video/7705789320086474002 | YT: https://www.youtube.com/shorts/xemYQT-pg1k\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "tool": "Higgsfield (Genjutsu Lite · Replace Object)",
          "config": "hf_mult_replace_object_flash · 360x640 · job e004bce4 · file gốc hf_20261108_110906_e004bce4… (Fact: lịch sử Higgsfield 08/11/2026 11:09 UTC). Prompt người dùng để TRỐNG, chỉ có enhanced prompt do Higgsfield sinh.",
          "prompt": "TASK\nEdit Video 1. Replace the woman in the gray hoodie and later black top with the woman in Image 3. Replace the tattooed man with the man in Image 4. Each image supplies the complete character, including identity, body, anatomy, silhouette and clothing, with nothing kept from the source figure. Replace every source silver text ring, stacked ring, ring close-up, product card, and product box with the silver embracing-arms ring shown in Image 1 and Image 2; remove all source ring wording, hearts, Hope Rings branding, labels, and packaging. Video 1 controls the original performance, blocking, interactions, camera movement, framing, cuts and timing; everything outside the listed replacements keeps its look from Video 1.\n\nREFERENCES\nImage 1: silver open wrap ring formed by two smooth human arms with small sculpted hands meeting at the ends; use its polished metal shape, ignore the hand and green background.\nImage 2: alternate product view of the same silver embracing-arms ring in a red velvet presentation box; use the rigid ring shape and red velvet box, ignore any unseen packaging.\nImage 3: woman with wavy medium-brown hair, warm complexion, cream cable-knit cardigan; use her complete face, body, hair and clothing.\nImage 4: man with short dark hair, light stubble, warm complexion and gray T-shirt; use his complete face, body, hair and clothing.\n\nSOURCE VIDEO\nVideo 1 shows a couple cooking, ring close-ups, the woman modeling rings outdoors, hands holding a product card and interlacing, then ring and box close-ups. Keep every static shot and hard cut exactly in place.\n\nSHOTS\nShot 1 (0.0–2.8s, continuous): Static kitchen medium shot. The woman from Image 3 is left, back to camera, stirring at the stove in her cream cardigan; the man from Image 4 walks right to left behind her. Keep the kitchen and their spacing. hard cut\nShot 2 (2.8–5.8s, hard cut): Static extreme close-up, centered finger and silver embracing-arms ring only; no face or wider setting. The two polished arm ends and tiny hands remain sharp and separate on the finger over white fur. hard cut\nShot 3 (5.8–9.4s, hard cut): Static close-up of the centered hand displaying two separate identical silver embracing-arms rings, each a rigid open wrap with sculpted hands. White fur background. hard cut\nShot 4 (9.4–12.8s, hard cut): Static medium close-up on the porch. The woman from Image 3 fills center, smiling while looking between camera and her raised hands; she wears her cream cardigan and several identical silver embracing-arms rings. hard cut\nShot 5 (12.8–15.6s, hard cut): Static close-up of hands holding a plain unbranded red velvet ring presentation card or insert at center, with the silver embracing-arms ring clearly displayed; no Hope Rings text. hard cut\nShot 6 (15.6–17.5s, hard cut): Static close-up at the porch railing. The woman from Image 3 on left and man from Image 4 on right interlace hands; her visible silver embracing-arms ring remains a clear rigid shape. hard cut\nShot 7 (17.5–20.2s, hard cut): Static close-up of centered hands modeling identical silver embracing-arms rings over white fur. hard cut\nShot 8 (20.2–22.8s, hard cut): Static centered close-up of the silver embracing-arms ring in the open red velvet box from Image 2, with no labels or source packaging. hard cut\nShot 9 (22.8–25.4s, hard cut): Static extreme close-up of a centered thumb held up wearing one polished silver embracing-arms ring; thumb and ring only, no face. \n\nPROPS\nThe cooking utensil stays a single rigid metal spoon or spatula in the woman’s hand in Shot 1. Every replacement ring is a polished silver open band, thick and rigid, made from two smooth sculpted arms ending in distinct tiny hands; never use etched text or a heart. The product box is a small square open red velvet box with the ring fixed inside.\n\nSETTING\nKeep the original kitchen, white fur product surface, porch railing and bright studio backgrounds from Video 1.\n\nNEGATIVE\nno extra people, no duplicated or cloned characters, no hybrid of source and target bodies, no source blonde woman or tattooed man, no source ring text, hearts, Hope Rings logos, labels or packaging, no morphing or melting rings, no fused fingers, no gibberish text, no extra cuts, no new camera moves, no slow motion, no subtitles, clean frame edge to edge."
        }
      },
      {
        "id": "HR-B7-K1-higgs",
        "title": "HR-B7 K1 (Higgsfield 12 s): Mẹ chưa từng đòi gì, tặng mẹ",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC cảm xúc 12 s, 9:16, có audio",
        "step": "Đã gen 08/11, đã thêm chữ caption hậu kỳ.",
        "note": "Pack: task-hub/KAN-82/output/KAN-82-HR-B7-gift-to-mom-pack.md. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Higgsfield Seedance 2.5 (84 credit). Cảnh bếp, con đặt hộp, mẹ mở, đeo nhẫn, che miệng khóc, ôm. Lỗi: mẹ đã có sẵn nhẫn cưới nên có 2 nhẫn trên tay; hình nhẫn mới gần đúng ảnh neo. ",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K1-higgsfield-msg.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "extra": [
            {
              "label": "Config Higgsfield",
              "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
            },
            {
              "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
              "text": "Một câu cả video (0,5-11,8 s): \"Mom never asked for anything, so I gave her this.\""
            },
            {
              "label": "Nhạc",
              "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
            },
            {
              "label": "Job Higgsfield",
              "text": "job 5b06347c-9083-4317-995d-bee066a7d65c · seed 816390753 · seedance_2_5 · 12 s · 720p · audio bật (Fact: lịch sử Higgsfield, đọc 09/11/2026). Ghép job ↔ K1/K3 theo nội dung prompt (Inference). Prompt trong kit trùng prompt lịch sử."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B7-K1-higgsfield-msg.mp4\nCác bản trong folder: HR-B7-K1-higgsfield-captioned.mp4, HR-B7-K1-higgsfield-msg.mp4, HR-B7-K1-higgsfield-seedance-raw.mp4 (raw = chưa chữ, captioned/msg = có chữ hậu kỳ).\nĐã đăng: IG: https://www.instagram.com/p/Dfe-oGsvKAp/ | YT: https://www.youtube.com/shorts/pVt9CslvMwI\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Warm natural window light, bright cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother stands at the kitchen sink washing a cup, seen from the side, quiet and tired but content; behind her the daughter waits in the doorway holding a small plain ivory gift box with an ivory ribbon, no logo, no writing; (2) 3-6 s, the daughter sets the box on the table, the mother turns, surprised, and opens it; close-up of her hands opening the box, a blank cream card beside the ring; (3) 6-9 s, close-up of the daughter gently sliding the ring onto the mother's finger, the mother's other hand rises to cover her mouth, her eyes fill with tears; (4) 9-12 s, the mother pulls her daughter into a long tight hug, tears and a trembling smile, the ring visible on the hand on the daughter's back, the camera slowly pushes in. Audio: grand emotional cinematic piano with soft strings that swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles.",
          "tool": "Higgsfield (Seedance 2.5)"
        }
      },
      {
        "id": "HR-B7-K3-higgs",
        "title": "HR-B7 K3 (Higgsfield 12 s): Bất ngờ buổi sáng bên cốc cà phê",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC cảm xúc 12 s, 9:16, có audio",
        "step": "Đã gen 08/11, đã thêm chữ caption hậu kỳ.",
        "note": "Pack: task-hub/KAN-82/output/KAN-82-HR-B7-gift-to-mom-pack.md. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Higgsfield Seedance 2.5 (84 credit). Mẹ thấy hộp cạnh cà phê, mở, đeo nhẫn, khóc, con gái ôm. Lỗi: có chữ mờ dập nổi trong nắp hộp, mẹ cũng có sẵn nhẫn trên tay, ánh nắng quá gắt ở vài khung. ",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K3-higgsfield-msg.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "extra": [
            {
              "label": "Config Higgsfield",
              "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
            },
            {
              "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
              "text": "Một câu cả video (0,5-11,8 s): \"I never had the words, so I left a hug by your coffee, Mom.\""
            },
            {
              "label": "Nhạc",
              "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
            },
            {
              "label": "Job Higgsfield",
              "text": "job f6b8a38e-bc3c-4c82-9e06-537fdc74d36a · seed 1874942092 · seedance_2_5 · 12 s · 720p · audio bật (Fact: lịch sử Higgsfield, đọc 09/11/2026). Ghép job ↔ K1/K3 theo nội dung prompt (Inference). Prompt trong kit trùng prompt lịch sử."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B7-K3-higgsfield-msg.mp4\nCác bản trong folder: HR-B7-K3-higgsfield-captioned.mp4, HR-B7-K3-higgsfield-msg.mp4, HR-B7-K3-higgsfield-seedance-raw.mp4 (raw = chưa chữ, captioned/msg = có chữ hậu kỳ).\nĐã đăng: IG: https://www.instagram.com/p/Dfe-7i6PcH1/ | YT: https://www.youtube.com/shorts/uNWGH4dwPwM\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Soft early-morning window light, cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother sits alone at the kitchen table with a coffee cup, sunlight on her face, she notices a small plain ivory gift box with an ivory ribbon (no logo, no writing) and a blank cream card next to her cup; (2) 3-6 s, close-up of her hands lifting the lid, the ring inside on cream fabric; (3) 6-9 s, she puts the ring on her finger, looks at it, then her hand rises to her chest and her eyes fill with tears; she looks up toward the doorway; (4) 9-12 s, the daughter stands in the doorway smiling with teary eyes, the mother laughs and cries at once, opens her arms, the daughter runs in and they hug tightly, camera slowly pushing in. Audio: grand emotional cinematic piano with soft strings that builds and swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles.",
          "tool": "Higgsfield (Seedance 2.5)"
        }
      },
      {
        "id": "HR-B7-K2-flow",
        "title": "HR-B7 K2 (Flow 8 s): Đôi bàn tay của mẹ",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC cảm xúc 8 s, 9:16, có audio",
        "step": "Đã gen 08/11, đã thêm chữ caption hậu kỳ.",
        "note": "Pack: task-hub/KAN-82/output/KAN-82-HR-B7-gift-to-mom-pack.md. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Google Flow Omni 1.2 Flash (24 credit). Cận tay mẹ, con đeo nhẫn, nắm tay, mặt mẹ rưng rưng. Có thể thấy 2 nhẫn ở vài khung; dấu sao Flow đã làm mờ. ",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-K2-flow-msg.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [],
          "extra": [
            {
              "label": "Config Flow",
              "text": "Google Flow, Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn KHÔNG đính kèm (chỉ mô tả bằng chữ) nên nhẫn gần đúng. Dấu sao Flow ở góc dưới phải đã xóa mờ bằng ffmpeg delogo."
            },
            {
              "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
              "text": "Một câu cả video (0,4-7,8 s): \"Mom, these hands held me, now I just want to hold them back.\""
            },
            {
              "label": "Nhạc",
              "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B7-K2-flow-msg.mp4\nCác bản trong folder: HR-B7-K2-flow-captioned.mp4, HR-B7-K2-flow-msg.mp4, HR-B7-K2-flow-raw.mp4 (raw = chưa chữ, captioned/msg = có chữ hậu kỳ).\nĐã đăng: IG: https://www.instagram.com/p/Dfe_L7tvWP8/ | YT: https://www.youtube.com/shorts/Qhh0sYkma2U\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Make one 8-second vertical 9:16 emotional close-up video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50), the younger woman is her adult DAUGHTER (about 22). Both adults, keep faces, hair and cream knit sweaters consistent. Soft warm window light, handheld phone look, quick cuts. Story: (1) 0-2 s, extreme close-up of the mother's hands resting on a wooden table, cream knit sleeves, hands that have worked hard, natural unpainted nails, no jewelry on them; (2) 2-4 s, the daughter's hands gently take her mother's hand and slide a polished silver hug ring (an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving) onto her finger; (3) 4-6 s, the mother's hand closes around her daughter's hand, close-up, the ring visible; (4) 6-8 s, close-up of the mother's face, she smiles through tears, glances at the ring, then looks up at her daughter. Audio: grand emotional cinematic piano with soft strings swelling powerfully at the end, no vocals, no speech. No on-screen text, no captions, no logo, no watermark, no extra fingers, no extra rings, no sparkles.",
          "tool": "Google Flow"
        }
      },
      {
        "id": "HR-B7-K1-flow",
        "title": "HR-B7 K1 (Flow 8 s): Mẹ chưa từng đòi gì, bản Flow (dự phòng)",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC cảm xúc 8 s, 9:16, có audio",
        "step": "Đã gen 08/11, đã thêm chữ caption hậu kỳ.",
        "note": "Pack: task-hub/KAN-82/output/KAN-82-HR-B7-gift-to-mom-pack.md. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Google Flow Omni 1.2 Flash (24 credit). Cùng kịch bản K1, bản dự phòng, chưa giao Muse đăng. Dấu sao Flow đã làm mờ. ",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-K1-flow-msg.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [],
          "extra": [
            {
              "label": "Config Flow",
              "text": "Google Flow, Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn KHÔNG đính kèm (chỉ mô tả bằng chữ) nên nhẫn gần đúng. Dấu sao Flow ở góc dưới phải đã xóa mờ bằng ffmpeg delogo."
            },
            {
              "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
              "text": "Một câu cả video (0,4-7,8 s): \"Mom never asked for anything, so I gave her this.\""
            },
            {
              "label": "Nhạc",
              "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B7-K1-flow-msg.mp4\nCác bản trong folder: HR-B7-K1-flow-captioned.mp4, HR-B7-K1-flow-msg.mp4, HR-B7-K1-flow-raw.mp4 (raw = chưa chữ, captioned/msg = có chữ hậu kỳ).\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Make one 8-second vertical 9:16 emotional UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50), the younger woman is her adult DAUGHTER (about 22). Both adults, keep faces, hair and cream knit sweaters consistent. Warm natural window light, bright cosy kitchen, handheld phone look, quick cuts. Story: (1) 0-2 s, the mother washes a cup at the kitchen sink, seen from the side, content and a little tired; the daughter waits behind her in the doorway holding a small plain ivory gift box with an ivory ribbon, no logo, no writing; (2) 2-4 s, the daughter sets the box on the table, the mother turns surprised and opens it, close-up of her hands lifting the lid, a blank cream card beside a polished silver hug ring (an open band ending in two tiny hands that wrap around a finger, one ring only, plain surface, no engraving); (3) 4-6 s, close-up of the daughter sliding the ring onto the mother's finger, the mother's other hand rises to cover her mouth, her eyes fill with tears; (4) 6-8 s, the mother pulls her daughter into a long tight hug, tears and a trembling smile, camera slowly pushing in. Audio: grand emotional cinematic piano with soft strings swelling powerfully at the end, no vocals, no speech. No on-screen text, no captions, no logo, no watermark, no extra fingers, no extra rings, no sparkles.",
          "tool": "Google Flow"
        }
      },
      {
        "id": "HR-B8-F1-flow",
        "title": "HR-B8 F1 (Flow 8 s): Về nhà ôm mẹ",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC cảm xúc 8 s, 9:16, có audio",
        "step": "Đã gen 09/11 trên Flow, đã thêm chữ 1 câu.",
        "note": "Pack: task-hub/KAN-82/output/KAN-82-HR-B7-gift-to-mom-pack.md (angle tặng mẹ). Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 09/11 Flow Omni 1.2 Flash (24 credit). Cửa mở, con gái cầm hộp, mẹ sững người rồi ôm. Nhẫn 1 chiếc rõ ở cận cảnh tay. ",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F1-flow-msg.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [],
          "extra": [
            {
              "label": "Config Flow",
              "text": "Google Flow (tài khoản minhpham.piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn chỉ mô tả bằng chữ. Dấu sao Flow đã xóa mờ bằng ffmpeg delogo."
            },
            {
              "label": "Text 1 câu lời nhắn gửi mẹ",
              "text": "Mom, I can't be there every day, so I brought you a hug."
            },
            {
              "label": "Nhạc",
              "text": "Nhạc: piano ấm (AI tạo cùng video), không lời. Chữ 1 câu làm hậu kỳ (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B7-F1-flow-msg.mp4\nCác bản trong folder: HR-B7-F1-flow-msg.mp4, HR-B7-F1-flow-raw.mp4 (raw = chưa chữ, captioned/msg = có chữ hậu kỳ).\nLưu ý: seed cũ trỏ HR-B8-F*-flow-msg.mp4 (file không tồn tại); file thật tên HR-B7-F*-flow-msg.mp4 (Inference: cùng clip F1-F3 gen 09/11, Amin/Muse gọi là B8).\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Warm daylight, the mother opens her front door, the daughter stands there holding a small plain ivory gift box with ivory ribbon (no logo, no writing). The mother freezes, hand to mouth, eyes glistening, then pulls her daughter into a long tight hug; close-up of the mother's hand with one polished silver-tone ring ending in two small hands on the daughter's back. Soft warm piano, no dialogue, no on-screen text.",
          "tool": "Google Flow"
        }
      },
      {
        "id": "HR-B8-F2-flow",
        "title": "HR-B8 F2 (Flow 8 s): Nhìn bàn tay mẹ nhớ vòng tay con",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC cảm xúc 8 s, 9:16, có audio",
        "step": "Đã gen 09/11 trên Flow, đã thêm chữ 1 câu.",
        "note": "Pack: task-hub/KAN-82/output/KAN-82-HR-B7-gift-to-mom-pack.md (angle tặng mẹ). Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 09/11 Flow Omni 1.2 Flash (24 credit). Mẹ đan len, dừng lại nhìn nhẫn, mỉm cười rưng rưng. Có vòng len nhỏ trên ngón tay kia trông như nhẫn thứ hai ở vài khung. ",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F2-flow-msg.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [],
          "extra": [
            {
              "label": "Config Flow",
              "text": "Google Flow (tài khoản minhpham.piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn chỉ mô tả bằng chữ. Dấu sao Flow đã xóa mờ bằng ffmpeg delogo."
            },
            {
              "label": "Text 1 câu lời nhắn gửi mẹ",
              "text": "Mom, when you look at your hands, remember that's me holding you."
            },
            {
              "label": "Nhạc",
              "text": "Nhạc: piano ấm (AI tạo cùng video), không lời. Chữ 1 câu làm hậu kỳ (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B7-F2-flow-msg.mp4\nCác bản trong folder: HR-B7-F2-flow-msg.mp4, HR-B7-F2-flow-raw.mp4 (raw = chưa chữ, captioned/msg = có chữ hậu kỳ).\nLưu ý: seed cũ trỏ HR-B8-F*-flow-msg.mp4 (file không tồn tại); file thật tên HR-B7-F*-flow-msg.mp4 (Inference: cùng clip F1-F3 gen 09/11, Amin/Muse gọi là B8).\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Cozy living room, soft window light, the mother in a cream knit sweater sits knitting; she pauses, looks down at her hand wearing one polished silver-tone ring ending in two small hands, smiles with glistening eyes and presses the hand to her chest. Close-up of ring and hand, then her face. Soft warm piano, no dialogue, no on-screen text.",
          "tool": "Google Flow"
        }
      },
      {
        "id": "HR-B8-F3-flow",
        "title": "HR-B8 F3 (Flow 8 s): Mở hộp, vừa cười vừa khóc",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC cảm xúc 8 s, 9:16, có audio",
        "step": "Đã gen 09/11 trên Flow, đã thêm chữ 1 câu.",
        "note": "Pack: task-hub/KAN-82/output/KAN-82-HR-B7-gift-to-mom-pack.md (angle tặng mẹ). Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 09/11 Flow Omni 1.2 Flash (24 credit). Hai mẹ con trên sofa, mẹ mở hộp, cười khóc, con lau nước mắt. Nhẫn trong hộp hơi khác ảnh neo; có vệt mờ nhỏ ở góc dưới phải (vị trí dấu sao). ",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F3-flow-msg.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [],
          "extra": [
            {
              "label": "Config Flow",
              "text": "Google Flow (tài khoản minhpham.piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn chỉ mô tả bằng chữ. Dấu sao Flow đã xóa mờ bằng ffmpeg delogo."
            },
            {
              "label": "Text 1 câu lời nhắn gửi mẹ",
              "text": "You gave me everything, Mom. This is just a small thank you."
            },
            {
              "label": "Nhạc",
              "text": "Nhạc: piano ấm (AI tạo cùng video), không lời. Chữ 1 câu làm hậu kỳ (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B7-F3-flow-msg.mp4\nCác bản trong folder: HR-B7-F3-flow-msg.mp4, HR-B7-F3-flow-raw.mp4 (raw = chưa chữ, captioned/msg = có chữ hậu kỳ).\nLưu ý: seed cũ trỏ HR-B8-F*-flow-msg.mp4 (file không tồn tại); file thật tên HR-B7-F*-flow-msg.mp4 (Inference: cùng clip F1-F3 gen 09/11, Amin/Muse gọi là B8).\nĐã đăng: chưa thấy bài Đã đăng nào dùng file này (theo tab Social).\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Warm living room sofa, soft golden light; mother and daughter sit side by side, the mother opens a small plain ivory gift box with ivory ribbon (no logo, no writing), sees one polished silver-tone ring ending in two small hands, laughs and cries at once; the daughter wipes a tear from her cheek and they embrace. Soft warm piano swelling, no dialogue, no on-screen text.",
          "tool": "Google Flow"
        }
      },
      {
        "id": "HR-B5-couple",
        "title": "HR-B5 (Flow): CẶP ĐÔI người lớn, bếp, nhẫn Hug Ring, 8 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC 8 s, 9:16, 720p, có audio",
        "step": "Đã gen 08/11. Ôm từ phía sau, cận nhẫn, cười rưng rưng khoe tay, nắm tay.",
        "note": "Google Flow Omni 1.2 Flash, 24 credit. Nhân vật AI người lớn, cần nhãn AI. Có dấu sao nhỏ của Flow ở góc dưới phải (cần xử lý trước khi đăng). Cảnh tự nghĩ theo nhịp ad mẫu, không dùng cảnh quay của đối thủ. Chưa qua review độc lập. Muse chỉ nhận đăng sau khi Amin xác nhận.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-couple.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-woman-30.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-man-32.png"
          ],
          "product": [],
          "extra": [
            {
              "label": "Config Flow",
              "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
            },
            {
              "label": "Chữ hook (thêm hậu kỳ)",
              "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
            },
            {
              "label": "Nhạc",
              "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B5-flow-couple.mp4\nĐã đăng: IG: https://www.instagram.com/p/Dfe3Km4PQyG/ | TT: https://www.tiktok.com/@heartbond.shop/video/7705787350768536840 | YT: https://www.youtube.com/shorts/mTkhlvuPFdA\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the woman (about 30, long wavy light-brown hair) and the man (about 32, plain grey t-shirt), a loving young couple, both clearly adults, keep faces and hair consistent, she wears a cream knit sweater. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the woman seen from behind at the stove, the man walks up and hugs her gently from behind; (2) 2-4 s, close-up of her hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, her face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the man's hand holds the woman's hand, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers.",
          "tool": "Google Flow"
        }
      },
      {
        "id": "HR-B5-mother-daughter",
        "title": "HR-B5 (Flow): MẸ - CON GÁI người lớn, bếp, nhẫn Hug Ring, 8 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "UGC 8 s, 9:16, 720p, có audio",
        "step": "Đã gen 08/11. Mẹ ôm con từ phía sau, cận nhẫn, con rưng rưng khoe tay, hai mẹ con nắm tay.",
        "note": "Google Flow Omni 1.2 Flash, 24 credit. Nhân vật AI người lớn, cần nhãn AI. Có dấu sao nhỏ của Flow ở góc dưới phải (cần xử lý trước khi đăng). Cảnh tự nghĩ theo nhịp ad mẫu, không dùng cảnh quay của đối thủ. Chưa qua review độc lập. Muse chỉ nhận đăng sau khi Amin xác nhận.",
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-mother-daughter.mp4",
        "kit": {
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [],
          "extra": [
            {
              "label": "Config Flow",
              "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
            },
            {
              "label": "Chữ hook (thêm hậu kỳ)",
              "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
            },
            {
              "label": "Nhạc",
              "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
            },
            {
              "label": "File & đăng",
              "text": "File hiển thị: HR-B5-flow-mother-daughter.mp4\nĐã đăng: IG: https://www.instagram.com/p/Dfe3U9uPjF0/ | TT: https://www.tiktok.com/@heartbond.shop/video/7705788719344782610 | YT: https://www.youtube.com/shorts/qCcbYRtfT-s\nPrompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "One 8-second vertical 9:16 UGC-style video with sound. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50) and the younger woman is her adult DAUGHTER (about 22). Both are adults, keep their faces, hair and cream knit sweaters consistent. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the daughter seen from behind at the stove, her mother walks up and hugs her warmly from behind; (2) 2-4 s, close-up of the daughter's hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, the daughter's face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the mother and daughter hold hands, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers.",
          "tool": "Google Flow"
        }
      },
      {
        "id": "HR-B4-couple",
        "title": "HR-B4 A1: CẶP ĐÔI (người lớn) dựng lại ad mẫu, thêm nhạc + chữ hook",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Dựng lại ad mẫu 25,7 s, đổi nhân vật + nhạc + chữ hook",
        "step": "ĐÃ DUYỆT (cả 2 nhóm, cấu hình A, hook phương án 1, nhạc cảm xúc + trẻ trung). Ảnh nhân vật đã tạo xong (1,0 credit). CHƯA gen video: chờ Amin chạy Genjutsu Lite bằng lượt free (connector này không dùng được lượt free, chạy ở web hoặc ChatGPT connector) hoặc cho phép tốn credit. Chi tiết: task-hub/KAN-82/output/KAN-82-HR-B4-couple-mother-daughter-prompts.md.",
        "note": "CHỈ DÙNG NỘI BỘ: video mẫu là của đối thủ (Hope Rings), bản dựng vẫn giữ cảnh quay gốc, không đăng cho tới khi Amin duyệt và xử lý bản quyền/thương hiệu. Nhân vật AI, cần nhãn AI, cả hai đều là người lớn.",
        "kit": {
          "referenceVideo": [
            "1-dropship/workspace/heartbond/3-creative/refs/video-mau-doi-thu/hope-rings-ad-ref.mp4"
          ],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-woman-30.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-man-32.png"
          ],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "extra": [
            {
              "label": "Config Higgsfield",
              "text": "Cấu hình A (ưu tiên, lượt free): model hf_mult_replace_object_flash (Genjutsu Lite, Kling 4.0), resolution 720p. video_references = video mẫu, image_references = ảnh nhân vật + 2 ảnh nhẫn. Không có tham số audio, aspect ratio theo video mẫu 360x640. Giá chưa kiểm.\nCấu hình B (credit): model seedance_2_5, mode omni_reference, 9:16, 720p, generate_audio true. Không đính kèm video mẫu. Giá đã kiểm (7 credit/giây): 12 s = 84 | 15 s = 105 | 24 s = 168. Số dư 1.146,4."
            },
            {
              "label": "Chữ hook (thêm hậu kỳ)",
              "text": "ĐÃ CHỌN phương án 1 (thêm hậu kỳ, AI không tự vẽ chữ): 0-3 s \"Still can't stop thinking about her…\" | từ cảnh nhẫn \"Then show her.\" | cuối \"A hug she can wear.\"\nKhông chép câu gốc của ad, không tục."
            },
            {
              "label": "Nhạc (đã duyệt gu)",
              "text": "ĐÃ DUYỆT gu: cảm xúc, trẻ trung. Gợi ý cho bước nhạc: acoustic-pop / piano ấm, tiết tấu vừa, có cảm giác trẻ, không lời, dâng nhẹ ở 4 giây cuối. Không dùng audio gốc của ad (không rõ bản quyền). Mình chưa nghe audio ad mẫu nên không bám theo nó. Genjutsu Lite không có tham số audio nên nhạc thêm hậu kỳ hoặc gen riêng."
            },
            {
              "label": "File & đăng",
              "text": "Prompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Edit the reference video. Keep the original timing, cuts, camera framing, camera movement and lighting exactly as they are. Only replace the following, using the reference images.\nPEOPLE: this is a loving young couple, both clearly adults. Replace the blonde woman everywhere (kitchen shot seen from behind at 0-3 s, face close-up at 10-14 s, the hand-on-chest ending) with the woman from the character images: about 30, long wavy light-brown hair, no other jewelry or bracelets, short natural unpainted nails. Replace the man in the kitchen shot with the man from the character images: about 32, plain grey t-shirt, no tattoos, he gently hugs her from behind. In the hands-holding shot (16-18 s) show the man's hand holding the woman's hand. Keep the cream chunky-knit sleeve in the hand close-ups.\nPRODUCT: replace every ring (the engraved wrap-around band) with the hug ring from the product images: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only on the finger, plain surface, no engraving, no text, shape taken only from the references.\nBRANDING AND TEXT: replace the white gift box having a logo and printed words with a plain ivory gift box with an ivory ribbon, no logo, no writing. Replace the printed card with a blank cream card, no heart, no text. Remove all burned-in captions and any other on-screen text. No logos, no watermark.\nAUDIO: do not reuse the original voice, lyrics or music. If the model outputs audio: an intimate everyday ballad bed, soft piano with gentle strings, warm and tender, no vocals, no speech, slowly building and swelling softly in the last 4 seconds.\nNegative: no readable text anywhere, no engraving, no Hope Rings logo or box, no extra or missing fingers, no sparkles or CGI effects, no change of camera movement or cut timing.",
          "tool": "Higgsfield (Genjutsu Lite) — CHƯA gen"
        }
      },
      {
        "id": "HR-B4-mother-daughter",
        "title": "HR-B4 A2: MẸ - CON GÁI (người lớn) dựng lại ad mẫu, thêm nhạc + chữ hook",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Dựng lại ad mẫu 25,7 s, đổi nhân vật + nhạc + chữ hook",
        "step": "ĐÃ DUYỆT (cả 2 nhóm, cấu hình A, hook phương án 1, nhạc cảm xúc + trẻ trung). Ảnh nhân vật đã tạo xong (1,0 credit). CHƯA gen video: chờ Amin chạy Genjutsu Lite bằng lượt free (connector này không dùng được lượt free, chạy ở web hoặc ChatGPT connector) hoặc cho phép tốn credit. Chi tiết: task-hub/KAN-82/output/KAN-82-HR-B4-couple-mother-daughter-prompts.md.",
        "note": "CHỈ DÙNG NỘI BỘ: video mẫu là của đối thủ (Hope Rings), bản dựng vẫn giữ cảnh quay gốc, không đăng cho tới khi Amin duyệt và xử lý bản quyền/thương hiệu. Nhân vật AI, cần nhãn AI, cả hai đều là người lớn.",
        "kit": {
          "referenceVideo": [
            "1-dropship/workspace/heartbond/3-creative/refs/video-mau-doi-thu/hope-rings-ad-ref.mp4"
          ],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
          ],
          "extra": [
            {
              "label": "Config Higgsfield",
              "text": "Cấu hình A (ưu tiên, lượt free): model hf_mult_replace_object_flash (Genjutsu Lite, Kling 4.0), resolution 720p. video_references = video mẫu, image_references = ảnh nhân vật + 2 ảnh nhẫn. Không có tham số audio, aspect ratio theo video mẫu 360x640. Giá chưa kiểm.\nCấu hình B (credit): model seedance_2_5, mode omni_reference, 9:16, 720p, generate_audio true. Không đính kèm video mẫu. Giá đã kiểm (7 credit/giây): 12 s = 84 | 15 s = 105 | 24 s = 168. Số dư 1.146,4."
            },
            {
              "label": "Chữ hook (thêm hậu kỳ)",
              "text": "ĐÃ CHỌN phương án 1 (thêm hậu kỳ, AI không tự vẽ chữ): \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\"\nKhông chép câu gốc của ad, không tục."
            },
            {
              "label": "Nhạc (đã duyệt gu)",
              "text": "ĐÃ DUYỆT gu: cảm xúc, trẻ trung. Gợi ý cho bước nhạc: acoustic-pop / piano ấm, tiết tấu vừa, có cảm giác trẻ, không lời, dâng nhẹ ở 4 giây cuối. Không dùng audio gốc của ad (không rõ bản quyền). Mình chưa nghe audio ad mẫu nên không bám theo nó. Genjutsu Lite không có tham số audio nên nhạc thêm hậu kỳ hoặc gen riêng."
            },
            {
              "label": "File & đăng",
              "text": "Prompt/pack: ../prompts/ (xem README.md của KAN-90)."
            }
          ],
          "prompt": "Edit the reference video. Keep the original timing, cuts, camera framing, camera movement and lighting exactly as they are. Only replace the following, using the reference images.\nPEOPLE: this is a mother and her adult daughter, both clearly adults. Replace the blonde woman everywhere (kitchen shot seen from behind at 0-3 s, face close-up at 10-14 s, the hand-on-chest ending) with the daughter from the character images: about 22, brown hair tied low, no other jewelry or bracelets, short natural unpainted nails. Replace the man in the kitchen shot with the mother from the character images: about 50, short chestnut-brown hair, cream cardigan, she hugs her daughter warmly from behind. In the hands-holding shot (16-18 s) show the mother's hand holding the daughter's hand. Keep the cream chunky-knit sleeve in the hand close-ups.\nPRODUCT: replace every ring (the engraved wrap-around band) with the hug ring from the product images: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only on the finger, plain surface, no engraving, no text, shape taken only from the references.\nBRANDING AND TEXT: replace the white gift box having a logo and printed words with a plain ivory gift box with an ivory ribbon, no logo, no writing. Replace the printed card with a blank cream card, no heart, no text. Remove all burned-in captions and any other on-screen text. No logos, no watermark.\nAUDIO: do not reuse the original voice, lyrics or music. If the model outputs audio: an intimate everyday ballad bed, soft piano with gentle strings, warm and tender, no vocals, no speech, slowly building and swelling softly in the last 4 seconds.\nNegative: no readable text anywhere, no engraving, no Hope Rings logo or box, no extra or missing fingers, no sparkles or CGI effects, no change of camera movement or cut timing.",
          "tool": "Higgsfield (Genjutsu Lite) — CHƯA gen"
        }
      },
      {
        "id": "FB-PROFILE",
        "title": "Facebook Page HeartBond: category, bio, avatar (ĐỀ XUẤT, chờ Amin duyệt)",
        "status": "Chưa qua cổng",
        "gate": "A",
        "format": "Hồ sơ Page",
        "step": "Chờ Amin duyệt rồi tự tạo Page. Chưa tạo.",
        "note": "CATEGORY (tối đa 3): chính \"Jewelry & Watches Store\" (gợi ý, chọn mục gần nhất \"Jewelry/Watches\" nếu tên khác), phụ \"Gift Shop\", \"Online Store\".\n\nINTRO (khoảng 101 ký tự): A little hug, to keep. Rings & gifts for the people you can't hold today.\n(phương án 2: A little hug, to keep. 🤍 Gift rings for the people you miss. | phương án 3: Gift rings that hold on. A little hug, to keep.)\n\nABOUT:\nHeartBond makes small gifts that say what words can't: a little hug, to keep.\nOur Hug Ring is made for the people you love and can't hold today, a granddaughter far away, a daughter, a partner, a friend.\nFollow for gift ideas and stories about the people who matter.\n\nKhông ghi chất liệu, giá, giao hàng, đổi trả, số khách. Chưa có website/email: để trống. Avatar: ảnh AI, không chữ, 0,75 credit cho 3 ảnh; chọn A (khuyên dùng). Chưa tạo Page, tên HeartBond chưa kiểm nhãn hiệu/handle. Chi tiết: task-hub/KAN-82/output/facebook/KAN-82-HeartBond-facebook-profile.md.",
        "media": "1-dropship/workspace/heartbond/3-creative/refs/facebook-avatar/avatar-A-hands-heart.png"
      },
      {
        "id": "HR-B9-MS",
        "title": "HR-B9 (Marketing Studio): Product Crash, Camera POV, phòng khách, 15 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Camera POV (camera an ninh phòng khách), hook Product Crash, 15 s, 9:16",
        "hook": "Product Crash: hộp quà chứa nhẫn rơi làm đổ cốc, nhẫn lăn trên bàn, hình sắc gắt rồi cắt sang cảnh sạch, mẹ bình thản mở hộp.",
        "step": "Đã gen (Amin tự gen, Marketing Studio). Chờ Claude/Amin kiểm audio và nhẫn; chưa qua cổng, chưa đăng. Đã tạo 4 bài nháp Social.",
        "note": "Kết quả: 720x1280, 27,3 s (dài hơn 15 s kế hoạch), có audio. Claude xem 10 khung (mỗi 3 s): hook cà phê đổ lên chăn, hộp quà, cảnh sạch, mẹ mở hộp lấy nhẫn, con gái đứng ở cửa, hai mẹ con ôm, có cận cảnh nhẫn; REC + CAM 1 đủ. Chưa nghe audio (chưa kiểm lời nói), chưa kiểm kỹ số nhẫn và hình 2 bàn tay (cận cảnh nhẫn nhìn như band bạc). File: HR-B9-MS-marketing-studio.mp4 (asset Higgsfield a1ac5910-a70b-44c3-9baa-4793fb19c0a5).\n\nThử trống ô prompt trước, đọc enhanced prompt rồi mới dán prompt trong Kit nếu cần. Muse từng thử Genjutsu Lite: clip nguồn R7-V02 là cảnh cá cảnh nên không dựng được câu chuyện này (0 credit). Nhân vật AI người lớn, cần nhãn AI. Chữ hậu kỳ: \"I never had the words.\" | \"So I gave her a hug she can keep.\" Không claim chất liệu/giá/giao hàng.",
        "kit": {
          "tool": "Higgsfield Marketing Studio",
          "config": "marketing_studio_v2_video · 15 s · 9:16 · 480p (như R7-V02, 720p nếu giá ổn) · audio bật · ước ~45 credit (theo V02, chưa báo giá)",
          "fields": {
            "mode": "Camera POV",
            "hook": "Product Crash",
            "setting": "Living room",
            "product": "Hug Ring (ảnh anchor-2)",
            "avatar": "Không chọn",
            "duration": "15 s",
            "resolution": "480p",
            "aspect": "9:16",
            "audio": "Bật"
          },
          "referenceVideo": [],
          "character": [],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png"
          ],
          "prompt": "Found-footage living-room security camera POV, static corner-mounted wide lens, 9:16 vertical. Small blinking red REC dot and a \"CAM 1\" label, no clock. One locked wide shot for all scenes, no digital crop, mild compression, slight sensor noise. Warm morning window light, cozy living room with a sofa, a low coffee table, a cup of coffee, a cream knit blanket. Hero object @Image1: a polished silver-tone open ring that ends in two small hands wrapping around a finger, one ring only, plain surface, no engraving, no text; it comes in a plain ivory gift box with an ivory ribbon, no logo, no writing. One adult woman about 50 in a cream knit sweater, seen from the side, and later her adult daughter about 22 in the doorway.\nScene 1 (0-3 s, HOOK): the small ivory gift box falls from above into frame, hits the coffee table, knocks the cup so coffee spills on the blanket, the lid pops open and the ring rolls across the table; the image goes harsh and over-sharpened with a jittery glitch, then stops.\nScene 2 (3-7 s): hard cut, same angle, the scene is perfectly clean and restored, the box sits neatly on the table; the woman calmly sits down, opens the box and lifts out the ring.\nScene 3 (7-11 s): she slides the ring onto her finger, the shape of the two small hands is visible; her hand rises to her chest, eyes teary; the daughter appears in the doorway.\nScene 4 (11-15 s): the two hug tightly, the ring visible on the hand on the daughter's back; motion continues to the end, no freeze.\nAudio: diegetic room tone, a soft clatter and a small splash in the hook, then soft warm piano with strings that swells gently in the last 4 seconds; no speech, no vocals.\nNegative: no spoken words, no readable text on the box or card, no engraving, no logo, no watermark, no extra rings (the mother wears no other ring), no extra or missing fingers, no sparkles or CGI effects.",
          "extra": [
            {
              "label": "Nguồn kịch bản",
              "text": "Học theo AquaNest R7-V02 (Marketing Studio · Camera POV · Product Crash). Chi tiết + checklist: 1-dropship/workspace/heartbond/3-creative/prompts/HR-B9-product-crash-marketing-studio.md. Chưa gen, 0 credit; ảnh nhẫn là của Hope Rings (chỉ nội bộ)."
            },
            {
              "label": "Cách dùng prompt",
              "text": "R7-V02 để trống ô prompt người dùng. Thử trống trước, đọc enhanced prompt Higgsfield sinh; nếu lệch thì dán prompt này."
            }
          ]
        },
        "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B9-MS-marketing-studio.mp4"
      },
      {
        "id": "HR-B9-MUSE",
        "title": "HR-B9 (Muse): cùng kịch bản Product Crash, 15 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Camera POV (camera an ninh phòng khách), hook Product Crash, 15 s, 9:16",
        "hook": "Product Crash: hộp quà chứa nhẫn rơi làm đổ cốc, nhẫn lăn trên bàn, hình sắc gắt rồi cắt sang cảnh sạch, mẹ bình thản mở hộp.",
        "step": "Draft: chờ Amin duyệt rồi gen. Chưa gen.",
        "note": "Nhân vật AI người lớn, cần nhãn AI. Chữ hậu kỳ: \"I never had the words.\" | \"So I gave her a hug she can keep.\" Không claim chất liệu/giá/giao hàng.",
        "kit": {
          "tool": "Muse (muse.ai)",
          "config": "Chat Muse mới, yêu cầu 1 video 9:16 15 s có tiếng. Cảnh báo: Muse từng 403 chặn vùng khi tạo video HeartBond (KAN-82); nếu lỗi lại thì chỉ dùng Muse chỉnh copy.",
          "referenceVideo": [],
          "character": [],
          "product": [
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg",
            "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png"
          ],
          "prompt": "Create ONE vertical 9:16 video, 15 seconds, with sound, for a gift ring brand called HeartBond. Do not post or publish anything, do not create accounts.\nProduct: a polished silver-tone open ring that ends in two small hands wrapping around the finger (the \"Hug Ring\"). One ring only, plain surface, no engraving, no text. It comes in a plain ivory gift box with an ivory ribbon, no logo, no writing. Do not state any material, size, price, shipping, guarantee or psychological benefit.\nStyle: found-footage living-room security camera POV, one locked wide corner shot for the whole video, red REC dot and a \"CAM 1\" label, no clock, mild compression, warm morning window light, cosy living room with a sofa, a low coffee table, a cup of coffee, a cream knit blanket.\nCharacters (AI, adults): a mother about 50 in a cream knit sweater seen from the side, and her adult daughter about 22.\nStructure (strong hook, then calm \"reviewing the clip\" feel):\n0-3 s HOOK: the small ivory gift box falls from above onto the coffee table, knocks over the coffee cup, the lid pops open and the ring rolls across the table; the image turns harsh and over-sharpened with a short glitch.\n3-7 s: hard cut, same angle, everything is clean and restored; the mother calmly sits down, opens the box and lifts out the ring.\n7-11 s: she slides the ring onto her finger, hand to her chest, teary eyes; the daughter appears in the doorway.\n11-15 s: they hug tightly, the ring visible on the hand on the daughter's back; motion continues to the end.\nAudio: room tone, a soft clatter and small splash in the hook, then warm piano with strings that swells in the last 4 seconds; no speech, no vocals.\nAvoid: readable text on box or card, engraving, logos, watermark, a second ring on the mother's hand, extra or missing fingers, sparkles.\nAfter generating, report: model used, duration, credits spent, and any problem you noticed (extra rings, gibberish text).",
          "extra": [
            {
              "label": "Nguồn kịch bản",
              "text": "Học theo AquaNest R7-V02 (Marketing Studio · Camera POV · Product Crash). Chi tiết + checklist: 1-dropship/workspace/heartbond/3-creative/prompts/HR-B9-product-crash-marketing-studio.md. Chưa gen, 0 credit; ảnh nhẫn là của Hope Rings (chỉ nội bộ)."
            }
          ]
        }
      },
      {
        "id": "HR-B9-FLOW",
        "title": "HR-B9 (Google Flow): cùng kịch bản Product Crash, nén 8 s",
        "status": "Chưa qua cổng",
        "gate": "C",
        "format": "Camera POV (camera an ninh phòng khách), hook Product Crash, 8 s, 9:16",
        "hook": "Product Crash: hộp quà chứa nhẫn rơi làm đổ cốc, nhẫn lăn trên bàn, hình sắc gắt rồi cắt sang cảnh sạch, mẹ bình thản mở hộp.",
        "step": "Đã gen (Flow Omni 1.2 Flash, 8 s, 24 credit, text-only). Đã có file trên Drive. Có lỗi, chưa qua cổng. Đã tạo 4 bài nháp Social, chưa đăng.",
        "note": "Kết quả theo Muse (Claude chưa tự xem): 720x1280, 8 s, 24 credit, không đính được ảnh mẹ/con nên mặt do AI tự tạo (nhất quán giữa các khung). Đủ 4 beat. Lỗi: (1) hơn 1 nhẫn: hộp vẫn còn 1 nhẫn trong khi mẹ cầm/đeo nhẫn khác; (2) nhẫn trông như band trơn, không thấy 2 bàn tay nhỏ; có dấu sao nhỏ trắng ở góc dưới phải. Không thấy chữ vô nghĩa, logo, lời nói. Claude đã xem 5 khung: có cả hộp quà đóng và hộp mở có nhẫn cùng lúc (xác nhận lỗi hơn 1 nhẫn/hộp), mẹ khóc rồi con gái ôm, nhẫn rất nhỏ khó thấy hình 2 bàn tay. File: HR-B9-FLOW.mp4 (tải từ project Flow 2bb4b6ad, 720p).\n\nNhân vật AI người lớn, cần nhãn AI. Chữ hậu kỳ: \"I never had the words.\" | \"So I gave her a hug she can keep.\" Không claim chất liệu/giá/giao hàng.",
        "kit": {
          "tool": "Google Flow",
          "config": "Omni 1.2 Flash · 8 s · 9:16 · 720p · 24 credit · đính kèm 2 ảnh nhân vật; ảnh nhẫn chỉ mô tả bằng chữ",
          "referenceVideo": [],
          "character": [
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
            "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
          ],
          "product": [],
          "prompt": "One 8-second vertical 9:16 UGC-style video with sound, Omni 1.2 Flash. Use the two attached portraits: the older woman is the MOTHER (about 50), the younger woman is her adult DAUGHTER (about 22); both adults, keep faces, hair and cream knit sweaters consistent. Found-footage living-room security camera look: one locked wide corner shot for the whole video, small blinking red REC dot and a \"CAM 1\" label, no clock, mild compression, warm natural window light, sofa, low coffee table, a coffee cup, cream knit blanket. Story: (1) 0-2 s HOOK: a small plain ivory gift box with an ivory ribbon falls from above onto the coffee table, knocks the coffee cup over, the lid pops open and a silver ring rolls across the table, the image turns harsh and over-sharpened with a jittery glitch; (2) 2-4 s hard cut, same angle, the scene is perfectly clean, the mother calmly sits down and lifts the ring out of the box; the ring is a polished silver open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving; (3) 4-6 s she slides it onto her finger, her hand rises to her chest, her eyes fill with tears, the daughter appears in the doorway; (4) 6-8 s the two hug tightly, the ring visible on the hand on the daughter's back, motion continues to the end. Audio: soft clatter and a small splash in the hook, then warm piano with strings swelling gently at the end, no vocals, no speech. No on-screen text except the REC dot and CAM 1 label, no logos, no watermark text, no extra rings, no extra fingers.",
          "extra": [
            {
              "label": "Nguồn kịch bản",
              "text": "Học theo AquaNest R7-V02 (Marketing Studio · Camera POV · Product Crash). Chi tiết + checklist: 1-dropship/workspace/heartbond/3-creative/prompts/HR-B9-product-crash-marketing-studio.md. Chưa gen, 0 credit; ảnh nhẫn là của Hope Rings (chỉ nội bộ)."
            }
          ]
        },
        "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B9-FLOW.mp4"
      }
    ],
    "social": {
      "FB": {
        "name": "HeartBond",
        "handle": "",
        "url": "",
        "description": "Intro: A little hug, to keep. Rings & gifts for the people you can't hold today.\n\nHeartBond makes small gifts that say what words can't: a little hug, to keep.\nOur Hug Ring is made for the people you love and can't hold today, a granddaughter far away, a daughter, a partner, a friend.\nFollow for gift ideas and stories about the people who matter.",
        "email": "",
        "category": "Jewelry & Watches Store (chính) · Gift Shop · Online Store",
        "status": "Chưa tạo",
        "note": "ĐỀ XUẤT chờ Amin duyệt: kiểm Page đã có chưa; nếu chưa thì Amin duyệt tên rồi tạo. Content pillars: ôm từ xa (bà/ông - cháu) · quà thay lời nói · dịp tặng quà (chưa claim) · hậu trường thương hiệu. Lịch: 3 bài/tuần sau batch đầu, chưa ngày. Tracking: Creative HR-B1-v1; UTM utm_source=facebook|youtube · utm_medium=organic_social · utm_campaign=kan82_hr · utm_content=HR-B1-v1. Chỉ số: view 3 s, giữ chân, lưu/chia sẻ, bình luận; đánh giá sau 3 video hoặc 14 ngày. Avatar (chọn dùng bản có sẵn, khuyên A): 1-dropship/workspace/heartbond/3-creative/refs/facebook-avatar/avatar-A-hands-heart.png (hai bàn tay nâng trái tim, cắt tròn vẫn đủ lề, không chữ); thay thế: avatar-B-hug-ring-mark.png, avatar-C-line-heart-ring.png. Cover: chưa có. Quyền dùng asset: video AI gắn nhãn, ảnh Hope Rings chỉ tham chiếu nội bộ, nhạc hợp lệ.\n\nCẬP NHẬT 08/11/2026 (theo Muse): Facebook chặn tài khoản heartbond.shop@gmail.com, có đơn kháng nghị gửi 08/11/2026, đang chờ Facebook xét (thường ~1 giờ; nếu không đạt sẽ bị vô hiệu hóa vĩnh viễn). Page HeartBond CHƯA tạo; Muse bỏ qua Facebook trong lượt đăng HR-B5. Muse từng báo tên HeartBond đã có nhiều người bán dùng (chưa xác minh).\n\nMuse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): không thấy Page HeartBond nào; chưa từng tạo.\n\nCategory/Description cập nhật 10/11/2026 theo đề xuất KAN-82-HeartBond-facebook-profile.md: chưa áp dụng lên kênh thật, không có claim chất liệu/giá/giao hàng/đổi trả/\"handmade\"/\"925 silver\".",
        "posts": [
          {
            "id": "KAN82-FB-B1",
            "title": "Batch 1 · bài 1: HR-B1 bản Higgsfield (12 s, chưa có tiếng)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng, chưa qua cổng C. Video AI: bật nhãn AI khi đăng. Chưa có hàng thật nên không đăng cho tới khi Amin duyệt bằng văn bản. Không claim chất liệu/giá/giao hàng.",
            "file": "HR-B1-higgsfield-seedance-v1.mp4",
            "caption": "For the granddaughter you can't hug today. 🤍\n\nA little hug she can keep.\n\nWho would you send one to? Tell us below 👇",
            "hashtags": "#HugRing #GiftForGranddaughter #GrandmaLove #LongDistanceLove #GiftIdeas",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B1-higgsfield-seedance-v1.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, 12 s, 9:16, 720p, 2 ảnh neo nhẫn, 84 credit (+2 credit ảnh trước đó). Amin chọn ref-01 làm ảnh neo. Kết quả: hình nhẫn/bàn tay chưa rõ, góc quay từ phía sau; không có tiếng."
                },
                {
                  "label": "Nhân vật",
                  "text": "Không có ảnh nhân vật; mô tả bằng chữ trong prompt: bà ~65 tuổi tóc bạc ngang vai, cardigan len kem."
                },
                {
                  "label": "Nguồn prompt",
                  "text": "output/KAN-82-HR-B1-pack.md mục 5"
                }
              ],
              "prompt": "Higgsfield, vertical 9:16, 12 s, realistic phone-filmed UGC look, soft warm morning window light, each shot is a fixed frame with no camera movement inside it, hard cuts between shots. Attach 2 product reference photos: anchor-1-ring-shape.png (shape of the ring: an open ring ending in two small hands that wrap around a finger) and anchor-2-ring-on-finger.jpg (how it looks on a finger). Use them only for the ring's shape; do not copy the red velvet box, the card or any text from them, and do not invent engraving. Character (identical in every shot): a grandmother about 65 with neat silver-grey shoulder-length hair, a thick cream chunky-knit cardigan without text or logo, short natural unpainted nails, wearing no jewelry at all. Bright kitchen with a light wooden counter and a window with a sheer curtain. Shot 1 (0-3 s, NO ring in frame): seen from behind, the grandmother stands at the kitchen window holding a mug, quietly looking outside; top third of the frame left empty. Shot 2 (3-6 s): close-up of both her hands on the cream knit sleeve placing the hug ring on a small cream cloth inside an open ivory gift box with an ivory ribbon, no writing; the ring matches the references. Shot 3 (6-9 s): one hand lays a blank cream card beside the ring while the other hand closes the lid. Shot 4 (9-12 s): she holds the closed box against her chest with both hands and smiles softly, the window blurred behind her; hold the last 2 s, top third empty. Soft piano music, no speech. Negative: no spoken words, no on-screen text, no captions, no subtitles, no logo, no watermark, no readable writing on the card or box, no engraving visible, no red velvet or hexagon box, no extra or missing fingers, no other jewelry on anyone, no sparkles or CGI effects, no camera movement inside a shot."
            }
          },
          {
            "id": "KAN82-FB-B2",
            "title": "Batch 1 · bài 1 (phương án B): HR-B1 bản Flow (8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng, chưa qua cổng C. Video AI: bật nhãn AI khi đăng. Chưa có hàng thật nên không đăng cho tới khi Amin duyệt bằng văn bản. Không claim chất liệu/giá/giao hàng. Hình nhẫn có thể lệch.",
            "file": "HR-B1-flow-omni12flash-v1.mp4",
            "caption": "For the granddaughter you can't hug today. 🤍\n\nA little hug she can keep.\n\nWho would you send one to? Tell us below 👇",
            "hashtags": "#HugRing #GiftForGranddaughter #GrandmaLove #LongDistanceLove #GiftIdeas",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B1-flow-omni12flash-v1.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản minhpham.piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit. CHỈ text prompt, không attach ảnh neo nên hình nhẫn có thể lệch."
                },
                {
                  "label": "Nhân vật",
                  "text": "Không có ảnh nhân vật; mô tả bằng chữ trong prompt."
                },
                {
                  "label": "Nguồn prompt",
                  "text": "output/KAN-82-HR-B1-pack.md mục 6"
                }
              ],
              "prompt": "Veo (Google Flow), vertical 9:16, 8 s, realistic phone-filmed UGC look, soft warm morning window light, fixed frames, hard cuts, no camera movement inside a shot. Reference images: the hug ring (open ring ending in two small hands wrapping a finger), shape only. Same grandmother in every shot (65, silver-grey shoulder-length hair, thick cream chunky-knit cardigan, no jewelry), bright kitchen, light wooden counter, window with sheer curtain. 0-2 s (no ring): from behind, she stands at the kitchen window holding a mug, top third of frame empty. 2-4 s: close-up of her hands on the knit sleeve placing the ring on cream cloth in an open ivory box. 4-6 s: one hand lays a blank cream card beside the ring, the other closes the lid with an ivory ribbon. 6-8 s: she holds the closed box to her chest and smiles softly. Soft piano, no speech. Negative: no spoken words, no on-screen text, no captions, no subtitles, no logo, no watermark, no readable writing on the card or box, no engraving visible, no red velvet or hexagon box, no extra or missing fingers, no other jewelry on anyone, no sparkles or CGI effects, no camera movement inside a shot."
            }
          },
          {
            "id": "KAN82-FB-B5-couple",
            "title": "HR-B5 cặp đôi (Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Chưa có Page (tài khoản FB đang chờ kháng nghị); chưa đăng. Video AI (Google Flow), cần bật nhãn AI khi đăng. Còn dấu sao nhỏ của Flow ở góc dưới phải, chưa có chữ hook (đăng bản gốc theo lệnh Amin). Không giá/chất liệu/giao hàng/đổi trả. Chưa qua review độc lập (cổng C).",
            "file": "HR-B5-flow-couple.mp4",
            "caption": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍",
            "hashtags": "#HugRing #GiftIdeas #CoupleGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-couple.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-woman-30.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-man-32.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
                },
                {
                  "label": "Chữ hook (thêm hậu kỳ)",
                  "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the woman (about 30, long wavy light-brown hair) and the man (about 32, plain grey t-shirt), a loving young couple, both clearly adults, keep faces and hair consistent, she wears a cream knit sweater. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the woman seen from behind at the stove, the man walks up and hugs her gently from behind; (2) 2-4 s, close-up of her hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, her face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the man's hand holds the woman's hand, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers."
            }
          },
          {
            "id": "KAN82-FB-B5-md",
            "title": "HR-B5 mẹ - con gái (Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Chưa có Page (tài khoản FB đang chờ kháng nghị); chưa đăng. Video AI (Google Flow), cần bật nhãn AI khi đăng. Còn dấu sao nhỏ của Flow ở góc dưới phải, chưa có chữ hook (đăng bản gốc theo lệnh Amin). Không giá/chất liệu/giao hàng/đổi trả. Chưa qua review độc lập (cổng C).",
            "file": "HR-B5-flow-mother-daughter.mp4",
            "caption": "If you can't be there to hug her, give her a hug she can keep. 🤍",
            "hashtags": "#HugRing #GiftIdeas #MotherDaughter",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-mother-daughter.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
                },
                {
                  "label": "Chữ hook (thêm hậu kỳ)",
                  "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50) and the younger woman is her adult DAUGHTER (about 22). Both are adults, keep their faces, hair and cream knit sweaters consistent. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the daughter seen from behind at the stove, her mother walks up and hugs her warmly from behind; (2) 2-4 s, close-up of the daughter's hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, the daughter's face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the mother and daughter hold hands, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers."
            }
          },
          {
            "id": "KAN82-FB-B6-couple",
            "title": "HR-B6 cặp đôi (Higgsfield, Amin, 25,75 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Chưa có Page (tài khoản FB chờ kháng nghị); chưa đăng. Video AI (Higgsfield, Amin gen), cần bật nhãn AI khi đăng. Có thẻ chữ AI vô nghĩa và hộp đỏ trong video (xem Creative HR-B6). Amin yêu cầu đăng. Không giá/chất liệu/giao hàng/đổi trả. Chưa qua review độc lập (cổng C).",
            "file": "HR-B6-amin-higgsfield-couple-v1.mp4",
            "caption": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍",
            "hashtags": "#HugRing #GiftIdeas #CoupleGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B6-amin-higgsfield-couple-v1.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [],
              "product": [],
              "extra": [
                {
                  "label": "Tham chiếu / prompt / config",
                  "text": "CHƯA GHI: Amin tự gen video này trên Higgsfield; công cụ, video tham chiếu, ảnh nhân vật/sản phẩm, prompt và config chưa được gửi cho Claude. Nhờ Amin dán vào đây (hoặc nói cho Claude) để cập nhật. Nhìn khung hình: kịch bản cặp đôi + cận nhẫn + hộp đỏ giống nhịp ad Hope Rings, nhiều khả năng dựng từ video mẫu của họ (chưa xác nhận)."
                },
                {
                  "label": "Nguồn",
                  "text": "Amin tự gen trên Higgsfield; công cụ/prompt chưa được ghi."
                },
                {
                  "label": "Caption đăng",
                  "text": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍  #HugRing #GiftIdeas #CoupleGift"
                }
              ]
            }
          },
          {
            "id": "KAN82-FB-B7-K1-higgs",
            "title": "HR-B7 K1 (Higgsfield 12 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Caption/hashtag theo script angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Higgsfield Seedance 2.5 (84 credit). Cảnh bếp, con đặt hộp, mẹ mở, đeo nhẫn, che miệng khóc, ôm. Lỗi: mẹ đã có sẵn nhẫn cưới nên có 2 nhẫn trên tay; hình nhẫn mới gần đúng ảnh neo. Text 1 câu lời nhắn gửi mẹ đã burn vào video (bản -msg). Facebook: chưa có Page (tài khoản chờ kháng nghị).",
            "file": "HR-B7-K1-higgsfield-msg.mp4",
            "caption": "Mom never asked for anything. So I gave her something. A hug she can keep. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K1-higgsfield-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,5-11,8 s): \"Mom never asked for anything, so I gave her this.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Warm natural window light, bright cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother stands at the kitchen sink washing a cup, seen from the side, quiet and tired but content; behind her the daughter waits in the doorway holding a small plain ivory gift box with an ivory ribbon, no logo, no writing; (2) 3-6 s, the daughter sets the box on the table, the mother turns, surprised, and opens it; close-up of her hands opening the box, a blank cream card beside the ring; (3) 6-9 s, close-up of the daughter gently sliding the ring onto the mother's finger, the mother's other hand rises to cover her mouth, her eyes fill with tears; (4) 9-12 s, the mother pulls her daughter into a long tight hug, tears and a trembling smile, the ring visible on the hand on the daughter's back, the camera slowly pushes in. Audio: grand emotional cinematic piano with soft strings that swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-FB-B7-K3-higgs",
            "title": "HR-B7 K3 (Higgsfield 12 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Caption/hashtag theo script angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Higgsfield Seedance 2.5 (84 credit). Mẹ thấy hộp cạnh cà phê, mở, đeo nhẫn, khóc, con gái ôm. Lỗi: có chữ mờ dập nổi trong nắp hộp, mẹ cũng có sẵn nhẫn trên tay, ánh nắng quá gắt ở vài khung. Text 1 câu lời nhắn gửi mẹ đã burn vào video (bản -msg). Facebook: chưa có Page (tài khoản chờ kháng nghị).",
            "file": "HR-B7-K3-higgsfield-msg.mp4",
            "caption": "She found it by her coffee. I never had the words. So I gave her a hug. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K3-higgsfield-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,5-11,8 s): \"I never had the words, so I left a hug by your coffee, Mom.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Soft early-morning window light, cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother sits alone at the kitchen table with a coffee cup, sunlight on her face, she notices a small plain ivory gift box with an ivory ribbon (no logo, no writing) and a blank cream card next to her cup; (2) 3-6 s, close-up of her hands lifting the lid, the ring inside on cream fabric; (3) 6-9 s, she puts the ring on her finger, looks at it, then her hand rises to her chest and her eyes fill with tears; she looks up toward the doorway; (4) 9-12 s, the daughter stands in the doorway smiling with teary eyes, the mother laughs and cries at once, opens her arms, the daughter runs in and they hug tightly, camera slowly pushing in. Audio: grand emotional cinematic piano with soft strings that builds and swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-FB-B7-K2-flow",
            "title": "HR-B7 K2 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Caption/hashtag theo script angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Google Flow Omni 1.2 Flash (24 credit). Cận tay mẹ, con đeo nhẫn, nắm tay, mặt mẹ rưng rưng. Có thể thấy 2 nhẫn ở vài khung; dấu sao Flow đã làm mờ. Text 1 câu lời nhắn gửi mẹ đã burn vào video (bản -msg). Facebook: chưa có Page (tài khoản chờ kháng nghị).",
            "file": "HR-B7-K2-flow-msg.mp4",
            "caption": "These hands held me. Now I want to hold them back. For Mom. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-K2-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow, Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn KHÔNG đính kèm (chỉ mô tả bằng chữ) nên nhẫn gần đúng. Dấu sao Flow ở góc dưới phải đã xóa mờ bằng ffmpeg delogo."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,4-7,8 s): \"Mom, these hands held me, now I just want to hold them back.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 emotional close-up video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50), the younger woman is her adult DAUGHTER (about 22). Both adults, keep faces, hair and cream knit sweaters consistent. Soft warm window light, handheld phone look, quick cuts. Story: (1) 0-2 s, extreme close-up of the mother's hands resting on a wooden table, cream knit sleeves, hands that have worked hard, natural unpainted nails, no jewelry on them; (2) 2-4 s, the daughter's hands gently take her mother's hand and slide a polished silver hug ring (an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving) onto her finger; (3) 4-6 s, the mother's hand closes around her daughter's hand, close-up, the ring visible; (4) 6-8 s, close-up of the mother's face, she smiles through tears, glances at the ring, then looks up at her daughter. Audio: grand emotional cinematic piano with soft strings swelling powerfully at the end, no vocals, no speech. No on-screen text, no captions, no logo, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-FB-B8-F1-flow",
            "title": "HR-B8 F1 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Cửa mở, con gái cầm hộp, mẹ sững người rồi ôm. Nhẫn 1 chiếc rõ ở cận cảnh tay. Chữ 1 câu đã burn vào video. Facebook: chưa có Page (tài khoản chờ kháng nghị).",
            "file": "HR-B8-F1-flow-msg.mp4",
            "caption": "Mom, I can't be there every day, so I brought you a hug. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F1-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "Mom, I can't be there every day, so I brought you a hug."
                }
              ],
              "prompt": "Warm daylight, the mother opens her front door, the daughter stands there holding a small plain ivory gift box with ivory ribbon (no logo, no writing). The mother freezes, hand to mouth, eyes glistening, then pulls her daughter into a long tight hug; close-up of the mother's hand with one polished silver-tone ring ending in two small hands on the daughter's back. Soft warm piano, no dialogue, no on-screen text."
            }
          },
          {
            "id": "KAN82-FB-B8-F2-flow",
            "title": "HR-B8 F2 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Mẹ đan len, dừng lại nhìn nhẫn, mỉm cười rưng rưng. Có vòng len nhỏ trên ngón tay kia trông như nhẫn thứ hai ở vài khung. Chữ 1 câu đã burn vào video. Facebook: chưa có Page (tài khoản chờ kháng nghị).",
            "file": "HR-B8-F2-flow-msg.mp4",
            "caption": "Mom, when you look at your hands, remember that's me holding you. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F2-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "Mom, when you look at your hands, remember that's me holding you."
                }
              ],
              "prompt": "Cozy living room, soft window light, the mother in a cream knit sweater sits knitting; she pauses, looks down at her hand wearing one polished silver-tone ring ending in two small hands, smiles with glistening eyes and presses the hand to her chest. Close-up of ring and hand, then her face. Soft warm piano, no dialogue, no on-screen text."
            }
          },
          {
            "id": "KAN82-FB-B8-F3-flow",
            "title": "HR-B8 F3 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Hai mẹ con trên sofa, mẹ mở hộp, cười khóc, con lau nước mắt. Nhẫn trong hộp hơi khác ảnh neo; có vệt mờ nhỏ ở góc dưới phải (vị trí dấu sao). Chữ 1 câu đã burn vào video. Facebook: chưa có Page (tài khoản chờ kháng nghị).",
            "file": "HR-B8-F3-flow-msg.mp4",
            "caption": "You gave me everything, Mom. This is just a small thank you. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F3-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "You gave me everything, Mom. This is just a small thank you."
                }
              ],
              "prompt": "Warm living room sofa, soft golden light; mother and daughter sit side by side, the mother opens a small plain ivory gift box with ivory ribbon (no logo, no writing), sees one polished silver-tone ring ending in two small hands, laughs and cries at once; the daughter wipes a tear from her cheek and they embrace. Soft warm piano swelling, no dialogue, no on-screen text."
            }
          },
          {
            "id": "HR-B9-FB-FLOW",
            "title": "HR-B9-FLOW · Product Crash (Google Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Amin tự đăng. Video AI: bật nhãn AI khi đăng. Lỗi đã biết: hơn 1 nhẫn/hộp trong khung, nhẫn trông như band trơn (không thấy hình 2 bàn tay), có dấu sao nhỏ góc dưới phải. Không claim chất liệu, giá, giao hàng, khắc chữ, \"forever\", hiệu quả tâm lý. Chưa có hàng thật nên chưa qua cổng C. Facebook: HeartBond chưa có Page (tài khoản từng bị chặn), nên bài FB để dành khi có Page.",
            "file": "HR-B9-FLOW.mp4 (720×1280, 8 s)",
            "caption": "Some gifts say it without a word. 💍\nWho would you give one to? Tell us below 👇",
            "hashtags": "#HeartBond #HugRing #GiftForMom",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B9-FLOW.mp4"
          },
          {
            "id": "HR-B9-FB-MS",
            "title": "HR-B9-MS · Product Crash (Higgsfield Marketing Studio, 27 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Amin tự đăng. Video AI: bật nhãn AI. Cần nghe audio trước khi đăng (chưa kiểm lời nói; không được có claim chất liệu/giá/giao hàng/\"forever\"/hiệu quả tâm lý). Ảnh nhẫn là tham chiếu Hope Rings, chưa có hàng thật nên chưa qua cổng C. Facebook: HeartBond chưa có Page, để dành.",
            "file": "HR-B9-MS-marketing-studio.mp4 (720×1280, 27 s)",
            "caption": "Some gifts say it without a word. 💍\nWho would you give one to? Tell us below 👇",
            "hashtags": "#HeartBond #HugRing #GiftForMom",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B9-MS-marketing-studio.mp4"
          }
        ]
      },
      "IG": {
        "status": "Đã đăng bài đầu",
        "posts": [
          {
            "id": "KAN82-IG-B5-couple",
            "title": "HR-B5 cặp đôi (Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe3Km4PQyG/",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo).",
            "file": "HR-B5-flow-couple.mp4",
            "caption": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍",
            "hashtags": "#HugRing #GiftIdeas #CoupleGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-couple.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-woman-30.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-man-32.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
                },
                {
                  "label": "Chữ hook (thêm hậu kỳ)",
                  "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the woman (about 30, long wavy light-brown hair) and the man (about 32, plain grey t-shirt), a loving young couple, both clearly adults, keep faces and hair consistent, she wears a cream knit sweater. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the woman seen from behind at the stove, the man walks up and hugs her gently from behind; (2) 2-4 s, close-up of her hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, her face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the man's hand holds the woman's hand, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers."
            }
          },
          {
            "id": "KAN82-IG-B5-md",
            "title": "HR-B5 mẹ - con gái (Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe3U9uPjF0/",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo).",
            "file": "HR-B5-flow-mother-daughter.mp4",
            "caption": "If you can't be there to hug her, give her a hug she can keep. 🤍",
            "hashtags": "#HugRing #GiftIdeas #MotherDaughter",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-mother-daughter.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
                },
                {
                  "label": "Chữ hook (thêm hậu kỳ)",
                  "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50) and the younger woman is her adult DAUGHTER (about 22). Both are adults, keep their faces, hair and cream knit sweaters consistent. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the daughter seen from behind at the stove, her mother walks up and hugs her warmly from behind; (2) 2-4 s, close-up of the daughter's hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, the daughter's face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the mother and daughter hold hands, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers."
            }
          },
          {
            "id": "KAN82-IG-B6-couple",
            "title": "HR-B6 cặp đôi (Higgsfield, Amin, 25,75 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe3fnpvhdk/",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo).",
            "file": "HR-B6-amin-higgsfield-couple-v1.mp4",
            "caption": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍",
            "hashtags": "#HugRing #GiftIdeas #CoupleGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B6-amin-higgsfield-couple-v1.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [],
              "product": [],
              "extra": [
                {
                  "label": "Tham chiếu / prompt / config",
                  "text": "CHƯA GHI: Amin tự gen video này trên Higgsfield; công cụ, video tham chiếu, ảnh nhân vật/sản phẩm, prompt và config chưa được gửi cho Claude. Nhờ Amin dán vào đây (hoặc nói cho Claude) để cập nhật. Nhìn khung hình: kịch bản cặp đôi + cận nhẫn + hộp đỏ giống nhịp ad Hope Rings, nhiều khả năng dựng từ video mẫu của họ (chưa xác nhận)."
                },
                {
                  "label": "Nguồn",
                  "text": "Amin tự gen trên Higgsfield; công cụ/prompt chưa được ghi."
                },
                {
                  "label": "Caption đăng",
                  "text": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍  #HugRing #GiftIdeas #CoupleGift"
                }
              ]
            }
          },
          {
            "id": "KAN82-IG-B7-K1-higgs",
            "title": "HR-B7 K1 (Higgsfield 12 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe-oGsvKAp/",
            "date": "08/11/2026",
            "note": "Kiểm 09/11/2026 trên trang công khai: bài có thật, tiêu đề/caption khớp. Muse đăng, nhãn AI bật (theo Muse báo). TikTok bài này chưa đăng (kẹt captcha).",
            "file": "HR-B7-K1-higgsfield-msg.mp4",
            "caption": "Mom never asked for anything. So I gave her something. A hug she can keep. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K1-higgsfield-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,5-11,8 s): \"Mom never asked for anything, so I gave her this.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Warm natural window light, bright cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother stands at the kitchen sink washing a cup, seen from the side, quiet and tired but content; behind her the daughter waits in the doorway holding a small plain ivory gift box with an ivory ribbon, no logo, no writing; (2) 3-6 s, the daughter sets the box on the table, the mother turns, surprised, and opens it; close-up of her hands opening the box, a blank cream card beside the ring; (3) 6-9 s, close-up of the daughter gently sliding the ring onto the mother's finger, the mother's other hand rises to cover her mouth, her eyes fill with tears; (4) 9-12 s, the mother pulls her daughter into a long tight hug, tears and a trembling smile, the ring visible on the hand on the daughter's back, the camera slowly pushes in. Audio: grand emotional cinematic piano with soft strings that swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-IG-B7-K3-higgs",
            "title": "HR-B7 K3 (Higgsfield 12 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe-7i6PcH1/",
            "date": "08/11/2026",
            "note": "Kiểm 09/11/2026 trên trang công khai: bài có thật, tiêu đề/caption khớp. Muse đăng, nhãn AI bật (theo Muse báo). TikTok bài này chưa đăng (kẹt captcha).",
            "file": "HR-B7-K3-higgsfield-msg.mp4",
            "caption": "She found it by her coffee. I never had the words. So I gave her a hug. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K3-higgsfield-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,5-11,8 s): \"I never had the words, so I left a hug by your coffee, Mom.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Soft early-morning window light, cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother sits alone at the kitchen table with a coffee cup, sunlight on her face, she notices a small plain ivory gift box with an ivory ribbon (no logo, no writing) and a blank cream card next to her cup; (2) 3-6 s, close-up of her hands lifting the lid, the ring inside on cream fabric; (3) 6-9 s, she puts the ring on her finger, looks at it, then her hand rises to her chest and her eyes fill with tears; she looks up toward the doorway; (4) 9-12 s, the daughter stands in the doorway smiling with teary eyes, the mother laughs and cries at once, opens her arms, the daughter runs in and they hug tightly, camera slowly pushing in. Audio: grand emotional cinematic piano with soft strings that builds and swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-IG-B7-K2-flow",
            "title": "HR-B7 K2 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/Dfe_L7tvWP8/",
            "date": "08/11/2026",
            "note": "Kiểm 09/11/2026 trên trang công khai: bài có thật, tiêu đề/caption khớp. Muse đăng, nhãn AI bật (theo Muse báo). TikTok bài này chưa đăng (kẹt captcha).",
            "file": "HR-B7-K2-flow-msg.mp4",
            "caption": "These hands held me. Now I want to hold them back. For Mom. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-K2-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow, Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn KHÔNG đính kèm (chỉ mô tả bằng chữ) nên nhẫn gần đúng. Dấu sao Flow ở góc dưới phải đã xóa mờ bằng ffmpeg delogo."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,4-7,8 s): \"Mom, these hands held me, now I just want to hold them back.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 emotional close-up video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50), the younger woman is her adult DAUGHTER (about 22). Both adults, keep faces, hair and cream knit sweaters consistent. Soft warm window light, handheld phone look, quick cuts. Story: (1) 0-2 s, extreme close-up of the mother's hands resting on a wooden table, cream knit sleeves, hands that have worked hard, natural unpainted nails, no jewelry on them; (2) 2-4 s, the daughter's hands gently take her mother's hand and slide a polished silver hug ring (an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving) onto her finger; (3) 4-6 s, the mother's hand closes around her daughter's hand, close-up, the ring visible; (4) 6-8 s, close-up of the mother's face, she smiles through tears, glances at the ring, then looks up at her daughter. Audio: grand emotional cinematic piano with soft strings swelling powerfully at the end, no vocals, no speech. No on-screen text, no captions, no logo, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-IG-B8-F1-flow",
            "title": "HR-B8 F1 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/DfgH1coPyuP/",
            "date": "09/11/2026",
            "note": "Đăng 09/11 08:12 giờ VN theo Muse; Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): hashtag khớp, 3 likes. Nhãn AI: Muse ghi bật lúc đăng, chưa kiểm lại; caption toàn văn chưa kiểm lại.",
            "file": "HR-B8-F1-flow-msg.mp4",
            "caption": "Mom, I can't be there every day, so I brought you a hug. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F1-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "Mom, I can't be there every day, so I brought you a hug."
                }
              ],
              "prompt": "Warm daylight, the mother opens her front door, the daughter stands there holding a small plain ivory gift box with ivory ribbon (no logo, no writing). The mother freezes, hand to mouth, eyes glistening, then pulls her daughter into a long tight hug; close-up of the mother's hand with one polished silver-tone ring ending in two small hands on the daughter's back. Soft warm piano, no dialogue, no on-screen text."
            }
          },
          {
            "id": "KAN82-IG-B8-F2-flow",
            "title": "HR-B8 F2 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/DfgIELLPUKg/",
            "date": "09/11/2026",
            "note": "Đăng 09/11 08:14 giờ VN theo Muse; Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): hashtag khớp, 0 like. Nhãn AI: Muse ghi bật lúc đăng, chưa kiểm lại; caption toàn văn chưa kiểm lại.",
            "file": "HR-B8-F2-flow-msg.mp4",
            "caption": "Mom, when you look at your hands, remember that's me holding you. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F2-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "Mom, when you look at your hands, remember that's me holding you."
                }
              ],
              "prompt": "Cozy living room, soft window light, the mother in a cream knit sweater sits knitting; she pauses, looks down at her hand wearing one polished silver-tone ring ending in two small hands, smiles with glistening eyes and presses the hand to her chest. Close-up of ring and hand, then her face. Soft warm piano, no dialogue, no on-screen text."
            }
          },
          {
            "id": "KAN82-IG-B8-F3-flow",
            "title": "HR-B8 F3 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.instagram.com/p/DfgISVdPs-R/",
            "date": "09/11/2026",
            "note": "Đăng 09/11 08:16 giờ VN theo Muse; Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): hashtag khớp, 0 like. Nhãn AI: Muse ghi bật lúc đăng, chưa kiểm lại; caption toàn văn chưa kiểm lại.",
            "file": "HR-B8-F3-flow-msg.mp4",
            "caption": "You gave me everything, Mom. This is just a small thank you. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F3-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "You gave me everything, Mom. This is just a small thank you."
                }
              ],
              "prompt": "Warm living room sofa, soft golden light; mother and daughter sit side by side, the mother opens a small plain ivory gift box with ivory ribbon (no logo, no writing), sees one polished silver-tone ring ending in two small hands, laughs and cries at once; the daughter wipes a tear from her cheek and they embrace. Soft warm piano swelling, no dialogue, no on-screen text."
            }
          },
          {
            "id": "HR-B9-IG-FLOW",
            "title": "HR-B9-FLOW · Product Crash (Google Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Amin tự đăng. Video AI: bật nhãn AI khi đăng. Lỗi đã biết: hơn 1 nhẫn/hộp trong khung, nhẫn trông như band trơn (không thấy hình 2 bàn tay), có dấu sao nhỏ góc dưới phải. Không claim chất liệu, giá, giao hàng, khắc chữ, \"forever\", hiệu quả tâm lý. Chưa có hàng thật nên chưa qua cổng C.",
            "file": "HR-B9-FLOW.mp4 (720×1280, 8 s)",
            "caption": "Some gifts say it without a word. 💍\nWho would you give one to? Tell us below 👇",
            "hashtags": "#HeartBond #HugRing #GiftForMom",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B9-FLOW.mp4"
          },
          {
            "id": "HR-B9-IG-MS",
            "title": "HR-B9-MS · Product Crash (Higgsfield Marketing Studio, 27 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Amin tự đăng. Video AI: bật nhãn AI. Cần nghe audio trước khi đăng (chưa kiểm lời nói; không được có claim chất liệu/giá/giao hàng/\"forever\"/hiệu quả tâm lý). Ảnh nhẫn là tham chiếu Hope Rings, chưa có hàng thật nên chưa qua cổng C.",
            "file": "HR-B9-MS-marketing-studio.mp4 (720×1280, 27 s)",
            "caption": "Some gifts say it without a word. 💍\nWho would you give one to? Tell us below 👇",
            "hashtags": "#HeartBond #HugRing #GiftForMom",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B9-MS-marketing-studio.mp4"
          }
        ],
        "note": "Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): 9/9 Reels live (3 bài B5/B6 cũ + 6 bài tặng mẹ), không bài nào bị lỗi hay gỡ. Nhãn AI và caption toàn văn chưa kiểm lại.\n\nAvatar (chọn dùng bản có sẵn, khuyên A): 1-dropship/workspace/heartbond/3-creative/refs/facebook-avatar/avatar-A-hands-heart.png (hai bàn tay nâng trái tim, cắt tròn vẫn đủ lề, không chữ); thay thế: avatar-B-hug-ring-mark.png, avatar-C-line-heart-ring.png. Cover: chưa có.\n\nCategory/Description cập nhật 10/11/2026 theo đề xuất KAN-82-HeartBond-facebook-profile.md: chưa áp dụng lên kênh thật, không có claim chất liệu/giá/giao hàng/đổi trả/\"handmade\"/\"925 silver\".",
        "url": "https://www.instagram.com/heartbond.shop/",
        "handle": "heartbond.shop",
        "name": "heartbond.shop",
        "category": "Jewelry & Watches (hoặc Gift Shop nếu IG không có mục đầu)",
        "description": "A little hug, to keep. 🤍 Gift rings for the people you miss."
      },
      "TT": {
        "status": "Đã đăng bài đầu",
        "posts": [
          {
            "id": "KAN82-TT-B5-couple",
            "title": "HR-B5 cặp đôi (Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@heartbond.shop/video/7705787350768536840",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo).",
            "file": "HR-B5-flow-couple.mp4",
            "caption": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍",
            "hashtags": "#HugRing #GiftIdeas #CoupleGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-couple.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-woman-30.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-man-32.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
                },
                {
                  "label": "Chữ hook (thêm hậu kỳ)",
                  "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the woman (about 30, long wavy light-brown hair) and the man (about 32, plain grey t-shirt), a loving young couple, both clearly adults, keep faces and hair consistent, she wears a cream knit sweater. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the woman seen from behind at the stove, the man walks up and hugs her gently from behind; (2) 2-4 s, close-up of her hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, her face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the man's hand holds the woman's hand, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers."
            }
          },
          {
            "id": "KAN82-TT-B5-md",
            "title": "HR-B5 mẹ - con gái (Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@heartbond.shop/video/7705788719344782610",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo).",
            "file": "HR-B5-flow-mother-daughter.mp4",
            "caption": "If you can't be there to hug her, give her a hug she can keep. 🤍",
            "hashtags": "#HugRing #GiftIdeas #MotherDaughter",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-mother-daughter.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
                },
                {
                  "label": "Chữ hook (thêm hậu kỳ)",
                  "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50) and the younger woman is her adult DAUGHTER (about 22). Both are adults, keep their faces, hair and cream knit sweaters consistent. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the daughter seen from behind at the stove, her mother walks up and hugs her warmly from behind; (2) 2-4 s, close-up of the daughter's hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, the daughter's face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the mother and daughter hold hands, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers."
            }
          },
          {
            "id": "KAN82-TT-B6-couple",
            "title": "HR-B6 cặp đôi (Higgsfield, Amin, 25,75 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.tiktok.com/@heartbond.shop/video/7705789320086474002",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo).",
            "file": "HR-B6-amin-higgsfield-couple-v1.mp4",
            "caption": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍",
            "hashtags": "#HugRing #GiftIdeas #CoupleGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B6-amin-higgsfield-couple-v1.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [],
              "product": [],
              "extra": [
                {
                  "label": "Tham chiếu / prompt / config",
                  "text": "CHƯA GHI: Amin tự gen video này trên Higgsfield; công cụ, video tham chiếu, ảnh nhân vật/sản phẩm, prompt và config chưa được gửi cho Claude. Nhờ Amin dán vào đây (hoặc nói cho Claude) để cập nhật. Nhìn khung hình: kịch bản cặp đôi + cận nhẫn + hộp đỏ giống nhịp ad Hope Rings, nhiều khả năng dựng từ video mẫu của họ (chưa xác nhận)."
                },
                {
                  "label": "Nguồn",
                  "text": "Amin tự gen trên Higgsfield; công cụ/prompt chưa được ghi."
                },
                {
                  "label": "Caption đăng",
                  "text": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍  #HugRing #GiftIdeas #CoupleGift"
                }
              ]
            }
          },
          {
            "id": "KAN82-TT-B7-K1-higgs",
            "title": "HR-B7 K1 (Higgsfield 12 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Caption/hashtag theo script angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Higgsfield Seedance 2.5 (84 credit). Cảnh bếp, con đặt hộp, mẹ mở, đeo nhẫn, che miệng khóc, ôm. Lỗi: mẹ đã có sẵn nhẫn cưới nên có 2 nhẫn trên tay; hình nhẫn mới gần đúng ảnh neo. Text 1 câu lời nhắn gửi mẹ đã burn vào video (bản -msg). Giao Muse đăng 08/11. Kẹt captcha kéo-thả trên TikTok, chờ Amin giải.",
            "file": "HR-B7-K1-higgsfield-msg.mp4",
            "caption": "Mom never asked for anything. So I gave her something. A hug she can keep. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K1-higgsfield-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,5-11,8 s): \"Mom never asked for anything, so I gave her this.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Warm natural window light, bright cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother stands at the kitchen sink washing a cup, seen from the side, quiet and tired but content; behind her the daughter waits in the doorway holding a small plain ivory gift box with an ivory ribbon, no logo, no writing; (2) 3-6 s, the daughter sets the box on the table, the mother turns, surprised, and opens it; close-up of her hands opening the box, a blank cream card beside the ring; (3) 6-9 s, close-up of the daughter gently sliding the ring onto the mother's finger, the mother's other hand rises to cover her mouth, her eyes fill with tears; (4) 9-12 s, the mother pulls her daughter into a long tight hug, tears and a trembling smile, the ring visible on the hand on the daughter's back, the camera slowly pushes in. Audio: grand emotional cinematic piano with soft strings that swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-TT-B7-K3-higgs",
            "title": "HR-B7 K3 (Higgsfield 12 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Caption/hashtag theo script angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Higgsfield Seedance 2.5 (84 credit). Mẹ thấy hộp cạnh cà phê, mở, đeo nhẫn, khóc, con gái ôm. Lỗi: có chữ mờ dập nổi trong nắp hộp, mẹ cũng có sẵn nhẫn trên tay, ánh nắng quá gắt ở vài khung. Text 1 câu lời nhắn gửi mẹ đã burn vào video (bản -msg). Giao Muse đăng 08/11. Kẹt captcha kéo-thả trên TikTok, chờ Amin giải.",
            "file": "HR-B7-K3-higgsfield-msg.mp4",
            "caption": "She found it by her coffee. I never had the words. So I gave her a hug. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K3-higgsfield-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,5-11,8 s): \"I never had the words, so I left a hug by your coffee, Mom.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Soft early-morning window light, cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother sits alone at the kitchen table with a coffee cup, sunlight on her face, she notices a small plain ivory gift box with an ivory ribbon (no logo, no writing) and a blank cream card next to her cup; (2) 3-6 s, close-up of her hands lifting the lid, the ring inside on cream fabric; (3) 6-9 s, she puts the ring on her finger, looks at it, then her hand rises to her chest and her eyes fill with tears; she looks up toward the doorway; (4) 9-12 s, the daughter stands in the doorway smiling with teary eyes, the mother laughs and cries at once, opens her arms, the daughter runs in and they hug tightly, camera slowly pushing in. Audio: grand emotional cinematic piano with soft strings that builds and swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-TT-B7-K2-flow",
            "title": "HR-B7 K2 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Caption/hashtag theo script angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Gen 08/11 Google Flow Omni 1.2 Flash (24 credit). Cận tay mẹ, con đeo nhẫn, nắm tay, mặt mẹ rưng rưng. Có thể thấy 2 nhẫn ở vài khung; dấu sao Flow đã làm mờ. Text 1 câu lời nhắn gửi mẹ đã burn vào video (bản -msg). Giao Muse đăng 08/11. Kẹt captcha kéo-thả trên TikTok, chờ Amin giải.",
            "file": "HR-B7-K2-flow-msg.mp4",
            "caption": "These hands held me. Now I want to hold them back. For Mom. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-K2-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow, Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn KHÔNG đính kèm (chỉ mô tả bằng chữ) nên nhẫn gần đúng. Dấu sao Flow ở góc dưới phải đã xóa mờ bằng ffmpeg delogo."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,4-7,8 s): \"Mom, these hands held me, now I just want to hold them back.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 emotional close-up video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50), the younger woman is her adult DAUGHTER (about 22). Both adults, keep faces, hair and cream knit sweaters consistent. Soft warm window light, handheld phone look, quick cuts. Story: (1) 0-2 s, extreme close-up of the mother's hands resting on a wooden table, cream knit sleeves, hands that have worked hard, natural unpainted nails, no jewelry on them; (2) 2-4 s, the daughter's hands gently take her mother's hand and slide a polished silver hug ring (an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving) onto her finger; (3) 4-6 s, the mother's hand closes around her daughter's hand, close-up, the ring visible; (4) 6-8 s, close-up of the mother's face, she smiles through tears, glances at the ring, then looks up at her daughter. Audio: grand emotional cinematic piano with soft strings swelling powerfully at the end, no vocals, no speech. No on-screen text, no captions, no logo, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-TT-B8-F1-flow",
            "title": "HR-B8 F1 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Cửa mở, con gái cầm hộp, mẹ sững người rồi ôm. Nhẫn 1 chiếc rõ ở cận cảnh tay. Chữ 1 câu đã burn vào video. Giao Muse đăng 09/11.",
            "file": "HR-B8-F1-flow-msg.mp4",
            "caption": "Mom, I can't be there every day, so I brought you a hug. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F1-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "Mom, I can't be there every day, so I brought you a hug."
                }
              ],
              "prompt": "Warm daylight, the mother opens her front door, the daughter stands there holding a small plain ivory gift box with ivory ribbon (no logo, no writing). The mother freezes, hand to mouth, eyes glistening, then pulls her daughter into a long tight hug; close-up of the mother's hand with one polished silver-tone ring ending in two small hands on the daughter's back. Soft warm piano, no dialogue, no on-screen text."
            }
          },
          {
            "id": "KAN82-TT-B8-F2-flow",
            "title": "HR-B8 F2 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Mẹ đan len, dừng lại nhìn nhẫn, mỉm cười rưng rưng. Có vòng len nhỏ trên ngón tay kia trông như nhẫn thứ hai ở vài khung. Chữ 1 câu đã burn vào video. Giao Muse đăng 09/11.",
            "file": "HR-B8-F2-flow-msg.mp4",
            "caption": "Mom, when you look at your hands, remember that's me holding you. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F2-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "Mom, when you look at your hands, remember that's me holding you."
                }
              ],
              "prompt": "Cozy living room, soft window light, the mother in a cream knit sweater sits knitting; she pauses, looks down at her hand wearing one polished silver-tone ring ending in two small hands, smiles with glistening eyes and presses the hand to her chest. Close-up of ring and hand, then her face. Soft warm piano, no dialogue, no on-screen text."
            }
          },
          {
            "id": "KAN82-TT-B8-F3-flow",
            "title": "HR-B8 F3 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Angle tặng mẹ. Angle TẶNG MẸ, nhân vật AI người lớn, cần nhãn AI khi đăng. Chưa qua review độc lập (cổng C). Hai mẹ con trên sofa, mẹ mở hộp, cười khóc, con lau nước mắt. Nhẫn trong hộp hơi khác ảnh neo; có vệt mờ nhỏ ở góc dưới phải (vị trí dấu sao). Chữ 1 câu đã burn vào video. Giao Muse đăng 09/11.",
            "file": "HR-B8-F3-flow-msg.mp4",
            "caption": "You gave me everything, Mom. This is just a small thank you. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F3-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "You gave me everything, Mom. This is just a small thank you."
                }
              ],
              "prompt": "Warm living room sofa, soft golden light; mother and daughter sit side by side, the mother opens a small plain ivory gift box with ivory ribbon (no logo, no writing), sees one polished silver-tone ring ending in two small hands, laughs and cries at once; the daughter wipes a tear from her cheek and they embrace. Soft warm piano swelling, no dialogue, no on-screen text."
            }
          },
          {
            "id": "HR-B9-TT-FLOW",
            "title": "HR-B9-FLOW · Product Crash (Google Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Amin tự đăng. Video AI: bật nhãn AI khi đăng. Lỗi đã biết: hơn 1 nhẫn/hộp trong khung, nhẫn trông như band trơn (không thấy hình 2 bàn tay), có dấu sao nhỏ góc dưới phải. Không claim chất liệu, giá, giao hàng, khắc chữ, \"forever\", hiệu quả tâm lý. Chưa có hàng thật nên chưa qua cổng C.",
            "file": "HR-B9-FLOW.mp4 (720×1280, 8 s)",
            "caption": "Some gifts say it without a word. 💍\nWho would you give one to? Tell us below 👇",
            "hashtags": "#HeartBond #HugRing #GiftForMom",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B9-FLOW.mp4"
          },
          {
            "id": "HR-B9-TT-MS",
            "title": "HR-B9-MS · Product Crash (Higgsfield Marketing Studio, 27 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Amin tự đăng. Video AI: bật nhãn AI. Cần nghe audio trước khi đăng (chưa kiểm lời nói; không được có claim chất liệu/giá/giao hàng/\"forever\"/hiệu quả tâm lý). Ảnh nhẫn là tham chiếu Hope Rings, chưa có hàng thật nên chưa qua cổng C.",
            "file": "HR-B9-MS-marketing-studio.mp4 (720×1280, 27 s)",
            "caption": "Some gifts say it without a word. 💍\nWho would you give one to? Tell us below 👇",
            "hashtags": "#HeartBond #HugRing #GiftForMom",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B9-MS-marketing-studio.mp4"
          }
        ],
        "note": "Muse đang đăng nhập TikTok bằng heartbond.shop@gmail.com (08/11/2026, chưa xong, chưa biết tài khoản TikTok HeartBond đã tồn tại hay chưa; Muse không tạo tài khoản mới). Hai video HR-B5 đã giao Muse đăng TikTok sau khi đăng nhập xong, bật nhãn AI-generated. Ngoài phạm vi gốc KAN-82 (FB + YT) nhưng Amin yêu cầu đăng thêm TikTok.\n\nCẬP NHẬT 09/11/2026: Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): @heartbond.shop chỉ có 3 video (HR-B5 couple, HR-B5 mẹ-con, HR-B6). 6 video tặng mẹ (B7, B8) CHƯA lên TikTok vì kẹt captcha; Amin tự giải rồi nhờ Muse đăng bù. Nhãn AI của 3 video đó chưa kiểm lại.\n\nAvatar (chọn dùng bản có sẵn, khuyên A): 1-dropship/workspace/heartbond/3-creative/refs/facebook-avatar/avatar-A-hands-heart.png (hai bàn tay nâng trái tim, cắt tròn vẫn đủ lề, không chữ); thay thế: avatar-B-hug-ring-mark.png, avatar-C-line-heart-ring.png. Cover: chưa có.\n\nCategory/Description cập nhật 10/11/2026 theo đề xuất KAN-82-HeartBond-facebook-profile.md: chưa áp dụng lên kênh thật, không có claim chất liệu/giá/giao hàng/đổi trả/\"handmade\"/\"925 silver\".",
        "url": "https://www.tiktok.com/@heartbond.shop",
        "handle": "heartbond.shop",
        "name": "heartbond.shop",
        "category": "TikTok không có danh mục cho tài khoản",
        "description": "A little hug, to keep. 🤍 Gift rings for the people you miss."
      },
      "YT": {
        "name": "HeartBond",
        "handle": "@heartbond.shop2",
        "url": "https://www.youtube.com/@heartbond.shop2",
        "description": "HeartBond makes small gifts that say what words can't: a little hug, to keep.\nOur Hug Ring is made for the people you love and can't hold today, a granddaughter far away, a daughter, a partner, a friend.\nFollow for gift ideas and stories about the people who matter.",
        "email": "heartbond.shop@gmail.com",
        "category": "YouTube không có danh mục ở cấp kênh",
        "status": "Đã đăng bài đầu",
        "note": "Kênh YouTube: heartbond, @heartbond.shop2 (https://www.youtube.com/@heartbond.shop2), tài khoản Google heartbond.shop@gmail.com; kênh có sẵn, Muse không tạo mới. Muse đăng 2 Shorts HR-B5 ngày 08/11/2026 (theo thread Muse; tôi mở 2 link thấy đúng tiêu đề, chưa kiểm cài đặt AI/Not made for kids tận nơi). Muse báo: công khai, khai AI, Not made for kids, không paid promotion. YouTube Studio hiện 0:09 (file 8,04 s). Các bản nháp HR-B1 bên dưới vẫn CHƯA đăng. Tracking: UTM utm_content theo mã video.\n\nMuse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): 9/9 Shorts live công khai, caption/hashtag khớp; ngày đăng và nhãn AI chưa kiểm lại.\n\nAvatar (chọn dùng bản có sẵn, khuyên A): 1-dropship/workspace/heartbond/3-creative/refs/facebook-avatar/avatar-A-hands-heart.png (hai bàn tay nâng trái tim, cắt tròn vẫn đủ lề, không chữ); thay thế: avatar-B-hug-ring-mark.png, avatar-C-line-heart-ring.png. Cover: chưa có.\n\nCategory/Description cập nhật 10/11/2026 theo đề xuất KAN-82-HeartBond-facebook-profile.md: chưa áp dụng lên kênh thật, không có claim chất liệu/giá/giao hàng/đổi trả/\"handmade\"/\"925 silver\".",
        "posts": [
          {
            "id": "KAN82-YT-B1",
            "title": "Batch 1 · Short 1: HR-B1 bản Higgsfield (12 s, chưa có tiếng)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng, chưa qua cổng C. Video AI: bật nhãn AI khi đăng. Chưa có hàng thật nên không đăng cho tới khi Amin duyệt bằng văn bản. Không claim chất liệu/giá/giao hàng.",
            "file": "HR-B1-higgsfield-seedance-v1.mp4",
            "caption": "For the granddaughter you can't hug today. 🤍\n\nA little hug she can keep.\n\nWho would you send one to? Tell us below 👇",
            "hashtags": "#HugRing #GiftForGranddaughter #GrandmaLove #LongDistanceLove #GiftIdeas",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B1-higgsfield-seedance-v1.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, 12 s, 9:16, 720p, 2 ảnh neo nhẫn, 84 credit (+2 credit ảnh trước đó). Amin chọn ref-01 làm ảnh neo. Kết quả: hình nhẫn/bàn tay chưa rõ, góc quay từ phía sau; không có tiếng."
                },
                {
                  "label": "Nhân vật",
                  "text": "Không có ảnh nhân vật; mô tả bằng chữ trong prompt: bà ~65 tuổi tóc bạc ngang vai, cardigan len kem."
                },
                {
                  "label": "Nguồn prompt",
                  "text": "output/KAN-82-HR-B1-pack.md mục 5"
                }
              ],
              "prompt": "Higgsfield, vertical 9:16, 12 s, realistic phone-filmed UGC look, soft warm morning window light, each shot is a fixed frame with no camera movement inside it, hard cuts between shots. Attach 2 product reference photos: anchor-1-ring-shape.png (shape of the ring: an open ring ending in two small hands that wrap around a finger) and anchor-2-ring-on-finger.jpg (how it looks on a finger). Use them only for the ring's shape; do not copy the red velvet box, the card or any text from them, and do not invent engraving. Character (identical in every shot): a grandmother about 65 with neat silver-grey shoulder-length hair, a thick cream chunky-knit cardigan without text or logo, short natural unpainted nails, wearing no jewelry at all. Bright kitchen with a light wooden counter and a window with a sheer curtain. Shot 1 (0-3 s, NO ring in frame): seen from behind, the grandmother stands at the kitchen window holding a mug, quietly looking outside; top third of the frame left empty. Shot 2 (3-6 s): close-up of both her hands on the cream knit sleeve placing the hug ring on a small cream cloth inside an open ivory gift box with an ivory ribbon, no writing; the ring matches the references. Shot 3 (6-9 s): one hand lays a blank cream card beside the ring while the other hand closes the lid. Shot 4 (9-12 s): she holds the closed box against her chest with both hands and smiles softly, the window blurred behind her; hold the last 2 s, top third empty. Soft piano music, no speech. Negative: no spoken words, no on-screen text, no captions, no subtitles, no logo, no watermark, no readable writing on the card or box, no engraving visible, no red velvet or hexagon box, no extra or missing fingers, no other jewelry on anyone, no sparkles or CGI effects, no camera movement inside a shot."
            }
          },
          {
            "id": "KAN82-YT-B2",
            "title": "Batch 1 · Short 1 (phương án B): HR-B1 bản Flow (8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng, chưa qua cổng C. Video AI: bật nhãn AI khi đăng. Chưa có hàng thật nên không đăng cho tới khi Amin duyệt bằng văn bản. Không claim chất liệu/giá/giao hàng. Hình nhẫn có thể lệch.",
            "file": "HR-B1-flow-omni12flash-v1.mp4",
            "caption": "For the granddaughter you can't hug today. 🤍\n\nA little hug she can keep.\n\nWho would you send one to? Tell us below 👇",
            "hashtags": "#HugRing #GiftForGranddaughter #GrandmaLove #LongDistanceLove #GiftIdeas",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B1-flow-omni12flash-v1.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản minhpham.piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit. CHỈ text prompt, không attach ảnh neo nên hình nhẫn có thể lệch."
                },
                {
                  "label": "Nhân vật",
                  "text": "Không có ảnh nhân vật; mô tả bằng chữ trong prompt."
                },
                {
                  "label": "Nguồn prompt",
                  "text": "output/KAN-82-HR-B1-pack.md mục 6"
                }
              ],
              "prompt": "Veo (Google Flow), vertical 9:16, 8 s, realistic phone-filmed UGC look, soft warm morning window light, fixed frames, hard cuts, no camera movement inside a shot. Reference images: the hug ring (open ring ending in two small hands wrapping a finger), shape only. Same grandmother in every shot (65, silver-grey shoulder-length hair, thick cream chunky-knit cardigan, no jewelry), bright kitchen, light wooden counter, window with sheer curtain. 0-2 s (no ring): from behind, she stands at the kitchen window holding a mug, top third of frame empty. 2-4 s: close-up of her hands on the knit sleeve placing the ring on cream cloth in an open ivory box. 4-6 s: one hand lays a blank cream card beside the ring, the other closes the lid with an ivory ribbon. 6-8 s: she holds the closed box to her chest and smiles softly. Soft piano, no speech. Negative: no spoken words, no on-screen text, no captions, no subtitles, no logo, no watermark, no readable writing on the card or box, no engraving visible, no red velvet or hexagon box, no extra or missing fingers, no other jewelry on anyone, no sparkles or CGI effects, no camera movement inside a shot."
            }
          },
          {
            "id": "KAN82-YT-B5-couple",
            "title": "HR-B5 cặp đôi (Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/mTkhlvuPFdA",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo).",
            "file": "HR-B5-flow-couple.mp4",
            "caption": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍",
            "hashtags": "#HugRing #GiftIdeas #CoupleGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-couple.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-woman-30.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/couple-man-32.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
                },
                {
                  "label": "Chữ hook (thêm hậu kỳ)",
                  "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the woman (about 30, long wavy light-brown hair) and the man (about 32, plain grey t-shirt), a loving young couple, both clearly adults, keep faces and hair consistent, she wears a cream knit sweater. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the woman seen from behind at the stove, the man walks up and hugs her gently from behind; (2) 2-4 s, close-up of her hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, her face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the man's hand holds the woman's hand, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers."
            }
          },
          {
            "id": "KAN82-YT-B5-md",
            "title": "HR-B5 mẹ - con gái (Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/qCcbYRtfT-s",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo).",
            "file": "HR-B5-flow-mother-daughter.mp4",
            "caption": "If you can't be there to hug her, give her a hug she can keep. 🤍",
            "hashtags": "#HugRing #GiftIdeas #MotherDaughter",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B5-flow-mother-daughter.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow (tài khoản piscada), Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Attach 2 ảnh nhân vật làm tham chiếu; ảnh nhẫn KHÔNG attach (chỉ mô tả bằng chữ) nên hình nhẫn gần đúng, chưa khớp ảnh neo."
                },
                {
                  "label": "Chữ hook (thêm hậu kỳ)",
                  "text": "ĐÃ DUYỆT phương án 1 (thêm hậu kỳ, video chưa có chữ).\nCặp đôi: \"Still can't stop thinking about her…\" | \"Then show her.\" | \"A hug she can wear.\"\nMẹ-con: \"If you can't be there to hug her…\" | \"Give her a hug she can keep.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Prompt yêu cầu: cảm xúc, trẻ trung, acoustic-pop + piano ấm, không lời, dâng nhẹ cuối. Có track audio (chưa nghe nội dung, chưa kiểm khớp yêu cầu)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 UGC-style video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50) and the younger woman is her adult DAUGHTER (about 22). Both are adults, keep their faces, hair and cream knit sweaters consistent. Story in quick cuts, warm natural window light, handheld phone look: (1) 0-2 s, a bright cosy kitchen, the daughter seen from behind at the stove, her mother walks up and hugs her warmly from behind; (2) 2-4 s, close-up of the daughter's hand with a polished silver hug ring on her finger, the ring is an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving, cream chunky-knit sleeve, white fluffy fur background; (3) 4-6 s, the daughter's face, she smiles with happy teary eyes and shows her hand, then presses it to her chest; (4) 6-8 s, the mother and daughter hold hands, the ring visible. Audio: emotional, youthful, warm acoustic-pop with soft piano, no vocals, no speech, swelling gently at the end. No on-screen text, no captions, no logos, no watermark text, no extra fingers."
            }
          },
          {
            "id": "KAN82-YT-B6-couple",
            "title": "HR-B6 cặp đôi (Higgsfield, Amin, 25,75 s)",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/xemYQT-pg1k",
            "date": "08/11/2026",
            "note": "Kiểm lại 08/11/2026 trên trang công khai: bài có thật. Muse đăng, nhãn AI bật (theo Muse báo). Short thứ 3 trên kênh YouTube gán cho HR-B6 theo thứ tự đăng, chưa mở xem từng video.",
            "file": "HR-B6-amin-higgsfield-couple-v1.mp4",
            "caption": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍",
            "hashtags": "#HugRing #GiftIdeas #CoupleGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B6-amin-higgsfield-couple-v1.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [],
              "product": [],
              "extra": [
                {
                  "label": "Tham chiếu / prompt / config",
                  "text": "CHƯA GHI: Amin tự gen video này trên Higgsfield; công cụ, video tham chiếu, ảnh nhân vật/sản phẩm, prompt và config chưa được gửi cho Claude. Nhờ Amin dán vào đây (hoặc nói cho Claude) để cập nhật. Nhìn khung hình: kịch bản cặp đôi + cận nhẫn + hộp đỏ giống nhịp ad Hope Rings, nhiều khả năng dựng từ video mẫu của họ (chưa xác nhận)."
                },
                {
                  "label": "Nguồn",
                  "text": "Amin tự gen trên Higgsfield; công cụ/prompt chưa được ghi."
                },
                {
                  "label": "Caption đăng",
                  "text": "Still can't stop thinking about her? Show her. A hug she can wear. 🤍  #HugRing #GiftIdeas #CoupleGift"
                }
              ]
            }
          },
          {
            "id": "KAN82-YT-B7-K1-higgs",
            "title": "HR-B7 K1 (Higgsfield 12 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/pVt9CslvMwI",
            "date": "08/11/2026",
            "note": "Kiểm 09/11/2026 trên trang công khai: bài có thật, tiêu đề/caption khớp. Muse đăng, nhãn AI bật (theo Muse báo). TikTok bài này chưa đăng (kẹt captcha).",
            "file": "HR-B7-K1-higgsfield-msg.mp4",
            "caption": "Mom never asked for anything. So I gave her something. A hug she can keep. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K1-higgsfield-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,5-11,8 s): \"Mom never asked for anything, so I gave her this.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Warm natural window light, bright cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother stands at the kitchen sink washing a cup, seen from the side, quiet and tired but content; behind her the daughter waits in the doorway holding a small plain ivory gift box with an ivory ribbon, no logo, no writing; (2) 3-6 s, the daughter sets the box on the table, the mother turns, surprised, and opens it; close-up of her hands opening the box, a blank cream card beside the ring; (3) 6-9 s, close-up of the daughter gently sliding the ring onto the mother's finger, the mother's other hand rises to cover her mouth, her eyes fill with tears; (4) 9-12 s, the mother pulls her daughter into a long tight hug, tears and a trembling smile, the ring visible on the hand on the daughter's back, the camera slowly pushes in. Audio: grand emotional cinematic piano with soft strings that swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-YT-B7-K3-higgs",
            "title": "HR-B7 K3 (Higgsfield 12 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/uNWGH4dwPwM",
            "date": "08/11/2026",
            "note": "Kiểm 09/11/2026 trên trang công khai: bài có thật, tiêu đề/caption khớp. Muse đăng, nhãn AI bật (theo Muse báo). TikTok bài này chưa đăng (kẹt captcha).",
            "file": "HR-B7-K3-higgsfield-msg.mp4",
            "caption": "She found it by her coffee. I never had the words. So I gave her a hug. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B7-K3-higgsfield-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-1-ring-shape.png",
                "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg"
              ],
              "extra": [
                {
                  "label": "Config Higgsfield",
                  "text": "seedance_2_5, mode omni_reference, 9:16, 12 s, generate_audio, 84 credit/video. Đính kèm 4 ảnh: mẹ, con gái, 2 ảnh neo nhẫn."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,5-11,8 s): \"I never had the words, so I left a hug by your coffee, Mom.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Vertical 9:16 UGC-style emotional video, 12 seconds, with sound. Image 1 is the MOTHER (about 50), image 2 is her adult DAUGHTER (about 22); keep their faces, hair and cream knit sweaters consistent. Images 3 and 4 show the ring only: an open polished silver-tone ring ending in two small hands that wrap around the finger, one ring only, plain surface, no engraving, no text. Soft early-morning window light, cosy kitchen, handheld phone look, hard cuts. Story: (1) 0-3 s, the mother sits alone at the kitchen table with a coffee cup, sunlight on her face, she notices a small plain ivory gift box with an ivory ribbon (no logo, no writing) and a blank cream card next to her cup; (2) 3-6 s, close-up of her hands lifting the lid, the ring inside on cream fabric; (3) 6-9 s, she puts the ring on her finger, looks at it, then her hand rises to her chest and her eyes fill with tears; she looks up toward the doorway; (4) 9-12 s, the daughter stands in the doorway smiling with teary eyes, the mother laughs and cries at once, opens her arms, the daughter runs in and they hug tightly, camera slowly pushing in. Audio: grand emotional cinematic piano with soft strings that builds and swells powerfully in the last 4 seconds, no vocals, no speech. No on-screen text, no captions, no logos, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-YT-B7-K2-flow",
            "title": "HR-B7 K2 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/Qhh0sYkma2U",
            "date": "08/11/2026",
            "note": "Kiểm 09/11/2026 trên trang công khai: bài có thật, tiêu đề/caption khớp. Muse đăng, nhãn AI bật (theo Muse báo). TikTok bài này chưa đăng (kẹt captcha).",
            "file": "HR-B7-K2-flow-msg.mp4",
            "caption": "These hands held me. Now I want to hold them back. For Mom. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-K2-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Config Flow",
                  "text": "Google Flow, Omni 1.2 Flash, 8 s, 9:16, 720p, 24 credit/video, có audio. Đính kèm 2 ảnh nhân vật; ảnh nhẫn KHÔNG đính kèm (chỉ mô tả bằng chữ) nên nhẫn gần đúng. Dấu sao Flow ở góc dưới phải đã xóa mờ bằng ffmpeg delogo."
                },
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ (thêm hậu kỳ)",
                  "text": "Một câu cả video (0,4-7,8 s): \"Mom, these hands held me, now I just want to hold them back.\""
                },
                {
                  "label": "Nhạc",
                  "text": "Nhạc: piano + dây cảm xúc lớn (AI tạo cùng video), không lời. Chữ caption làm hậu kỳ bằng ffmpeg + Pillow (Georgia Italic, trắng viền đen mờ, vùng trên khung)."
                }
              ],
              "prompt": "Make one 8-second vertical 9:16 emotional close-up video with sound, using Omni 1.2 Flash. Use the two attached portraits as the characters: the older woman is the MOTHER (about 50), the younger woman is her adult DAUGHTER (about 22). Both adults, keep faces, hair and cream knit sweaters consistent. Soft warm window light, handheld phone look, quick cuts. Story: (1) 0-2 s, extreme close-up of the mother's hands resting on a wooden table, cream knit sleeves, hands that have worked hard, natural unpainted nails, no jewelry on them; (2) 2-4 s, the daughter's hands gently take her mother's hand and slide a polished silver hug ring (an open band ending in two tiny hands that wrap around the finger, one ring only, plain surface, no engraving) onto her finger; (3) 4-6 s, the mother's hand closes around her daughter's hand, close-up, the ring visible; (4) 6-8 s, close-up of the mother's face, she smiles through tears, glances at the ring, then looks up at her daughter. Audio: grand emotional cinematic piano with soft strings swelling powerfully at the end, no vocals, no speech. No on-screen text, no captions, no logo, no watermark, no extra fingers, no extra rings, no sparkles."
            }
          },
          {
            "id": "KAN82-YT-B8-F1-flow",
            "title": "HR-B8 F1 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/utOmqujQyQ8",
            "date": "09/11/2026",
            "note": "Đăng 09/11 theo Muse (YouTube không hiện giờ); Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): caption hiển thị khớp. Nhãn AI: Muse ghi khai AI lúc đăng, chưa kiểm lại.",
            "file": "HR-B8-F1-flow-msg.mp4",
            "caption": "Mom, I can't be there every day, so I brought you a hug. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F1-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "Mom, I can't be there every day, so I brought you a hug."
                }
              ],
              "prompt": "Warm daylight, the mother opens her front door, the daughter stands there holding a small plain ivory gift box with ivory ribbon (no logo, no writing). The mother freezes, hand to mouth, eyes glistening, then pulls her daughter into a long tight hug; close-up of the mother's hand with one polished silver-tone ring ending in two small hands on the daughter's back. Soft warm piano, no dialogue, no on-screen text."
            }
          },
          {
            "id": "KAN82-YT-B8-F2-flow",
            "title": "HR-B8 F2 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/T_9ZyIPuNaY",
            "date": "09/11/2026",
            "note": "Đăng 09/11 theo Muse (YouTube không hiện giờ); Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): caption hiển thị khớp. Nhãn AI: Muse ghi khai AI lúc đăng, chưa kiểm lại.",
            "file": "HR-B8-F2-flow-msg.mp4",
            "caption": "Mom, when you look at your hands, remember that's me holding you. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F2-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "Mom, when you look at your hands, remember that's me holding you."
                }
              ],
              "prompt": "Cozy living room, soft window light, the mother in a cream knit sweater sits knitting; she pauses, looks down at her hand wearing one polished silver-tone ring ending in two small hands, smiles with glistening eyes and presses the hand to her chest. Close-up of ring and hand, then her face. Soft warm piano, no dialogue, no on-screen text."
            }
          },
          {
            "id": "KAN82-YT-B8-F3-flow",
            "title": "HR-B8 F3 (Flow 8 s) · tặng mẹ",
            "format": "Video ngắn",
            "status": "Đã đăng",
            "url": "https://www.youtube.com/shorts/L41j13pC-VU",
            "date": "09/11/2026",
            "note": "Đăng 09/11 theo Muse (YouTube không hiện giờ); Muse kiểm công khai 09/11/2026 (đọc lại báo cáo Muse, Claude chưa tự mở kênh): caption hiển thị khớp. Nhãn AI: Muse ghi khai AI lúc đăng, chưa kiểm lại.",
            "file": "HR-B8-F3-flow-msg.mp4",
            "caption": "You gave me everything, Mom. This is just a small thank you. 🤍",
            "hashtags": "#HugRing #GiftForMom #ThankYouMom #MothersGift",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B7-F3-flow-msg.mp4",
            "kit": {
              "referenceVideo": [],
              "character": [
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/mother-50.png",
                "1-dropship/workspace/heartbond/3-creative/refs/nhan-vat/daughter-22.png"
              ],
              "product": [],
              "extra": [
                {
                  "label": "Text 1 câu lời nhắn gửi mẹ",
                  "text": "You gave me everything, Mom. This is just a small thank you."
                }
              ],
              "prompt": "Warm living room sofa, soft golden light; mother and daughter sit side by side, the mother opens a small plain ivory gift box with ivory ribbon (no logo, no writing), sees one polished silver-tone ring ending in two small hands, laughs and cries at once; the daughter wipes a tear from her cheek and they embrace. Soft warm piano swelling, no dialogue, no on-screen text."
            }
          },
          {
            "id": "HR-B9-YT-FLOW",
            "title": "HR-B9-FLOW · Product Crash (Google Flow, 8 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Amin tự đăng. Video AI: bật nhãn AI khi đăng. Lỗi đã biết: hơn 1 nhẫn/hộp trong khung, nhẫn trông như band trơn (không thấy hình 2 bàn tay), có dấu sao nhỏ góc dưới phải. Không claim chất liệu, giá, giao hàng, khắc chữ, \"forever\", hiệu quả tâm lý. Chưa có hàng thật nên chưa qua cổng C.",
            "file": "HR-B9-FLOW.mp4 (720×1280, 8 s)",
            "caption": "Some gifts say it without a word. 💍\nWho would you give one to? Tell us below 👇",
            "hashtags": "#HeartBond #HugRing #GiftForMom",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/flow/HR-B9-FLOW.mp4"
          },
          {
            "id": "HR-B9-YT-MS",
            "title": "HR-B9-MS · Product Crash (Higgsfield Marketing Studio, 27 s)",
            "format": "Video ngắn",
            "status": "Chưa đăng",
            "url": "",
            "date": "",
            "note": "Bản nháp, CHƯA đăng. Amin tự đăng. Video AI: bật nhãn AI. Cần nghe audio trước khi đăng (chưa kiểm lời nói; không được có claim chất liệu/giá/giao hàng/\"forever\"/hiệu quả tâm lý). Ảnh nhẫn là tham chiếu Hope Rings, chưa có hàng thật nên chưa qua cổng C.",
            "file": "HR-B9-MS-marketing-studio.mp4 (720×1280, 27 s)",
            "caption": "Some gifts say it without a word. 💍\nWho would you give one to? Tell us below 👇",
            "hashtags": "#HeartBond #HugRing #GiftForMom",
            "media": "1-dropship/workspace/heartbond/3-creative/videos/higgsfield/HR-B9-MS-marketing-studio.mp4"
          }
        ]
      }
    },
    "tasks": [
      {
        "id": "t-kan82",
        "key": "KAN-82",
        "title": "[Social] HeartBond · Hug Ring",
        "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-82",
        "status": "Done",
        "note": "Hub: task-hub/KAN-82. Creative đầu: HR-B1 (gói trong output/KAN-82-HR-B1-pack.md). Chưa gen, chưa đăng.",
        "agents": [
          {
            "id": "a82-1",
            "kind": "Claude",
            "name": "KAN-82 · Tổng hợp, artifact quản lý, giao Muse",
            "url": "claude://claude.ai/epitaxy/local_2566a32a-2054-4123-a1c9-db34b54c53ad",
            "role": "Gói gen HR-B1, tab Social, brief Muse",
            "state": "Đang chạy",
            "note": "Đang chạy tại lúc ghi (14:40); Amin đã chọn ref-01 làm ảnh neo."
          },
          {
            "id": "a82-2",
            "kind": "Muse",
            "name": "Muse · thread KAN-82",
            "url": "https://muse.ai/thread/7d85e046-c3d3-42e4-afdb-b1e2bc43e292",
            "role": "Review/copy A-E, đối chiếu quảng cáo mẫu",
            "state": "Idle",
            "note": "Không tạo được video (403 chặn vùng). Cảnh báo tên HeartBond đã có bên khác dùng (chưa xác minh)."
          },
          {
            "id": "a82-3",
            "kind": "Amin",
            "name": "Amin",
            "url": "",
            "role": "Chọn ảnh neo, tự gen Higgsfield, mua tên miền",
            "state": "Chờ Amin",
            "note": "Gen HR-B1; chưa có supplier/mẫu thật."
          }
        ]
      },
      {
        "id": "t-kan83",
        "key": "KAN-83",
        "title": "Web Store Hub (quản lý store, đồng bộ dữ liệu)",
        "url": "https://phamsworkspace-42448765.atlassian.net/browse/KAN-83",
        "status": "Done",
        "note": "Task chung cho cả 3 store. Hub: task-hub/KAN-83. Code: 1-dropship/store-hub. Supabase chờ Amin duyệt bản local.",
        "agents": [
          {
            "id": "a83-1",
            "kind": "Claude",
            "name": "KAN-83 · Store Hub (session đang làm web)",
            "url": "",
            "role": "Dựng web, nhập seed, checklist, video",
            "state": "Đang chạy",
            "note": "Xong giai đoạn 2 (checklist, video, task & agent). Chờ Amin duyệt bản local rồi chọn project Supabase."
          },
          {
            "id": "a83-2",
            "kind": "Claude",
            "name": "Amin dashboard (fork 3)",
            "url": "claude://claude.ai/epitaxy/local_31f67b50-fd30-43af-afd1-2e131ee75abe",
            "role": "Session điều phối, giao KAN-83",
            "state": "Idle",
            "note": "Nhận báo cáo từ session KAN-83."
          },
          {
            "id": "a83-3",
            "kind": "Amin",
            "name": "Amin",
            "url": "",
            "role": "Duyệt bản local, chọn Supabase",
            "state": "Chờ Amin",
            "note": ""
          }
        ]
      }
    ],
    "avatar": "1-dropship/workspace/heartbond/3-creative/refs/facebook-avatar/avatar-A-hands-heart.png",
    "productImages": [
      {
        "src": "1-dropship/workspace/heartbond/3-creative/refs/anh-ref-hug-ring/ref-01-crop-ring.png",
        "label": "Ref Hug Ring (crop)"
      },
      {
        "src": "1-dropship/workspace/heartbond/3-creative/refs/anh-neo-nhan/anchor-2-ring-on-finger.jpg",
        "label": "Ảnh neo: nhẫn trên ngón tay"
      },
      {
        "src": "1-dropship/workspace/heartbond/3-creative/refs/anh-ref-hug-ring/ref-06.jpg",
        "label": "Ref 06"
      },
      {
        "src": "1-dropship/workspace/heartbond/3-creative/refs/anh-ref-hug-ring/ref-07.jpg",
        "label": "Ref 07"
      },
      {
        "src": "1-dropship/workspace/heartbond/3-creative/refs/anh-ref-hug-ring/ref-08.jpg",
        "label": "Ref 08"
      }
    ]
  }
]
