import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-img">
        <img
          src={require("../assets/images/mountain-img.jpg")}
          alt="Background"
        />
        <div className="overlay">
          <h1>I'm Arun Kumar R.</h1>
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
