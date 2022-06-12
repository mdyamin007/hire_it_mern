import { Link } from "react-router-dom";

const NavBar = () => {
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
      </div>
    </nav>
  );
};

export default NavBar;
