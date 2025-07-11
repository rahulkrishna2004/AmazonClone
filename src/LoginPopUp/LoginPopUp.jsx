import React, { useState, useContext } from "react";
import crossIcon from "../assets/X_icon.png";
import { ThemeContext } from "../Context/ThemeContext";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const { theme } = useContext(ThemeContext); 

  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
      <div
        className={`w-[95%] sm:w-[85%] md:w-[70%] lg:w-[40%] max-w-md p-6 sm:p-8 rounded-xl shadow-xl animate-fadeIn relative
        ${isDark ? "bg-[#1e1e1e] text-gray-400" : "bg-gray-400 text-black"}`}
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--text-color)",
        }}
      >
        <form className="space-y-5 border-2 border-yellow-400 p-4 rounded-md">

          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold text-yellow-500">{currState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={crossIcon}
              alt="close"
              className="w-7 h-7 cursor-pointer hover:scale-110 transition"
            />
          </div>

          <div className="space-y-3">
            {currState === "Sign Up" && (
              <input
                type="text"
                placeholder="Your name"
                required
                className={`w-full px-4 py-2 rounded-md border focus:ring-2 focus:outline-none 
                  ${isDark ? "bg-[#2c2c2c] border-yellow-500 text-white focus:ring-yellow-600" 
                  : "bg-gray-400 border-yellow-400 text-black focus:ring-yellow-400"}`}
              />
            )}
            <input
              type="email"
              placeholder="Your email"
              required
              className={`w-full px-4 py-2 rounded-md border focus:ring-2 focus:outline-none 
                ${isDark ? "bg-[#2c2c2c] border-yellow-500 text-white focus:ring-yellow-600" 
                : "bg-gray-400 border-yellow-400 text-black focus:ring-yellow-400"}`}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className={`w-full px-4 py-2 rounded-md border focus:ring-2 focus:outline-none 
                ${isDark ? "bg-[#2c2c2c] border-yellow-500 text-white focus:ring-yellow-600" 
                : "bg-gray-400 border-yellow-400 text-black focus:ring-yellow-400"}`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition"
          >
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <input type="checkbox" required className="mt-1" />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
          </div>

          <div className="text-sm text-center">
            {currState === "Login" ? (
              <p>
                New here?{" "}
                <span
                  className="text-yellow-500 font-medium cursor-pointer hover:underline"
                  onClick={() => setCurrState("Sign Up")}
                >
                  Create an account
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  className="text-yellow-500 font-medium cursor-pointer hover:underline"
                  onClick={() => setCurrState("Login")}
                >
                  Login here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopUp;
