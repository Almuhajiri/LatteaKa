import React from 'react'
import { Container, InputGroup, InputGroupText, InputGroupAddon, Input, Row, Col, Label } from 'reactstrap'
import axios from 'axios'

import './styles.css'
import Email from '../../assets/svg/email.svg'
import Password from '../../assets/svg/password.svg'
import PasswordHidden from '../../assets/svg/passwordHidden.svg'
import Button from '../../Components/button'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`http://3.94.252.36/api/login`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    render() {
        return (
            <Container fluid={true} className="bg-light">
                <Row className="align-items-center">
                    <Col md="6" className="bg-white">
                        <Row className="vh-100" >
                            <Col className="" md={{ size: 8, offset: 2 }}>
                                <div className="pt-5 pb-5">
                                    <p className="title">Welcome Back</p>
                                    <p className="subtitle">Login with your account</p>
                                    <br />
                                    <InputGroup className="login-input-form">
                                        <InputGroupAddon addonType="prepend" >
                                            <InputGroupText className="bg-transparent input-borderless ml-3 mr-3" ><img src={Email} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input className="input input-borderless" type="email" name="email" onChange="" placeholder="Email" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup className="login-input-form">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className="bg-transparent input-borderless ml-3 mr-3" ><img src={Password} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input className="input input-borderless" type="password" name="password" placeholder="Password" />
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText className="bg-transparent input-borderless mr-3 ml-3" ><img src={PasswordHidden} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <br />
                                    <div className="d-flex pl-4 justify-content-between">
                                        <Label check className="subtitle">
                                            <Input type="checkbox" />{'Remember me'}
                                        </Label>
                                        <a href="."><p className="subtitle">Forget Password</p></a>
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        <a href="/dashboard"><Button title="Login" className="button-login" /></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}