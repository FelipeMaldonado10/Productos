const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

// Rutas Publicas
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Rutas Protegidas (requieren autenticación)
router.post('/', auth, productController.createProduct);
router.put('/:id', auth, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
