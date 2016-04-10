import * as type from './actionTypes'

let initialState = {
    ready: false,
    loading: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.EXAMPLE_LOADING:
            return Object.assign({}, state, {
                'loading': true
            });
        case type.EXAMPLE_UPDATE_TYPE:
            return Object.assign({}, state, {
                'key': action.value
            });
        default:
            return state;
    }
}

export default reducer