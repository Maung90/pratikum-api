const axios = require('axios');
require('dotenv').config();

exports.getUserById = async (id) => {
  const response = await axios.get(`${process.env.USER_SERVICE_URL}/${id}`);
  return response.data;
};
