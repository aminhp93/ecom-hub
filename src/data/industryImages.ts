// Ảnh nền cho thẻ ngành ở tab "Ngành đang đề xuất" (Market Research).
// Nguồn: Unsplash (Unsplash License: dùng miễn phí cả thương mại, không bắt buộc ghi nguồn; ghi nguồn để truy vết). Đã kiểm trang ảnh 2026-11-18,
// mỗi ảnh là "Free Photo" (không phải Unsplash+). Ảnh nhúng trực tiếp từ images.unsplash.com, không lưu trong repo.
// Khớp theo tên ngành lấy từ tài liệu canonical (5-insight-nhu-cau-lap-lai.md).
export interface IndustryImage { match: RegExp; photo: string; page: string; by: string; alt: string }

export const INDUSTRY_IMAGES: IndustryImage[] = [
  { match: /thú cưng/i, photo: 'photo-1694372550345-9149dddc390f', page: 'https://unsplash.com/photos/ol1aRLDuHK8', by: 'Vidak', alt: 'Chú chó trắng nhỏ đang được chải lông' },
  { match: /nhà bếp|bền vững/i, photo: 'photo-1576503276236-71dd8ad5b0b9', page: 'https://unsplash.com/photos/OCmCO-wLe-s', by: 'cleanimalist', alt: 'Bình xịt nhựa trong dùng cho vệ sinh refill' },
  { match: /beauty/i, photo: 'photo-1761718209794-e0588aafbcc4', page: 'https://unsplash.com/photos/qS8eFYwvBG4', by: 'Kimia Kazemi', alt: 'Thiết bị chăm sóc da làm sạch mặt' },
  { match: /fitness|recovery/i, photo: 'photo-1584735935682-2f2b69dff9d2', page: 'https://unsplash.com/photos/IZOAOjvwhaM', by: 'Kelly Sikkema', alt: 'Dây kháng lực và tạ tay' },
  { match: /hương nhà|giấc ngủ/i, photo: 'photo-1654696945390-4ca4670d38e8', page: 'https://unsplash.com/photos/9pJowI7R99M', by: 'volant', alt: 'Máy khuếch tán tinh dầu ở bàn cạnh giường ngủ' },
]

export const imageFor = (name: string): IndustryImage | undefined => INDUSTRY_IMAGES.find((i) => i.match.test(name))
export const imageUrl = (i: IndustryImage, w: number): string => `https://images.unsplash.com/${i.photo}?auto=format&fit=crop&w=${w}&q=70`
