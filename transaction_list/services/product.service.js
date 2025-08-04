const db = require('../models');
const Product = db.Product;

exports.getProductById = async (ids) => {
  return await Product.findAll({
    where: {
      id: ids
    }
  });
};
