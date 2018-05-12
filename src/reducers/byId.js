const byId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.articles,
        };
    }
    return state;
};

export default byId;

export const getArticle = (state, id) => state[id];
export const getAll = (state) => Object.keys(state).map(id => state[id]);
