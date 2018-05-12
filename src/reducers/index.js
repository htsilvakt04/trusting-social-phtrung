import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';
import IDs from './IDs';
import byId, * as fromById from './byId';
import currentPaginationIndex from './currentPaginationIndex';


export default combineReducers({
    loadingBar: loadingBarReducer,
    IDs,
    byId,
    currentPaginationIndex,
});

export const getAllArticles = (state) =>
    fromById.getAll(state.byId)