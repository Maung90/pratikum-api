const express = require('express');
const router = express.Router();
const axios = require('axios');

const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE || 'http://localhost:3002/api/products';

router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE}/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil product' });
  }
});

module.exports = router;
