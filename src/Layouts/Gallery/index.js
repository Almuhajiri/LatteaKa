import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'
import Button from '../../Components/button'
import gallery1 from '../../assets/img/gallery1.png'
import gallery2 from '../../assets/img/gallery2.png'
import gallery3 from '../../assets/img/gallery3.png'
import gallery4 from '../../assets/img/gallery4.png'

export default class Component extends React.Component {
    render() {
        return(
            <Container className="container-gallery">
                <Row>
                    <Col md={{ size: 8, offset: 2}} className="d-block text-center">
                        <p className="title">LatteaKa Thai Tea Indonesia</p>
                        <p className="subtitle">And every beverage is prepared right in front of you, using both modern and traditional brewing methods</p>
                    </Col>
                    <Row className="container-img-gallery">
                        <Col md="3" className="d-block text-center p-3">
                            <img className="img-gallery img-fluid" src={gallery1} alt="gallery" />
                        </Col>
                        <Col md="3" className="d-block text-center p-3">
                            <img className="img-gallery img-fluid" src={gallery2} alt="gallery" />
                        </Col>
                        <Col md="3" className="d-block text-center p-3">
                            <img className="img-gallery img-fluid" src={gallery3} alt="gallery" />
                        </Col>
                        <Col md="3" className="d-block text-center p-3">
                            <img className="img-gallery img-fluid" src={gallery4} alt="gallery" />
                        </Col>
                    </Row>
                    <Col md="12" className="d-block text-center">
                        <Button title={'See More'}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}