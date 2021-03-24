import React from "react";
import "./About.css";

const About = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/about")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="about-container">
      <h1>About Page</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
};

export default About;
