import React from 'react'
import { Container, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap'

import './styles.css'
import Button from '../../Components/button'

export default class Component extends React.Component {
    render() {
        return(
            <Container fluid={true} className="container-footer">
                <Container className="container-subscribe">
                    <Row>
                        <Col md={{ size: 6, offset: 3}} className="d-block text-center card-subscribe">
                            <p className="title-footer text-capitalize">Get better work done</p>
                            <p className="subtitle text-capitalize">And every beverage is prepared right in front of you, using both modern and traditional  </p>
                            <InputGroup className="inputgroup-subscribe">
                                <InputGroupAddon addonType="prepend">
                                <Button>To the Left!</Button>
                                </InputGroupAddon>
                                <Input />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}