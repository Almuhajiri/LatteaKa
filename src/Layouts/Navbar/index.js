import React, { useState } from 'react'
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

import './styles.css'
import ButtonOutlined from '../../Components/buttonOutlined'

const Component = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen) 

    return(
        <Container fluid={true}>
            <Navbar className="navbar fixed-top" expand="md" >
                <Container className="bg-light">
                    {/* <div className="Navbar-Nav"> */}
                        {/* <NavbarBrand href="/">Latte aKa</NavbarBrand> */}
                        <NavbarToggler onClick={toggle} className="ml-auto bg-white border-white"/>
                        <Collapse isOpen={isOpen} navbar>
                            <Row>
                                <Col md="12" className="bg-dark">
                                    <Nav className="ml-auto align-items-center row" navbar>
                                            <NavItem>
                                            <NavLink className="col-sm d-block navbar-item" href="#">About Us</NavLink>
                                            </NavItem>
                                            <NavItem>
                                            <NavLink className="col-sm d-block navbar-item" href="#">Menu</NavLink>
                                            </NavItem>
                                            <NavItem>
                                            <NavLink className="col-sm d-block navbar-item" href="#">Franchise</NavLink>
                                            </NavItem>
                                            <NavItem>
                                            <NavLink className="col-sm d-block navbar-item" href="#">Gallery</NavLink>
                                            </NavItem>
                                            <NavItem>
                                            <NavLink className="col-sm d-block navbar-item" href="#"><ButtonOutlined title="Contact Us"></ButtonOutlined></NavLink>
                                            </NavItem>
                                    </Nav>
                                </Col>
                            </Row>
                        </Collapse>
                    {/* </div> */}
                </Container>
            </Navbar>
        </Container >
    )
}

export default Component