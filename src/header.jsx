import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header class="header">
        <nav class="navbar">
          <div class="navbar-container container">
            <div>
              <a href='/' class="navbar-brand"><img className='logo-img' src="/H.png" alt="" /></a>
            </div>
            <ul class="menu-items">
            <li><a href="#main-sec">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about-me">About</a></li>
            <li><a href="#form-here">Contact</a></li>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>  */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;