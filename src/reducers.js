import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import common from './module/common/reducers';

const app = combineReducers({
    routing,
    common
});

export default app;