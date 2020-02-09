import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import $ from 'jquery'

import './styles.css'
import Button from '../../Components/button'
import IMAGES from '../../configs/images'

const backgroundHeader = {
    height: 'max-content',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + IMAGES.backgroundHeader + ')'
}

export default class Header extends React.Component {
    render() {

        $(document).ready(function () {

            $(window).scroll(function (e) {
                var scrolled = $(window).scrollTop();
                if (scrolled < 400) {
                    parallax()
                }
            });

            function parallax() {
                var scrolled = $(window).scrollTop();
                $('.parallax').css('background-positionY', (scrolled * -.3) + 'px');
            };

        });

        return (
            <Container fluid={true} className="parallax" style={backgroundHeader}>
                <Row>
                    <Col md={{ size: 4, offset: 4 }} className="d-block text-center header-container">
                        <h1 className="header-title wow animated fadeInUp">Events where modern technology meets exprience</h1>
                        <Button title={'Learn More'} />
                    </Col>
                </Row>
            </Container>
        )
    }
}