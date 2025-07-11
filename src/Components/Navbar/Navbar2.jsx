import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "Category", path: "/catogary" },
  { label: "Up Coming Products", path: "/UpcomingExcitingProducts" },
  { label: "Electronics", path: "/electronics" },
  { label: "Mobiles", path: "/mobiles" },
  { label: "Amazon Prime", path: "/PrimeDayBanner" },
  { label: "Today's Fashion", path: "/Fastion" },
  { label: "Big Billion Days", path: "/BigBillionDays" },
  { label: "McDonald’s", path: "/Megdonels" },
  { label: "Today's Deals", path: "/todays-deals" },
  { label: "Customer Service", path: "/customer-service" },

];

const Navbar2 = () => {
  return (
    <div
      className="sticky top-20 z-50 bg-[#1f2a36] text-white px-4 py-2 overflow-x-auto whitespace-nowrap"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#1f2a36 transparent",
      }}
    >
      <div
        className="inline-flex space-x-8"
        style={{
          overflow: "hidden",
        }}
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-white border-b-2 border-yellow-400 pb-1"
                : "text-gray-300 hover:text-white"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Webkit scrollbar styling */}
      <style>{`
    div::-webkit-scrollbar {
      height: 6px;
    }
    div::-webkit-scrollbar-track {
      background: transparent;
    }
    div::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 10px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  `}</style>
    </div>
  );
};

export default Navbar2;
