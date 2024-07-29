function Navbar() {
  return (
    <div className="navbar bg-black border border-custom-yellow">
      <div className="navbar-start border border-indigo-900">
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
              <a className="hover:text-custom-yellow">HOME</a>
            </li>
            <li>
              <a className="hover:text-custom-yellow">STARSHIPS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex border border-custom-yellow">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className=" hover:text-custom-yellow">HOME</a>
          </li>
          <li>
            <a className=" hover:text-custom-yellow">STARSHIPS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button type="button" className="btn btn-primary mx-2">
          Log In
        </button>
        <button
          type="button"
          className="btn btn-neutral">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
