const JOBPOSTSMODEL = require("../models/JobPosts");
const CVUPLOADMODEL = require("../models/CV_Upload");
const Profile_MatcherModel = require("../models/profileMatcher");

module.exports = {

  matchCV: async (jobId) => {

    try {
      var searchStartDate = null;
      var searchEndDate = null;
      var whereQuery = {};
      var firstRecord = await CVUPLOADMODEL.find({ sort: { 'createdAt': -1 } }).limit(1);
      var lastRecord = await CVUPLOADMODEL.find({ sort: { 'createdAt': -1 } }).limit(1).skip(100);
      if (firstRecord.length > 0) {
        searchStartDate = firstRecord.updatedAt;
      }
      if (lastRecord.length > 0) {
        searchEndDate = lastRecord.updatedAt;
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
      cvList = await CVUPLOADMODEL.find(whereQuery).sort({ 'createdAt': -1 });

      var breakCount = 0;
      for (const cvObj of cvList) {

        let matchFieldCount = 0;
        let skillMatchCount = 0;
        let educationMatchCount=0;
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
        if(cvObj.educateducation == jobPosts.education){
          matchFieldCount++
          educationMatchCount = 100;
        }else{
          educationMatchCount = 50;
        }


        applicantScore = (skillScore + certificationScore) / matchFieldCount;

        var matcherObject = {
          "jobId": jobId,
          "applicationId": cvObj._id,
          "score": applicantScore
        };

        console.log(matcherObject);
        console.log(skillArray);
        console.log(cvSkillArray);
        console.log(matchFieldCount, skillMatchCount, certificationMatchCount, skillScore, certificationScore, applicantScore);
        matcherObject = await Profile_MatcherModel.updateOne({ "jobId": jobId, "applicationId": cvObj._id }, { $set: matcherObject }, { upsert: true, new: true });
        marcherList.push(matcherObject);
        if (breakCount++ >= 1) {
          return matcherObject;;
        }
        // return matcherObject;

      }

      var jpbUpdateFields = { $set: { matchStartDate: searchStartDate, matchEndDate: searchEndDate } };
      JOBPOSTSMODEL.updateOne({ _id: jobId }, jpbUpdateFields);

      return { cvList: cvList, marcherList: marcherList };
    } catch (err) {
      console.log("CATCH ::fn[fetchAggregateDatatableRecords]:::>");
      console.error(err);
      return callback(err, null);
    }
  },
  matchJob: async (applicationId) => {

    try {
      var searchStartDate = null;
      var searchEndDate = null;
      var whereQuery = {};
      var firstRecord = await JOBPOSTSMODEL.find({ sort: { 'createdAt': -1 } }).limit(1);
      var lastRecord = await JOBPOSTSMODEL.find({ sort: { 'createdAt': -1 } }).limit(1).skip(100);
      if (firstRecord.length > 0) {
        searchStartDate = firstRecord.updatedAt;
      }
      if (lastRecord.length > 0) {
        searchEndDate = lastRecord.updatedAt;
      }

      var applicationCV = await CVUPLOADMODEL.findById({ _id: applicationId });

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
      jobList = await JOBPOSTSMODEL.find(whereQuery).sort({ 'createdAt': -1 });

      var breakCount = 0;
      for (const jobObj of jobList) {

        let matchFieldCount = 0;
        let skillMatchCount = 0;
        let educationMatchCount=0;
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

        if(jobObj.educateducation == applicationCV.education){
          matchFieldCount++
          educationMatchCount = 100;
        }else{
          educationMatchCount = 50;
        }


        applicantScore = (skillScore + certificationScore) / matchFieldCount;

        var matcherObject = {
          "jobId": jobObj._id,
          "applicationId": applicationId,
          "score": applicantScore
        };

        console.log(matcherObject);
        console.log(skillArray);
        console.log(cvSkillArray);
        console.log(matchFieldCount, skillMatchCount, certificationMatchCount, skillScore, certificationScore, applicantScore);
        matcherObject = await Profile_MatcherModel.updateOne({ "jobId": jobId, "applicationId": cvObj._id }, { $set: matcherObject }, { upsert: true, new: true });
        marcherList.push(matcherObject);
        if (breakCount++ >= 1) {
          return matcherObject;;
        }
        // return matcherObject;

      }

      var jpbUpdateFields = { $set: { matchStartDate: searchStartDate, matchEndDate: searchEndDate } };
      JOBPOSTSMODEL.updateOne({ _id: jobId }, jpbUpdateFields);

      return { cvList: cvList, marcherList: marcherList };
    } catch (err) {
      console.log("CATCH ::fn[fetchAggregateDatatableRecords]:::>");
      console.error(err);
      return callback(err, null);
    }
  },

  fetchDatatableRecords: async (dtReq, ModelObj, fieldNames, conditionQuery, projectionQuery, sortingQuery, populateQuery, callback) => {
    const searchQuery = JSON.parse(JSON.stringify(conditionQuery)) || {};
    const page = Number(dtReq.page);
    const limitRecord = Number(dtReq.limit || 50);
    let skipRecord = 0;
  
    if (page > 1){
      skipRecord = (page-1) * limitRecord ;
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

      if (populateQuery && populateQuery.length > 0) {
        recordsData = await ModelObj.find(searchQuery).select(projectionQuery).skip(skipRecord).limit(limitRecord).sort(sortingQuery).lean().populate(populateQuery);
      } else {
        recordsData = await ModelObj.find(searchQuery).select(projectionQuery).skip(skipRecord).limit(limitRecord).sort(sortingQuery).lean();
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
  }
};
