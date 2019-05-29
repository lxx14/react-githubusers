import React from 'react';
import styled from 'styled-components';

export const ContainerFooter = styled.div`
background: black;
padding: 20px 0;
text-align: center;
color: white;
`

export const Footer = () => {
  return (
    <ContainerFooter>
      <h2>Footer</h2>
    </ContainerFooter>
  )
}
