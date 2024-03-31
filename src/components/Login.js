import React, { useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE_URI } from "../utils/constants";
import { Validate } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { USER_ICON_URI } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
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
    //After checking the validation do the sign up and sign in
    if (errorMessage) return;
    //Sign up and sign in the user based on the state variable
    if (!isSignForm) {
      //Create the user
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: USER_ICON_URI
          })
            .then(() => {
              
            })
            .catch((error) => {
              setErrorMessage(error)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
        });
    } else {
      //sign in the user
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
        });
    }
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
