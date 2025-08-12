import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are a passionate team of developers, designers, and dreamers
          committed to building digital products that make an impact.
        </p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver innovative, scalable, and visually stunning
          web applications that empower businesses to thrive in the digital
          world.
        </p>

        <h2>Our Story</h2>
        <p>
          Founded in 2023, we have worked with clients from various industries,
          delivering solutions that not only meet but exceed expectations.
        </p>
      </section>
    </div>
  );
};

export default About;
