import React from 'react'
import './experience.css'
import Portfolio2 from '../Navbar/Logo/2.jpg'
import Portfolio3 from '../Navbar/Logo/3.jpg'
import portfolio4 from '../Navbar/Logo/seasell.webp'
import portfolio5 from '../Navbar/Logo/jump.jpeg'
import portfolio6 from '../Navbar/Logo/board.png'
import TicTacToe from '../Navbar/Logo/ttt.png'


const Project = () => {
  return (
<section id='works'>
    <h2 className='worksTitle'>Project</h2>
    <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am exitedto bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
    <div className="worksImgs">
        <img src={TicTacToe} alt="TicTacToe" className="worksImg"/>
        <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
        <img src={portfolio4} alt="Portfolio4" className="worksImg" />
        <img src={portfolio5} alt="Portfolio5" className="worksImg" />
        <img src={portfolio6} alt="Portfolio6" className="worksImg" />
    </div>
    <button className='workBtn'>See More</button>
</section>
  )
}
export default Project