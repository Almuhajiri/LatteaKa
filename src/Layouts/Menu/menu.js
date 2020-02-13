/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Row, Col, Card, Badge, CardImg, CardBody, CardTitle } from 'reactstrap'
import axios from 'axios'

import './styles.css'
import IMAGES from '../../configs/images'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        }
    }

    componentWillMount() {
        axios.get('http://3.94.252.36/api/menu/all')
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
    }

    render() {
        function Menu(props) {
            const renderCardMenu = props.menus.map((post) =>
                <Col md="4" className="wow animated fadeInUp">
                    <Card key={post.id}>
                        <Row className="justify-content-end align-items-center">
                            {/* <Col xs="3" className="">
                                <Badge className="badge-menu">{post.badge}</Badge>
                            </Col> */}
                        </Row>
                        <div className="d-block text-center">
                            <CardImg className="cardmenu-img" top width="100%" src={post.photo} alt={post.title} />
                        </div>
                        <CardBody>
                            <CardTitle>{post.title}</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            )
            return (
                <Row className="mt-5 mb-5">
                    {renderCardMenu}
                </Row>
            )
        }

        return (
            <Container className="container-menu wow animated fadeInUp" >
                <Row className="d-block text-center">
                    <Col md={{ size: 8, offset: 2 }}>
                        <p className="title">Choose Your Favorite Thai Tea From our Top Menu</p>
                    </Col>
                </Row>
                <Menu menus={this.state.menus} />
            </Container>
        )
    }
}