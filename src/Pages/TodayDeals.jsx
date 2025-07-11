import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const TodayDeals = () => {
  const { theme } = useContext(ThemeContext);

  const images = [
    "https://www.androidauthority.com/wp-content/uploads/2022/07/OnePlus-10T-launch-poster.jpg",
    "https://cdn.mos.cms.futurecdn.net/PsRiGnydUcxUytRU4EmJhS-1920-80.jpg",
    "https://i.pinimg.com/originals/b7/33/b7/b733b731ca0479d8391442dc75b23b67.png",
    "https://www.mobiledokan.co/wp-content/uploads/2020/01/Samsung-Galaxy-Z-Phones-Promo-Poster.jpg",
  ];

  return (
    <>
      {images.map((img, index) => (
        <div
          key={index}
          className={`w-full flex items-center justify-center py-6 px-4 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-900" : "bg-[#f3f3f3]"
          }`}
        >
          <img
            src={img}
            alt={`Deal ${index + 1}`}
            className={`w-full max-w-[1200px] rounded-md border shadow-md transition-all duration-300 ${
              theme === "dark"
                ? "border-gray-700 shadow-yellow-600/10"
                : "border-gray-300 shadow-gray-400/20"
            }`}
          />
        </div>
      ))}
    </>
  );
};

export default TodayDeals;
