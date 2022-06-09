const UserService = require("../services/user");
const brypt = require("bcrypt");
const Token = require("../models/Token");
const { User, validate } = require("../models/Users");
const sendEmail = require("../utils/sendEmail");

//Post a new user
const signUp = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await UserService.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered");
    const salt = await brypt.genSalt(10);
    const hashedPassword = await brypt.hash(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    }).save();
    const token = await new Token({
      userId: newUser.id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `http://localhost:3000/singUp/${user.id}/verify/${token.token}`;
    await sendEmail(user.email, "Verify Email", url);
    res
      .status(201)
      .send({ message: "An Email sent to your account please verify it" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
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
  signUp,
  findAll,
  findById,
  updateUser,
  deleteUser,
};
