# VungTau Living Website - bản static mới

Đây là bộ website mới hoàn toàn, không dùng Vite/React/npm để tránh lỗi Vercel `npm install exited with 1`.

## Cấu trúc
- `index.html`: trang chủ
- `lavida-products.html`: trang loại hình sản phẩm Lavida
- `blanca-products.html`: trang loại hình sản phẩm Blanca
- `style.css`: toàn bộ giao diện
- `script.js`: menu mobile, hiệu ứng, popup bản đồ
- `assets/`: hình ảnh và logo

## Cách deploy lên Vercel
1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file trong thư mục này lên repository.
3. Vào Vercel > Add New > Project > Import repository.
4. Framework Preset: chọn `Other`.
5. Build Command: để trống.
6. Output Directory: để trống hoặc nhập `.`.
7. Bấm Deploy.

Nếu Vercel tự nhận build command, hãy xóa build command để deploy như website static.
