const db = require('../models');
const Transaction = db.Transaction;
const User = db.User;
const Product = db.Product;

exports.getAll = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [User, Product]
    });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id, {
      include: [User, Product]
    });
    if (!transaction) return res.status(404).json({ error: 'Transaksi tidak ditemukan' });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ error: 'Produk tidak ditemukan' });
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });

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
