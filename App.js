import React, { Component } from 'react';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';
import MainPage from './src/components/MainPage';
import './App.scss';



class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
