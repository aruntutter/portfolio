import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="portfolio">
          <span>Port</span>
          <strong>Folio</strong>
        </h1>
      </div>
      <div className="navbar-right">
        <a href="#home" onClick={() => scrollToSection("home")}>
          Home
        </a>
        <a href="#about" onClick={() => scrollToSection("about")}>
          About
        </a>
        <a href="#skills" onClick={() => scrollToSection("skills")}>
          Skills
        </a>
        <a href="#projects" onClick={() => scrollToSection("projects")}>
          Projects
        </a>
        <a href="#contact" onClick={() => scrollToSection("contact")}>
          Contact
        </a>
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
