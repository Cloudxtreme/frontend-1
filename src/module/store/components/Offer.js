import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'


export default class Offer extends Component {

    render() {
        const {offer} = this.props;

        return (
            <div className="col-sm-4">
                <h5>{offer.name}</h5>
                <Link to={`/store/${offer.slug}`}><img src="http://placehold.it/200x200" /></Link>
            </div>
        );
    }
};

