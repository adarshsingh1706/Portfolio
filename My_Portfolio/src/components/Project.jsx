import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import ProjectData from "./ProjectData";
import React from "react";

const Project = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {/* using map method to render projects accordingly */}
        {ProjectData.map((val, index) => {  //currentvalue,index
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              open={val.open}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
