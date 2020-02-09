import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import './styles.css'
import arraysGallery from './arraysGallery'

export default class FullGallery extends React.Component {
    render() {
        function FullGallery(props) {
            const items = props.arraysGallery.map((post) =>
                <Col md="3" className="d-block text-center p-3 wow animated fadeInLeft" key={post.id}>
                    <img className="img-gallery img-fluid" src={post.img} alt={post.title} />
                </Col>
            )
            return (<Row className="container-img-gallery">{items}</Row>)
        }
        return (
            <Container>
                <FullGallery arraysGallery={arraysGallery} />
            </Container>
        )
    }
}