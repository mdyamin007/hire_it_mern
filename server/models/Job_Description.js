const mongoose = require("mongoose");

const Job_DescriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  subIndustry: {
    type: String,
    required: true,
  },

  sector: {
    type: String,
    required: true,
  },
  subSector: {
    type: String,
    required: true,
  },
  currentSalary: {
    type: Number,
    required: true,
  },
});

Job_DescriptionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

Job_DescriptionSchema.set("toJSON", {
  virtuals: true,
});

const Job_Description = mongoose.model(
  "Job_Description",
  Job_DescriptionSchema,
);

module.exports = Job_Description;
