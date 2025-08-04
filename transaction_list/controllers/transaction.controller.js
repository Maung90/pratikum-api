const db = require("../models");
const Transaction = db.Transaction; 
const userService = require("../services/user.service");
const productService = require("../services/product.service");
const axios = require("axios");

exports.getAll = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();

    if (!transactions || transactions.length === 0) {
      return res.json({ transactions: [], products: [], users: [] });
    }

    const userIds = [...new Set(transactions.map(t => t.userId))];
    const productIds = [...new Set(transactions.map(t => t.productId))]; 

    const [users, products] = await Promise.all([
      userService.getUserById(userIds),
      productService.getProductById(productIds)
    ]);

    const userMap = new Map(users.map(user => [user.id, user]));
    const productMap = new Map(products.map(product => [product.id, product]));

    const enrichedTransactions = transactions.map(transaction => ({
      ...transaction.toJSON(),
      user: userMap.get(transaction.userId) || null,
      product: productMap.get(transaction.productId) || null
    }));

    res.json({
      transactions: enrichedTransactions,
      users: users,
      products: products
    });

  } catch (err) {
    console.error("Error in getAll transactions:", err); 
    res.status(500).json({ error: "Failed to retrieve data.", details: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction)
      return res.status(404).json({ error: "Transaksi tidak ditemukan" });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
