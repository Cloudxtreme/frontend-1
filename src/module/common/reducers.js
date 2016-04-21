import { combineReducers } from 'redux';
import * as ActionTypes from './actions';


let initialState = {
    is_ready: false
};

function common(state = initialState, action){
    switch (action.type) {
        case ActionTypes.ONLOAD:
            return Object.assign({}, state, {
                is_ready: true
            });
        default:
            return state;
    }
}

const main = combineReducers({
    common
});

export default common;