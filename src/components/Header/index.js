import React from 'react';
import { Container, List, Link, Li } from '../styledComponents';

export const Header = () => {
  return (
    <Container headerContainer>
      <List>
        <Li><Link headerLink href='#'>Task</Link></Li>
        <Li><Link headerLink href='#'>Users</Link></Li>
      </List>
    </Container>
  )
}
