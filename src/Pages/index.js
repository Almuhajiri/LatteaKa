import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Styles
import WOW from 'wow.js'
import 'animate.css'
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'

// Component
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'

// Pages
import LandingPage from './LandingPage'
import MenuPage from './MenuPage'
import GalleryPage from './GalleryPage'
import AboutUsPage from './AboutUsPage'
import FranchisePage from './FranchisePage'
// import FloatButton from '../Components/floatButtonWhatsapp'

new WOW().init();

function Pages() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/index" render={props => <LandingPage {...props} />} />
                    <Route path="/menu" render={props => <MenuPage {...props} />} />
                    <Route path="/gallery" render={props => <GalleryPage {...props} />} />
                    <Route path="/aboutUs" render={props => <AboutUsPage {...props} />} />
                    <Route path="/franchise" render={props => <FranchisePage {...props} />} />
                    <Redirect to="/index" />
                    <Redirect from="/" to="/index" />
                </Switch>
                {/* <FloatButton /> */}
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Pages