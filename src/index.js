import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ShoeProvider } from './context/ShoeContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ShoeProvider>
      <App />
    </ShoeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);