const DUMMYDATAADDHELPER = require("../_helper/dummyData.helper");
const MATCHHELPER = require("../_helper/match.helper");

const addDummyJobs = async (req, res) => {
    try {
        var payload = req.body;
        // var promise = []
        // for(let i=0; i< 1000; i++){
        //     promise.push(await DUMMYDATAADDHELPER.addDummyJobs(payload))
        // }
        // await Promise.all(promise)
        await DUMMYDATAADDHELPER.addDummyJobs(payload)
        // MATCHHELPER.matchCV(jobDescription._id);
        // console.log(findJobMatch);
        res.status(200).json({
            message: "Successfully Add Jobs",
            // jobDescription: jobDescription,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

const addDummyCvs = async (req, res) => {
    try {
        var payload = req.body;
        await DUMMYDATAADDHELPER.addDummyCvs(
            payload,
        )
        // MATCHHELPER.matchJob(application._id);

        // console.log(findJobMatch);
        res.status(200).json({
            message: "Successfully Add CVs",
            // application: application,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};


module.exports = {
    addDummyJobs,
    addDummyCvs,
}; // end of module.exports
