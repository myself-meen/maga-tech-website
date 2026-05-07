import React, { Component } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';


function App() {
  return (  <>
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Error />} />
  </Routes>
  </>

  </>);
}

export default App;