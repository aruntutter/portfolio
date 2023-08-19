import React from "react";
import "./About.css";

const About = () => {
  // Your LinkedIn profile URL
  const linkedinProfileURL = "https://www.linkedin.com/in/arunkumar-r2001";

  return (
    <div id="about" className="about-container">
      <div className="about-description">
        <h1>About</h1>
        <p>
          "I'm deeply passionate about Front-End Development, specializing in
          crafting immersive user interfaces. My focus is on creating
          responsive, visually captivating web experiences. <br />
          I'm committed to continuous learning and also enjoy capturing moments
          through photography; you can explore my work right here. Let's create
          something beautiful together."
        </p>
        <div className="contact-btn">
          <a
            href={linkedinProfileURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Connect</button>
          </a>
        </div>
      </div>
      <div className="about-img">
        <img src={require("../assets/images/about-img.jpg")} alt="about-img" />
      </div>
    </div>
  );
};

export default About;
