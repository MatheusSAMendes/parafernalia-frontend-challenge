import styled from 'styled-components';

export const Content = styled.div`
  display: block;
  height: 100vh;
  background-color: #121212;
  font-family: 'Roboto', sans-serif;
  font-display: block;
  color: #f9f9f9;
`;
export const Container = styled.div`
  display: flex;
  height: 80vh;
`;

export const LeftSide = styled.div`
  display: flex;
  //flex: 1;
  width: 50%;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //flex: 1;
  width: 50%;
`;