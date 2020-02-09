import React, { Fragment } from 'react'

import Navbar from '../../Layouts/Navbar'
import Header from '../../Layouts/Header'
import AboutMenu from '../../Layouts/AboutMenu'
import MenuDescription from '../../Layouts/MenuDescription'
import Footer from '../../Layouts/Footer'

export default class MenuPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Header />
                <AboutMenu />
                <MenuDescription />
                <Footer />
            </Fragment>
        )
    }
}