const mongoose = require("mongoose");

const CompaniesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
    unique: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
  },
  companyPhone: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },
  companyWebsite: {
    type: String,
    required: true,
  },

  companyDescription: {
    type: String,
    required: true,
  },
});

const Companies = mongoose.model("Companies", CompaniesSchema);

module.exports = Companies;
