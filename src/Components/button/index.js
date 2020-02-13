/* eslint-disable react/no-typos */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
// import { animateScroll as scroll, scroller } from 'react-scroll'

import './styles.css'

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    // scrollTo() {
    //     scroller.scrollTo('scroll-to-element', {
    //         duration: 800,
    //         delay: 0,
    //         smooth: 'easeInOutQuad'
    //     })
    // }
    render() {
        const { title } = this.props
        return (
            <Fragment>
                <Button className="button" >{title}</Button>
            </Fragment>
        )
    }
}

Component.PropTypes = {
    title: PropTypes.string.isRequired
}

Component.defaultProps = {
    title: ''
}