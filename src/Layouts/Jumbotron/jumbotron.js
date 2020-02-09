import React from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

import './styles.css'
import IMAGES from '../../configs/images'
// import Card from '../../Components/card'

const menus = [
    {
        id: 1,
        img: IMAGES.trusted,
        title: 'Trusted Owner',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every'
    },
    {
        id: 2,
        img: IMAGES.realiable,
        title: 'Realiable',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every'
    },
    {
        id: 3,
        img: IMAGES.profit,
        title: 'Profit',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every'
    },
]

export default class Jumbotron extends React.Component {
    render() {
        function Menu(props) {
            const renderCardMenu = props.menus.map((post) =>
                <Col md="4">
                    <Card className="card d-block text-center wow animated fadeInUp" key={post.id}>
                        <CardImg top width="100%" src={post.img} alt={post.title} className='img-fluid card-img' />
                        <CardBody>
                            <CardTitle className="card-title">{post.title}</CardTitle>
                            <CardText className="subtitle">{post.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            )
            return (
                <Row className="p-5">
                    {renderCardMenu}
                </Row>
            )
        }

        return (
            <Container className="container-jumbotron">
                <Row>
                    <Col md="12" className="d-block text-center wow animated fadeInUp">
                        <p className="title">LatteaKa Thai Tea Indonesia</p>
                    </Col>
                    <Col md={{ size: 6, offset: 3 }} className="d-block text-center wow animated fadeInUp">
                        <p className="subtitle">And every beverage is prepared right in front of you, using both modern and traditional brewing methods</p>
                    </Col>
                </Row>
                <Menu menus={menus} />
            </Container>
        )
    }
}