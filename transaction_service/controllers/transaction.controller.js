const db = require('../models');
const Transaction = db.Transaction;
const userService = require('../services/user.service');
const productService = require('../services/product.service');

exports.getAll = async (req, res) => {
  try {
    const data = await Transaction.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Transaksi tidak ditemukan' });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Panggil user_service & product_service
    const user = await userService.getUserById(userId);
    const product = await productService.getProductById(productId);

    if (!user || !product) {
      return res.status(400).json({ error: 'User atau Product tidak valid' });
    }

    const totalPrice = product.price * quantity;

    const transaction = await Transaction.create({
      userId,
      productId,
      quantity,
      totalPrice
    });

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Transaction.destroy({ where: { id: req.params.id } });
    if (deleted === 0) return res.status(404).json({ error: 'Transaksi tidak ditemukan' });
    res.json({ message: 'Transaksi dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
