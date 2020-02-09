/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Row, Col, Card, Badge, CardImg, CardBody, CardTitle } from 'reactstrap'

import './styles.css'
import IMAGES from '../../configs/images'

const menus = [
    {
        id: 1,
        badge: 'Top',
        title: 'Thai Tea Original',
        img: IMAGES.menu1
    },
    {
        id: 2,
        badge: 'Top',
        title: 'Thai Tea Original',
        img: IMAGES.menu2
    },
    {
        id: 3,
        badge: 'Top',
        title: 'Thai Tea Original',
        img: IMAGES.menu3
    },
    {
        id: 4,
        badge: '',
        title: 'Thai Tea Original',
        img: IMAGES.menu4
    },
    {
        id: 5,
        badge: '',
        title: 'Thai Tea Original',
        img: IMAGES.menu5
    },
    {
        id: 6,
        badge: '',
        title: 'Thai Tea Original',
        img: IMAGES.menu6
    }
]

export default class Menu extends React.Component {
    render() {
        function Menu(props) {
            const renderCardMenu = props.menus.map((post) =>
                <Col md="4" className="wow animated fadeInUp">
                    <Card key={post.id}>
                        <Row className="justify-content-end align-items-center">
                            <Col xs="3" className="">
                                <Badge className="badge-menu">{post.badge}</Badge>
                            </Col>
                        </Row>
                        <div className="d-block text-center">
                            <CardImg className="cardmenu-img" top width="100%" src={post.img} alt={post.title} />
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
                <Menu menus={menus} />
            </Container>
        )
    }
}