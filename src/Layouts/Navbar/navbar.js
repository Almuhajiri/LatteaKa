import React, { useState } from 'react'
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import $ from 'jquery'

import './styles.css'
import ButtonOutlined from '../../Components/buttonOutlined'

const Component = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.navbar').addClass('navbar-bg-blue');
                $('.navbar-item').addClass('navbar-text-blue');
            } else {
                $('.navbar').removeClass('navbar-bg-blue');
                $('.navbar-item').removeClass('navbar-text-blue');
            }
        });
    });

    return (
        <Container >
            <Navbar id="navbar" className="navbar fixed-top navbar-bg-transparent" expand="xl" >
                {/* <div className="Navbar-Nav"> */}
                {/* <NavbarBrand href="/">Latte aKa</NavbarBrand> */}
                <NavbarToggler onClick={toggle} className="ml-auto " />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto align-items-center left-left" navbar>
                        <NavItem className="ml-4 mr-4">
                            <NavLink className="navbar-item" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem className="ml-4 mr-4">
                            <NavLink className="navbar-item" href="/aboutUs">About Us</NavLink>
                        </NavItem>
                        <NavItem className="ml-4 mr-4">
                            <NavLink className="navbar-item" href="/menu">Menu</NavLink>
                        </NavItem>
                        <NavItem className="ml-4 mr-4">
                            <NavLink className="navbar-item" href="/franchise">Franchise</NavLink>
                        </NavItem>
                        <NavItem className="ml-4 mr-4">
                            <NavLink className="navbar-item" href="/gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem className="ml-4 mr-4">
                            <NavLink className="navbar-item" href=""><ButtonOutlined title="Contact Us"></ButtonOutlined></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                {/* </div> */}
            </Navbar>
        </Container >
    )
}

export default Component