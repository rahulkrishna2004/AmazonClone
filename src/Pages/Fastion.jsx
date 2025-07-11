import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext"; // ✅ Adjust the path as needed

const Fastion = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full flex items-center justify-center py-6 px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f3f3f3]"
      }`}
    >
      <img
        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://www.designhill.com/design-blog/wp-content/uploads/2022/08/Fashion-Posters.jpg"
        alt="Fashion Poster"
        className={`w-full max-w-[1200px] rounded-md border shadow-md transition-all duration-300 ${
          theme === "dark"
            ? "border-gray-700 shadow-yellow-600/10"
            : "border-gray-300 shadow-gray-400/20"
        }`}
      />
    </div>
  );
};

export default Fastion;
