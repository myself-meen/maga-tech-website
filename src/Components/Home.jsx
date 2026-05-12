import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import homeimg from '../assets/social-media.svg';

function Home() {
  return (
    <>
      <section id="home" className='home-section-panel flex flex-col md:flex-row justify-around items-stretch bg-[#F5F7FA] p-7 max-w-7xl mx-auto scroll-mt-16 gap-y-4'>
        <div className='home-content flex flex-col justify-center items-start w-full md:w-[70%] space-y-4 md:p-16'>
          <h1 className='text-5xl font-semibold'>Build, Grow and Scale your Brand</h1>
          <h3 className='font-medium text-lg'>Empowering brands with innovative design, seamless user experiences, and digital strategies built for long-term success.</h3>
        </div>
        <div className='home-image-container w-full md:w-[40%] flex justify-center items-center  '>
          <img src={homeimg} className='home-image md:w-full md:max-w-full object-contain h-3/5 md:h-full' alt='Social media ' />
        </div>
      </section>
      <About />
      <Services />
      <Contact />
      <Footer/>
      {/* <section id='footer'><Footer/></section> */}
    </>
  )
}

export default Home;