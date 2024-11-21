// CartContext.js
import React, { createContext, useState } from 'react';
// import product from "../../objects/products";

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Update the count of an existing item
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        // Add the product to the cart
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
