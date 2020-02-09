import React from 'react'

import './styles.css'
import { Container, Row, Col } from 'reactstrap'
import IMAGES from '../../configs/images'

const contacts = [
    {
        id: 1,
        img: IMAGES.map,
        description: 'Ruko Neo Arcade blok C no. 3 Perumahan Gading Serpong Tangerang, Banten 15810 Indonesia.'
    },
    {
        id: 2,
        img: IMAGES.email,
        description: 'Latteaka@example.com'
    },
    {
        id: 3,
        img: IMAGES.whatsapp,
        description: '0852-1663-2462'
    },
]

export default class ContactInfo extends React.Component {
    render() {
        function RenderContacs(props) {
            const items = props.contacts.map((post) =>
                <Row key={post.id}>
                    <Col md="2" xs="2">
                        <img src={post.img} alt="." />
                    </Col>
                    <Col md="8" xs="10">
                        <p className="text-contact">{post.description}</p>
                    </Col>
                </Row>
            )
            return (<Col>{items}</Col>)
        }

        return (
            <Container>
                <Row className="contact-container d-flex flex-row-reverse">
                    <Col md="6" className="wow animated fadeInRight mb-5">
                        <img src={IMAGES.contact} alt="Contact Us" className="img-fluid" />
                    </Col>
                    <Col md="6" className=" wow animated fadeInLeft">
                        <p className="text-brand-landing">thai tea</p>
                        <p className="title">Contact Info</p>
                        <div>
                            <RenderContacs contacts={contacts} />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}