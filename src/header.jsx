import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header class="header">
        <nav class="navbar">
          <div class="navbar-container container">
            <div>
              <h1 class="navbar-brand"><img className='logo-img' src="./public/H.png" alt="" /></h1>
            </div>
            <ul class="menu-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li> 
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;