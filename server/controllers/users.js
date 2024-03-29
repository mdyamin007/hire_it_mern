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
    if (!req.body.email && !req.body.password)
      return res.status(400).send({ message: "User/Email must be given!" });
    const user = await UserService.findOne({ email: req.body.email });
    if (user) {
      if (user.verified === true)
        return res.status(400).send({ message: "User already registered" });
      else
        return res.status(400).send({ message: "Please check and verify your email" });
    }
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
    const url = `${process.env.CLIENT_URL}/verify/${newUser._id}/${token.token}`;
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

    if (user && user.verified === true) {
      return res.status(400).send({ message: "User already verified" })
    }

    if (!user) return res.status(400).send({ message: "invalid link" });

    const token = await TokenService.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) return res.status(400).send({ message: "invalid link" });

    await UserService.updateOne({ _id: user._id }, { verified: true });
    await TokenService.deleteToken(token._id);

    return res.status(200).send({ message: "Email verified successfully!" });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.findOne({ email });

    if (!user)
      return res.status(400).send({ message: "Email is not registered" });

    const compare = await user.isValidPassword(password);
    if (!compare)
      return res.status(400).send({ message: "Password is incorrect!" });

    if (!user.verified) {
      const foundToken = await TokenService.findOne({ userId: user._id });
      if (foundToken) {
        return res.status(400).send({
          message:
            "An email already has sent to your email. Please resend it again after 5 minutes",
        });
      }
      const token = await TokenService.createToken({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      });
      const url = `${process.env.CLIENT_URL}/verify/${user._id}/${token.token}`;
      await sendEmail(user.email, "Verify Email", url);
      return res
        .status(400)
        .send({ message: "An Email sent to your account please verify it" });
    }

    const token = await user.generateAuthToken();
    res.status(200).send({
      message: "Logged in successfully!",
      userId: user._id,
      userType: user.userType,
      authToken: `Bearer ${token}`,
    });
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
  loginUser,
};
