import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/aruntutter" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arunkumar-r2001/"
          className="social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100012953448827&mibextid=ZbWKwL"
          className="social-icon"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/ArunTutter" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com/arun_tutter?igshid=ZDdkNTZiNTM="
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="footer-text">Arun Kumar R &copy; 2023</p>
    </footer>
  );
};

export default Footer;
