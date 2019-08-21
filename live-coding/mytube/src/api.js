import CONFIG from './config';

export function fetchVideos(query) {
    let url = `https://www.googleapis.com/youtube/v3/search?key=${CONFIG.API_KEY}&q=${query}&part=snippet&type=video&maxResults=30`;

    return fetch(url)
        .then(function(data) {
            return data.json();
        });
}