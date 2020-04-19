import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #121212;
    font-family: 'ProximaNovaBold', 'ProximaNovaCondensed';
    font-display: block;
    color: #f9f9f9;
  }
`
export const Content = styled.div`
`;

export const Container = styled.div`
  display: flex;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-left: 5%;
  `;
  
  export const RightSide = styled.div`
  display: flex;
  padding-top: 10vh;
  justify-content: center;
  margin-right: 5%;
  width: 50%;
`;