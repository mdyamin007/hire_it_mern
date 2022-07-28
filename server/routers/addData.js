const express = require("express");
const router = express.Router();
const addDataController = require("../controllers/addData");
const checkAdmin = require("../middlewares/checkAdmin");


router
    .route("/add_dummy_jobs")
    .post(addDataController.addDummyJobs);

router
    .route("/add_dummy_cvs")
    .post(addDataController.addDummyCvs);

// router.get('/getMatchList/',profileMatcherController.getMatchList);

module.exports = router; // end of router;
