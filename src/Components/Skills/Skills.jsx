import React from 'react'
import './skills.css'
import UIDesign from '../Navbar/Logo/UI.png'
import WebDesign from '../Navbar/Logo/WEB.png'
import AppDesign from '../Navbar/Logo/Mobile.png'
import MernStack from '../Navbar/Logo/Designer.png'
 
const Skills = () => {
  return (
<section id='skills'>
    <span className="SkillTitle">Skills</span><br />
    <div className="SkillBars">
        <div className="SkillBar">
            <img src={UIDesign} alt="UIDesign" className="SkillBarImg" />
            <div className="SkillBarText">
                <h2 className='title'>Languages</h2>
                <ul>
                    <li>HTML 85%</li>
                    <li>CSS 75%</li>
                    <li>JavaScript 75%</li>
                    <li>Python 75%</li>
                </ul>
            </div>
        </div>
        <div className="SkillBar">
            <img src={WebDesign} alt="WebDesign" className="SkillBarImg" />
            <div className="SkillBarText">
                <h2 className='title'>Libraries</h2>
                <ul>
                    <li>React.Js 70%</li>
                    <li>Redux 70%</li>
                    <li>Bootstrap 85%</li>
                </ul>
            </div>
        </div>
        <div className="SkillBar">
            <img src={AppDesign} alt="AppDesign" className="SkillBarImg" />
            <div className="SkillBarText">
                <h2 className='title'>Frameworks</h2>
                <ul>
                    <li>Node.Js 65%</li>
                    <li>Express.Js 55%</li>
                </ul>
            </div>
        </div>
        <div className="SkillBar">
            <img src={MernStack} alt="AppDesign" className="SkillBarImg" />
            <div className="SkillBarText">
                <h2 className='title'>DataBases</h2>
                <ul>
                    <li>MongoDB 75%</li>
                    <li>MySQL 75%</li>
                </ul>
            </div>
        </div>
        <div className="SkillBar">
            <img src={MernStack} alt="AppDesign" className="SkillBarImg" />
            <div className="SkillBarText">
                <h2 className='title'>Web Dev Tools</h2>
                <ul>
                    <li>VScode 85%</li>
                    <li>Git 75%</li>
                    <li>GitHub 75%</li>
                    <li>Postman 75%</li>
                    <li>Jupyter Notebook 70%</li>
                    <li>Thonny 70%</li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Skills