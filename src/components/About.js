import React from "react";
import "./About.css";

const About = () => {
  // Your LinkedIn profile URL
  const instaProfileURL =
    "https://instagram.com/mine.precious.gift?igshid=MzRlODBiNWFlZA==";

  return (
    <div id="about" className="about-container">
      <div className="about-description">
        <h1>About</h1>
        <p>
          "I'm deeply passionate about Front-End Development, specializing in
          crafting immersive user interfaces. My focus is on creating
          responsive, visually captivating web experiences. <br />
          <br />
          Committed to lifelong learning and capturing moments through
          photography. Let's create something beautiful together with a touch of
          unique crafting!"
        </p>
        <div className="contact-btn">
          <h4>View some of my unique works 👇</h4>
          <a href={instaProfileURL} target="_blank" rel="noopener noreferrer">
            <button>My Creativity</button>
          </a>
        </div>
      </div>
      <div className="about-img">
        <img
          src={require("../assets/images/about-img.jpg")}
          alt="about-img"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default About;
