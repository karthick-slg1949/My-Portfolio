import React from 'react'
import './Project.css'
import WeatherApp from '../Navbar/Logo/weather.png'
import TicTacToe from '../Navbar/Logo/ttt.png'
import Mern from '../Navbar/Logo/mern1.jpeg'

const Project = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>Projects</h2>
      <span className="workDesc">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </span>
      <br />
      <div className="worksImgs">
        <a href="https://3ttt-game.netlify.app" target='_blank' rel="noopener noreferrer">
          <img src={TicTacToe} alt="TicTacToe Game Project" className="worksImg" />
        </a>
        <a href="https://github.com/karthick-slg1949/MERN-STACK" target='_blank' rel="noopener noreferrer">
          <img src={Mern} alt="MERN Stack Project" className="worksImg" />
        </a>
        <a href="https://weather-app-3-steel.vercel.app/" target='_blank' rel='noopener noreferrer'>
          <img src={WeatherApp} alt="Weather App Project" className="worksImg" />
        </a>
      </div>
      <button className='workBtn'>
        <a href="#more-projects" className="see-more-link">See More</a>
      </button>
    </section>
  )
}

export default Project;
