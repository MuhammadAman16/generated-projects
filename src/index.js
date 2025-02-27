import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ShoeProvider } from './context/ShoeContext';
import './index.css';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
  <React.StrictMode>
root.render(
  <React.StrictMode>
    <ShoeProvider>
      <App />
    </ShoeProvider>
  </React.StrictMode>
);