const JOBPOSTSMODEL = require("../models/JobPosts");
const JOBCVMODEL = require("../models/jobCV");
const Profile_MatcherModel = require("../models/profileMatcher");
const moment = require("moment");

module.exports = {

  matchCV: async (jobId) => {

    try {
      var searchStartDate = null;
      var searchEndDate = null;
      var whereQuery = {};
      var firstRecord = await JOBCVMODEL.find().sort({ 'customUpdatedAt': -1 }).limit(1);
      var lastRecord = await JOBCVMODEL.find().sort({ 'customUpdatedAt': -1 }).limit(1).skip(100);

      if (firstRecord.length > 0) {
        searchStartDate = firstRecord[0].updatedAt;
      }
      if (lastRecord.length > 0) {
        searchEndDate = lastRecord[0].updatedAt;
      }

      var jobPosts = await JOBPOSTSMODEL.findById({ _id: jobId });

      jobPosts.skillCode = jobPosts.skillCode ? jobPosts.skillCode : '';
      var skillRegex = jobPosts.skillCode.replace(/::/g, ":|:");
      var skillArray = skillRegex.replace(/:/g, "").split('|');
      if (skillArray.length == 1 && skillArray[0] == '') {
        skillRegex = '';
        skillArray = [];
      }

      jobPosts.certificationCode = jobPosts.certificationCode ? jobPosts.certificationCode : '';
      var certificationsRegex = jobPosts.certificationCode.replace(/::/g, ":|:");
      var certificationsArray = certificationsRegex.replace(/:/g, "").split('|');
      if (certificationsArray.length == 1 && certificationsArray[0] == '') {
        certificationsRegex = '';
        certificationsArray = [];
      }

      var skillReqCount = skillArray.length;
      var certificatoinReqCount = certificationsArray.length;

      var orCriteria = [];
      if (skillReqCount > 0) {
        orCriteria.push({ skillCode: { $regex: skillRegex } });
      }
      if (certificatoinReqCount > 0) {
        orCriteria.push({ certificationCode: { $regex: certificationsRegex } });
      }
      if (orCriteria.length > 0) {
        whereQuery = {
          $or: orCriteria
        };
      }
      console.log(whereQuery);


      var cvList = [];
      var marcherList = [];

      if (searchStartDate && searchEndDate) {
        whereQuery.updatedAt = { $lte: searchStartDate, $gte: searchEndDate };
      } else if (searchStartDate) {
        whereQuery.updatedAt = { $lte: searchStartDate };
      } else if (searchEndDate) {
        whereQuery.updatedAt = { $gte: searchEndDate };
      }
      cvList = await JOBCVMODEL.find(whereQuery).sort({ 'customUpdatedAt': -1 });

      for (const cvObj of cvList) {

        let matchFieldCount = 0;
        let skillMatchCount = 0;
        let educationMatchCount = 0;
        let certificationMatchCount = 0;
        let skillScore = 0;
        let certificationScore = 0;
        let applicantScore = 0;
        cvObj.skillCode = cvObj.skillCode ? cvObj.skillCode : '';
        let cvSkillArray = cvObj.skillCode.replace(/::/g, "|").replace(/:/g, "").split('|');
        cvObj.certificationCode = cvObj.certificationCode ? cvObj.certificationCode : '';
        let cvCertificationsArray = cvObj.certificationCode.replace(/::/g, "|").replace(/:/g, "").split('|');

        if (cvSkillArray.length == 1 && cvSkillArray[0] == '') {
          cvSkillArray = [];
        }
        if (cvCertificationsArray.length == 1 && cvCertificationsArray[0] == '') {
          cvCertificationsArray = [];
        }

        if (skillReqCount > 0) {
          matchFieldCount++;
          for (let i = 0; i < skillArray.length; i++) {
            if (cvSkillArray.indexOf(skillArray[i]) > -1) {
              skillMatchCount++;
            }
          }
          skillScore = (skillMatchCount * 100) / skillReqCount;
        }

        if (certificatoinReqCount > 0) {
          matchFieldCount++;
          for (let i = 0; i < certificationsArray.length; i++) {
            if (cvCertificationsArray.indexOf(certificationsArray[i]) > -1) {
              certificationMatchCount++;
            }
          }
          certificationScore = (certificationMatchCount * 100) / certificatoinReqCount;
        }
        matchFieldCount++;
        if (cvObj.education == jobPosts.education) {
          educationMatchCount = 100;
        } else {
          educationMatchCount = 50;
        }


        applicantScore = (skillScore + certificationScore + educationMatchCount) / matchFieldCount;

        var matcherObject = {
          "jobId": jobId,
          "applicationId": cvObj._id,
          "skillScore": skillScore,
          "certificationScore": certificationScore,
          "educationScore": educationMatchCount,
          "matchFieldCount": matchFieldCount,
          "score": applicantScore
        };

        console.log(matcherObject);
        console.log(skillArray);
        console.log(cvSkillArray);
        console.log(matchFieldCount, skillMatchCount, certificationMatchCount, skillScore, certificationScore, applicantScore);
        matcherObject = await Profile_MatcherModel.updateOne({ "jobId": jobId, "applicationId": cvObj._id }, { $set: matcherObject }, { upsert: true, new: true });
        marcherList.push(matcherObject);
      }

      var jpbUpdateFields = { $set: { matchStartDate: searchStartDate, matchEndDate: searchEndDate } };
      console.log("jpbUpdateFields : ", jpbUpdateFields);
      await JOBPOSTSMODEL.updateOne({ _id: jobId }, jpbUpdateFields);

      return { cvList: cvList, marcherList: marcherList };
    } catch (err) {
      console.log("CATCH ::fn[fetchAggregateDatatableRecords]:::>");
      console.error(err);
      return { err: err };
    }
  },
  matchJob: async (applicationId) => {
    console.log('Inside call matchJob');
    try {
      var searchStartDate = null;
      var searchEndDate = null;
      var whereQuery = {};
      var firstRecord = await JOBPOSTSMODEL.find().sort({ 'customUpdatedAt': -1 }).limit(1);
      var lastRecord = await JOBPOSTSMODEL.find().sort({ 'customUpdatedAt': -1 }).limit(1).skip(100);
      if (firstRecord.length > 0) {
        searchStartDate = firstRecord[0].updatedAt;
      }
      if (lastRecord.length > 0) {
        searchEndDate = lastRecord[0].updatedAt;
      }

      var applicationCV = await JOBCVMODEL.findById({ _id: applicationId });

      applicationCV.skillCode = applicationCV.skillCode ? applicationCV.skillCode : '';
      var skillRegex = applicationCV.skillCode.replace(/::/g, ":|:");
      var skillArray = skillRegex.replace(/:/g, "").split('|');
      if (skillArray.length == 1 && skillArray[0] == '') {
        skillRegex = '';
        skillArray = [];
      }

      applicationCV.certificationCode = applicationCV.certificationCode ? applicationCV.certificationCode : '';
      var certificationsRegex = applicationCV.certificationCode.replace(/::/g, ":|:");
      var certificationsArray = certificationsRegex.replace(/:/g, "").split('|');
      if (certificationsArray.length == 1 && certificationsArray[0] == '') {
        certificationsRegex = '';
        certificationsArray = [];
      }

      var skillReqCount = skillArray.length;
      var certificatoinReqCount = certificationsArray.length;

      var orCriteria = [];
      if (skillReqCount > 0) {
        orCriteria.push({ skillCode: { $regex: skillRegex } });
      }
      if (certificatoinReqCount > 0) {
        orCriteria.push({ certificationCode: { $regex: certificationsRegex } });
      }
      if (orCriteria.length > 0) {
        whereQuery = {
          $or: orCriteria
        };
      }
      console.log(whereQuery);


      var cvList = [];
      var marcherList = [];

      if (searchStartDate && searchEndDate) {
        whereQuery.updatedAt = { $lte: searchStartDate, $gte: searchEndDate };
      } else if (searchStartDate) {
        whereQuery.updatedAt = { $lte: searchStartDate };
      } else if (searchEndDate) {
        whereQuery.updatedAt = { $gte: searchEndDate };
      }
      jobList = await JOBPOSTSMODEL.find(whereQuery).sort({ 'customUpdatedAt': -1 });

      for (const jobObj of jobList) {

        let matchFieldCount = 0;
        let skillMatchCount = 0;
        let educationMatchCount = 0;
        let certificationMatchCount = 0;
        let skillScore = 0;
        let certificationScore = 0;
        let applicantScore = 0;

        jobObj.skillCode = jobObj.skillCode ? jobObj.skillCode : '';
        let jobSkillArray = jobObj.skillCode.replace(/::/g, "|").replace(/:/g, "").split('|');

        jobObj.certificationCode = jobObj.certificationCode ? jobObj.certificationCode : '';
        let jobCertificationsArray = jobObj.certificationCode.replace(/::/g, "|").replace(/:/g, "").split('|');

        if (jobSkillArray.length == 1 && jobSkillArray[0] == '') {
          jobSkillArray = [];
        }
        if (jobCertificationsArray.length == 1 && jobCertificationsArray[0] == '') {
          jobCertificationsArray = [];
        }

        let jobSkillReqCount = skillArray.length;
        let jobCertificatoinReqCount = certificationsArray.length;

        if (jobSkillReqCount > 0) {
          matchFieldCount++;
          for (let i = 0; i < jobSkillArray.length; i++) {
            if (skillArray.indexOf(jobSkillArray[i]) > -1) {
              skillMatchCount++;
            }
          }
          skillScore = (skillMatchCount * 100) / jobSkillReqCount;
        }

        if (jobCertificatoinReqCount > 0) {
          matchFieldCount++;
          for (let i = 0; i < jobCertificationsArray.length; i++) {
            if (certificationsArray.indexOf(jobCertificationsArray[i]) > -1) {
              certificationMatchCount++;
            }
          }
          certificationScore = (certificationMatchCount * 100) / jobCertificatoinReqCount;
        }

        matchFieldCount++;
        if (jobObj.education == applicationCV.education) {
          educationMatchCount = 100;
        } else {
          educationMatchCount = 50;
        }


        applicantScore = (skillScore + certificationScore + educationMatchCount) / matchFieldCount;

        var matcherObject = {
          "jobId": jobObj._id,
          "applicationId": applicationId,
          "skillScore": skillScore,
          "certificationScore": certificationScore,
          "educationScore": educationMatchCount,
          "matchFieldCount": matchFieldCount,
          "score": applicantScore
        };

        matcherObject = await Profile_MatcherModel.updateOne({ "jobId": jobObj._id, "applicationId": applicationId }, { $set: matcherObject }, { upsert: true, new: true });
        marcherList.push(matcherObject);
      }

      var jpbUpdateFields = { $set: { matchStartDate: searchStartDate, matchEndDate: searchEndDate } };
      await JOBCVMODEL.updateOne({ _id: applicationId }, jpbUpdateFields);

      console.log('End call matchJob');
      return { cvList: cvList, marcherList: marcherList };

    } catch (err) {
      console.log("CATCH ::fn[fetchAggregateDatatableRecords]:::>");
      console.error(err);
      return { err: err };
    }
  },

  fetchDatatableRecords: async (dtReq, ModelObj, fieldNames, conditionQuery, projectionQuery, sortingQuery, populateQuery, callback) => {
    const searchQuery = conditionQuery;
    const page = Number(dtReq.page);
    const limitRecord = Number(dtReq.limit || 50);
    let skipRecord = 0;

    if (page > 1) {
      skipRecord = (page - 1) * limitRecord;
    }

    const responseJson = {
      recordsFiltered: 0,
      recordsTotal: 0,
      data: []
    };

    try {
      if (dtReq.search && dtReq.search.value !== "" && fieldNames.length > 0) {
        const regex = new RegExp(dtReq.search.value, "i");
        const orQueryList = [];
        for (let i = 0; i < fieldNames.length; i++) {
          const searchJson = {};
          searchJson[fieldNames[i]] = regex;
          orQueryList.push(searchJson);
        }
        searchQuery.$or = orQueryList;
      }

      const totalRecordsCount = await ModelObj.countDocuments(conditionQuery);
      responseJson.recordsTotal = totalRecordsCount;

      let recordsData;
      if (populateQuery && populateQuery.length > 0) {
        recordsData = await ModelObj.find(searchQuery).lean().populate(populateQuery);
        const recordsFilteredCount = (recordsData && recordsData.length) || 0;
        responseJson.recordsFiltered = recordsFilteredCount;
      } else {
        const recordsFilteredCount = await ModelObj.countDocuments(searchQuery);
        responseJson.recordsFiltered = recordsFilteredCount;
      }

      console.log('searchQuery', searchQuery);
      if (populateQuery && populateQuery.length > 0) {
        if(page < 0){
          recordsData = await ModelObj.find(searchQuery).select(projectionQuery).skip(skipRecord).sort(sortingQuery).lean().populate(populateQuery);
        }else{
          recordsData = await ModelObj.find(searchQuery).select(projectionQuery).skip(skipRecord).limit(limitRecord).sort(sortingQuery).lean().populate(populateQuery);
        }
        
      } else {
        if(page < 0){
          recordsData = await ModelObj.find(searchQuery).select(projectionQuery).skip(skipRecord).sort(sortingQuery).lean();
        }else{
          recordsData = await ModelObj.find(searchQuery).select(projectionQuery).skip(skipRecord).limit(limitRecord).sort(sortingQuery).lean();
        }
        
      }

      if (recordsData) {
        responseJson.data = recordsData;
        callback(null, responseJson);
      } else {
        const err = new Error(`Error: No record found with query: ${searchQuery}`);
        callback(err, responseJson);
      }
    } catch (err) {
      console.log("CATCH ::fn[fetchDatatableRecords]:::>");
      console.error(err);
      return callback(err, responseJson);
    }
  },

  cronCvMatch: async (jobPostList, matchType) => {
    try {
      for (jobPosts of jobPostList) {
        var currentDate = new Date();
        let whereQuery = {};
        var jobId = jobPosts._id;
        //console.log("job_id: ", jobPosts._id);
        //console.log("jobSearchStartdate:", jobPosts.matchStartDate);
        //console.log("job_id updatedAt: ", jobPosts.updatedAt);

        jobPosts.skillCode = jobPosts.skillCode ? jobPosts.skillCode : '';
        let skillRegex = jobPosts.skillCode.replace(/::/g, ":|:");
        let skillArray = skillRegex.replace(/:/g, "").split('|');
        if (skillArray.length == 1 && skillArray[0] == '') {
          skillRegex = '';
          skillArray = [];
        }

        jobPosts.certificationCode = jobPosts.certificationCode ? jobPosts.certificationCode : '';
        let certificationsRegex = jobPosts.certificationCode.replace(/::/g, ":|:");
        let certificationsArray = certificationsRegex.replace(/:/g, "").split('|');
        if (certificationsArray.length == 1 && certificationsArray[0] == '') {
          certificationsRegex = '';
          certificationsArray = [];
        }

        let skillReqCount = skillArray.length;
        let certificatoinReqCount = certificationsArray.length;

        let orCriteria = [];
        if (skillReqCount > 0) {
          orCriteria.push({ skillCode: { $regex: skillRegex } });
        }
        if (certificatoinReqCount > 0) {
          orCriteria.push({ certificationCode: { $regex: certificationsRegex } });
        }
        if (orCriteria.length > 0) {
          whereQuery = {
            $or: orCriteria
          };
        }

        let cvList = [];

        
        if(matchType == 'PAST') {
          const endDate = moment.utc().subtract(30, "days").toISOString();
          whereQuery.customUpdatedAt = { $gte : endDate };
          if (jobPosts.matchEndDate) {
            whereQuery.customUpdatedAt.$lte = jobPosts.matchEndDate;
          }
          cvList = await JOBCVMODEL.find(whereQuery).sort({ 'customUpdatedAt': -1 }).limit(200);
        } else {
          if (jobPosts.matchStartDate) {
            whereQuery.customUpdatedAt = { $gte: jobPosts.matchStartDate };
          }
          cvList = await JOBCVMODEL.find(whereQuery).sort({ 'customUpdatedAt': 1 }).limit(100);
        }
        //console.log(whereQuery);
        // cvList = await JOBCVMODEL.find(whereQuery).sort({ 'customUpdatedAt': -1 });

        for (const cvObj of cvList) {

          let matchFieldCount = 0;
          let skillMatchCount = 0;
          let educationMatchCount = 0;
          let certificationMatchCount = 0;
          let skillScore = 0;
          let certificationScore = 0;
          let applicantScore = 0;
          cvObj.skillCode = cvObj.skillCode ? cvObj.skillCode : '';
          let cvSkillArray = cvObj.skillCode.replace(/::/g, "|").replace(/:/g, "").split('|');
          cvObj.certificationCode = cvObj.certificationCode ? cvObj.certificationCode : '';
          let cvCertificationsArray = cvObj.certificationCode.replace(/::/g, "|").replace(/:/g, "").split('|');

          if (cvSkillArray.length == 1 && cvSkillArray[0] == '') {
            cvSkillArray = [];
          }
          if (cvCertificationsArray.length == 1 && cvCertificationsArray[0] == '') {
            cvCertificationsArray = [];
          }

          if (skillReqCount > 0) {
            matchFieldCount++;
            for (let i = 0; i < skillArray.length; i++) {
              if (cvSkillArray.indexOf(skillArray[i]) > -1) {
                skillMatchCount++;
              }
            }
            skillScore = (skillMatchCount * 100) / skillReqCount;
          }

          if (certificatoinReqCount > 0) {
            matchFieldCount++;
            for (let i = 0; i < certificationsArray.length; i++) {
              if (cvCertificationsArray.indexOf(certificationsArray[i]) > -1) {
                certificationMatchCount++;
              }
            }
            certificationScore = (certificationMatchCount * 100) / certificatoinReqCount;
          }
          matchFieldCount++;
          if (cvObj.education == jobPosts.education) {
            educationMatchCount = 100;
          } else {
            educationMatchCount = 50;
          }


          applicantScore = (skillScore + certificationScore + educationMatchCount) / matchFieldCount;

          var matcherObject = {
            "jobId": jobId,
            "applicationId": cvObj._id,
            "skillScore": skillScore,
            "certificationScore": certificationScore,
            "educationScore": educationMatchCount,
            "matchFieldCount": matchFieldCount,
            "score": applicantScore
          };

          //console.log(matcherObject);
          //console.log(skillArray);
          //console.log(cvSkillArray);
          //console.log(matchFieldCount, skillMatchCount, certificationMatchCount, skillScore, certificationScore, applicantScore);
          matcherObject = await Profile_MatcherModel.updateOne({ "jobId": jobId, "applicationId": cvObj._id }, { $set: matcherObject }, { upsert: true, new: true });
        }
        var updateFields = {};
        if(matchType == 'PAST') {
          updateFields.pastSearchCompleted = true;
          if(cvList.length > 0) {
            var oldestCVCustomUpdatedAt = cvList[cvList.length - 1].customUpdatedAt;
            if(oldestCVCustomUpdatedAt){
              updateFields.matchEndDate = oldestCVCustomUpdatedAt;
            }            
          }
        } else {
          updateFields.matchStartDate = currentDate;
          if(cvList.length > 0){
            var newCVCustomUpdatedAt = cvList[cvList.length - 1].customUpdatedAt;
            if(newCVCustomUpdatedAt){
              updateFields.matchStartDate = newCVCustomUpdatedAt;
            } 
          }
        }
        //console.log("jobUpdateFields : ", updateFields);
        await JOBPOSTSMODEL.updateOne({ _id: jobId }, { $set: updateFields});
      }

    } catch (err) {
      console.log("CATCH ::fn[Cron Cv_Match_Wtih_Job Error occur]:::>");
      console.error(err);

    }
  },

  cronCvMatch_20220726: async (jobPostList, matchType) => {
    try {
      for (jobPosts of jobPostList) {
        var currentDate = new Date();
        let whereQuery = {};
        var jobId = jobPosts._id;
        //console.log("job_id: ", jobPosts._id);
        //console.log("jobSearchStartdate:", jobPosts.matchStartDate);
        //console.log("job_id updatedAt: ", jobPosts.updatedAt);

        jobPosts.skillCode = jobPosts.skillCode ? jobPosts.skillCode : '';
        let skillRegex = jobPosts.skillCode.replace(/::/g, ":|:");
        let skillArray = skillRegex.replace(/:/g, "").split('|');
        if (skillArray.length == 1 && skillArray[0] == '') {
          skillRegex = '';
          skillArray = [];
        }

        jobPosts.certificationCode = jobPosts.certificationCode ? jobPosts.certificationCode : '';
        let certificationsRegex = jobPosts.certificationCode.replace(/::/g, ":|:");
        let certificationsArray = certificationsRegex.replace(/:/g, "").split('|');
        if (certificationsArray.length == 1 && certificationsArray[0] == '') {
          certificationsRegex = '';
          certificationsArray = [];
        }

        let skillReqCount = skillArray.length;
        let certificatoinReqCount = certificationsArray.length;

        let orCriteria = [];
        if (skillReqCount > 0) {
          orCriteria.push({ skillCode: { $regex: skillRegex } });
        }
        if (certificatoinReqCount > 0) {
          orCriteria.push({ certificationCode: { $regex: certificationsRegex } });
        }
        if (orCriteria.length > 0) {
          whereQuery = {
            $or: orCriteria
          };
        }

        let cvList = [];
        let marcherList = [];

        
        if(matchType == 'PAST') {
          const endDate = moment.utc().subtract(30, "days").toISOString();
          whereQuery.customUpdatedAt = { $gte : endDate };
          if (jobPosts.matchEndDate) {
            whereQuery.customUpdatedAt.$lte = jobPosts.matchEndDate;
          }
          cvList = await JOBCVMODEL.find(whereQuery).sort({ 'customUpdatedAt': -1 }).limit(1000);
        } else {
          if (jobPosts.matchStartDate) {
            whereQuery.customUpdatedAt = { $gte: jobPosts.matchStartDate };
          }
          cvList = await JOBCVMODEL.find(whereQuery).sort({ 'customUpdatedAt': -1 });
        }
        //console.log(whereQuery);
        // cvList = await JOBCVMODEL.find(whereQuery).sort({ 'customUpdatedAt': -1 });

        for (const cvObj of cvList) {

          let matchFieldCount = 0;
          let skillMatchCount = 0;
          let educationMatchCount = 0;
          let certificationMatchCount = 0;
          let skillScore = 0;
          let certificationScore = 0;
          let applicantScore = 0;
          cvObj.skillCode = cvObj.skillCode ? cvObj.skillCode : '';
          let cvSkillArray = cvObj.skillCode.replace(/::/g, "|").replace(/:/g, "").split('|');
          cvObj.certificationCode = cvObj.certificationCode ? cvObj.certificationCode : '';
          let cvCertificationsArray = cvObj.certificationCode.replace(/::/g, "|").replace(/:/g, "").split('|');

          if (cvSkillArray.length == 1 && cvSkillArray[0] == '') {
            cvSkillArray = [];
          }
          if (cvCertificationsArray.length == 1 && cvCertificationsArray[0] == '') {
            cvCertificationsArray = [];
          }

          if (skillReqCount > 0) {
            matchFieldCount++;
            for (let i = 0; i < skillArray.length; i++) {
              if (cvSkillArray.indexOf(skillArray[i]) > -1) {
                skillMatchCount++;
              }
            }
            skillScore = (skillMatchCount * 100) / skillReqCount;
          }

          if (certificatoinReqCount > 0) {
            matchFieldCount++;
            for (let i = 0; i < certificationsArray.length; i++) {
              if (cvCertificationsArray.indexOf(certificationsArray[i]) > -1) {
                certificationMatchCount++;
              }
            }
            certificationScore = (certificationMatchCount * 100) / certificatoinReqCount;
          }
          matchFieldCount++;
          if (cvObj.education == jobPosts.education) {
            educationMatchCount = 100;
          } else {
            educationMatchCount = 50;
          }


          applicantScore = (skillScore + certificationScore + educationMatchCount) / matchFieldCount;

          var matcherObject = {
            "jobId": jobId,
            "applicationId": cvObj._id,
            "skillScore": skillScore,
            "certificationScore": certificationScore,
            "educationScore": educationMatchCount,
            "matchFieldCount": matchFieldCount,
            "score": applicantScore
          };

          //console.log(matcherObject);
          //console.log(skillArray);
          //console.log(cvSkillArray);
          //console.log(matchFieldCount, skillMatchCount, certificationMatchCount, skillScore, certificationScore, applicantScore);
          matcherObject = await Profile_MatcherModel.updateOne({ "jobId": jobId, "applicationId": cvObj._id }, { $set: matcherObject }, { upsert: true, new: true });
          marcherList.push(matcherObject);
        }
        var updateFields = {};
        if(matchType == 'PAST') {
          updateFields.pastSearchCompleted = true;
          if(cvList.length > 0) {
            var oldestCVCustomUpdatedAt = cvList[cvList.length - 1].customUpdatedAt;
            if(oldestCVCustomUpdatedAt){
              updateFields.matchEndDate = oldestCVCustomUpdatedAt;
            }            
          }
        } else {
          updateFields.matchStartDate = currentDate;
        }
        //console.log("jobUpdateFields : ", updateFields);
        await JOBPOSTSMODEL.updateOne({ _id: jobId }, { $set: updateFields});
      }

    } catch (err) {
      console.log("CATCH ::fn[Cron Cv_Match_Wtih_Job Error occur]:::>");
      console.error(err);

    }
  }
};

