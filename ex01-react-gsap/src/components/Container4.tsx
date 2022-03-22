import React from "react";
import { gsap } from "gsap";

const Container4 = () => {
  const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.currentTarget, { backgroundColor: "#8074ff" });
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.currentTarget, { backgroundColor: "#ff8074" });
  };

  return (
    <div className="container container-4">
      <span>HOVER</span>
      <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}></div>
    </div>
  );
};

export default Container4;
