import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'
import Card from '../../Components/card'
import trusted from '../../assets/svg/trusted.svg'
import reliable from '../../assets/svg/reliable.svg'
import profit from '../../assets/svg/profit.svg'

export default class Component extends React.Component {
    render() {
        return(
            <Container className="container-jumbotron">
                <Row>
                    <Col md="12" className="d-block text-center">
                        <p className="title">LatteaKa Thai Tea Indonesia</p>
                    </Col>
                    <Col md={{ size: 6, offset: 3}} className="d-block text-center">
                        <p className="subtitle">And every beverage is prepared right in front of you, using both modern and traditional brewing methods</p>
                        <br/><br/>
                    </Col>
                    <Col md="4">
                        <Card cardImg={trusted} altImg={'Trusted Owner'} cardTitle={'Trusted Owner'} cardSubtitle={'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every'}/>
                        <br />
                    </Col>
                    <Col md="4">
                        <Card cardImg={reliable} altImg={'Reliable'} cardTitle={'Reliable'} cardSubtitle={'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every'}/>
                        <br />
                    </Col>
                    <Col md="4">
                        <Card cardImg={profit} altImg={'Profit'} cardTitle={'Profit'} cardSubtitle={'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every'}/>
                        <br />
                    </Col>
                </Row>
            </Container>
        )
    }
}