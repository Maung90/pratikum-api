const db = require('../models');
const axios = require('axios');
const Product = db.Product;

exports.getAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Produk tidak ditemukan' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try { 
    const product = await Product.create(req.body);
     await axios.post("http://localhost:4005/events", {
          type: "ProductCreated",
          data: product,
        });
        // console.log(product);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try { 
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated === 0) return res.status(404).json({ error: 'Produk tidak ditemukan' });
    await axios.post("http://localhost:4005/events", {
          type: "ProductUpdated",
          data: req.body,
          id: req.params.id,
        });
    res.json({ message: 'Produk diperbarui' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id }
    }); 
    if (deleted === 0) return res.status(404).json({ error: 'Produk tidak ditemukan' });
    await axios.post("http://localhost:4005/events", {
          type: "ProductDeleted",
          data: req.params.id,
        });
    res.json({ message: 'Produk dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
