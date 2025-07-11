import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const PrimeDayBanner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "bg-gray-900 w-full" : "bg-[#f3f3f3] w-full"}>
      <div className="bg-[#0073e6] py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                className="text-white font-semibold px-6 text-sm md:text-base"
              >
                prime day
              </span>
            ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1
            className={`text-3xl md:text-5xl font-semibold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Grow your business this <br className="hidden md:block" />
            Prime Day
          </h1>
          <p
            className={`text-lg mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Connect with millions of customers from 18,000+ pincodes
          </p>
          <button className="bg-[#f90] text-gray-800 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#e88f00] transition">
            Start Selling
          </button>
        </div>

        <div className="mt-10 lg:mt-0 relative">
          <img
            src="https://imgs.search.brave.com/BGV8_vkOMBPFPFWbwj-cuCu6jkYGM50YNxEnrbUsNFw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0p3/M0xjNWNINGh4ZGVi/R0dEaTJzRzguanBn"
            alt="Prime Day Boxes"
            className="w-80 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default PrimeDayBanner;
