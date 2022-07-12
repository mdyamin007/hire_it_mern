const express = require("express");
const jobCVController = require("../controllers/jobCV");

const router = express.Router();
const multer = require("multer");
const checkAdmin = require("../middlewares/checkAdmin");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/jobCV");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .get(checkAdmin, jobCVController.findAllJobCV)
  .post(upload.single("cv"), jobCVController.jobCVCreate);

router
  .route("/application/:applicationId")
  .get(checkAdmin, jobCVController.findById)
  .put(checkAdmin, jobCVController.updateJobCV)
  .delete(checkAdmin, jobCVController.deleteJobCV);

router.route("/job/:jobId").get(checkAdmin, jobCVController.findMany);

module.exports = router;
