import {applyMiddleware, compose} from 'redux';
import logger from './logger';
import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares =  applyMiddleware(
    thunk, logger
);
if (process.env.NODE_ENV === 'test') {
    middlewares =  applyMiddleware(
        thunk
    );
}
export default middlewares;
