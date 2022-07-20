const mongoose = require("mongoose");
const { skillOptions, certificationOptions } = require("../utils/SelectOptions");

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
        
    const skillList = this.skills.toString().split(',');
    console.log(skillList);

    const matchSkill = skillList.map(i=>skillOptions.find(j=>i === j.value))
    // [ {value: 'Teamwork', label: 'Teamwork', code: 'A'},{value: 'Legal', label: 'Legal', code: 'B'}]
    console.log("matchSkill==>",matchSkill);
    console.log("matchSkill==>",matchSkill.length);
    if(matchSkill.length>0){
        console.log("log inside" );
        const temp = matchSkill.sort((a,b)=> a.code.length - b.code.length || a.code.charCodeAt(0) - b.code.charCodeAt(0)).map(i=>`:${i.code}:`).join("")
        console.log("temp",temp);

        this.skillCode =temp;
    }
    const certificationList = this.certifications.toString().split(',');
    console.log(certificationList);

    const matchcertifications = certificationList.map(i=>certificationOptions.find(j=>i === j.value))
    // [ {value: 'Teamwork', label: 'Teamwork', code: 'A'},{value: 'Legal', label: 'Legal', code: 'B'}]
    console.log("matchSkill==>",matchcertifications);
    console.log("matchSkill==>",matchcertifications.length);
    if(matchcertifications.length>0){
        console.log("log inside" );
        const temp = matchcertifications.sort((a,b)=> a.code.length - b.code.length || a.code.charCodeAt(0) - b.code.charCodeAt(0)).map(i=>`:${i.code}:`).join("")
        console.log("temp",temp);

        this.certificationCode =temp;
    }
  done();
  next();
}
catch (err) {
    console.log(err); done(err); next(); }
});

module.exports = CV_Upload;
