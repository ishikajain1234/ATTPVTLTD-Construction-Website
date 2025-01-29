import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Aboutbuttons from "./Aboutbuttons";
import img from "../assets/aboutsectionimg.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative flex flex-col md:flex-row items-center text-white p-4 py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(69,61,17,1) 0%, rgba(0,0,0,1) 50%, rgba(69,61,17,1) 100%)",
      }}
    >
      {/* Image Section */}
      <div
        className="md:w-1/2 flex justify-center"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <img
          src={img}
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
        <p className="text-4xl font-bold text-yellow-400 mb-2">
          25+ Years of Experience | 10+ Projects
        </p>

        <h2 className="text-4xl font-bold text-white mb-4">
          About Our Company...
        </h2>
        <p className="text-gray-300 mb-6">
          At our company, we take pride in crafting modern, high-quality
          structures that prioritize safety, innovation, and sustainability.
          With years of experience, our expert team is dedicated to bringing
          your vision to life, exceeding expectations in every project we
          undertake.
        </p>
        <p className="text-gray-300 mb-6">
          From residential to commercial projects, we ensure attention to
          detail, timely delivery, and exceptional customer satisfaction. Let us
          help you build a future you can trust.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Aboutbuttons text="Socials" targetSection="footer" />
          <Aboutbuttons text="Contact us" targetSection="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
