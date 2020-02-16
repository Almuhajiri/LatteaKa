import React, { useState } from 'react'
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Collapse,
    NavbarBrand,
    NavbarToggler
} from 'reactstrap'
import $ from 'jquery'

import './styles.css'


$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});
const SideBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar className="fixed-left" color="light" light expand="md">
                <NavbarBrand href="/">LatteaKa</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Buku Tamu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Galeri</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar >
        </>
    )
}

export default SideBar