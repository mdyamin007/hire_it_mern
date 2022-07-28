const mongoose = require("mongoose");
const { skillOptions, certificationOptions } = require("../utils/SelectOptions");

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
  skillCode: {
    type: String,

  },
  certificationCode: {
    type: String,

  },
  matchStartDate: {
    type: Date,
    default: null,
    index: true,
  },
  matchEndDate: {
    type: Date,
    default: null
  },
  customUpdatedAt: {
    type: Date,
    default: null
  },
  pastSearchCompleted: {
    type: Boolean,
    default: false
  }
},
  {
    timestamps: true
  });

JobPostSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

JobPostSchema.set("toJSON", {
  virtuals: true,
});

JobPostSchema.pre(/^save|findOneAndUpdate$/, true, async function (next, done) {
  try {

    const skillList = this.skills;

    var matchSkill = skillList.map(i => skillOptions.find(j => i === j.value));
    matchSkill = matchSkill.filter(function (element) {
      return element !== undefined;
    });
    if (matchSkill.length > 0) {
      const temp = matchSkill.sort((a, b) => a.code.length - b.code.length || a.code.charCodeAt(0) - b.code.charCodeAt(0)).map(i => `:${i.code}:`).join("");

      this.skillCode = temp;
    }
    const certificationList = this.certifications;

    var matchcertifications = certificationList.map(i => certificationOptions.find(j => i === j.value));
    matchcertifications = matchcertifications.filter(function (element) {
      return element !== undefined;
    });
    if (matchcertifications.length > 0) {
      const temp = matchcertifications.sort((a, b) => a.code.length - b.code.length || a.code.charCodeAt(0) - b.code.charCodeAt(0)).map(i => `:${i.code}:`).join("");
      this.certificationCode = temp;
    }
    if (this.isNew) {
      this.customUpdatedAt = this.createdAt; //new Date();
    } else {
      var _query = {
        '_id': this._id,
        'skillCode': this.skillCode,
        'certificationCode': this.certificationCode,
        'education': this.education
      };
      const record = await mongoose.models["Job_Posts"].findOne(_query);
      if (!record) {
        this.customUpdatedAt = new Date();
      }

    }
    done();
    next();
  }
  catch (err) {
    console.log(err); done(err); next();
  }
});

const JobPost = mongoose.model("Job_Posts", JobPostSchema);

module.exports = JobPost;
