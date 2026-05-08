import React, { Component } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './Contact.css';
function Contact() {
  const nameRef=useRef();
  const emailRef=useRef();
  const companyRef=useRef();
  const phnoRef=useRef();
  const messageRef=useRef();

   const handleSubmit=(e)=>{
        e.prevent.default;
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(companyRef.current.value);
        console.log(phnoRef.current.value);
        console.log(messageRef.current.value);
        ī
        

    }
    
    return ( <>
     <section id="contact" className="section-panel">
      
    <div className="contact-info">
    <h2 className="section-title">Contact Us</h2>
    <ul>
        <li>sgmarketing@info.com</li>
        <li>321-221-231</li>
    </ul>
    </div>
    <div className="contact-form">
    <form  onSubmit={handleSubmit} >
        <div className="customer-info">
       
        <div className="form-row form-row-space-between">
            <label htmlFor='name'>Name </label>
            <input ref={nameRef} type="text" id='name' />
        
        </div>
         <div className="form-row form-row-space-between">
            <label htmlFor='email'>Email </label>
            <input ref={emailRef} type="email" id='email' />
        
        </div>


         <div className="form-row form-row-space-between">
            <label htmlFor='company'>Company </label>
            <input ref={companyRef} type="text" id='company' />
            
        </div>
         <div className="form-row form-row-space-between">
            <label htmlFor='phno'>Ph no</label>
            <input ref={phnoRef} type="text" id='phno' />
            
        </div>
        </div>
         <div className="form-row">
            <label htmlFor='message'>Message </label>
            <textarea ref={messageRef} type="text" id='message' style={{height:'150px'}}></textarea>
            
        </div>
        <button className='submit-button'>Submit</button>
    </form>
    </div>
    </section>

    </> );
}

export default Contact;