import styled from 'styled-components';

export const VideoItem = styled.div`
  display: flex;
  padding: 5px;
  margin: 10px;
  background-color: #1d1d1d;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
  justify-content: space between;
`;

export const VideoTitle = styled.h4`
  margin-top: 0px;
`;

export const VideoDescription = styled.p`
  color: #3F3F3F;
`;

export const VideoThumbnail = styled.img`
  height: 90px;
  margin: 5px;
`;

export const VideoInformations = styled.div`
  padding: 10px;
`;