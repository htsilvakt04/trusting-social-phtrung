import { normalize } from 'normalizr';
import * as schema from '../actions/schema';
import { getInitialData } from '../utils/api';

export const getInitData = () => (dispatch) => {
    getInitialData().then( response => {
        dispatch({
            type: 'GET_INIT_DATA',
            response: normalize(response, schema.articles),
        })
    });
};
