import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-by">
        <h1>Contact</h1>
        <p>Get in Touch</p>
        <p>
          Why hesitate? Reach out to me today to initiate a meaningful
          conversation.
        </p>
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
  );
};

export default Contact;
