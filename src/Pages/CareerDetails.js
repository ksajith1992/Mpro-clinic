import React from 'react'
import Footer from './Components/Footer'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CareerTab from './CareerTab'
import Navbar from './Components/Navbar'
import './style.css'

function CareerDetails() {
  return (
    <>
    <div>
      <Navbar />
      <div className='careerHeadBg'>
        <h2 className='center p-1'>Senior HR manager</h2>
      </div>
      <CareerTab/>
      <Footer/>
    </div>
  </>
  )
}

export default CareerDetails