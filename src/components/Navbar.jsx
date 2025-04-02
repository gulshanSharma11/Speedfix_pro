import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <div className="container">
  
        <div className="logo">
          <img src="../assets/react.svg" alt="Logo" />
        </div>

  
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

      
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <input type="text" placeholder="Search" className="search-box" />
          <Link to="/home">Home</Link>
          <Link to="/team">Services</Link>
          <Link to="/projects">Testimonials</Link>
          <Link to="/calendar">About</Link>
          <Link to="/book" className="book-btn">Book Now</Link>
        </div>

      
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙 " : "☀️ "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
