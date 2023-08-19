import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle scroll events and show/hide the scroll-to-top button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="contact" className="contact-container">
      <div id="contact" className="contact-container">
        <div className="contact-by">
          <h1>Contact</h1>
          <p>Get in Touch</p>
          <p>Reach out to me today to initiate a meaningful conversation.</p>
          <a href="mailto:aruntutter19@gmail.com">aruntutter19@gmail.com</a>
          <a href="tel:+910000000000">+91 0000000000</a>
        </div>
        <div className="contact-form">
          <h3>You can also contact me by using this form:</h3>
          <form action="">
            <div className="flex-row">
              <div className="flex-half">
                <label htmlFor="first-name">First Name:</label>
                <input type="text" id="first-name" name="first-name" />
              </div>
              <div className="flex-half">
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="last-name" name="last-name" />
              </div>
            </div>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="message">Leave a Message:</label>
            <textarea id="message" name="message" rows="5"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {/* Scroll To Top button */}
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default Contact;
