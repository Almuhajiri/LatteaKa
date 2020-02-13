/* eslint-disable no-unused-expressions */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'

import './styles.css'
import IMAGES from '../../configs/images'

export default class MenuDescription extends React.Component {
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

        function MenuDetails(props) {
            const item = props.menus.map((post) =>
                <Row className="card-menu-detail-container wow animated fadeInLeft">
                    <Col md={{ size: 4, offset: 1 }} key={post.id}>
                        <img src={post.photo} alt={post.title} />
                    </Col>
                    <Col md={{ size: 5, offset: 0 }}>
                        <p className="menu-title">{post.title}</p>
                        <p className="subtitle">{post.description}</p>
                    </Col>
                </Row>
            )
            return (<div>{item}</div>)
        }

        return (
            <Container className="menu-detail-container">
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className="d-block text-center wow animated fadeInUp">
                        <p className="title">Franchise Thai Tea LatteaKa</p>
                        <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every beverage is prepared</p>
                    </Col>
                </Row>
                <MenuDetails menus={this.state.menus} />
                <img src={IMAGES.posterFranchise} alt="Poster Franchise" className="img-fluid" />
            </Container >
        )
    }
}