import React from "react";
import "./Home.css";

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="home-container">
      <div className="background-img">
        <img
          src={require("../assets/images/mountain-img.jpg")}
          alt="Background"
        />
        <div className="read-more">
          <button onClick={scrollToAbout}>Read More</button>
        </div>
        <div className="overlay">
          <h1>I'm Arun Kumar R</h1>
          <p>
            Welcome to my professional portfolio, where I showcase my dedication
            to excellence in front-end web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
