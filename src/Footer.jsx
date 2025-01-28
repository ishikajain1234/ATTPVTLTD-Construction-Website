import { Landmark } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex">
           <Landmark/> Civil-Site</h2>
          <p className="text-gray-400">
            Building dreams with precision and expertise. Civil-Site is your
            trusted partner for all construction needs.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#projects" className="text-gray-400 hover:text-white">
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="text-gray-400 mb-2">Your Address, Your City</li>
            <li className="text-gray-400 mb-2">
              Email: contact@civil-site.com
            </li>
            <li className="text-gray-400">Phone: +91 xxxx-xxx-xxx</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Civil-Site. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
