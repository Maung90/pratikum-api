module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
  });

  return Transaction;
};
