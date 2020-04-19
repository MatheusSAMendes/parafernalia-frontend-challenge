import React from 'react';

import { VideoItem, VideoInformations, VideoDescription, VideoThumbnail, VideoTitle } from './index.styled';

const VideosListItem = ({ video, onVideoClick }) => {
  const handleVideoClick = () => onVideoClick(video);

  return (
    <VideoItem onClick={handleVideoClick}>
      <VideoThumbnail src={video.snippet.thumbnails.medium.url} alt="thumb" />
      <VideoInformations>
        <VideoTitle>{video.snippet.title}</VideoTitle>
        <VideoDescription>{video.snippet.description}</VideoDescription>
      </VideoInformations>
    </VideoItem>
  );
};

export default VideosListItem;