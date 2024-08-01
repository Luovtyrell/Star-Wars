import starWars4 from "../../assets/svg/star-wars-4.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container mx-auto px-0 pt-0 pb-0 flex-auto text-center">
      <Link to="/home">
        <img
          className="mx-auto cursor-pointer transition-transform transform hover:scale-110"
          src={starWars4}
          alt="starwars"
        />
      </Link>
    </div>
  );
}

export default Header;
