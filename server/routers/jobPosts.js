const express = require("express");
const router = express.Router();
const jobPostController = require("../controllers/jobPosts");
const checkAdmin = require("../middlewares/checkAdmin");

router
  .route("/")
  .get(jobPostController.findAllJobDescriptions)
  .post(checkAdmin, jobPostController.createJobDescription);

router
  .route("/:jobDescriptionId")
  .get(jobPostController.findJobDescriptionById)
  .put(checkAdmin, jobPostController.updateJobDescription)
  .delete(checkAdmin, jobPostController.deleteJobDescription);

module.exports = router; // end of router;
