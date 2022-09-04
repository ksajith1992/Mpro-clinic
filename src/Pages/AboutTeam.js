import React from 'react'
import img_avatar from '../Assets/Images/img_avatar.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




import fb from '../Assets/Images/fb.png'
import instagram from '../Assets/Images/instagram.png'
import twitter from '../Assets/Images/twitter.png'


import { NavLink } from 'react-router-dom'


function AboutTeam() {
  return (
    <div>
      <p className='font center pt-5'>PEOPLE BEHIND IT</p>
      <h1 className='font center p-4 pt-0'>MEET THE TEAM</h1>
      <Container>
        <Row>
          <Col xs={12} sm={3} lg={3}>
            <div class="card">
              <div class="imgBx">
                <img src={img_avatar} className="image" />
              </div>
              <div class="details center">
                <h3 className='center whit'>John Doe</h3>
                <div className='footerIconTeam center m-5'>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={fb} /></NavLink>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={instagram} /></NavLink>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={twitter} /></NavLink>

                </div>
              </div>

            </div>
          </Col>
         
         
          <Col xs={12} sm={3} lg={3}>
            <div class="card">
              <div class="imgBx">
                <img src={img_avatar} className="image" />
              </div>
              <div class="details center">
                <h3 className='center whit'>John Doe</h3>
                <div className='footerIconTeam center m-5'>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={fb} /></NavLink>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={instagram} /></NavLink>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={twitter} /></NavLink>

                </div>
              </div>

            </div>
          </Col>

          <Col xs={12} sm={3} lg={3}>
            <div class="card">
              <div class="imgBx">
                <img src={img_avatar} className="image" />
              </div>
              <div class="details center">
                <h3 className='center whit'>John Doe</h3>
                <div className='footerIconTeam center m-5'>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={fb} /></NavLink>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={instagram} /></NavLink>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={twitter} /></NavLink>

                </div>
              </div>

            </div>
          </Col>

          <Col xs={12} sm={3} lg={3}>
            <div class="card">
              <div class="imgBx">
                <img src={img_avatar} className="image" />
              </div>
              <div class="details center">
                <h3 className='center whit'>John Doe</h3>
                <div className='footerIconTeam moveto center m-5'>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={fb} /></NavLink>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={instagram} /></NavLink>
                  <NavLink to={'/'} className="nav-link"><img className='img-fluid' src={twitter} /></NavLink>

                </div>
              </div>

            </div>
          </Col>

        </Row>
      </Container>


    </div>
  )
}

export default AboutTeam