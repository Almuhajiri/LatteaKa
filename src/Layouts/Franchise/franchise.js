import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import './style.css'
import Button from '../../Components/button'
import benefit from '../../assets/svg/benefit.svg'
import mobileBenefit from '../../assets/svg/mobile-benefit.svg'
import modal from '../../assets/svg/modal.svg'
import mobileModal from '../../assets/svg/mobile-modal.svg'
import price from '../../assets/svg/price.svg'
import mobilePrice from '../../assets/svg/mobile-price.svg'
import stepByStep from '../../assets/svg/stepbystep.svg'
import mobileStepByStep from '../../assets/svg/mobile-stepbystep.svg'

const benefitFranchise = [
    {
        id: 1,
        img: benefit,
        mobileImg: mobileBenefit,
        title: 'Benefit',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee.'
    },
    {
        id: 2,
        img: modal,
        mobileImg: mobileModal,
        title: 'Modal',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee.'
    },
    {
        id: 3,
        img: price,
        mobileImg: mobilePrice,
        title: 'Price List',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee.'
    },
    {
        id: 4,
        img: stepByStep,
        mobileImg: mobileStepByStep,
        title: 'Step by Step',
        description: 'We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee.'
    }
]

export default class Franchise extends React.Component {
    render() {

        function Menu(props) {
            const renderCardBenefits = props.benefitFranchise.map((post) =>
                <Col md={{ size: 7, offset: 2 }} className="card-franchise wow animated fadeInLeft" key={post.id}>
                    <Row className="align-items-center" style={{ padding: '2rem' }}>
                        <Col md="3" className="d-block text-center img-container">
                            <img className="img-franchise-M" src={post.mobileImg} alt={post.title} />
                            <img className="img-franchise" src={post.img} alt={post.title} />
                        </Col>
                        <Col md={{ size: 7, offset: 1 }}>
                            <p className="title-card-franchise">{post.title}</p>
                            <p className="subtitle">{post.description}</p>
                        </Col>
                    </Row>
                </Col>
            )
            return (<Row>{renderCardBenefits}</Row>)
        }

        return (
            <Fragment >
                <Container fluid={true} className="container-franchise">
                    <Row>
                        <Col md="12" className="d-block text-center wow animated fadeInUp">
                            <p className="title">Franchise Thai Tea LatteaKa</p>
                        </Col>
                        <Col md={{ size: 6, offset: 3 }} className="d-block text-center wow animated fadeInUp">
                            <p className="subtitle">We brew only the finest leaves and beans to ensure delicious cups of tea and freshly roasted speciality coffee. And every beverage is prepared</p>
                        </Col>
                        <Container fluid={true} className="container-card-franchise">
                            <Menu benefitFranchise={benefitFranchise} />
                        </Container>
                    </Row>
                    <Col className="d-block text-center">
                        <Button title={'Learn More'} />
                    </Col>
                </Container>
            </Fragment>
        )
    }
}