import React, { useState, useRef } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE_URI } from "../utils/constants";
import { Validate } from "../utils/validation";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const errorMessage = Validate(email, password);
    setErrorMessage(errorMessage);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={BACKGROUND_IMAGE_URI} alt="Netflix Background Image" />
      </div>
      <form className="bg-black p-12 absolute w-3/12 mx-auto my-36 right-0 left-0 rounded-lg text-white bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded bg-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded bg-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full rounded bg-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500 mt-2">{errorMessage}</p>
        <button
          onClick={submitForm}
          className="bg-red-500 cursor-pointer rounded p-4 w-full my-4"
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="mt-2">
          {isSignForm
            ? "Didn't have an account? Sign Up"
            : "Already have an account? Log In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
