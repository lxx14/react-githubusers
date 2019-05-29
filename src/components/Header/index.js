import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, List, Li } from '../styledComponents';

export const Header = () => {
  return (
    <Container headerContainer>
      <List>
        <Li><NavLink exact to='/'>Task</NavLink></Li>
        <Li><NavLink to='/users'>Users</NavLink></Li>
      </List>
    </Container>
  )
}
