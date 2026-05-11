import React, { Component } from 'react';


import ServiceCard from './ServiceCard';
import seo from '../assets/seo_icon.svg';
import smm from '../assets/smm.svg';
import cm from '../assets/cm.svg';
import './Service.css';

function Services() {
    return ( <>
    <section id="services" className="services-section-panel services-panel">
    <h2 className="service-section-title">Our Services</h2>
   
    <div className="services-grid">
       <ServiceCard img={seo} serviceName='Search Engine Optimization' serviceDescription='Improve your website’s visibility on search engines and attract more organic traffic with data-driven SEO strategies.'/>
       <ServiceCard img={smm} serviceName='Social Media Management' serviceDescription='Build a strong online presence and engage your audience through consistent, creative, and results-focused social media management.'/>
       <ServiceCard img={cm} serviceName='Content Marketing' serviceDescription='Create valuable and impactful content that connects with your audience, builds trust, and drives conversions.'/>
       
    </div>
    </section>
    </> );
}

export default Services;