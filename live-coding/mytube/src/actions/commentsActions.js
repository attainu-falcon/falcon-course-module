export function fetchingComments() {
    console.log('action: FETCHING_COMMENTS');
    return {
        type: 'FETCHING_COMMENTS'
    };
}

export function retrievedComments(result) {
    console.log('action: RETRIEVED_COMMENTS');
    return {
        type: 'RETRIEVED_COMMENTS',
        commentsThread: result.items
    };
}