import Whatsapp from "@/socials icons/Whatsapp";
import Instagram from "@/socials icons/Instagram";
import { Landmark } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "@/socials icons/Linkedin";
import Facebook from "@/socials icons/Facebook";
import X from "@/socials icons/X";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-6 relative">
      {/* Social Media Section (Centered on top) */}
      <div className="flex justify-center mb-8 relative z-10 gap-10">
        <Instagram />
        <Whatsapp />
        <Linkedin />
        <Facebook />
        <X />
      </div>

      {/* Footer Content Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex justify-center md:justify-start items-center gap-2">
            <Landmark size={24} /> Civil-Site
          </h2>
          <p className="text-gray-400">
            Building dreams with precision and expertise. Civil-Site is your
            trusted partner for all construction needs.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Your Address, Your City</li>
            <li>Email: contact@civil-site.com</li>
            <li>Phone: +91 xxxx-xxx-xxx</li>
          </ul>
        </div>
      </div>

      {/* Made By Section */}
      <div className="text-center mt-6 text-gray-400">
        Made with ❤️ by Ishika & Arjun
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Civil-Site. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
