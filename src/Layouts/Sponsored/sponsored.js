import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'
import IMAGES from '../../configs/images'

const sponsors = [
    {
        id: 1,
        img: IMAGES.sponsor1,
        title: 'Tokopedia'
    },
    {
        id: 2,
        img: IMAGES.sponsor2,
        title: 'Bukalapak'
    },
    {
        id: 3,
        img: IMAGES.sponsor3,
        title: 'ZALORA'
    },
    {
        id: 4,
        img: IMAGES.sponsor4,
        title: 'Shopee'
    },
    {
        id: 5,
        img: IMAGES.sponsor5,
        title: 'LAZADA'
    }
]

export default class Sponsored extends React.Component {
    render() {
        function RenderSponsored(props) {
            const items = props.sponsors.map((post) =>
                <Col className="d-block text-center" key={post.id} >
                    <img src={post.img} alt={post.title} />
                </Col>
            )
            return (<Row>{items}</Row>)
        }

        return (
            <Container className="container-sponsored">
                <Row>
                    <Col>
                        <p className="title-sponsored wow animated fadeInUp">Standards &amp; Technology Trusted By :</p>
                    </Col>
                </Row>
                <RenderSponsored sponsors={sponsors} />
            </Container>
        )
    }
}