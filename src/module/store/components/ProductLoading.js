import React, { PropTypes, Component } from 'react'
import ProgressBar from '../../common/components/ProgressBar';

export default class ProductLoading extends Component {

    render() {
        return (
                <div className="row">
                    <ProgressBar />
                    <h2 className="loading"></h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="loading image"><i className="fa fa-pulse fa-spinner fa-3x" /></div>
                        </div>
                        <div className="col-sm-6">
                            <p className="loading"></p>
                            <p className="loading"></p>
                            <p className="loading"></p>
                        </div>
                    </div>
                </div>
        );
    }
};



