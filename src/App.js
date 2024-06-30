import { Routes, Route } from "react-router-dom";
import { StoreContext } from "./context/StoreContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import Auth from "./components/Auth.js";

export default function App() {
  const { showLogin } = useContext(StoreContext);

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="md:w-4/5 w-full mx-auto">
        {showLogin ? <Auth /> : <></>}
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
