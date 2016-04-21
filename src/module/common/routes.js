import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import Home from './containers/Home';
import { push, replace } from 'react-router-redux'


export default (
    <Route path="/">
        <IndexRoute component={Home} />
    </Route>
)