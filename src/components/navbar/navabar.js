import React from "react";

import icon from "./sumitLogo.png";

const Navabar = () => {
  return (
    <nav>
      <div className="main">
        <div className="icon_img">
          <img src={icon} width="50px" alt="this is logo" />
        </div>

        <ul className="list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navabar;
