import "./Navbar.css";
import NavbarItem from "./NavbarItem/NavbarItem";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navigation">
      <ul>
        <Link to="/">
          <NavbarItem>
            <img className="site-logo" src="digitify.png" alt="digitify-logo" />
          </NavbarItem>
        </Link>
        <Link to="/categories">
          <NavbarItem>Categories</NavbarItem>
        </Link>
        <Link to="/contacts">
          <NavbarItem>Contacts</NavbarItem>
        </Link>
        <Link to="/about">
          <NavbarItem>About</NavbarItem>
        </Link>
        <Link to="/register">
          <NavbarItem>Register</NavbarItem>
        </Link>
        <Link to="/login">
          <NavbarItem>Login</NavbarItem>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
