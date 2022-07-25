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
    const foundCV = await jobCV.findById(applicationId);

    return foundCV;
};

const findMany = async (filter) => {
    const found = await jobCV.find({ jobId: filter })
    return found
}

module.exports = {
    createJobCV,
    findAllJobCV,
    updateJobCV,
    deleteJobCV,
    findById,
    findMany,
};
