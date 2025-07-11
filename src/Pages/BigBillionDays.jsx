import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const BigBillionDays = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div
      className={`w-full flex items-center justify-center py-6 px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f3f3f3]"
      }`}
    >
      <img
        src="https://i.gadgets360cdn.com/large/amazon-main-banner-1200x675_1696706496874.jpg"
        alt="Big Billion Days"
        className={`w-full max-w-[1200px] rounded-md border transition-all duration-300 shadow-md ${
          theme === "dark"
            ? "border-gray-700 shadow-yellow-600/10"
            : "border-gray-300 shadow-gray-400/20"
        }`}
      />
    </div>
  );
};

export default BigBillionDays;
