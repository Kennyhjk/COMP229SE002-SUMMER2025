// express.js (CJS 최종본)
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');

// ⛳ 라우터(CJS)
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const contactRoutes = require('./routes/contact.routes.js');

const app = express();

/** Core middlewares (routes보다 먼저) */
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** CORS (로컬 + 배포 도메인 허용) */
app.use(cors({
  origin: [
    'http://localhost:5173',                       // Vite dev
    'https://my-awesome-project-id-5c03c.web.app', // Firebase Hosting
  ],
  credentials: true, // 쿠키 인증이면 필요
}));

/** Health check */
app.get('/health', (_, res) => res.send('ok'));

/** Routes — 프론트는 /api/... 로 호출 */
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

/** Error handler */
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

/** Start server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server on', PORT));
