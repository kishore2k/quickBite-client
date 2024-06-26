import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

export default function StoreContextProvider(props) {
  const [cartItems, setCartItems] = useState({});
  const [showLogin, setShowLogin] = useState(false);

  function addToCart(itemId) {
    if (!cartItems[itemId]) {
      setCartItems((prev) => {
        return { ...prev, [itemId]: 1 };
      });
    } else {
      setCartItems((prev) => {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      });
    }
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    showLogin,
    setShowLogin,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}
