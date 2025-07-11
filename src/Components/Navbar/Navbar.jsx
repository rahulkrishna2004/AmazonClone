import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import ThemeToggleButton from "../../Context/ThemeToggleButton";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-yellow-500 text-white px-2 sm:px-6 py-7 flex items-center justify-between gap-2 shadow-md h-[64px]">
      
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 mr-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className="h-6 sm:h-8 w-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Location */}
      <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:opacity-80">
        <FaMapMarkerAlt className="text-xl text-black" />
        <div className="leading-tight text-xs">
          <p className="text-black">Deliver to</p>
          <p className="font-bold text-black">Mysore</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex w-32 xs:w-40 sm:w-64 md:w-[28rem] lg:w-[36rem] mx-2 flex-shrink">
        <input
          type="text"
          placeholder="Search the Exciting Products by Amazon"
          className="w-full px-2 py-1 bg-white text-black rounded-l-md focus:outline-none text-xs sm:text-base"
        />
        <button className="bg-zinc-500 px-2 sm:px-4 rounded-r-md hover:bg-yellow-600">
          <FaSearch className="text-black text-base sm:text-lg" />
        </button>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2 sm:gap-4 ml-2">
        
        {/* Cart */}
        <div
          className="flex items-center cursor-pointer hover:opacity-80"
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart className="text-xl text-black" />
          <span className="ml-1 font-bold text-white text-xs sm:text-sm hidden xs:inline">
            Cart
          </span>
        </div>

        {/* Sign In */}
        <div
          className="hidden lg:flex flex-col items-center text-xs cursor-pointer hover:opacity-80"
          onClick={() => setShowLogin(true)}
        >
          <div className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-md">
            👤
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="ml-1 scale-90 sm:scale-100">
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
