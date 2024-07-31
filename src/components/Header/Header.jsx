import starWars4 from "../../assets/svg/star-wars-4.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto my-6 flex-auto text-center">
      <img
        className="mx-auto h-20 cursor-pointer transition-transform transform hover:scale-110 hover:brightness-150"
        src={starWars4}
        alt="starwars"
        onClick={goToHome}
      />
    </div>
  );
}

export default Header;
