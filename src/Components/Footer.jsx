import React from 'react';
import logo from '../assets/Logo2.png';
function Footer() {
    return ( <>
    <section className="footer-section-panel bg-[#263238] flex p-5 gap-x-5 text-white scroll-mt-16">
     <div className="footer-brand w-[30%] ">
            <img className="footer-logo mb-4 " src={logo} alt='logo' />
            <div className='grid gap-y-2'>
            <p>Copyright 2010 Nexcent ltd</p>
            <p>All Rights Reserved</p>
            </div>
            </div>

<div className="footer-grid grid md:grid-cols-2 w-3/5 gap-x-10 gap-y-5">
        
<section className="footer-column grid gap-y-4">
    <h2 className='font-semibold text-xl'>Contact Info</h2>
    <ul className="footer-list grid gap-y-2">
        <div>
        <li>Address</li>
        <li>5 Cowboys Way Suite 300,
Frisco,
TX 75034</li>
</div>
        <li>Email: nexcentmarketing@info.com</li>
        <li>LinkedIn: </li>
    </ul>
</section>
<section className="footer-column grid gap-y-4">
    <h2 className='font-semibold text-xl'>Support</h2>
    <ul className="footer-list grid gap-y-2">
        <li><a  href='#contact'>Contact Us</a></li>
        <li>Terms of Service</li>
        <li>Legal</li>
        <li>Privacy Policy</li>
    </ul>
</section>

</div>
</section>

    </> );
}

export default Footer;