let logger = (store) => (next) => (action) => {
    if (process.env.NODE_ENV === 'production') {
        return null;
    }
    console.log('look', process.env.NODE_ENV !== 'production');
    console.group(action.type);
    console.log('The action: ', action);
    const returnVal =  next(action);
    console.log('The new state: ', store.getState());
    console.groupEnd();
    return returnVal;
};

export default logger;