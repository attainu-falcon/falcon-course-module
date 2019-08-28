function commentsReducer(state = { commentsThread: [] }, action) {
    console.log('commentsReducer()');

    switch (action.type) {
        case 'FETCHING_COMMENTS':
            return Object.assign({}, state, { commentsThread: null });

        case 'RETRIEVED_COMMENTS':
            return Object.assign({}, state, { commentsThread: action.commentsThread });

        default:
            return state;
    }
}

export default commentsReducer;