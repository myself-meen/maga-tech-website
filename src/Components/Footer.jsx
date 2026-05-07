import React, { Component } from 'react';
import logo from '../assets/vite.svg';
import { Link } from 'react-router-dom';
function Footer() {
    return ( <>
     <div style={{display:'flex',columnGap:'5px'}}>
            <img id='logo' src={logo} alt='logo' style={{width:'40px', height:'40px', alignSelf:'center'}}/>
            <h3>SM Digital Marketing</h3>
            </div>

<div style={{display:'flex', justifyContent:'space-evenly'}}>
        
<section style={{display:'flex',flexDirection:'column',alignItems:'flex-start'
    }}>
    <h2>Contact Info</h2>
    <ul style={{display:'flex', rowGap:'5px', listStyle:'none',flexDirection:'column',alignItems:'flex-start'
    }}>
        <li>Address</li>
        <li></li>
        <li>Email: sgmarketing@info.com</li>
        <li>LinkedIn: <a>sgmarketing</a></li>
    </ul>
</section>
<section style={{display:'flex',flexDirection:'column',alignItems:'flex-start'
    }}>
    <h2>Services Offering</h2>
    <ul style={{display:'flex', rowGap:'5px', listStyle:'none',flexDirection:'column',alignItems:'flex-start'
    }}>
        <li>Search Engine Optimization</li>
        <li>Social Media Management</li>
        <li>Content Marketing</li>
    </ul>
</section>
<section style={{display:'flex',flexDirection:'column',alignItems:'flex-start'
    }}>
    <h2>Help Center</h2>
    <ul style={{display:'flex', rowGap:'5px', listStyle:'none',flexDirection:'column',alignItems:'flex-start'
    }}>
        <li><Link to={"/about"}>About Us</Link></li>
        <li><Link to={"/contact"}>Contact Us</Link></li>
       
    </ul>
</section>
</div>

    </> );
}

export default Footer;