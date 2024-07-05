import { useState } from 'react'
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Work from "./routes/Work";
import HireMe from "./routes/HireMe";
import {Route,Routes} from "react-router-dom";
import './App.css'
import Certificates from './routes/Certificates';
import Resume from './routes/Resume';
import certificate1 from './assets/certificate1.jpg'
import aws from './assets/AWS.png'

function App() {
  const certificates = [
    {
      image: certificate1,
      title: 'Oracle Cloud Infrastructure',
      description: 'Oracle Cloud Infrastructure',
    },
    {
      image: aws,
      title: 'Certificate 2',
      description: 'AWS For Beginners',
    },
    // Add more certificates as needed
  ];

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/hireme" element={<HireMe/>}/>
      <Route path="/certificates" element={<Certificates certificates={certificates}/>}/>
      <Route path="/resume" element={<Resume/>}/>


      </Routes> 


 

    </>
  )
}

export default App
