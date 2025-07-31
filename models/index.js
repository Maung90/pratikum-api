const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, DataTypes);
db.Product = require('./product.model')(sequelize, DataTypes);
db.Transaction = require('./transaction.model')(sequelize, DataTypes);

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;
