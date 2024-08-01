import logIn from "../../assets/png/user.png";
import logOut from "../../assets/png/logout.png";

function LoginLogout() {
  return (
    <div className="navbar-end flex ml-auto mr-6">
      <button
        type="button"
        className="btn btn-active btn-ghost hover:brightness-150">
        <img src={logIn} alt="logIn Icon" className="w-4 h-4" />
        LOG IN
      </button>
      <button
        type="button"
        className="btn btn-active btn-ghost hover:brightness-150">
        <img src={logOut} alt="logIn Icon" className="w-4 h-4" />
        LOG OUT
      </button>
    </div>
  );
}

export default LoginLogout;
