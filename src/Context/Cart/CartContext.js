import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  function getProductsFromLocalStorage() {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
  }

  const [cart, setCart] = useState(getProductsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
