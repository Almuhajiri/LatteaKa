import React, { Fragment } from 'react'

import Header from '../../Layouts/Header'
import { FullGallery } from '../../Layouts/Gallery'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'

export default class GalleryPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Header />
                <FullGallery />
                <Footer />
            </Fragment>
        )
    }
}