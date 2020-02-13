import React, { Fragment } from 'react'

import Header from '../../Layouts/Header'
import AboutUsMenu from '../../Layouts/AboutUsMenu'
import Sponsored from '../../Layouts/Sponsored'
import ContactInfo from '../../Layouts/ContactInfo'

export default class AboutUsPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <AboutUsMenu />
                <Sponsored />
                <ContactInfo />
            </Fragment>
        )
    }
}