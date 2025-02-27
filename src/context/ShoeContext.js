import React, { createContext, useContext, useState } from 'react';

const ShoeContext = createContext();

export function ShoeProvider({ children }) {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  return (
    <ShoeContext.Provider value={{ shoes, setShoes, cart, addToCart }}>
      {children}
    </ShoeContext.Provider>
  );
}

export function useShoeContext() {
  return useContext(ShoeContext);
}