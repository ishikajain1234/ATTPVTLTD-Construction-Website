import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with 1-second duration and triggers only once
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Main About Section */}
      <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-700 to-gray-900 p-6 shadow-2xl">
        {/* Image Section */}
        <div
          className="md:w-1/2 flex justify-center"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <img
            src="/photo.jpg"
            alt="Construction"
            className="w-3/5 h-auto rounded-2xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div
          className="md:w-1/2 flex flex-col items-start p-6"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          {/* Experience & Projects */}
          <p className="text-2xl font-bold text-blue-400 mb-2">
            25+ Years of Experience | 10+ Projects
          </p>

          <h2 className="text-4xl font-bold text-white mb-4">About Our Construction</h2>
          <p className="text-gray-300 mb-6">
            At our company, we take pride in crafting modern, high-quality structures that prioritize safety, innovation, and sustainability. 
            With years of experience, our expert team is dedicated to bringing your vision to life, exceeding expectations in every project we undertake.
          </p>
          <p className="text-gray-300 mb-6">
            From residential to commercial projects, we ensure attention to detail, timely delivery, and exceptional customer satisfaction. 
            Let us help you build a future you can trust.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:scale-105 transition-all">
              Socials
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:scale-105 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
