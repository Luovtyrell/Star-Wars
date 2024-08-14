import logIn from "../../assets/png/user.png";
import logOut from "../../assets/png/logout.png";
import registerIcon from "../../assets/png/register.png";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

function LoginLogout() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="navbar-end flex ml-auto mr-6">
      {user ? (
        <button
          type="button"
          onClick={handleLogout}
          className="btn btn-active btn-ghost hover:brightness-150">
          <img src={logOut} alt="Logout Icon" className="w-4 h-4" />
          LOG OUT
        </button>
      ) : (
        <>
          <a
            href="/login"
            className="btn btn-active btn-ghost hover:brightness-150 mr-4">
            <img src={logIn} alt="Login Icon" className="w-4 h-4" />
            LOG IN
          </a>
          <a
            href="/register"
            className="btn btn-active btn-ghost hover:brightness-150">
            <img src={registerIcon} alt="Register Icon" className="w-4 h-4" />
            REGISTER
          </a>
        </>
      )}
    </div>
  );
}

export default LoginLogout;
