import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Me</h1>

      <form action="" className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          <input
            type="text"
            name="name"
            id="name"
            className="form-inputs"
            placeholder="Full Name"
            required
          />
        </label>
        <label htmlFor="email" className="form-label">
          <input
            type="email"
            name="email"
            id="email"
            className="form-inputs"
            placeholder="Email Address"
            required
          />
        </label>
        <div className="message-container">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="form-message"
            placeholder="Message..."
          ></textarea>
        </div>
        <button type="submit" className="send-msg">Send</button>
      </form>
    </div>
  );
}

export default Contact;
