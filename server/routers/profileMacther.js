const express = require("express");
const router = express.Router();
const profileMatcherController = require("../controllers/profileMatcher");
const checkAdmin = require("../middlewares/checkAdmin");


router
    .route("/match_cv/:jobDescriptionId")
    .get(profileMatcherController.matchCVByJobDescriptionId);

router
    .route("/match_job/:applicationId")
    .get(profileMatcherController.matchJobByApplicationId);


router
    .route("/getMatchList")
    .post(profileMatcherController.getMatchList);

// router.get('/getMatchList/',profileMatcherController.getMatchList);

module.exports = router; // end of router;
