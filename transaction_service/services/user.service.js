const db = require('../models');
const User = db.User;

exports.getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};
