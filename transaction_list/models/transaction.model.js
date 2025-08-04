module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });

  return Transaction;
};
