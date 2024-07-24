function Navbar() {
  return (
    <div className="navbar bg-black border border-custom-yellow">
      <div className="navbar-start border border-indigo-600">
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
        <ul className="menu menu-horizontal px-1 bg-black text-white">
          <li>
            <a className="hover:text-custom-yellow">HOME</a>
          </li>
          <li>
            <a className="hover:text-custom-yellow">STARSHIPS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          type="button"
          className="inline-block rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mx-2">
          Log In
        </button>
        <button
          type="button"
          className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
