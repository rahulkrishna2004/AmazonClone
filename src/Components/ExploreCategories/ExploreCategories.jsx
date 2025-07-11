import React, { useContext } from "react";
import categories from "../../data/Catogory";
import { ThemeContext } from "../../Context/ThemeContext";

const ExploreCategories = ({ category, setCategory }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`
        w-full sm:w-60 p-2 sm:p-4 rounded-xl shadow-md border transition
        max-h-[12rem] sm:max-h-[85vh]
        overflow-x-auto sm:overflow-x-visible
        overflow-y-hidden sm:overflow-y-auto
        flex sm:block gap-2 sm:gap-0
        ${
          theme === "dark"
            ? "bg-[#23232a] border-gray-800 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }
      `}
    >
      <div className="w-full">
        <h1
          className={`text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center
          ${theme === "dark" ? "text-yellow-400" : "text-gray-800"}`}
        >
          Explore <span className="text-yellow-500">Categories</span>
        </h1>

        <div className="flex sm:block gap-2 sm:gap-0 pb-2 sm:pb-0">
          <div
            onClick={() => setCategory("All")}
            className={`min-w-[110px] mt-10 sm:min-w-0 cursor-pointer border rounded-lg p-2 sm:p-3 text-center font-medium transition duration-300 ease-in-out hover:shadow-md ${
              category === "All"
                ? "border-yellow-500 text-yellow-600 shadow-md bg-yellow-50 dark:bg-yellow-900/20"
                : theme === "dark"
                ? "border-gray-700 text-gray-200"
                : "border-gray-200 text-gray-700"
            }`}
          >
            All Categories
          </div>

          {categories.map((item, index) => {
            const isActive = category === item.name;

            return (
              <div
                key={index}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.name ? "All" : item.name
                  )
                }
                className={`min-w-[110px] h-[100px] sm:min-w-0 cursor-pointer border rounded-lg p-2 sm:p-3 flex items-center gap-2 sm:space-x-3 space-x-2 sm:flex-row flex-col transition duration-300 ease-in-out hover:shadow-md ${
                  isActive
                    ? "border-yellow-500 shadow-md bg-yellow-50 dark:bg-yellow-900/20"
                    : theme === "dark"
                    ? "border-gray-700"
                    : "border-gray-200"
                }`}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 border shadow-sm
    ${
      isActive
        ? "border-yellow-500"
        : theme === "dark"
        ? "border-gray-700"
        : "border-gray-200"
    }`}
                >
                  <img
                    src={item.image || "/fallback.png"}
                    alt={item.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 object-cover rounded-full"
                  />
                </div>

                <h2
                  className={`text-xs sm:text-sm font-medium ${
                    isActive
                      ? "text-yellow-600"
                      : theme === "dark"
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
