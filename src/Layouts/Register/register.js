import React from 'react'
import { Container, InputGroup, InputGroupText, InputGroupAddon, Input, Row, Col, Label } from 'reactstrap'

import './styles.css'
import Username from '../../assets/svg/username.svg'
import Email from '../../assets/svg/email.svg'
import Password from '../../assets/svg/password.svg'
import PasswordHidden from '../../assets/svg/passwordHidden.svg'
import Button from '../../Components/button'

export default class Register extends React.Component {
    render() {
        return (
            <Container fluid={true} className="bg-light">
                <Row className="vh-100">
                    <Col md="6" className="bg-white">
                        <Row className="">
                            <Col md={{ size: 8, offset: 2 }}>
                                <div className="">
                                    <p className="title">Get sarted to have new account</p>
                                    <p className="subtitle">Register in a minute. No credit card required.</p>
                                    <br />
                                    <InputGroup className="login-input-form">
                                        <InputGroupAddon addonType="prepend" >
                                            <InputGroupText className="bg-transparent input-borderless ml-3" ><img src={Username} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input className="input input-borderless" placeholder="Username" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup className="login-input-form">
                                        <InputGroupAddon addonType="prepend" >
                                            <InputGroupText className="bg-transparent input-borderless ml-3" ><img src={Email} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input className="input input-borderless" placeholder="Email" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup className="login-input-form">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className="bg-transparent input-borderless ml-3" ><img src={Password} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input className="input input-borderless" placeholder="Password" />
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText className="bg-transparent input-borderless mr-3" ><img src={PasswordHidden} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <br />
                                    <InputGroup className="login-input-form">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className="bg-transparent input-borderless ml-3" ><img src={Password} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input className="input input-borderless" placeholder="Confirm password" />
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText className="bg-transparent input-borderless mr-3" ><img src={PasswordHidden} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <br />
                                    <div className="pl-4 text-center">
                                        <Label check className="subtitle">
                                            <Input type="checkbox" />{''}
                                            I agree to LatteAka’s <a href=".">Privacy policy and Terms of service</a>
                                        </Label>
                                        <div className="pt-4" />
                                        <Button title="Login" className="button-login" />
                                        <div className="pt-3" />
                                        <p className="subtitle">Alredy have account? <a href="/login">Log In</a></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6" />
                </Row>
            </Container>
        )
    }
}