import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'
import Button from '../../Components/button'

export default class HeaderLandings extends React.Component {
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
                                            <Button title="Learn More"></Button>
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