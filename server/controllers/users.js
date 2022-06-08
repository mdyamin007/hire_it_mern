const User = require("../models/Users");
const UserService = require("../services/user");

//Post a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await UserService.createUser(user);

    res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Get all users
const findAll = async (req, res, next) => {
  try {
    const users = await UserService.findAll();
    res.status(200).json({
      message: "Users fetched successfully",
      users: users,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Get a user by id
const findById = async (req, res) => {
  try {
    const user = await UserService.findById(req.params.userId);
    res.status(200).json({
      message: "User fetched successfully",
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Update a user
const updateUser = async (req, res) => {
  try {
    const update = req.body;
    const userId = req.params.userId;
    const updateUser = await UserService.update(userId, update);
    res.json(updateUser);
    res.status(200).json({
      message: "User updated successfully",
      user: updateUser,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.userId);
    res.status(204).json({
      message: "User deleted successfully",
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Get a user by email

module.exports = {
  createUser,
  findAll,
  findById,
  updateUser,
  deleteUser,
};
