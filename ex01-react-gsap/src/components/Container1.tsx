import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Container1 = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  // wait until DOM has been rendered
  useEffect(() => {
    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
    gsap.to(q(".box"), {
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="container container-1" ref={el}>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
};

export default Container1;
