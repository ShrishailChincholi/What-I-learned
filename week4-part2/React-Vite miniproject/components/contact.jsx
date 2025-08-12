import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have a question or want to work with us? We'd love to hear from you.
        </p>
      </section>

      <section className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
