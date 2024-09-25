import React, { useRef } from 'react'
import './Contact.css'
import Facebook from '../Navbar/Logo/facebook.webp'
import Youtube from '../Navbar/Logo/youtube2.webp'
import Instagram from '../Navbar/Logo/instagram23-removebg-preview.png'
import Twitter from '../Navbar/Logo/twitter2.webp'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cu2ok6p', 'template_p2wuh7i', form.current, {publicKey: 'vOqCgzDT29x47ojI8',})
          .then(() => {
            console.log('SUCCESS!');
            e.target.reset();
            alert("Email sent !")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },);
      };
  return (
    <section id="contactpage">
        <div id="contact">
            <h1 className="contactpageTitle">Contact Me</h1>
            <span className="contactDesc">Plese fill the form below to discuss any work opportunities.</span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea className='msg' name="message" rows='5' placeholder='Your Message'></textarea>
                <button className="submitbtn" type='submit' value='send'>Submit</button>
                <div className="links">
                    <img src={Youtube} alt="youtube" className="link" />
                    <img src={Facebook} alt="facebook" className="link" />
                    <img src={Instagram} alt="instagram" className="link" />
                    <img src={Twitter} alt="twitter" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact