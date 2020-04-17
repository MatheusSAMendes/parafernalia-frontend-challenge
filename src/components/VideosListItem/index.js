import React from 'react';

import { VideoItem, VideoInformations, VideoDescription, VideoThumbnail, VideoTitle } from './index.styled';

const VideosListItem = ({ video, handleVideoClick }) => (
  <VideoItem onClick={() => handleVideoClick(video)}>
    <VideoThumbnail src={video.snippet.thumbnails.default.url} alt="thumb" />
    <VideoInformations>
      <VideoTitle>{video.snippet.title}</VideoTitle>
      <VideoDescription>{video.snippet.description}</VideoDescription>
    </VideoInformations>
  </VideoItem>
);

export default VideosListItem;