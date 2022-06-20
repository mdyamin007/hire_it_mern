import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/features/authSlice";

const NavBar = () => {

  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <nav className="w-full flex justify-between items-center py-4 px-10 bg-black">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-bold tracking-wide text-yellow-300">
            Hire it!
          </h1>
        </Link>
      </div>
      <div className="flex space-x-3">
        {user && user.userType === "admin" && (<Link to="/admin_dashboard"><button className="py-3 px-5 bg-indigo-600 text-white rounded">
          Dashboard
        </button></Link>)}
        {user ? (<button onClick={handleLogout} className="py-3 px-5 bg-red-500 text-white rounded">
          Log out
        </button>) : (
          <>
            <Link to="/login">
              <button className="py-3 px-5 bg-green-600 text-white rounded">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="py-3 px-5 bg-red-500 text-white rounded">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
