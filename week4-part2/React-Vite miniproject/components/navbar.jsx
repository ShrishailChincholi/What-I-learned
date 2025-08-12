import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <button onClick={() => handleNavClick("home")}>Home</button>
        <button onClick={() => handleNavClick("about")}>About</button>
        <button onClick={() => handleNavClick("services")}>Services</button>
        <button onClick={() => handleNavClick("contact")}>Contact</button>
      </div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
