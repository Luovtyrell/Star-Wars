import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import NavesList from "../../components/StarshiplistCard/StarshiplistCard";
import LoginLogout from "../../components/LoginLogout/LoginLogout";

const StarshipsPage = () => {
  return (
    <>
      <LoginLogout />
      <Header />
      <Navbar />
      <NavesList />
    </>
  );
};

export default StarshipsPage;
