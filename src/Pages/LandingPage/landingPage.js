import React, { Fragment } from 'react'

import HeaderLanding from '../../Layouts/HeaderLanding'
import Poster from '../../Layouts/Poster'
import Jumbotron from '../../Layouts/Jumbotron'
import Menu from '../../Layouts/Menu'
import Franchise from '../../Layouts/Franchise'
import { PartGallery } from '../../Layouts/Gallery'

export default class LandingPage extends React.Component {
    render() {
        return (
            <Fragment>
                <HeaderLanding />
                <Poster />
                <Jumbotron />
                <Menu />
                <Franchise />
                <PartGallery />
            </Fragment>
        )
    }
}