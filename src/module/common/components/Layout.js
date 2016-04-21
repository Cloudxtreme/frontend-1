import React, { PropTypes, Component } from 'react'

export default class Layout extends Component {

    render() {

        return (
            <div className="container">
                <div id="cp-side-menu" className="col-md-2">
                    <ul className="list-group">
                        <a href="#" className="list-group-item">About</a>
                        <a href="#" className="list-group-item">Blog</a>
                        <a href="#" className="list-group-item">News</a>
                        <a href="#" className="list-group-item">Support</a>
                        <a href="#" className="list-group-item">FAQ</a>
                    </ul>
                </div>
                <div className="col-md-10">{this.props.children}</div>
            </div>
        );
    }
};

