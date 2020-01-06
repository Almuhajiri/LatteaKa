import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import Button from '../../Components/button'
import './style.css'
import benefitImg from '../../assets/svg/benefit.svg'
import modalImg from '../../assets/svg/modal.svg'
import priceImg from '../../assets/svg/price.svg'
import stepbystepImg from '../../assets/svg/stepbystep.svg'
import benefitImgM from '../../assets/svg/mobile-benefit.svg'
import modalImgM from '../../assets/svg/mobile-modal.svg'
import priceImgM from '../../assets/svg/mobile-price.svg'
import stepbystepImgM from '../../assets/svg/mobile-stepbystep.svg'


export default class Component extends React.Component {
    render() {
        return(
            <Fragment >
                <Container fluid={true} className="container-franchise">
                    <Row>
                        <Col md={{ size: 8, offset: 2}} className="d-block text-center">
                            <p className="title">Franchise Thai Tea LatteaKa</p>
                            <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every beverage is prepared</p>
                        </Col>
                    <Container fluid={true} className="container-card-franchise">
                        <Row >
                            <Col md={{ size: 7, offset: 2}} className="card-franchise">
                                <Row className="align-items-center" style={{ padding: '2rem' }}>
                                    <Col md="3" className="d-block text-center">
                                        <img className="img-franchise-M" src={benefitImgM} alt="benefit"/>
                                        <img className="img-franchise" src={benefitImg} alt="benefit"/>
                                    </Col>
                                    <Col md={{ size: 7, offset: 1}}>
                                        <p className="title-card-franchise">Benefit Franchise</p>
                                        <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={{ size: 7, offset: 2}} className="card-franchise">
                                <Row className="align-items-center" style={{ padding: '2rem' }}>
                                    <Col md="3" className="d-block text-center">
                                        <img className="img-franchise-M" src={modalImgM} alt="benefit"/>
                                        <img className="img-franchise" src={modalImg} alt="benefit"/>
                                    </Col>
                                    <Col md={{ size: 7, offset: 1}}>
                                        <p className="title-card-franchise">Benefit Franchise</p>
                                        <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={{ size: 7, offset: 2}} className="card-franchise">
                                <Row className="align-items-center" style={{ padding: '2rem' }}>
                                    <Col md="3" className="d-block text-center">
                                        <img className="img-franchise-M" src={priceImgM} alt="benefit"/>
                                        <img className="img-franchise" src={priceImg} alt="benefit"/>
                                    </Col>
                                    <Col md={{ size: 7, offset: 1}}>
                                        <p className="title-card-franchise">Benefit Franchise</p>
                                        <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={{ size: 7, offset: 2}} className="card-franchise">
                                <Row className="align-items-center" style={{ padding: '2rem' }}>
                                    <Col md="3" className="d-block text-center">
                                        <img className="img-franchise-M" src={stepbystepImgM} alt="benefit"/>
                                        <img className="img-franchise" src={stepbystepImg} alt="benefit"/>
                                    </Col>
                                    <Col md={{ size: 7, offset: 1}}>
                                        <p className="title-card-franchise">Benefit Franchise</p>
                                        <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    </Row>
                    <Col className="d-block text-center">
                        <Button title={'Learn More'}/>
                    </Col>
                </Container>
            </Fragment>
        )
    }
}