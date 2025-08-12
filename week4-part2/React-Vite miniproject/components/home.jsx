import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          We create amazing, modern web experiences using the latest
          technologies to bring your ideas to life.
        </p>
        <button className="hero-btn">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="icon">⚡</span>
            <h3>Fast Performance</h3>
            <p>
              We build highly optimized websites that load fast and deliver a
              smooth experience.
            </p>
          </div>
          <div className="feature-card">
            <span className="icon">🎨</span>
            <h3>Modern Design</h3>
            <p>
              Our designs are fresh, user-friendly, and tailored to your brand.
            </p>
          </div>
          <div className="feature-card">
            <span className="icon">🔒</span>
            <h3>Secure & Reliable</h3>
            <p>
              We ensure your site is safe with top-notch security practices.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Let’s Build Something Great Together</h2>
        <p>
          Contact us today and turn your vision into a stunning digital
          experience.
        </p>
        <button className="cta-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
