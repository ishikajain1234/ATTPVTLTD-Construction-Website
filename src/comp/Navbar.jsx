import React from "react";
import { Home, Info, Briefcase, Mail, Landmark } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Clickable Civil-Site Logo */}
        <a href="/" className="flex items-center gap-2 text-2xl font-bold hover:text-gray-300 transition duration-300">
          <Landmark size={28} /> Civil-Site
        </a>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg">
          <li className="flex items-center gap-2 hover:text-yellow-400 transition duration-300 cursor-pointer">
            <Home size={20} /> Home
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-400 transition duration-300 cursor-pointer">
            <Info size={20} /> About
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-400 transition duration-300 cursor-pointer">
            <Briefcase size={20} /> Services
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-400 transition duration-300 cursor-pointer">
            <Mail size={20} /> Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
