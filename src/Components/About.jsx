import React, { Component } from 'react';
function About() {
    return ( <>
    <h2 className="section-title">About Us</h2>
    <div className="about-grid">
    <section id='vision'>
        <h3>Our Vision</h3>
        <p> To revolutionize how businesses connect with their audiences by creating lasting, human-centered digital experiences.</p>

    </section>
    <section id='mission'>
        <h3>Our Mission</h3>
        <p>To deliver exceptional ROI by transforming digital challenges into creative, measurable, and impactful solutions.</p>

    </section>
    <section id='values'>
        <h3>Our Values</h3>
        <p>To foster authentic digital connections between brands and consumers through transparency, creativity, and cutting-edge technology.</p>

    </section>
    </div>
    </> );
}

export default About;

