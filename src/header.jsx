import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="navbar-brand">
              <a href="/">
                <img className="logo-img" src="/H.png" alt="Logo" />
              </a>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
              <li><a href="#main-sec">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about-me">About</a></li>
              <li><a href="#form-here">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;



            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>  */}