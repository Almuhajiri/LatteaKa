import React, { Fragment } from 'react'

import Navbar from '../../Layouts/Navbar'
import Header from '../../Layouts/HeaderLanding'
import Poster from '../../Layouts/Poster'
import Jumbotron from '../../Layouts/Jumbotron'
import Menu from '../../Layouts/Menu'
import Franchise from '../../Layouts/Franchise'
import Gallery from '../../Layouts/Gallery'
import Footer from '../../Layouts/Footer'

export default class Component extends React.Component {
    render() {
        return (
            <Fragment>
                {/* <Navbar /> */}
                <Header />
                <Poster />
                <Jumbotron />
                <Menu />
                <Franchise />
                <Gallery />
                <Footer />
            </Fragment>
        )
    }
}