require('dotenv').config();
console.log(" JWT_SECRET:", process.env.JWT_SECRET);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const contactRoutes = require('./server/routes/contact.routes.js');
const projectRoutes = require('./server/routes/project.routes.js');
const qualificationRoutes = require('./server/routes/qualification.routes.js');
const userRoutes = require('./server/routes/user.routes.js');
const authRoutes = require('./server/routes/auth.routes.js');

const app = express();
app.use(cors());
app.use(express.json());

// 1) Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.info('Database connection established.');

    // 2) Start the server when DB connection is successful
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.info(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

// 3) Health check route
app.get('/', (req, res) => res.send('Hello API'));

// 4) Contact routing
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);




