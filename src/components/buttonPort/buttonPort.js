import React from 'react';
import portfolio  from "./sumit kumar resume3.pdf"


const ButtonPort = () => {
    return (
      
        <div className="btn" style={{zIndex:"500"}}>
          <a href={portfolio} download="resume">
            GET CV
          </a>
        </div>
    
    );
}

export default ButtonPort;
