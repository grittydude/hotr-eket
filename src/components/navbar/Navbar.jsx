import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/hotr-logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <div className="nav-container">
        <img src={logo} alt="Logo" className="logo" />

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="btn">Send a testimony</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
