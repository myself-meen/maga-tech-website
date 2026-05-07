import React, { Component } from 'react';
import seo from '../assets/seo.jpg'
import smm from '../assets/social_media_marketing.jpg'
import cm from '../assets/content_marketing.jpg'
function Services() {
    return ( <>
    <h2>Our Services</h2>
    <div style={{display:'flex', flexDirection:'row', justifyContent:"space-around"}}>
        <section>
            <img src={seo} alt="SEO" style={{width:'200px', height:'200px'}}/>
            <h3>Search Engine Optimization</h3>
            <p></p>
        </section>
        <section>
            <img src={smm} alt="SMM" style={{width:'200px',height:'200px'}}/>
            <h3>Social Media Management</h3>
            <p></p>
        </section>
        <section>
            <img src={cm} alt="CM" style={{width:'200px',height:'200px'}}/>
            <h3>Content Marketing</h3>
            <p></p>
        </section>
    </div>
    </> );
}

export default Services;