/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import { UserContext } from "./../../App";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Header = () => {
  const {
    user: { isSuccessfullyLoggedIn },
  } = useContext(UserContext);

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
        {Boolean(!isSuccessfullyLoggedIn) && (
          <>
            <Link to="/register">
              <NavbarItem>Register</NavbarItem>
            </Link>
            <Link to="/login">
              <NavbarItem>Login</NavbarItem>
            </Link>
          </>
        )}
        {Boolean(isSuccessfullyLoggedIn) && (
          <>
            <Link to="/create-offer">
              <NavbarItem>Create Offer</NavbarItem>
            </Link>
            <Link to="/logout">
              <NavbarItem>Logout</NavbarItem>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
