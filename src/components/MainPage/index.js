import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchAction } from './actions';
import { Container, Loading, Hands } from '../styledComponents';
import User from './User';


class MainPage extends Component {
  componentDidMount() {
    let { setUsers } = this.props;
    setUsers();
  }
  render() {
    let { users, isLoading } = this.props;
    const renderUsers = users.map(item =>
      <User key={item.id}
        avatar_url={item.avatar_url}
        name={item.name}
        html_url={item.html_url}
        bio={item.bio}
        location={item.location}
      />
    )
    return (
      <Container mainContainer>
        {isLoading && <Loading><p><Hands className="fas fa-american-sign-language-interpreting"></Hands></p></Loading>}
        {renderUsers}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersContainer.users,
    isLoading: state.usersContainer.isLoading
  }
}

const mapDispatchToProps = {
  setUsers: usersFetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);