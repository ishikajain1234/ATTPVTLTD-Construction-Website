import React, {useState, useEffect} from "react";
import "./App.css";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import HeroSection from "./comp/HeroSection";
import About from "./comp/About";
import OurServices from "./comp/OurServices";
import Contactus from "./comp/Contactus";
import Flow from "./comp/Flow";
import Reviews from "./comp/Reviews";
import Projects from "./comp/Projects";
import Preloader from "./comp/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Add 'hidden' class to preloader after a short delay to ensure smooth transition
      setTimeout(() => {
        document.querySelector(".preloader").classList.add("hidden");
        document.querySelector(".postloading").classList.add("visible");
      }, 200); // Wait a bit to ensure preloader fully disappears
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`postloading ${!isLoading ? "visible" : ""}`}>
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
        <div id="project">
          <Projects />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="contact">
          <Contactus />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
      {!isLoading && <div className="preloader"></div>}
    </>
  );
}

export default App;
