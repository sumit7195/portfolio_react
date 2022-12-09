import React from "react";

import project_data from "./project_detail";



const Project = () => {
  return (
    <div className="  py-4" id="project" style={{ marginTop: "10rem" }}>
      <p className="text-center port-fs-lg port-fw-lg ">Projects</p>
      <div
        className="row  gap-2 gy-5 gx-5 justify-content-around  mt-5 "
        id="project"
      >
        {project_data.map((el) => (
          <div className="col-4 d-flex flex-column port-border port-radius px-0 box-shadow ">
            <div className="w-100" style={{borderRadius:"8px 8px 0 0"}} >
            <img src={el.img} alt="project" width="100%" height="100%" style={{objectFit:"fill", borderRadius:"8px 8px 0 0"}} />
            </div>
            <div className="d-flex flex-column text-center">
              <h1>{el.heading_1}</h1>
              <p className="heading_2">{el.heading_2}</p>
              <p className="tech_stack">{el.tech_stack}</p>
              <div className="d-flex justify-content-center gap-2 my-2">
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
    </div>
  );
};

export default Project;
