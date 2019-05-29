import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchAction } from './actions';
import { Container, Loading } from '../styledComponents';


class MainPage extends Component {
  componentDidMount() {
    let { setUsers } = this.props;
    setUsers();
  }
  render() {
    let { users } = this.props;
    console.log(users);
    const renderUsers = users.map(item => <div key={item.id}>
      <img src={item.avatar_url} />
      <p>{item.name}</p>
      <a href={item.html_url} target='blank'>{item.login}</a>
      {item.bio ? <p>{item.bio}</p>:<p>there could be his bio... But it's ampty ;)</p>}
      {item.location ? <p>{item.location}</p> : <p>From no one knows :)</p>}
    </div>)
    return (
      <Container mainContainer>
        {this.props.isLoading && <Loading><p><i className="fas fa-american-sign-language-interpreting"></i></p></Loading>}
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