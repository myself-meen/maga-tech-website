import React, { Component } from 'react';
import homeBg from '../assets/home_bg.jpg'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (
    <>
      <section id="home" style={{
        backgroundImage: `url(${homeBg})`,padding:'20px',
        height:'400px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'

      }}>
        <h1>Build, Grow and Scale your Brand</h1>
        <h4>Desigining Powerful Online Presence</h4>
      </section>
      <section id="about" style={{padding:'30px',height:'400px'}}><About/></section>
      <section id="services" style={{backgroundColor:'dodgerblue',padding:'30px',height:'400px'}}><Services/></section>
      <section id="contact" style={{padding:'30px',height:'400px'}}><Contact/></section>
      {/* <section id='footer' style={{backgroundColor:'gray'}}><Footer/></section> */}
    </>
  )
}

export default Home;