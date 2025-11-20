# Ứng dụng Node.js đơn giản

Ứng dụng này sử dụng [Express](https://expressjs.com/) để cung cấp một API nhỏ với các endpoint cơ bản.

## Cài đặt

```bash
npm install
```

## Chạy ứng dụng

- Chạy chế độ thường: `npm start`
- Chạy chế độ phát triển (tự động reload khi thay đổi): `npm run dev`

Ứng dụng mặc định chạy tại `http://localhost:3000`.

## Các endpoint chính

- `GET /` trả về lời chào.
- `GET /health` kiểm tra tình trạng ứng dụng.
- `POST /echo` nhận dữ liệu JSON và trả lại cùng nội dung.

Bạn có thể dùng `curl` hoặc bất kỳ công cụ API client nào (Postman, Thunder Client,...) để thử các endpoint này.

