import { createContext, useEffect, useState } from "react";
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

  function getCartTotal() {
    let total = 0;
    for (let key in cartItems) {
      food_list.forEach((element) => {
        if (element._id === key) {
          total += element.price * cartItems[key];
        }
      });
    }
    return total;
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    showLogin,
    setShowLogin,
    getCartTotal,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}
