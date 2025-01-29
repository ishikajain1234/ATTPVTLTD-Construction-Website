import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Home, Info, Briefcase, Mail, Landmark, Menu, X} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle scrolling to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // smooth scroll
      });
    }
  };

  // Handle logo click to scroll to "hero" section
  const handleLogoClick = () => {
    navigate("/"); // This will navigate to home page
    scrollToSection("hero"); // Then scroll to the "hero" section
  };

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Civil-Site Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <Landmark size={28} className="text-white" /> Civil-Site
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer"
          >
            <Home size={20} /> Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer"
          >
            <Info size={20} /> About
          </li>
          <li
            onClick={() => scrollToSection("services")}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer"
          >
            <Briefcase size={20} /> Services
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer"
          >
            <Mail size={20} /> Contact
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 text-lg">
          <li
            onClick={() => {
              scrollToSection("hero");
              setIsOpen(false);
            }}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer"
          >
            <Home size={20} /> Home
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer"
          >
            <Info size={20} /> About
          </li>
          <li
            onClick={() => {
              scrollToSection("services");
              setIsOpen(false);
            }}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer"
          >
            <Briefcase size={20} /> Services
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer"
          >
            <Mail size={20} /> Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
