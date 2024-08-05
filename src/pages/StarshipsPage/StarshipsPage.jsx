import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import StarshipsListCard from "../../components/StarshipListCard/StarshipListCard"
import LoginLogout from "../../components/LoginLogout/LoginLogout";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const StarshipsPage = () => {
  return (
    <>
      <SocialLinks />
      <LoginLogout />
      <Header />
      <Navbar />
      <StarshipsListCard />
    </>
  );
};

export default StarshipsPage;
