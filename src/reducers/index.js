import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import IDs from './IDs';
import byId, * as fromById from './byId';
import currentPaginationIndex, * as fromCurrentPaginationIndex from './currentPaginationIndex';

export default combineReducers({
    IDs,
    byId,
    currentPaginationIndex,
    loadingBar: loadingBarReducer,
});

export const getAllArticles = (state) =>
    fromById.getAll(state.byId)

export const getCurrentPaginationIndex = (state) =>
    fromCurrentPaginationIndex.getCurrentIndex(state.currentPaginationIndex)

export const getArticleById = (state, id) =>
    fromById.getArticleById(state.byId, id)

export const getIsLoadingBar = (state, id) => state.loadingBar.default === 1;

