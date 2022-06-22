const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  jobDescription: {
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
  industry: {
    type: String,
    required: true,
  },
  consultantName: {
    type: String,
    required: false,
  },
  salaryRange: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  }
});

JobPostSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

JobPostSchema.set("toJSON", {
  virtuals: true,
});

const JobPost = mongoose.model(
  "JobPost",
  JobPostSchema,
);

module.exports = JobPost;
