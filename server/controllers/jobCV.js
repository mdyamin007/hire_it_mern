const jobCVService = require("../services/jobCV");

const jobCVCreate = async (req, res) => {
    try {
        let cv = req.body;
        cv = {
            ...cv,
            cv: req.file.path,
        };
        const createdCv = await jobCVService.createJobCV(cv);
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

module.exports = {
    jobCVCreate,
    findAllJobCV,
    updateJobCV,
    deleteJobCV,
    findById,
};
