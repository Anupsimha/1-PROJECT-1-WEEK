import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { assets } from "../../assets/assets";
import Sidebar from "./Sidebar"; // Import Sidebar

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home"); // Default active tab
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  return (
    <>
      <nav className="min-w-full p-4 pt-6 absolute top-0 mb-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left - Logo */}
          <img src={assets.logo} alt="Web Logo" className="w-28 cursor-pointer" />

          {/* Center - Navbar Links (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-14 text-white text-xl bg-gray-300/50 py-3 px-5 rounded-3xl font-normal">
            {["Home", "Resume", "About", "Showcase", "Contact"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer px-5 py-1 rounded-3xl transition-all duration-300 
                  ${activeTab === item ? "bg-gray-400/50 text-white" : "hover:text-gray-300"}
                `}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Right - Menu Button (Mobile) */}
          <button
            className="text-white font-bold px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}>
            <CiMenuBurger size={30} className="w-10" strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Sidebar Component */}
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
    </>
  );
};

export default Navbar;
