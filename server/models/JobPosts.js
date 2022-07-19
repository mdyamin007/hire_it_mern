const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Companies",
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
  },
  certifications: [
    {
      type: String,
    },
  ],
  skills: [
    {
      type: String,
    },
  ],
  education: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
});

JobPostSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

JobPostSchema.set("toJSON", {
  virtuals: true,
});

const JobPost = mongoose.model("Job_Posts", JobPostSchema);

module.exports = JobPost;
