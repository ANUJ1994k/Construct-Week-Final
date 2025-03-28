const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Product image URL is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative'],
    // Ensure price is always stored with two decimal places
    get: v => Number(v.toFixed(2)),
    set: v => Number(v.toFixed(2))
  }
}, {
  timestamps: true,
  toJSON: { getters: true },
  toObject: { getters: true }
});

// Optional: Add an index to improve query performance
ProductSchema.index({ price: 1 });

module.exports = mongoose.model('Product', ProductSchema);