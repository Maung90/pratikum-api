const axios = require('axios');
require('dotenv').config();

exports.getProductById = async (id) => {
  const response = await axios.get(`${process.env.PRODUCT_SERVICE_URL}/${id}`);
  return response.data;
};
