const CV_Upload = require("../models/CV_Upload");

const upLoadCv = async (cv) => {
  return await CV_Upload.create(cv);
};

const findAllCv = async () => {
  return CV_Upload.find();
};

const updateCv = async (cvId, cv) => {
  const foundCv = await CV_Upload.findByIdAndUpdate(cvId, cv, { new: true });


  return foundCv;
};

const deleteCv = async (cvId) => {
  const foundCv = await CV_Upload.findByIdAndDelete(cvId);


  return foundCv;
};

const findById = async (applicationId) => {
  const foundComapny = await CV_Upload.findById(applicationId);

  return foundComapny;
};

module.exports = {
  upLoadCv,
  findAllCv,
  updateCv,
  deleteCv,
  findById,
};
