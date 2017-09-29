import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

if(process.env.NODE_ENV !== 'production'){
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
);

export default configureStore;
