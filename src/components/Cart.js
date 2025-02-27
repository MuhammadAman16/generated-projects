import React from 'react';
import { useShoeContext } from '../context/ShoeContext';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;

function Cart() {
  const { cart } = useShoeContext();

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
}

export default Cart;