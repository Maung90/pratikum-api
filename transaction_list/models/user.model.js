module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id : {primaryKey : true, autoIncrement : false, type: DataTypes.INTEGER, allowNull : false},
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return User;
};
