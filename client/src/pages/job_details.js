import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAJobPostByID } from "../redux/features/jobSlice";
import Button from "../components/Elements/Button";

function JobDetails() {
    const { jobPostId } = useParams();
    const dispatch = useDispatch();

    const { job_post } = useSelector((state) => state.jobPosts);

    useEffect(() => {
        if (jobPostId) dispatch(getAJobPostByID(jobPostId));
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

            <div className="flex container mx-auto items-end justify-end px-20 my-4">
                <Link to="/submit_cv">
                    <Button
                        bgColor={"bg-blue-500"}
                        hoverColor={"hover:bg-blue-600"}
                        text={"Apply"}
                        type={"button"}
                        textColor={"text-white"}
                    />
                </Link>
            </div>
        </div>
    );
}

export default JobDetails;
