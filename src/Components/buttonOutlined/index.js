/* eslint-disable react/no-typos */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {Button} from 'reactstrap'

import './styles.css'

export default class Component extends React.Component {
    render() {
    const {title} = this.props

        return(
            <Fragment>
                <Button className="buttonoutlined">{title}</Button>
            </Fragment>
        )
    }
}

Component.PropTypes = {
    title: PropTypes.string.isRequired
  };
  
Component.defaultProps = {
    title: ''
}