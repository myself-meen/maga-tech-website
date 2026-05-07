import React, { Component } from 'react';
import logo from '../assets/vite.svg';
import { Link } from 'react-router-dom';
function Footer() {
    return ( <>
     <div className="footer-brand">
            <img className="footer-logo" src={logo} alt='logo' />
            <h3>SM Digital Marketing</h3>
            </div>

<div className="footer-grid">
        
<section className="footer-column">
    <h2>Contact Info</h2>
    <ul className="footer-list">
        <li>Address</li>
        <li></li>
        <li>Email: sgmarketing@info.com</li>
        <li>LinkedIn: <a>sgmarketing</a></li>
    </ul>
</section>
<section className="footer-column">
    <h2>Services Offering</h2>
    <ul className="footer-list">
        <li>Search Engine Optimization</li>
        <li>Social Media Management</li>
        <li>Content Marketing</li>
    </ul>
</section>
<section className="footer-column">
    <h2>Help Center</h2>
    <ul className="footer-list">
        <li><Link to={"/about"}>About Us</Link></li>
        <li><Link to={"/contact"}>Contact Us</Link></li>
       
    </ul>
</section>
</div>

    </> );
}

export default Footer;