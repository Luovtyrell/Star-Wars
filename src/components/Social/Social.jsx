import tiktok from "../../assets/svg/tiktok.svg";
import instagram from "../../assets/png/instagram.png";
import x from "../../assets/png/x.png";
import facebook from "../../assets/png/facebook.png";
import youtube from "../../assets/svg/icons8-youtube-50.svg";

function Social() {
  return (
    <div className="flex flex-col items-start px-4 mt-9 ml-9">
      <ul className="flex items-center space-x-4 list-none p-0 m-0">
        <li>
          <a
            className="flex items-center"
            href="https://www.tiktok.com/@starwars"
            target="_blank"
            rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://www.instagram.com/starwars/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://twitter.com/starwars"
            target="_blank"
            rel="noopener noreferrer">
            <img src={x} alt="X" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://www.facebook.com/StarWars"
            target="_blank"
            rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://www.youtube.com/user/starwars"
            target="_blank"
            rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="w-6 h-6" />
          </a>
        </li>
        <div className="w-px h-6 bg-gray-400"></div>
        <li>
          <a
            className="flex items-center"
            href="https://starwarskids.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15"
              alt="Star Wars Kids"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
