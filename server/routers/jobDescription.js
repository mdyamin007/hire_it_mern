const express = require("express");
const router = express.Router();
const jobDesController = require("../controllers/jobDescription");

router
  .route("/")
  .get(jobDesController.findAllJobDescriptions)
  .post(jobDesController.createJobDescription);

router
  .route("/:jobDesId")
  .get(jobDesController.findJobDescriptionById)
  .put(jobDesController.updateJobDescription)
  .delete(jobDesController.deleteJobDescription);

module.exports = router; // end of router;
