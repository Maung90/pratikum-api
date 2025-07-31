require('dotenv').config();

const express = require('express');
const app = express();
const port = 4000;

app.use(express.json()); 
app.use(express.static('views'));

// Routes
const transactionRoutes = require('./routes/transactionsRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/transactions', transactionRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.get('/', (req, res) => {
  res.send('Frontend service running on port 4000');
});

app.listen(port, () => {
  console.log(`Frontend service listening at http://localhost:${port}`);
});
