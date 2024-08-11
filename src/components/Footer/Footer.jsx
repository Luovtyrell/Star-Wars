import reactLogo from "../../assets/svg/react-logo.svg";

function Footer() {
  return (
    <footer className="footer footer-center bg-black text-star-white p-10">
      <aside>
        <p className="font-bold">
          React Star Wars
          <br />
          Lucía Ordoñez Vilanova
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <img src={reactLogo} alt="React logo" />
    </footer>
  );
}

export default Footer;
