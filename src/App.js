import React from 'react';
import Header from './components/Header';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoeDetail from './components/ShoeDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ShoeList />} />
        <Route path="/shoe/:id" element={<ShoeDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;