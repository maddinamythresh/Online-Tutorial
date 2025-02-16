const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authController = require('./controllers/authControllers');
const authMiddleware = require('./middlewares/authMiddlewares');
const cors=require('cors');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Routes
app.post('/signup', authController.signup);
app.post('/api/auth/login', authController.login);

// Protected route
app.get('/protected', authMiddleware.verifyToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
