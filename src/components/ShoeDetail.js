import React from 'react';
import { useParams } from 'react-router-dom';
import { useShoeContext } from '../context/ShoeContext';
import styled from 'styled-components';

const ShoeDetailContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

function ShoeDetail() {
  const { id } = useParams();
  const { shoes, addToCart } = useShoeContext();
  const shoe = shoes.find(shoe => shoe.id === parseInt(id));

  if (!shoe) return <p>Shoe not found</p>;

  return (
    <ShoeDetailContainer>
      <h1>{shoe.name}</h1>
      <p>{shoe.description}</p>
      <p>{shoe.price}</p>
      <button onClick={() => addToCart(shoe)}>Add to Cart</button>
    </ShoeDetailContainer>
  );
}

export default ShoeDetail;