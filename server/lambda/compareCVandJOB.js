const mongoose = require("mongoose");
const { Schema, connect } = mongoose;

const jobchema = new mongoose.Schema(
  {
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
      default: null,
    },
    customUpdatedAt: {
      type: Date,
      default: null,
    },
    pastSearchCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const jobcv = new mongoose.Schema(
  {
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
    skillCode: {
      type: String,
    },
    certificationCode: {
      type: String,
    },
    major: {
      type: String,
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job_Posts",
    },
    matchStartDate: {
      type: Date,
      default: null,
      index: true,
    },
    matchEndDate: {
      type: Date,
      default: null,
    },
    customUpdatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
const profileMatcherSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Job_Posts",
      index: true,
    },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "jobCV",
      index: true,
    },
    skillScore: {
      type: Number,
      required: true,
    },
    certificationScore: {
      type: Number,
      required: true,
    },
    educationScore: {
      type: Number,
      required: true,
    },
    matchFieldCount: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

profileMatcherSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

profileMatcherSchema.set("toJSON", {
  virtuals: true,
});

const JobPost = mongoose.model("Job_Posts", jobchema);
const jobCV = mongoose.model("jobCV", jobcv);
const profileMatcher = mongoose.model("profileMatcher", profileMatcherSchema);
connect("mongodb+srv://status:status@cluster0.jnsv4.mongodb.net/hire_it", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then();

exports.handler = async (event) => {
  event.body = JSON.parse(event.body);
  var data = event?.body;

  var cvArray = [],
    jobArray = [];
  for (let i = 0; i < data.length; i++) {
    let { cvId, jobId } = data[i];
    cvArray.push(cvId);
    jobArray.push(jobId);
  }

  cvArray = [...new Set(cvArray)];
  jobArray = [...new Set(jobArray)];

  jobArray = await JobPost.find({
    _id: {
      $in: jobArray,
    },
  });
  cvArray = await jobCV.find({
    _id: {
      $in: cvArray,
    },
  });

  for (let i = 0; i < cvArray.length; i++) {
    for (let j = 0; j < jobArray.length; j++) {
      var jobObj = jobArray[j];
      var applicationCV = cvArray[i];

      applicationCV.skillCode = applicationCV.skillCode
        ? applicationCV.skillCode
        : "";
      var skillRegex = applicationCV.skillCode.replace(/::/g, ":|:");
      var skillArray = skillRegex.replace(/:/g, "").split("|");
      if (skillArray.length == 1 && skillArray[0] == "") {
        skillRegex = "";
        skillArray = [];
      }

      applicationCV.certificationCode = applicationCV.certificationCode
        ? applicationCV.certificationCode
        : "";
      var certificationsRegex = applicationCV.certificationCode.replace(
        /::/g,
        ":|:"
      );
      var certificationsArray = certificationsRegex
        .replace(/:/g, "")
        .split("|");
      if (certificationsArray.length == 1 && certificationsArray[0] == "") {
        certificationsRegex = "";
        certificationsArray = [];
      }

      let matchFieldCount = 0;
      let skillMatchCount = 0;
      let educationMatchCount = 0;
      let certificationMatchCount = 0;
      let skillScore = 0;
      let certificationScore = 0;
      let applicantScore = 0;

      jobObj.skillCode = jobObj.skillCode ? jobObj.skillCode : "";
      let jobSkillArray = jobObj.skillCode
        .replace(/::/g, "|")
        .replace(/:/g, "")
        .split("|");

      jobObj.certificationCode = jobObj.certificationCode
        ? jobObj.certificationCode
        : "";
      let jobCertificationsArray = jobObj.certificationCode
        .replace(/::/g, "|")
        .replace(/:/g, "")
        .split("|");

      if (jobSkillArray.length == 1 && jobSkillArray[0] == "") {
        jobSkillArray = [];
      }
      if (
        jobCertificationsArray.length == 1 &&
        jobCertificationsArray[0] == ""
      ) {
        jobCertificationsArray = [];
      }

      let jobSkillReqCount = skillArray.length;
      let jobCertificatoinReqCount = certificationsArray.length;

      if (jobSkillReqCount > 0) {
        matchFieldCount++;
        for (let i = 0; i < jobSkillArray.length; i++) {
          if (skillArray.indexOf(jobSkillArray[i]) > -1) {
            skillMatchCount++;
          }
        }
        skillScore = Math.ceil((skillMatchCount * 100) / jobSkillReqCount);
      }

      if (jobCertificatoinReqCount > 0) {
        matchFieldCount++;
        for (let i = 0; i < jobCertificationsArray.length; i++) {
          if (certificationsArray.indexOf(jobCertificationsArray[i]) > -1) {
            certificationMatchCount++;
          }
        }
        certificationScore = Math.ceil(
          (certificationMatchCount * 100) / jobCertificatoinReqCount
        );
      }

      matchFieldCount++;
      if (jobObj.education == applicationCV.education) {
        educationMatchCount = 100;
      } else {
        educationMatchCount = 50;
      }
      applicantScore = Math.ceil(
        (skillScore + certificationScore + educationMatchCount) /
          matchFieldCount
      );

      var matcherObject = {
        jobId: jobObj._id,
        applicationId: cvId,
        skillScore: skillScore,
        certificationScore: certificationScore,
        educationScore: educationMatchCount,
        matchFieldCount: matchFieldCount,
        score: applicantScore,
      };

      await profileMatcher.updateOne(
        {
          jobId: jobObj._id,
          applicationId: cvId,
        },
        {
          $set: matcherObject,
        },
        {
          upsert: true,
          new: true,
        }
      );
      if (data.length === i + 1) {
        const response = {
          statusCode: 200,
          body: "success",
        };
        return response;
      }
    }
  }
};
