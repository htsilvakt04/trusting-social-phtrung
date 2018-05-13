export const isAcceptedAction = (state, action) => {
    const { type } = action;
    const acceptedActions = ['GET_PREV_PAGE_DATA', 'GET_NEXT_PAGE_DATA', 'GET_INIT_DATA'];

    return acceptedActions.includes(type);
}
const byId = (state = {}, action) => {

    if (!isAcceptedAction(state, action)) {
        return state;
    }

    if (action.response) {
        return {
            ...action.response.entities.articles,
        };
    }

    return state;
};

export default byId;

export const getArticleById = (state, id) => state[id];
export const getAll = (state) => Object.keys(state).map(id => state[id]);
