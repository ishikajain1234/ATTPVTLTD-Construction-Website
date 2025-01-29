import "./App.css";
import Navbar from "./comp/navbar";
import Footer from "./comp/Footer";
import HeroSection from "./comp/HeroSection";
import About from "./comp/About";
import OurServices from "./comp/OurServices";
import Contactus from "./comp/Contactus";
import Flow from "./comp/Flow";
import Reviews from "./comp/Reviews";
import Projects from "./comp/Projects";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <OurServices></OurServices>
      <Flow></Flow>
      <Projects></Projects>
      <Reviews></Reviews>
      <Contactus></Contactus>
      <Footer></Footer>
    </>
  );
}

export default App;
