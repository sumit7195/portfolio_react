import React from "react";

import about from "./about-us.png";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNpm, FaBootstrap } from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { SiPostman, SiExpress } from "react-icons/si";
import { IconContext } from "react-icons";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about_img">
          <img src={about} alt="this is about  icon" />
        </div>
        <div className="intro">
          <h1>LET ME INTRODUCE MY SELF</h1>
          <p>
            Hi, Myself Sumit Kumar. I am fullstack-Webdeveloper. I have hands-on
            knowledge of React, NodeJs , Javascript, HTML, CSS etc. I like to
            learn new Technologies and available to collaborate in open source
            Projects or hire.
          </p>
        </div>
      </div>

      <h1 className="stack">TechStack</h1>
      <IconContext.Provider value={{ color: "blue", size: "3em" }}>
        <div className="react_icons">
          <div>
            <AiFillHtml5 className="react_icons_inner" />
          </div>
          <div>
            <FaCss3Alt className="react_icons_inner" />
          </div>
          <div>
            <DiJavascript className="react_icons_inner" />
          </div>
          <div>
            <FaReact className="react_icons_inner" />
          </div>
          <div>
            <DiMongodb className="react_icons_inner" />
          </div>

          <div>
            <FaNpm className="react_icons_inner" />
          </div>

          <div>
            <FaBootstrap className="react_icons_inner" />
          </div>

          <div>
            <SiPostman className="react_icons_inner" />
          </div>
          <div>
            <SiExpress className="react_icons_inner" />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default About;
