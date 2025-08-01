import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Drinks from "./components/Drinks";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Drinks />
      <About />
      <Art />
      <Menu />
      <Footer />
    </main>
  );
};

export default App;
