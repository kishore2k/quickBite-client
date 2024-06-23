import React, { useState } from "react";
import { assets } from "../assets/assets.js";

export default function Navbar() {
  const [tab, setTab] = useState("home");

  return (
    <div className="flex items-center justify-between py-6">
      <h3 className="text-4xl font-mono text-orange-600 font-medium">
        QuickBite
      </h3>
      <div className="text-2xl text-gray-600 font-mono">
        <span
          onClick={() => setTab("home")}
          style={tab === "home" ? { textDecoration: "underline" } : {}}
          className="mx-4 cursor-pointer"
        >
          home
        </span>
        <span
          onClick={() => setTab("menu")}
          style={tab === "menu" ? { textDecoration: "underline" } : {}}
          className="mx-4 cursor-pointer"
        >
          menu
        </span>
        <span
          onClick={() => setTab("mobile-app")}
          style={tab === "mobile-app" ? { textDecoration: "underline" } : {}}
          className="mx-4 cursor-pointer"
        >
          mobile-app
        </span>
        <span
          onClick={() => setTab("contact-us")}
          style={tab === "contact-us" ? { textDecoration: "underline" } : {}}
          className="mx-4 cursor-pointer"
        >
          contact-us
        </span>
      </div>
      <div className="flex items-center w-48  justify-between">
        <img src={assets.search_icon} alt="" />
        <img src={assets.basket_icon} alt="" />
        <button className="px-2 py-1 text-xl border-solid border-2 border-orange-600 rounded-xl">
          Sign In
        </button>
      </div>
    </div>
  );
}
