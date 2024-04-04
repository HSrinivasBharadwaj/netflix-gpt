import React, { useEffect, useState } from "react";
import { NETFLIX_LOGO_URI } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../features/user/userSlice";
import { USER_ICON_URI } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { toggleShowGtpPage } from "../features/gpt/gptSlice";
import { changeLanguage } from "../features/config/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showUser = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptPage);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //When the user signs in or signs up this will get called
        const { email, displayName, uid, photoURL } = user;
        dispatch(addUser({ email, displayName, uid, photoURL }));
        navigate("/browse");
      } else {
        //User Signs out remove from the store
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleShowGtpPage());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-full flex justify-between items-center">
      <img className="w-44" src={NETFLIX_LOGO_URI} alt="Netflix Logo" />
      {showUser && (
        <div className="flex items-center cursor-pointer">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="telugu">Telugu</option>
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="bg-red-500 text-white p-2 rounded w-28 mr-2"
          >
            {showGptSearch ? "Home Page" : "GptSearch"}
          </button>
          <img className="w-10 mr-2" src={USER_ICON_URI} alt="User Icon" />
          <p onClick={signOutUser} className="font-bold text-white">
            (Sign Out)
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
