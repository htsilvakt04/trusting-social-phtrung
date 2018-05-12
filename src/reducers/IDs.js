const IDs = (state = [], action) => {
    switch (action.type) {
        case 'GET_INIT_DATA':
            return [...state, ...action.response.result];
        default:
            return state;
    }
};

export default IDs;

export const getAll = state => state;
