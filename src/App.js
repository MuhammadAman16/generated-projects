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
      <Switch>
        <Route path="/" exact component={ShoeList} />
        <Route path="/shoe/:id" component={ShoeDetail} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;