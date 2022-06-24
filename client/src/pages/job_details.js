import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAJobPostByID } from '../redux/features/jobSlice'

function JobDetails() {

    const { jobPostId } = useParams()
    const dispatch = useDispatch()

    const { job_post } = useSelector(state => state.jobPosts)

    useEffect(() => {
        if (jobPostId) dispatch(getAJobPostByID(jobPostId));
    }, [jobPostId])


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className='border rounded-md shadow-md w-3/4 p-20'>
                <h1 className="text-4xl font-semibold italic text-gray-700">
                    {job_post.position}
                </h1>
                <p className="text-sm text-gray-500">
                    {job_post.jobType}
                </p>
                <p className="">{job_post.salaryRange}</p>
                <p>{job_post.location}</p>
                <p>{job_post.sector} - {job_post.subSector}</p>
                <p>{job_post.industry}</p>
                <h1 className="text-4xl mt-10 font-semibold text-gray-700">
                    Description
                </h1>
                <p>{job_post.jobDescription}</p> <br /><br /><br />
                <p>Consultant: {job_post.consultantName}</p>
            </div>
        </div>
    )
}

export default JobDetails