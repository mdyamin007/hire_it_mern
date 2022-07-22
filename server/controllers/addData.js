const DUMMYDATAADDHELPER = require("../_helper/dummyData.helper");

const addDummyJobs = async (req, res) => {
    try {
        var payload = req.body;
        const findJobMatch = await DUMMYDATAADDHELPER.addDummyJobs(payload);
        // console.log(findJobMatch);
        res.status(200).json({
            message: "Match Cv with Job successfully ",
            jobDescriptionId: jobDescriptionId,
            findJobMatch: findJobMatch,
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
        const findJobMatch = await DUMMYDATAADDHELPER.addDummyCvs(
            payload,
        );

        // console.log(findJobMatch);
        res.status(200).json({
            message: "Match Cv with Job successfully ",
            applicationId: applicationId,
            findJobMatch: findJobMatch,
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
