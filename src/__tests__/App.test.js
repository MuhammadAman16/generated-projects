import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { ShoeProvider } from '../context/ShoeContext';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Shoe Store header', () => {
  render(
    <Router>
      <ShoeProvider>
        <App />
      </ShoeProvider>
    </Router>
  );
  const linkElement = screen.getByText(/Shoe Store/i);
  expect(linkElement).toBeInTheDocument();
});