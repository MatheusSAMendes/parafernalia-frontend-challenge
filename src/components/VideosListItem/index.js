import React from 'react';

import { VideoItem, VideoInformations, VideoDescription, VideoThumbnail, VideoTitle } from './index.styled';

const VideosListItem = ({ video, onVideoClick }) => {
  const handleVideoClick = (event) => {
    onVideoClick(video);
    event.preventDefault();
  };
  return (
    <VideoItem onClick={handleVideoClick}>
      <VideoThumbnail src={video.snippet.thumbnails.medium.url} alt="thumb" />
      <VideoInformations>
        <VideoTitle href="#" onClick={handleVideoClick}>{video.snippet.title}</VideoTitle>
        <VideoDescription href="#" onClick={handleVideoClick}>{video.snippet.description}</VideoDescription>
      </VideoInformations>
    </VideoItem>
  );
};

export default VideosListItem;