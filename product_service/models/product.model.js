module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
  });
  return Product;
};
