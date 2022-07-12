import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdobeLogo from "../assets/adobe_reader.png";
import { BASE_URL } from "../api";
import { getCVByApplicationId } from "../redux/features/jobCVSlice";

function JobApplicationDetails() {
  const { jobApplicationId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (jobApplicationId) dispatch(getCVByApplicationId(jobApplicationId));
  }, [jobApplicationId]);

  const { application } = useSelector((state) => state.jobCV);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {application && (
        <div className="border rounded-md shadow-md w-3/4 p-20">
          <h1 className="text-4xl font-semibold italic text-gray-700">
            {application.firstName} {application.lastName}
          </h1>
          <p className="text-sm text-gray-500">{application.email}</p>
          <p className="">{application.phone}</p>
          {application.cv && (
            <div className="flex justify-start space-x-3 items-center">
              <img src={AdobeLogo} alt="adobe icon" className="h-6 w-6" />
              <a
                target="_blank"
                rel="noopener"
                href={`${BASE_URL}/${application.cv.slice(7)}`}
                className="text-blue-600"
              >
                {application.cv.slice(10)}
              </a>
            </div>
          )}
          <p>
            {application.sector} - {application.subSector}
          </p>
          <p>{application.industry}</p>
          <h1 className="text-4xl mt-10 font-semibold text-gray-700">
            Certifications
          </h1>
          <p>{application.certifications}</p> <br />
          <h1 className="text-4xl mt-10 font-semibold text-gray-700">Skills</h1>
          <p>{application.skills}</p> <br />
          <h1 className="text-4xl mt-10 font-semibold text-gray-700">
            Education
          </h1>
          <p>
            {application.education} - {application.major}
          </p>{" "}
          <br />
          <br />
          <br />
          <p>Current Salary: {application.currentSalary}</p>
        </div>
      )}
    </div>
  );
}

export default JobApplicationDetails;
