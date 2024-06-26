import React, { useState } from "react";
import Login from "./Login.js";
import Register from "./Register.js";

const Auth = () => {
  const [register, setRegister] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
      id="Auth"
    >
      {register ? (
        <Register setRegister={setRegister} />
      ) : (
        <Login setRegister={setRegister} />
      )}
    </div>
  );
};

export default Auth;
