const jobCVService = require("../services/jobCV");
const MATCHHELPER = require("../_helper/match.helper");

const jobCVCreate = async (req, res) => {
  try {
    let cv = req.body;
    Object.entries(cv).forEach(([key, value]) => {
      cv = {
        ...cv,
        [key]: JSON.parse(value),
      };
    });
    // console.log(cv);
    cv.education = "degree";
    cv = {
      ...cv,
      cv: req.file.path,
    };
    const createdCv = await jobCVService.createJobCV(cv);
    await MATCHHELPER.matchJob(createdCv._id);
    res.status(201).json({
      message: "CV created successfully",
      cv: createdCv,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

const findAllJobCV = async (req, res) => {
  try {
    const cv = await jobCVService.findAllJobCV();
    res.status(200).json({
      message: "CV fetched successfully",
      cv: cv,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateJobCV = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const cv = req.body;
    const updatedCv = await jobCVService.updateJobCV(applicationId, cv);
    await MATCHHELPER.matchJob(updatedCv._id);
    res.status(200).json({
      message: "CV updated successfully",
      cv: updatedCv,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteJobCV = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const deletedCv = await jobCVService.deleteJobCV(applicationId);
    res.status(200).json({
      message: "CV deleted successfully",
      cv: deletedCv,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const findById = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const data = await jobCVService.findById(applicationId);
    res.status(200).json({
      message: "CV fetched successfully",
      cv: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const findMany = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    console.log(jobId);
    const data = await jobCVService.findMany(jobId);
    console.log(data);
    res.status(200).json({
      message: "data fetched successfully",
      cv: data,
    });
  } catch (error) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  jobCVCreate,
  findAllJobCV,
  updateJobCV,
  deleteJobCV,
  findById,
  findMany,
};
