import React, { Component } from 'react';
import logo from '../assets/vite.svg';
function Navbar() {
    return ( <>
    <nav className="navbar">
        <div className="navbar-brand">
        <img className="navbar-logo" src={logo} alt='logo' />
        <h3>SM Digital Marketing</h3>
        </div>
        <div className="navbar-links">
        <a href='#home'>Home</a> |{" "}
        <a href='#about'>About</a> |{" "}
        <a href='#services'>Services</a> |{" "}
        <a href='#contact'>Contact</a>
        </div>
    </nav>

    </>
     );
}

export default Navbar;