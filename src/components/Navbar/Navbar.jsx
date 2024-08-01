import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar nav-border bg-black border-b border-b-star-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            <li>
              <Link to="/home" className="hover:brightness-150">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/starships" className="hover:brightness-150">
                STARSHIPS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home" className="hover:brightness-150">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/starships" className="hover:brightness-150">
              STARSHIPS
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default Navbar;
