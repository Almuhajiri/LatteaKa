import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'
import IMAGES from '../../configs/images'

const menus = [
    {
        id: 1,
        img: IMAGES.trusted,
        title: 'A wide range of product and component.',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every We brew only the finest leaves and beans to ensure delicious.'
    },
    {
        id: 2,
        img: IMAGES.trusted,
        title: 'A wide range of product and component.',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every We brew only the finest leaves and beans to ensure delicious.'
    },
    {
        id: 3,
        img: IMAGES.trusted,
        title: 'A wide range of product and component.',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every We brew only the finest leaves and beans to ensure delicious.'
    },
    {
        id: 4,
        img: IMAGES.trusted,
        title: 'A wide range of product and component.',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every We brew only the finest leaves and beans to ensure delicious.'
    },
]

export default class AboutMenu extends React.Component {
    render() {

        function AboutItems(props) {
            const items = props.menus.map((post) =>
                <div key={post.id} className="about-item-container wow animated fadeInRight">
                    <img className="img-fluid card-img" style={{ marginBottom: '2rem' }} src={post.img} alt={post.title} />
                    <p className="card-title text-left">{post.title}</p>
                    <p className="subtitle">{post.description}</p>
                </div>
            )
            return (<Row md="2" >{items}</Row>)
        }

        return (
            <Container fluid={true}>
                <Row className="about-menu-container">
                    <Col md={{ size: 3, offset: 1 }} className="wow animated fadeInLeft">
                        <p className="text-brand-landing display">thai tea</p>
                        <p className="title">This is an about page for InterCapital. We sectioned it</p>
                    </Col>
                    <Col md="8">
                        <AboutItems menus={menus} />
                    </Col>
                </Row>
            </Container>
        )
    }
}