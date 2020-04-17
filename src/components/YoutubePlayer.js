import React from 'react';

export const YoutubePlayer = ({ videoId }) => {

  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      width="560" 
      height="315" 
      src={url} 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  );
}