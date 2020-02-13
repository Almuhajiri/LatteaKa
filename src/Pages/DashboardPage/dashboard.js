import React from 'react'

import Navbar from '../../Layouts/Dashboard/Navbar'
import GuestBook from '../../Layouts/Dashboard/GuestBook'
import Menu from '../../Layouts/Dashboard/Menu'
import AddMenu from '../../Layouts/Dashboard/AddMenu/addMenu'
import Footer from '../../Layouts/Dashboard/Footer/footer'
import SideBar from '../../Layouts/Dashboard/SideBar/sideBar'
// import Main from '../../Layouts/Dashboard/MainDashboard'

export default class Dashboard extends React.Component {
    render() {
        return (
            <>
                <SideBar />
                {/* <Navbar /> */}
                <GuestBook />
                <Menu />
                <AddMenu />
                <Footer />
                {/* <Main /> */}
            </>
        )
    }
}