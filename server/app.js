const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const errorhandler = require("errorhandler");
const mongoose = require("mongoose");

const userRouter = require("./routers/users");
const cvRouter = require("./routers/cv");
const jobCVRouter = require("./routers/jobCV")
const companiesRouter = require("./routers/companies");
const jobsRouter = require("./routers/jobPosts");
const profileMatcherRouter = require("./routers/profileMacther");
const dummyAddDataRouter = require("./routers/addData");
const checkAdmin = require("./middlewares/checkAdmin");
const CronManager   = require('./_helper/cronManager.helper');
require("./config/passport");

const isProduction = process.env.NODE_ENV === "production";

// Create global app object
const app = express();


app.use(
  cors({
    origin: "*",
  })
);

// Normal express config defaults
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("method-override")());
app.use(express.static(__dirname + "/public"));

if (!isProduction) {
  app.use(errorhandler());
}

if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://127.0.0.1:27017/hire_it");
  mongoose.set("debug", false);
}

// routes
app.use("/api/v1/users", userRouter);
app.use(
  "/api/v1/cv",
  passport.authenticate("jwt", { session: false }),
  cvRouter
);
app.use("/api/v1/jobCV", passport.authenticate("jwt", { session: false }), jobCVRouter)
app.use("/api/v1/companies", checkAdmin, companiesRouter);
app.use("/api/v1/job_posts", jobsRouter);
app.use("/api/v1/profileMatcher", profileMatcherRouter);
app.use("/api/v1/addDummyData", dummyAddDataRouter);


/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function (err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

// finally, let's start our server...
var server = app.listen(process.env.PORT || 5000, function () {
  console.log("Listening on port " + server.address().port);
});
