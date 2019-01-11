import axios from 'axios';

const accessKey = 'ab7b90693ac78426bb919a3981e14b67de4b4db887cf1472fedb47c8676f1cea';

export const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + accessKey,
    }
});

export const URL_SEARCH_PHOTOS = '/search/photos';