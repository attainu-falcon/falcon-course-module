import CONFIG from './config.js';

export function fetchVideos(query) {
    let url;
    if(query === null)
        url = `https://www.googleapis.com/youtube/v3/videos?key=${CONFIG.API_KEY}&chart=mostPopular&part=snippet&type=video&maxResults=30`;
    else
        url = `https://www.googleapis.com/youtube/v3/search?key=${CONFIG.API_KEY}&q=${query}&part=snippet&type=video&maxResults=30`;

    console.log(url);
    return fetch(url)
        .then(function(data) {
            return data.json();
        });
}

export function fetchVideoDetails(videoId) {
    let url = `https://www.googleapis.com/youtube/v3/videos?key=${CONFIG.API_KEY}&id=${videoId}&part=snippet,contentDetails,statistics`;

    console.log(url);
    return fetch(url, {credentials: 'include'})
        .then(function (data) {
            return data.json();
        });
}

export function fetchVideoComments(videoId) {
    let url = `https://www.googleapis.com/youtube/v3/commentThreads?key=${CONFIG.API_KEY}&videoId=${videoId}&part=snippet,replies`;

    console.log(url);
    return fetch(url)
        .then(function (data) {
            return data.json();
        });
}