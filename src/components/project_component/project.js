import React from "react";


import project_data from "./project_detail";

const Project = () => {
  

 
 

  return (
    <>
      <h1 className="projects_ele">Projects</h1>

      <div className="project_div" id="project">
        {project_data.map((el) => (
          <div className="project_div2">
            <div className="project_img">
              <img src={el.img} alt={el.heading_1} width="400px" />
            </div>

            <div className="inner_div">
              <h1>{el.heading_1}</h1>
              <p className="heading_2">{el.heading_2}</p>
              <p className="tech_stack">{el.tech_stack}</p>
              <div className="btn_link">
                <a href={el.deployed_link} target="_blank" rel="noreferrer">
                  {" "}
                  <div className="deployed_link">Link</div>{" "}
                </a>
                <a href={el.git_link} target="_blank" rel="noreferrer">
                  <div className="deployed_link">Code</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
