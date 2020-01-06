/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'

export default class Component extends React.Component {
    render() {
        return (
            <Container className="container-poster">
                <Row>
                    <Col md={{size: 5, order: 1}} className="poster-poster">
                        <Row>
                            <Col md="10">
                                <p className="title">why latteaKa thai tea?</p>
                            </Col>
                        </Row>
                        <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every beverage is prepared right in front of you, We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee.</p>
                        <a href="#" className="see-more">see more<img className="ml-4" src={require('../../assets/svg/arrow-right.svg')} alt=""></img></a>
                    </Col>
                    <Col md={{size: 6, order: 2, offset: 1}}>
                        <img src={require('../../assets/img/poster.png')} alt="" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}