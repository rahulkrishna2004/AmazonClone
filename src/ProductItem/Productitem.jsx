import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { ThemeContext } from "../Context/ThemeContext";

const Productitem = ({ id, name, image, price, description }) => {
  const { addToCart } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    setIsAdding(true);
    addToCart(String(id));
    setTimeout(() => {
      setIsAdding(false);
    }, 400);
  };

  return (
    <Link
      to={`/product/${id}`}
      className={`rounded-2xl shadow-lg border transition duration-300 flex flex-col items-center justify-between
        ${theme === "dark"
          ? "bg-[#18181b] border-gray-700 hover:shadow-indigo-900"
          : "bg-white border-gray-100 hover:shadow-yellow-200"}
        hover:-translate-y-1 hover:scale-[1.02] p-3 sm:p-5 min-h-[250px] sm:min-h-[400px]`}
    >
      <div
        className={`w-full flex items-center justify-center rounded-xl overflow-hidden mb-2 sm:mb-4 ${theme === "dark" ? "bg-[#23232a]" : "bg-gray-50"}`}
      >
        <img
          src={image}
          alt={name}
          className="w-28 h-28 sm:w-36 sm:h-36 object-contain transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      </div>

      <div className="flex-1 w-full flex flex-col items-center text-center">
        <h2
          className={`text-base sm:text-lg font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          {name}
        </h2>
        <p
          className={`text-xs sm:text-sm mb-2 line-clamp-2 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
        >
          {description}
        </p>
        <p
          className={`text-lg sm:text-xl font-bold mb-2 ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`}
        >
          ₹{price}
        </p>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full mt-2 px-2 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-base font-semibold rounded-lg shadow transition
          ${isAdding
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-500 text-black"}
        `}
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
    </Link>
  );
};

export default Productitem;
