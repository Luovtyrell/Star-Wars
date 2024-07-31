import starWars4 from "../../assets/svg/star-wars-4.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container mx-auto my-6 flex-auto text-center">
      <Link to="/home">
        <img
          className="mx-auto h-20 cursor-pointer transition-transform transform hover:scale-110 hover:brightness-150"
          src={starWars4}
          alt="starwars"
        />
      </Link>
    </div>
  );
}

export default Header;
