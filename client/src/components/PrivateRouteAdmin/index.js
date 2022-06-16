import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRouteAdmin() {

    const { user } = useSelector(state => state.auth)

    return (
        <>
            {user && user.userType === "admin" ? <Outlet /> : <Navigate to={"/"} />}
        </>
    )
}

export default PrivateRouteAdmin