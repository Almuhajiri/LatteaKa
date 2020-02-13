import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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

// import React, { Component } from 'react'
// import { Navbar, Nav, NavItem, Button, Glyphicon } from 'react-bootstrap'
// import Sidebar from 'react-bootstrap-sidebar'



// export default class SideBar extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             isVisible: false,
//         }
//     }

//     updateModal(isVisible) {
//         this.state.isVisible = isVisible
//         this.forceUpdate()
//     }

//     render() {
//         return (
//             <div>
//                 <Button bsStyle="primary" onClick={() => this.updateModal(true)}><Glyphicon glyph="menu-hamburger" /></Button>
//                 <Sidebar side='left' isVisible={this.state.isVisible} onHide={() => this.updateModal(false)}>
//                     <Nav>
//                         <NavItem href="#">Link 1</NavItem>
//                         <NavItem href="#">Link 2</NavItem>
//                         <NavItem href="#">Link 3</NavItem>
//                         <NavItem href="#">Link 4</NavItem>
//                     </Nav>
//                 </Sidebar>
//             </div>
//         )
//     }
// }