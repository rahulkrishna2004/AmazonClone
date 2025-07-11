import React from "react";
import "./LoadingSpinner.css"; // Import custom CSS

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-100">
      <div className="spinner relative w-16 h-16 mb-4"></div>
      <p className="text-xl font-semibold text-yellow-600 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingSpinner;
