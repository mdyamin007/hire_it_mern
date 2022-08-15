/* eslint-disable no-console */
const Agenda = require("agenda");
const moment = require("moment");
const MONGODB_URI = process.env.MONGODB_URI;
const agenda = new Agenda({ db: { address: MONGODB_URI } });
const JOBPOSTSMODEL = require("../models/JobPosts");
const MATCHHELPER = require("../_helper/match.helper");
var CronJob = require("cron").CronJob;

const PROCESS_PER_JOB = 100;
const PROCESS_PER_PAST_JOB = 10;
const PROCESS_PAST_DAYS_JOBS = 1;
const PROCESS_FUTURE_DAYS_JOBS = 30;
const MATCH_TYPE_PAST = "PAST";
const MATCH_TYPE_FUTURE = "FUTURE";

agenda.define("Past_Cv_Match_WtihJob", async (job, done) => {
  console.log("Past_Cv_Match_WtihJob Start", new Date());
  try {
    Past_Cv_Match_Wtih_Job();
    done();
  } catch (err) {
    console.log("CATCH ::fn[Cron Past_Cv_Match_WtihJob Error occur]:::>");
    console.error(err);
    done();
  }
});

agenda.define("Future_Cv_Match_WtihJob", async (job, done) => {
  console.log("Future_Cv_Match_WtihJob Start", new Date());
  try {
    Future_Cv_Match_Wtih_Job();
    done();
  } catch (err) {
    console.log("CATCH ::fn[Cron Future_Cv_Match_WtihJob Error occur]:::>");
    console.error(err);
    done();
  }
});

agenda.define("Test_Cron_Run", async (job, done) => {

    console.log("Test_Cron_Run", new Date());

    console.log("TASK-1 fn[Test_Cron_Run] - START ::::>");
    console.log("TASK-1 fn[Test_Cron_Run] - END ::::>");

    done();
});
// agenda.on("ready", () => {
//     agenda.every("3 minutes", "Past_Cv_Match_WtihJob");
//     agenda.every("5 minutes", "Future_Cv_Match_WtihJob");
//     // agenda.every("2 minutes", "Test_Cron_Run");
//     agenda.start();
// });

const Past_Cv_Match_Wtih_Job =  async () => {
    const startDate = moment.utc().subtract(PROCESS_PAST_DAYS_JOBS, "days").toISOString();
    console.log(startDate, "past----");
    var jobPostList = await JOBPOSTSMODEL.find({ customUpdatedAt: { "$gte": new Date(startDate) }, pastSearchCompleted: false }).limit(PROCESS_PER_PAST_JOB);
    console.log("TASK-1 fn[Past_Cv_Match_WtihJob] - START ::::>");
    if (jobPostList) {
        await MATCHHELPER.cronCVMatch(jobPostList, MATCH_TYPE_PAST);
    }
    console.log("Past_Cv_Match_WtihJob End", new Date());
    console.log("TASK-1 fn[Past_Cv_Match_WtihJob] - END ::::>");
}

const cron_job = new CronJob("*/15 * * * *", async () => {
    try {
        const jobs = await JOBPOSTSMODEL.find()
        console.log("cron start", new Date());
        let promise = []
        for (let i = 1; i <= jobs.length / 10; i++) {
            let cpage = i
            let perpage = 10
            let start = cpage * perpage - perpage;
            let end = start - perpage
            promise.push(await MATCHHELPER.cronList(jobs.slice(start, end), MATCH_TYPE_PAST))
        }
        await Promise.all(promise)
        console.log("cron End", new Date());
    } catch (e) {
        console.log(e);
    }
});

const Future_Cv_Match_Wtih_Job = async () => {
  const startDate = moment
    .utc()
    .subtract(PROCESS_FUTURE_DAYS_JOBS, "days")
    .toISOString();
  const endDate = moment.utc().subtract(6, "hours").toISOString();

  console.log(startDate, endDate, "future");

  var jobPostList = await JOBPOSTSMODEL.find({
    customUpdatedAt: { $gte: new Date(startDate) },
    updatedAt: { $lte: new Date(endDate) },
  }).limit(PROCESS_PER_JOB);
  console.log("TASK-1 fn[Future_Cv_Match_WtihJob] - START ::::>");
  if (jobPostList) {
    await MATCHHELPER.cronCVMatch(jobPostList, MATCH_TYPE_FUTURE);
  }
  console.log("Future_Cv_Match_WtihJob End", new Date());
  console.log("TASK-1 fn[Future_Cv_Match_WtihJob] - END ::::>");
};

module.exports = async () => {
    cron_job.start()
//   PastCvMatchWtihJobCron: Past_Cv_Match_Wtih_Job,
//   FutureCvMatchWtihJobCron: Future_Cv_Match_Wtih_Job,
}; // end of module.exports
