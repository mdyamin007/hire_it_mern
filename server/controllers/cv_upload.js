const JobCVService = require("../services/jobCV");
const MATCHHELPER = require("../_helper/match.helper");

const cvUpload = async (req, res) => {
  try {
    let cv = req.body;
    Object.entries(cv).forEach(([key, value]) => {
      cv = {
        ...cv,
        [key]: JSON.parse(value),
      };
    });
    cv = {
      ...cv,
      cv: req.file.path
    }
    const createdCv = await JobCVService.createJobCV(cv);
    console.log('Before call matchJob');
    MATCHHELPER.matchJob(createdCv._id);
    console.log('After call matchJob');
    res.status(201).json({
      message: "CV created successfully",
      cv: createdCv,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const findAllCv = async (req, res) => {
  try {
    const cv = await JobCVService.findAllJobCV();
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

const updateCv = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const cv = req.body;
    const updatedCv = await JobCVService.updateJobCV(applicationId, cv);
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

const deleteCv = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const deletedCv = await JobCVService.deleteJobCV(applicationId);
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
    const data = await JobCVService.findById(applicationId);
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

module.exports = {
  cvUpload,
  findAllCv,
  updateCv,
  deleteCv,
  findById,
};
