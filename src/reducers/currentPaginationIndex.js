const currentPaginationIndex = (state = 1, action) => {
    switch (action.type) {
        case 'GET_INIT_DATA':
            return 1;
        case 'GET_NEXT_PAGE_DATA':
            return state + 1;
        case 'GET_PREV_PAGE_DATA':
            if (state > 1) {
                return state - 1;
            }
            return state;
        default:
            return state;
    }
};

export default currentPaginationIndex;

export const getCurrentIndex = (state) => state;
