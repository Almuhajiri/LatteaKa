import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'

export default class AboutUsMenu extends React.Component {
    render() {
        return (
            <Container >
                <Row className="about-us-menu-container">
                    <Col md={{ size: 5, offset: 0 }} className="wow animated fadeInLeft">
                        <p className="text-brand-landing">thai tea</p>
                        <p className="title">This is an about page for InterCapital. We sectioned it off into 3</p>
                    </Col>
                    <Col md={{ size: 5, offset: 1 }} className="wow animated fadeInRight">
                        <p className="subtitle mt-3">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every beverage is prepared right in front of you, We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. We brew only the finest leaves and beans to ensure delicious cups of tea</p>
                        <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every beverage is prepared right in front of you.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}