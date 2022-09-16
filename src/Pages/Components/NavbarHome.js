import React from 'react'
import logo from '../../Assets/Images/logo.png'
import '../Components/Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { NavLink } from 'react-router-dom'

function NavbarHome() {
    const NavlinkStyles=({isActive})=>{
        return{
          textDecoration:isActive? 'line-through':'',
          textDecorationColor: 'red',
          textDecorationThickness: '2px',
        }
      }
  return (
    <nav className="navbar navbar-expand-lg navbar-style">
    <div className="container-fluid">
      <NavLink to={'/'} className="navbar-brand"><img src={logo} style={{width:'65%'}}/></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" data-target=".navbar-collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" id='navbar-toggler-icon-Home'></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav'>
          <li className="nav-item navlines navlines active">
            <NavLink to={'/'} className="nav-link-Home" style={NavlinkStyles}>Home</NavLink>
          </li>
          <li className="nav-item navlines navlines">
            <NavLink to={'/AboutUs'} className="nav-link-Home" style={NavlinkStyles}>About Us</NavLink>
          </li>
          {/* <li className="nav-item navlines navlines">
            <NavLink to={'/Our-Specialities'} className="nav-link-Home" style={NavlinkStyles}>Our Specialities</NavLink>
          </li> */}
          <li className="nav-item navlines navlines">
            <NavLink to={'/Login'} className="nav-link-Home" style={NavlinkStyles}>My Account</NavLink>
          </li>
          <li className="nav-item  navlines">
            <NavLink to={'/Careers'} className="nav-link-Home" style={NavlinkStyles}>Careers</NavLink>
          </li>
        </ul>
        <span className="navbar-text">
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" style={{color:'white'}}>BOOK AN APPOINMENT</button>
              <a href='tel:+918848654311' className="btn btn-outline-danger" style={{ color: 'white' }} type="button"><FontAwesomeIcon style={{ color: 'white' }} icon="fa-solid fa-phone-volume" />&nbsp;&nbsp;<span style={{ color: 'white' }}>+91 7907978721</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        </span>
      </div>
    </div>
  </nav>
  )
}

export default NavbarHome