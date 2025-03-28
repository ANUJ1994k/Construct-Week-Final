const Product = require('../models/productModel');

class ProductController {
  // Get all products with advanced filtering and pagination
  async getAllProducts(req, res) {
    try {
      const { 
        page = 1, 
        limit = 12, 
        sort = 'price', 
        order = 'asc',
        minPrice,
        maxPrice
      } = req.query;

      // Build query object
      const query = {};

      // Price range filtering
      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = parseFloat(minPrice);
        if (maxPrice) query.price.$lte = parseFloat(maxPrice);
      }

      // Pagination calculations
      const pageNumber = parseInt(page);
      const limitNumber = parseInt(limit);
      const skip = (pageNumber - 1) * limitNumber;

      // Sorting options
      const sortOptions = {};
      sortOptions[sort] = order === 'asc' ? 1 : -1;

      // Fetch products
      const products = await Product.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(limitNumber);

      // Total products count
      const totalProducts = await Product.countDocuments(query);

      // Calculate total pages
      const totalPages = Math.ceil(totalProducts / limitNumber);

      res.status(200).json({
        status: 'success',
        page: pageNumber,
        limit: limitNumber,
        totalProducts,
        totalPages,
        products
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error fetching products',
        error: error.message
      });
    }
  }

  // Create a new product
  async createProduct(req, res) {
    try {
      // Validate input
      const { image, description, price } = req.body;

      // Ensure price is a positive number
      if (price <= 0) {
        return res.status(400).json({
          status: 'error',
          message: 'Price must be a positive number'
        });
      }

      // Create new product
      const newProduct = new Product({
        image,
        description,
        price
      });

      // Save product
      const savedProduct = await newProduct.save();

      res.status(201).json({
        status: 'success',
        message: 'Product created successfully',
        product: savedProduct
      });
    } catch (error) {
      // Handle validation errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          status: 'error',
          message: Object.values(error.errors)
            .map(err => err.message)
            .join(', ')
        });
      }

      res.status(500).json({
        status: 'error',
        message: 'Error creating product',
        error: error.message
      });
    }
  }

  // Get a single product by ID
  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({
          status: 'error',
          message: 'Product not found'
        });
      }

      res.status(200).json({
        status: 'success',
        product
      });
    } catch (error) {
      // Handle invalid ID format
      if (error.name === 'CastError') {
        return res.status(400).json({
          status: 'error',
          message: 'Invalid product ID'
        });
      }

      res.status(500).json({
        status: 'error',
        message: 'Error fetching product',
        error: error.message
      });
    }
  }

  // Update a product
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { image, description, price } = req.body;

      // Validate price if provided
      if (price && price <= 0) {
        return res.status(400).json({
          status: 'error',
          message: 'Price must be a positive number'
        });
      }

      // Update product
      const updatedProduct = await Product.findByIdAndUpdate(
        id, 
        { image, description, price },
        { 
          new: true,  // Return updated document
          runValidators: true  // Run model validations
        }
      );

      if (!updatedProduct) {
        return res.status(404).json({
          status: 'error',
          message: 'Product not found'
        });
      }

      res.status(200).json({
        status: 'success',
        message: 'Product updated successfully',
        product: updatedProduct
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error updating product',
        error: error.message
      });
    }
  }

  // Delete a product
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;

      const deletedProduct = await Product.findByIdAndDelete(id);

      if (!deletedProduct) {
        return res.status(404).json({
          status: 'error',
          message: 'Product not found'
        });
      }

      res.status(200).json({
        status: 'success',
        message: 'Product deleted successfully',
        product: deletedProduct
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error deleting product',
        error: error.message
      });
    }
  }

  // Price range statistics
  async getPriceStatistics(req, res) {
    try {
      const priceStats = await Product.aggregate([
        {
          $group: {
            _id: null,
            minPrice: { $min: '$price' },
            maxPrice: { $max: '$price' },
            avgPrice: { $avg: '$price' },
            totalProducts: { $sum: 1 }
          }
        }
      ]);

      res.status(200).json({
        status: 'success',
        priceStatistics: priceStats[0]
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error calculating price statistics',
        error: error.message
      });
    }
  }

  // Search products by description
  async searchProducts(req, res) {
    try {
      const { query } = req.query;

      if (!query) {
        return res.status(400).json({
          status: 'error',
          message: 'Search query is required'
        });
      }

      const products = await Product.find({
        description: { $regex: query, $options: 'i' }
      });

      res.status(200).json({
        status: 'success',
        totalResults: products.length,
        products
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error searching products',
        error: error.message
      });
    }
  }
}

module.exports = new ProductController();