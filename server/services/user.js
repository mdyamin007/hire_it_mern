const { User, validate } = require("../models/Users");

const createUser = async (user) => {
  return await User.create(user);
};

const findById = async (userId) => {
  const foundUser = await User.findById(userId);

  return foundUser;
};

const findAll = async () => {
  return User.find();
};

const update = async (userId, user) => {
  const foundUser = await User.findByIdAndUpdate(userId, user, { new: true });

  return foundUser;
};

const updateOne = async (filter, updateData) => {
  const foundUser = await User.updateOne(filter, updateData);


  return foundUser;
};

const deleteUser = async (userId) => {
  const foundUser = await User.findByIdAndDelete(userId);


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
