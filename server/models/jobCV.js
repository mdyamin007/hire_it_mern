const mongoose = require("mongoose");

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
    major: {
        type: String,
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job_Posts",
        required: true,
    }
});

jobCVSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

jobCVSchema.set("toJSON", {
    virtuals: true,
});

const jobCV = mongoose.model("jobCV", jobCVSchema);

module.exports = jobCV;
