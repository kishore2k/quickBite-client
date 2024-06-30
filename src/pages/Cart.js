import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import CartFooter from "../components/CartFooter";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div
      id="Cart"
      className="flex flex-col p-3 gap-6 w-full items-center font-mono"
    >
      <h1 className="text-4xl font-sans font-light">Cart</h1>

      <div className="flex text-sm md:text-base lg:text-xl text-center justify-between xl:w-3/4 w-full">
        <span className="w-1/6">Items</span>
        <span className="w-1/6">Title</span>
        <span className="w-1/6">Price</span>
        <span className="w-1/6">Quantity</span>
        <span className="w-1/6">Total</span>
        <span className="w-1/6">Remove</span>
      </div>

      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={index}
              className="flex items-center text-sm md:text-base lg:text-xl text-center justify-between xl:w-3/4 w-full"
            >
              <span className="w-1/6">
                <img className="w-16 mx-auto" src={item.image} alt="" />
              </span>
              <span className="w-1/6">{item.name}</span>
              <span className="w-1/6">$ {item.price}</span>
              <span className="w-1/6">{cartItems[item._id]}</span>
              <span className="w-1/6">
                $ {item.price * cartItems[item._id]}
              </span>
              <span
                className="cursor-pointer text-red-500 w-1/6"
                onClick={() => {
                  removeFromCart(item._id);
                }}
              >
                x
              </span>
            </div>
          );
        } else {
          return <></>;
        }
      })}
      <CartFooter />
    </div>
  );
};

export default Cart;
