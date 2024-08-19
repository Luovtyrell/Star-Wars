import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import LoginLogout from "../../components/LoginLogout/LoginLogout";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import StarshipListCard from "../../components/StarshipListCard/StarshipListCard";

const StarshipsPage = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-lg mb-4">
            You need to be registered to access this page.
          </p>
          <a href="/login" className="btn btn-primary">
            Login
          </a>
          <a href="/register" className="btn btn-secondary ml-4">
            Register
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <SocialLinks />
      <LoginLogout />
      <Header />
      <Navbar />
      <StarshipListCard />
    </>
  );
};

export default StarshipsPage;
