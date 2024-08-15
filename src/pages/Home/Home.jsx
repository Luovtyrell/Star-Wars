import { Link } from "react-router-dom";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LoginLogout from "../../components/LoginLogout/LoginLogout";

const Home = () => {
  return (
    <div>
      <SocialLinks />
      <LoginLogout />
      <Header />
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/src/assets/img/skeletonCrew.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
            <p className="mb-5 text-xl flex space-x-4 text-center items-center">
              Explore the most iconic starships from the galaxy far, far away.
              Dive into the world of space battles, legendary ships, and
              intergalactic adventures.
            </p>
            <div className="flex space-x-4 items-center">
              <Link to="/starships">
                <button className="btn btn-active btn-ghost btn-sm ">
                  View Starships
                </button>
              </Link>
              <Link to="/pilots">
                <button className="btn btn-active btn-ghost btn-sm">
                  View Pilots
                </button>
              </Link>
              <Link to="/films">
                <button className="btn btn-active btn-ghost btn-sm">
                  View Films
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
