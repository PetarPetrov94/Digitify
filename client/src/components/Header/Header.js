import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="nav-item">Logo</li>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </ul>
    </nav>
  );
};

export default Header;
