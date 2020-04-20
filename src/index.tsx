import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import initStore from './store';
import iconLib from './iconLib';

iconLib.init();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={initStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
