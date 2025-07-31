const express = require('express');
const sequelize = require('./config/db');
const db = require('./models');
const cors = require('cors');
const userRoutes = require('./routes/user.route');


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API Users aktif!'));

app.use('/api/users', userRoutes);

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

const port = 3001;
app.listen(port, () => {
  console.log('🚀 Server jalan di http://localhost:'+port);
});
