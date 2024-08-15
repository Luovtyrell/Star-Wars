import PilotsListCard from "../../components/PilotsListCard/PilotsListCard";
import LoginLogout from "../../components/LoginLogout/LoginLogout";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

function PilotsPage() {
  return (
    <>
      <SocialLinks />
      <LoginLogout />
      <Header />
      <Navbar />
      <PilotsListCard />
    </>
  );
}

export default PilotsPage;
