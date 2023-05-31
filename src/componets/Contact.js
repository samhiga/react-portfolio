import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>

      <div className="contact-form">
        <h3>Contact Me</h3>
        <form className="form">
          <label htmlFor="contact-name">Your Name</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            id="contact-name"
            placeholder="Your Name"
          />

          <label htmlFor="contact-email">Your Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            id="contact-email"
            placeholder="Your Email"
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            id="contact-message"
            placeholder="Your Message"
          ></textarea>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
