import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import WOW from 'wow.js'
import 'animate.css'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker'
import LandingPage from './Pages/LandingPage'
import MenuPage from './Pages/MenuPage'
import GalleryPage from './Pages/GalleryPage'
import AboutUsPage from './Pages/AboutUsPage/aboutUsPage'

new WOW().init();

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/index" render={props => <LandingPage {...props} />} />
            <Route path="/menu" render={props => <MenuPage {...props} />} />
            <Route path="/gallery" render={props => <GalleryPage {...props} />} />
            <Route path="/aboutUs" render={props => <AboutUsPage {...props} />} />
            <Redirect from="/" to="/index" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
