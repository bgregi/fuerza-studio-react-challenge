import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setupServer } from './services/mirage/server';
import './index.scss';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
