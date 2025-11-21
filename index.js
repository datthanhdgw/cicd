const express = require('express');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Chào mừng bạn đến với trang web của tôi, chào bạn bè nhé',
  });
});

app.post('/echo', (req, res) => {
  res.json({
    received: req.body,
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

