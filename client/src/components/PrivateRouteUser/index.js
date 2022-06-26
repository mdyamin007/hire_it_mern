import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRouteUser() {

    const { user } = useSelector(state => state.auth)

    return (
        <>
            {user ? <Outlet /> : <Navigate to={"/login"} />}
        </>
    )
}

export default PrivateRouteUser