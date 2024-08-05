import tiktok from "../../assets/svg/tiktok.svg";
import instagram from "../../assets/png/instagram.png";
import x from "../../assets/png/x.png";
import facebook from "../../assets/png/facebook.png";
import youtube from "../../assets/svg/icons8-youtube-50.svg";

const socialInfo = [
  { href: "https://www.tiktok.com/@starwars", src: tiktok, alt: "TikTok" },
  {
    href: "https://www.instagram.com/starwars/",
    src: instagram,
    alt: "Instagram",
  },
  { href: "https://twitter.com/starwars", src: x, alt: "X" },
  { href: "https://www.facebook.com/StarWars", src: facebook, alt: "Facebook" },
  {
    href: "https://www.youtube.com/user/starwars",
    src: youtube,
    alt: "YouTube",
  },
  {
    href: "https://starwarskids.com/",
    src: "https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15",
    alt: "Star Wars Kids",
  },
];

const SocialLinks = () => (
  <div className="flex flex-col items-start px-4 mt-9 ml-9">
    <ul className="flex items-center space-x-4 list-none p-0 m-0">
      {socialInfo.map(({ href, src, alt }) => (
        <li key={alt}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center">
            <img src={src} alt={alt} className="w-6 h-6" />
          </a>
        </li>
      ))}
      <div className="w-px h-6 bg-gray-400"></div>
    </ul>
  </div>
);

export default SocialLinks;
