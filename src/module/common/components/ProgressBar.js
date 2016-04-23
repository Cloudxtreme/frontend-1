import React, { PropTypes, Component } from 'react'


export default class ProgressBar extends Component {

    render() {
        // make this more generic
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar"
                     aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>Loading...</div>
            </div>
        );
    }
};
