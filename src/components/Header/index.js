import React from 'react';
import styled from 'styled-components';
import { ContainerFooter } from '../Footer';

const ContainerHeader = styled(ContainerFooter)`
background: yellow;
color: black;
`

export const Header = () => {
  return (
    <ContainerHeader>
      <h2>Header</h2>
    </ContainerHeader>
  )
}
