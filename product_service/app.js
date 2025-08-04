const express = require('express');
const sequelize = require('./config/db');
const db = require('./models');
const cors = require('cors');
const productRoutes = require('./routes/product.route');
const eventRoutes = require('./routes/event.route');


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API Product aktif!'));

app.use('/api/products', productRoutes);
app.use('/api/events', eventRoutes);

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

const port = 3002;
app.listen(port, () => {
  console.log('🚀 Server jalan di http://localhost:'+port);
});
