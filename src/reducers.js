import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
    routing,
    common: require('./module/common/reducers').default,
    store: require('./module/store/reducers').default
});
