import { normalize } from 'normalizr';
import * as schema from '../actions/schema';
import { getInitialData, getPageData } from '../utils/api';

export const getInitData = () => (dispatch) => {
    getInitialData().then( response => {
        dispatch({
            type: 'GET_INIT_DATA',
            response: normalize(response, schema.articles),
        })
    });
};

export const getNextPageData = (currentPageIndex) => (dispatch) => {
    const page = Number(currentPageIndex + 1);

    getPageData(page).then( response => {
        dispatch({
            type: 'GET_NEXT_PAGE_DATA',
            response: normalize(response, schema.articles),
        })
    });
};

export const getPrevPageData = (currentPageIndex => (dispatch) => {
    const page = Number(currentPageIndex - 1);

    getPageData(page).then( response => {
        dispatch({
            type: 'GET_PREV_PAGE_DATA',
            response: normalize(response, schema.articles),
        })
    });
});
