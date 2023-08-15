import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <h1>About</h1>
        <p>
          "I am deeply passionate about Front-End Development, with a focused
          expertise in crafting immersive user interfaces. My proficiency lies
          in creating responsive, aesthetically pleasing web experiences that
          seamlessly merge design and functionality. My commitment to continuous
          learning drives me to deliver meticulously designed front-end
          solutions, enhancing user engagement and satisfaction."
        </p>
        <div className="contact-btn ">
          <a href="#about">Connect</a>
        </div>
      </div>
      <div className="about-img">
        <img src={require("../assets/images/about-img.jpg")} alt="about-img" />
      </div>
    </div>
  );
};

export default About;
