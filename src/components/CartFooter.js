import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const CartFooter = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [landMark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");

  const { getCartTotal } = useContext(StoreContext);

  const cartTotal = getCartTotal();

  const [address, setAddress] = useState(false);
  const navigate = useNavigate();

  function handleAddress(ev) {
    ev.preventDefault();
    setAddress(true);
  }

  function checkout(ev) {
    ev.preventDefault();
    if (address) {
      alert("Successfully Checked Out");
      return navigate("/");
    } else {
      alert("Enter delivery address before checkout.");
    }
  }

  return (
    <div
      id="CartFooter"
      className="w-full flex flex-col-reverse lg:flex-row lg:gap-0 gap-6 items-center my-2 p-4 justify-between"
    >
      <div className="flex flex-col lg:w-2/4 w-full md:w-90 gap-4">
        <div className="flex justify-between text-xl p-1">
          <h3>Subtotal</h3>
          <h3>$ {cartTotal}</h3>
        </div>
        <hr className="border-1 border-gray-400" />
        <div className="flex justify-between text-xl p-1">
          <h3>Delivery Fee</h3>
          <h3>$ 4</h3>
        </div>
        <hr className="border-1 border-gray-400" />
        <div className="flex justify-between text-xl font-bold p-1">
          <h3>Cart Total</h3>
          <h3>$ {cartTotal + 4}</h3>
        </div>
        <button
          className="bg-orange-500 text-white p-2 text-xl"
          onClick={checkout}
        >
          Proceed To Checkout
        </button>
      </div>
      <div className="lg:w-1/4 w-full">
        <div className="flex flex-col text-mono ">
          <input
            type="text"
            placeholder="Address Line 1"
            value={address1}
            onChange={(ev) => setAddress1(ev.target.value)}
            className="p-2 border-2 rounded-t-2xl border-stone-500"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            value={address2}
            onChange={(ev) => setAddress2(ev.target.value)}
            className="p-2 border-2 border-t-0  border-stone-500"
          />
          <input
            type="text"
            placeholder="Area Pincode"
            value={pincode}
            onChange={(ev) => setPincode(ev.target.value)}
            className="p-2 border-2 border-t-0  border-stone-500"
          />
          <input
            type="text"
            placeholder="Landmark"
            value={landMark}
            onChange={(ev) => setLandmark(ev.target.value)}
            className="p-2 border-2 border-t-0   border-stone-500"
          />
          <button
            onClick={handleAddress}
            className="bg-orange-500 text-white p-2 text-xl rounded-b-2xl"
          >
            Submit Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
