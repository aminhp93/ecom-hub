// Giá nhập tham khảo trên AliExpress cho SP ứng viên (KAN-135, 28/11/2026).
// Cách lấy: tìm từ khóa chung trên vi.aliexpress.com, ghi giá hiển thị (VND) của 2-3 listing gần nhất. KHÔNG phải cùng SKU với đối thủ.
// Giá là giá hiển thị trang tìm kiếm ('từ giá', chưa gồm ship, biến thể, cá nhân hóa). Chưa xác minh, chưa liên hệ NCC.
export const VND_PER_USD = 25400 // giả định (Suy luận)
export interface AeItem { ae: string; vnd: number; sold?: string }
export interface Sourcing { q: string; items: AeItem[]; note?: string }
export const SOURCING: Record<string, Sourcing> = {
 "1731746262341685265": {
  "q": "cardboard cat scratcher bed",
  "items": [
   {
    "ae": "1005002746453768",
    "vnd": 70485,
    "sold": "2"
   },
   {
    "ae": "1005011536803441",
    "vnd": 164140,
    "sold": "2"
   }
  ]
 },
 "1730701715237868395": {
  "q": "cat tree 55 inch multi level",
  "items": [
   {
    "ae": "1005013245393223",
    "vnd": 970318,
    "sold": "7"
   },
   {
    "ae": "1005012341875970",
    "vnd": 1039907
   },
   {
    "ae": "1005011747930051",
    "vnd": 1884785
   }
  ],
  "note": "Giá gần bằng giá bán TikTok: margin mỏng."
 },
 "1731788606735487534": {
  "q": "cat scratcher pad sisal",
  "items": [
   {
    "ae": "1005007542992045",
    "vnd": 30980,
    "sold": "30"
   },
   {
    "ae": "1005009254045798",
    "vnd": 30980,
    "sold": "27"
   },
   {
    "ae": "1005002359937151",
    "vnd": 181046,
    "sold": "11"
   }
  ]
 },
 "1732382107696730992": {
  "q": "foldable cat house",
  "items": [
   {
    "ae": "1005013432880560",
    "vnd": 202168,
    "sold": "17"
   },
   {
    "ae": "1005011901054978",
    "vnd": 241366,
    "sold": "32"
   },
   {
    "ae": "1005009495092630",
    "vnd": 265969,
    "sold": "37"
   }
  ],
  "note": "Mẫu nhà mèo gấp ngoài trời, không phải bản giống hệt."
 },
 "1729538090629763424": {
  "q": "christmas tree cat tree",
  "items": [
   {
    "ae": "1005013563007856",
    "vnd": 509746
   },
   {
    "ae": "1005013556911516",
    "vnd": 503210
   },
   {
    "ae": "1005013707440847",
    "vnd": 1195983
   }
  ]
 },
 "1732479838815425155": {
  "q": "cardboard cat scratch pad bed lounge",
  "items": [
   {
    "ae": "1005009065858139",
    "vnd": 30980,
    "sold": "32"
   },
   {
    "ae": "1005011936029191",
    "vnd": 316573,
    "sold": "4"
   }
  ]
 },
 "1732572136298353265": {
  "q": "wooden cat scratcher lounge",
  "items": [
   {
    "ae": "1005012906277065",
    "vnd": 32069,
    "sold": "1"
   },
   {
    "ae": "1005008455206298",
    "vnd": 102512,
    "sold": "21"
   },
   {
    "ae": "1005011923591674",
    "vnd": 222026,
    "sold": "1"
   }
  ]
 },
 "1732134318504841892": {
  "q": "cat window perch foldable",
  "items": [
   {
    "ae": "1005012488418242",
    "vnd": 64488,
    "sold": "80"
   },
   {
    "ae": "1005012582989171",
    "vnd": 358401,
    "sold": "6"
   }
  ]
 },
 "1730789164546953954": {
  "q": "cat scratcher shelf wall mounted",
  "items": [
   {
    "ae": "1005009076944037",
    "vnd": 224494,
    "sold": "16"
   },
   {
    "ae": "1005004221925870",
    "vnd": 1081446,
    "sold": "14"
   },
   {
    "ae": "1005013376418751",
    "vnd": 1098511
   }
  ]
 },
 "1732165713619685617": {
  "q": "corner cat tree 73 inch",
  "items": [
   {
    "ae": "1005012341699063",
    "vnd": 531178,
    "sold": "5"
   },
   {
    "ae": "1005012337225644",
    "vnd": 1703038
   }
  ]
 },
 "1732020645685465873": {
  "q": "aquarium bio clarifier water conditioner",
  "items": [],
  "note": "Không thấy nước xử lý/bio-clarifier tương đương (kết quả toàn máy lọc). Hàng lỏng khó dropship."
 },
 "1729637025350521617": {
  "q": "aquarium gravel cleaner siphon kit",
  "items": [
   {
    "ae": "1005008605068744",
    "vnd": 30980,
    "sold": "1,000+"
   },
   {
    "ae": "1005003756276745",
    "vnd": 245278,
    "sold": "12"
   },
   {
    "ae": "1005012269731830",
    "vnd": 299565,
    "sold": "5"
   }
  ]
 },
 "1732440615537382161": {
  "q": "aquarium hang on back filter",
  "items": [
   {
    "ae": "1005009563889511",
    "vnd": 30681,
    "sold": "39"
   },
   {
    "ae": "1005009716495417",
    "vnd": 125450,
    "sold": "1"
   },
   {
    "ae": "1005013083687159",
    "vnd": 862570,
    "sold": "1"
   }
  ],
  "note": "Bản $1,2 là lọc mini, không cùng công suất."
 },
 "1731204016319729681": {
  "q": "aquarium 3 in 1 vacuum gravel cleaner",
  "items": [
   {
    "ae": "1005012269731830",
    "vnd": 299565,
    "sold": "5"
   },
   {
    "ae": "1005002612115084",
    "vnd": 1125976,
    "sold": "40"
   }
  ]
 },
 "1731450089375437758": {
  "q": "marimo moss ball",
  "items": [
   {
    "ae": "1005013625201849",
    "vnd": 53819,
    "sold": "1"
   }
  ],
  "note": "Chỉ có marimo giả; marimo sống không có. Hàng sống khó dropship."
 },
 "1729448749425136401": {
  "q": "aquarium siphon coral feeder",
  "items": [
   {
    "ae": "1005003742282596",
    "vnd": 30980,
    "sold": "176"
   },
   {
    "ae": "1005005629129019",
    "vnd": 48317,
    "sold": "298"
   },
   {
    "ae": "1005004296765637",
    "vnd": 30980,
    "sold": "201"
   }
  ]
 },
 "1731069168150418075": {
  "q": "aquarium natural driftwood",
  "items": [
   {
    "ae": "1005013676248890",
    "vnd": 39083
   },
   {
    "ae": "1005012613179535",
    "vnd": 84606,
    "sold": "5"
   },
   {
    "ae": "1005008380796605",
    "vnd": 314287,
    "sold": "4"
   }
  ]
 },
 "1729451585875776273": {
  "q": "aquarium clip on led light",
  "items": [
   {
    "ae": "1005005544941287",
    "vnd": 116529,
    "sold": "31"
   },
   {
    "ae": "1005013635267543",
    "vnd": 366142
   }
  ]
 },
 "1729562925178655353": {
  "q": "aquarium magnetic glass scraper",
  "items": [
   {
    "ae": "1005010709583104",
    "vnd": 39297,
    "sold": "2"
   },
   {
    "ae": "1005006227593531",
    "vnd": 124169,
    "sold": "5"
   },
   {
    "ae": "1005013308840737",
    "vnd": 204727
   }
  ]
 },
 "1731416627477909521": {
  "q": "aquascaping tool kit",
  "items": [
   {
    "ae": "1005002607468017",
    "vnd": 30980,
    "sold": "9"
   },
   {
    "ae": "1005013653151204",
    "vnd": 37332
   },
   {
    "ae": "1005002326789984",
    "vnd": 112266,
    "sold": "3"
   }
  ]
 },
 "1732416655625916562": {
  "q": "925 silver initial necklace",
  "items": [
   {
    "ae": "1005004857756669",
    "vnd": 30412,
    "sold": "32"
   },
   {
    "ae": "1005013559421553",
    "vnd": 41211,
    "sold": "10"
   },
   {
    "ae": "1005007436060030",
    "vnd": 157775,
    "sold": "11"
   }
  ]
 },
 "1731158885662232626": {
  "q": "gold heart initial necklace",
  "items": [
   {
    "ae": "1005007360672018",
    "vnd": 30696,
    "sold": "2"
   },
   {
    "ae": "1005007409253139",
    "vnd": 30980,
    "sold": "26"
   }
  ]
 },
 "1730523418556338421": {
  "q": "personalized name necklace custom",
  "items": [
   {
    "ae": "1005007424777762",
    "vnd": 30980,
    "sold": "108"
   },
   {
    "ae": "1005004333887076",
    "vnd": 30980
   }
  ]
 },
 "1729720631321072506": {
  "q": "mom necklace kids names custom",
  "items": [
   {
    "ae": "1005009087146227",
    "vnd": 30980,
    "sold": "16"
   },
   {
    "ae": "1005013463655353",
    "vnd": 30980
   },
   {
    "ae": "1005006869900550",
    "vnd": 30980,
    "sold": "43"
   }
  ]
 },
 "1730914364610286458": {
  "q": "double layer name necklace",
  "items": [
   {
    "ae": "1005008869688799",
    "vnd": 30980,
    "sold": "1"
   },
   {
    "ae": "1005007460129737",
    "vnd": 30980,
    "sold": "3"
   }
  ]
 },
 "1732614604808885083": {
  "q": "heart name necklace 18k custom",
  "items": [
   {
    "ae": "1005011624369546",
    "vnd": 30681,
    "sold": "26"
   },
   {
    "ae": "1005011720619520",
    "vnd": 30681,
    "sold": "16"
   },
   {
    "ae": "1005012543520212",
    "vnd": 127897,
    "sold": "4"
   }
  ]
 },
 "1730675643784926074": {
  "q": "multiple names necklace custom",
  "items": [
   {
    "ae": "1005001859032191",
    "vnd": 30980,
    "sold": "2"
   },
   {
    "ae": "1005009233123659",
    "vnd": 30980,
    "sold": "3"
   },
   {
    "ae": "1005003906300850",
    "vnd": 30980,
    "sold": "15"
   }
  ]
 },
 "1732779775401103910": {
  "q": "personalized initial necklace gold",
  "items": [
   {
    "ae": "1005012565172019",
    "vnd": 30980,
    "sold": "2"
   },
   {
    "ae": "1005012668024720",
    "vnd": 30980
   }
  ]
 },
 "1732404617082802339": {
  "q": "personalized name necklace custom",
  "items": [
   {
    "ae": "1005007424777762",
    "vnd": 30980,
    "sold": "108"
   },
   {
    "ae": "1005004333887076",
    "vnd": 30980
   }
  ],
  "note": "Giá $59 của đối thủ cao hơn nhiều giá nhập: kiểm lại chất liệu/vàng thật."
 }
}
