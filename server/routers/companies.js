const express = require("express");
const comapniesController = require("../controllers/companies");
const router = express.Router();

router
  .route("/")
  .get(comapniesController.findAll)
  .post(comapniesController.createCompany);

router
  .route("/:companyId")
  .get(comapniesController.findById)
  .put(comapniesController.updateCompany)
  .delete(comapniesController.deleteCompany);

module.exports = router; // end of router;
