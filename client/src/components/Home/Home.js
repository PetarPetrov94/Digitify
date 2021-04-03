/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.css";

const Home = () => {
  const [userEmail, setUserEmail] = useState("");
  const userToken = localStorage.getItem("token");
  const hasUserLoggedIn = Boolean(userToken);

  useEffect(() => {
    fetch("/home/checkuser", {
      method: "GET",
      headers: {
        Authorization: userToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserEmail(data.email));
  }, []);

  return (
    <main className="main-container">
      <Helmet>
        <title>Digitify | Home</title>
      </Helmet>
      <h1>Digitify</h1>
      <div className="product-data">
        <p>
          {Boolean(hasUserLoggedIn) ? (
            <div>Hello {userEmail}</div>
          ) : (
            <div>
              Please login <Link to="/login">here</Link>
            </div>
          )}
        </p>
      </div>
    </main>
  );
};

export default Home;
