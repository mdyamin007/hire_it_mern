const { User, validate } = require("../models/Users");

const createUser = async (user) => {
  return await User.create(user);
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

const updateOne = async (filter, updateData) => {
  const foundUser = await User.updateOne(filter, updateData);

  if (!foundUser) {
    throw new Error(`User ${data._id} not found`);
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
  return await User.findOne(payload);
};

const validateUser = async (data) => {
  return validate(data);
};

module.exports = {
  createUser,
  findById,
  findAll,
  update,
  deleteUser,
  findOne,
  validateUser,
  updateOne,
};
