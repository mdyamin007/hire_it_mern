import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApplicantDetailsById } from "../redux/features/cvSlice";
import AdobeLogo from "../assets/adobe_reader.png";
import { BASE_URL } from "../api";

function ApplicationDetails() {
    const { applicationId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        if (applicationId) dispatch(getApplicantDetailsById(applicationId));
    }, [applicationId]);

    const { applicantDetails } = useSelector((state) => state.cv);

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
                                rel="noopener"
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
                    <br />
                    <br />
                    <p>Current Salary: {applicantDetails.currentSalary}</p>
                </div>
            )}
        </div>
    );
}

export default ApplicationDetails;
