import React from "react";
import backgroundImage from "../assets/wp1842344.jpg";
import Contactusbutton from "./Contactusbutton";
import styled, { keyframes } from "styled-components";

// Keyframes for fade-in and slide-up effect
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px); /* Initially below */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Final position */
  }
`;

// Styled Components for Gradient Effects
const TextGradient = styled.h1`
  font-size: clamp(3rem, 6vw, 6rem); /* Responsive font size */
  font-weight: 800;
  background: linear-gradient(90deg, #000000 0%, #000000 50%, #000000 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1em;
  line-height: 1.2;
  animation: ${fadeInUp} 1.5s ease-out; /* Animation applied */
`;

const ParagraphGradient = styled.p`
  background: linear-gradient(90deg, #000000 0%, #000000 50%, #000000 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  line-height: 1.8;
  letter-spacing: 0.05em;
  font-size: clamp(1rem, 2vw, 1.25rem); /* Adjusts based on screen size */
  animation: ${fadeInUp} 1.5s ease-out 0.5s; /* Delay for paragraph animation */
`;

const HighlightText = styled.span`
  color: #ff6600; /* Orange color for emphasis */
  font-weight: bold;
  font-size: 1.2rem; /* Larger font size for emphasis */
`;

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[80vh] md:h-[70vh] flex items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Gradient Overlay for Beautiful Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center p-6 max-w-3xl">
        <TextGradient className="text-5xl md:text-7xl font-extrabold mb-6">
          Civil-Site
        </TextGradient>
        <ParagraphGradient className="text-lg md:text-2xl mb-6">
          From the ground up, we turn your vision into reality. With precision,
          expertise, and a passion for innovation, we build more than just
          structures—we build the future. Our <HighlightText>focus</HighlightText> is on
          creating lasting relationships, and our <HighlightText>commitment</HighlightText>
          to quality is unmatched.
        </ParagraphGradient>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="group relative">
            <Contactusbutton label="Contact Us" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
          </div>
          <div className="group relative">
            <Contactusbutton label="Our Work Flow" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
