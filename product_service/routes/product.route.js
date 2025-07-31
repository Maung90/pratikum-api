const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// GET semua produk
router.get('/', productController.getAll);

// GET produk berdasarkan ID
router.get('/:id', productController.getById);

// POST buat produk baru
router.post('/', productController.create);

// PUT update produk
router.put('/:id', productController.update);

// DELETE produk
router.delete('/:id', productController.remove);

module.exports = router;
