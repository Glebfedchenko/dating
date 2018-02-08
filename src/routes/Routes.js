import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom'
import App from '../components/App'
import '../styles/app.scss'
import {Provider} from 'react-redux'
import store from '../store/store'

const Routes = () =>
<Provider store={store}>
    <Router>
        <Switch>
            <Route path='/' component={App} />
        </Switch>
    </Router>
</Provider>
export default Routes