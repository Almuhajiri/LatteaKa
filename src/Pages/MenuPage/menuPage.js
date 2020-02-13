import React, { Fragment } from 'react'

import Header from '../../Layouts/Header'
import AboutMenu from '../../Layouts/AboutMenu'
import MenuDescription from '../../Layouts/MenuDescription'

export default class MenuPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <AboutMenu />
                <MenuDescription />
            </Fragment>
        )
    }
}