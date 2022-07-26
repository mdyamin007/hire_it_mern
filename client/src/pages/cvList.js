import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAJobPostByID } from "../redux/features/jobSlice";
import { getJobPostsByApplicationId } from "../redux/features/jobCVSlice";
import Button from "../components/Elements/Button";

function CvList() {
  const { jobPostId } = useParams();
  const dispatch = useDispatch();

  const { job_post } = useSelector((state) => state.jobPosts);

  const { job_posts } = useSelector((state) => state.jobCV);

  useEffect(() => {
    if (jobPostId)  {
      dispatch(getAJobPostByID(jobPostId));
      dispatch(getJobPostsByApplicationId({job_id: jobPostId,page: -1,}));
    }
  }, [jobPostId]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
            {job_post && (
        <div className="border rounded-md shadow-md w-3/4 p-20">
          <h1 className="text-4xl font-semibold italic text-gray-700">
            {job_post.position}
          </h1>
          <p className="text-sm text-gray-500">{job_post.jobType}</p>
          <p className="">{job_post.salaryRange}</p>
          <p>{job_post.location}</p>
          <p>
            {job_post.sector} - {job_post.subSector}
          </p>
          <p>{job_post.industry}</p>
          <h1 className="text-4xl mt-10 font-semibold text-gray-700">
            Description
          </h1>
          <p>{job_post.jobDescription}</p> <br />
          <br />
          <br />
          <p>Consultant: {job_post.consultantName}</p>
        </div>
      )}
      {job_posts && (
        <div className="container mx-auto my-10">
        <h2 class="text-4xl text-center font-semibold italic text-gray-700">Auto Matched CV List</h2>
        <div className="grid grid-cols-3 my-10 gap-4">
            {job_posts &&
                job_posts.map((jobPost) => (
                    <Link to={`/applications/${jobPost.applicationId._id}`} >
                        <div key={jobPost.applicationId._id} className="border rounded shadow-md p-20 hover:scale-105 transform transition-transform ease-in-out duration-400">
                            <h1 className="text-4xl font-semibold italic text-gray-700">
                                {jobPost.applicationId.firstName}  {jobPost.applicationId.lastName}
                            </h1>
                            <p className="text-sm text-gray-500">
                                {jobPost.applicationId.city}, {jobPost.applicationId.country}
                            </p>
                            <p className="">{jobPost.applicationId.currentSalary}</p>
                            <p className="">{jobPost.score}</p>
                        </div>
                    </Link>
                ))}
        </div>
    </div>
      )}
    </div>
  );
}

export default CvList;
