import React from 'react'
import {
    Navbar,
    Nav,
    NavbarText
} from 'reactstrap'

export default class Footer extends React.Component {
    render() {
        return (
            <>
                <Navbar color="light" light className="fixed-bottom">
                    <Nav className="ml-auto" navbar>
                        <NavbarText>&copy; 2020 LatteaKa.com All Right Reserved</NavbarText>
                    </Nav>
                </Navbar>
            </>
        )
    }
}