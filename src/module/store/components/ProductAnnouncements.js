import React, { PropTypes, Component } from 'react'
import Offer from './Offer';


export default class ProductAnnouncements extends Component {

    render() {
        const {offers} = this.props;
        let offerings = '';
        if (offers) {
            offerings = offers.map((offer, i) => <Offer key={i} offer={offer} />);
        }

        return (
            <div>
                <h3>On Sale!</h3>
                <div className="row">{offerings}</div>
            </div>
        );
    }
};

