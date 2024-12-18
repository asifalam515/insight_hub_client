import { Link, Links, NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, logOutUser } = useAuth();
  const handleLogOut = () => {
    logOutUser().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged Out",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <Link>Add Article</Link>
      </li>
      <li>
        <Link>All Articles</Link>
      </li>
      <li>
        <Link>Subscription</Link>
      </li>
      {/* TODO:condition:if the user is admin */}
      <li>
        <Link>Dashboard</Link>
      </li>
      <li>
        <Link>My Articles</Link>
      </li>
      {/*TODO: condition :Will shown if the user only take premium subs*/}
      <li>
        <Link>Premium Articles</Link>
      </li>
      {/* TODO: USER photo will be shown.it will take to profile  */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-4xl">
            <Typewriter loop={2} cursorColor words={["Insight Hub"]} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* DOne:condition:if logged in show profile img and logout,else show login */}
          {user ? (
            <>
              <Link to="/profile">
                <img
                  className="btn btn-xl rounded-2xl p-0 m-0"
                  src={user.photoURL}
                  alt=""
                />
              </Link>

              <button onClick={handleLogOut} className="btn  btn-warning ">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
