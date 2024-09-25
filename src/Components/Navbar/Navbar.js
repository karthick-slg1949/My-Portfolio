import React, { useState } from 'react'
import './navbar.css'
import  Logo from './Logo/KA3.png'
import Contact from './Logo/contact.jpg'
import MobileMenu from './Logo/mobilemenu.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const[showmenu,setshowMenu]=useState(false)
  return (
    <nav className='Navbar'>
        <img src={Logo} alt="KA" className='Logo'/>
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
          <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Project</Link>


        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={Contact} alt="Contact" className="desktopMenuImg" />Contact Me</button>

            <img src={MobileMenu} alt="menu" className='mobmenu' onClick={()=>setshowMenu(!showmenu)}/>
        <div className="navMenu" style={{display:showmenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setshowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setshowMenu(false)}>Education</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setshowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setshowMenu(false)}>Project</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem"onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar