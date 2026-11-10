// KAN-84: sản phẩm Market Research, cột theo Google Sheet mẫu "Market Research".
// Sheet: STT | Tên | Ảnh | Facebook | Website | Đánh giá sơ bộ | Bước tiếp theo (cột H không tiêu đề: ghi chú).
export interface MarketProduct {
  n: number // STT
  name: string // Tên
  desc: string // Mô tả đầy đủ trong ô Tên (nếu có), rỗng nếu không
  nameUrl: string // Link gắn trên ô Tên (nếu có)
  image: string // Ảnh: đường dẫn trong public/ (vd market/01.jpg)
  facebook: string // cột Facebook (D)
  website: string // cột Website (E)
  review: string // Đánh giá sơ bộ
  next: string // Bước tiếp theo
  note: string // cột H (không có tiêu đề)
}
