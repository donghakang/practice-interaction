import React, { useEffect, useRef } from "react";

// Animation
import "./App.scss";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Container4 from "./components/Container4";

function App() {
  return (
    <div className="app">
      <h1>GSAP</h1>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

export default App;
