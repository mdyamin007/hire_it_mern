const UserService = require("../services/user");
const TokenService = require("../services/token");
const brypt = require("bcrypt");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//Create a new user
const signUp = async (req, res) => {
  try {
    const { error } = UserService.validateUser(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await UserService.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered");
    if (req.body.verified === true)
      return res.status(400).send({
        message: "Don't try to manipulate the request, you noob hacker :D !",
      });
    const salt = await brypt.genSalt(10);
    const hashedPassword = await brypt.hash(req.body.password, salt);
    const newUser = await UserService.createUser({
      ...req.body,
      password: hashedPassword,
    });
    const token = await TokenService.createToken({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    });
    const url = `http://localhost:5000/api/v1/users/${newUser._id}/verify/${token.token}`;
    await sendEmail(newUser.email, "Verify Email", url);
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

const verifyUser = async (req, res) => {
  try {
    const user = await UserService.findById(req.params.userId);
    if (!user) res.status(400).send({ message: "invalid link" });

    const token = await TokenService.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) res.status(400).send({ message: "invalid link" });

    await UserService.updateOne({ _id: user._id }, { verified: true });
    await TokenService.deleteToken(token._id);

    res.status(200).send({ message: "Email verified successfully!" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  signUp,
  findAll,
  findById,
  updateUser,
  deleteUser,
  verifyUser,
};
