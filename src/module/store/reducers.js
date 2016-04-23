import { combineReducers } from 'redux';
import { normalize, Schema, arrayOf } from 'normalizr';
import merge from 'lodash/merge';
import * as ActionTypes from './actions';


const catalogSchema = new Schema('catalog');
const productSchema = new Schema('products', { idAttribute: 'slug'});

catalogSchema.define({
    products: arrayOf(productSchema)
});

let initialState = {
    is_ready: false
};

function settings(state = initialState, action){
    return state;
}

function cart(state = initialState, action){
    return state;
}

function registration(state = initialState, action){
    return state;
}

function catalog(state = initialState, action){
    if (action.type == ActionTypes.RECEIVE_PRODUCT) {
        return  merge({}, state, normalize(action.product, productSchema));
    }
    return state;
}

const main = combineReducers({
    settings,
    cart,
    catalog
});

export default main;