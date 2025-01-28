import React, { useState } from "react";
import { Home, Info, Briefcase, Mail, Landmark, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Clickable Civil-Site Logo */}
        <a href="/" className="flex items-center gap-2 text-2xl font-bold hover:text-gray-300 transition duration-300">
          <Landmark size={28} /> Civil-Site
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
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

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 text-lg">
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
      )}
    </nav>
  );
};

export default Navbar;
