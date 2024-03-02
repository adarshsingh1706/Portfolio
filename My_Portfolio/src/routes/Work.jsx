import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Cards from "../components/Cards";
import Project from "../components/Project";
const Work =() =>{
  return(
    <>
    <Navbar/>
    <Hero2 heading="My Work" text="Few of my recent projects"/>
    <Project/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default Work;