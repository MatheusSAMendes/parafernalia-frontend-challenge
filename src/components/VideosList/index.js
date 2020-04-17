import React from 'react';

import { Content } from './index.styled';
import VideosListItem from '../VideosListItem/index';

const VideosList = ({ videos, handleVideoClick }) => {
  return (
    <Content>
      {videos.map(video => (
        <VideosListItem
          key={video.id.videoId}
          video={video}
          handleVideoClick={handleVideoClick}
        />
      ))}
    </Content>
  );
}

export default VideosList;
