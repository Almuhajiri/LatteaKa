/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { animateScroll as scroll, scroller } from 'react-scroll'

import './styles.css'
import Button from '../../Components/button'

export default class HeaderLandings extends React.Component {
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuad'
        })
    }

    render() {

        return (
            <Container fluid={true} className="container-header">
                <Row>
                    <Col md="5" className="background-landing-img">
                    </Col>
                    <Col md="7" className="background-landing">
                        <Container fluid={true}>
                            <Row>
                                <Col md={{ size: 8, offset: 2 }} >
                                    <div className="wow animated fadeInRight">
                                        <p className="text-brand-landing md-disappear">thai tea</p>
                                        <p className="text-landing">Franchise Thai Tea LatteaKa</p>
                                        <p className="title-text-landing">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee.</p>
                                    </div>
                                    <Row>
                                        <Col md="auto d-block text-center">
                                            <a onClick={() => scroll.scrollTo(650)}> <Button title="Learn More"></Button> </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    }
}