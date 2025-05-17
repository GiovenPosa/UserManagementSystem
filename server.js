const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use((req, res, next) => {
  console.log(`➡️ Incoming ${req.method} request to ${req.url}`);
  next();
});

app.use(express.json());

// Enable CORS for React Project
app.use(cors());

// added this as protected route
// this is where we verify the JWT token
// allows only authenticated users to access certain routes
const authenticateToken = require('./middleware/authMiddleware.js');

app.get('/', (req, res) => {
  res.send('Welcome to the UserManagementAPI');
});

app.get('/profile', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Welcome to your profile', 
    user: req.user // decoded user info from the token.
  });
});

const authRoutes = require('./routes/authRoutes.js');
app.use('/api', authRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

console.log("Running SERVER...");
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});