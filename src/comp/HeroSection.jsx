import React, {useState, useEffect} from "react";
import backgroundImage from "../assets/shivendu-shukla-3yoTPuYR9ZY-unsplash (1).jpg";
import Contactusbutton from "./Contactusbutton";
import styled from "styled-components";

const TextGradient = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #ffffff 0%, #d4af37 50%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  line-height: 1.2;
`;

const ParagraphGradient = styled.p`
  background: linear-gradient(90deg, #ffffff 0%, #d4af37 50%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0.02em;
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
      className="w-full bg-cover bg-center flex items-center justify-start text-white relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: imageHeight ? `${imageHeight}px` : "auto",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm"></div>
      <div className="relative w-full h-full flex flex-col items-start justify-center text-left p-6 rounded-lg md:w-2/3 lg:w-1/2 xl:w-1/3">
        <TextGradient className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-wider">
          Civil-Site
        </TextGradient>
        <ParagraphGradient className="text-lg md:text-2xl mb-6 leading-relaxed">
          From the ground up, we turn your vision into reality. With precision,
          expertise, and a passion for innovation, we build more than just
          structures—we build the future.
        </ParagraphGradient>
        <Contactusbutton />
      </div>
    </section>
  );
};

export default HeroSection;
