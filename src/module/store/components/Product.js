import React, { PropTypes, Component } from 'react'
import Page from '../../common/components/Page';


export default class Product extends Component {

    componentWillMount() {

    }

    render() {
        const {product} = this.props;
        return (
            <div className="row">
                <div className="col-sm-6">
                    <h2>{product.title} <small>{product.subtitle}</small></h2>
                    <p>{product.description}</p>
                    <p>{product.slug}</p>
                </div>
                <div className="col-sm-6">
                    <img src="http://placehold.it/400x400" />
                </div>
            </div>
        );
    }
};

