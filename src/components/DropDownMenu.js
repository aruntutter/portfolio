import React, { useRef } from "react";

import "./DropDownMenu.css";

const DropDownMenu = ({ isOpen, handleMenuItemClick }) => {
  const dropdownMenuRef = useRef(null);

  const scrollToDropdownMenu = () => {
    const dropdownMenuRect = dropdownMenuRef.current.getBoundingClientRect();
    window.scrollTo(0, dropdownMenuRect.top);
  };

  const handleItemClick = (sectionId) => {
    handleMenuItemClick(sectionId);
    scrollToDropdownMenu();
    window.location.hash = `#${sectionId}`;
  };

  return (
    <div
      className={`dropdown-menu ${isOpen ? "open" : ""}`}
      ref={dropdownMenuRef}
    >
      <div
        className="dropdown-item"
        onClick={() => {
          handleMenuItemClick("Home");
          scrollToDropdownMenu();
          window.location.hash = "#home";
        }}
      >
        Home
      </div>
      <div
        className="dropdown-item"
        onClick={() => {
          handleMenuItemClick("About");
          scrollToDropdownMenu();
          window.location.hash = "#about";
        }}
      >
        About
      </div>
      <div
        className="dropdown-item"
        onClick={() => {
          handleMenuItemClick("Skills");
          scrollToDropdownMenu();
          window.location.hash = "#skills";
        }}
      >
        Skills
      </div>
      <div
        className="dropdown-item"
        onClick={() => {
          handleMenuItemClick("Projects");
          scrollToDropdownMenu();
          window.location.hash = "#projects";
        }}
      >
        Projects
      </div>
      <div
        className="dropdown-item"
        onClick={() => {
          handleMenuItemClick("Contact");
          scrollToDropdownMenu();
          window.location.hash = "#contact";
        }}
      >
        Contact
      </div>
    </div>
  );
};

export default DropDownMenu;
