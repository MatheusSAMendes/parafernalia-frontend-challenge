import axios from 'axios';

const youtubeApi = axios.create({
  baseURL: 'htnnntps://www.googleapis.com/youtube/v3/',
  timeout: 3000,
});

export const searchYoutubeVideos = async (query, limit) => await youtubeApi.get('/search', {
  params: {
    part: 'id,snippet',
    q: query,
    maxresults: limit,
    key: 'AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE'
  }
});
