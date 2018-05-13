import {applyMiddleware} from 'redux';
import logger from './logger';
import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = applyMiddleware(
    thunk
);
if (process.env.NODE_ENV !== 'test') {
    middlewares = applyMiddleware(
        thunk, logger
    );
}
export default middlewares;
