import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
      offset: 120,
    });
  }, []);
  return (
    <>
      <Navbar />
            <HeroSection/>

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </>
  );
}
