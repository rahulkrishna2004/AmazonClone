import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-gray-800 dark:text-gray-100 px-4">
      <div className="text-[100px] font-bold animate-bounce"></div>

      <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 text-red-600 drop-shadow-md">
        404 - Page Not Found
      </h1>

      <p className="text-lg sm:text-xl mt-4 text-gray-600 dark:text-gray-400 text-center max-w-lg">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-md transition duration-300">
           Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
