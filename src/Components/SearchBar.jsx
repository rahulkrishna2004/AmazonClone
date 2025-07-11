import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const SearchBar = ({
  search,
  setSearch,
  category,
  setCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  categories,
}) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-md transition-all ${
        isDark ? "bg-[#1e1e1e]" : "bg-gray-100"
      }`}
    >
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`px-3 py-2 border rounded outline-none transition
          ${isDark ? "bg-[#2a2a2a] text-white border-gray-700 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"}
        `}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={`px-3 py-2 border rounded outline-none transition
          ${isDark ? "bg-[#2a2a2a] text-white border-gray-700" : "bg-white text-black border-gray-300"}
        `}
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className={`px-3 py-2 border rounded outline-none transition
          ${isDark ? "bg-[#2a2a2a] text-white border-gray-700 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"}
        `}
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className={`px-3 py-2 border rounded outline-none transition
          ${isDark ? "bg-[#2a2a2a] text-white border-gray-700 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"}
        `}
      />
    </div>
  );
};

export default SearchBar;
