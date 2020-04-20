import React from 'react';

import { Content, SectionTitle } from './index.styled';
import VideosListItem from '../VideosListItem';

const VideosList = ({ videos, onVideoClick }) => {
  return (
    <Content>
      <SectionTitle>Results</SectionTitle>
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
