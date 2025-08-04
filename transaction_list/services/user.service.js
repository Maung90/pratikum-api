const db = require('../models');
const User = db.User;

exports.getUserById = async (ids) => {
  return await User.findAll({
    where: {
      id: ids
    }
  });
};
