import React, { useContext } from "react";
import {
  FaBoxOpen,
  FaMoneyCheckAlt,
  FaLock,
  FaUser,
  FaAmazonPay,
  FaCogs,
} from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";

const helpTopics = [
  {
    icon: <FaBoxOpen className="text-3xl text-blue-600" />,
    title: "Your Orders",
    description: "Track, cancel, or return recent orders.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-3xl text-green-600" />,
    title: "Returns & Refunds",
    description: "Return items or check the refund status.",
  },
  {
    icon: <FaAmazonPay className="text-3xl text-yellow-600" />,
    title: "Amazon Pay",
    description: "View balance, UPI, gift card details.",
  },
  {
    icon: <FaUser className="text-3xl text-purple-600" />,
    title: "Manage Account",
    description: "Update login, password, or address.",
  },
  {
    icon: <FaLock className="text-3xl text-red-600" />,
    title: "Security Settings",
    description: "Enable 2FA or report suspicious activity.",
  },
  {
    icon: <FaCogs className="text-3xl text-indigo-600" />,
    title: "Device Support",
    description: "Help with Kindle, Echo, Fire TV setup.",
  },
];

const AmazonHelpCenter = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div
      className={`py-12 px-4 sm:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0d0d0d]" : "bg-white"
      }`}
    >
      <h2
        className={`text-3xl font-bold text-center mb-10 ${
          theme === "dark" ? "text-yellow-400" : "text-gray-800"
        }`}
      >
        Welcome to Amazon Customer Service
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {helpTopics.map((topic, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 transition-all hover:shadow-lg ${
              theme === "dark"
                ? "bg-[#1a1a1a] border border-gray-700 text-yellow-100"
                : "bg-gray-50 border border-gray-200 text-gray-700"
            }`}
          >
            <div className="mb-4 flex justify-center">{topic.icon}</div>
            <h3
              className={`text-xl font-semibold mb-2 text-center ${
                theme === "dark" ? "text-yellow-300" : "text-gray-800"
              }`}
            >
              {topic.title}
            </h3>
            <p
              className={`text-sm text-center ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {topic.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazonHelpCenter;
