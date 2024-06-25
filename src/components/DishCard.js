import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

export default function DishCard(props) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="md:w-96 w-80 p-4 bg-gray-50 m-3 rounded-3xl shadow">
      <img src={props.image} alt="" className="w-96 rounded-3xl" />
      <div className="pt-2">
        <h3 className="text-2xl font-mono font-md">{props.name}</h3>
        <img src={assets.rating_starts} alt="" />
        <p className="text-md font-mono my-2">{props.description}</p>
        <div className="flex justify-between items-center">
          <h4 className="text-2xl">${props.price}</h4>
          {!cartItems[props.id] ? (
            <img
              src={assets.add_icon_white}
              className="cursor-pointer"
              onClick={() => {
                addToCart(props.id);
              }}
              alt=""
            />
          ) : (
            <div className="flex items-center bg-white p-2 rounded-3xl">
              <img
                src={assets.remove_icon_red}
                onClick={() => {
                  removeFromCart(props.id);
                }}
                alt=""
                className="mx-1 cursor-pointer"
              />
              {cartItems[props.id]}
              <img
                src={assets.add_icon_green}
                onClick={() => {
                  addToCart(props.id);
                }}
                alt=""
                className="mx-1 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
