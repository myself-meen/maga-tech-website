import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const [statusMessage, setStatusMessage] = useState('');
  const nameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const phnoRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValues = {
      to_email: 'smaeenakshi1308@gmail.com',
      name: nameRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      phone: phnoRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .send(
        'service_4vmvkso',
        'template_na3ah7r',
        formValues,
        '9i8lJvbkxzgMXkeeV'
      )
      .then(
        () => {
          setStatusMessage('Thank you! Your message has been sent.');
          e.target.reset();
        },
        (error) => {
          console.error('Email send error:', error);
          setStatusMessage('Sorry, something went wrong. Please try again later.');
        }
      );
  };
    
    return ( <>
     <section id="contact" className="contact-section-panel p-10 gap-6 scroll-mt-16">
      <h2 className="section-title text-4xl font-semibold text-center py-5 ">Contact Us</h2>
    <div className="contact-section-panel flex  flex-col md:flex-row  gap-x-5 gap-y-5"><div className="contact-info flex flex-col justify-center gap-3.75  md:w-2/5">
    
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.1004347474923!2d78.79239797399039!3d10.090856271466915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0067002f836909%3A0x92c23ad3f979cdd1!2sMaGa%20Tech%20Gramam%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1778306940160!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className='rounded-xl'
    ></iframe>
    <ul className="contact-list mt-4 text-sm leading-7 text-slate-700 text-center  ">
        <li>nexcentmarketing@info.com</li>
        <li>321-221-231</li>
    </ul>
     
    </div>
    <div className="contact-form p-4  -order-2 md:order-last bg-slate-100 rounded-lg md:w-3/5">
    <form  onSubmit={handleSubmit} className='flex flex-col gap-y-4' >
        <div>
        <h3 className='font-bold'>Get in Touch</h3>
        <p className='text-slate-700'>Feel free to drop us a line!</p>
        </div>
        <div className="customer-info grid grid-cols-2  gap-y-4 gap-x-4 ">
       
        <div className="form-row form-row-space-between flex flex-col">
            <label htmlFor='name'>Name </label>
            <input ref={nameRef} type="text" id='name' autoComplete='on' className='border rounded-lg border-slate-300 focus:outline-slate-300'  />
        
        </div>
         <div className="form-row form-row-space-between flex flex-col">
            <label htmlFor='email'>Email </label>
            <input ref={emailRef} type="email" id='email' autoComplete='on' className='border rounded-lg border-slate-300 focus:outline-slate-300'/>
        
        </div>


         <div className="form-row form-row-space-between flex flex-col">
            <label htmlFor='company'>Company </label>
            <input ref={companyRef} type="text" id='company' autoComplete='on' className='border rounded-lg border-slate-300 focus:outline-slate-300'/>
            
        </div>
         <div className="form-row form-row-space-between flex flex-col">
            <label htmlFor='phno'>Ph no</label>
            <input ref={phnoRef} type="text" id='phno' autoComplete='on' className='border rounded-lg border-slate-300 focus:outline-slate-300'/>
            
        </div>
        </div>
         <div className="form-row flex flex-col">
            <label htmlFor='message'>Message </label>
            <textarea ref={messageRef} type="text" id='message' style={{height:'50px'}} className='border border-slate-300 rounded-lg focus:outline-slate-300'></textarea>
            
        </div>
        <button
          className="submit-button border rounded-lg text-white p-2 bg-[#28CB8B]
             transition duration-100 ease-in-out
             hover:bg-[#26b27b]
             active:scale-95 active:bg-[#1fa06a]
             focus:outline-none "
          type="submit"
        >
          Submit
        </button>
        {statusMessage && <p className="form-status">{statusMessage}</p>}
    </form>
    </div></div>
    </section>

    </> );
}

export default Contact;