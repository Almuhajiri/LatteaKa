/* eslint-disable jsx-a11y/anchor-is-valid */
/*eslint-disable*/
import React from 'react'
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import './styles.css'
import './responsive.css'
import IMAGES from '../../configs/images'
import Button from '../../Components/button'
import Facebook from '../../assets/svg/facebook.svg'
import Instagram from '../../assets/svg/instagram.svg'
import Twitter from '../../assets/svg/twitter.svg'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleSubscribe() {
        if (this.state.email !== '') {
            alert('yes');
        } else {
            alert('no');
        }
    }

    render() {
        // const [modal, setModal] = useState(false);
        // const [backdrop, setBackdrop] = useState(true);

        // const toggle = () => setModal(!modal);

        // const changeBackdrop = e => {
        //     let value = e.target.value;
        //     if (value !== 'static') {
        //         value = JSON.parse(value);
        //     }
        //     setBackdrop(value);
        // }

        return (
            <Container fluid={true} className="container-footer">
                <Container className="container-subscribe">
                    <Row className="d-block text-center" >
                        <Col md={{ size: 8, offset: 2 }} className="card-subscribe wow animated fadeInUp">
                            <p className="title-footer text-capitalize">Get better work done</p>
                            <p className="subtitle text-capitalize">And every beverage is prepared right in front of you, using <br /> both modern and traditional</p>
                            <Row className="container-inputFooter align-items-center p-3 wow animated fadeInUp">
                                <Col xs="1">
                                    <img src={IMAGES.send} alt="." className="footer-input-send" />
                                </Col>
                                <Col>
                                    <input className="input-email" value={this.state.email} placeholder="Enter Your Email Address" />
                                </Col>
                                <Col xs="5" md="5" lg="3">
                                    <Button title="Subscribe" className="footer-input-button" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="footer-break footer-bg-blue">
                    <Row>
                        <Col md={{ size: 4, offset: 2 }}>
                            <Row>
                                <Col className="mb-5">
                                    <p className="text-brand-landing footer-footer">thai tea</p>
                                    <p className="text-footer-title footer-footer">LatteaKa</p>
                                    <hr className="break-footer-title" />
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row>
                                <Col xs="6" md="2">
                                    <p className="footer-footer-title">Info</p>
                                    <ul className="footer-links">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/">Franchise</a></li>
                                        <li><a href="/">Blog</a></li>
                                    </ul>
                                </Col>
                                <Col xs="6" md="2">
                                    <p className="footer-footer-title">Menu</p>
                                    <ul className="footer-links">
                                        <li><a href="/">Lorem</a></li>
                                        <li><a href="/">Ipsum dolor</a></li>
                                        <li><a href="/">Sit Amet</a></li>
                                    </ul>
                                </Col>
                                <Col xs="6" md="2">
                                    <p className="footer-footer-title">Policies</p>
                                    <ul className="footer-links">
                                        <li><a href="/">Term of Use</a></li>
                                        <li><a href="/">Privacy Police</a></li>
                                        <li><a href="/">Gift Card</a></li>
                                    </ul>
                                </Col>
                                <Col xs="6" md="2">
                                    <p className="footer-footer-title">Follow Us</p>
                                    <ul className="social-icons">
                                        <a href="/"><img src={Facebook} className="mr-3" alt="." /></a>
                                        <a href="/"><img src={Twitter} className="mr-3" alt="." /></a>
                                        <a href="/"><img src={Instagram} className="mr-3" alt="." /></a>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            /* <Container fluid className="bg-footer">
                <div className="join-section">
                    <div className="Container-footer">
                        <div className="join-wrapper">
                            <h1>Ayo Bergabung</h1>
                            <p>
                                Ayo Gabung Bersama Kami Untuk Mendapatkan Notifikasi Dan<br />
                                Banyak ilmu Terbaru Tantang Lidi
          </p>
                            <div className="input-section">
                                <img src={IMAGES.send} alt="." className="footer-input-send" />
                                <Input type="email" placeholder="Masukan Email Anda" className="join-input-email" />
                                <Button className="btn-join" title="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="Container-footer">
                        <div className="baselining-footer">
                            <div className="footer-wrapper">
                                <ul className="footer-part">
                                    <li><img className="logo-footer" src={require('../../assets/img/logo-text-white.svg')} /></li>
                                    <li>sarjanalidi@gmail.com</li>
                                    <li>082220688774</li>
                                    <li className="footer-socmed">
                                        <a href="#"><img src={require('../../assets/img/facebook-white-footer.svg')} /></a>
                                    <a href="#"><img src={require('../../assets/img/twitter-white-footer.svg')} /></a>
                                    <a href="#"><img src={require('../../assets/img/linkedin-white-footer.svg')} /></a>
                                    </li>
                                </ul>
                                <ul className="footer-part">
                                    <li className="footer-part-title">Navigasi</li>
                                    <li><a href="#">Pembelajaran</a></li>
                                    <li><a href="#">Forum</a></li>
                                    <li><a href="#">Etalase</a></li>
                                    <li><a href="#">Kisah Sukses</a></li>
                                </ul>
                                <ul className="footer-part">
                                    <li className="footer-part-title">Tentang</li>
                                    <li><a href="#">Our Story</a></li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <ul className="footer-part">
                                    <li className="footer-part-title">Support</li>
                                    <li><a href="#">Our Story</a></li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <ul className="footer-part">
                                    <li className="footer-part-title">Alamat</li>
                                    <li>
                                        Griya Kreatif<br />
                                        Jl. Pramuka No 19A, Jatilawang
                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container> */

        )
    }
}