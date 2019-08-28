export function clearVideos() {
    console.log('action: CLEAR_VIDEOS');
    return {
        type: 'CLEAR_VIDEOS'
    };
}

export function fetchingVideos() {
    console.log('action: FETCHING_VIDEOS');
    return {
        type: 'FETCHING_VIDEOS'
    };
}

export function retrievedVideos(result) {
    console.log('action: RETRIEVED_VIDEOS');
    return {
        type: 'RETRIEVED_VIDEOS',
        videosList: result.items
    };
}