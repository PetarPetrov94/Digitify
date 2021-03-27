import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";

const Home = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <main className="main-container">
      <Helmet>
        <title>Digitify | Home</title>
      </Helmet>
      <h1>Digitify</h1>
      <div className="product-data">
        <p>{!data ? "Loading..." : data}</p>
      </div>
    </main>
  );
};

export default Home;
