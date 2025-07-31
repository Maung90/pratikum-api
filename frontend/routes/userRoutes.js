const express = require('express');
const router = express.Router();
const axios = require('axios');

const USER_SERVICE = process.env.USER_SERVICE || 'http://localhost:3001/api/users';

router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE}/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil user' });
  }
});

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE}/`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil user' });
  }
});

module.exports = router;
