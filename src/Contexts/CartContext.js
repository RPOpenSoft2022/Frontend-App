import React, { useState, createContext } from "react";
import { cartData } from "./cart";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState(cartData);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
