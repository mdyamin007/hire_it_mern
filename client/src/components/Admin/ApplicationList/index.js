import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllApplications } from "../../../redux/features/cvSlice";

const ApplicationList = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllApplications())
    }, [])


    const { applications } = useSelector(state => state.cv)

    console.log(applications)

    return (
        <div className="container mx-auto my-10">
            <div className="grid grid-cols-3 my-10 gap-4">
                {applications && applications.map(application => (
                    <div className="border rounded shadow-md p-20 hover:scale-105 transform transition-transform ease-in-out duration-400">
                        <h1 className="text-4xl font-semibold italic text-gray-700">
                            {application.firstName} {application.lastName}
                        </h1>
                        <p className="text-sm text-gray-500">
                            {application.email}
                        </p>
                        <p className="">{application.industry}</p>
                    </div>))}
            </div>
        </div>
    );
};

export default ApplicationList;
