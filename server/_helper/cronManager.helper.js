/* eslint-disable no-console */
const Agenda = require("agenda");
const moment = require("moment");
const MONGODB_URI = process.env.MONGODB_URI;
const agenda = new Agenda({ db: { address: MONGODB_URI } });
const JOBPOSTSMODEL = require("../models/JobPosts");
const MATCHHELPER = require("../_helper/match.helper");

const PROCESS_PER_JOB = 100;
const PROCESS_PAST_DAYS_JOBS = 1;
const PROCESS_FUTURE_DAYS_JOBS = 30;
const MATCH_TYPE_PAST = "PAST";
const MATCH_TYPE_FUTURE = "FUTURE";


agenda.define("Past_Cv_Match_Wtih_Job", async (job, done) => {

    console.log("Past_Cv_Match_Wtih_Job", new Date());
    try {
        Past_Cv_Match_Wtih_Job();
        done();
    } catch (err) {
        console.log("CATCH ::fn[Cron Cv_Match_Wtih_Job Error occur]:::>");
        console.error(err);
        done();

    }
});


agenda.define("Future_Cv_Match_Wtih_Job", async (job, done) => {

    console.log("Future_Cv_Match_Wtih_Job", new Date());
    try {
        Future_Cv_Match_Wtih_Job();
        done();
    } catch (err) {
        console.log("CATCH ::fn[Cron Cv_Match_Wtih_Job Error occur]:::>");
        console.error(err);
        done();
    }
});
agenda.on("ready", () => {
    agenda.every("30 minutes", "Past_Cv_Match_Wtih_Job");
    agenda.every("50 minutes", "Future_Cv_Match_Wtih_Job");
    agenda.start();
});


const Past_Cv_Match_Wtih_Job =  async () => {
    const startDate = moment.utc().subtract(PROCESS_PAST_DAYS_JOBS, "days").toISOString();

    var jobPostList = await JOBPOSTSMODEL.find({ customUpdatedAt: { "$gte": new Date(startDate) }, pastSearchCompleted: false }).limit(PROCESS_PER_JOB);
    console.log("TASK-1 fn[Cv_Match_Wtih_Job] - START ::::>");
    if (jobPostList) {
        await MATCHHELPER.cronCvMatch(jobPostList, MATCH_TYPE_PAST);
    }
    console.log("TASK-1 fn[Cv_Match_Wtih_Job] - END ::::>");
}

const Future_Cv_Match_Wtih_Job =  async () => {
    const startDate = moment.utc().subtract(PROCESS_FUTURE_DAYS_JOBS, "days").toISOString();
    const endDate = moment.utc().subtract(6, "hours").toISOString();

    var jobPostList = await JOBPOSTSMODEL.find({ customUpdatedAt: { "$gte": new Date(startDate) }, updatedAt: { "$lte": new Date(endDate) }}).limit(PROCESS_PER_JOB);
    console.log("TASK-1 fn[Cv_Match_Wtih_Job] - START ::::>");
    if (jobPostList) {
        await MATCHHELPER.cronCvMatch(jobPostList, MATCH_TYPE_FUTURE);
    }
    console.log("TASK-1 fn[Cv_Match_Wtih_Job] - END ::::>");
};


module.exports = {
    PastCvMatchWtihJobCron: Past_Cv_Match_Wtih_Job,
    FutureCvMatchWtihJobCron: Future_Cv_Match_Wtih_Job
  }; // end of module.exports
  