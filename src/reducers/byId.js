const byId = (state = {}, action) => {
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
