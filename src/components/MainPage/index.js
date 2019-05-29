import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchAction } from './actions';

class MainPage extends Component {
  componentDidMount() {
    this.props.setPhotos();
  }
  render() {
    return (
      <div>
        <h2>MainPage</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersContainer.users
  }
}

const mapDispatchToProps = {
  setPhotos: usersFetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);