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
    <div className="home-container">
      <header className="home-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
};

export default Home;
