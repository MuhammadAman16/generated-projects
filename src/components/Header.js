import React from 'react';
import { Link } from 'react-router-dom';
import { useShoeContext } from '../context/ShoeContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

function Header() {
  const { cart } = useShoeContext();

  return (
    <HeaderContainer>
      <h1>Shoe Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;