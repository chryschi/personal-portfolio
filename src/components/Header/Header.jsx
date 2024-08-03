import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Header.css";
import useViewport from "../useViewport";

const Header = () => {
  const { grayscale } = useContext(AppContext);
  const { width } = useViewport();
  const breakpointMedium = 820;
  const breakpointSmall = 500;

  return (
    <>
      <header className={grayscale ? "grayscale" : ""}>
        <div className="logo-container">
          <div className="logo">
            {width > breakpointSmall ? "Abigail " : "A. "}
            {width > breakpointMedium ? "Chrystal " : ""}Major
          </div>
          <p>Web Development</p>
        </div>
      </header>
      <nav className={grayscale ? "grayscale" : ""}>
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
