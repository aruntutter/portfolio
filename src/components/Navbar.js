import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";
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

  const handleMenuItemClick = (sectionId) => {
    console.log("Clicked on:", sectionId);
    scrollToSection(sectionId);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-left">
        <div className="portfolio">
          <img
            src={require("../assets/images/portfolio-logo.png")}
            alt="logo"
          />
        </div>
      </div>
      <div className={`navbar-right ${isMenuOpen ? "menu-open" : ""}`}>
        {isMenuOpen && (
          <div className="dropdown-container">
            <DropDownMenu
              isOpen={isMenuOpen}
              handleMenuItemClick={handleMenuItemClick}
            />
          </div>
        )}
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
