module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
  });
  Transaction.associate = (models) => {
    Transaction.belongsTo(models.User);
    Transaction.belongsTo(models.Product);
  };
  return Transaction;
};
