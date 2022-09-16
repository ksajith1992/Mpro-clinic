import React from 'react'
import logo from '../../Assets/Images/logo.png'
import profile from '../../Assets/Images/profile.png'
import logout from '../../Assets/Images/logout.png'
import '../Components/Components.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function DashbordNave() {
  const navigate = useNavigate()
  const NavlinkStyles=({isActive})=>{
    return{
      textDecoration:isActive? 'line-through':'',
      textDecorationColor: 'red',
      textDecorationThickness: '2px',
    }
  }
  const token=localStorage.getItem('token')
  console.log(token)
  const logoutfn=()=>{
    localStorage.removeItem('token')
    navigate('/Login')
  }

  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} style={{width:'50px'}}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" data-target=".navbar-collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav'>
        <li className="nav-item navlines">
          <NavLink to={'/Dashbord'} className="nav-link navlink-text" style={NavlinkStyles}>Dashbord</NavLink>
          </li>
          <li className="nav-item navlines active">
            <NavLink to={'/'} className="nav-link navlink-text" style={NavlinkStyles}>Home</NavLink>
          </li>
          <li className="nav-item navlines">
            <NavLink to={'/AboutUs'} className="nav-link navlink-text" style={NavlinkStyles}>About Us</NavLink>
          </li>
          <li className="nav-item navlines">
            <NavLink to={'/Careers'} className="nav-link navlink-text" style={NavlinkStyles}>Careers</NavLink>
          </li>
        </ul>
        <span className="navbar-text">
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">BOOK AN APPOINMENT</button>
              <a className="navbar-brand"><img src={logout} style={{width:'50px'}} onClick={logoutfn}/></a>
        </span>
      </div>
    </div>
  </nav>
  )
}

export default DashbordNave