import { useState } from 'react'
import { COVERS } from './storeCovers'
import { SOURCING, VND_PER_USD } from './storeSourcing'

/**
 * Tab theo store của Market Research (KAN-135/P1, Amin 28/11/2026): mỗi store = tổng quan thị trường + đánh giá + SP đang chọn.
 * Số liệu: FastMoss MCP đọc trực tiếp 2026-11-27, US, đơn/GMV 28 ngày (≈30) và 90 ngày. Nguồn đầy đủ:
 * 0-dashboard/task-hub/KAN-135/output/verify/fastmoss-top15-sach-<store>.md. Thông tin phụ (shop, id, GMV, chưa xác minh) nằm sau "Xem thêm".
 */
export type StoreId = 'whiskerwall' | 'aquanest' | 'heartbond'
interface Row { n: string; price: string; u28: number; u90: number; g28: number; g90: number; shop: string; id: string; note?: string }
interface Pick { name: string; kind: 'cũ' | 'mới'; price: string; u28: number | null; u90: number | null; verdict: 'ok' | 'warn' | 'bad'; note: string; id?: string }
interface Store { id: StoreId; label: string; sub: string; topTitle: string; top: Row[]; topAlt?: { title: string; rows: Row[] }; assess: string[]; picks: Pick[]; unverified: string[]; oldFile: string }

const r = (n: string, price: string, u28: number, u90: number, g28: number, g90: number, shop: string, id: string, note?: string): Row => ({ n, price, u28, u90, g28, g90, shop, id, note })

const WW: Store = {
  id: 'whiskerwall', label: 'WhiskerWall', sub: 'Đồ / nội thất mèo', oldFile: 'SAN-PHAM-WHISKERWALL.html',
  topTitle: 'Top 15 đồ/nội thất mèo (đơn 28 ngày)',
  top: [
    r('CoziHaven cat sleeping bag (tunnel)', '12–18', 5642, 5642, 69282, 68556, 'CoziHaven', '1732803844555379042', 'ra mắt 01/11/2026'),
    r('Sweetcrispy donut nest', '20–26', 3859, 5831, 75420, 126721, 'Sweetcrispy Official', '1730744682162393826', 'chung chó-mèo'),
    r('WeCharmer Fluffy Cloud Pet Sofa [đấu giá]', '100–120', 3413, 4985, 341265, 491763, 'WeCharmer Store', '1732605726676062453', 'listing đấu giá, bất thường'),
    r('Bedsure self-warming pet bed', '15–69', 2983, 7862, 61456, 165144, 'Lesure Pet', '1731704190200550034', 'chung chó-mèo'),
    r('VAGASCAPE cardboard scratcher bed', '13', 2487, 3685, 34925, 88997, 'VagascapeUS', '1731746262341685265'),
    r('Segawe 55in cat tree', '40–49', 2330, 2980, 94719, 125860, 'Segawe', '1730701715237868395'),
    r('Lesure Fluffy Bubble cat&dog bed', '25–30', 1738, 1756, 44078, 44771, 'Lesure Pet', '1729524686068815506', 'chung chó-mèo; ra mắt 28/08'),
    r('SmartWell 5D scratcher pad', '12–16', 1604, 3451, 19224, 45000, 'Smart-Well', '1731788606735487534'),
    r('options foldable cat house', '23–35', 1540, 3826, 35420, 93338, 'options', '1732382107696730992'),
    r('SHA CERLIN Christmas-tree cat tree', '61–100', 1467, 1534, 91548, 96003, 'SHA CERLIN', '1729538090629763424', 'mùa vụ'),
    r('ComfortTail heated outdoor cat house', '90', 1225, 2596, 68365, 143427, 'ComfortTail', '1731424444221592017', 'mùa lạnh'),
    r('Cozoon cardboard scratch pad & bed', '22–28', 1185, 2738, 26931, 63281, 'CoZoon', '1732479838815425155'),
    r('PETITRIUN wooden scratcher lounge', '19–23', 1112, 3306, 20365, 65171, 'PetitRinu', '1732572136298353265'),
    r('CheerPals foldable window perch', '28–32', 1046, 2121, 28558, 62074, 'CheerPals', '1732134318504841892'),
    r('Bedsure heated outdoor cat house', '45–72', 1003, 1074, 44151, 47824, 'Lesure Pet', '1731924813622055570', 'mùa lạnh'),
  ],
  assess: [
    'Nhu cầu lớn: 15 SP đầu cộng lại hàng chục nghìn đơn/28 ngày; SP số 1 gần 5.600 đơn.',
    'Mạnh nhất: giường/ổ ấm và bảng cào/cây leo giá $12–100. Một nửa top là ổ chung chó-mèo hoặc mùa lạnh.',
    'Wall shelf / võng treo tường (SP cũ A, B) gần như không có đơn (≤60/28 ngày); PAWZ Road (SP cũ C) đang giảm.',
    'Gợi ý: ưu tiên scratcher/cây leo thuần mèo (VAGASCAPE, Segawe, SmartWell, Cozoon) làm SP mới; cân nhắc thay A và B.',
  ],
  picks: [
    { name: 'A — Cat Hammock Bed Wall Mounted', kind: 'cũ', price: '≈29', u28: 59, u90: 60, verdict: 'bad', note: 'Không có listing trùng; gần nhất EverGlow wall shelves + hammock' },
    { name: 'B — SucceBuy Wall Mounted Cat Shelves', kind: 'cũ', price: '29–49', u28: 38, u90: 122, verdict: 'bad', note: 'Không có SucceBuy trên FastMoss; gần nhất RIWENGO 6-piece' },
    { name: 'C — PAWZ Road Cat Tree 5-tier', kind: 'cũ', price: '47–57', u28: 43, u90: 194, verdict: 'warn', note: 'Giảm: 194 đơn/90 ngày còn 43 trong 28 ngày', id: '1729415150536659403' },
    { name: 'VAGASCAPE cardboard scratcher bed', kind: 'mới', price: '13', u28: 2487, u90: 3685, verdict: 'ok', note: 'Thuần mèo, giá thấp', id: '1731746262341685265' },
    { name: 'Segawe 55in cat tree', kind: 'mới', price: '40–49', u28: 2330, u90: 2980, verdict: 'ok', note: 'GMV28 $94.7k', id: '1730701715237868395' },
    { name: 'SmartWell 5D scratcher pad', kind: 'mới', price: '12–16', u28: 1604, u90: 3451, verdict: 'ok', note: '', id: '1731788606735487534' },
    { name: 'options foldable cat house', kind: 'mới', price: '23–35', u28: 1540, u90: 3826, verdict: 'ok', note: '', id: '1732382107696730992' },
    { name: 'SHA CERLIN Christmas-tree cat tree', kind: 'mới', price: '61–100', u28: 1467, u90: 1534, verdict: 'warn', note: 'Mùa vụ (Muse N9)', id: '1729538090629763424' },
    { name: 'Cozoon cardboard scratch pad & bed', kind: 'mới', price: '22–28', u28: 1185, u90: 2738, verdict: 'ok', note: '', id: '1732479838815425155' },
    { name: 'PETITRIUN wooden scratcher lounge', kind: 'mới', price: '19–23', u28: 1112, u90: 3306, verdict: 'ok', note: '', id: '1732572136298353265' },
    { name: 'CheerPals foldable window perch', kind: 'mới', price: '28–32', u28: 1046, u90: 2121, verdict: 'ok', note: '', id: '1732134318504841892' },
    { name: 'Sweetcrispy 54in scratcher shelf', kind: 'mới', price: '28–67', u28: 965, u90: 3891, verdict: 'ok', note: 'Hạng 16', id: '1730789164546953954' },
    { name: 'HOOMIC 73in corner cat tree', kind: 'mới', price: '85', u28: 742, u90: 2096, verdict: 'ok', note: 'GMV28 $61k (Muse N11)', id: '1732165713619685617' },
  ],
  unverified: ['Muse N8 Esmlada 5-piece và N10 HAPAW fountain chưa tra FastMoss.', 'AliExpress (link, giá nhập) và margin chưa làm (P2).', '"Chung chó-mèo" xác định theo tiêu đề (Suy luận).'],
}

const AN: Store = {
  id: 'aquanest', label: 'AquaNest', sub: 'Phụ kiện bể cá', oldFile: 'SAN-PHAM-AQUANEST.html',
  topTitle: 'Top 15 phụ kiện bể cá (đơn 28 ngày)',
  top: [
    r('hygger Bio-Clarifier', '16–30', 866, 2361, 13590, 39739, 'hygger', '1732020645685465873'),
    r('hygger 5-in-1 gravel cleaner kit', '33', 780, 2458, 26396, 103057, 'hygger', '1729637025350521617'),
    r('hygger hang-on-back filter 5–40 gal', '43–50', 647, 1523, 27691, 67836, 'hygger', '1732440615537382161'),
    r('HYGGER 3-in-1 vacuum cleaner', '19', 473, 1520, 8947, 37210, 'Hygger Aqua Store', '1731204016319729681'),
    r('Marimo moss ball ecosystem', '14', 408, 682, 5794, 10071, 'Projoy', '1731450089375437758'),
    r('hygger siphon + coral feeder kit', '16', 321, 805, 5323, 18828, 'hygger', '1729448749425136401'),
    r('Water purification tablets 80g', '15–32', 315, 604, 4650, 9226, 'YUDD Lit', '1732382777806525279'),
    r('Natural driftwood decor', '16–32', 292, 844, 4770, 15680, 'AquaBunny', '1731069168150418075'),
    r('hygger clip-on LED 14W', '28–33', 281, 1171, 8137, 37132, 'hygger', '1729451585875776273'),
    r('AQQA magnetic glass scraper', '13–20', 271, 695, 3420, 9853, 'AQQA Aquarium Store', '1729562925178655353'),
    r('HYGGER aquascaping tool kit', '17', 233, 604, 3919, 11781, 'Hygger Aqua Store', '1731416627477909521'),
    r('Floating feeding ring', '11', 223, 581, 2446, 6383, 'FingerPet Shop', '1732413518412747484'),
    r('Craftsboys acrylic plant holder 4pcs', '8', 222, 596, 1816, 5221, 'Craftsboys Aqua', '1732043721950401527'),
    r('hygger 3-in-1 circulation filter', '26', 214, 678, 5414, 19326, 'hygger', '1729445006647333649'),
    r('AquaMiracle submersible filter', '15–26', 202, 754, 3192, 13417, 'AquaMiracle', '1729482484011733788'),
  ],
  assess: [
    'Ngách nhỏ hơn hai store kia: SP số 1 chỉ 866 đơn/28 ngày, GMV 28 ngày cao nhất ≈ $27,7k (HOB filter).',
    'hygger chiếm 7/15 (thương hiệu thống trị); giá thấp $8–50, không SP nào >$50.',
    'Không có nắp bể (lid) hay jump guard trong top 15: tìm theo tên cho SP cũ ra 0 kết quả (Lifewithpets lid: 0 đơn). Cả 3 SP cũ chưa có số FastMoss.',
    'Gợi ý: chuyển sang nhóm vệ sinh/xử lý nước/lọc (Bio-Clarifier, gravel cleaner, vacuum, siphon) thay vì nắp bể; cần xem cạnh tranh với hygger.',
  ],
  picks: [
    { name: 'AN-01 Custom PC lid Red Sea Max (ClearView)', kind: 'cũ', price: '—', u28: null, u90: null, verdict: 'bad', note: 'Tìm tên "ClearView aquarium lid": 0 kết quả' },
    { name: 'AN-02 TopLids Screen Top Lid Cube 20', kind: 'cũ', price: '—', u28: null, u90: null, verdict: 'bad', note: 'Chưa tra riêng; cả nhóm nắp bể gần như 0 đơn' },
    { name: 'AN-04 DIY Mesh Jump Guard Kit', kind: 'cũ', price: '—', u28: null, u90: null, verdict: 'bad', note: 'Tìm tên: 0 kết quả' },
    { name: 'hygger Bio-Clarifier', kind: 'mới', price: '16–30', u28: 866, u90: 2361, verdict: 'ok', note: 'Tiêu hao, mua lặp lại', id: '1732020645685465873' },
    { name: 'hygger 5-in-1 gravel cleaner kit', kind: 'mới', price: '33', u28: 780, u90: 2458, verdict: 'ok', note: 'GMV90 $103k', id: '1729637025350521617' },
    { name: 'hygger hang-on-back filter', kind: 'mới', price: '43–50', u28: 647, u90: 1523, verdict: 'ok', note: 'GMV28 $27.7k, giá cao nhất nhóm', id: '1732440615537382161' },
    { name: 'HYGGER 3-in-1 vacuum cleaner', kind: 'mới', price: '19', u28: 473, u90: 1520, verdict: 'ok', note: '', id: '1731204016319729681' },
    { name: 'Marimo moss ball ecosystem', kind: 'mới', price: '14', u28: 408, u90: 682, verdict: 'warn', note: 'Trang trí; đơn90 ít', id: '1731450089375437758' },
    { name: 'hygger siphon + coral feeder kit', kind: 'mới', price: '16', u28: 321, u90: 805, verdict: 'ok', note: '', id: '1729448749425136401' },
    { name: 'Natural driftwood decor', kind: 'mới', price: '16–32', u28: 292, u90: 844, verdict: 'warn', note: 'Trang trí', id: '1731069168150418075' },
    { name: 'hygger clip-on LED 14W', kind: 'mới', price: '28–33', u28: 281, u90: 1171, verdict: 'ok', note: '', id: '1729451585875776273' },
    { name: 'AQQA magnetic glass scraper', kind: 'mới', price: '13–20', u28: 271, u90: 695, verdict: 'ok', note: '', id: '1729562925178655353' },
    { name: 'HYGGER aquascaping tool kit', kind: 'mới', price: '17', u28: 233, u90: 604, verdict: 'ok', note: '', id: '1731416627477909521' },
  ],
  unverified: ['AN-02 TopLids chưa tra riêng; AN-12 "máy sục khí AQQA" không có trong top 20 (Chưa xác minh).', 'AliExpress và margin chưa làm (P3).', 'Nhu cầu nắp bể ở kênh khác (Shopify, Amazon) Chưa xác minh.'],
}

const HB_ALT: Row[] = [
  r('TEWIKY (Kris) 14K gold plated necklace', '18', 19973, 42813, 359314, 777828, 'Tewiky', '1732446702632473355'),
  r('Tewiky tennis necklace CZ', '11–12', 11944, 19341, 352755, 531429, 'Tewiky US', '1732460009203733141'),
  r('TEWIKY gold tennis necklace 2mm', '11–30', 11074, 14782, 122451, 168265, 'Tewiky US', '1732643214822773397'),
  r('Tewiky tennis necklace 14K', '15', 8305, 24196, 118563, 353813, 'Tewiky US', '1731273465953751701'),
  r('Tewiky Necklace EG-26', '30', 7539, 23938, 226094, 716636, 'Tewiky US', '1732496157964145301'),
  r('Pancert floral CZ choker', '14', 6105, 10603, 85470, 157718, 'pancert', '1731745536842436667'),
  r('HappyNest snake chain choker', '10', 5165, 5165, 55798, 55799, 'HappyNest Mart', '1732793366548419219'),
  r('SR Pearl real pearl random pull', '37', 4677, 8074, 173002, 309528, 'SR Pearl Jewelry', '1732473445049406117'),
  r('Tewiky (K) necklace 14K', '18', 4583, 12410, 82448, 206962, 'Tewiky', '1732411927147221771'),
  r('Tewiky Cuban link chain', '12–14', 3804, 9980, 47108, 131538, 'Tewiky', '1731574210997490443'),
  r('LOYALOVE 925 initial pendant A-Z', '12', 3676, 9357, 44112, 130410, 'Loyalove.', '1732416655625916562', 'cá nhân hóa'),
  r('Tewiky 14K gold cross necklace', '10', 3196, 7995, 28258, 76589, 'Tewiky US', '1731475659970941589'),
  r('Hermah men curb chain', '11–24', 2991, 4536, 30427, 49798, 'Hermah store', '1729436777327203318'),
  r('TEWIKY (Au) 14K gold plated', '18–50', 2982, 10027, 53646, 180386, 'Tewiky', '1732465551103070987'),
  r('Tewiky crown cross necklace', '10–12', 2863, 6291, 28012, 66168, 'Tewiky', '1729460580021605131'),
]
const HB: Store = {
  id: 'heartbond', label: 'HeartBond', sub: 'Trang sức quà tặng cá nhân hóa', oldFile: 'SAN-PHAM-HEARTBOND.html',
  topTitle: 'Top 15 dây chuyền cá nhân hóa (tên / chữ cái / mẹ-con)',
  top: [
    r('LOYALOVE 925 silver initial necklace', '12', 3676, 9357, 44112, 130410, 'Loyalove.', '1732416655625916562'),
    r('Turandoss golden heart initial necklace', '14–16', 2689, 10969, 40242, 185607, 'Turandoss-Jewelry', '1731158885662232626'),
    r('AS099 multi-name bead bracelet (vòng tay)', '14–31', 2502, 3470, 33777, 48281, 'Alicia Sonrisas', '1731219705737024378', 'vòng tay'),
    r('GANIA personalized name letter necklace', '12', 2473, 6336, 30732, 86969, 'GANIA', '1730523418556338421'),
    r('AS025 mom jewelry kids names necklace', '15–28', 2167, 8054, 32494, 156204, 'Alicia Sonrisas', '1729720631321072506'),
    r('AS063 love double-layer name necklace', '17', 2165, 5946, 36972, 124596, 'Alicia Sonrisas', '1730914364610286458'),
    r('GGIRL 18K heart-shaped name necklace', '16', 2063, 2413, 33008, 37947, 'GGIRL Custom', '1732614604808885083', 'ra mắt 05/09'),
    r('Seasons Jewel 14K shell letter A-Z', '7', 2021, 2367, 13338, 15620, 'Seasons Jewel', '1732502204691157282'),
    r('DFN western initial necklace', '25', 1815, 1919, 46561, 49798, 'DFN INC', '1732727954143220623', 'ra mắt 08/10'),
    r('AS520 multiple names custom necklace', '15–31', 1349, 5777, 19859, 95415, 'Alicia Sonrisas', '1730675643784926074'),
    r('Treasure Bazaar1 personalized initial gold', '40', 1234, 1279, 49236, 51032, 'Treasure Bazaar1', '1732779775401103910'),
    r('Tomorrow Jewellery custom name necklace', '59', 1003, 1353, 59177, 80467, 'Tomorrow Jewellery', '1732404617082802339', 'GMV28 cao nhất nhóm'),
    r('Seasons Jewel A-Z letter pendant', '7–8', 884, 946, 6188, 6620, 'Seasons Jewel', '1732603535960805666'),
    r('Happy Homes1 personalized initial necklace', '30', 813, 1432, 32438, 57137, 'Happy Homes1', '1732747346165731365'),
    r('Turandoss minimalist initial necklace set', '18', 757, 2703, 13540, 50750, 'Turandoss-Jewelry', '1731159655991054386'),
  ],
  topAlt: { title: 'Top 15 dây chuyền theo ngành (không riêng cá nhân hóa; bị Tewiky chiếm ~10/15)', rows: HB_ALT },
  assess: [
    'Top theo ngành dây chuyền bị một thương hiệu thời trang (Tewiky) chiếm, không phải quà cá nhân hóa. Dùng bảng cá nhân hóa để quyết định.',
    'Cá nhân hóa bán chạy ở $7–30 (initial/name necklace): nhiều đơn nhưng lợi nhuận tuyệt đối thấp. SP $40–59 (Treasure Bazaar1, Tomorrow) GMV cao dù đơn ít.',
    'SP cũ: 2 dây chuyền "granddaughter" gần như 0 đơn trên TikTok Shop US. Hug ring mới nổi (101 đơn, ra mắt 19/11) nhưng quá mới để kết luận.',
    'Hạng bảng cá nhân hóa ghép từ từ khóa + category nên chỉ là Suy luận.',
  ],
  picks: [
    { name: 'HB-A Infinity Love Knot To My Granddaughter', kind: 'cũ', price: '3–25', u28: 0, u90: 0, verdict: 'bad', note: 'Không có SP trùng; gần nhất 0 đơn' },
    { name: 'HB-B Forever Love To My Granddaughter', kind: 'cũ', price: '6', u28: 41, u90: 85, verdict: 'bad', note: 'Không trùng; gần nhất "Book Necklace" MABEL ROW' },
    { name: 'HB-C Dad & Daughter Hug Ring', kind: 'cũ', price: '11', u28: 101, u90: 101, verdict: 'warn', note: 'Veyra Jewelry, ra mắt 19/11/2026: quá mới', id: '1732742705486336924' },
    { name: 'LOYALOVE 925 initial necklace', kind: 'mới', price: '12', u28: 3676, u90: 9357, verdict: 'ok', note: '', id: '1732416655625916562' },
    { name: 'Turandoss golden heart initial', kind: 'mới', price: '14–16', u28: 2689, u90: 10969, verdict: 'ok', note: 'GMV90 $186k', id: '1731158885662232626' },
    { name: 'GANIA personalized name necklace', kind: 'mới', price: '12', u28: 2473, u90: 6336, verdict: 'ok', note: '', id: '1730523418556338421' },
    { name: 'AS025 mom jewelry kids names', kind: 'mới', price: '15–28', u28: 2167, u90: 8054, verdict: 'ok', note: 'Hợp quà mẹ-con', id: '1729720631321072506' },
    { name: 'AS063 love double-layer name', kind: 'mới', price: '17', u28: 2165, u90: 5946, verdict: 'ok', note: '', id: '1730914364610286458' },
    { name: 'GGIRL 18K heart name necklace', kind: 'mới', price: '16', u28: 2063, u90: 2413, verdict: 'warn', note: 'Mới (ra mắt 05/09)', id: '1732614604808885083' },
    { name: 'AS520 multiple names custom', kind: 'mới', price: '15–31', u28: 1349, u90: 5777, verdict: 'ok', note: '', id: '1730675643784926074' },
    { name: 'Treasure Bazaar1 personalized initial', kind: 'mới', price: '40', u28: 1234, u90: 1279, verdict: 'warn', note: 'Giá cao hơn, GMV28 $49k', id: '1732779775401103910' },
    { name: 'Tomorrow Jewellery custom name', kind: 'mới', price: '59', u28: 1003, u90: 1353, verdict: 'warn', note: 'GMV28 $59k (Muse HB-D)', id: '1732404617082802339' },
  ],
  unverified: ['Muse HB-E…HB-O (trừ HB-D) chưa tra riêng.', 'Nguồn nhập (ShineOn/AliExpress) và margin chưa làm (P4).', 'Hạng bảng cá nhân hóa là Suy luận (ghép từ khóa + category).'],
}
export const STORES: Store[] = [WW, AN, HB]

/* ───────── Tổng quan thị trường (số liệu từ bản KAN-125 cũ, thiết kế lại; nhãn: ok = Đã xác minh, e = Ước tính) ───────── */
interface Bar { l: string; sub?: string; v: number; txt: string; e?: boolean }
interface Fc { l: string; from: string; to: string; a: number; b: number; cagr: string }
interface Ov {
  lead: string
  kpis: { v: string; l: string; e?: boolean }[]
  sizes: { title: string; bars: Bar[]; note: string }
  forecast: Fc[]
  trend: { title: string; bars: Bar[]; note: string }
  people: { title: string; bars: Bar[] }
  score: { v: number; name: string; e?: boolean }[]
  avg: string
  fitTitle: string
  fit: Bar[]
  orders: { title: string; bars: Bar[]; note: string }
  reco: string[]
  more: string[]
}

const OV: Record<StoreId, Ov> = {
  whiskerwall: {
    lead: 'Mèo: nhiều hộ nuôi, chi tiêu tăng đều. Đồ chơi nhỏ và giá thấp; cây leo/giường/máng nước hợp khung $50–150 hơn. Kệ leo tường gần như không có cầu.',
    kpis: [
      { v: '$1,1–1,2 tỷ', l: 'đồ chơi mèo toàn cầu' }, { v: '≈6%', l: 'CAGR đồ chơi mèo' }, { v: '53 triệu', l: 'hộ nuôi mèo US 2025 (39%)' },
      { v: '$4,07 tỷ', l: 'nội thất + cào móng toàn cầu' }, { v: '3,0 / 5', l: 'điểm ngành (đồ chơi)', e: true }, { v: '483', l: 'đơn/28 ngày top 5 kệ leo tường' },
    ],
    sizes: { title: 'Quy mô theo ngách mèo (tỷ USD, toàn cầu)', bars: [
      { l: 'Thức ăn mèo', sub: 'Mordor 2025', v: 62.76, txt: '$62,8 tỷ' }, { l: 'Cát vệ sinh', sub: 'Grand View 2025', v: 17.2, txt: '$17,2 tỷ' },
      { l: 'Nội thất + cào móng', sub: 'MRFR 2025', v: 4.07, txt: '$4,07 tỷ' }, { l: 'Đồ chơi mèo', sub: 'Reanin 2025', v: 1.12, txt: '$1,12 tỷ' }, { l: 'Hộp cát tự động', sub: 'IMARC 2025', v: 0.702, txt: '$0,70 tỷ' },
    ], note: 'Các hãng định nghĩa khác nhau nên không cộng/so trực tiếp.' },
    forecast: [
      { l: 'Nội thất + cào móng (MRFR)', from: '2025', to: '2035', a: 4.07, b: 6.94, cagr: '5,48%' },
      { l: 'Đồ chơi mèo (market.us)', from: '2024', to: '2034', a: 1.2, b: 2.1, cagr: '5,9%' },
      { l: 'Đồ chơi mèo (Reanin)', from: '2025', to: '2032', a: 1.12, b: 1.68, cagr: '6,0%' },
    ],
    trend: { title: 'Google Trends US, trung bình năm gần nhất (0–100)', bars: [
      { l: 'cat tree', v: 63, txt: '63 (năm đầu ≈40)', e: true }, { l: 'cat toys', v: 29.2, txt: '29,2', e: true }, { l: 'interactive cat toy', v: 4.9, txt: '4,9', e: true },
      { l: 'cat wall shelves', v: 4.1, txt: '4,1', e: true }, { l: 'cat climbing shelves', v: 2.3, txt: '2,3', e: true },
    ], note: 'Cây leo tăng đều, lớn gấp ≈15–25 lần kệ leo tường. Mọi từ khóa lên ở tháng 11–12: cần hàng từ tháng 9–10.' },
    people: { title: 'Hộ nuôi mèo US (triệu hộ, APPA)', bars: [{ l: '2023', v: 40, txt: '40' }, { l: '2024', v: 49, txt: '49 (37%)' }, { l: '2025', v: 53, txt: '53 (39%)' }] },
    score: [{ v: 4, name: 'Hoàn hàng' }, { v: 4, name: 'Quy định / an toàn' }, { v: 3, name: 'Quy mô' }, { v: 3, name: 'Tăng trưởng' }, { v: 3, name: 'Mùa vụ', e: true }, { v: 3, name: 'Phụ thuộc quảng cáo', e: true }, { v: 2, name: 'Cạnh tranh' }, { v: 2, name: 'Biên lợi nhuận', e: true }],
    avg: 'Trung bình 3,0/5 (24/8 tiêu chí). Điểm là đánh giá của tôi, không phải số công bố.',
    fitTitle: 'Điểm hợp WhiskerWall (1–5)',
    fit: [
      { l: 'Cây leo / nội thất / cào móng', v: 4, txt: '4/5' }, { l: 'Máng nước thông minh', v: 4, txt: '4/5' }, { l: 'Hộp cát tự động', v: 3, txt: '3/5' }, { l: 'Đồ chơi', v: 2, txt: '2/5' },
      { l: 'Kệ leo tường (SP cũ)', v: 2, txt: '2/5' }, { l: 'Chải chuốt', v: 2, txt: '2/5' }, { l: 'Cát / đồ ăn / bổ sung', v: 1, txt: '1/5' },
    ],
    orders: { title: 'Đơn 28 ngày, mẫu đầu bảng mỗi ngách (FastMoss US, 25/11)', bars: [
      { l: 'Đồ chơi (top 5)', v: 30849, txt: '30.849' }, { l: 'Cây leo / nội thất (top 5)', v: 14820, txt: '14.820' }, { l: 'Đồ ăn / treat', v: 10451, txt: '10.451' }, { l: 'Máng nước (4 listing)', v: 10099, txt: '10.099' },
      { l: 'Hộp cát tự động (3 đầu)', v: 9121, txt: '9.121' }, { l: 'Chải chuốt', v: 4567, txt: '4.567' }, { l: 'Bổ sung', v: 1358, txt: '1.358' }, { l: 'Kệ leo tường (top 5)', v: 483, txt: '483' },
    ], note: 'Mẫu đầu bảng, không phải tổng ngách (Ước tính).' },
    reco: ['Đi tiếp cây leo/cat tree $60–100 (cùng khách với kệ, Trends tăng); thử máng nước $55–70.', 'Hộp cát tự động: cầu lớn nhất nhưng hàng điện, giá trên khung, thương hiệu mạnh. Chỉ khi có nguồn đạt chuẩn.', 'Số mới (FastMoss 27/11): scratcher/cây leo thuần mèo là nhóm bán mạnh; kệ/võng treo tường (SP cũ A, B) gần 0 đơn.'],
    more: ['Hãng thị trường: market.us, Reanin, MRFR, Grand View, Mordor, IMARC, APPA (Đã xác minh); Statista/Euromonitor/GMI không đọc được, không dùng.', 'Chi tiêu thú cưng US 2025 $158 tỷ (+3,7%), dự báo $165 tỷ 2026; supplies+OTC $34,4 tỷ (APPA).', 'Máng ăn tự động: không có số riêng (từ khóa trả về máng nước).', 'Bản đầy đủ: KAN-125/output/SAN-PHAM-WHISKERWALL.html.'],
  },
  aquanest: {
    lead: 'Aquarium tăng đều ≈6,5%/năm nhưng nắp bể không bán trên TikTok Shop. Đồ tiêu hao $14–50 bán chạy, dưới khung $50–150.',
    kpis: [
      { v: '$4,0–4,1 tỷ', l: 'aquarium toàn cầu 2025' }, { v: '≈6,4–6,5%', l: 'CAGR aquarium' }, { v: '≈10 triệu', l: 'hộ cá nước ngọt US 2025' },
      { v: '3,1 / 5', l: 'điểm ngành', e: true }, { v: '3.174', l: 'đơn/28 ngày top 5 phụ kiện ($14–50)' }, { v: '0', l: 'đơn/28 ngày top 5 nắp bể (78 listing)' },
    ],
    sizes: { title: 'Quy mô theo phạm vi (tỷ USD, toàn cầu)', bars: [
      { l: 'Phụ kiện bể cá', sub: 'IMARC 2025', v: 5.1, txt: '$5,1 tỷ' }, { l: 'Lọc bể cá', sub: 'Marketintelo 2025', v: 4.2, txt: '$4,2 tỷ', e: true }, { l: 'Aquarium', sub: 'market.us 2025', v: 4.1, txt: '$4,1 tỷ' },
      { l: 'Aquarium', sub: 'Fortune 2025', v: 4.0, txt: '$4,0 tỷ' }, { l: 'Mỹ (aquarium)', sub: 'Fortune 2026', v: 1.36, txt: '$1,36 tỷ' }, { l: 'Đèn LED', sub: 'Marketintelo', v: 1.2, txt: '$1,2 tỷ', e: true },
    ], note: 'Không nguồn nào tách riêng nắp/hood: quy mô ngách nắp = Chưa xác minh.' },
    forecast: [
      { l: 'Aquarium (Fortune)', from: '2025', to: '2034', a: 4.0, b: 7.0, cagr: '6,5%' },
      { l: 'Aquarium (market.us)', from: '2025', to: '2035', a: 4.1, b: 7.7, cagr: '6,4%' },
      { l: 'Phụ kiện (IMARC)', from: '2025', to: '2034', a: 5.1, b: 7.4, cagr: '3,98%' },
    ],
    trend: { title: 'Google Trends US, 12 tháng (0–100)', bars: [{ l: 'reef tank', v: 76, txt: '76', e: true }, { l: 'aquarium lid', v: 17, txt: '17', e: true }, { l: 'aquarium mesh cover', v: 1, txt: '≈1', e: true }], note: 'Chỉ có ảnh chụp 12 tháng (24/11), không có chuỗi 5 năm.' },
    people: { title: 'Người nuôi cá US (APPA 2025)', bars: [
      { l: 'Nuôi ≥2 con', v: 77, txt: '77%' }, { l: 'Có đèn · nước mặn', v: 79, txt: '79%' }, { l: 'Có đèn · nước ngọt', v: 70, txt: '70%' }, { l: 'Có bể acrylic', v: 50, txt: '50%' }, { l: 'Mua ở cửa hàng cá', v: 38, txt: '38%' }, { l: 'Mua ở siêu thị thú cưng', v: 30, txt: '30%' },
    ] },
    score: [{ v: 4, name: 'Quy mô' }, { v: 4, name: 'Quy định / an toàn', e: true }, { v: 4, name: 'Mùa vụ', e: true }, { v: 3, name: 'Tăng trưởng' }, { v: 3, name: 'Hoàn hàng', e: true }, { v: 3, name: 'Biên lợi nhuận', e: true }, { v: 2, name: 'Phụ thuộc quảng cáo', e: true }, { v: 2, name: 'Cạnh tranh' }],
    avg: 'Trung bình 3,1/5 (25/8 tiêu chí). Điểm là đánh giá của tôi (Ước tính).',
    fitTitle: 'Điểm hợp AquaNest (1–5, Ước tính)',
    fit: [{ l: 'Nắp / lid rimless', v: 3, txt: '3/5' }, { l: 'Lọc / bơm', v: 3, txt: '3/5' }, { l: 'Đèn LED', v: 2, txt: '2/5' }, { l: 'Máy sục khí', v: 1, txt: '1/5' }, { l: 'Trang trí / cây', v: 1, txt: '1/5' }],
    orders: { title: 'Đơn 28 ngày, SP đầu bảng mỗi ngách (FastMoss US, 27/11)', bars: [
      { l: 'Chăm sóc nước ($16–30)', v: 866, txt: '866' }, { l: 'Dụng cụ vệ sinh ($33)', v: 780, txt: '780' }, { l: 'Lọc / bơm ($43–50)', v: 647, txt: '647' }, { l: 'Trang trí / cây ($14)', v: 408, txt: '408' }, { l: 'Đèn LED ($28–33)', v: 281, txt: '281' }, { l: 'Bể / nano ($8)', v: 222, txt: '222' }, { l: 'Nắp bể (top 5 / 78)', v: 0, txt: '0' },
    ], note: 'Một listing đầu bảng mỗi ngách, không phải tổng ngách. Lọc HOB có GMV cao nhất ($27,7k).' },
    reco: ['Giữ nắp rimless custom ở quy mô thử nhỏ qua search/ads, không trông chờ TikTok organic.', 'Bán kèm đồ tiêu hao + lọc HOB để nâng giỏ; loại đèn, trang trí, bể nano giá thấp.', 'Số mới (FastMoss 27/11): hygger chiếm phần lớn top phụ kiện, giá $14–50.'],
    more: ['Hộ nuôi cá nước ngọt 11,1 → 10 triệu (2023–24 → 2025, Ước tính); nước mặn ≈2 triệu.', 'Bắc Mỹ ≈37,8% aquarium toàn cầu (Fortune); nước ngọt 70%, bể 31% (market.us).', 'Cạnh tranh nắp: ClearView, TopLids; Amazon $22–33.', 'Bản đầy đủ: KAN-125/output/SAN-PHAM-AQUANEST.html.'],
  },
  heartbond: {
    lead: 'Trang sức quà tặng rất lớn nhưng ngách hug ring / love knot nhỏ và theo mùa. Cá nhân hóa tên / birthstone có cầu thật và là nhóm duy nhất có bằng chứng bán giá ≈$59.',
    kpis: [
      { v: '$71,5–76,5 tỷ', l: 'trang sức US 2025–26' }, { v: '$243 tỷ', l: 'trang sức toàn cầu 2025' }, { v: '$33,5 tỷ', l: 'cá nhân hóa toàn cầu 2025' },
      { v: '39 vs 1–2', l: 'Trends: name necklace vs hug ring / love knot' }, { v: '2,9 / 5', l: 'điểm ngành', e: true }, { v: '1.003', l: 'đơn/28 ngày name necklace $59', e: true },
    ],
    sizes: { title: 'Quy mô theo định nghĩa từng nguồn (tỷ USD)', bars: [
      { l: 'Toàn cầu (GVR)', sub: 'đoạn trích 2025', v: 381.54, txt: '$381,5 tỷ', e: true }, { l: 'Toàn cầu (Fortune BI)', sub: '2025', v: 242.79, txt: '$242,8 tỷ' }, { l: 'US (GVR)', sub: '2025', v: 71.5, txt: '$71,5 tỷ' },
      { l: 'Cá nhân hóa (Dataintelo)', sub: '2025', v: 33.5, txt: '$33,5 tỷ' }, { l: 'Trang sức thời trang', sub: 'GVR 2024', v: 31.1, txt: '$31,1 tỷ' }, { l: 'Cá nhân hóa (Verified)', sub: 'đoạn trích', v: 3.79, txt: '$3,79 tỷ', e: true },
    ], note: 'Số cá nhân hóa lệch 10 lần giữa các hãng. Phần quà cá nhân hóa $50–150 không có số mở riêng (Chưa xác minh).' },
    forecast: [
      { l: 'Toàn cầu (Fortune BI)', from: '2025', to: '2034', a: 242.79, b: 387.36, cagr: '5,41%' },
      { l: 'US (GVR)', from: '2026', to: '2033', a: 75.9, b: 108.9, cagr: '5,3%' },
      { l: 'Cá nhân hóa (Dataintelo)', from: '2025', to: '2034', a: 33.5, b: 54.2, cagr: '5,5%' },
    ],
    trend: { title: 'Google Trends US, trung bình năm 5 (0–100); nhãn: tăng so với năm 1', bars: [
      { l: 'name necklace', v: 46.2, txt: '46,2 (×1,05)' }, { l: 'birthstone necklace', v: 34, txt: '34,0 (×2,0)' }, { l: 'personalized necklace', v: 18.9, txt: '18,9 (×4,4)' }, { l: 'infinity necklace', v: 5.4, txt: '5,4 (×1,5)' },
      { l: 'hug ring', v: 2.3, txt: '2,3 (×0,77)' }, { l: 'mother daughter necklace', v: 1.6, txt: '1,6 (×0,8)' }, { l: 'love knot necklace', v: 1.2, txt: '1,2' },
    ], note: 'Đã xác minh (262 điểm tuần/từ khóa). Hai lô Trends có thang riêng, chỉ so cùng lô. Đỉnh mùa: T4–5 và T11–12.' },
    people: { title: 'Khách hàng và kênh (% )', bars: [
      { l: 'Nữ · trang sức US (GVR)', v: 72.1, txt: '72,1%' }, { l: 'Nữ · toàn cầu (Fortune BI)', v: 63.7, txt: '63,7%' }, { l: 'Bán tại cửa hàng · US', v: 72.2, txt: '72,2%' }, { l: 'Mặt dây/dây chuyền · cá nhân hóa', v: 34.5, txt: '34,5%' },
    ] },
    score: [{ v: 4, name: 'Quy mô' }, { v: 3, name: 'Tăng trưởng' }, { v: 3, name: 'Biên lợi nhuận', e: true }, { v: 3, name: 'Mùa vụ' }, { v: 3, name: 'Hoàn hàng', e: true }, { v: 3, name: 'Quy định / claim', e: true }, { v: 2, name: 'Cạnh tranh', e: true }, { v: 2, name: 'Phụ thuộc quảng cáo', e: true }],
    avg: 'Trung bình 2,9/5. Điểm là đánh giá của tôi; 4 trong 8 tiêu chí là Ước tính.',
    fitTitle: 'Điểm hợp HeartBond (1–5, Ước tính)',
    fit: [{ l: 'Name / personalized (tên, initial)', v: 4, txt: '4/5' }, { l: 'Birthstone / family', v: 4, txt: '4/5' }, { l: 'Mother–daughter', v: 3, txt: '3/5' }, { l: 'Love knot / infinity', v: 2, txt: '2/5' }, { l: 'Hug ring', v: 2, txt: '2/5' }],
    orders: { title: 'Đơn 28 ngày của listing đầu mỗi ngách (FastMoss US, 27/11)', bars: [
      { l: 'Celtic knot $15,5 (không phải love knot đúng nghĩa)', v: 1260, txt: '1.260' }, { l: 'Name necklace $59', v: 1003, txt: '1.003', e: true }, { l: 'Birthstone $11–25', v: 30, txt: '30' }, { l: 'Mother–daughter $7,7', v: 29, txt: '29' }, { l: 'Hug ring $12,8', v: 2, txt: '2' },
    ], note: 'Mỗi ngách chỉ 1 listing đầu theo từ khóa. TikTok: chỉ 15,4% đơn ở giá ≥$40 nhưng 55,6% doanh thu.' },
    reco: ['Giữ HB-A/HB-B (love knot, forever love) như thử nhỏ qua Meta/site; bổ sung cá nhân hóa tên/birthstone $50–80.', 'Hug ring vermeil $119,99 chỉ thử sau khi có nguồn đúng SKU.', 'Số mới (FastMoss 27/11): cá nhân hóa bán nhiều ở $7–30; $40–59 ít đơn hơn nhưng GMV cao.'],
    more: ['Nữ chiếm đa số; offline còn ≈72–74% nhưng online tăng 7,4%/năm (US, GVR).', 'Giá DTC HopeRings $60–119,99 (P19); TikTok hug ring/love knot bán $1–20.', 'Larvincy/CherishBond: Chưa xác minh (HTTP 522/429).', 'Bản đầy đủ: KAN-125/output/SAN-PHAM-HEARTBOND.html.'],
  },
}

/* ───────── helpers ───────── */
const fmt = (n: number) => n.toLocaleString('en-US')
const usd = (n: number) => (n < 0 ? '—' : '$' + (n >= 1000 ? (n / 1000).toFixed(n >= 100000 ? 0 : 1) + 'k' : String(n)))
const VERDICT = { ok: ['Giữ / chọn', 'ok'], warn: ['Cân nhắc', 'warn'], bad: ['Yếu', 'lb-q'] } as const
const fmDetail = (id: string) => `https://www.fastmoss.com/e-commerce/detail/${id}`
const imgOf = (id: string, px = 96) => (COVERS[id] ? `https://s.500fd.com/tt_product/${COVERS[id]}:${px}:${px}.webp` : '')

function Thumb({ id, size = 44 }: { id: string; size?: number }) {
  const [bad, setBad] = useState(false)
  const src = imgOf(id)
  if (!src || bad) return <span className="sr-img sr-img-none" style={{ width: size, height: size }} title="Chưa có ảnh (hết credit FastMoss)">—</span>
  return <img className="sr-img" style={{ width: size, height: size }} src={src} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setBad(true)} />
}

function Bars({ title, bars, note }: { title: string; bars: Bar[]; note?: string }) {
  const mx = Math.max(...bars.map((b) => b.v), 1)
  return (
    <div className="sr-chart">
      <h4>{title}</h4>
      {bars.map((b) => (
        <div key={b.l + (b.sub ?? '')} className="sr-hbar">
          <span className="sr-hl">{b.l}{b.sub && <small> · {b.sub}</small>}</span>
          <span className="sr-bar"><span className={b.e ? 'sr-est' : ''} style={{ width: `${Math.max(b.v > 0 ? 2 : 0, (100 * b.v) / mx)}%` }} /></span>
          <b className="sr-hv">{b.txt}</b>
        </div>
      ))}
      {note && <p className="note">{note}</p>}
    </div>
  )
}

function Overview({ s }: { s: Store }) {
  const o = OV[s.id]
  const [more, setMore] = useState(false)
  const t28 = s.top.reduce((a, x) => a + x.u28, 0)
  const g28 = s.top.reduce((a, x) => a + x.g28, 0)
  const top5 = s.top.slice(0, 5)
  return (
    <div className="stack">
      <p className="sr-lead">{o.lead}</p>
      <div className="sr-stats">
        {o.kpis.map((k) => <div key={k.l} className="sr-stat"><b>{k.v}</b><span className="note">{k.l}{k.e && ' · Ước tính'}</span></div>)}
      </div>
      <div className="sr-two">
        <Bars {...o.sizes} />
        <div className="sr-chart">
          <h4>Dự báo: năm gốc → năm cuối (tỷ USD)</h4>
          {o.forecast.map((f) => {
            const mx = Math.max(...o.forecast.map((x) => x.b))
            return (
              <div key={f.l} className="sr-fc">
                <div className="sr-fc-h"><span>{f.l}</span><span className="badge ok">CAGR {f.cagr}</span></div>
                <div className="sr-bar"><span className="sr-now" style={{ width: `${(100 * f.a) / mx}%` }} /></div>
                <div className="sr-bar"><span className="sr-fut" style={{ width: `${(100 * f.b) / mx}%` }} /></div>
                <div className="note">${f.a.toLocaleString('vi-VN')} tỷ ({f.from}) → ${f.b.toLocaleString('vi-VN')} tỷ ({f.to})</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="sr-two">
        <Bars {...o.trend} />
        <Bars title={o.people.title} bars={o.people.bars} />
      </div>
      <div className="sr-two">
        <div className="sr-chart">
          <h4>Điểm ngành: 8 tiêu chí (1–5, 5 = thuận lợi cho dropship)</h4>
          {o.score.map((c) => (
            <div key={c.name} className="sr-hbar">
              <span className="sr-hl">{c.name}</span>
              <span className="sr-bar"><span className={c.e ? 'sr-est' : ''} style={{ width: `${(100 * c.v) / 5}%` }} /></span>
              <b className="sr-hv">{c.v}/5</b>
            </div>
          ))}
          <p className="note">{o.avg} Sọc = Ước tính.</p>
        </div>
        <Bars title={o.fitTitle} bars={o.fit} />
      </div>
      <Bars {...o.orders} />
      <section className="sr-chart">
        <h4>FastMoss mới (US, 27/11/2026): top 15 {s.id === 'heartbond' ? 'dây chuyền cá nhân hóa' : s.sub.toLowerCase()} <span className="badge ok">Fact</span></h4>
        <div className="sr-stats">
          <div className="sr-stat"><b>{fmt(t28)}</b><span className="note">đơn 28 ngày của top 15</span></div>
          <div className="sr-stat"><b>{usd(g28)}</b><span className="note">GMV 28 ngày của top 15</span></div>
          <div className="sr-stat"><b>{fmt(s.top[0].u28)}</b><span className="note">đơn SP số 1 ({s.top[0].shop})</span></div>
        </div>
        <div className="sr-top5">
          {top5.map((x, i) => (
            <div key={x.id} className="sr-t5"><Thumb id={x.id} size={56} /><div><b>#{i + 1} {x.n}</b><div className="note">{fmt(x.u28)} đơn · ${x.price}</div></div></div>
          ))}
        </div>
        <p className="note">Danh sách đầy đủ ở tab Sản phẩm.</p>
      </section>
      <section className="sr-chart">
        <h4>Đánh giá và đề xuất <span className="badge lb-s">Suy luận</span></h4>
        <ul className="sr-assess">{[...s.assess, ...o.reco].map((a) => <li key={a}>{a}</li>)}</ul>
      </section>
      <button type="button" className="mr-fold" aria-expanded={more} onClick={() => setMore((v) => !v)}><span className="mr-chev" aria-hidden="true">{more ? '▾' : '▸'}</span><b>Xem thêm</b><span className="note">ghi chú nguồn, chưa xác minh</span></button>
      {more && (
        <div className="stack">
          <ul className="sr-assess">{o.more.map((m) => <li key={m}>{m}</li>)}</ul>
          <div><h4>Chưa xác minh</h4><ul className="sr-assess">{s.unverified.map((u) => <li key={u}>{u}</li>)}</ul></div>
          <p className="note">Nhãn: Đã xác minh = đã đọc trang nguồn / công cụ FastMoss; sọc = Ước tính (đoạn trích, tự tính). Chi tiết đầy đủ: <code>0-dashboard/task-hub/KAN-125/output/{s.oldFile}</code>.</p>
        </div>
      )}
    </div>
  )
}

/* ───────── Sản phẩm ───────── */
const usd1 = (v: number) => (v / VND_PER_USD).toFixed(1).replace('.', ',')
function Sourced({ id }: { id: string }) {
  const g = SOURCING[id]
  if (!g) return <span className="note">chưa tìm</span>
  if (!g.items.length) return <span className="note" title={g.note}>không thấy</span>
  const v = g.items.map((i) => i.vnd)
  return (
    <div title={`Từ khóa: ${g.q}. ${g.note ?? ''}`}>
      <b>${usd1(Math.min(...v))}{Math.max(...v) !== Math.min(...v) && `–${usd1(Math.max(...v))}`}</b>
      <div className="sr-aelinks">{g.items.map((i) => <a key={i.ae} href={`https://www.aliexpress.com/item/${i.ae}.html`} target="_blank" rel="noreferrer" title={`${i.vnd.toLocaleString('vi-VN')}₫${i.sold ? ' · ' + i.sold + ' đã bán' : ''}`}>{i.ae.slice(-6)}</a>)}</div>
      {g.note && <div className="note">{g.note}</div>}
    </div>
  )
}

function ProdTable({ rows, chosen, mx }: { rows: Row[]; chosen: Set<string>; mx: number }) {
  return (
    <div className="sr-tw">
      <table className="sr-table">
        <thead><tr><th>#</th><th>Ảnh</th><th>Sản phẩm</th><th>Giá $</th><th>Đơn 28 ngày</th><th>Đơn 90 ngày</th><th>GMV 28</th><th>GMV 90</th><th>Shop</th><th>product_id</th><th>Giá nhập AliExpress</th><th>Ghi chú</th></tr></thead>
        <tbody>
          {rows.map((x, i) => (
            <tr key={x.id} className={chosen.has(x.id) ? 'sr-chosen' : ''}>
              <td>{i + 1}</td>
              <td><Thumb id={x.id} /></td>
              <td className="sr-pn"><b>{x.n}</b>{chosen.has(x.id) && <span className="badge lb-s">Ứng viên</span>}</td>
              <td>{x.price}</td>
              <td className="sr-ordc"><b>{fmt(x.u28)}</b><span className="sr-bar"><span style={{ width: `${Math.max(2, (100 * x.u28) / mx)}%` }} /></span></td>
              <td>{fmt(x.u90)}</td>
              <td>{usd(x.g28)}</td>
              <td>{usd(x.g90)}</td>
              <td>{x.shop}</td>
              <td><a href={fmDetail(x.id)} target="_blank" rel="noreferrer"><code>{x.id}</code></a></td>
              <td className="sr-ae"><Sourced id={x.id} /></td>
              <td className="note">{x.note ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Products({ s }: { s: Store }) {
  const [more, setMore] = useState(false)
  const chosen = new Set(s.picks.filter((p) => p.kind === 'mới' && p.id).map((p) => p.id as string))
  const inTop = new Set(s.top.map((x) => x.id))
  const extras: Row[] = s.picks.filter((p) => p.kind === 'mới' && p.id && !inTop.has(p.id)).map((p) => ({ n: p.name, price: p.price, u28: p.u28 ?? 0, u90: p.u90 ?? 0, g28: -1, g90: -1, shop: '—', id: p.id as string, note: p.note }))
  const olds = s.picks.filter((p) => p.kind === 'cũ')
  const mx = Math.max(...s.top.map((x) => x.u28), ...extras.map((x) => x.u28))
  return (
    <div className="stack">
      <div><h3>{s.topTitle}</h3><p className="note">FastMoss MCP, US, 27/11/2026. Đơn/GMV 28 ngày (≈30) và 90 ngày. Hàng tô màu = SP ứng viên đang chọn. Ảnh lấy từ FastMoss; ô "—" = chưa có ảnh (hết credit). Giá nhập AliExpress là giá tham khảo của listing gần giống (không cùng SKU), chưa gồm ship, Chưa xác minh.</p></div>
      <ProdTable rows={s.top} chosen={chosen} mx={mx} />
      {extras.length > 0 && (<div className="stack"><h3>Ứng viên ngoài top 15</h3><ProdTable rows={extras} chosen={chosen} mx={mx} /></div>)}
      <div className="stack">
        <h3>SP cũ đang có ({olds.length}) <span className="note">· tra FastMoss, không có SP trùng khớp</span></h3>
        <div className="sr-tw">
          <table className="sr-table">
            <thead><tr><th>SP</th><th>Giá $</th><th>Đơn 28 ngày</th><th>Đơn 90 ngày</th><th>Đánh giá</th><th>Ghi chú</th></tr></thead>
            <tbody>{olds.map((p) => (
              <tr key={p.name}><td className="sr-pn"><b>{p.name}</b></td><td>{p.price}</td><td>{p.u28 === null ? '—' : fmt(p.u28)}</td><td>{p.u90 === null ? '—' : fmt(p.u90)}</td><td><span className={`badge ${VERDICT[p.verdict][1]}`}>{VERDICT[p.verdict][0]}</span></td><td className="note">{p.note}{p.id && <> · <a href={fmDetail(p.id)} target="_blank" rel="noreferrer">FastMoss</a></>}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
      {s.topAlt && (
        <>
          <button type="button" className="mr-fold" aria-expanded={more} onClick={() => setMore((v) => !v)}><span className="mr-chev" aria-hidden="true">{more ? '▾' : '▸'}</span><b>Xem thêm</b><span className="note">bảng theo ngành (không riêng cá nhân hóa)</span></button>
          {more && <div className="stack"><h3>{s.topAlt.title}</h3><ProdTable rows={s.topAlt.rows} chosen={chosen} mx={Math.max(...s.topAlt.rows.map((x) => x.u28))} /></div>}
        </>
      )}
      <p className="note">Bản đầy đủ: <code>0-dashboard/task-hub/KAN-135/output/verify/fastmoss-top15-sach-{s.id}.md</code>. AliExpress/margin chưa làm; chưa add Shopify.</p>
    </div>
  )
}

export function StoreResearch({ id }: { id: StoreId }) {
  const s = STORES.find((x) => x.id === id) ?? STORES[0]
  const [sub, setSub] = useState<'ov' | 'pr'>('ov')
  return (
    <div className="stack">
      <div><h2>{s.label} <span className="note">· {s.sub}</span></h2></div>
      <div className="tabs" role="tablist">
        <button type="button" role="tab" aria-selected={sub === 'ov'} className={`tab${sub === 'ov' ? ' active' : ''}`} onClick={() => setSub('ov')}>Tổng quan thị trường</button>
        <button type="button" role="tab" aria-selected={sub === 'pr'} className={`tab${sub === 'pr' ? ' active' : ''}`} onClick={() => setSub('pr')}>Sản phẩm ({s.top.length})</button>
      </div>
      {sub === 'ov' ? <Overview s={s} /> : <Products s={s} />}
    </div>
  )
}
