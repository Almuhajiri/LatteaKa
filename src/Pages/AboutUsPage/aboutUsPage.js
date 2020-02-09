import React, { Fragment } from 'react'

import Navbar from '../../Layouts/Navbar'
import Header from '../../Layouts/Header'
import AboutUsMenu from '../../Layouts/AboutUsMenu'
import Sponsored from '../../Layouts/Sponsored'
import ContactInfo from '../../Layouts/ContactInfo'
import Footer from '../../Layouts/Footer/footer'

export default class AboutUsPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Header />
                <AboutUsMenu />
                <Sponsored />
                <ContactInfo />
                <Footer />
            </Fragment>
        )
    }
}