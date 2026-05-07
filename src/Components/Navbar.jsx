import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/vite.svg';
function Navbar() {
    return ( <>
    <nav style={{display:'flex', columnGap:'100px', justifyContent:'space-between'}}>
        <div style={{display:'flex',columnGap:'5px'}}>
        <img id='logo' src={logo} alt='logo' style={{width:'40px', height:'40px', alignSelf:'center'}}/>
        <h3>SM Digital Marketing</h3>
        </div>
        <div style={{display:'flex', columnGap:'10px', justifyContent:'space-between', alignSelf:'center'}}>
        <Link to='/'>Home</Link> |{" "}
        <Link to='/about'>About</Link> |{" "}
        <Link to='/services'>Services</Link> |{" "}
        <Link to='/contact'>Contact</Link>
        </div>
    </nav>

    </>
     );
}

export default Navbar;