const mongoose = require("mongoose");

const CV_UploadSchema = new mongoose.Schema({
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
    type: String,
    required: true,
  },
  certifications: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
});

CV_UploadSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

CV_UploadSchema.set("toJSON", {
  virtuals: true,
});

const CV_Upload = mongoose.model("CV_Upload", CV_UploadSchema);

module.exports = CV_Upload;
