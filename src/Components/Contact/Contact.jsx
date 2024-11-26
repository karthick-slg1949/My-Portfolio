import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

import { IconButton, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

const icons = [
  { id: "facebook", icon: <FacebookIcon />, label: "Facebook" },
  { id: "twitter", icon: <TwitterIcon />, label: "Twitter" },
  { id: "instagram", icon: <InstagramIcon />, label: "Instagram" },
  { id: "github", icon: <GitHubIcon />, label: "GitHub" },
  { id: "youtube", icon: <YouTubeIcon />, label: "YouTube" },
];

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
                <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                   {icons.map(({ id, icon, label }) => (
                   <Tooltip title={label} key={id}>
                   <IconButton
                   aria-label={label}
                   style={{
                   backgroundColor: id === "" ? "#ff4081" : "white",
                   color: id === "" ? "white" : "",
                  border: "1px solid #ccc",
                }}
                 >
                {icon}
                </IconButton>
               </Tooltip>
      ))}
    </div>
            </form>
        </div>
    </section>
  )
}

export default Contact