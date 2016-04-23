import React, {Component} from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home';
import { hello } from '../actions';

class Store extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        const {offers} = this.props;

        return <Home offers={offers} />
    }
}

const mapStateToProps = (state) => {
    return {
        offers: [{name: "Foo", slug: "prd-1"},{name: "Foo", slug: "prd-2"},{name: "Foo", slug: "prd-3"},{name: "Foo", slug: "prd-4"}]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {dispatch(hello())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
