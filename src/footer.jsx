import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div class="d-flex flex-wrap justify-content-between align-items-center">
          <p class="col-md-4 mb-0">©Haroon Portfolio 2024</p>

          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
          </a>

            <ul class="menu-items nav col-md-4 justify-content-end">
            <li className='p-2'><Link to="/">Home</Link></li>
            <li className='p-2'><Link to="/services">Services</Link></li>
            <li className='p-2'><Link to="/about">About</Link></li>
            <li className='p-2'><Link to="/contact">Contact</Link></li> 
            </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer;