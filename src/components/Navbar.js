import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext.js";

export default function Navbar() {
  const [tab, setTab] = useState("home");
  const navigate = useNavigate();

  const { setShowLogin } = useContext(StoreContext);

  function downloadApp() {
    setTab("mobile-app");
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("DownloadApp");
      if (element) element.scrollIntoView({ behavior: "smooth" });
      else console.log("Element not found");
    }, 100);
  }

  function viewMenu() {
    setTab("menu");
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("ExploreMenu");
      if (element) element.scrollIntoView({ behavior: "smooth" });
      else console.log("Element not found");
    }, 100);
  }

  return (
    <div className="flex items-center justify-between p-6 mb-6 lg:flex-row flex-col">
      <Link to={"/"} className="text-4xl font-mono text-orange-600 font-medium">
        QuickBite
      </Link>
      <div className="text-2xl font-mono xl:flex-row flex flex-col items-center">
        <Link
          to={"/"}
          onClick={() => setTab("home")}
          style={tab === "home" ? { textDecoration: "underline" } : {}}
          className="mx-4 cursor-pointer"
        >
          home
        </Link>
        <span
          onClick={() => viewMenu()}
          style={tab === "menu" ? { textDecoration: "underline" } : {}}
          className="mx-4 cursor-pointer"
        >
          menu
        </span>
        <span
          onClick={() => downloadApp()}
          style={tab === "mobile-app" ? { textDecoration: "underline" } : {}}
          className="mx-4 cursor-pointer"
        >
          mobile-app
        </span>
        <a
          href="#Footer"
          onClick={() => setTab("contact-us")}
          style={tab === "contact-us" ? { textDecoration: "underline" } : {}}
          className="mx-4 cursor-pointer"
        >
          contact-us
        </a>
      </div>
      <div className="flex items-center w-48  justify-between">
        <img src={assets.search_icon} alt="" />
        <Link to={"/cart"}>
          <img src={assets.basket_icon} className="cursor-pointer" alt="" />
        </Link>
        <button
          className="px-2 py-1 text-xl border-solid border-2 border-orange-600 rounded-xl"
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
