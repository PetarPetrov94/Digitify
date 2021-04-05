/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { UserContext } from "../../App";
import "./Home.css";

const Home = () => {
  const {
    user: { isSuccessfullyLoggedIn, email: userEmail },
  } = useContext(UserContext);

  return (
    <main className="main-container">
      <Helmet>
        <title>Digitify | Home</title>
      </Helmet>
      <h1>Digitify</h1>
      <div className="product-data">
        <div>
          {Boolean(isSuccessfullyLoggedIn) ? (
            <p>Hello {userEmail.split("@")[0]}</p>
          ) : (
            <div>
              Please login <Link to="/login">here</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
