import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import app from './reducers';
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

let middleware = routerMiddleware(hashHistory);

export const store = createStore(app, applyMiddleware(thunk, middleware));

export const history = syncHistoryWithStore(hashHistory, store);

