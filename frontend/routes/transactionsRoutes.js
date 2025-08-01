const express = require('express');
const router = express.Router();
const axios = require('axios');

const TRANSACTION_SERVICE = process.env.TRANSACTION_SERVICE || 'http://localhost:3003/api/transactions';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(TRANSACTION_SERVICE);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil transaksi' });
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await axios.post(TRANSACTION_SERVICE, req.body);
    res.status(201).json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal membuat transaksi' });
  }
});

module.exports = router;
