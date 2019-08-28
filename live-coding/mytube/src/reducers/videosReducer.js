function videosReducer(state = { videosList: [] }, action) {
    console.log('videosReducer()');

    switch (action.type) {
        case 'CLEAR_VIDEOS':
            return Object.assign({}, state, { videosList: [] });

        case 'FETCHING_VIDEOS':
            return Object.assign({}, state, { videosList: null });

        case 'RETRIEVED_VIDEOS':
            return Object.assign({}, state, { videosList: action.videosList });

        default:
            return state;
    }
}

export default videosReducer;