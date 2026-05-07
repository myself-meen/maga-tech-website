import React, { Component } from 'react';
import { useState } from 'react';
function Contact() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[company, setCompany] = useState('')
    const[phno, setPhno] = useState('')
    const[message, setMessage] = useState('')
    // handleSubmit=(e)=>{
    //     e.prevent.default;
        

    // }
    
    return ( <>
    <h2>Contact Us</h2>
    <h3>Let's talk</h3>
    <form style={{padding:'20px', maxWidth:'250px', margin:'auto'}}>
        <div style={{display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px', justifyContent:'space-between'}}>
            <label htmlFor='name'>Name: </label>
            <input type="text" id='name' />
        
        </div>
         <div style={{display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px', justifyContent:'space-between'}}>
            <label htmlFor='email'>Email: </label>
            <input type="email" id='email' />
        
        </div>
         <div style={{display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',justifyContent:'space-between'}}>
            <label htmlFor='company'>Company: </label>
            <input type="text" id='company' />
            
        </div>
         <div style={{display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',justifyContent:'space-between'}}>
            <label htmlFor='phno'>Ph no:</label>
            <input type="text" id='phno' />
            
        </div>
         <div style={{display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px'}}>
            <label htmlFor='message'>Message: </label>
            <textarea id='message'></textarea>
            
        </div>
        <button>Submit</button>
    </form>

    </> );
}

export default Contact;