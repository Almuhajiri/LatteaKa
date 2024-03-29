import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import Pages from '../src/Pages'
import LoginPage from './Pages/LoginPage'
import Admin from './Pages/DashboardPage'
import RegisterPage from './Pages/RegisterPage'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/admin" render={props => <Admin {...props} />} />
            <Route path="/login" render={props => <LoginPage {...props} />} />
            <Route path="/register" render={props => <RegisterPage {...props} />} />
            <Route path="/" render={props => <Pages {...props} />} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
