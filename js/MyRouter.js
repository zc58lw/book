import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import {BrowserRouter,Route,hashHistory} from 'react-router-dom'


import Menu from './pages/Menu'
import ImgesDemo from './pages/ImgesDemo'
import DataDemo from './pages/DataDemo'

class MyRouter extends Component {
    render() {
        return (<BrowserRouter history={hashHistory}>
                    <div className="container">
                        <Route name='index' path='/' component={Menu}></Route>
                        {/*<Route name='index' path='/menu' component={Menu}></Route>*/}
                        <Route name='index' path='/datademo' component={DataDemo}></Route>
                        <Route name='index' path='/imgesdemo' component={ImgesDemo}></Route>
                    </div>
                    {/*<Route name='WXFirstLogin' path='/WXFirstLogin' component={WXFirstLogin} onEnter={setTitle}></Route>*/}
                    {/*<Route name='main' path='/main/:submenu' component={MainComponentM} onEnter={setTitle}></Route>*/}
                </BrowserRouter>)
    }
}

module.exports =MyRouter