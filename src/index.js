import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Alert } from './components/Alert';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Alert />
  </React.StrictMode>,
  document.getElementById('root')
);
