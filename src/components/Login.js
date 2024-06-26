import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const Login = ({ setRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setShowLogin } = useContext(StoreContext);

  return (
    <div
      className="flex flex-col md:w-96 w-80 h-fit p-8 shadow bg-white"
      id="Login"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-4xl font-mono text-orange-600 font-medium">
          QuickBite
        </h3>
        <h3
          className="text-3xl font-mono cursor-pointer"
          onClick={() => setShowLogin(false)}
        >
          X
        </h3>
      </div>

      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Registered Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="py-2 px-4 my-2 border border-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="py-2 px-4 my-2 border border-black"
        />
        <button className="text-2xl text-white bg-orange-600 py-2 my-2">
          Login
        </button>
      </form>
      <div className="flex mx-auto gap-2">
        <span>Don't have an account yet ?</span>
        <span
          onClick={() => setRegister(true)}
          className=" text-orange-600 font-medium cursor-pointer"
        >
          Register
        </span>
      </div>
    </div>
  );
};

export default Login;
