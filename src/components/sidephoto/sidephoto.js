import React from 'react';
import pic from "./Picsart_22-02-18_00-29-04-200-modified.jpg";
import ButtonPort from "../buttonPort/buttonPort";
const Sidephoto = () => {
    
    
    return (
      <div className="sidephoto">
        <div className='innerphoto'>
          <img src={pic} alt="this is icon" />
        </div>

         <ButtonPort/>

      </div>
    );
}

export default Sidephoto;
