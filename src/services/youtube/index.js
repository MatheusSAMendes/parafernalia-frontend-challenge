import axios from 'axios';

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  timeout: 3000,
});

export const searchYoutubeVideos = async (query, limit) => await youtubeApi.get('/search', {
  params: {
    part: 'id,snippet',
    q: query,
    type: 'video',
    maxresults: limit,
    key: 'AIzaSyDBJOgVuWWUKnFxOIamWhwJ9enkpg8t13s'
  }
});