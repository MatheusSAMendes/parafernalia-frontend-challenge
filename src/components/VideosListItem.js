import React from 'react';

const VideosListItem = ({ video, handleVideoClick }) => (
  <button onClick={() => handleVideoClick(video)}>
    {video.snippet.title}
    {video.snippet.description}
    <img src="{video.snippet.thumbnails.default.url}" alt="thumb"/>
  </button>
);

export default VideosListItem;