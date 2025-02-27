import React, { useEffect } from 'react';
import { useShoeContext } from '../context/ShoeContext';
import { fetchShoes } from '../services/api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ShoeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
`;

const ShoeCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  text-align: center;
`;

function ShoeList() {
  const { shoes, setShoes } = useShoeContext();

  useEffect(() => {
    fetchShoes().then(data => setShoes(data));
  }, [setShoes]);

  return (
    <ShoeListContainer>
      {shoes.map(shoe => (
        <ShoeCard key={shoe.id}>
          <h2>{shoe.name}</h2>
          <p>{shoe.price}</p>
          <Link to={`/shoe/${shoe.id}`}>View Details</Link>
        </ShoeCard>
      ))}
    </ShoeListContainer>
  );
}

export default ShoeList;