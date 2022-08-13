const jobCVService = require("../services/jobCV");
const JobPostService = require("../services/jobPosts");
const MATCHHELPER = require("../_helper/match.helper");

module.exports = {

    addDummyJobs: async (payload) => {

        try {
            var n = payload.n;

            var firstNameList =  ['Naseer', 'Khalid', 'Ahmed', 'Yousef', 'Sultan']
            var lastNameList =  ['Alkhaldi', 'Alqahtani', 'Khalid', 'Ahmed', 'Yousef', 'Sultan', 'Alnahdi', 'Alotaibi']
            var positionList = ["Research Assistant", "Data Analyst", "Business Analyst", "Network administrator", "User experience designer", "Systems analyst", "Database administrator",
                "Software application packager", "Full-stack developer", "Senior software engineer", "Data scientist", "Development operations engineer", "Cloud engineer", "IT security specialist",
                "Analytics manager", "Mobile developer", "Game developer", "Hardware engineer", "Web developer", "IT coordinator", "Web administrator"];
            var job_descriptionList = ['', '', '', '', '', '', '', '', '', ''];
            var company_nameList = ["62d14c4daa5f3ed4bea54337", "62de77823ed7ebf652080248", "62de77823ed7ebf652080249", "62de77823ed7ebf65208024a", "62de77823ed7ebf65208024b", 
            "62de77823ed7ebf65208024c", "62de77823ed7ebf65208024d", "62de77823ed7ebf65208024e", "62de77823ed7ebf65208024f", "62de77823ed7ebf652080250"];
            var salary_rangeList = ["15000-18000", "18000-26000", "16000-25000", "20000-30000", "25000-35000"];

            var skillList = [
                ["Communication", "Designs", "Applications", "Program Management", "Analysis"],
            ["Project Management", "Computer Program", "Research", "Websites", "Testing"],
            ["Project Planning", "Computer Program", "Applications", "Program Management", "Powerpoint"],
            ["Negotation", "Software", "Networking", "Testing", "Databases"],
            ["Problem Solving", "Software", "Networking", "Information Technology", "Teamwork"]
            ];
            var certificationList = [
                ["Professional in Project Management (PPM)",
                    "CIW (Web Foundation Associate, Web Design Professional, Web & Mobile Design Professional, Web Development Professional)",
                    "Certification in Risk Management Assurance® (CRMA®)",
                    "Adobe certified expert (ACE)",
                    "Amazon Web Service (AWS) Certified Solutions Architect Certification",
                    "Certified Meeting professional",
                    "Certification in Consultative Sales Strategies",
                    "Geometric Dimensioning & Tolerancing Professional - Technologist"],

                ["National Certified Addiction Counselor Level I (NCACI)",
                    "Bing Ads Certificate",
                    "National Certified Addiction Counselor, Level II (NCACII)",
                    "Project Management in IT Security (PMITS)",
                    "Cisco Certification",
                    "Campaign developer",
                    "ASQ Quality Assurance Certifications",
                    "Quality Engineer certification (CQE)",
                    "CGRN — Certified Gastroenterology Registered Nurse",
                    "Certified clinical research associate (CCRA)",
                    "Oracle Certified Professional, (OCP) MYSQL 5.6 Developer",
                    "PRHi®: Professional in Human Resources — International",
                    "Amazon Web Services (AWS) Certified Developer",
                    "Oracle Application Express Developer Certification (Oracle APEX)"],

                ["Safety Trained Supervisor (STS)",
                    "AMA Professional Certified Marketer (PCM) Marketing Management Certifications",
                    "Agile DevOps Expert",
                    "Certified in Risk and Information Systems Control (CRISC)",
                    "Agile Scrum Foundation",
                    "Microsoft Certified Solutions Associate (MCSA) - Windows Server"],

                ["Certified Technology Manager (CTM / CSTM)",
                    "Approved Clinical Supervisor (ACS)",
                    "Puppet Certification Program",
                    "Google Analytics",
                    "Certified Government Auditing Professional® (CGAP®)",
                    "Certified Technology Manager (CTM / CSTM)",
                    "Approved Clinical Supervisor (ACS)",
                    "Fundamentals of Engineering (FE)",
                    "MIT Innovation and Technology Certification Program",
                    "Test and Balance Engineer"]

                ["Dialectical Behavior Therapist (DBT)",
                "Atlassian Certified Professional (ACP)",
                "Construction Health and Safety Technician (CHST)"],

                ["Consultative Sales Certification",
                    "IAAP Certified Administrative Professional (CAP)",
                    "Certified Information System Auditor (CISA)",
                    "Microsoft Certified Professional Developer",
                    "Certified Management Accountant",
                    "National Certified Counselor (NCSC)",
                    "Data & Marketing Association DMA Certification",
                    "Certified Scrum Product Owner (CSPO)",
                    "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexual Counselor",
                    "List of National Association of Social work Certifications/Credentials",
                    "Certified Maintenance and Reliability Technician",
                    "Certified Rehabilitation Counselor (CRC)",
                    "Clinical Research Associate (CCRA)"],

                ["GPHR®: Global Professional in Human Resources",
                    "Certified reliability engineer",
                    "Certified Public bookkeeping",
                    "Licensed Marriage and Family Therapist (LMFT)",
                    "Hootsuite Certification",
                    "Certified Sales Operations Professional (CSOP)",
                    "Professional research certification",
                    "Stanford Innovation and Entrepreneurship Certificate",
                    "CEN — Certified Emergency Nurse"],

                ["Project Management Professional (PMP) certification",
                    "Harvard Innovation and Entrepreneurship Certificate",
                    "Citrix Certification",
                    "NCCB Administrative Assistant Certification (CAA)",
                    "Professional Engineering License",
                    "Certified Safety Professional Certification (CSP)",
                    "Fundamentals of Engineering (FE)",
                    "Facebook Blueprint",
                    "Certified Information Systems Auditor (CISA)"],

                ["SHRM-CP: SHRM Certified Professional",
                    "Certified Sales Executive (CSE)",
                    "Master Project Manager (MPM)",
                    "Graduate Safety Practitioner (GSP)",
                    "Digital event strategist certification",
                    "AMA Professional Certified Marketer (PCM), Digital Marketing Certifications",
                    "Adobe Illustrator CC 2015",
                    "Music Therapist, Board Certified (MT-BC)",
                    "Scrum Alliance Certified Scrum Developer (CSD)"],

                ["HTML5",
                    "Red Hat JBoss certified developer",
                    "ISA Certified Automotive Professional",
                    "Certified Professional Sales Person (CPSP) Credential",
                    "Global Association for Quality Management (GAQM)/ Associate in project management",
                    "Environmental Health and Safety Professional Certificate",
                    "Certified Project Management Practitioner (CPMP)",
                    "Amazon Web Services certification training",
                    "Microsoft Certified Solutions Expert (MCSE) - Server Infrastructure"]
            ];
            var educationList = ["degree", "diploma", "bachelor", "master", "phd"];
            const industryOptionsList = ["business_services", "energy_and_natural_resources", "financial_services", "fmcg", "healthcarvalue", "industrial_manufacturing",
                "insurance", "leisure_travel_tourism", "life_scienc", "media_and_agency", "not_for_profit", "professional_services", "propevalue", "public_sector",
                "retail", "technology_and_telecoms", "transport_and_distribution"];
            const sectorOptionsList = ["accounting", "audit_and_advisory", "banking_and_financial_services", "construction", "engineering_and_manufacturing",
                "facilities_and_management", "human_resources", "human_resources", "information_technology", "legal", "life_sciences", "marketing", "office_support", "oil_and_gas",
                "procurement_and_supply_chain", "real_estate", "renewable_energy", "sales", "tax", "treasury"];

            for (const iterator of new Array(n)) {


                var skillIndex = 0;
                var firstNameIndex = 0;
                var lastNameIndex = 0;
                var industryOptionsListIndex = 0;
                var certificationListIndex = 0;
                var sectorOptionsListIndex = 0;
                var educationListIndex = 0;
                var positionListIndex = 0;
                var job_descriptionListIndex = 0;
                var company_nameListIndex = 0;
                var salary_rangeListIndex = 0;
               


                firstNameIndex = Math.floor(Math.random() * firstNameList.length);
                skillIndex = Math.floor(Math.random() * skillList.length);
                industryOptionsListIndex = Math.floor(Math.random() * industryOptionsList.length);
                certificationListIndex = Math.floor(Math.random() * certificationList.length);
                sectorOptionsListIndex = Math.floor(Math.random() * sectorOptionsList.length);
                educationListIndex = Math.floor(Math.random() * educationList.length);
                positionListIndex = Math.floor(Math.random() * positionList.length);
                job_descriptionListIndex = Math.floor(Math.random() * job_descriptionList.length);
                company_nameListIndex = Math.floor(Math.random() * company_nameList.length);
                salary_rangeListIndex = Math.floor(Math.random() * salary_rangeList.length);
                var emailRandomNumber = Math.floor(Math.random() * 100000);
                var email = firstNameList[firstNameIndex] + '.' + lastNameList[lastNameIndex] + emailRandomNumber + "@gmail.com";





                // job_description: [job_descriptionListIndex],
                var jobDescription = {
                    position: positionList[positionListIndex],
                    companyId: company_nameList[company_nameListIndex],
                    jobType: "Full Time",
                    jobDescription: "Good skill",
                    industry: industryOptionsList[industryOptionsListIndex],
                    sector: sectorOptionsList[sectorOptionsListIndex],
                    subSector: sectorOptionsList[sectorOptionsListIndex],
                    consultantName: firstNameList[firstNameIndex],
                    email: email,
                    salaryRange: salary_rangeList[salary_rangeListIndex],
                    certifications: certificationList[certificationListIndex],
                    skills: skillList[skillIndex],
                    education: educationList[educationListIndex],
                    major: educationList[educationListIndex],
                    location: "INDIA",
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

            var firstNameList =  ['Naseer', 'Khalid', 'Ahmed', 'Yousef', 'Sultan']
            var lastNameList =  ['Alkhaldi', 'Alqahtani', 'Khalid', 'Ahmed', 'Yousef', 'Sultan', 'Alnahdi', 'Alotaibi']
            var skillList = [
                ["Communication", "Designs", "Applications", "Program Management", "Analysis"],
                ["Project Management", "Computer Program", "Research", "Websites", "Testing"],
                ["Project Planning", "Computer Program", "Applications", "Program Management", "Powerpoint"],
                ["Negotation", "Software", "Networking", "Testing", "Databases"],
                ["Problem Solving", "Software", "Networking", "Information Technology", "Teamwork"]
            ];
            var certificationList = [
                ["Professional in Project Management (PPM)",
                    "CIW (Web Foundation Associate, Web Design Professional, Web & Mobile Design Professional, Web Development Professional)",
                    "Certification in Risk Management Assurance® (CRMA®)",
                    "Adobe certified expert (ACE)",
                    "Amazon Web Service (AWS) Certified Solutions Architect Certification",
                    "Certified Meeting professional",
                    "Certification in Consultative Sales Strategies",
                    "Geometric Dimensioning & Tolerancing Professional - Technologist"],

                ["National Certified Addiction Counselor Level I (NCACI)",
                    "Bing Ads Certificate",
                    "National Certified Addiction Counselor, Level II (NCACII)",
                    "Project Management in IT Security (PMITS)",
                    "Cisco Certification",
                    "Campaign developer",
                    "ASQ Quality Assurance Certifications",
                    "Quality Engineer certification (CQE)",
                    "CGRN — Certified Gastroenterology Registered Nurse",
                    "Certified clinical research associate (CCRA)",
                    "Oracle Certified Professional, (OCP) MYSQL 5.6 Developer",
                    "PRHi®: Professional in Human Resources — International",
                    "Amazon Web Services (AWS) Certified Developer",
                    "Oracle Application Express Developer Certification (Oracle APEX)"],

                ["Safety Trained Supervisor (STS)",
                    "AMA Professional Certified Marketer (PCM) Marketing Management Certifications",
                    "Agile DevOps Expert",
                    "Certified in Risk and Information Systems Control (CRISC)",
                    "Agile Scrum Foundation",
                    "Microsoft Certified Solutions Associate (MCSA) - Windows Server"],

                ["Certified Technology Manager (CTM / CSTM)",
                    "Approved Clinical Supervisor (ACS)",
                    "Puppet Certification Program",
                    "Google Analytics",
                    "Certified Government Auditing Professional® (CGAP®)",
                    "Certified Technology Manager (CTM / CSTM)",
                    "Approved Clinical Supervisor (ACS)",
                    "Fundamentals of Engineering (FE)",
                    "MIT Innovation and Technology Certification Program",
                    "Test and Balance Engineer"]

                ["Dialectical Behavior Therapist (DBT)",
                "Atlassian Certified Professional (ACP)",
                "Construction Health and Safety Technician (CHST)"],

                ["Consultative Sales Certification",
                    "IAAP Certified Administrative Professional (CAP)",
                    "Certified Information System Auditor (CISA)",
                    "Microsoft Certified Professional Developer",
                    "Certified Management Accountant",
                    "National Certified Counselor (NCSC)",
                    "Data & Marketing Association DMA Certification",
                    "Certified Scrum Product Owner (CSPO)",
                    "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexual Counselor",
                    "List of National Association of Social work Certifications/Credentials",
                    "Certified Maintenance and Reliability Technician",
                    "Certified Rehabilitation Counselor (CRC)",
                    "Clinical Research Associate (CCRA)"],

                ["GPHR®: Global Professional in Human Resources",
                    "Certified reliability engineer",
                    "Certified Public bookkeeping",
                    "Licensed Marriage and Family Therapist (LMFT)",
                    "Hootsuite Certification",
                    "Certified Sales Operations Professional (CSOP)",
                    "Professional research certification",
                    "Stanford Innovation and Entrepreneurship Certificate",
                    "CEN — Certified Emergency Nurse"],

                ["Project Management Professional (PMP) certification",
                    "Harvard Innovation and Entrepreneurship Certificate",
                    "Citrix Certification",
                    "NCCB Administrative Assistant Certification (CAA)",
                    "Professional Engineering License",
                    "Certified Safety Professional Certification (CSP)",
                    "Fundamentals of Engineering (FE)",
                    "Facebook Blueprint",
                    "Certified Information Systems Auditor (CISA)"],

                ["SHRM-CP: SHRM Certified Professional",
                    "Certified Sales Executive (CSE)",
                    "Master Project Manager (MPM)",
                    "Graduate Safety Practitioner (GSP)",
                    "Digital event strategist certification",
                    "AMA Professional Certified Marketer (PCM), Digital Marketing Certifications",
                    "Adobe Illustrator CC 2015",
                    "Music Therapist, Board Certified (MT-BC)",
                    "Scrum Alliance Certified Scrum Developer (CSD)"],

                ["HTML5",
                    "Red Hat JBoss certified developer",
                    "ISA Certified Automotive Professional",
                    "Certified Professional Sales Person (CPSP) Credential",
                    "Global Association for Quality Management (GAQM)/ Associate in project management",
                    "Environmental Health and Safety Professional Certificate",
                    "Certified Project Management Practitioner (CPMP)",
                    "Amazon Web Services certification training",
                    "Microsoft Certified Solutions Expert (MCSE) - Server Infrastructure"]
            ];
            var educationList = ["degree", "diploma", "bachelor", "master", "phd"];
            const industryOptionsList = ["business_services", "energy_and_natural_resources", "financial_services", "fmcg", "healthcarvalue", "industrial_manufacturing",
                "insurance", "leisure_travel_tourism", "life_scienc", "media_and_agency", "not_for_profit", "professional_services", "propevalue", "public_sector",
                "retail", "technology_and_telecoms", "transport_and_distribution"];
            const sectorOptionsList = ["accounting", "audit_and_advisory", "banking_and_financial_services", "construction", "engineering_and_manufacturing",
                "facilities_and_management", "human_resources", "human_resources", "information_technology", "legal", "life_sciences", "marketing", "office_support", "oil_and_gas",
                "procurement_and_supply_chain", "real_estate", "renewable_energy", "sales", "tax", "treasury",];

            for (const iterator of new Array(n)) {
                console.log("1-");


                var firstNameIndex = 0;
                var lastNameIndex = 0;
                var skillIndex = 0;
                var industryOptionsListIndex = 0;
                var certificationListIndex = 0;
                var sectorOptionsListIndex = 0;
                var educationListIndex = 0;
                var emailRandomNumber = Math.floor(Math.random() * 100000);
               
                firstNameIndex = Math.floor(Math.random() * firstNameList.length);
                lastNameIndex = Math.floor(Math.random() * firstNameList.length);
                skillIndex = Math.floor(Math.random() * skillList.length);
                industryOptionsListIndex = Math.floor(Math.random() * industryOptionsList.length);
                certificationListIndex = Math.floor(Math.random() * certificationList.length);
                sectorOptionsListIndex = Math.floor(Math.random() * sectorOptionsList.length);
                educationListIndex = Math.floor(Math.random() * educationList.length);
                var email = firstNameList[firstNameIndex] + '.' + lastNameList[lastNameIndex] + emailRandomNumber + "@gmail.com";
                var phone = Math.floor(Math.random() * 1000000000 + 9000000000);


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
                    skills: skillList[skillIndex],
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