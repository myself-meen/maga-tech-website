import React from 'react';
import logo from '../assets/logo-black.svg';

function Navbar() {
  return (
    <section className='sticky top-0 bg-white px-4 py-3'>
      
      <nav className='flex items-center justify-between max-w-7xl mx-auto'>
        
        {/* Logo */}
        <div>
          <img 
            className='w-28 md:w-36' 
            src={logo} 
            alt='logo' 
          />
        </div>

        {/* Links */}
        <div className='flex items-center gap-3 md:gap-6 text-sm md:text-base'>
          
          <a href='#home'>Home</a>

          <a href='#about'>About</a>

          <a href='#services'>Services</a>

          <a href='#contact'>
            <button className='bg-[#28CB8B] text-white px-3 py-2 rounded-md'>
              Contact
            </button>
          </a>

        </div>

      </nav>

    </section>
  );
}

export default Navbar;