import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="portfolio">
          <span>Port</span>
          <strong>Folio</strong>
        </h1>
      </div>
      <div className="navbar-right">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navigation-menu">
        <a href="#">
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
