import { combineReducers } from 'redux';
import example from './module/example/reducers';
import { UPDATE_NAME } from './module/default/actionTypes'

let initialState = {
    name: 'Guest'
};

function main(state = initialState, action){
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        default:
            return state;
    }
}

const app = combineReducers({
    main,
    example
});

export default app;