const mongoose = require("mongoose");

const profileMatcherSchema = new mongoose.Schema({

  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Job_Posts'
  },
  applicationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'CV_Upload'
  },
 score: {
    type: Number,
    required: true
  }},{
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
