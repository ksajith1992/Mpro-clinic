import React,{ Component,useEffect,useState } from 'react'
import NavbarHome from './Components/NavbarHome'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Vector1 from '../Assets/Images/Vector1.png'
import Vector2 from '../Assets/Images/Vector2.png'
import Vector3 from '../Assets/Images/Vector3.png'
import { NavLink } from 'react-router-dom'
import { fadeInUp } from 'react-animations'
import Radium, { StyleRoot } from 'radium'
import Vector6 from '../Assets/Images/Vector6.png'
import Vector5 from '../Assets/Images/Vector5.png'
import Vector7 from '../Assets/Images/Vector7.png'
import Vector8 from '../Assets/Images/Vector8.png'
import Arrow3 from '../Assets/Images/Arrow3.png'
import img01 from '../Assets/Images/01.png'
import img02 from '../Assets/Images/02.png'
import img03 from '../Assets/Images/03.png'
import img04 from '../Assets/Images/04.png'
import Vector9 from '../Assets/Images/Vector9.png'
import Vector10 from '../Assets/Images/Vector10.png'
import Vector11 from '../Assets/Images/Vector11.png'
import Vector12 from '../Assets/Images/Vector12.png'
import img1 from '../Assets/Images/img1.png'
import img2 from '../Assets/Images/img2.png'
import img3 from '../Assets/Images/img3.gif'
import smimg from '../Assets/Images/msimg4.png'
import vision from '../Assets/Images/vision.png'
import Navbar from './Components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Footer from './Components/Footer'
import axios from '../Constants/Axios'
import AboutClinic from './AboutClinic'
import AboutTeam from './AboutTeam'
import AboutGetKnow from './AboutGetKnow'
import AboutGallery from './AboutGallery'

function Aboutus() {
  const styles = {
    fadeInUp: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}
  return (
    <>
    <div className='d-none d-lg-block'>
        <StyleRoot>
            <div className='About-bg '>
                <NavbarHome />
                <div className='center-about-main'>
                    <div className='head-about-sub'>
                        <h3 className='sub-about'>Home/About us</h3>
                        <h1 className='about-main' style={styles.fadeInUp}>AboutUs</h1><br />
                        
                    </div>
                    <div className='right-align-div'>
                        <ul id="MiniRightNav">
                            <li>
                                <NavLink to={'/'} className="navtext"><img src={Vector1} /><span>MY ACCOUNT</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} className="navtext"><img src={Vector2} /><span>FACEBOOK</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} className="navtext"><img src={Vector3} /><span>INSTAGRAM</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyleRoot>
        <AboutClinic/>
        <AboutTeam/>
        <AboutGetKnow/>
        <AboutGallery/>
       
           
            <Footer/>              
        </div>
       
    </>
  )
}

export default Aboutus