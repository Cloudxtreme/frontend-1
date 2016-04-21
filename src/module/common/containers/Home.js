import React, {Component} from 'react'
import { connect } from 'react-redux'
import Page from '../components/Page';
import { doOnloadAction } from '../actions';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('here');
        this.props.onLoad();
    }

    render() {
        return(
        <Page title="Common" subtitle="Module">
            <p className="lead">Proof of concept building a JS app using Webpack, Babel, ES6, ReactJS, Font Awesome, and Bootstrap</p>
            <h2>Font Awesome Example</h2>
            <p><i className="fa fa-camera-retro"></i> Smile</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <h2>Bootstrap JS</h2>
            <p>Use an async process to show a loading state for this component.</p>
            <p>
                <button disabled={this.props.is_ready ? '' : 'disabled'} type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    {this.props.is_ready ? '' : <i className="fa fa-spinner fa-pulse fa-fw"></i>} Show Modal
                </button>
            </p>
        </Page>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        is_ready: state.common.is_ready

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {dispatch(doOnloadAction())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
