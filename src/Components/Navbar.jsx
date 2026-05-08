import React from 'react';
import logo from '../assets/logo-black.svg';
import './Navbar.css';
function Navbar() {
    return ( <>
    <section className='nav-section-panel'>
    <nav className="navbar">
        <div className="navbar-brand">
        <img className="navbar-logo" src={logo} alt='logo' />
        
        </div>
        <div className="navbar-links">
        <a href='#home' >Home</a> 
        <a href='#about'>About</a> 
        <a href='#services'>Services</a> 
        <a href='#contact'><button className='nav-contact-button'>Contact</button></a>
        </div>
    </nav>
</section>
    </>
     );
}

export default Navbar;