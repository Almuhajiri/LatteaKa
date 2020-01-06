/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'
import CardMenu from '../../Components/cardMenu'
import menu1 from '../../assets/img/menu1.png'
import menu2 from '../../assets/img/menu2.png'
import menu3 from '../../assets/img/menu3.png'
import menu4 from '../../assets/img/menu4.png'
import menu5 from '../../assets/img/menu5.png'
import menu6 from '../../assets/img/menu6.png'

export default class Component extends React.Component {
    render() {
        return(
            <Container>
                <Row className="d-block text-center">
                    <Col md={{ size: 8, offset: 2}}>
                        <p className="title">Choose Your Favorite Thai Tea From our Top Menu</p>
                        <br />
                    </Col>
                    <Container>
                        <Row>
                            <Col md="4">
                                <CardMenu cardMenuBadge="Top" cardMenuImg={menu1} cardMenuTitle="Thai Tea Original" />
                            </Col>
                            <Col md="4">
                                <CardMenu cardMenuBadge="Top" cardMenuImg={menu2} cardMenuTitle="Thai Tea Original" />
                            </Col>
                            <Col md="4">
                                <CardMenu cardMenuBadge="Top" cardMenuImg={menu3} cardMenuTitle="Thai Tea Original" />
                            </Col>
                            <Col md="4">
                                <CardMenu cardMenuImg={menu4} cardMenuTitle="Thai Tea Original" />
                            </Col>
                            <Col md="4">
                                <CardMenu cardMenuImg={menu5} cardMenuTitle="Thai Tea Original" />
                            </Col>
                            <Col md="4">
                                <CardMenu cardMenuImg={menu6} cardMenuTitle="Thai Tea Original" />
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <br></br><br></br><br></br>
            </Container>
        )
    }
}