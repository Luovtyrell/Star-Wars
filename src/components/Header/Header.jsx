import starWars4 from "../../assets/svg/star-wars-4.svg";

function Header() {
  return (
    <div className="container mx-auto my-6 flex-auto text-center">
      <img className="mx-auto h-20" src={starWars4} alt="starwars" />
    </div>
  );
}

export default Header;
