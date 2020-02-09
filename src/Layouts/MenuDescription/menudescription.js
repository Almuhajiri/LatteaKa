/* eslint-disable no-unused-expressions */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'
import IMAGES from '../../configs/images'

const menus = [
    {
        id: 1,
        title: 'Original Thai Tea',
        description: 'Original Thai tea is given a sweet flavor of sugar and sweetened condensed milk with evaporated milk, coconut milk or full cream milk which gives a creamy texture',
        img: IMAGES.menu1
    },
    {
        id: 2,
        title: 'Greentea Thai Tea',
        description: 'Greentea made with a mix of spices, sweet flavor of sugar and full cream milk which is the best seller menu',
        img: IMAGES.menu2
    },
    {
        id: 3,
        title: 'Coffee Thai Tea',
        description: 'Thai Black Coffee Brewed with mix of sweet flavor of sugar and full cream milk that is creamy and yummy',
        img: IMAGES.menu3
    },
    {
        id: 4,
        title: 'Ovaltine Thai Tea',
        description: 'Cold Chocolate Drinks Blended with mix of sweet flavor of sugar and full cream milk thai is Refreshing Ovaltine Thai Tea',
        img: IMAGES.menu4
    },
    {
        id: 5,
        title: 'Milo Thai Tea',
        description: 'Cold Milo Chocolate Drinks Blended with mix of sweet flavor of sugar and full cream milk thai is Refreshing Milo Thai Tea',
        img: IMAGES.menu5
    },
    {
        id: 6,
        title: 'Aren Thai Tea',
        description: 'Sugar Palm made with a mix of spices, sweet flavor of sugar and full cream milk',
        img: IMAGES.menu6
    },
]

export default class MenuDescription extends React.Component {
    render() {

        function MenuDetails(props) {
            const item = props.menus.map((post) =>
                <Row className="card-menu-detail-container wow animated fadeInLeft">
                    <Col md={{ size: 4, offset: 0 }} key={post.id}>
                        <img src={post.img} alt={post.title} />
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
                    <Col>
                        <MenuDetails menus={menus} />
                    </Col>
                    <img src={IMAGES.posterFranchise} alt="Poster Franchise" className="img-fluid" />
                </Row>
            </Container >
        )
    }
}