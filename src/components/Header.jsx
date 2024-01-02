import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-logo">Abigail Chrystal Major</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Projects</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
