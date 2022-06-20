import React from 'react';
import portfolio  from "./Sumit Kumar Resume.pdf"


const ButtonPort = () => {
    return (
      
        <div className="btn">
          <a href={portfolio} download="resume">
            GET CV
          </a>
        </div>
    
    );
}

export default ButtonPort;
