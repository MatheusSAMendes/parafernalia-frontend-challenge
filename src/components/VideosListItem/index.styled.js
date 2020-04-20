import styled from 'styled-components';

export const VideoItem = styled.div`
  display: flex;
  height: 120px;
  margin: 10px;
  max-width: 600px;
  background-color: #1d1d1d;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
  justify-content: space-between;
`;

export const VideoTitle = styled.a`
  margin-bottom: 15px;
  margin-top: auto;
  width: 250px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
  color: #f9f9f9;
`;

export const VideoDescription = styled.a`
  color: #3F3F3F;
  font-size: small;
  font-strecth: condensed;
`;

export const VideoThumbnail = styled.img`
  height: 120px;
  border-radius: 10px;
`;

export const VideoInformations = styled.div`
  padding: 10px;
  flex: 1;
`;