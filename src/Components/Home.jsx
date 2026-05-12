import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import homeimg from '../assets/social-media.svg';

function Home() {
  return (
    <>
      <section id="home" className='home-section-panel flex flex-col md:flex-row justify-around items-stretch bg-[#F5F7FA] p-7 max-w-7xl mx-auto '>
        <div className='home-content flex flex-col justify-center items-start w-full md:w-[70%] space-y-4 md:p-16'>
          <h1 className='text-5xl font-semibold'>Build, Grow and Scale your Brand</h1>
          <h3 className='font-medium '>Designing Powerful Online Presence</h3>
        </div>
        <div className='home-image-container w-full md:w-[40%] flex justify-center items-center  '>
          <img src={homeimg} className='home-image w-full max-w-full object-contain' alt='Social media h-1 md:h-full' />
        </div>
      </section>
      <About />
      <Services />
      <Contact />
      {/* <section id='footer'><Footer/></section> */}
    </>
  )
}

export default Home;