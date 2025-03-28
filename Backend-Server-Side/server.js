const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Route imports
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes')

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mount routes
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('ASOS Ecommerce API is running');
});
app.use('/api/products', productRoutes);

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});