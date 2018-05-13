const IDs = (state = [], action) => {
    switch (action.type) {
        case 'GET_INIT_DATA':
            return [...state, ...action.response.result];
        case 'GET_NEXT_PAGE_DATA':
        case 'GET_PREV_PAGE_DATA':
            return [...action.response.result];
        default:
            return state;
    }
};

export default IDs;

export const getAll = state => state;
