import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Home from "./components/home"
import Project from "./components/project_component/project";
function App() {
  return (
    <>
      <Home />
      <About />
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
