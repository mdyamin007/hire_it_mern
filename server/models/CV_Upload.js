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
  certifications: [{
    type: String,
  }],
  skills: [{
    type: String,
  }],
  education: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true,
  },
  skillCode:{
    type:String,
   
  },  
  certificationCode:{
    type:String,
   
  },  
  matchStartDate: {
    type: Date,
    default: null
  },
  matchEndDate: {
    type: Date,
    default: null
  }
},
{
  timestamps: true
});

CV_UploadSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

CV_UploadSchema.set("toJSON", {
  virtuals: true,
});

const CV_Upload = mongoose.model("CV_Upload", CV_UploadSchema);
CV_UploadSchema.pre(/^save|findOneAndUpdate$/, true, async function (next, done) {
  try {
    const skills = this.skills;
    console.log(skills);
    this.skillCode = ":A:";
    // done();
    next();
  }
  catch (err) { done(err); next(); }
});

module.exports = CV_Upload;
