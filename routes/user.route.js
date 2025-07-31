const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// GET semua user
router.get('/', userController.getAll);

// GET user berdasarkan ID
router.get('/:id', userController.getById);

// POST buat user baru
router.post('/', userController.create);

// PUT update user
router.put('/:id', userController.update);

// DELETE user
router.delete('/:id', userController.remove);

module.exports = router;
