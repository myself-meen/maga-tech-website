import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import './Home.css';
import  homeimg from '../assets/social-media.svg';

function Home() {
  return (
    <>
      <section id="home" className='home-section-panel'>
        <div className='home-content'>
        <h1>Build, Grow and Scale your Brand</h1>
        <h3>Designing Powerful Online Presence</h3>
        </div>
        <div className='home-image-container'>
        <img src={homeimg} className='home-image'/>
        </div>
      </section>
      <section id="about" className="section-panel"><About/></section>
      <Services/>
     <Contact/>
      {/* <section id='footer'><Footer/></section> */}
    </>
  )
}

export default Home;