import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import LoginLogout from "../../components/LoginLogout/LoginLogout";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import StarshipDetailCard from "../../components/SrarshipDetailCard/StarshipDetailCard";

const StarshipDetailPage = () => {
  return (
    <>
      <SocialLinks />
      <LoginLogout />
      <Header />
      <Navbar />
      <StarshipDetailCard/>
    </>
  );
};

export default StarshipDetailPage;
