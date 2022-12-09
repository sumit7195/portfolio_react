import React from 'react';
import Typewriter from "typewriter-effect";


const UseTypingText = () => {
    return (
      <div className="typing">
        <Typewriter
            options={{
    strings: ['Hi', 'I Am Sumit Kumar', 'Full Stack Developer'],
    autoStart: true,
    loop: true,
  }}


          onInit={(typewriter) => {
            typewriter

              .typeString("Hi")

              .pauseFor(1000)
              .deleteAll()
              .typeString("I Am Sumit Kumar")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Full Stack Developer")
              .deleteAll()
              .start();
          }}
        />
      </div>
    );
}

export default UseTypingText;
