const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.route("/").get(async (req, res) => {
  res.status(200).send("Working");
});

module.exports = router;
