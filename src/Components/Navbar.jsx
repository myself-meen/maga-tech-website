import React from 'react';
import logo from '../assets/logo-black.svg';
import { useState } from 'react';

function Navbar() {
  const[isOpen,setIsOpen]=useState(false);
  
  return (
    <section className='sticky top-0 bg-white px-4 py-3'>
      
      <nav className='flex items-center justify-between max-w-7xl mx-auto'>
        
        
        <div>
          <img 
            className='w-28 md:w-36' 
            src={logo} 
            alt='logo' 
          />
        </div>

        
        <div className='hidden md:flex items-center gap-3 md:gap-6 text-sm md:text-base'>
          
          <a href='#home' className='hover:text-[#28CB88]'>Home</a>

          <a href='#about' className='hover:text-[#28CB88]'>About</a>

          <a href='#services' className='hover:text-[#28CB88]'>Services</a>

          <a href='#contact' >
            <button
              className="bg-[#28CB8B] text-white px-3 py-2 rounded-md transition duration-150 ease-in-out
             hover:bg-[#26b27b]
             active:scale-95 active:bg-[#1fa06a]
             focus:outline-none focus:ring-2 focus:ring-[#28CB8B]/60"
            >
              Contact
            </button>
          </a>

        </div>
        <button className='md:hidden text-3xl' aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>{isOpen?'x':'☰'}
</button>


      </nav>
      {isOpen &&<div className='md:hidden flex flex-col items-center  gap-3 md:gap-6 text-sm md:text-base text-center p-4 h-screen'>
          
          <a href='#home' className='hover:text-[#28CB88]' onClick={() => setIsOpen(!isOpen)}>Home</a>

          <a href='#about' className='hover:text-[#28CB88]' onClick={() => setIsOpen(!isOpen)}>About</a>

          <a href='#services' className='hover:text-[#28CB88]' onClick={() => setIsOpen(!isOpen)}>Services</a>

          <a href='#contact' className='hover:text-[#28CB88]' onClick={() => setIsOpen(!isOpen)}>
            <button
              className="bg-[#28CB8B] text-white px-3 py-2 rounded-md transition duration-150 ease-in-out
             hover:bg-[#26b27b]
             
             focus:outline-none focus:ring-2 focus:ring-[#28CB8B]/60"
            >
              Contact
            </button>
          </a>

        </div>}

    </section>
  );
}

export default Navbar;