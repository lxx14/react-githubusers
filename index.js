import React from 'react';
import { render } from 'react-dom';
import App from './App';
import rootReducer from './src/system/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
