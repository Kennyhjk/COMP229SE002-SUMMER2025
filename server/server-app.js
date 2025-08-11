// functions/server-app.js  (CJS, listen 없음)
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

// 복사해온 경로 기준
const userRoutes = require('./server/routes/user.routes.js');
const authRoutes = require('./server/routes/auth.routes.js');
const contactRoutes = require('./server/routes/contact.routes.js');

const app = express();

// (선택) MongoDB 연결
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Mongo connected'))
    .catch((e) => console.error('Mongo error', e));
}

// 미들웨어
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (로컬 + Hosting)
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://my-awesome-project-id-5c03c.web.app',
  ],
  credentials: true,
}));

// 헬스
app.get('/health', (_, res) => res.send('ok'));

// 라우트 (최종: /api/...)
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// 에러 핸들러
app.use((err, req, res, next) => {
  if (err && err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: `${err.name}: ${err.message}` });
  }
  if (err) {
    console.error(err);
    return res.status(400).json({ error: `${err.name}: ${err.message}` });
  }
  next();
});

module.exports = app;
