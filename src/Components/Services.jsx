import React, { Component } from 'react';
import seo from '../assets/seo.jpg'
import smm from '../assets/social_media_marketing.jpg'
import cm from '../assets/content_marketing.jpg'
function Services() {
    return ( <>
    <h2 className="section-title">Our Services</h2>
    <div className="services-grid">
        <section>
            <img src={seo} alt="SEO" className="service-image" />
            <h3>Search Engine Optimization</h3>
            <p></p>
        </section>
        <section>
            <img src={smm} alt="SMM" className="service-image" />
            <h3>Social Media Management</h3>
            <p></p>
        </section>
        <section>
            <img src={cm} alt="CM" className="service-image" />
            <h3>Content Marketing</h3>
            <p></p>
        </section>
    </div>
    </> );
}

export default Services;