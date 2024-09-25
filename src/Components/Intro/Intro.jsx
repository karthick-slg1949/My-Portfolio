import React from 'react'
import './intro.css'
import BG from '../Navbar/Logo/BG.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="introName">Karthick Alagar</span><br />Python Fullstack Developer</span><br />
            <p className="introPara">I am a skilled Fullstack Developer with experience in creating <br /> visualy appealing and user friendly projects.</p>
        </div>
        <img src={BG} alt="Background" className="bg" />
    </section>
  )
}

export default Intro