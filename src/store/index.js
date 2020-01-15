import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import monitorReducerEnhancer from "./enhancers/monitorReducer";
import logger from "./middleware/logger";

import rootReducer from "./reducers";

const middlewareEnhancer = applyMiddleware(logger, thunk);

const composedEnhancers = compose( middlewareEnhancer, monitorReducerEnhancer );

const initialState = {};

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;