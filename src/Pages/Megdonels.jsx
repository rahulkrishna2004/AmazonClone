import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext"; // ✅ Adjust this path as needed

const Megdonels = () => {
  const { theme } = useContext(ThemeContext); // "light" or "dark"

  return (
    <div
      className={`w-full flex items-center justify-center py-6 px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f3f3f3]"
      }`}
    >
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/46422462183493.5a878fb7afef8.png"
        alt="Prime Day Banner"
        className={`w-full max-w-[1200px] rounded-md border transition-all duration-300 shadow-md ${
          theme === "dark"
            ? "border-gray-700 shadow-yellow-600/10"
            : "border-gray-300 shadow-gray-400/20"
        }`}
      />
    </div>
  );
};

export default Megdonels;
