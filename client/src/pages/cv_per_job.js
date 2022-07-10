import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllCVForTheJob } from '../redux/features/jobCVSlice'

function CVPerJob() {
    const {jobId} = useParams()

    const dispatch = useDispatch()
    const {cv} = useSelector(state => state.jobCV)

    console.log(cv)

    useEffect(() => {
        if(jobId) {
            dispatch(getAllCVForTheJob(jobId))
        }
    }, [jobId])

  return (
    <div></div>
  )
}

export default CVPerJob