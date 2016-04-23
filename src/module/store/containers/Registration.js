import React, {Component} from 'react'
import { connect } from 'react-redux'
import Page from '../../common/components/Page';

class Registration extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return(
        <Page title="Store Registration" subtitle="Module">
            <h2>Register for Big Savings</h2>
            <p>Sign me up!</p>
        </Page>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
