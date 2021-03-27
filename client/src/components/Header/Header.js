import "./Header.css";
import HeaderItem from "./HeaderItem/HeaderItem";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navigation">
      <ul>
        <img className="site-logo" src="digitify.png" alt="digitify-logo" />
        <Link to="/">
          <HeaderItem>Home</HeaderItem>
        </Link>
        <Link to="/categories">
          <HeaderItem>Categories</HeaderItem>
        </Link>
        <Link to="/about">
          <HeaderItem>About</HeaderItem>
        </Link>
        <Link to="/contacts">
          <HeaderItem>Contacts</HeaderItem>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
