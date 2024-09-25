import React from "react";
import './about.css'
import resume from '../About/CV.pdf'


const About=()=>{
    return (
        <section id="about">
            <span className="aboutTitle">About</span><br />
            <span className="aboutDesc">I am a fresher Developer in python fullstack. Skilled and passionated to creating visualy appealing and user-friendly projects. I have a strong understanding of develop the project and a keen eye for detail. I am proficient in Python, Front-End, Back-End, Database as well as develop the software such as VS-code, MERN stack and Database.</span><br />
            <button className="resume">
                <a href={resume} download="resume">Resume</a>
            </button>
        </section>
    )
}

export default About