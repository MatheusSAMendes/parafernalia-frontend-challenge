import React from 'react';

import VideosListItem from './VideosListItem';

const VideosList = ({ videos, handleVideoClick }) => {
  return (
    <>
      {videos.map(video => (
        <VideosListItem
          key={video.id.videoId}
          video={video}
          handleVideoClick={handleVideoClick}
        />
      ))}
    </>
  );
}

export default VideosList;
