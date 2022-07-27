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
        code: "A"
    },
    {
        value: "Business",
        label: "Business",
        code: "B",
    },
    {
        value: "Sales",
        label: "Sales",
        code: "C",
    },
    {
        value: "Marketing",
        label: "Marketing",
        code: "D",
    },
    {
        value: "Communication",
        label: "Communication",
        code: "E",
    },
    {
        value: "Microsoft Office",
        label: "Microsoft Office",
        code: "F",
    },
    {
        value: "Customer Service",
        label: "Customer Service",
        code: "G",
    },
    {
        value: "Training",
        label: "Training",
        code: "H",
    },
    {
        value: "Microsoft Excel",
        label: "Microsoft Excel",
        code: "I",
    },
    {
        value: "Project Management",
        label: "Project Management",
        code: "J",
    },
    {
        value: "Designs",
        label: "Designs",
        code: "K",
    },
    {
        value: "Analysis",
        label: "Analysis",
        code: "L",
    },
    {
        value: "Research",
        label: "Research",
        code: "M",
    },
    {
        value: "Websites",
        label: "Websites",
        code: "N",
    },
    {
        value: "Budgets",
        label: "Budgets",
        code: "O",
    },
    {
        value: "Organization",
        label: "Organization",
        code: "P",
    },
    {
        value: "Leadership",
        label: "Leadership",
        code: "Q",
    },
    {
        value: "Time Management",
        label: "Time Management",
        code: "R",
    },
    {
        value: "Project Planning",
        label: "Project Planning",
        code: "S",
    },
    {
        value: "Computer Program",
        label: "Computer Program",
        code: "T",
    },
    {
        value: "Strategic Planning",
        label: "Strategic Planning",
        code: "U",
    },
    {
        value: "Business Services",
        label: "Business Services",
        code: "V",
    },
    {
        value: "Applications",
        label: "Applications",
        code: "W",
    },
    {
        value: "Reports",
        label: "Reports",
        code: "X",
    },
    {
        value: "Microsoft Word",
        label: "Microsoft Word",
        code: "Y",
    },
    {
        value: "Program Management",
        label: "Program Management",
        code: "Z",
    },
    {
        value: "Powerpoint",
        label: "Powerpoint",
        code: "AA",
    },
    {
        value: "Negotation",
        label: "Negotation",
        code: "AB",
    },
    {
        value: "Software",
        label: "Software",
        code: "AC",
    },
    {
        value: "Networking",
        label: "Networking",
        code: "AD",
    },
    {
        value: "Offices",
        label: "Offices",
        code: "AE",
    },
    {
        value: "English",
        label: "English",
        code: "AF",
    },
    {
        value: "Data",
        label: "Data",
        code: "AG",
    },
    {
        value: "Education",
        label: "Education",
        code: "AH",
    },
    {
        value: "Events",
        label: "Events",
        code: "AI",
    },
    {
        value: "International",
        label: "International",
        code: "AJ",
    },
    {
        value: "Testing",
        label: "Testing",
        code: "AK",
    },
    {
        value: "Writing",
        label: "Writing",
        code: "AL",
    },
    {
        value: "Vendors",
        label: "Vendors",
        code: "AM",
    },
    {
        value: "Advertising",
        label: "Advertising",
        code: "AN",
    },
    {
        value: "Databases",
        label: "Databases",
        code: "AO",
    },
    {
        value: "Technology",
        label: "Technology",
        code: "AP",
    },
    {
        value: "Finance",
        label: "Finance",
        code: "AQ",
    },
    {
        value: "Retail",
        label: "Retail",
        code: "AR",
    },
    {
        value: "accounting",
        label: "accounting",
        code: "AS",
    },
    {
        value: "social media",
        label: "social media",
        code: "AT",
    },
    {
        value: "Teaching",
        label: "Teaching",
        code: "AU",
    },
    {
        value: "Engineering",
        label: "Engineering",
        code: "AV",
    },
    {
        value: "Performance Tuning",
        label: "Performance Tuning",
        code: "AW",
    },
    {
        value: "Problem Solving",
        label: "Problem Solving",
        code: "AX",
    },
    {
        value: "Marketing Strategy",
        label: "Marketing Strategy",
        code: "AY",
    },
    {
        value: "Materials",
        label: "Materials",
        code: "AZ",
    },
    {
        value: "Recruiting",
        label: "Recruiting",
        code: "BA",
    },
    {
        value: "Order Fulfillment",
        label: "Order Fulfillment",
        code: "BB",
    },
    {
        value: "Corporate Law",
        label: "Corporate Law",
        code: "BC",
    },
    {
        value: "Photoshop",
        label: "Photoshop",
        code: "BD",
    },
    {
        value: "New business development",
        label: "New business development",
        code: "BE",
    },
    {
        value: "Human resources",
        label: "Human resources",
        code: "BF",
    },
    {
        value: "Public speaking",
        label: "Public speaking",
        code: "BG",
    },
    {
        value: "Manufacturing",
        label: "Manufacturing",
        code: "BH",
    },
    {
        value: "Internal Audit",
        label: "Internal Audit",
        code: "BI",
    },
    {
        value: "strategy",
        label: "strategy",
        code: "BJ",
    },
    {
        value: "Employees",
        label: "Employees",
        code: "BK",
    },
    {
        value: "Cost",
        label: "Cost",
        code: "BL",
    },
    {
        value: "Business Development",
        label: "Business Development",
        code: "BM",
    },
    {
        value: "Windows",
        label: "Windows",
        code: "BN",
    },
    {
        value: "Public Relations",
        label: "Public Relations",
        code: "BO",
    },
    {
        value: "Product Development",
        label: "Product Development",
        code: "BP",
    },
    {
        value: "Auditing",
        label: "Auditing",
        code: "BQ",
    },
    {
        value: "Business Strategy",
        label: "Business Strategy",
        code: "BR",
    },
    {
        value: "Presentations",
        label: "Presentations",
        code: "BS",
    },
    {
        value: "Construction",
        label: "Construction",
        code: "BT",
    },
    {
        value: "Real Estate",
        label: "Real Estate",
        code: "BU",
    },
    {
        value: "Editing",
        label: "Editing",
        code: "BV",
    },
    {
        value: "Sales Management",
        label: "Sales Management",
        code: "BW",
    },
    {
        value: "Team Building",
        label: "Team Building",
        code: "BX",
    },
    {
        value: "Healthcare",
        label: "Healthcare",
        code: "BY",
    },
    {
        value: "Revenue",
        label: "Revenue",
        code: "BZ",
    },
    {
        value: "Compliance",
        label: "Compliance",
        code: "DA",
    },
    {
        value: "Legal",
        label: "Legal",
        code: "DB",
    },
    {
        value: "Innovation",
        label: "Innovation",
        code: "DC",
    },
    {
        value: "Policy",
        label: "Policy",
        code: "DD",
    },
    {
        value: "Mentoring",
        label: "Mentoring",
        code: "DE",
    },
    {
        value: "Commercial Real Estate",
        label: "Commercial Real Estate",
        code: "DF",
    },
    {
        value: "Consulting",
        label: "Consulting",
        code: "DG",
    },
    {
        value: "Information Technology",
        label: "Information Technology",
        code: "DH",
    },
    {
        value: "Process Improvement",
        label: "Process Improvement",
        code: "DI",
    },

    {
        value: "Change management",
        label: "Change management",
        code: "DJ",
    },

    {
        value: "Heavy Equipment",
        label: "Heavy Equipment",
        code: "DK",
    },
    {
        value: "Teamwork",
        label: "Teamwork",
        code: "DL",
    },
    {
        value: "Promotions",
        label: "Promotions",
        code: "DM",
    },
    {
        value: "Facilities Management",
        label: "Facilities Management",
        code: "DN",
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
        code: "A",
    },
    {
        value: "CIW (Web Foundation Associate, Web Design Professional, Web & Mobile Design Professional, Web Development Professional)",
        label: "CIW (Web Foundation Associate, Web Design Professional, Web & Mobile Design Professional, Web Development Professional)",
        code: "B",
    },
    {
        value: "Certification in Risk Management Assurance® (CRMA®)",
        label: "Certification in Risk Management Assurance® (CRMA®)",
        code: "C",
    },
    {
        value: "Adobe certified expert (ACE)",
        label: "Adobe certified expert (ACE)",
        code: "D",
    },
    {
        value: "Amazon Web Service (AWS) Certified Solutions Architect Certification",
        label: "Amazon Web Service (AWS) Certified Solutions Architect Certification",
        code: "E",
    },
    {
        value: "Certified Meeting professional",
        label: "Certified Meeting professional",
        code: "F",
    },
    {
        value: "Certification in Consultative Sales Strategies",
        label: "Certification in Consultative Sales Strategies",
        code: "G",
    },
    {
        value: "Geometric Dimensioning & Tolerancing Professional - Technologist",
        label: "Geometric Dimensioning & Tolerancing Professional - Technologist",
        code: "H",
    },
    {
        value: "Content Marketing Institute Online Training and Certification",
        label: "Content Marketing Institute Online Training and Certification",
        code: "I",
    },
    {
        value: "PHR®: Professional in Human Resources",
        label: "PHR®: Professional in Human Resources",
        code: "J",
    },
    {
        value: "National Certified Addiction Counselor Level I (NCACI)",
        label: "National Certified Addiction Counselor Level I (NCACI)",
        code: "K",
    },
    {
        value: "Bing Ads Certificate",
        label: "Bing Ads Certificate",
        code: "L",
    },
    {
        value: "National Certified Addiction Counselor, Level II (NCACII)",
        label: "National Certified Addiction Counselor, Level II (NCACII)",
        code: "M",
    },
    {
        value: "Project Management in IT Security (PMITS)",
        label: "Project Management in IT Security (PMITS)",
        code: "N",
    },
    {
        value: "Cisco Certification",
        label: "Cisco Certification",
        code: "O",
    },
    {
        value: "Campaign developer",
        label: "Campaign developer",
        code: "P",
    },
    {
        value: "ASQ Quality Assurance Certifications",
        label: "ASQ Quality Assurance Certifications",
        code: "Q",
    },
    {
        value: "Quality Engineer certification (CQE)",
        label: "Quality Engineer certification (CQE)",
        code: "R",
    },
    {
        value: "CGRN — Certified Gastroenterology Registered Nurse",
        label: "CGRN — Certified Gastroenterology Registered Nurse",
        code: "S",
    },
    {
        value: "Certified clinical research associate (CCRA)",
        label: "Certified clinical research associate (CCRA)",
        code: "T",
    },
    {
        value: "Oracle Certified Professional, (OCP) MYSQL 5.6 Developer",
        label: "Oracle Certified Professional, (OCP) MYSQL 5.6 Developer",
        code: "U",
    },
    {
        value: "PRHi®: Professional in Human Resources — International",
        label: "PRHi®: Professional in Human Resources — International",
        code: "V",
    },
    {
        value: "Amazon Web Services (AWS) Certified Developer",
        label: "Amazon Web Services (AWS) Certified Developer",
        code: "W",
    },
    {
        value: "Oracle Application Express Developer Certification (Oracle APEX)",
        label: "Oracle Application Express Developer Certification (Oracle APEX)",
        code: "X",
    },
    {
        value: "Certified Clinical Mental Health Counselor (CCMHC)",
        label: "Certified Clinical Mental Health Counselor (CCMHC)",
        code: "Z",
    },
    {
        value: "Certified Information Systems Security Pro (CISSP)",
        label: "Certified Information Systems Security Pro (CISSP)",
        code: "AA",
    },
    {
        value: "Harvard Marketing Management Certification",
        label: "Harvard Marketing Management Certification",
        code: "AB",
    },
    {
        value: "SHRM-SCP: SHRM Senior Certified Professional",
        label: "SHRM-SCP: SHRM Senior Certified Professional",
        code: "AC",
    },
    {
        value: "CARN - Certified Addictions Registered Nurse",
        label: "CARN - Certified Addictions Registered Nurse",
        code: "AD",
    },
    {
        value: "Salesforce Certified Developer & Advanced Developer",
        label: "Salesforce Certified Developer & Advanced Developer",
        code: "AE",
    },
    {
        value: "Hubspot Marketing Certifications",
        label: "Hubspot Marketing Certifications",
        code: "AF",
    },
    {
        value: "Hubspot Sales Certification Course",
        label: "Hubspot Sales Certification Course",
        code: "AG",
    },
    {
        value: "Clinical Research Coordinator (CCRC)",
        label: "Clinical Research Coordinator (CCRC)",
        code: "AH",
    },
    {
        value: "Board certified environmental engineer",
        label: "Board certified environmental engineer",
        code: "AI",
    },
    {
        value: "ASAP Administrative Certification of Excellence (PACE)",
        label: "ASAP Administrative Certification of Excellence (PACE)",
        code: "AJ",
    },
    {
        value: "Safety Trained Supervisor (STS)",
        label: "Safety Trained Supervisor (STS)",
        code: "AK",
    },
    {
        value: "AMA Professional Certified Marketer (PCM) Marketing Management Certifications",
        label: "AMA Professional Certified Marketer (PCM) Marketing Management Certifications",
        code: "AL",
    },
    {
        value: "Agile DevOps Expert",
        label: "Agile DevOps Expert",
        code: "AM",
    },
    {
        value: "SPHRi®: Senior Professional in Human Resources — International",
        label: "SPHRi®: Senior Professional in Human Resources — International",
        code: "AN",
    },
    {
        value: "Certified in Risk and Information Systems Control (CRISC)",
        label: "Certified in Risk and Information Systems Control (CRISC)",
        code: "AO",
    },
    {
        value: "Agile Scrum Foundation",
        label: "Agile Scrum Foundation",
        code: "AP",
    },
    {
        value: "Microsoft Certified Solutions Associate (MCSA) - Windows Server",
        label: "Microsoft Certified Solutions Associate (MCSA) - Windows Server",
        code: "AQ",
    },
    {
        value: "PMP Agile Certified Practitioner (PMI-ACP)",
        label: "PMP Agile Certified Practitioner (PMI-ACP)",
        code: "AR",
    },
    {
        value: "Accredited in Medical Sales (AMS) programs",
        label: "Accredited in Medical Sales (AMS) programs",
        code: "AS",
    },
    {
        value: "Board Certified Psychologist (ABPP",
        label: "Board Certified Psychologist (ABPP",
        code: "AT",
    },
    {
        value: "Certified ScrumMaster (CSM)",
        label: "Certified ScrumMaster (CSM)",
        code: "AU",
    },
    {
        value: "Eye Movement Desensitization and Reprocessing (EMDR)",
        label: "Eye Movement Desensitization and Reprocessing (EMDR)",
        code: "AV",
    },
    {
        value: "Copyblogger Certified Content Marketer",
        label: "Copyblogger Certified Content Marketer",
        code: "AW",
    },
    {
        value: "American Association of Sexuality Educators, Counselors and Therapist",
        label: "American Association of Sexuality Educators, Counselors and Therapist",
        code: "AX",
    },
    {
        value: "Safety Trained Supervisor Construction (STSC)",
        label: "Safety Trained Supervisor Construction (STSC)",
        code: "AY",
    },
    {
        value: "Solar Heating Installer Certification",
        label: "Solar Heating Installer Certification",
        code: "AZ",
    },
    {
        value: "Equine Assisted Psychotherapist (EAGALA)",
        label: "Equine Assisted Psychotherapist (EAGALA)",
        code: "BA",
    },
    {
        value: "Certified Maintenance & Reliability Professional",
        label: "Certified Maintenance & Reliability Professional",
        code: "BB",
    },
    {
        value: "American Association of Sexuality Educators, Counselors and Therapist (ASSECT) Certified Sex Therapist",
        label: "American Association of Sexuality Educators, Counselors and Therapist (ASSECT) Certified Sex Therapist",
        code: "BC",
    },
    {
        value: "Global travel professional Certification",
        label: "Global travel professional Certification",
        code: "BD",
    },
    {
        value: "Certified meeting planning program",
        label: "Certified meeting planning program",
        code: "BE",
    },
    {
        value: "Certified Environmental, Safety and Health Trainer (CET)",
        label: "Certified Environmental, Safety and Health Trainer (CET)",
        code: "BF",
    },
    {
        value: "Certified law enforcement analyst (CLEA) program",
        label: "Certified law enforcement analyst (CLEA) program",
        code: "BG",
    },
    {
        value: "Master Addictions Counselor (MAC)",
        label: "Master Addictions Counselor (MAC)",
        code: "BH",
    },
    {
        value: "CompTIA Project+ certification",
        label: "CompTIA Project+ certification",
        code: "BI",
    },
    {
        value: "Principal Investigator (CPI)",
        label: "Principal Investigator (CPI)",
        code: "BJ",
    },
    {
        value: "Code Academy HTML",
        label: "Code Academy HTML",
        code: "BK",
    },
    {
        value: "Associate Safety Professional (ASP)",
        label: "Associate Safety Professional (ASP)",
        code: "BL",
    },
    {
        value: "AEM 6 Developer1",
        label: "AEM 6 Developer1",
        code: "BM",
    },
    {
        value: "National Certified Counselor (NCC)",
        label: "National Certified Counselor (NCC)",
        code: "BN",
    },
    {
        value: "Salesforce Certifications",
        label: "Salesforce Certifications",
        code: "BO",
    },
    {
        value: "Certified Heart Failure Nurse",
        label: "Certified Heart Failure Nurse",
        code: "BP",
    },
    {
        value: "Certified Association in Project Management CAPM",
        label: "Certified Association in Project Management CAPM",
        code: "BQ",
    },
    {
        value: "Certified Information Security Manager (CISM)",
        label: "Certified Information Security Manager (CISM)",
        code: "BR",
    },
    {
        value: "Certified Financial Services Auditor® (CFSA®)",
        label: "Certified Financial Services Auditor® (CFSA®)",
        code: "BS",
    },
    {
        value: "Cloudera Certified Developer for Apache Hadoop (CCDH)",
        label: "Cloudera Certified Developer for Apache Hadoop (CCDH)",
        code: "BT",
    },
    {
        value: "Approved clinical supervisor (ACS)",
        label: "Approved clinical supervisor (ACS)",
        code: "BU",
    },
    {
        value: "Puppet Certification Program",
        label: "Puppet Certification Program",
        code: "BV",
    },
    {
        value: "Google Analytics",
        label: "Google Analytics",
        code: "BW",
    },
    {
        value: "Certified Government Auditing Professional® (CGAP®)",
        label: "Certified Government Auditing Professional® (CGAP®)",
        code: "BX",
    },
    {
        value: "Certified Technology Manager (CTM / CSTM)",
        label: "Certified Technology Manager (CTM / CSTM)",
        code: "BY",
    },
    {
        value: "Approved Clinical Supervisor (ACS)",
        label: "Approved Clinical Supervisor (ACS)",
        code: "BZ",
    },
    {
        value: "Puppet Certification Program",
        label: "Puppet Certification Program",
        code: "CA",
    },
    {
        value: "Google Analytics",
        label: "Google Analytics",
        code: "CB",
    },
    {
        value: "Certified Government Auditing Professional® (CGAP®)",
        label: "Certified Government Auditing Professional® (CGAP®)",
        code: "CC",
    },
    {
        value: "Certified Technology Manager (CTM / CSTM)",
        label: "Certified Technology Manager (CTM / CSTM)",
        code: "CD",
    },
    {
        value: "Approved Clinical Supervisor (ACS)",
        label: "Approved Clinical Supervisor (ACS)",
        code: "CE",
    },
    {
        value: "Fundamentals of Engineering (FE)",
        label: "Fundamentals of Engineering (FE)",
        code: "CF",
    },
    {
        value: "MIT Innovation and Technology Certification Program",
        label: "MIT Innovation and Technology Certification Program",
        code: "CG",
    },
    {
        value: "Test and Balance Engineer",
        label: "Test and Balance Engineer",
        code: "CH",
    },
    {
        value: "PMI-ACP Certification",
        label: "PMI-ACP Certification",
        code: "CI",
    },
    {
        value: "Certified dangerous goods professional",
        label: "Certified dangerous goods professional",
        code: "CJ",
    },
    {
        value: "Dreamweaver CC 2015",
        label: "Dreamweaver CC 2015",
        code: "CK",
    },
    {
        value: "Certified Fraud Examiner (CFE)",
        label: "Certified Fraud Examiner (CFE)",
        code: "CL",
    },
    {
        value: "Dialectical Behavior Therapist (DBT)",
        label: "Dialectical Behavior Therapist (DBT)",
        code: "CM",
    },
    {
        value: "Atlassian Certified Professional (ACP)",
        label: "Atlassian Certified Professional (ACP)",
        code: "CN",
    },
    {
        value: "Construction Health and Safety Technician (CHST)",
        label: "Construction Health and Safety Technician (CHST)",
        code: "CO",
    },
    {
        value: "Certified Gottman Therapist (CGR)",
        label: "Certified Gottman Therapist (CGR)",
        code: "CP",
    },
    {
        value: "Certified special event professional (CSEP)",
        label: "Certified special event professional (CSEP)",
        code: "CQ",
    },
    {
        value: "Consultative Sales Certification",
        label: "Consultative Sales Certification",
        code: "CR",
    },
    {
        value: "IAAP Certified Administrative Professional (CAP)",
        label: "IAAP Certified Administrative Professional (CAP)",
        code: "CS",
    },
    {
        value: "Certified Information System Auditor (CISA)",
        label: "Certified Information System Auditor (CISA)",
        code: "CT",
    },
    {
        value: "Microsoft Certified Professional Developer",
        label: "Microsoft Certified Professional Developer",
        code: "CU",
    },
    {
        value: "Certified Management Accountant",
        label: "Certified Management Accountant",
        code: "CV",
    },
    {
        value: "National Certified Counselor (NCSC)",
        label: "National Certified Counselor (NCSC)",
        code: "CW",
    },
    {
        value: "Data & Marketing Association DMA Certification",
        label: "Data & Marketing Association DMA Certification",
        code: "CX",
    },
    {
        value: "Certified Scrum Product Owner (CSPO)",
        label: "Certified Scrum Product Owner (CSPO)",
        code: "CY",
    },
    {
        value: "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexual Counselor",
        label: "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexual Counselor",
        code: "CZ",
    },
    {
        value: "List of National Association of Social work Certifications/Credentials",
        label: "List of National Association of Social work Certifications/Credentials",
        code: "DA",
    },
    {
        value: "Certified Maintenance and Reliability Technician",
        label: "Certified Maintenance and Reliability Technician",
        code: "DB",
    },
    {
        value: "Certified Rehabilitation Counselor (CRC)",
        label: "Certified Rehabilitation Counselor (CRC)",
        code: "DC",
    },
    {
        value: "Clinical Research Associate (CCRA)",
        label: "Clinical Research Associate (CCRA)",
        code: "DD",
    },
    {
        value: "GPHR®: Global Professional in Human Resources",
        label: "GPHR®: Global Professional in Human Resources",
        code: "DE",
    },
    {
        value: "Certified reliability engineer",
        label: "Certified reliability engineer",
        code: "DF",
    },
    {
        value: "Certified Public bookkeeping",
        label: "Certified Public bookkeeping",
        code: "DG",
    },
    {
        value: "Licensed Marriage and Family Therapist (LMFT)",
        label: "Licensed Marriage and Family Therapist (LMFT)",
        code: "DH",
    },
    {
        value: "Hootsuite Certification",
        label: "Hootsuite Certification",
        code: "DI",
    },
    {
        value: "Certified Sales Operations Professional (CSOP)",
        label: "Certified Sales Operations Professional (CSOP)",
        code: "DJ",
    },
    {
        value: "Professional research certification",
        label: "Professional research certification",
        code: "DK",
    },
    {
        value: "Associate System Engineering Professional",
        label: "Associate System Engineering Professional",
        code: "DL",
    },
    {
        value: "SAFe* Agilist Certification Training",
        label: "SAFe* Agilist Certification Training",
        code: "DM",
    },
    {
        value: "REHS Certification",
        label: "REHS Certification",
        code: "DN",
    },
    {
        value: "Electromagnetic compatibility design engineer",
        label: "Electromagnetic compatibility design engineer",
        code: "DO",
    },
    {
        value: "Certified Cognitive-Behavioral Therapist (CCBT)",
        label: "Certified Cognitive-Behavioral Therapist (CCBT)",
        code: "DP",
    },
    {
        value: "ITIL v3 Foundation",
        label: "ITIL v3 Foundation",
        code: "DQ",
    },
    {
        value: "Certified Sales Leadership Professional (CSLP)",
        label: "Certified Sales Leadership Professional (CSLP)",
        code: "DR",
    },
    {
        value: "Key Accountant Certification Program",
        label: "Key Accountant Certification Program",
        code: "DS",
    },
    {
        value: "Occupational Health and Safety Technologist (OHST)",
        label: "Occupational Health and Safety Technologist (OHST)",
        code: "DT",
    },
    {
        value: "Campaign Architect",
        label: "Campaign Architect",
        code: "DU",
    },
    {
        value: "Stanford Innovation and Entrepreneurship Certificate",
        label: "Stanford Innovation and Entrepreneurship Certificate",
        code: "DV",
    },
    {
        value: "CEN — Certified Emergency Nurse",
        label: "CEN — Certified Emergency Nurse",
        code: "DW",
    },
    {
        value: "SPHR®: Senior Professional in Human Resources",
        label: "SPHR®: Senior Professional in Human Resources",
        code: "DX",
    },
    {
        value: "Certified Internal Auditor (CIA)",
        label: "Certified Internal Auditor (CIA)",
        code: "DY",
    },
    {
        value: "Puppet Labs Certification Program",
        label: "Puppet Labs Certification Program",
        code: "DZ",
    },
    {
        value: "DigitalMarketer Certified Content Marketing Specialist",
        label: "DigitalMarketer Certified Content Marketing Specialist",
        code: "EA",
    },
    {
        value: "UCI Innovation & Product Development",
        label: "UCI Innovation & Product Development",
        code: "EB",
    },
    {
        value: "National Retail Federation Certification",
        label: "National Retail Federation Certification",
        code: "EC",
    },
    {
        value: "Certified Group Psychotherapist (CGP)",
        label: "Certified Group Psychotherapist (CGP)",
        code: "ED",
    },
    {
        value: "National Registry of Environmental Professionals (NREP) Certifications",
        label: "National Registry of Environmental Professionals (NREP) Certifications",
        code: "EE",
    },
    {
        value: "Google Adwords Certification",
        label: "Google Adwords Certification",
        code: "EF",
    },
    {
        value: "Certification in Control SeUCL lf-Assessment® (CCSA®)",
        label: "Certification in Control SeUCL lf-Assessment® (CCSA®)",
        code: "EG",
    },
    {
        value: "Oracle Certified Professional OCP (Java SE Programmer, Java ME Mobile Application Developer",
        label: "Oracle Certified Professional OCP (Java SE Programmer, Java ME Mobile Application Developer",
        code: "EH",
    },
    {
        value: "Certification in Consultative Sales Communication",
        label: "Certification in Consultative Sales Communication",
        code: "EI",
    },
    {
        value: "Certifications in engineering graphics",
        label: "Certifications in engineering graphics",
        code: "EJ",
    },
    {
        value: "Certified Reliability Engineer",
        label: "Certified Reliability Engineer",
        code: "EK",
    },
    {
        value: "Association of Clinical Research Professionals – Certified Professional (ACRP-CP)",
        label: "Association of Clinical Research Professionals – Certified Professional (ACRP-CP)",
        code: "EL",
    },
    {
        value: "High-Performance Building Design",
        label: "High-Performance Building Design",
        code: "EM",
    },
    {
        value: "Microsoft (MTA)",
        label: "Microsoft (MTA)",
        code: "EN",
    },
    {
        value: "Harvard Software Engineering Certificate",
        label: "Harvard Software Engineering Certificate",
        code: "EO",
    },
    {
        value: "Oracle Certified Associate (OCA) Java SE Programmer",
        label: "Oracle Certified Associate (OCA) Java SE Programmer",
        code: "EP",
    },
    {
        value: "Certified Manufacturing Engineering",
        label: "Certified Manufacturing Engineering",
        code: "EQ",
    },
    {
        value: "IAPMO Mechanical Inspector",
        label: "IAPMO Mechanical Inspector",
        code: "ER",
    },
    {
        value: "Safety Management Specialist (SMS)",
        label: "Safety Management Specialist (SMS)",
        code: "ES",
    },
    {
        value: "Certified Medical Administrative Assistance (CMAA)",
        label: "Certified Medical Administrative Assistance (CMAA)",
        code: "ET",
    },
    {
        value: "Certified Project Manager (CPM)",
        label: "Certified Project Manager (CPM)",
        code: "EU",
    },
    {
        value: "Certified ScrumMaster (CSM)",
        label: "Certified ScrumMaster (CSM)",
        code: "EV",
    },
    {
        value: "Campaign Business Practitioner",
        label: "Campaign Business Practitioner",
        code: "EW",
    },
    {
        value: "UCI Clinical Research Certificate",
        label: "UCI Clinical Research Certificate",
        code: "EX",
    },
    {
        value: "VMware Certified Professional 5 – Data Center Virtualization (VCP5-DCV)",
        label: "VMware Certified Professional 5 – Data Center Virtualization (VCP5-DCV)",
        code: "EY",
    },
    {
        value: "Certified electronic inspector",
        label: "Certified electronic inspector",
        code: "EZ",
    },
    {
        value: "Project Management Professional (PMP) certification",
        label: "Project Management Professional (PMP) certification",
        code: "FA",
    },
    {
        value: "Harvard Innovation and Entrepreneurship Certificate",
        label: "Harvard Innovation and Entrepreneurship Certificate",
        code: "FB",
    },
    {
        value: "Citrix Certification",
        label: "Citrix Certification",
        code: "FC",
    },
    {
        value: "NCCB Administrative Assistant Certification (CAA)",
        label: "NCCB Administrative Assistant Certification (CAA)",
        code: "FD",
    },
    {
        value: "Professional Engineering License",
        label: "Professional Engineering License",
        code: "FE",
    },
    {
        value: "Certified Safety Professional Certification (CSP)",
        label: "Certified Safety Professional Certification (CSP)",
        code: "FF",
    },
    {
        value: "Fundamentals of Engineering (FE)",
        label: "Fundamentals of Engineering (FE)",
        code: "FG",
    },
    {
        value: "Facebook Blueprint",
        label: "Facebook Blueprint",
        code: "FH",
    },
    {
        value: "Certified Information Systems Auditor (CISA)",
        label: "Certified Information Systems Auditor (CISA)",
        code: "FI",
    },
    {
        value: "SHRM-CP: SHRM Certified Professional",
        label: "SHRM-CP: SHRM Certified Professional",
        code: "FJ",
    },
    {
        value: "Certified Sales Executive (CSE)",
        label: "Certified Sales Executive (CSE)",
        code: "FK",
    },
    {
        value: "CCRC — Certified Clinical Research Coordinator",
        label: "CCRC — Certified Clinical Research Coordinator",
        code: "FL",
    },
    {
        value: "Master Project Manager (MPM)",
        label: "Master Project Manager (MPM)",
        code: "FM",
    },
    {
        value: "Graduate Safety Practitioner (GSP)",
        label: "Graduate Safety Practitioner (GSP)",
        code: "FN",
    },
    {
        value: "Digital event strategist certification",
        label: "Digital event strategist certification",
        code: "FO",
    },
    {
        value: "AMA Professional Certified Marketer (PCM), Digital Marketing Certifications",
        label: "AMA Professional Certified Marketer (PCM), Digital Marketing Certifications",
        code: "FP",
    },
    {
        value: "Adobe Illustrator CC 2015",
        label: "Adobe Illustrator CC 2015",
        code: "FQ",
    },
    {
        value: "Licensed Professional Counselor (LPC)",
        label: "Licensed Professional Counselor (LPC)",
        code: "FR",
    },
    {
        value: "Music Therapist, Board Certified (MT-BC)",
        label: "Music Therapist, Board Certified (MT-BC)",
        code: "FS",
    },
    {
        value: "Scrum Alliance Certified Scrum Developer (CSD)",
        label: "Scrum Alliance Certified Scrum Developer (CSD)",
        code: "FT",
    },
    {
        value: "HTML5",
        label: "HTML5",
        code: "FU",
    },
    {
        value: "Red Hat JBoss certified developer",
        label: "Red Hat JBoss certified developer",
        code: "FV",
    },
    {
        value: "ISA Certified Automotive Professional",
        label: "ISA Certified Automotive Professional",
        code: "FW",
    },
    {
        value: "Certified Professional Sales Person (CPSP) Credential",
        label: "Certified Professional Sales Person (CPSP) Credential",
        code: "FX",
    },
    {
        value: "Global Association for Quality Management (GAQM)/ Associate in project management",
        label: "Global Association for Quality Management (GAQM)/ Associate in project management",
        code: "FY",
    },
    {
        value: "Environmental Health and Safety Professional Certificate",
        label: "Environmental Health and Safety Professional Certificate",
        code: "FZ",
    },
    {
        value: "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexuality Educator",
        label: "American Association of Sexuality Educator, Counselors and therapists (ASSECT) Certified Sexuality Educator",
        code: "GA",
    },
    {
        value: "Certified Project Management Practitioner (CPMP)",
        label: "Certified Project Management Practitioner (CPMP)",
        code: "GB",
    },
    {
        value: "Amazon Web Services certification training",
        label: "Amazon Web Services certification training",
        code: "GC",
    },
    {
        value: "Microsoft Certified Solutions Expert (MCSE) - Server Infrastructure",
        label: "Microsoft Certified Solutions Expert (MCSE) - Server Infrastructure",
        code: "GD",
    },
]

module.exports = {
    industryOptions,
    sectorOptions,
    skillOptions,
    educationOptions,
    certificationOptions
};