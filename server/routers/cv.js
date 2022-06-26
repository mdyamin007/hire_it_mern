const express = require("express");
const cvController = require("../controllers/cv_upload");
const router = express.Router();
const multer = require("multer")


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/cv")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.route("/").get(cvController.findAllCv).post(upload.single('cv'), cvController.cvUpload);

router
  .route("/:userId")
  .put(cvController.updateCv)
  .delete(cvController.deleteCv);

module.exports = router;
