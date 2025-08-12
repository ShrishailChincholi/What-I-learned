import React from "react";
import "./service.css";

const Services = () => {
  return (
    <div className="services">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          We offer a wide range of services to help you build and grow your
          online presence.
        </p>
      </section>

      <section className="service-grid">
        <div className="service-card">
          <h3>💻 Web Development</h3>
          <p>Custom websites and web apps tailored to your business needs.</p>
        </div>
        <div className="service-card">
          <h3>🎨 UI/UX Design</h3>
          <p>Beautiful, user-friendly designs that engage and delight users.</p>
        </div>
        <div className="service-card">
          <h3>⚙️ API Integration</h3>
          <p>Seamless integrations to connect your systems and services.</p>
        </div>
        <div className="service-card">
          <h3>📈 SEO Optimization</h3>
          <p>Improve visibility and rank higher on search engines.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
