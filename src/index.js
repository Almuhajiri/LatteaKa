import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker'
import Landing from './Pages/Landing'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/index" render={props => <Landing {...props} />} />
            <Redirect from="/" to="/index" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
