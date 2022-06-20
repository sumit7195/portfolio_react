import React from "react";

import {FaGithub} from "react-icons/fa";

 
const Contact = () => {
  return (
    <div id="contact">
      <div className="contact_main">
        <label>Send email:</label>

        <a
          href="mailto:sumitrai4418@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          sumitrai4418@gmail.com
        </a>

        <lable>Mobile:</lable>
        <a href="tel:+918800457195">+91:8800457195</a>

        <div className="git_icons"></div>

        <a href="https://github.com/sumit7195">
          <FaGithub />
        </a>
      </div>
    </div>
  );

};

export default Contact;
