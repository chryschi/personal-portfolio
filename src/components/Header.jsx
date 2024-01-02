import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-container">
          <div className="logo">Abigail Chrystal Major</div>
          <p>Web Development</p>
        </div>
      </header>
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
    </>
  );
};

export default Header;
