import React, { Component } from 'react';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';
import MainPage from './src/components/MainPage';
import Router from './/src/components/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Router />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
