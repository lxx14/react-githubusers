import styled from 'styled-components';

export const Container = styled.div`
position: relative;
display: flex;
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