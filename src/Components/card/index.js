/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

import './styles.css'

export default class Component extends React.Component {
    render() {

    const { cardImg, altImg, cardTitle, cardSubtitle } = this.props

        return (
            <div>
                <Card className="card d-block text-center">
                    <CardImg top width="100%" src={cardImg} alt={altImg} className='img-fluid card-img' />
                    <CardBody>
                        <CardTitle className="card-title">{cardTitle}</CardTitle>
                        <CardText className="subtitle">{cardSubtitle}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

Component.PropTypes = {
    cardImg: PropTypes.object.isRequired,
    altImg: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardSubtitle: PropTypes.string.isRequired
}

Component.defaultProps = {
    cardImg: {},
    altImg: 'img',
    cardTitle: 'Title',
    cardSubtitle: 'Lorem Ipsum'
}