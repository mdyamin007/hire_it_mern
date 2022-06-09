const User = require("../models/Users");

const createUser = async (user) => {
  return user.save();
};

const findById = async (userId) => {
  const foundUser = await User.findById(userId);

  if (!foundUser) {
    throw new Error(`User ${userId} not found`);
  }
  return foundUser;
};

const findAll = async () => {
  return User.find();
};

const update = async (userId, user) => {
  const foundUser = await User.findByIdAndUpdate(userId, user, { new: true });

  if (!foundUser) {
    throw new Error(`User ${userId} not found`);
  }
  return foundUser;
};

const deleteUser = async (userId) => {
  const foundUser = await User.findByIdAndDelete(userId);

  if (!foundUser) {
    throw new Error(`User ${userId} not found`);
  }
  return foundUser;
};

const findOne = async (payload) => {
  const foundUser = await User.find(payload);

  if (!foundUser) {
    throw new Error(`User not found`);
  }

  return foundUser;
};

module.exports = {
  createUser,
  findById,
  findAll,
  update,
  deleteUser,
  findOne,
};
