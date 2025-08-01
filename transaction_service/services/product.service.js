const db = require('../models');
const Product = db.Product;

exports.getProductById = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};
