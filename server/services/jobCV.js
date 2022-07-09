const jobCV = require("../models/jobCV");

const createJobCV = async (cv) => {
    return await jobCV.create(cv);
};

const findAllJobCV = async () => {
    return jobCV.find();
};

const updateJobCV = async (cvId, cv) => {
    const foundCv = await jobCV.findByIdAndUpdate(cvId, cv, { new: true });


    return foundCv;
};

const deleteJobCV = async (cvId) => {
    const foundCv = await jobCV.findByIdAndDelete(cvId);


    return foundCv;
};

const findById = async (applicationId) => {
    const foundComapny = await jobCV.findById(applicationId);

    return foundComapny;
};

module.exports = {
    createJobCV,
    findAllJobCV,
    updateJobCV,
    deleteJobCV,
    findById,
};
