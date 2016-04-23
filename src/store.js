import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import app from './reducers';
import { hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

let middleware, historyStrategy;
if (process.env.NODE_ENV === 'production') {
    historyStrategy = browserHistory;
} else {
    // its not really needed to use hashHistory for development, its just for demonstration
    historyStrategy = hashHistory;
}

middleware = routerMiddleware(historyStrategy);

export const store = createStore(app, applyMiddleware(thunk, middleware));

export const history = syncHistoryWithStore(historyStrategy, store);

