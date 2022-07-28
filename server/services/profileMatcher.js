const Job_Description = require("../models/JobPosts");
const MATCHHELPER = require("../_helper/match.helper");
const Profile_MatcherModel = require("../models/profileMatcher");


const getCvMatch = async (jobDesId) => {
  return await MATCHHELPER.matchCV(jobDesId);
};
const getJobMatch = async (applicationId) => {
  return await MATCHHELPER.matchJob(applicationId);
};

const getMatchList = async (req, res) => {
  var payload = req.query;
  var modleObj = Profile_MatcherModel;
  const jobId = payload.job_id;
  const applicationId = payload.application_id;
  const min_score = payload.min_score ? payload.min_score : 0;
  const max_score = payload.max_score ? payload.max_score : 0;
  var searchFields = [];
  var sortingQuery = {};
  var conditionQuery = {};
  var populateQuery = [];
  var dataMatch = null;
  if (jobId) {
    dataMatch = await Profile_MatcherModel.findOne({ "JobId": jobId }).select("applicationId").lean();
    conditionQuery = { "jobId": jobId };
    var populateQuery = [
      {
        path: "applicationId",
        select: "-__v"
      }
    ];
  } else {
    dataMatch = await Profile_MatcherModel.findOne({ "applicationId": applicationId }).select("jobId").lean();
    conditionQuery = { "applicationId": applicationId };
    populateQuery = [
      {
        path: "jobId",
        select: "-__v"
      }
    ];
  }

  if (dataMatch) {

    if (min_score > 0 && max_score > 0) {
      conditionQuery.score = { $lte: max_score, $gte: min_score };
    } else if (max_score > 0) {
      conditionQuery.score = { $lte: max_score };
    } else if (min_score > 0) {
      conditionQuery.score = { $gte: min_score };
    }

    var projectionQuery = '';
    var sort = req.sort ? sort : "createdAt";
    if (sort == "createdAt") {
      sortingQuery = { createdAt: -1 };
    } else {
      sortingQuery = { Score: -1 };
    }



    MATCHHELPER.fetchDatatableRecords(payload, modleObj, searchFields, conditionQuery, projectionQuery, sortingQuery, populateQuery, function (err, data) {
      if (err) throw new Error("Something went wrong.");
      console.log("\x1b[32m%s\x1b[0m", "\n###### -- Logic Execute --######");
      const jsonString = JSON.stringify(data);
      return res.send(jsonString);
    });
  } else {
    return { "msg": "No records found" };
  }


}
module.exports = {
  getCvMatch,
  getJobMatch,
  getMatchList
};
