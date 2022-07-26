import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllJobPosts } from "../../redux/features/jobSlice";
import Button from "../Elements/Button";

const JobList = () => {
    const dispatch = useDispatch();
    const { job_posts } = useSelector((state) => state.jobPosts);


    useEffect(() => {
        dispatch(getAllJobPosts());
    }, []);

    return (
        <div className="container mx-auto my-10">
            <div className="grid grid-cols-3 my-10 gap-4">
                {job_posts &&
                    job_posts.map((jobPost) => (
                        // <Link to={`/job_details/${jobPost.id}`} >

                        <div key={jobPost._id} className="border rounded shadow-md p-20 hover:scale-105 transform transition-transform ease-in-out duration-400">
                            <h1 className="text-4xl font-semibold italic text-gray-700">
                                {jobPost.position}
                            </h1>
                            <p className="text-sm text-gray-500">
                                {jobPost.location}, {jobPost.jobType}
                            </p>
                            <p className="">{jobPost.salaryRange}</p>
                            <div className="grid grid-cols-2 my-10 gap-4">
                                <Link to={`/job_details/${jobPost._id}`} className="bg-blue-500 text-white text-center  py-1">
                                    Apply
                                </Link>
                                <Link to={`/auto_cv_match_list/${jobPost._id}`} className="bg-blue-500 text-white text-center  py-1">
                                    View Auto Match
                                </Link>
                            </div>
                        </div>
                        // </Link>
                    ))}
            </div>
        </div>
    );
};

export default JobList;
