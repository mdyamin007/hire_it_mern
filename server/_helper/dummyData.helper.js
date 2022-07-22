const JOBPOSTSMODEL = require("../models/JobPosts");
const JOBCVMODEL = require("../models/jobCV");
const Profile_MatcherModel = require("../models/profileMatcher");
const jobCVService = require("../services/jobCV");
const MATCHHELPER = require("../_helper/match.helper");

module.exports = {

    addDummyJobs: async (payload) => {

        try {
            var n = payload.n;
            
            var firstNameList = ['Bhavesh', 'Nitin', 'Manish', 'Rahul', 'Raj', 'Vijay'];

            var skillList = [
                ["Skill1", "S2"],
                ["S2", "S4"],
                ["S3", "S2"],
                ["S1", "S5"],
                ["S4"]
            ];
            var certificationList = [
                ["Skill1", "S2"],
                ["S2", "S4"],
                ["S3", "S2"],
                ["S1", "S5"],
                ["S4"]
            ];
            var educationList = ["degree", "diploma", "bachelor", "master", "phd"];
            const industryOptionsList = ["business_services", "energy_and_natural_resources", "financial_services", "fmcg", "healthcarvalue", "industrial_manufacturing",
                "insurance", "leisure_travel_tourism", "life_scienc", "media_and_agency", "not_for_profit", "professional_services", "propevalue", "public_sector",
                "retail", "technology_and_telecoms", "transport_and_distribution"];
            const sectorOptionsList = ["accounting", "audit_and_advisory", "banking_and_financial_services", "construction", "engineering_and_manufacturing",
                "facilities_and_management", "human_resources", "human_resources", "information_technology", "legal", "life_sciences", "marketing", "office_support", "oil_and_gas",
                "procurement_and_supply_chain", "real_estate", "renewable_energy", "sales", "tax", "treasury",];

            for (const iterator of new Array(n)) {


                var skillIndex = 0;
                var industryOptionsListIndex = 0;
                var certificationListIndex = 0;
                var sectorOptionsListIndex = 0;
                var educationListIndex = 0;
                var emailRandomNumber = Math.floor(Math.random() * 100000);
                var email = firstNameList[firstNameIndex] + '.' + lastNameList[lastNameIndex] + emailRandomNumber + "@gmail.com";


                firstNameIndex = Math.floor(Math.random() * firstNameList.length);
                skillIndex = Math.floor(Math.random() * skillList.length);
                industryOptionsListIndex = Math.floor(Math.random() * industryOptionsList.length);
                certificationListIndex = Math.floor(Math.random() * certificationList.length);
                sectorOptionsListIndex = Math.floor(Math.random() * sectorOptionsList.length);
                educationListIndex = Math.floor(Math.random() * educationList.length);

                var jobDescription = {
                    position: "",
                    company_name: "",
                    location: "",
                    job_type: "",
                    job_description: "",
                    industry: industryOptionsList[industryOptionsListIndex],
                    sector: sectorOptionsList[sectorOptionsListIndex],
                    subSector: "",
                    hr_name: firstNameList[firstNameIndex],
                    email: "",
                    salary_range: "",
                    certifications: certificationList[certificationListIndex],
                    skills: skillList[lastNameIndex],
                    education: educationList[educationListIndex],
                    major: "",
                    email: email,
                    country: "INDIA",
                    major: "",
                };
                try {
                    const createdJobDescription = await JobPostService.createJob_Description(jobDescription);
                    await MATCHHELPER.matchCV(createdJobDescription._id);
                } catch (error) {
                    console.log("CATCH ::fn[addDummyJobs ForLoop]:::>");
                    console.error(error);
                }

            }
        } catch (err) {
            console.log("CATCH ::fn[addDummyJobs]:::>");
            console.error(err);
            return { err: err };
        }

    },
    addDummyCvs: async (payload) => {

        try {
            var n = payload.n;

            var firstNameList = ['Bhavesh', 'Nitin', 'Manish', 'Rahul', 'Raj', 'Vijay'];
            var lastNameList = ['Vavadiya', 'Shinde', 'Sharma', 'Malhotra', 'Pawar', 'Iyer'];
            var skillList = [
                ["Skill1", "S2"],
                ["S2", "S4"],
                ["S3", "S2"],
                ["S1", "S5"],
                ["S4"]
            ];
            var certificationList = [
                ["Skill1", "S2"],
                ["S2", "S4"],
                ["S3", "S2"],
                ["S1", "S5"],
                ["S4"]
            ];
            var educationList = ["degree", "diploma", "bachelor", "master", "phd"];
            const industryOptionsList = ["business_services", "energy_and_natural_resources", "financial_services", "fmcg", "healthcarvalue", "industrial_manufacturing",
                "insurance", "leisure_travel_tourism", "life_scienc", "media_and_agency", "not_for_profit", "professional_services", "propevalue", "public_sector",
                "retail", "technology_and_telecoms", "transport_and_distribution"];
            const sectorOptionsList = ["accounting", "audit_and_advisory", "banking_and_financial_services", "construction", "engineering_and_manufacturing",
                "facilities_and_management", "human_resources", "human_resources", "information_technology", "legal", "life_sciences", "marketing", "office_support", "oil_and_gas",
                "procurement_and_supply_chain", "real_estate", "renewable_energy", "sales", "tax", "treasury",];

            for (const iterator of new Array(n)) {


                var firstNameIndex = 0;
                var lastNameIndex = 0;
                var skillIndex = 0;
                var industryOptionsListIndex = 0;
                var certificationListIndex = 0;
                var sectorOptionsListIndex = 0;
                var educationListIndex = 0;
                var emailRandomNumber = Math.floor(Math.random() * 100000);
                var email = firstNameList[firstNameIndex] + '.' + lastNameList[lastNameIndex] + emailRandomNumber + "@gmail.com";
                var phone = Math.floor(Math.random() * 1000000000 + 9000000000);

                firstNameIndex = Math.floor(Math.random() * firstNameList.length);
                lastNameIndex = Math.floor(Math.random() * firstNameList.length);
                skillIndex = Math.floor(Math.random() * skillList.length);
                industryOptionsListIndex = Math.floor(Math.random() * industryOptionsList.length);
                certificationListIndex = Math.floor(Math.random() * certificationList.length);
                sectorOptionsListIndex = Math.floor(Math.random() * sectorOptionsList.length);
                educationListIndex = Math.floor(Math.random() * educationList.length);

                var cv = {
                    firstName: firstNameList[firstNameIndex],
                    lastName: lastNameList[lastNameIndex],
                    email: email,
                    phone: phone,
                    cv: "Dummy",
                    country: "INDIA",
                    city: "PUNE",
                    nationality: "IN",
                    industry: industryOptionsList[industryOptionsListIndex],
                    sector: sectorOptionsList[sectorOptionsListIndex],
                    subSector: "Dummy",
                    currentSalary: 15000,
                    certifications: certificationList[certificationListIndex],
                    skills: skillList[lastNameIndex],
                    education: educationList[educationListIndex],
                    major: "Computer",
                };
                try {
                    const createdCv = await jobCVService.createJobCV(cv);
                    await MATCHHELPER.matchJob(createdCv._id);
                } catch (err) {
                    console.log("CATCH ::fn[addDummyCvs ForLoop]:::>");
                    console.error(err);
                    return { err: err };
                }

            }
        } catch (err) {
            console.log("CATCH ::fn[addDummyCvs]:::>");
            console.error(err);
            return { err: err };
        }
    },


};