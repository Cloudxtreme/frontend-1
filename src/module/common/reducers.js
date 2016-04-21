import { combineReducers } from 'redux';
import { UPDATE_NAME, CHANGE_FORM } from './actionTypes'
import { normalize, Schema, arrayOf } from 'normalizr';
import merge from 'lodash/merge';


let initialState = {
    name: 'Guest'
};

function user(state = initialState, action){
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        case CHANGE_FORM:
            return merge({}, state, action.form.entities);
        default:
            return state;
    }
}

function registration(state={ errors: {}}, action) {
    let errors;
    switch(action.type) {
        case 'registration':
            let change = {};
            change[action.name] = action.value;
            return merge({}, state, change);
        case 'registration-error':
            errors = state.errors;
            errors[action.name] = action.error;
            return merge({}, state, {errors: errors});
        case 'registration-clear':
            errors = state.errors;
            delete errors[action.name];
            return merge({}, state, {errors: errors});
        default:
            return state;

    }
}

const main = combineReducers({
    user,
    registration
});

export default main;