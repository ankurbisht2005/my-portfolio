import { useState } from "react";
import "./App.css";
import Navbars from "./include/Navbars";
import HeroSection from "./menu/HomeSection";
import Project from "./menu/Project";
import ResumeSection from "./menu/Resume";
import About from "./menu/About";
import Contact from "./menu/Contact";
import Footer from "./include/Footer";

function App() {
  return (
    <>
      <div>
        <Navbars />
      </div>
      <section className="mt-16">
        <HeroSection />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <ResumeSection />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
