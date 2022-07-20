const industryOptions = [
    { value: "business_services", label: "Business Services" },
    {
        value: "energy_and_natural_resources",
        label: "Energy & Natural Resources",
    },
    { value: "financial_services", label: "Financial Services" },
    { value: "fmcg", label: "FMCG (Fast Moving Consumer Goods)" },
    { value: "healthcare", label: "Healthcare" },
    { value: "industrial_manufacturing", label: "Industrial / Manufacturing" },
    { value: "insurance", label: "Industrial / Manufacturing" },
    { value: "leisure_travel_tourism", label: "Leisure, Travel & Tourism" },
    { value: "life_science", label: "Life Science" },
    { value: "media_and_agency", label: "Media & Agency" },
    { value: "not_for_profit", label: "Not For Profit" },
    { value: "professional_services", label: "Professional Services" },
    { value: "property", label: "Property" },
    { value: "public_sector", label: "Public Sector" },
    { value: "retail", label: "Retail" },
    { value: "technology_and_telecoms", label: "Technology & Telecoms" },
    { value: "transport_and_distribution", label: "Transport & Distribution" },
];

const sectorOptions = [
    { value: "accounting", label: "Accounting" },
    { value: "audit_and_advisory", label: "Audit & Advisory" },
    {
        value: "banking_and_financial_services",
        label: "Banking & Financial Services",
    },
    { value: "construction", label: "Construction" },
    {
        value: "engineering_and_manufacturing",
        label: "Engineering & Manufacturing",
    },
    { value: "facilities_and_management", label: "Facilities Management" },
    { value: "human_resources", label: "Human Resources" },
    { value: "human_resources", label: "Human Resources" },
    { value: "information_technology", label: "Information Technology" },
    { value: "legal", label: "Legal" },
    { value: "life_sciences", label: "Life Sciences" },
    { value: "marketing", label: "Marketing" },
    { value: "office_support", label: "Office Support" },
    { value: "oil_and_gas", label: "Oil & Gas" },
    {
        value: "procurement_and_supply_chain",
        label: "Procurement & Supply Chain",
    },
    { value: "real_estate", label: "Real Estate" },
    { value: "renewable_energy", label: "Renewable Energy" },
    { value: "sales", label: "Sales" },
    { value: "tax", label: "Tax" },
    { value: "treasury", label: "Treasury" },
];

const skillOptions = [
    {
        value: "Management",
        label: "Management",
        code:  "A"
    },
    {
        value: "Business",
        label: "Business",
        code:   "B",
    },
    {
        value: "Sales",
        label: "Sales",
        code:   "C",
    },
    {
        value: "Marketing",
        label: "Marketing",
        code:   "D",
    },
    {
        value: "Communication",
        label: "Communication",
        code:   "E",
    },
    {
        value: "Microsoft Office",
        label: "Microsoft Office",
        code:   "F",
    },
    {
        value: "Customer Service",
        label: "Customer Service",
        code:   "G",
    },
    {
        value: "Training",
        label: "Training",
        code:   "H",
    },
    {
        value: "Microsoft Excel",
        label: "Microsoft Excel",
        code:   "I",
    },
    {
        value: "Project Management",
        label: "Project Management",
        code:   "J",
    },
    {
        value: "Designs",
        label: "Designs",
        code:   "K",
    },
    {
        value: "Analysis",
        label: "Analysis",
        code:   "L",
    },
    {
        value: "Research",
        label: "Research",
        code:   "M",
    },
    {
        value: "Websites",
        label: "Websites",
        code:   "N",
    },
    {
        value: "Budgets",
        label: "Budgets",
        code:   "O",
    },
    {
        value: "Organization",
        label: "Organization",
        code:   "P",
    },
    {
        value: "Leadership",
        label: "Leadership",
        code:   "Q",
    },
    {
        value: "Time Management",
        label: "Time Management",
        code:   "R",
    },
    {
        value: "Project Planning",
        label: "Project Planning",
        code:   "S",
    },
    {
        value: "Computer Program",
        label: "Computer Program",
        code:   "T",
    },
    {
        value: "Strategic Planning",
        label: "Strategic Planning",
        code:   "U",
    },
    {
        value: "Business Services",
        label: "Business Services",
        code:   "V",
    },
    {
        value: "Applications",
        label: "Applications",
        code:   "W",
    },
    {
        value: "Reports",
        label: "Reports",
        code:   "X",
    },
    {
        value: "Microsoft Word",
        label: "Microsoft Word",
        code:   "Y",
    },
    {
        value: "Program Management",
        label: "Program Management",
        code:   "Z",
    },
    {
        value: "Powerpoint",
        label: "Powerpoint",
        code:   "AA",
    },
    {
        value: "Negotation",
        label: "Negotation",
        code:   "BB",
    },
    {
        value: "Software",
        label: "Software",
        code:   "CC",
    },
    {
        value: "Networking",
        label: "Networking",
        code:   "DD",
    },
    {
        value: "Offices",
        label: "Offices",
        code:   "EE",
    },
    {
        value: "English",
        label: "English",
        code:   "FF",
    },
    {
        value: "Data",
        label: "Data",
        code:   "GG",
    },
    {
        value: "Education",
        label: "Education",
        code:   "HH",
    },
    {
        value: "Events",
        label: "Events",
        code:   "II",
    },
    {
        value: "International",
        label: "International",
        code:   "JJ",
    },
    {
        value: "Testing",
        label: "Testing",
        code:   "KK",
    },
    {
        value: "Writing",
        label: "Writing",
        code:   "LL",
    },
    {
        value: "Vendors",
        label: "Vendors",
        code:   "MM",
    },
    {
        value: "Advertising",
        label: "Advertising",
        code:   "NN",
    },
    {
        value: "Databases",
        label: "Databases",
        code:   "OO",
    },
    {
        value: "Technology",
        label: "Technology",
        code:   "PP",
    },
    {
        value: "Finance",
        label: "Finance",
        code:   "QQ",
    },
    {
        value: "Retail",
        label: "Retail",
        code:   "RR",
    },
    {
        value: "accounting",
        label: "accounting",
        code:   "SS",
    },
    {
        value: "social media",
        label: "social media",
        code:   "TT",
    },
    {
        value: "Teaching",
        label: "Teaching",
        code:   "UU",
    },
    {
        value: "Engineering",
        label: "Engineering",
        code:   "VV",
    },
    {
        value: "Performance Tuning",
        label: "Performance Tuning",
        code:   "WW",
    },
    {
        value: "Problem Solving",
        label: "Problem Solving",
        code:   "XX",
    },
    {
        value: "Marketing Strategy",
        label: "Marketing Strategy",
        code:   "YY",
    },
    {
        value: "Materials",
        label: "Materials",
        code:   "ZZ",
    },
    {
        value: "Recruiting",
        label: "Recruiting",
        code:   "AAA",
    },
    {
        value: "Order Fulfillment",
        label: "Order Fulfillment",
        code:   "BBB",
    },
    {
        value: "Corporate Law",
        label: "Corporate Law",
        code:   "CCC",
    },
    {
        value: "Photoshop",
        label: "Photoshop",
        code:   "DDD",
    },
    {
        value: "New business development",
        label: "New business development",
        code:   "EEE",
    },
    {
        value: "Human resources",
        label: "Human resources",
        code:   "FFF",
    },
    {
        value: "Public speaking",
        label: "Public speaking",
        code:   "GGG",
    },
    {
        value: "Manufacturing",
        label: "Manufacturing",
        code:   "HHH",
    },
    {
        value: "Internal Audit",
        label: "Internal Audit",
        code:   "III",
    },
    {
        value: "strategy",
        label: "strategy",
        code:   "JJJ",
    },
    {
        value: "Employees",
        label: "Employees",
        code:   "KKK",
    },
    {
        value: "Cost",
        label: "Cost",
        code:   "LLL",
    },
    {
        value: "Business Development",
        label: "Business Development",
        code:   "MMM",
    },
    {
        value: "Windows",
        label: "Windows",
        code:   "NNN",
    },
    {
        value: "Public Relations",
        label: "Public Relations",
        code:   "OOO",
    },
    {
        value: "Product Development",
        label: "Product Development",
        code:   "PPP",
    },
    {
        value: "Auditing",
        label: "Auditing",
        code:   "QQQ",
    },
    {
        value: "Business Strategy",
        label: "Business Strategy",
        code:   "RRR",
    },
    {
        value: "Presentations",
        label: "Presentations",
        code:   "SSS",
    },
    {
        value: "Construction",
        label: "Construction",
        code:   "TTT",
    },
    {
        value: "Real Estate",
        label: "Real Estate",
        code:   "UUU",
    },
    {
        value: "Editing",
        label: "Editing",
        code:   "VVV",
    },
    {
        value: "Sales Management",
        label: "Sales Management",
        code:   "WWW",
    },
    {
        value: "Team Building",
        label: "Team Building",
        code:   "XXX",
    },
    {
        value: "Healthcare",
        label: "Healthcare",
        code:   "YYY",
    },
    {
        value: "Revenue",
        label: "Revenue",
        code:   "ZZZ",
    },
    {
        value: "Compliance",
        label: "Compliance",
        code:   "",
    },
    {
        value: "Legal",
        label: "Legal",
        code:   "",
    },
    {
        value: "Innovation",
        label: "Innovation",
        code:   "",
    },
    {
        value: "Policy",
        label: "Policy",
        code:   "",
    },
    {
        value: "Mentoring",
        label: "Mentoring",
        code:   "",
    },
    {
        value: "Commercial Real Estate",
        label: "Commercial Real Estate",
        code:   "",
    },
    {
        value: "Consulting",
        label: "Consulting",
        code:   "",
    },
    {
        value: "Information Technology",
        label: "Information Technology",
        code:   "",
    },
    {
        value: "Process Improvement",
        label: "Process Improvement",
        code:   "",
    },

    {
        value: "Change management",
        label: "Change management",
        code:   "",
    },

    {
        value: "Heavy Equipment",
        label: "Heavy Equipment",
        code:   "",
    },
    {
        value: "Teamwork",
        label: "Teamwork",
        code:   "",
    },
    {
        value: "Promotions",
        label: "Promotions",
        code:   "",
    },
    {
        value: "Facilities Management",
        label: "Facilities Management",
        code:   "",
    },
];

const educationOptions = [
    {
        label: "Degree",
        value: "degree"
    },
    {
        label: "Diploma",
        value: "diploma"
    },
    {
        label: "Bachelor",
        value: "bachelor"
    },
    {
        label: "Master",
        value: "master"
    },
    {
        label: "PhD.",
        value: "phd"
    }
]

const certificationOptions = [
    {
        value: "Professional in Project Management (PPM)",
        label: "Professional in Project Management (PPM)",
        code : "A",
    },
    {
        value: "CIW (Web Foundation Associate, Web Design Professional, Web & Mobile Design Professional, Web Development Professional)",
        label: "CIW (Web Foundation Associate, Web Design Professional, Web & Mobile Design Professional, Web Development Professional)",
        code : "B",
    },
    {
        value: "Certification in Risk Management Assurance® (CRMA®)",
        label: "Certification in Risk Management Assurance® (CRMA®)",
        code : "C",
    },
    {
        value: "Adobe certified expert (ACE)",
        label: "Adobe certified expert (ACE)",
        code : "D",
    },
    {
        value: "Amazon Web Service (AWS) Certified Solutions Architect Certification",
        label: "Amazon Web Service (AWS) Certified Solutions Architect Certification",
        code : "E",
    },
    {
        value: "Certified Meeting professional",
        label: "Certified Meeting professional",
        code : "F",
    },
    {
        value: "Certification in Consultative Sales Strategies",
        label: "Certification in Consultative Sales Strategies",
        code : "G",
    },
    {
        value: "Geometric Dimensioning & Tolerancing Professional - Technologist",
        label: "Geometric Dimensioning & Tolerancing Professional - Technologist",
        code : "H",
    },
    {
        value: "Content Marketing Institute Online Training and Certification",
        label: "Content Marketing Institute Online Training and Certification",
        code : "I",
    },
    {
        value: "PHR®: Professional in Human Resources",
        label: "PHR®: Professional in Human Resources",
        code : "J",
    },
    {
        value: "National Certified Addiction Counselor Level I (NCACI)",
        label: "National Certified Addiction Counselor Level I (NCACI)",
        code : "K",
    },
    {
        value: "Bing Ads Certificate",
        label: "Bing Ads Certificate",
        code : "L",
    },
    {
        value: "National Certified Addiction Counselor, Level II (NCACII)",
        label: "National Certified Addiction Counselor, Level II (NCACII)",
        code : "M",
    },
    {
        value: "Project Management in IT Security (PMITS)",
        label: "Project Management in IT Security (PMITS)",
        code : "N",
    },
    {
        value: "Cisco Certification",
        label: "Cisco Certification",
        code : "O",
    },
    {
        value: "Campaign developer",
        label: "Campaign developer",
        code : "P",
    },
    {
        value: "ASQ Quality Assurance Certifications",
        label: "ASQ Quality Assurance Certifications",
        code : "Q",
    },
    {
        value: "Quality Engineer certification (CQE)",
        label: "Quality Engineer certification (CQE)",
        code : "R",
    },
    {
        value: "CGRN — Certified Gastroenterology Registered Nurse",
        label: "CGRN — Certified Gastroenterology Registered Nurse",
        code : "S",
    },
    {
        value: "Certified clinical research associate (CCRA)",
        label: "Certified clinical research associate (CCRA)",
        code : "T",
    },
    {
        value: "Oracle Certified Professional, (OCP) MYSQL 5.6 Developer",
        label: "Oracle Certified Professional, (OCP) MYSQL 5.6 Developer",
        code : "U",
    },
    {
        value: "PRHi®: Professional in Human Resources — International",
        label: "PRHi®: Professional in Human Resources — International",
        code : "V",
    },
    {
        value: "Amazon Web Services (AWS) Certified Developer",
        label: "Amazon Web Services (AWS) Certified Developer",
        code : "W",
    },
    {
        value: "Oracle Application Express Developer Certification (Oracle APEX)",
        label: "Oracle Application Express Developer Certification (Oracle APEX)",
        code : "X",
    },
    {
        value: "Certified Clinical Mental Health Counselor (CCMHC)",
        label: "Certified Clinical Mental Health Counselor (CCMHC)",
        code : "Z",
    },
    {
        value: "Certified Information Systems Security Pro (CISSP)",
        label: "Certified Information Systems Security Pro (CISSP)",
        code : "AA",
    },
    {
        value: "Harvard Marketing Management Certification",
        label: "Harvard Marketing Management Certification",
        code : "BB",
    },
    {
        value: "SHRM-SCP: SHRM Senior Certified Professional",
        label: "SHRM-SCP: SHRM Senior Certified Professional",
        code : "CC",
    },
    {
        value: "CARN - Certified Addictions Registered Nurse",
        label: "CARN - Certified Addictions Registered Nurse",
        code : "DD",
    },
    {
        value: "Salesforce Certified Developer & Advanced Developer",
        label: "Salesforce Certified Developer & Advanced Developer",
        code : "EE",
    },
    {
        value: "Hubspot Marketing Certifications",
        label: "Hubspot Marketing Certifications",
        code : "FF",
    },
    {
        value: "Hubspot Sales Certification Course",
        label: "Hubspot Sales Certification Course",
        code : "GG",
    },
    {
        value: "Clinical Research Coordinator (CCRC)",
        label: "Clinical Research Coordinator (CCRC)",
        code : "HH",
    },
    {
        value: "Board certified environmental engineer",
        label: "Board certified environmental engineer",
        code : "II",
    },
    {
        value: "ASAP Administrative Certification of Excellence (PACE)",
        label: "ASAP Administrative Certification of Excellence (PACE)",
        code : "JJ",
    },
    {
        value: "Safety Trained Supervisor (STS)",
        label: "Safety Trained Supervisor (STS)",
        code : "KK",
    },
    {
        value: "AMA Professional Certified Marketer (PCM) Marketing Management Certifications",
        label: "AMA Professional Certified Marketer (PCM) Marketing Management Certifications",
        code : "LL",
    },
    {
        value: "Agile DevOps Expert",
        label: "Agile DevOps Expert",
        code : "MM",
    },
    {
        value: "SPHRi®: Senior Professional in Human Resources — International",
        label: "SPHRi®: Senior Professional in Human Resources — International",
        code : "NN",
    },
    {
        value: "Certified in Risk and Information Systems Control (CRISC)",
        label: "Certified in Risk and Information Systems Control (CRISC)",
        code : "OO",
    },
    {
        value: "Agile Scrum Foundation",
        label: "Agile Scrum Foundation",
        code : "PP",
    },
    {
        value: "Microsoft Certified Solutions Associate (MCSA) - Windows Server",
        label: "Microsoft Certified Solutions Associate (MCSA) - Windows Server",
        code : "QQ",
    },
    {
        value: "PMP Agile Certified Practitioner (PMI-ACP)",
        label: "PMP Agile Certified Practitioner (PMI-ACP)",
        code : "RR",
    },
    {
        value: "Accredited in Medical Sales (AMS) programs",
        label: "Accredited in Medical Sales (AMS) programs",
        code : "SS",
    },
    {
        value: "Board Certified Psychologist (ABPP",
        label: "Board Certified Psychologist (ABPP",
        code : "TT",
    },
    {
        value: "Certified ScrumMaster (CSM)",
        label: "Certified ScrumMaster (CSM)",
        code : "UU",
    },
    {
        value: "Eye Movement Desensitization and Reprocessing (EMDR)",
        label: "Eye Movement Desensitization and Reprocessing (EMDR)",
        code : "VV",
    },
    {
        value: "Copyblogger Certified Content Marketer",
        label: "Copyblogger Certified Content Marketer",
        code : "WW",
    },
    {
        value: "American Association of Sexuality Educators, Counselors and Therapist",
        label: "American Association of Sexuality Educators, Counselors and Therapist",
        code : "XX",
    },
    {
        value: "Safety Trained Supervisor Construction (STSC)",
        label: "Safety Trained Supervisor Construction (STSC)",
        code : "YY",
    },
    {
        value: "Solar Heating Installer Certification",
        label: "Solar Heating Installer Certification",
        code : "ZZ",
    },
    {
        value: "Equine Assisted Psychotherapist (EAGALA)",
        label: "Equine Assisted Psychotherapist (EAGALA)",
        code : "AAA",
    },
    {
        value: "Certified Maintenance & Reliability Professional",
        label: "Certified Maintenance & Reliability Professional",
        code : "BBB",
    },
    {
        value: "American Association of Sexuality Educators, Counselors and Therapist (ASSECT) Certified Sex Therapist",
        label: "American Association of Sexuality Educators, Counselors and Therapist (ASSECT) Certified Sex Therapist",
        code : "CCC",
    },
    {
        value: "Global travel professional Certification",
        label: "Global travel professional Certification",
        code : "DDD",
    },
    {
        value: "Certified meeting planning program",
        label: "Certified meeting planning program",
        code : "EEE",
    },
    {
        value: "Certified Environmental, Safety and Health Trainer (CET)",
        label: "Certified Environmental, Safety and Health Trainer (CET)",
        code : "FFF",
    },
    {
        value: "Certified law enforcement analyst (CLEA) program",
        label: "Certified law enforcement analyst (CLEA) program",
        code : "GGG",
    },
    {
        value: "Master Addictions Counselor (MAC)",
        label: "Master Addictions Counselor (MAC)",
        code : "HHH",
    },
    {
        value: "CompTIA Project+ certification",
        label: "CompTIA Project+ certification",
        code : "III",
    },
    {
        value: "Principal Investigator (CPI)",
        label: "Principal Investigator (CPI)",
        code : "JJJ",
    },
    {
        value: "Code Academy HTML",
        label: "Code Academy HTML",
        code : "KKK",
    },
    {
        value: "Associate Safety Professional (ASP)",
        label: "Associate Safety Professional (ASP)",
        code : "LLL",
    },
    {
        value: "AEM 6 Developer1",
        label: "AEM 6 Developer1",
        code : "MMM",
    },
    {
        value: "National Certified Counselor (NCC)",
        label: "National Certified Counselor (NCC)",
        code : "NNN",
    },
    {
        value: "Salesforce Certifications",
        label: "Salesforce Certifications",
        code : "OOO",
    },
    {
        value: "Certified Heart Failure Nurse",
        label: "Certified Heart Failure Nurse",
        code : "PPP",
    },
    {
        value: "Certified Association in Project Management CAPM",
        label: "Certified Association in Project Management CAPM",
        code : "QQQ",
    },
    {
        value: "Certified Information Security Manager (CISM)",
        label: "Certified Information Security Manager (CISM)",
        code : "RRR",
    },
    {
        value: "Certified Financial Services Auditor® (CFSA®)",
        label: "Certified Financial Services Auditor® (CFSA®)",
        code : "SSS",
    },
    {
        value: "Cloudera Certified Developer for Apache Hadoop (CCDH)",
        label: "Cloudera Certified Developer for Apache Hadoop (CCDH)",
        code : "TTT",
    },
    {
        value: "Approved clinical supervisor (ACS)",
        label: "Approved clinical supervisor (ACS)",
        code : "UUU",
    },
    {
        value: "Puppet Certification Program",
        label: "Puppet Certification Program",
        code : "VVV",
    },
    {
        value: "Google Analytics",
        label: "Google Analytics",
        code : "WWW",
    },
    {
        value: "Certified Government Auditing Professional® (CGAP®)",
        label: "Certified Government Auditing Professional® (CGAP®)",
        code : "XXX",
    },
    {
        value: "Certified Technology Manager (CTM / CSTM)",
        label: "Certified Technology Manager (CTM / CSTM)",
        code : "YYY",
    },
    {
        value: "Approved Clinical Supervisor (ACS)",
        label: "Approved Clinical Supervisor (ACS)",
        code : "ZZZ",
    },
    {
        value: "Puppet Certification Program",
        label: "Puppet Certification Program",
        code : "AAAA",
    },
    {
        value: "Google Analytics",
        label: "Google Analytics",
        code : "BBBB",
    },
    {
        value: "Certified Government Auditing Professional® (CGAP®)",
        label: "Certified Government Auditing Professional® (CGAP®)",
        code : "CCCC",
    },
    {
        value: "Certified Technology Manager (CTM / CSTM)",
        label: "Certified Technology Manager (CTM / CSTM)",
        code : "DDDD",
    },
    {
        value: "Approved Clinical Supervisor (ACS)",
        label: "Approved Clinical Supervisor (ACS)",
        code : "EEEE",
    },
    {
        value: "Fundamentals of Engineering (FE)",
        label: "Fundamentals of Engineering (FE)",
        code : "FFFF",
    },
    {
        value: "MIT Innovation and Technology Certification Program",
        label: "MIT Innovation and Technology Certification Program",
        code : "GGGG",
    },
    {
        value: "Test and Balance Engineer",
        label: "Test and Balance Engineer",
        code : "HHHH",
    },
    {
        value: "PMI-ACP Certification",
        label: "PMI-ACP Certification",
        code : "IIII",
    },
    {
        value: "Certified dangerous goods professional",
        label: "Certified dangerous goods professional",
        code : "JJJJ",
    },
    {
        value: "Dreamweaver CC 2015",
        label: "Dreamweaver CC 2015",
        code : "",
    },
    {
        value: "Certified Fraud Examiner (CFE)",
        label: "Certified Fraud Examiner (CFE)",
        code : "",
    },
    {
        value: "Dialectical Behavior Therapist (DBT)",
        label: "Dialectical Behavior Therapist (DBT)",
        code : "",
    },
    {
        value: "Atlassian Certified Professional (ACP)",
        label: "Atlassian Certified Professional (ACP)",
        code : "",
    },
    {
        value: "Construction Health and Safety Technician (CHST)",
        label: "Construction Health and Safety Technician (CHST)",
        code : "",
    },
    {
        value: "Certified Gottman Therapist (CGR)",
        label: "Certified Gottman Therapist (CGR)",
        code : "",
    },
    {
        value: "Certified special event professional (CSEP)",
        label: "Certified special event professional (CSEP)",
        code : "",
    },
    {
        value: "Consultative Sales Certification",
        label: "Consultative Sales Certification",
        code : "",
    },
    {
        value: "IAAP Certified Administrative Professional (CAP)",
        label: "IAAP Certified Administrative Professional (CAP)",
        code : "",
    },
    {
        value: "Certified Information System Auditor (CISA)",
        label: "Certified Information System Auditor (CISA)",
        code : "",
    },
    {
        value: "Microsoft Certified Professional Developer",
        label: "Microsoft Certified Professional Developer",
        code : "",
    },
    {
        value: "Certified Management Accountant",
        label: "Certified Management Accountant",
        code : "",
    },
    {
        value: "National Certified Counselor (NCSC)",
        label: "National Certified Counselor (NCSC)",
        code : "",
    },
    {
        value: "Data & Marketing Association DMA Certification",
        label: "Data & Marketing Association DMA Certification",
        code : "",
    },
    {
        value: "Certified Scrum Product Owner (CSPO)",
        label: "Certified Scrum Product Owner (CSPO)",
        code : "",
    },
    {
        value: "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexual Counselor",
        label: "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexual Counselor",
        code : "",
    },
    {
        value: "List of National Association of Social work Certifications/Credentials",
        label: "List of National Association of Social work Certifications/Credentials",
        code : "",
    },
    {
        value: "Certified Maintenance and Reliability Technician",
        label: "Certified Maintenance and Reliability Technician",
        code : "",
    },
    {
        value: "Certified Rehabilitation Counselor (CRC)",
        label: "Certified Rehabilitation Counselor (CRC)",
        code : "",
    },
    {
        value: "Clinical Research Associate (CCRA)",
        label: "Clinical Research Associate (CCRA)",
        code : "",
    },
    {
        value: "GPHR®: Global Professional in Human Resources",
        label: "GPHR®: Global Professional in Human Resources",
        code : "",
    },
    {
        value: "Certified reliability engineer",
        label: "Certified reliability engineer",
        code : "",
    },
    {
        value: "Certified Public bookkeeping",
        label: "Certified Public bookkeeping",
        code : "",
    },
    {
        value: "Licensed Marriage and Family Therapist (LMFT)",
        label: "Licensed Marriage and Family Therapist (LMFT)",
        code : "",
    },
    {
        value: "Hootsuite Certification",
        label: "Hootsuite Certification",
        code : "",
    },
    {
        value: "Certified Sales Operations Professional (CSOP)",
        label: "Certified Sales Operations Professional (CSOP)",
        code : "",
    },
    {
        value: "Professional research certification",
        label: "Professional research certification",
        code : "",
    },
    {
        value: "Associate System Engineering Professional",
        label: "Associate System Engineering Professional",
        code : "",
    },
    {
        value: "SAFe* Agilist Certification Training",
        label: "SAFe* Agilist Certification Training",
        code : "",
    },
    {
        value: "REHS Certification",
        label: "REHS Certification",
        code : "",
    },
    {
        value: "Electromagnetic compatibility design engineer",
        label: "Electromagnetic compatibility design engineer",
        code : "",
    },
    {
        value: "Certified Cognitive-Behavioral Therapist (CCBT)",
        label: "Certified Cognitive-Behavioral Therapist (CCBT)",
        code : "",
    },
    {
        value: "ITIL v3 Foundation",
        label: "ITIL v3 Foundation",
        code : "",
    },
    {
        value: "Certified Sales Leadership Professional (CSLP)",
        label: "Certified Sales Leadership Professional (CSLP)",
        code : "",
    },
    {
        value: "Key Accountant Certification Program",
        label: "Key Accountant Certification Program",
        code : "",
    },
    {
        value: "Occupational Health and Safety Technologist (OHST)",
        label: "Occupational Health and Safety Technologist (OHST)",
        code : "",
    },
    {
        value: "Campaign Architect",
        label: "Campaign Architect",
        code : "",
    },
    {
        value: "Stanford Innovation and Entrepreneurship Certificate",
        label: "Stanford Innovation and Entrepreneurship Certificate",
        code : "",
    },
    {
        value: "CEN — Certified Emergency Nurse",
        label: "CEN — Certified Emergency Nurse",
        code : "",
    },
    {
        value: "SPHR®: Senior Professional in Human Resources",
        label: "SPHR®: Senior Professional in Human Resources",
        code : "",
    },
    {
        value: "Certified Internal Auditor (CIA)",
        label: "Certified Internal Auditor (CIA)",
        code : "",
    },
    {
        value: "Puppet Labs Certification Program",
        label: "Puppet Labs Certification Program",
        code : "",
    },
    {
        value: "DigitalMarketer Certified Content Marketing Specialist",
        label: "DigitalMarketer Certified Content Marketing Specialist",
        code : "",
    },
    {
        value: "UCI Innovation & Product Development",
        label: "UCI Innovation & Product Development",
        code : "",
    },
    {
        value: "National Retail Federation Certification",
        label: "National Retail Federation Certification",
        code : "",
    },
    {
        value: "Certified Group Psychotherapist (CGP)",
        label: "Certified Group Psychotherapist (CGP)",
        code : "",
    },
    {
        value: "National Registry of Environmental Professionals (NREP) Certifications",
        label: "National Registry of Environmental Professionals (NREP) Certifications",
        code : "",
    },
    {
        value: "Google Adwords Certification",
        label: "Google Adwords Certification",
        code : "",
    },
    {
        value: "Certification in Control SeUCL lf-Assessment® (CCSA®)",
        label: "Certification in Control SeUCL lf-Assessment® (CCSA®)",
        code : "",
    },
    {
        value: "Oracle Certified Professional OCP (Java SE Programmer, Java ME Mobile Application Developer",
        label: "Oracle Certified Professional OCP (Java SE Programmer, Java ME Mobile Application Developer",
        code : "",
    },
    {
        value: "Certification in Consultative Sales Communication",
        label: "Certification in Consultative Sales Communication",
        code : "",
    },
    {
        value: "Certifications in engineering graphics",
        label: "Certifications in engineering graphics",
        code : "",
    },
    {
        value: "Certified Reliability Engineer",
        label: "Certified Reliability Engineer",
        code : "",
    },
    {
        value: "Association of Clinical Research Professionals – Certified Professional (ACRP-CP)",
        label: "Association of Clinical Research Professionals – Certified Professional (ACRP-CP)",
        code : "",
    },
    {
        value: "High-Performance Building Design",
        label: "High-Performance Building Design",
        code : "",
    },
    {
        value: "Microsoft (MTA)",
        label: "Microsoft (MTA)",
        code : "",
    },
    {
        value: "Harvard Software Engineering Certificate",
        label: "Harvard Software Engineering Certificate",
        code : "",
    },
    {
        value: "Oracle Certified Associate (OCA) Java SE Programmer",
        label: "Oracle Certified Associate (OCA) Java SE Programmer",
        code : "",
    },
    {
        value: "Certified Manufacturing Engineering",
        label: "Certified Manufacturing Engineering",
        code : "",
    },
    {
        value: "IAPMO Mechanical Inspector",
        label: "IAPMO Mechanical Inspector",
        code : "",
    },
    {
        value: "Safety Management Specialist (SMS)",
        label: "Safety Management Specialist (SMS)",
        code : "",
    },
    {
        value: "Certified Medical Administrative Assistance (CMAA)",
        label: "Certified Medical Administrative Assistance (CMAA)",
        code : "",
    },
    {
        value: "Certified Project Manager (CPM)",
        label: "Certified Project Manager (CPM)",
        code : "",
    },
    {
        value: "Certified ScrumMaster (CSM)",
        label: "Certified ScrumMaster (CSM)",
        code : "",
    },
    {
        value: "Campaign Business Practitioner",
        label: "Campaign Business Practitioner",
        code : "",
    },
    {
        value: "UCI Clinical Research Certificate",
        label: "UCI Clinical Research Certificate",
        code : "",
    },
    {
        value: "VMware Certified Professional 5 – Data Center Virtualization (VCP5-DCV)",
        label: "VMware Certified Professional 5 – Data Center Virtualization (VCP5-DCV)",
        code : "",
    },
    {
        value: "Certified electronic inspector",
        label: "Certified electronic inspector",
        code : "",
    },
    {
        value: "Project Management Professional (PMP) certification",
        label: "Project Management Professional (PMP) certification",
        code : "",
    },
    {
        value: "Harvard Innovation and Entrepreneurship Certificate",
        label: "Harvard Innovation and Entrepreneurship Certificate",
        code : "",
    },
    {
        value: "Citrix Certification",
        label: "Citrix Certification",
        code : "",
    },
    {
        value: "NCCB Administrative Assistant Certification (CAA)",
        label: "NCCB Administrative Assistant Certification (CAA)",
        code : "",
    },
    {
        value: "Professional Engineering License",
        label: "Professional Engineering License",
        code : "",
    },
    {
        value: "Certified Safety Professional Certification (CSP)",
        label: "Certified Safety Professional Certification (CSP)",
        code : "",
    },
    {
        value: "Fundamentals of Engineering (FE)",
        label: "Fundamentals of Engineering (FE)",
        code : "",
    },
    {
        value: "Facebook Blueprint",
        label: "Facebook Blueprint",
        code : "",
    },
    {
        value: "Certified Information Systems Auditor (CISA)",
        label: "Certified Information Systems Auditor (CISA)",
        code : "",
    },
    {
        value: "SHRM-CP: SHRM Certified Professional",
        label: "SHRM-CP: SHRM Certified Professional",
        code : "",
    },
    {
        value: "Certified Sales Executive (CSE)",
        label: "Certified Sales Executive (CSE)",
        code : "",
    },
    {
        value: "CCRC — Certified Clinical Research Coordinator",
        label: "CCRC — Certified Clinical Research Coordinator",
        code : "",
    },
    {
        value: "Master Project Manager (MPM)",
        label: "Master Project Manager (MPM)",
        code : "",
    },
    {
        value: "Graduate Safety Practitioner (GSP)",
        label: "Graduate Safety Practitioner (GSP)",
        code : "",
    },
    {
        value: "Digital event strategist certification",
        label: "Digital event strategist certification",
        code : "",
    },
    {
        value: "AMA Professional Certified Marketer (PCM), Digital Marketing Certifications",
        label: "AMA Professional Certified Marketer (PCM), Digital Marketing Certifications",
        code : "",
    },
    {
        value: "Adobe Illustrator CC 2015",
        label: "Adobe Illustrator CC 2015",
        code : "",
    },
    {
        value: "Licensed Professional Counselor (LPC)",
        label: "Licensed Professional Counselor (LPC)",
        code : "",
    },
    {
        value: "Music Therapist, Board Certified (MT-BC)",
        label: "Music Therapist, Board Certified (MT-BC)",
        code : "",
    },
    {
        value: "Scrum Alliance Certified Scrum Developer (CSD)",
        label: "Scrum Alliance Certified Scrum Developer (CSD)",
        code : "",
    },
    {
        value: "HTML5",
        label: "HTML5",
        code : "",
    },
    {
        value: "Red Hat JBoss certified developer",
        label: "Red Hat JBoss certified developer",
        code : "",
    },
    {
        value: "ISA Certified Automotive Professional",
        label: "ISA Certified Automotive Professional",
        code : "",
    },
    {
        value: "Certified Professional Sales Person (CPSP) Credential",
        label: "Certified Professional Sales Person (CPSP) Credential",
        code : "",
    },
    {
        value: "Global Association for Quality Management (GAQM)/ Associate in project management",
        label: "Global Association for Quality Management (GAQM)/ Associate in project management",
        code : "",
    },
    {
        value: "Environmental Health and Safety Professional Certificate",
        label: "Environmental Health and Safety Professional Certificate",
        code : "",
    },
    {
        value: "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexuality Educator",
        label: "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexuality Educator",
        code : "",
    },
    {
        value: "Certified Project Management Practitioner (CPMP)",
        label: "Certified Project Management Practitioner (CPMP)",
        code : "",
    },
    {
        value: "Amazon Web Services certification training",
        label: "Amazon Web Services certification training",
        code : "",
    },
    {
        value: "Microsoft Certified Solutions Expert (MCSE) - Server Infrastructure",
        label: "Microsoft Certified Solutions Expert (MCSE) - Server Infrastructure",
        code : "",
    },
]

module.exports = {
    industryOptions,
    sectorOptions,
    skillOptions,
    educationOptions,
    certificationOptions
  };