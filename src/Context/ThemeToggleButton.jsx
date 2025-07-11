import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <label className="relative inline-block w-10 h-6 sm:w-14 sm:h-8">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="peer sr-only"
      />
      <div className="w-full h-full bg-gray-500 peer-checked:bg-black rounded-full transition-colors duration-300" />
      <div className="absolute top-[2px] left-[2px] peer-checked:translate-x-4 sm:peer-checked:translate-x-6 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full transition-transform duration-300 flex items-center justify-center text-xs sm:text-sm">
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </label>
  );
};

export default ThemeToggleButton;
