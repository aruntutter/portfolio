import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageLoad = () => {
    // This function will be called once the image has loaded
  };

  useEffect(() => {
    const img = new Image();
    img.src = require("../assets/images/vector-mountain.svg");
  }, []);

  return (
    <div id="home" className="home-container">
      <div className="background-img">
        <img
          src={require("../assets/images/vector-mountain.svg")}
          alt="Background"
          onLoad={handleImageLoad}
        />
        <div onClick={scrollToAbout} className="read-more">
          <button>Read More</button>
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
