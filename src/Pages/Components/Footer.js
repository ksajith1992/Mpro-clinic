import React from 'react'
import footerLogo from '../../Assets/Images/logoFooter.png'
import fb from '../../Assets/Images/fb.svg'
import insta from '../../Assets/Images/insta.svg'
import ind from '../../Assets/Images/ind.svg'
import tw from '../../Assets/Images/tw.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Components/Components.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='footerBg pt-3'>
            <Container>
                <Row className=''>
                    <Col xs={12} sm={4} lg={4}>
                        <div className='logoFooterimg'>
                            <img className='img-fluid' src={footerLogo} />
                        </div>
                        <p className='footerIconP'>Padikkal, Chelari, Malappuram Kerala 673014</p>
                        <h1>
                            <NavLink to={'/'} className="nav-link social-icon"><img className='img-fluid' src={fb} /></NavLink>
                            <NavLink to={'/'} className="nav-link social-icon"><img className='img-fluid' src={insta} /></NavLink>
                            <NavLink to={'/'} className="nav-link social-icon"><img className='img-fluid' src={ind} /></NavLink>
                            <NavLink to={'/'} className="nav-link social-icon"><img className='img-fluid' src={tw} /></NavLink>

                        </h1>
                    </Col>
                    <Col xs={12} sm={4} lg={4}>
                        <div className='pt-2'>
                            <h5 className='red'>Quik links</h5>
                        </div>
                        <div className='FootterUlli'>
                            <ul>
                                <li>  <NavLink to={'/'} className="nav-link">Home</NavLink></li>
                                <li> <NavLink to={'/Login'} className="nav-link">Download lab report</NavLink></li>
                                <li> <NavLink to={'/AboutUs'} className="nav-link">AboutUs</NavLink></li>
                                <li> <NavLink to={'/Careers'} className="nav-link">Careers</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={4} lg={4}>
                        <div className='logoFooterimg'>
                            <h3>Subscribe Our<br /> Newsletter</h3>
                        </div>
                        <p className='footerIconP'>Natus errorsit voluptatem accusa dolore mque quae abillo inventore verita achitec beatae vitae dicta sunt explicabo.</p>
                        <div className='footerIcon'>
                            {/* <SearchBox /> */}
                            <div className="search-container">
                                <form>
                                    <input className='news-letter-input' type="text" placeholder="Email" name="search"/>
                                    <button type="submit" className='news-letter-button'><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            {/* <SearchBox /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row className='pt-4'>
                    <Col xs={12} sm={12} lg={12} style={{textAlign:'center'}}>
                        <p className='footerIconP'>© 2022. All rights reserved design by maverixpro</p>
                    </Col>
                    <Col xs={12} sm={12} lg={12} className='right'>
                         <NavLink to={'/'} className="nav-link" style={{float:'left'}}>Company</NavLink>
                        <NavLink to={'/'} className="nav-link" style={{float:'left'}}>Setting & Privacy</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Footer    