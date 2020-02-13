import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './styles.css'
import Button from '../../Components/button'
import arraysGallery from './arraysGallery'

export default class PartGallery extends React.Component {
    render() {
        function PartGallery(props) {
            const items = props.arraysGallery.slice(0, 4).map((post) =>
                <Col md="3" className="d-block text-center p-3 wow animated fadeInLeftBig" key={post.id}>
                    <img className="img-gallery img-fluid" src={post.img} alt={post.title} />
                </Col>
            )
            return (<Row className="mt-5 mb-5">{items}</Row>)
        }

        return (
            <>
                <Container className="container-gallery">
                    <Row>
                        <Col md="12" className="d-block text-center wow animated fadeInUp">
                            <p className="title">LatteaKa Thai Tea Indonesia</p>
                        </Col>
                        <Col md={{ size: 6, offset: 3 }} className="d-block text-center wow animated fadeInUp">
                            <p className="subtitle">And every beverage is prepared right in front of you, using both modern and traditional brewing methods</p>
                        </Col>
                        <Container>
                            <PartGallery arraysGallery={arraysGallery} />
                        </Container>
                        <Col md="12" className="d-block text-center">
                            <a href="/gallery"><Button title={'See More'} /> </a>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
