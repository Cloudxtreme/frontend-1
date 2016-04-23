import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { rootRoute } from '../../../routes';


export default class App extends Component {

    render() {
        return (
            <Router history={this.props.history} routes={rootRoute} />
        );
    }
};

