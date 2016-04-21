import React, { PropTypes, Component } from 'react'
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';


export default class Page extends Component {

    render() {
        const { title, subtitle, breadcrumbs } = this.props;
        return (
            <Layout>
                <Header title={title} subtitle={subtitle} />
                { breadcrumbs ? <Breadcrumb breadcrumbs={ breadcrumbs } /> : '' }
                {this.props.children}
                <Footer />
            </Layout>
        );
    }
};

