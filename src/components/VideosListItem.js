import React from 'react';

const VideosListItem = ({ video, handleVideoClick }) => (
  <div onClick={() => handleVideoClick(video)}>
    <p>
    {video.snippet.title}
    </p>
    <p>
    {video.snippet.description}
    </p>
    <img src={video.snippet.thumbnails.default.url} alt="thumb"/>
  </div>
);

export default VideosListItem;