import { createContext, useEffect, useState } from "react";
import { mobileAccessories } from "../data/Accessories";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  // Save to localStorage on cart change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const updated = { ...prev };
      if (updated[itemId]) {
        updated[itemId]--;
        if (updated[itemId] === 0) delete updated[itemId];
      }
      return updated;
    });
  };

  const contextValue = {
    allAccessories: mobileAccessories,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
