import { useState } from 'react'
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Work from "./routes/Work";
import HireMe from "./routes/HireMe";

import {Route,Routes} from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/hireme" element={<HireMe/>}/>

      </Routes> 


 

    </>
  )
}

export default App
