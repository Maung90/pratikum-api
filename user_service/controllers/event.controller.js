const axios = require('axios');

exports.event = async (req, res) => {
  try {
    const events = req.body;
    // await axios.post("http://localhost:4005/events");
    
    // console.log('user created', events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
