/* eslint-disable no-unused-vars */
import React from 'react'
import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Container
} from 'reactstrap'
import axios from 'axios'

import './styles.css'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            loading: false
        }
    }

    componentWillMount() {
        this.get()
    }

    get = () => {
        this.setState({
            loading: true
        })
        axios.get('http://3.94.252.36/api/menu/all')
            .then(res => {
                const menus = res.data;
                this.setState({
                    menus,
                    loading: false
                });
            })
    }

    menu = () => (
        this.state.menus.map((post) =>
            <Col md="4" className="wow animated fadeInUp">
                <Card key={post.id}>
                    <Row className="justify-content-end align-items-center">
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
    )

    render() {
        return (
            <Container className="container-menu wow animated fadeInUp" >
                <Row className="d-block text-center">
                    <Col md={{ size: 8, offset: 2 }}>
                        <p className="title">Choose Your Favorite Thai Tea From our Top Menu</p>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    {
                        this.state.loading ?
                            <p>loading...</p>
                            :
                            this.menu()
                    }
                </Row>
            </Container>
        )
    }
}