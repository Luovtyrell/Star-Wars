import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import LoginLogout from "../../components/LoginLogout/LoginLogout";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import PilotDetailCard from "../../components/PilotsDetailCard/PilotsDetailCard";

const PilotDetailPage = () => {
  return (
    <>
      <SocialLinks />
      <LoginLogout />
      <Header />
      <Navbar />
      <PilotDetailCard />
    </>
  );
};

export default PilotDetailPage;
