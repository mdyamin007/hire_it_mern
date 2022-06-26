const CV_UploadService = require("../services/cvUpload");

const cvUpload = async (req, res) => {
  try {
    let cv = req.body;
    cv = {
      ...cv,
      cv: req.file.path
    }
    const createdCv = await CV_UploadService.upLoadCv(cv);
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
    const cv = await CV_UploadService.findAllCv();
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
    const cvId = req.params.cvId;
    const cv = req.body;
    const updatedCv = await CV_UploadService.updateCv(cvId, cv);
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
    const cvId = req.params.cvId;
    const deletedCv = await CV_UploadService.deleteCv(cvId);
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

module.exports = {
  cvUpload,
  findAllCv,
  updateCv,
  deleteCv,
};
