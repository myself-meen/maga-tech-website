import React from 'react';

import ServiceCard from './ServiceCard';
import seo from '../assets/seo_icon.svg';
import smm from '../assets/smm.svg';
import cm from '../assets/cm.svg';

function Services() {
    return ( <>
    <section id="services" className="services-section-panel services-panel p-10 gap-6 bg-slate-100 scroll-mt-16">
    <h2 className="service-section-title text-4xl font-semibold text-center  py-5 ">Our Services</h2>
    
    <div className="services-grid grid md:grid-cols-3 gap-6">
       <ServiceCard img={seo} serviceName='Search Engine Optimization' serviceDescription='Improve your website’s visibility on search engines and attract more organic traffic with data-driven SEO strategies.'/>
       <ServiceCard img={smm} serviceName='Social Media Management' serviceDescription='Build a strong online presence and engage your audience through consistent, creative, and results-focused social media management.'/>
       <ServiceCard img={cm} serviceName='Content Marketing' serviceDescription='Create valuable and impactful content that connects with your audience, builds trust, and drives conversions.'/>
       
    </div>
    </section>
    </> );
}

export default Services;