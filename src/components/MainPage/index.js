import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchAction } from './actions';
import { Container, Loading } from '../styledComponents';


class MainPage extends Component {
  componentDidMount() {
    this.props.setPhotos();
  }
  render() {
    return (
      <Container mainContainer>
        {this.props.isLoading&&<Loading><p><i class="fas fa-american-sign-language-interpreting"></i></p></Loading>}
        <h2>MainPage</h2>
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
  setPhotos: usersFetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);