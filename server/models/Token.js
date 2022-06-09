const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
    unique: true,
  },

  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 3600,
  },
});

TokenSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

TokenSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Token", TokenSchema);
