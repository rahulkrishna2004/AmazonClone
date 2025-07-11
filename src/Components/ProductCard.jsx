import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { ThemeContext } from "../Context/ThemeContext";

const ProductCard = ({ product }) => {
  const { id, name, image, price, description } = product;
  const { addToCart } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
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
      className={`rounded-2xl border shadow-md transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:shadow-lg cursor-pointer p-4 sm:p-6 flex flex-col items-center
        ${isDark
          ? "bg-[#1e1e1e] text-white border-gray-700 hover:shadow-yellow-500"
          : "bg-white text-gray-900 border-gray-200 hover:shadow-yellow-200"
        }`}
    >
      <div
        className={`w-full h-32 sm:h-40 flex items-center justify-center rounded-lg mb-4 overflow-hidden
          ${isDark ? "bg-[#2a2a2a]" : "bg-gray-50"}`}
      >
        <img
          src={image}
          alt={name}
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      </div>

      <div className="w-full text-center">
        <h3 className="font-semibold text-sm sm:text-lg mb-1 truncate">{name}</h3>
        <p className={`text-xs sm:text-sm line-clamp-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {description}
        </p>
        <p className="text-yellow-500 font-bold text-sm sm:text-base mt-3">
          ₹{price.toLocaleString()}
        </p>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full mt-3 px-3 py-2 text-sm sm:text-base font-semibold rounded-md shadow
          transition duration-200
          ${isAdding
            ? "bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-500 text-black"
          }`}
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
    </Link>
  );
};

export default ProductCard;
