import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApplicantDetailsById } from "../redux/features/cvSlice";
import { getJobPostsByApplicationId } from "../redux/features/jobCVSlice";
import AdobeLogo from "../assets/adobe_reader.png";
import { BASE_URL } from "../api";

function ApplicationDetails() {
    const { user } = useSelector(state => state.auth)
    const { applicationId } = useParams();

    const dispatch = useDispatch();
    const { applicantDetails } = useSelector((state) => state.cv);
    const { job_posts } = useSelector((state) => state.jobCV);

    useEffect(() => {
        if (applicationId) {
            dispatch(getApplicantDetailsById(applicationId));
            dispatch(getJobPostsByApplicationId({application_id: applicationId}));
        }
    }, [applicationId]);


    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            {applicantDetails && (
                <div className="border rounded-md shadow-md w-3/4 p-20">
                    <h1 className="text-4xl font-semibold italic text-gray-700">
                        {applicantDetails.firstName} {applicantDetails.lastName}
                    </h1>
                    <p className="text-sm text-gray-500">{applicantDetails.email}</p>
                    <p className="">{applicantDetails.phone}</p>
                    {applicantDetails.cv && (
                        <div className="flex justify-start space-x-3 items-center">
                            <img src={AdobeLogo} alt="adobe icon" className="h-6 w-6" />
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`${BASE_URL}/${applicantDetails.cv.slice(7)}`}
                                className="text-blue-600"
                            >
                                {applicantDetails.cv.slice(10)}
                            </a>
                        </div>
                    )}
                    <p>
                        {applicantDetails.sector} - {applicantDetails.subSector}
                    </p>
                    <p>{applicantDetails.industry}</p>
                    <h1 className="text-4xl mt-10 font-semibold text-gray-700">
                        Certifications
                    </h1>
                    <p>{applicantDetails.certifications}</p> <br />
                    <h1 className="text-4xl mt-10 font-semibold text-gray-700">
                        Skills
                    </h1>
                    <p>{applicantDetails.skills}</p> <br />
                    <h1 className="text-4xl mt-10 font-semibold text-gray-700">
                        Education
                    </h1>
                    <p>{applicantDetails.education} - {applicantDetails.major}</p> <br />
                    <br />
                    <br />
                    <p>Current Salary: {applicantDetails.currentSalary}</p>
                </div>
            )}
            
            {user && user.userType === "admin" && (<div className="container mx-auto my-10">
                <h2 class="text-4xl text-center font-semibold italic text-gray-700">Auto Matched Jobs</h2>
                <div className="grid grid-cols-3 my-10 gap-4">
                    {job_posts &&
                        job_posts.map((jobPost) => (
                            <Link to={`/job_details/${jobPost.jobId._id}`} >
                                <div key={jobPost.jobId._id} className="border rounded shadow-md p-20 hover:scale-105 transform transition-transform ease-in-out duration-400">
                                    <h1 className="text-4xl font-semibold italic text-gray-700">
                                        {jobPost.jobId.position}
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        {jobPost.jobId.location}, {jobPost.jobId.jobType}
                                    </p>
                                    <p className="">{jobPost.jobId.salaryRange}</p>
                                    <p className="">{jobPost.jobId.score}</p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>)}
            
        </div>
    );
}

export default ApplicationDetails;
