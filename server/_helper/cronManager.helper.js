/* eslint-disable no-console */
const Agenda = require("agenda");
const { config } = require("dotenv");
const moment = require("moment");
const MONGODB_URI = process.env.MONGODB_URI;
const ENVKEY = process.env.NODE_ENV || "development";
const agenda = new Agenda({ db: { address: MONGODB_URI } });
const JOBPOSTSMODEL = require("../models/JobPosts");
const JOBCVMODEL = require("../models/jobCV");
const Profile_MatcherModel = require("../models/profileMatcher");
const MATCHHELPER = require("../_helper/match.helper");



agenda.define("Cv_Match_Wtih_Job", async (job, done) => {

    console.log("Cv_Match_Wtih_Job", new Date());
    try {
        const  startDate = moment.utc().subtract(1, "months").startOf("days").toISOString();
        const endDate  = moment.utc().endOf("days").toISOString();

        var jobPostList = await JOBPOSTSMODEL.find({cretedAt:{ "$gte": new Date(startDate), "$lte": new Date(endDate) }});
        var searchStartDate = 0;
        console.log("TASK-1 fn[Cv_Match_Wtih_Job] - START ::::>");
        if (jobPostList) {
            await MATCHHELPER.cronCvMatch(jobPostList);
            // for (jobPosts of jobPostList) {
            //     let whereQuery = {};
            //     var jobId = jobPosts._id
            //     console.log("job_id: ", jobPosts._id);
            //     console.log("jobSearchStartdate:", jobPosts.matchStartDate);
            //     console.log("job_id: ", jobPosts.updatedAt);

            //     jobPosts.skillCode = jobPosts.skillCode ? jobPosts.skillCode : '';
            //     let skillRegex = jobPosts.skillCode.replace(/::/g, ":|:");
            //     let skillArray = skillRegex.replace(/:/g, "").split('|');
            //     if (skillArray.length == 1 && skillArray[0] == '') {
            //         skillRegex = '';
            //         skillArray = [];
            //     }

            //     jobPosts.certificationCode = jobPosts.certificationCode ? jobPosts.certificationCode : '';
            //     let certificationsRegex = jobPosts.certificationCode.replace(/::/g, ":|:");
            //     let certificationsArray = certificationsRegex.replace(/:/g, "").split('|');
            //     if (certificationsArray.length == 1 && certificationsArray[0] == '') {
            //         certificationsRegex = '';
            //         certificationsArray = [];
            //     }

            //     let skillReqCount = skillArray.length;
            //     let certificatoinReqCount = certificationsArray.length;

            //     let orCriteria = [];
            //     if (skillReqCount > 0) {
            //         orCriteria.push({ skillCode: { $regex: skillRegex } });
            //     }
            //     if (certificatoinReqCount > 0) {
            //         orCriteria.push({ certificationCode: { $regex: certificationsRegex } });
            //     }
            //     if (orCriteria.length > 0) {
            //         whereQuery = {
            //             $or: orCriteria
            //         };
            //     }
                
            //     let cvList = [];
            //     let marcherList = [];

            //     if (jobPosts.matchStartDate) {
            //         whereQuery.createdAt = { $gte: jobPosts.matchStartDate };
            //     }
            //     console.log(whereQuery);
            //     cvList = await JOBCVMODEL.find(whereQuery).sort({ 'createdAt': -1 });
            //     // console.log("cvList: ",cvList);
            //     if (cvList) {
            //         var firstRecord = await JOBCVMODEL.find().sort({ 'createdAt': -1 }).limit(1);
            //         if (firstRecord.length > 0) {
            //             searchStartDate = firstRecord[0].updatedAt;
            //         }

            //         for (const cvObj of cvList) {

            //             let matchFieldCount = 0;
            //             let skillMatchCount = 0;
            //             let educationMatchCount = 0;
            //             let certificationMatchCount = 0;
            //             let skillScore = 0;
            //             let certificationScore = 0;
            //             let applicantScore = 0;
            //             cvObj.skillCode = cvObj.skillCode ? cvObj.skillCode : '';
            //             let cvSkillArray = cvObj.skillCode.replace(/::/g, "|").replace(/:/g, "").split('|');
            //             cvObj.certificationCode = cvObj.certificationCode ? cvObj.certificationCode : '';
            //             let cvCertificationsArray = cvObj.certificationCode.replace(/::/g, "|").replace(/:/g, "").split('|');

            //             if (cvSkillArray.length == 1 && cvSkillArray[0] == '') {
            //                 cvSkillArray = [];
            //             }
            //             if (cvCertificationsArray.length == 1 && cvCertificationsArray[0] == '') {
            //                 cvCertificationsArray = [];
            //             }

            //             if (skillReqCount > 0) {
            //                 matchFieldCount++;
            //                 for (let i = 0; i < skillArray.length; i++) {
            //                     if (cvSkillArray.indexOf(skillArray[i]) > -1) {
            //                         skillMatchCount++;
            //                     }
            //                 }
            //                 skillScore = (skillMatchCount * 100) / skillReqCount;
            //             }

            //             if (certificatoinReqCount > 0) {
            //                 matchFieldCount++;
            //                 for (let i = 0; i < certificationsArray.length; i++) {
            //                     if (cvCertificationsArray.indexOf(certificationsArray[i]) > -1) {
            //                         certificationMatchCount++;
            //                     }
            //                 }
            //                 certificationScore = (certificationMatchCount * 100) / certificatoinReqCount;
            //             }
            //             matchFieldCount++;
            //             if (cvObj.educateducation == jobPosts.education) {
            //                 educationMatchCount = 100;
            //             } else {
            //                 educationMatchCount = 50;
            //             }


            //             applicantScore = (skillScore + certificationScore + educationMatchCount) / matchFieldCount;

            //             var matcherObject = {
            //                 "jobId": jobId,
            //                 "applicationId": cvObj._id,
            //                 "skillScore": skillScore,
            //                 "certificationScore": certificationScore,
            //                 "educationScore": educationMatchCount,
            //                 "matchFieldCount": matchFieldCount,
            //                 "score": applicantScore
            //             };

            //             console.log(matcherObject);
            //             console.log(skillArray);
            //             console.log(cvSkillArray);
            //             console.log(matchFieldCount, skillMatchCount, certificationMatchCount, skillScore, certificationScore, applicantScore);
            //             matcherObject = await Profile_MatcherModel.updateOne({ "jobId": jobId, "applicationId": cvObj._id }, { $set: matcherObject }, { upsert: true, new: true });
            //             marcherList.push(matcherObject);
            //         }
            //         var jpbUpdateFields = { $set: { matchStartDate: searchStartDate } };
            //         console.log("jpbUpdateFields : ", jpbUpdateFields);
            //         await JOBPOSTSMODEL.updateOne({ _id: jobId }, jpbUpdateFields);
            //     } else {
            //         console.log("No Records Found");
            //     }
            // }
        }
        console.log("TASK-1 fn[Cv_Match_Wtih_Job] - END ::::>");
        done();
    } catch (err) {
        console.log("CATCH ::fn[Cron Cv_Match_Wtih_Job Error occur]:::>");
        console.error(err);

    }
});



agenda.on("ready", () => {
    agenda.every("3 minutes", "Cv_Match_Wtih_Job");

    agenda.start();
});


