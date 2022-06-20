const express = require("express");
const cvController = require("../controllers/cv_upload");
const router = express.Router();

router.route("/").get(cvController.findAllCv).post(cvController.cvUpload);

router
  .route("/:userId")
  .put(cvController.updateCv)
  .delete(cvController.deleteCv);

module.exports = router;
