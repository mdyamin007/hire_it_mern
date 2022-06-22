const Job_Description = require("../models/JobPosts");

const createJob_Description = async (jobDescription) => {
  return await Job_Description.create(jobDescription);
};
const findAllJob_Descriptions = async () => {
  return await Job_Description.find();
};
const findJob_DescriptionById = async (jobDesId) => {
  return await Job_Description.findById(jobDesId);
};
const updateJob_Description = async (jobDesId, jobDescription) => {
  return await Job_Description.update(jobDesId, jobDescription);
};
const deleteJob_Description = async (jobDesId) => {
  return await Job_Description.delete(jobDesId);
};
module.exports = {
  createJob_Description,
  findAllJob_Descriptions,
  findJob_DescriptionById,
  updateJob_Description,
  deleteJob_Description,
};
