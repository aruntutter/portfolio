import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-left">
        <h1 className="portfolio">
          <span>Port</span>
          <strong>Folio</strong>
        </h1>
      </div>
      <div className={`navbar-right ${isMenuOpen ? "menu-open" : ""}`}>
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
      <div className="navigation-menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          // Show the cross symbol when the menu is open
          <i className="fa fa-times"></i>
        ) : (
          // Show the hamburger icon when the menu is closed
          <i className="fa fa-bars"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
