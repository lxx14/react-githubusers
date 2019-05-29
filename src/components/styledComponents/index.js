import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
background-color: ${props => props.footerContainer ? "black" : props.headerContainer ? "yellow" : "white" };
padding: 20px 0;
justify-content: center;
color: ${props => props.footerContainer ? "white" : "black" };
`;