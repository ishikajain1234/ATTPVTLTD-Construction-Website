import React from "react";
import "./App.css";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import HeroSection from "./comp/HeroSection";
import About from "./comp/About";
import OurServices from "./comp/OurServices";
import Contactus from "./comp/Contactus";
import Flow from "./comp/Flow";
import Reviews from "./comp/Reviews";
import Project from "./comp/Project";

function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <OurServices />
      </div>
     
      <div id="workflow">
        <Flow />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Contactus />
      </div>
      <Footer />
    </>
  );
}

export default App;
