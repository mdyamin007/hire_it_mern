const mongoose = require("mongoose");

const CV_UploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  organization: {
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
  sectorOfJob: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  fileDescription: {
    type: String,
    required: true,
  },
  detailsJobDescription: {
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
