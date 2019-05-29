import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {




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

export default connect(mapStateToProps)(MainPage);