// src/components/Navbar/Navbar.jsx
import React from 'react';
import '../../App.css';
import logo from './logo1.png'; // Adjusted path to the image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} id="jalynlogo" alt="LearnWebLogo" />
        </a>
        <ul className="nav-links">
          <li><a href="#hero" id="jhome">Home</a></li>
          <li><a href="#about" id="jabout">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
