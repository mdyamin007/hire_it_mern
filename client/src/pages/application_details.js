import { useParams } from "react-router-dom"


function ApplicationDetails() {
    const { applicationId } = useParams()
    return (
        <div>ApplicationDetails</div>
    )
}

export default ApplicationDetails