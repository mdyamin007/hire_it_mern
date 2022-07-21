const ProfileMatcherService = require("../services/profileMatcher");
const Profile_MatcherModel = require("../models/profileMatcher");
const MATCHHELPER = require("../_helper/match.helper");

const matchCVByJobDescriptionId= async (req, res) => {
  try {
    const jobDescriptionId = req.params.jobDescriptionId;
     console.log(jobDescriptionId);
    const findJobMatch = await ProfileMatcherService.getCvMatch(
      jobDescriptionId,
    );
    // console.log(findJobMatch);
    res.status(200).json({
      message: "Match Cv with Job successfully ",
      jobDescriptionId : jobDescriptionId,
      findJobMatch: findJobMatch,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const matchJobByApplicationId= async (req, res) => {
    try {
      const applicationId = req.params.applicationId;
       console.log(applicationId);
      const findJobMatch = await ProfileMatcherService.getJobMatch(
        applicationId,
      );
      // console.log(findJobMatch);
      res.status(200).json({
        message: "Match Cv with Job successfully ",
        applicationId : applicationId,
        findJobMatch: findJobMatch,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

  const getMatchList= async (req, res) => {
    // EXPECTED BODY ==>  { "limit": 50, "page": 1, "job_id": "3433", "application_id": "6243", "min_score": 0, "max_score": 0, "search": { value: '', regex: false } ,"sort": { "createdAt":1} }
    var payload = req.body; 
    var modleObj = Profile_MatcherModel;
    const min_score =  payload.min_score? payload.min_score: 0;
    const max_score =  payload.max_score? payload.max_score: 0;
    var projectionQuery = "-__v";
    var searchFields = [];
    var sortingQuery = { createdAt: -1 };
    var conditionQuery = {};
    var populateQuery = [];
  console.log(req.body);
    if(payload.job_id){
      conditionQuery = { "jobId": payload.job_id };
      populateQuery.push({ path: "applicationId", select: "-__v -skillCode  -certificationCode"});
    }else{
      conditionQuery = { "applicationId": payload.application_id };
      populateQuery.push({ path: "jobId", select: "-__v -skillCode -certificationCode"});
    }
    // FILTER
    if (min_score>0 && max_score>0) {
      conditionQuery.score = { $lte: max_score, $gte: min_score };
    } else if (max_score>0) {
      conditionQuery.score = { $lte: max_score };
    } else if (min_score>0) {
      conditionQuery.score = { $gte: min_score };
    }
  
    // SORTING
    if(payload.sort) sortingQuery = payload.sort;
    // if(payload.sort) sortingQuery = { Score: -1 };
    
    MATCHHELPER.fetchDatatableRecords(payload, modleObj, searchFields, conditionQuery, projectionQuery, sortingQuery, populateQuery, function (err, data) {
      if (err) res.status(300).json({ success: false, message: "Something went wrong.", error: err.message, data: [] });
      const JsonData = JSON.parse(JSON.stringify(data));
      return res.status(300).json(JsonData);
    });
  
  }

module.exports = {
    matchCVByJobDescriptionId,
    matchJobByApplicationId,
    getMatchList,
}; // end of module.exports
