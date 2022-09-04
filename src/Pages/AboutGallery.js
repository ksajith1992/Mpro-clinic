import React from 'react'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import gallery from '../Assets/Images/gallery.jpg'
import gallery2 from '../Assets/Images/gallery2.jpg'
import gallery3 from '../Assets/Images/gallery3.jpg'


function AboutGallery() {
    return (
        <div>

            <Container>
                <Row>




                    <Col xs={12} sm={4} lg={4} className="m-0 p-0">
                        <figure className="snip1273">
                            <img className='img-fluid' src={gallery} />
                            <figcaption>
                                <h3>Fletch Skinner</h3>
                                <p>I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway. </p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>

                    </Col>





                    <Col xs={12} sm={4} lg={4} className="m-0 p-0">
                        <figure className="snip1273">
                        <img className='img-fluid' src={gallery2} />                            <figcaption>
                                <h3>Fletch Skinner</h3>
                                <p>I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway. </p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>

                    </Col>




                    <Col xs={12} sm={4} lg={4} className="m-0 p-0">
                        <figure className="snip1273">
                        <img className='img-fluid' src={gallery3} />                            <figcaption>
                                <h3>Fletch Skinner</h3>
                                <p>I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway. </p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>

                    </Col>


                </Row>
            </Container>


        </div>
    )
}

export default AboutGallery