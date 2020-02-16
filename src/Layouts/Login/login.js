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
            playload: {
                name: '',
                password: ''
            },
            respons: '',
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(name, value) {
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: value,
            },
        }));
    }

    handleSubmit() {
        let payload = {
            ...this.state.payload,
        };
        axios
            .post('http://3.94.252.36/api/login', payload)
            .then(response => {
                if (response.status === 200) {
                    return (
                        <link to='/admin'></link>
                    );
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid={true} className="bg-light">
                <Row className="vh-100">
                    <Col md="6" className="bg-white">
                        <Row className="vh-100 align-items-center" >
                            <Col className="" md={{ size: 8, offset: 2 }}>
                                <div className="pt-5 pb-5">
                                    <p className="title">Welcome Back</p>
                                    <p className="subtitle">Login with your account</p>
                                    <br />
                                    <InputGroup className="login-input-form">
                                        <InputGroupAddon addonType="prepend" >
                                            <InputGroupText className="bg-transparent input-borderless ml-3 mr-3" ><img src={Email} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            className="input input-borderless"
                                            type="email"
                                            name="email"
                                            placeholder="Email" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup className="login-input-form">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className="bg-transparent input-borderless ml-3 mr-3" ><img src={Password} alt="." /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            className="input input-borderless"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
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
                                        <a href="/admin" ><Button title="Login" className="button-login" /></a>
                                        <div className="pt-3" />
                                        <p className="subtitle">Ga punya akun? <a href="/login">Daftar</a></p>
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