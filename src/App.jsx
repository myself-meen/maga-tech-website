import React, { Component } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <section style={{padding:'30px'}}>
      <Navbar />
      </section>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
      <section style={{backgroundColor:'dodgerblue',padding:'30px'}}>
      <Footer />
      </section>
    </>
  )
}

export default App;