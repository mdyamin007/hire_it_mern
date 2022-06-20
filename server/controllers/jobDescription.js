const JobDesService = require("../services/jobDescription");

const createJobDescription = async (req, res) => {
  try {
    const jobDescription = req.body;
    const createdJobDescription = await JobDesService.createJob_Description(
      jobDescription,
    );
    res.status(201).json({
      message: "JobDescription created successfully",
      jobDescription: createdJobDescription,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of createJobDescription
const findAllJobDescriptions = async (req, res) => {
  try {
    const jobDescriptions = await JobDesService.findAllJob_Descriptions();
    res.status(200).json({
      message: "JobDescriptions fetched successfully",
      jobDescriptions: jobDescriptions,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of findAllJobDescriptions
const findJobDescriptionById = async (req, res) => {
  try {
    const jobDescriptionId = req.params.jobDescriptionId;
    const jobDescription = await JobDesService.findJob_DescriptionById(
      jobDescriptionId,
    );
    res.status(200).json({
      message: "JobDescription fetched successfully",
      jobDescription: jobDescription,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of findJobDescriptionById
const updateJobDescription = async (req, res) => {
  try {
    const jobDescriptionId = req.params.jobDescriptionId;
    const jobDescription = req.body;
    const updatedJobDescription = await JobDesService.updateJob_Description(
      jobDescriptionId,
      jobDescription,
    );
    res.status(200).json({
      message: "JobDescription updated successfully",
      jobDescription: updatedJobDescription,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of updateJobDescription

const deleteJobDescription = async (req, res) => {
  try {
    const jobDescriptionId = req.params.jobDescriptionId;
    const deletedJobDescription = await JobDesService.deleteJob_Description(
      jobDescriptionId,
    );
    res.status(200).json({
      message: "JobDescription deleted successfully",
      jobDescription: deletedJobDescription,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of deleteJobDescription
module.exports = {
  createJobDescription,
  findAllJobDescriptions,
  findJobDescriptionById,
  updateJobDescription,
  deleteJobDescription,
}; // end of module.exports
