import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item) => {
    setCartItem((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const removeItems = (id) => {
    setCartItem((prev) => prev.filter((removed) => removed.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeItems }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
