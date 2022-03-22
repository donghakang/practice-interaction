import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Container3 = () => {
  const [x, setX] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement>(null);

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: x,
    });
  }, [x]);

  return (
    <div className="container container-3">
      <button onClick={() => setX(gsap.utils.random(-200, 200, 1, true))}>
        Pass in randomized value
      </button>
      <div className="box" ref={boxRef}></div>
    </div>
  );
};

export default Container3;
