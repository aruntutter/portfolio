import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <h1>About</h1>
        <p>
          "I'm driven by a passion for Front-End Development, creating immersive
          UIs that seamlessly merge design and functionality. With a commitment
          to continuous learning, I strive to deliver responsive, engaging web
          experiences that delight users."
        </p>
      </div>
      <div className="about-img">
        <img src={require("../assets/images/about-img.jpg")} alt="about-img" />
      </div>
    </div>
  );
};

export default About;
