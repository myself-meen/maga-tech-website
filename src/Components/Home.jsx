import React, { Component } from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (
    <>
      <section id="home">
        <h1>Build, Grow and Scale your Brand</h1>
        <h4>Desigining Powerful Online Presence</h4>
      </section>
      <section id="about" className="section-panel"><About/></section>
      <section id="services" className="section-panel services-panel"><Services/></section>
      <section id="contact" className="section-panel"><Contact/></section>
      {/* <section id='footer'><Footer/></section> */}
    </>
  )
}

export default Home;