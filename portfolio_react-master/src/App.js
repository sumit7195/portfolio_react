import React from "react";
import About from "./components/about/about";

import Home from "./components/home";
import Project from "./components/project_component/project";
import "./components/portfolio.scss";

function App() {
  return (
    <>
      <Home />
      <About />
      <Project />
    </>
  );
}

export default App;
