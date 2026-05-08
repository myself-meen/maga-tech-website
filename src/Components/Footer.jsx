import React, { Component } from 'react';
import logo from '../assets/Logo2.png';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
    return ( <>
    <section className="footer-section-panel">
     <div className="footer-brand">
            <img className="footer-logo" src={logo} alt='logo' />
            <div>
            <p>Copyright 2010 Nexcent ltd</p>
            <p>All Rights Reserved</p>
            </div>
            </div>

<div className="footer-grid">
        
<section className="footer-column">
    <h2>Contact Info</h2>
    <ul className="footer-list">
        <div>
        <li>Address</li>
        <li>5 Cowboys Way Suite 300,
Frisco,
TX 75034</li>
</div>
        <li>Email: nexcentmarketing@info.com</li>
        <li>LinkedIn: </li>
    </ul>
</section>
<section className="footer-column">
    <h2>Support</h2>
    <ul className="footer-list">
        <li><a style={{color:'white'}} href='#contact'>Contact Us</a></li>
        <li>Terms of Service</li>
        <li>Legal</li>
        <li>Privacy Policy</li>
    </ul>
</section>

</div>
</section>

    </> );
}

export default Footer;