import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
min-height: ${props => props.mainContainer ? "300px" : "" };
background-color: ${props => props.footerContainer ? "black" : props.headerContainer ? "yellow" : "white" };
justify-content: ${props => props.mainContainer ? "space-around" : "center" };
color: ${props => props.footerContainer ? "white" : "black" };
`;

export const Loading = styled.div`
display: flex;
position: absolute;
width: 100%;
height: 100%;
padding: 30px 0;
justify-content: center;
background-color: rgba(0, 0, 0, 0.347);
`

export const rotating = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`

export const Hands = styled.i`
  font-size: 70px;
  color: white;
  text-shadow: 0 0 7px black;
  animation: ${rotating} 1s linear infinite;
`