const express = require('express');
const sequelize = require('./config/db');
const db = require('./models');
const cors = require('cors');
const transactionRoutes = require('./routes/transaction.route');


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API Transaction Aktif!'));

app.use('/api/transactions', transactionRoutes);


// Koneksi ke database
sequelize.authenticate()
  .then(() => {
    console.log('✅ Terkoneksi ke MySQL');
    return db.sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('✅ Sinkronisasi selesai');
  })
  .catch((err) => {
    console.error('❌ Gagal konek:', err);
  });

const port = 3003;
app.listen(port, () => {
  console.log('🚀 Server jalan di http://localhost:'+port);
});
