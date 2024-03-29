const mongoose = require("mongoose");
const { skillOptions, certificationOptions } = require("../utils/SelectOptions");


const jobCVSchema = new mongoose.Schema({
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
    skillCode: {
        type: String

    },
    certificationCode: {
        type: String

    },
    major: {
        type: String,
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job_Posts"
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
    }
},
    {
        timestamps: true
    });

jobCVSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

jobCVSchema.set("toJSON", {
    virtuals: true,
});

jobCVSchema.pre(/^save|findOneAndUpdate$/, true, async function (next, done) {
    try {
        // const skillList = this.skills.toString().split(',');
        const skillList = this.skills;
        // console.log(skillList);

        var matchSkill = skillList.map(i => skillOptions.find(j => i === j.value))
        // [ {value: 'Teamwork', label: 'Teamwork', code: 'A'},{value: 'Legal', label: 'Legal', code: 'B'}]
        matchSkill = matchSkill.filter(function (element) {
            return element !== undefined;
        });
        // console.log("matchSkill==>", matchSkill);
        // console.log("matchSkill==>", matchSkill.length);
        if (matchSkill.length > 0) {
            // console.log("log inside");
            const temp = matchSkill.sort((a, b) => a.code.length - b.code.length || a.code.charCodeAt(0) - b.code.charCodeAt(0)).map(i => `:${i.code}:`).join("")
            // console.log("temp", temp);

            this.skillCode = temp;
        }
        // console.log(this.certifications);
        // const certificationList = this.certifications.toString().split(',');
        const certificationList = this.certifications;
        // console.log(certificationList);

        var matchcertifications = certificationList.map(i => certificationOptions.find(j => i === j.value));
        matchcertifications = matchcertifications.filter(function (element) {
            return element !== undefined;
        });

        // console.log("matchSkill==>", matchcertifications);
        console.log("matchSkill==>", matchcertifications.length);
        if (matchcertifications.length > 0) {
            // console.log("log inside");
            const temp = matchcertifications.sort((a, b) => a.code.length - b.code.length || a.code.charCodeAt(0) - b.code.charCodeAt(0)).map(i => `:${i.code}:`).join("")
            // console.log("temp", temp);

            this.certificationCode = temp;
        }
        if (this.isNew) {

            this.customUpdatedAt = this.createdAt;
        } else {
            var _query = {
                '_id': this._id,
                'skillCode': this.skillCode,
                'certificationCode': this.certificationCode,
                'education': this.education
            };
            const record = await mongoose.models["jobCV"].findOne(_query);
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

const jobCV = mongoose.model("jobCV", jobCVSchema);

module.exports = jobCV;