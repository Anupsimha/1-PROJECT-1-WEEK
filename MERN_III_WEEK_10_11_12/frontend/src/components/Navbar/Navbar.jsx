import React, { useState } from "react"; 
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home"); // Default active tab is "Home"

  return (
    <nav className="min-w-full p-4 pt-6 absolute top-0 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <img src={assets.logo} alt="Web Logo" className="w-28" />

        {/* Center - Navbar Links */}
        <ul className="hidden md:flex space-x-14 text-white text-xl bg-gray-300/50 py-3 px-5 rounded-3xl font-normal">
          {["Home", "Resume", "About", "Showcase", "Contact"].map((item) => (
            <li
            key={item}
            className={`cursor-pointer px-5 py-1 rounded-3xl transition-all duration-300 
              ${
                activeTab === item
                  ? "bg-gray-400/50 text-white"  // Active state
                  : "hover:text-gray-300"
              }
            `}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </li>
          ))}
        </ul>

        {/* Right - Button */}
        <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
