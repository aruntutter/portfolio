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
          loading="eager"
        />
        <div className="read-more">
          <button onClick={scrollToAbout}>Read More</button>
        </div>
        <div className="overlay">
          <h1>I'm Arun Kumar R</h1>
          <p>Aspiring Full Stack Developer!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
