const mongoose = require("mongoose");

const profileMatcherSchema = new mongoose.Schema({

  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Job_Posts',
    index:true,
  },
  applicationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'jobCV',
    index:true,
  },
  skillScore: {
    type: Number,
    required: true
  },
  certificationScore: {
    type: Number,
    required: true
  },
  educationScore: {
    type: Number,
    required: true
  },
  matchFieldCount: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true,
    index:true,
  }
}, {
  timestamps: true
});

profileMatcherSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

profileMatcherSchema.set("toJSON", {
  virtuals: true,
});

const profileMatcher = mongoose.model(
  "profileMatcher",
  profileMatcherSchema,
);

module.exports = profileMatcher;
