const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.route("/").get(usersController.findAll).post(usersController.signUp);

router
  .route("/:userId")
  .get(usersController.findById)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
