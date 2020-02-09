/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import 'animate.css'
import './styles.css'
import IMAGES from '../../configs/images'
import ArrowRight from '../../assets/svg/arrow-right.svg'

export default class Poster extends React.Component {
    render() {
        return (
            <Container id="poster" className="container-poster">
                <Row className="d-flex flex-row-reverse">
                    <Col md="6" className="animated fadeInRight">
                        <img src={IMAGES.poster} alt="" className="img-fluid mb-4" />
                    </Col>
                    <Col md="6" className="poster-poster animated fadeInLeft">
                        <Row>
                            <Col md="10">
                                <p className="title">why latteaKa thai tea?</p>
                            </Col>
                        </Row>
                        <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every beverage is prepared right in front of you, We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee.</p>
                        <a href="/aboutUs" className="see-more">see more<img className="ml-4" src={ArrowRight} alt=""></img></a>
                    </Col>
                </Row>
            </Container>
        )
    }
}