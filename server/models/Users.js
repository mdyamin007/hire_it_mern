const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  verified: {
    type: Boolean,
    default: false,
  },
});

UserSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

UserSchema.set("toJSON", {
  virtuals: true,
});

UserSchema.methods.generateAuthToken = () => {
  const token = jwt.sign(
    {
      _id: this.id,
      email: this.email,
      password: this.password,
    },
    process.env.JWTPRIVATEKEY,
    {
      expiresIn: "7d",
    }
  );
  return token;
};

const User = mongoose.model("User", UserSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity({
      min: 8,
      max: 26,
      lowerCase: 1,
      upperCase: 0,
      numeric: 1,
      symbol: 0,
      requirementCount: 4,
    })
      .required()
      .label("Password"),
    verified: Joi.boolean().default(false).label("Verified"),
  });
  return schema.validate(data);
};
module.exports = { User, validate };
