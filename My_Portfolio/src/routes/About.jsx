import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <>
      <Navbar />
      <Hero2 heading="Adarsh Singh" text=" I am an aspiring Full-Stack Developer
      currently pursuing Btech from Vellore Institute Of Technology, India." />
      <AboutContent/>
      <Footer />
    </>
  );
};

export default About;
