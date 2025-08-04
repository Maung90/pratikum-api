const express = require('express'); 
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/events', (req, res) =>{
  const event = req.body;  
  axios.post('http://localhost:3001/api/events', event); //user
  axios.post('http://localhost:3002/api/events', event); // product
  axios.post('http://localhost:3003/api/events', event); // transaksi
  axios.post('http://localhost:3009/api/events', event); // transaksi list

    res.send("event submmited");
});

const port = 4005;
app.listen(port, () => {
  console.log(`run on http://localhost:${port}`);
});