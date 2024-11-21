import React, { useState } from 'react';
import './navbar.css';
import Logo from './Logo/KA3.png';
import Contact from './Logo/contact.jpg';
import MobileMenu from './Logo/mobilemenu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="Navbar">
      <img src={Logo} alt="KA" className="Logo" />
      
      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Project</Link>
      </div>
      
      {/* Contact Button */}
      <button className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        <img src={Contact} alt="Contact" className="desktopMenuImg" />Contact Me
      </button>

      {/* Mobile Menu Icon */}
      <img src={MobileMenu} alt="menu" className="mobmenu" onClick={() => setShowMenu(!showMenu)} />
      
      {/* Mobile Menu */}
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Education</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Project</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
