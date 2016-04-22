import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import Home from './containers/Home';
import About from './components/About';

export default (
    <Route path="/">
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
    </Route>
)