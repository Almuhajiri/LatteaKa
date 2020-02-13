import React, { Fragment } from 'react'

import Header from '../../Layouts/Header'
import { FullGallery } from '../../Layouts/Gallery'

export default class GalleryPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <FullGallery />
            </Fragment>
        )
    }
}