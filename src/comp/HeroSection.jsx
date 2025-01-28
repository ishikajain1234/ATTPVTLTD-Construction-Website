import React, {useState, useEffect} from "react";
import backgroundImage from "../assets/wp1842344.jpg";
import Contactusbutton from "./Contactusbutton";
import styled from "styled-components";

const TextGradient = styled.h1`
  font-size: 6rem; /* Increased font size */
  font-weight: 800;
  background: linear-gradient(90deg, #ffffff 0%, #d4af37 50%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
  line-height: 1.2;
`;

const ParagraphGradient = styled.p`
  background: linear-gradient(90deg, #ffffff 0%, #d4af37 50%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  line-height: 1.8;
  letter-spacing: 0.05em;
`;

const HeroSection = () => {
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, []);

  return (
    <section
      className="w-full bg-cover bg-center flex items-center justify-end text-white relative"
      style={{
        backgroundImage: `linear-gradient(to right, transparent, rgba(0, 0, 0, 0.7) 80%), url(${backgroundImage})`, // Gradient for blackish tint on the right
        height: imageHeight ? `${imageHeight}px` : "auto",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm"></div>
      <div className="relative w-full h-full flex flex-col items-end justify-center text-right p-6 rounded-lg md:w-2/3 lg:w-1/2 xl:w-1/3">
        <TextGradient className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-wider">
          Civil-Site
        </TextGradient>
        <ParagraphGradient className="text-lg md:text-2xl mb-6 ">
          From the ground up, we turn your vision into reality. With precision,
          expertise, and a passion for innovation, we build more than just
          structures—we build the future.
        </ParagraphGradient>
        <div className="flex flex-col md:flex-row gap-4">
          <Contactusbutton label="Contact Us" />
          <Contactusbutton label="Our Work Flow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
