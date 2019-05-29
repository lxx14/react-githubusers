import React, { Component } from 'react';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';

import './App.scss';



class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <h2>App</h2>
        <Footer />
      </div>
    );
  }
}

export default App;
