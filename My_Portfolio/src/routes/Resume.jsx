import React from "react";
import resume from '../assets/resume.png'
import style from '../components/Resume.module.css'
const Resume = ()=>{
  return(
    <>
     <img className={style.centeredResume} src={resume}/>
    </>
  )
}

export default Resume;