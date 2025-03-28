const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/search', productController.searchProducts);
router.get('/price-stats', productController.getPriceStatistics);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;