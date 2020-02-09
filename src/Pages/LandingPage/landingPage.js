import React, { Fragment } from 'react'

import Navbar from '../../Layouts/Navbar'
import HeaderLanding from '../../Layouts/HeaderLanding'
import Poster from '../../Layouts/Poster'
import Jumbotron from '../../Layouts/Jumbotron'
import Menu from '../../Layouts/Menu'
import Franchise from '../../Layouts/Franchise'
import { PartGallery } from '../../Layouts/Gallery'
import Footer from '../../Layouts/Footer'

export default class LandingPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <HeaderLanding />
                <Poster />
                <Jumbotron />
                <Menu />
                <Franchise />
                <PartGallery />
                <Footer />
            </Fragment>
        )
    }
}