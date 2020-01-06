/* eslint-disable no-const-assign */
/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardImg, CardBody, CardTitle, Badge } from 'reactstrap'

import './styles.css'

export default class Component extends React.Component {
    render() {
    
    const { cardMenuBadge, cardMenuImg, cardMenuTitle } =this.props

        return (
            <div>
                <Card>
                    <Row className="justify-content-end align-items-center">
                        <Col xs="3" className="">
                            <Badge className="badge-menu">{cardMenuBadge}</Badge>
                            {/* <div className="button-card-menu">{cardMenuBadge}</div> */}
                        </Col>
                    </Row>
                    <div className="d-block text-center">
                        <CardImg className="cardmenu-img" top width="100%" src={cardMenuImg} alt="Menu" />
                    </div>
                    <CardBody>
                        <CardTitle>{cardMenuTitle}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

Component.PropTypes = {
    cardMenuBadge: PropTypes.string.isRequired,
    cardMenuImg: PropTypes.object.isRequired,
    cardMenuTitle: PropTypes.string.isRequired,

}
  
Component.defaultProps = {
    cardMenuBadge: '',
    cardMenuImg: {},
    cardMenuTitle: ''
}