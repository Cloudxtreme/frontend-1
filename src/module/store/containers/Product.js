import React, {Component} from 'react'
import { connect } from 'react-redux'
import Page from '../../common/components/Page';
import Product from '../components/Product';
import ProductLoading from '../components/ProductLoading';
import { loadProduct } from '../actions';


class ProductPage extends Component {

    constructor(props) {
        super(props);
        const {params, products} = props;
        const product = products[params.slug];
        this.state = {loading: false};
        if (!product || product.slug != params.slug) {
            this.state = {loading: true};
            props.loadProduct(params.slug);
        }
    }

    componentWillReceiveProps(nextProps) {
        const product = nextProps.products[nextProps.params.slug];
        if (product && this.state.loading) {
            this.setState({loading: false});
        }
    }

    render() {
        const { products, params } = this.props;
        const product = products[params.slug];
        let breadcrumbs = [{title: 'Store', href: '/store'}, {title: 'Product', active: true}];

        return  <Page title="Widgets Emporium" subtitle="Module" breadcrumbs={breadcrumbs}>
            { product && !this.state.loading ? <Product product={product} /> : <ProductLoading /> }
            </Page>
    }
}

const mapStateToProps = (state) => {
    const { catalog } = state.store;

    return {
        products: catalog && catalog.entities ? catalog.entities.products : {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProduct: (slug) => {dispatch(loadProduct(slug))}
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
