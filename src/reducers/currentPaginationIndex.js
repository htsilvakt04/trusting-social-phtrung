const currentPaginationIndex = (state = 1, action) => {
    if (state === 1 && action.type === 'GET_PREV_PAGE_DATA') {
        return state;
    }
    switch (action.type) {
        case 'GET_NEXT_PAGE_DATA':
            return state + 1;
        case 'GET_PREV_PAGE_DATA':
            return state - 1;
        default:
            return state;
    }
};

export default currentPaginationIndex;

export const getCurrentIndex = (state) => state;
