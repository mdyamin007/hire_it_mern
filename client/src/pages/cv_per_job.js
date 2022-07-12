import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllCVForTheJob } from "../redux/features/jobCVSlice";

function CVPerJob() {
  const { jobId } = useParams();

  const dispatch = useDispatch();
  const { applications } = useSelector((state) => state.jobCV);

  console.log(applications);

  useEffect(() => {
    if (jobId) {
      dispatch(getAllCVForTheJob(jobId));
    }
  }, [jobId]);

  return (
    <div className="my-16 mx-10 flex gap-4">
      {applications &&
        applications.map((application) => (
          <Link to={`/job/applications/${application.id}`}>
            <div className="p-10 rounded-md border shadow-md hover:scale-105 transform transition-transform ease-in-out duration-400">
              <h1 className="text-2xl italic font-semibold">
                {application.firstName}&nbsp;{application.lastName}
              </h1>
              <p className="text-sm">{application.email}</p>
              <p className="text-sm">{application.phone}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default CVPerJob;
