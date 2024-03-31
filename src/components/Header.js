import React from "react";
import { NETFLIX_LOGO_URI } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10">
      <img className="w-44" src={NETFLIX_LOGO_URI} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
