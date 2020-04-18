import React from 'react';

import { Content } from './index.styled';
import VideosListItem from '../VideosListItem/index';

const VideosList = ({ videos, onVideoClick }) => {
  return (
    <Content>
      {videos.map(video => (
        <VideosListItem
          key={video.id.videoId}
          video={video}
          onVideoClick={onVideoClick}
        />
      ))}
    </Content>
  );
}

export default VideosList;
