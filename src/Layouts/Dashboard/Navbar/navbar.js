import React, { useState } from 'react'
import {
    Navbar,
    // NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

import IMAGES from '../../../configs/images'
// import LatteaKa from '../../../assets/svg/latteaka.svg'
import Button from '../../../Components/button'

// function dropDownProfile(props) {
// const items = () => (
//     <div>
//         <img src={IMAGES.profile} alt="fahmy" className="img-thumbnail" />
//         <p>Fahmy Hamzah</p>
//         <p>fahmyhamzah12@gmail.com</p>
//         <Button title="Keluar" />
//     </div>
// )
//     return (<div>{items}</div>)
// }

const DashboardNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <div>
                <Navbar color="light" light expand="md" className="fixed-top">
                    {/* <NavbarBrand href="/">
                        <img src={LatteaKa} alt="logo" />
                    </NavbarBrand> */}
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <img src={IMAGES.profile} alt="" style={{ height: '35px', width: '35px' }} className="mr-3 rounded-circle img-thumbnail" />
                                    Fahmy
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <div className="d-block text-center">
                                            <img src={IMAGES.profile} alt="profile" className="rounded-circle img-thumbnail img-fluid" />
                                            <p className="card-title">Fahmy Hamzah</p>
                                            <p className="subtitle" >fahmyhamzah12@gmail.com</p>
                                            <Button title="Keluar" />
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default DashboardNavbar