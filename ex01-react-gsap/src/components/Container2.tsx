import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Container2 = () => {
  const [toggle, setToggle] = useState(false);
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const timeline = useRef<GSAPTimeline>();
  // wait until DOM has been rendered
  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .to(q(".box"), { rotate: 360 })
      .to(q(".circle"), { x: 100 });
  }, []);

  useEffect(() => {
    if (timeline.current !== undefined) {
        timeline.current.reversed(toggle);
    }
  }, [toggle]);

  return (
    <div className="container  container-2" ref={el}>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <div className="box"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Container2;
