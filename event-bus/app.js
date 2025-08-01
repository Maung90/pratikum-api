const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/events', async (req, res) => {
  const event = req.body;

  const services = [
    'http://localhost:3001/api/events',
    'http://localhost:3002/api/events',
    'http://localhost:3003/api/events'
  ];

  await Promise.allSettled(
    services.map(url => 
      axios.post(url, event).catch(err => {
        console.error(`❌ Gagal mengirim event ke ${url}:`, err.message);
      })
    )
  );

  res.send("Event submitted");
});

const port = 4005;
app.listen(port, () => {
  console.log(`Event bus running at http://localhost:${port}`);
});
