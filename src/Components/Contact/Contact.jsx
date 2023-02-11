import React, { useRef } from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u7420fl', 'template_dpqdz1b', form.current, 'AVmvynjqraApLBORS')
            .then((result) => {
                console.log(result, 'res');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact-form' id='Contact'>
            <div className="c-left">
                <span>Get in tocuh</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{
                    background: '#ABF1FF94'
                }}></div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Enter your name' />
                    <input type="email" name='user_email' className='user' placeholder='Enter your email' />
                    <input type="text" name='message' className='user' placeholder='Write your message' />
                    <input type="submit" value="Send" className='button' />
                    <div className="blur c-blur1" style={{
                        background: 'var(--purple)'
                    }}>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact