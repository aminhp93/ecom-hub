# Mẫu video F2 — Sàn → Tường (whiskerwall-138-01 v2)

> Mẫu tái sử dụng cho video kệ/tủ treo tường. Nguồn: `whiskerwall-138-01`
> v2 (15.00 s, 720x1280, 24 fps, 1 cắt ở 7.5 s). June 25/11/2026: "ok, thích
> màu xanh này, khá là bắt mắt" (thảm len xanh đậm + ghế linen xanh rêu trên
> nền tường kem).
> Quy tắc: chỉ đổi 5 chỗ có placeholder `[NHƯ_THẾ_NÀY]`; còn lại giữ nguyên.

## 1. Khi nào dùng mẫu này

- Sản phẩm là kệ/tủ treo tường, muốn kể một câu chuyện ngắn: linh kiện nằm
  trên sàn → một cú cắt cứng → bộ đã lắp trên tường, mèo leo lên.
- Không dùng khi: sản phẩm không treo tường, hoặc muốn nhiều hơn 1 cú cắt
  (xem mẫu Flow 3 — 4 cảnh × 3.75 s, `whiskerwall-139-01`).

## 2. Cấu trúc cố định (KHÔNG đổi)

| Mục | Giá trị cố định |
|---|---|
| Tổng thời lượng | 15.0 s (± 0.1 s) |
| Clip | 2 clip, mỗi clip gen 10 s, dùng 7.5 s đầu |
| Cắt | đúng 1 cú cắt cứng ở 7.5 s (được phép xê dịch 6.5–8.5 s nếu đoạn sạch ngắn hơn); không bao giờ làm chậm clip |
| Clip 1 | Top-down, camera khóa: linh kiện rời trên thảm; đúng 1 mèo vào từ trái, ngửi, nằm xuống, nằm yên |
| Clip 2 | Cảnh tường, camera khóa, phòng khác: đúng 1 mèo từ kệ thấp nhất leo lên kệ trên trong ~4 s, ngồi nhìn ra, ngồi yên |
| Mèo | Đúng 1 con trong mọi khung hình, số mèo không đổi; không nhân đôi |
| Camera | Tuyệt đối khóa: không zoom, không push-in, không pan/tilt/dolly, không cắt trong clip |
| Sản phẩm | Đúng 6 chi tiết, không võng, không cầu, không thêm kệ |
| Text | 2 dòng cố định suốt video, vùng trên, kiểu bóng đổ (mục 4) |
| Audio | Tiếng gốc của clip + loudnorm I=-19 (mục 5). Không nhạc đối thủ, không lời nói |
| Khung hình | 720x1280, giữ fps gốc 24 của clip (brief ghi 30 fps nhưng clip về 24 — giữ 24, ghi chú) |

## 3. Chỗ đổi mỗi lần dùng (5 placeholder)

| Placeholder | Ví dụ ở 138-01 | Ghi chú |
|---|---|---|
| `[ẢNH_SẢN_PHẨM]` | `g01-crop.jpg` (ảnh thật của store) | Ảnh đầu vào duy nhất cho anchor; prompt phải ghi "ignore the cat and the extra shelf in the photo" nếu ảnh thật có mèo/kệ thừa |
| `[MÔ_TẢ_SẢN_PHẨM]` | 6 chi tiết: 2 kệ nỉ xám (dưới + trên, cột sisal ở giữa), cột sisal đứng trên kệ dưới đỡ kệ trên, bậc thang dốc ngắn bên phải kệ trên, nhà vuông cửa hình đầu mèo + đệm ở góc trên phải, ống tròn trên kệ nhỏ riêng bên trái giữa | Đếm đủ 6 trong mọi prompt; ghi rõ "no third shelf, no fourth shelf" |
| `[PHÒNG]` | Tường thạch cao kem ấm, sàn óc chó đậm, nắng chiều thấp từ cửa sổ bên phải, mép ghế sofa linen xanh rêu ở mép phải, camera hơi lệch trái | Phòng MỚI, không trùng phòng của video trước; anchor A và B cùng một phòng |
| `[MÈO]` | 1 mèo tabby cam nhỏ | Giữ cùng một mèo ở cả 2 clip để liền mạch |
| `[TEXT_1]` / `[TEXT_2]` | "From the floor" / "to the wall." | Tối đa ~14 ký tự/dòng ở cỡ 74 pt, nếu không sẽ tràn qua nhà mèo |

## 4. Text — kiểu bóng đổ ("radian border", chuẩn từ 138-01 v2)

- Font: Liberation Sans Bold 74 pt, trắng, căn trái x=40; dòng 1 y=114, dòng 2 y=188.
- Halo: vẽ chữ đen cùng vị trí, GaussianBlur 14, alpha 110.
- Bóng đổ: vẽ chữ đen lệch (+3, +4) px, GaussianBlur 8, alpha 190.
- Chữ trắng vẽ trên cùng. Ảnh PNG 720x1280 RGBA, overlay ở `overlay=0:96`.
- Lệnh PIL mẫu (đổi 2 dòng chữ là xong):

```python
from PIL import Image, ImageDraw, ImageFont, ImageFilter
W, H = 720, 1280
font = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 74)
lines = [("[TEXT_1]", 40, 114), ("[TEXT_2]", 40, 188)]
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
dh = ImageDraw.Draw(halo)
for t, x, y in lines: dh.text((x, y), t, font=font, fill=(0, 0, 0, 110))
halo = halo.filter(ImageFilter.GaussianBlur(14))
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ds = ImageDraw.Draw(shadow)
for t, x, y in lines: ds.text((x + 3, y + 4), t, font=font, fill=(0, 0, 0, 190))
shadow = shadow.filter(ImageFilter.GaussianBlur(8))
txt = Image.new("RGBA", (W, H), (0, 0, 0, 0))
dt = ImageDraw.Draw(txt)
for t, x, y in lines: dt.text((x, y), t, font=font, fill=(255, 255, 255, 255))
out = Image.alpha_composite(Image.alpha_composite(halo, shadow), txt)
out.save("text-XXX-v2.png")
```

## 5. Prompt (nguyên văn 138-01, đã thay placeholder)

Dòng motion (Amin duyệt, thêm vào cuối mọi prompt clip):
`Motion starts from the very first frame, no static hold at the start.`

**Anchor A** (ảnh vào: `[ẢNH_SẢN_PHẨM]`):
> Using the attached real product photo as exact reference for each piece, show
> the loose wooden parts of this exact cat wall shelf set laid out neatly on a
> dark green wool rug on a dark walnut floor of a warm cream-walled living room
> lit by low afternoon sunlight from a window on the right, top-down view, an
> edge of a moss-green linen armchair at the right edge: `[MÔ_TẢ_SẢN_PHẨM]`.
> No people, no cat, no text, no logo, ignore the cat and the extra shelf in
> the photo. Vertical 9:16.

**Anchor B** (ảnh vào: `[ẢNH_SẢN_PHẨM]`):
> Using the attached real product photo as exact reference for each piece, show
> this exact set of `[MÔ_TẢ_SẢN_PHẨM]` mounted on a `[PHÒNG]`, camera slightly
> to the left of center at eye level, an edge of a moss-green linen armchair at
> the right edge, vertical 9:16. The set has exactly six pieces and nothing
> else: `[MÔ_TẢ_SẢN_PHẨM]`. No third shelf, no fourth shelf, no extra shelves,
> no partial shelves cut off at the frame edges, no cat, no people, no text, no
> logo. Ignore the cat and the extra shelf in the photo.

**Clip 1** (ảnh vào: anchor A) — `[COMMON]` + hành động + `[NEG]`:
> Vertical 9:16. The camera is absolutely frozen on a tripod, a locked-off shot
> like a photograph, framing identical in every frame, no handheld motion, no
> zoom, no push-in, no pan, no tilt, no dolly, no cuts. The `[MÔ_TẢ_SẢN_PHẨM]`
> stays exactly as in the image and never changes. Exactly one cat in the whole
> clip, the number of cats never changes. Warm calm mood. Natural sound: soft
> paw steps, faint room tone. 10 seconds, top-down view, frame fixed. The parts
> lie still on the rug. A small `[MÈO]` walks into the frame from the left,
> sniffs the grey fleece pad, then lies down beside it and stays completely
> still until the end. Nothing else moves. The camera does not move at all.
> Negative: second cat, extra cats, cat appearing twice, cat passing through
> shelves, extra shelves or steps, hammock, bridge, people, hands, text, logo,
> watermark, camera zoom, camera shake, camera drift, camera reframe, cuts,
> shelves changing, shelf set moving. Motion starts from the very first frame,
> no static hold at the start.

**Clip 2** (ảnh vào: anchor B) — như clip 1, đổi đoạn hành động thành:
> 10 seconds. Start exactly on the attached image, no cat at the start; one
> `[MÈO]` enters at the lowest grey-fleece shelf, steps up along the sisal post
> side to the upper grey-fleece shelf within the first 4 seconds, sits there
> looking out, and then stays completely still until the end. Nothing else
> moves. The camera does not move at all. [NEG như clip 1]. Motion starts from
> the very first frame, no static hold at the start. The framing must stay
> exactly as in the attached image from the first frame to the last frame; do
> not zoom in, do not move closer; the round tunnel stays fully visible at the
> left edge and the armchair stays a thin edge at the right in every frame.
> There is only one cat in the entire clip. The same single cat moves from the
> lowest shelf to the upper shelf; it never appears in two places at once; at
> the end only one cat is visible, sitting on the upper grey-fleece shelf, and
> the lowest shelf is empty.

## 6. Kiểm tra (§4) — trước khi ráp

- Mỗi anchor: đủ 6 chi tiết, không mèo/người/chữ; md5 khác mọi anchor cũ
  (ghi lại 2 md5); tối đa 3 lần thử/anchor.
- Mỗi clip: ffprobe (704x1248, 24 fps, 10.00 s), 0 cắt trong đoạn dùng,
  camera khóa (so khung 0 s / 5 s / 9 s, lệch ≤ 12 px), đúng 1 mèo trong mọi
  khung của sheet 2 fps, đúng kệ/hành động (đo vị trí kệ bằng dải xám, đừng
  tin mắt nhìn — bài học 137-01); tối đa 3 lần thử/clip.
- freezedetect hay báo "đứng hình" giả (phòng tĩnh, chỉ mèo cử động) — lấy
  sheet 2 fps làm bằng chứng quyết định, không lấy freezedetect.
- Whisper: kiểm không lời nói/tên thương hiệu. Lưu ý: Whisper-small (không
  VAD) hay ảo giác ra câu outro YouTube trên tiếng nền — kiểm lại bằng VAD
  và theo từng đoạn 2.5 s trước khi kết luận có lời nói.

## 7. Ráp (ffmpeg mẫu — đổi tên file là xong)

```bash
# clip1 0–7.5 s + clip2 0–7.5 s; scale 720:1280, loudnorm I=-19 từng đoạn,
# concat, overlay text ở 0:96, -t 15, giữ 24 fps gốc
ffmpeg -v error -y -i clip1-v1.mp4 -i clip2-v3.mp4 -i text-XXX-v2.png -filter_complex "\
[0:v]scale=720:1280:flags=lanczos,trim=end=7.5,setpts=PTS-STARTPTS[v0];\
[0:a]atrim=end=7.5,asetpts=PTS-STARTPTS,loudnorm=I=-19:TP=-1.5:LRA=11[a0];\
[1:v]scale=720:1280:flags=lanczos,trim=end=7.5,setpts=PTS-STARTPTS[v1];\
[1:a]atrim=end=7.5,asetpts=PTS-STARTPTS,loudnorm=I=-19:TP=-1.5:LRA=11[a1];\
[v0][a0][v1][a1]concat=n=2:v=1:a=1[v][a];\
[v][2:v]overlay=0:96:format=yuv420[vout]" \
-map "[vout]" -map "[a]" -c:v libx264 -pix_fmt yuv420p -r 24 -c:a aac -b:a 128k -t 15 output/whiskerwall-XXX_muse_v1.mp4
```

Kiểm file cuối: ffprobe (720x1280, 15.000 s), scene detection `gt(scene,0.25)`
đúng 1 điểm ở 7.5 s, volumedetect cả file + từng đoạn 3 s (mọi đoạn > −45 dB,
mean ≈ −20 dB), xem sheet 1 fps + 2 fps, chạy Whisper.

## 8. Chi phí thực tế (138-01, Additional tokens)

- Tổng 11M (717M → 706M): anchor 0M; clip 1 v1 3M; clip 2 v1 3M (loại:
  push-in) + v2 3M (loại: 2 mèo) + v3 2M (chấp nhận). Render/text 0M.
- Chạy sạch (không thử lại): ≈ 6M (2 clip × ~3M). Số lần thử lại là thứ đội
  chi phí lên, không phải độ dài video.
- SFX (room tone + meow + purr) CHƯA mix vì licence Epidemic Sound chưa xác
  nhận — chỉ dùng tiếng gốc + loudnorm cho tới khi có xác nhận.

## 9. Bài học đã trả (đừng lặp lại)

1. Ảnh gốc g01 hay "đẻ" thêm kệ và nuốt mất ống tròn — prompt anchor B phải
   đếm đủ 6 chi tiết và cấm kệ thứ 3/thứ 4 (B v1: 4 kệ, không ống → loại).
2. Clip 2 v1 bị push-in chậm (~18%, nhà to dần, ống bị cắt mép trái) — so
   khung 0 s với 9 s, không tin cảm giác.
3. Clip 2 v2 nhân đôi mèo (1 con kệ dưới + 1 con trên bậc) — thêm câu "chỉ
   1 mèo, không xuất hiện 2 chỗ cùng lúc; cuối clip kệ dưới trống" (v3 đạt).
4. Mèo clip 2 lên kệ trên ở ~4.5–5 s, hơi trễ nhịp ~4 s trong brief — chấp
   nhận được, ghi chú lại.
5. Mèo clip 1 nằm dài trên cả 2 kệ chứ không nằm "cạnh" 1 tấm — ghi chú lại.
6. Text trắng trơn khó đọc trên tường sáng và chồng lên mép nhà mèo — dùng
   kiểu bóng đổ mục 4 (v2).
7. Whisper-small ảo giác câu outro YouTube — kiểm bằng VAD trước khi kết luận.

## 10. Cách dùng lại (5 bước)

1. Copy thư mục mẫu `whiskerwall/138-01/` thành `whiskerwall/<MỚI>-01/`
   (giữ `input/`, `output/`, `build/`).
2. Thay `[ẢNH_SẢN_PHẨM]` mới vào `input/g01-crop.jpg`; sửa 5 placeholder
   ở mục 3 (mô tả sản phẩm, phòng, mèo, 2 dòng text).
3. Gen anchor A/B (tối đa 3 lần mỗi cái) → gen clip 1/2 (tối đa 3 lần mỗi
   cái), kiểm theo mục 6.
4. Làm text PNG theo mục 4, ráp theo mục 7, kiểm file cuối.
5. Ghi báo cáo `muse-report-gen-ww<XXX>-<ngày>.md` theo mẫu 138-01, lên
   Drive (output/ + input/), cập nhật `store.json` (xem FLOW-TAO-VIDEO-F1).

## Mẫu anh em

- **Flow 3 — 4 cảnh × 3.75 s (remix/swap)**: `whiskerwall-139-01` — đổi sản
  phẩm trong 4 khung hình ref đối thủ rồi animate; cùng kiểu text bóng đổ
  mục 4; chi phí thực tế 12M (733M → 721M).
- **Flow 1 — 2 clip × 7.5 s (tự nghĩ)**: `whiskerwall-137-01` — cùng khung
  15 s/1 cắt nhưng không có bước anchor phòng mới; chi phí thực tế 11M.
- Luồng chuẩn chung: xem `1-dropship/stores/whiskerwall/3-creative/FLOW-TAO-VIDEO-F1-2026-11-25.md`
  trên Drive.
