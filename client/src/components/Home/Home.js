import React from "react";
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
      <h1>Digitify</h1>
      <div className="product-data">
        <p>{!data ? "Loading..." : data}</p>
      </div>
    </main>
  );
};

export default Home;
